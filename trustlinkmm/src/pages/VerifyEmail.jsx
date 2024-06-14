import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Box, CircularProgress } from '@mui/material';

const VerifyEmail = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await fetch(`/api/verify-email/${token}`, {
                    method: 'GET',
                });

                if (response.status === 200) {
                    setMessage('Email verified successfully!');
                } else {
                    setMessage('Failed to verify email.');
                }
            } catch (error) {
                setMessage('An error occurred. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        verifyEmail();
    }, [token]);

    useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() => {
                navigate('/login');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [loading, navigate]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
            {loading ? (
                <CircularProgress />
            ) : (
                <Typography variant="h6" color="primary">{message}</Typography>
            )}
        </Box>
    );
};

export default VerifyEmail;
