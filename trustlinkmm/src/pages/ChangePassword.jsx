import React, { useState, useRef } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

import { useAuth } from '../providers/AuthProvider';

const ChangePassword = () => {
    const { auth } = useAuth();
    const oldPasswordRef = useRef();
    const newPasswordRef = useRef();
    const confirmPasswordRef = useRef();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const oldPassword = oldPasswordRef.current.value;
        const newPassword = newPasswordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (newPassword !== confirmPassword) {
            setError("New passwords do not match");
            return;
        }

        try {
            const response = await fetch(`/api/users/${auth.user.id}/change_password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`,
                },
                body: JSON.stringify({ oldPassword, newPassword }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setError('');
            } else {
                setError(data.error.message || 'Error updating password');
                setMessage('');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            setMessage('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '400px', margin: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant="h6">Change Password</Typography>
            <TextField
                label="Old Password"
                type="password"
                inputRef={oldPasswordRef}
                required
            />
            <TextField
                label="New Password"
                type="password"
                inputRef={newPasswordRef}
                required
            />
            <TextField
                label="Confirm New Password"
                type="password"
                inputRef={confirmPasswordRef}
                required
            />
            <Button type="submit" variant="contained" color="primary">Change Password</Button>
            {message && <Typography color="green">{message}</Typography>}
            {error && <Typography color="red">{error}</Typography>}
        </Box>
    );
};

export default ChangePassword;
