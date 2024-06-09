import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Avatar, Alert } from '@mui/material';
import { useAuth } from '../providers/AuthProvider';

export default function Profile() {
  const { auth, setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchUserDetails = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/user/details', {
        headers: {
          'Authorization': `Bearer ${auth.token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAuth((prevState) => ({
          ...prevState,
          user: data.user,
        }));
        setIsLoading(false);
      } else {
        const errorData = await response.json();
        setHasError(true);
        setErrorMessage(errorData.message || 'Failed to fetch user details');
        setIsLoading(false);
      }
    } catch (error) {
      setHasError(true);
      setErrorMessage('An error occurred while fetching user details');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchUserDetails();
    }
  }, [auth.isAuthenticated]);

  return (
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : hasError ? (
        <Alert severity="error">{errorMessage}</Alert>
      ) : (
        <Box>
          <Avatar src={auth.user.photoUrl} alt={auth.user.name} />
          <Typography variant="h6">{auth.user.name}</Typography>
        </Box>
      )}
    </Box>
  );
}
