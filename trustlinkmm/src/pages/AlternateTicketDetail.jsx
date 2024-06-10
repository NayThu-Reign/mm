import React, { useEffect, useState, useRef } from 'react';
import { Box, FormControl, Input, InputAdornment, IconButton, CircularProgress } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import TicketCard from '../components/TicketCard'; // Assuming you have a TicketCard component




const TicketDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { auth } = useAuth();
    const input = useRef();

    const [isLoading, setIsLoading] = useState(true);
    const [ticket, setTicket] = useState({});
    const [hasUpdate, setHasUpdate] = useState(false);

    const fetchTicketDetails = async () => {
        setIsLoading(true);
        try {
            const api = process.env.REACT_APP_API_URL;
            const res = await fetch(`${api}/tickets/${id}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await res.json();
            setTicket(data);
        } catch (error) {
            console.error('Failed to fetch ticket details:', error);
        } finally {
            setIsLoading(false);
            setHasUpdate(false);
        }
    };

    useEffect(() => {
        fetchTicketDetails();
    }, [hasUpdate]);

    const handleAddComment = async (e) => {
        e.preventDefault();
        const body = input.current.value;
        if (!body) return;

        try {
            const api = process.env.REACT_APP_API_URL;
            const res = await fetch(`${api}/tickets/${ticket.id}/comment`, {
                method: 'POST',
                body: JSON.stringify({ body }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth.token}`
                }
            });
            if (res.ok) {
                setHasUpdate(true);
                input.current.value = '';
            } else {
                console.error('Failed to add comment');
            }
        } catch (error) {
            console.error('Failed to add comment:', error);
        }
    };

    return (
        <Box>
            {isLoading ? (
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <TicketCard ticket={ticket} />

                    <Box sx={{ mt: 3 }}>
                        {ticket.comments.map(comment => (
                            <TicketCard key={comment.id} ticket={comment} />
                        ))}
                    </Box>

                    <Box
                        sx={{
                            p: 2,
                            pb: 3,
                            mt: 4,
                            bottom: 0,
                            position: 'sticky',
                            bgcolor: 'background.paper',
                        }}
                    >
                        <FormControl fullWidth>
                            <form onSubmit={handleAddComment}>
                                <Input
                                    inputRef={input}
                                    sx={{ fontSize: '16px', py: 2 }}
                                    placeholder="Your comment"
                                    multiline
                                    fullWidth
                                    variant="standard"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton type="submit">
                                                <AddIcon color="info" />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </form>
                        </FormControl>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default TicketDetail;
