import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useAuth } from '../providers/AuthProvider';

const Login = () => {
    const [userCred, setUserCred] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userCred, password }),
            });

            const data = await res.json();

            if (data.status === 200) {
                setAuth({
                    isAuthenticated: true,
                    token: data.currentUser.token, // Assuming token is included in the response
                    user: data.currentUser,
                });
                localStorage.setItem('token', data.currentUser.token);
                localStorage.setItem('user', JSON.stringify(data.currentUser));
                navigate('/dashboard'); // Navigate to a protected route or dashboard
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred during login');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                bgcolor: 'background.paper',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleLogin} style={{ width: '300px' }}>
                <TextField
                    label="Username or Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={userCred}
                    onChange={(e) => setUserCred(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                    <Typography color="error" variant="body2">
                        {error}
                    </Typography>
                )}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default Login;
