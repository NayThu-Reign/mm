import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';

const ForgotPassword = () => {
    const [userCred, setUserCred] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [resendEnabled, setResendEnabled] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');
        setResendEnabled(false);

        try {
            const response = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userCred })
            });

            const data = await response.json();

            if (response.status === 200) {
                setMessage(data.message);
                setResendEnabled(true); // Enable resend button after successful email
            } else {
                setError(data.error.message);
            }
        } catch (error) {
            setError('Failed to send reset email. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        setLoading(true);
        setMessage('');
        setError('');

        try {
            const response = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userCred })
            });

            const data = await response.json();

            if (response.status === 200) {
                setMessage(data.message);
            } else {
                setError(data.error.message);
            }
        } catch (error) {
            setError('Failed to resend reset email. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <Typography variant="h5" component="h1" gutterBottom>
                Forgot Password
            </Typography>
            <TextField
                label="Username or Email"
                variant="outlined"
                fullWidth
                value={userCred}
                onChange={(e) => setUserCred(e.target.value)}
                required
                sx={{ mb: 2 }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
            >
                {loading ? 'Sending...' : 'Send Reset Email'}
            </Button>
            {message && <Alert severity="success" sx={{ mt: 2 }}>{message}</Alert>}
            {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            {resendEnabled && (
                <Button
                    onClick={handleResend}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    sx={{ mt: 2 }}
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Resend Email'}
                </Button>
            )}
        </Box>
    );
};

export default ForgotPassword;
