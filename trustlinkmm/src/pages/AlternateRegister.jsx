import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

const Register = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phoneNo: '',
        password: '',
        userType: 'User', // Default user type
    });

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (response.status === 200) {
                setMessage(data.message);
                setError(null);
            } else {
                setError(data.error.details);
                setMessage(null);
            }
        } catch (error) {
            setError('Failed to register. Please try again later.');
            setMessage(null);
        }
    };

    return (
        <Box
            component="form"
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
        >
            <Typography variant="h5" gutterBottom>
                Register
            </Typography>
            <TextField
                label="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Username"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Phone Number"
                name="phoneNo"
                value={form.phoneNo}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                fullWidth
            >
                Register
            </Button>
            {message && <Alert severity="success">{message}</Alert>}
            {error && (
                <Box>
                    {error.map((err, index) => (
                        <Alert key={index} severity="error">{err.message}</Alert>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default Register;
