import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthProvider'; // Adjust the import path as necessary
import { useParams } from 'react-router-dom'; // Assuming you're using react-router for routing
import { Box, Typography, CircularProgress } from '@mui/material';

const TicketDetail = () => {
    const { auth } = useAuth();
    const { id } = useParams(); // Get the ticket ID from the URL parameters
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTicket = async () => {
            try {
                const response = await fetch(`/api/tickets/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${auth.token}`,
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error.message || 'Failed to fetch ticket details');
                }

                const data = await response.json();
                setTicket(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTicket();
    }, [id, auth.token]);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Box sx={{ padding: '20px' }}>
            {ticket ? (
                <Box>
                    <Typography variant="h4" gutterBottom>{ticket.title}</Typography>
                    <Typography variant="body1" gutterBottom>{ticket.description}</Typography>
                    <Typography variant="body2" color="textSecondary">Status: {ticket.status}</Typography>
                    <Typography variant="body2" color="textSecondary">Created At: {new Date(ticket.createdAt).toLocaleString()}</Typography>
                    <Typography variant="body2" color="textSecondary">Updated At: {new Date(ticket.updatedAt).toLocaleString()}</Typography>
                    {/* Add more ticket details as needed */}
                </Box>
            ) : (
                <Typography>No ticket found.</Typography>
            )}
        </Box>
    );
};

export default TicketDetail;
