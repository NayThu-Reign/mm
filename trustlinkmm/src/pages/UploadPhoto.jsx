import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Import your AuthContext
import { Button, Typography, Box, Alert, CircularProgress } from '@mui/material';

const UploadPhoto = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { authUser, setAuthUser } = useContext(AuthContext); // Use AuthContext

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');

        if (!file) {
            setError('Please select a file.');
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_UPLOAD_SECRET}` // Make sure you set this in your environment variables
                },
                body: formData
            });

            const data = await response.json();

            if (response.status === 200) {
                setMessage(data.message);
                console.log('File available at:', data.srcUrl); // Optionally log the URL or do something with it
                
                // Update authUser state
                setAuthUser({ ...authUser, userAvatar: data.srcUrl });
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError('Failed to upload file. Please try again later.');
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
                Upload Photo
            </Typography>
            <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleFileChange}
                required
                style={{ marginBottom: 20 }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
            >
                {loading ? <CircularProgress size={24} /> : 'Upload Photo'}
            </Button>
            {message && <Alert severity="success" sx={{ mt: 2 }}>{message}</Alert>}
            {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        </Box>
    );
};


// setAuthUser({ ...authUser, ...newDetails });

export default UploadPhoto;
