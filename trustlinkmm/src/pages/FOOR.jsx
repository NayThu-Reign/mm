import React, { useRef, useState, useEffect } from 'react';
import { Button, CircularProgress, TextField, Box, Typography, Alert } from '@mui/material';

const ForgotPassword = () => {
    const userCredRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [userCred, setUserCred] = useState('');
    const [resendDisabled, setResendDisabled] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let timerInterval;
        if (timer > 0) {
            timerInterval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            setResendDisabled(false);
        }

        return () => clearInterval(timerInterval);
    }, [timer]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setResendDisabled(true);
        setTimer(60); // Set timer to 60 seconds

        try {
            const userCred = userCredRef.current.value;
            setUserCred(userCred); // Store the userCred for resending

            const response = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userCred }),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            const data = await response.json();
            setMessage(data.message);
            setError('');
        } catch (error) {
            console.error('Error sending email:', error);
            setError('Failed to send email');
            setMessage('');
        } finally {
            setLoading(false);
        }
    };

    const handleResendEmail = async () => {
        setLoading(true);

        try {
            const response = await fetch('/api/resend-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userCred }), // Use the stored userCred
            });

            if (!response.ok) {
                throw new Error(`Failed to resend email: ${response.statusText}`);
            }

            const data = await response.json();
            setMessage(data.message);
            setError('');
        } catch (error) {
            setError('Failed to resend email. Please try again.');
            console.error('Error resending email:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Forgot Password
            </Typography>
            <form onSubmit={handleFormSubmit}>
                <TextField
                    label="Username or Email"
                    fullWidth
                    margin="normal"
                    inputRef={userCredRef}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : 'Send Email'}
                </Button>
            </form>
            {message && (
                <Alert severity="success" sx={{ mt: 2 }}>
                    {message}
                </Alert>
            )}
            {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                    {error}
                </Alert>
            )}
            {resendDisabled && (
                <Typography variant="body2" sx={{ mt: 2 }}>
                    You can request to send email again in {formatTime(timer)}
                </Typography>
            )}
            {!resendDisabled && (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleResendEmail}
                    disabled={loading}
                    sx={{ mt: 2 }}
                >
                    {loading ? <CircularProgress size={24} /> : 'Resend Email'}
                </Button>
            )}
        </Box>
    );
};

export default ForgotPassword;
