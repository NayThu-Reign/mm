import React, { useState } from 'react';
import { Box, IconButton, TextField, Typography, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [resultTickets, setResultTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchExecuted, setSearchExecuted] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setError('');
        setResultTickets([]);

        try {
            const response = await fetch('/api/tickets/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: searchQuery }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }

            const data = await response.json();
            setResultTickets(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setError('Failed to fetch search results. Please try again.');
        } finally {
            setLoading(false);
            setSearchExecuted(true);
        }
    };

    return (
        <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Box sx={{
                width: "40%",
                height: "40%",
                margin: 'auto',
                "@media (max-width: 950px)": { width: "100%", marginTop: "30px" },
                "@media (max-width: 765px)": { width: "100%", marginTop: "30px" },
            }}>
                <Box sx={{ width: "100%" }}>
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#ffffff",
                        "@media (max-width: 950px)": { marginBottom: "30px" },
                        "@media (max-width: 765px)": { borderRadius: "30px" },
                    }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Search by ID, Title, Priority, or Status"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            sx={{
                                backgroundColor: 'white',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: 'transparent' },
                                    '&:hover fieldset': { borderColor: 'transparent' },
                                    '&.Mui-focused fieldset': { borderColor: "#74b683" },
                                },
                                "@media (max-width: 765px)": { borderRadius: "30px" }
                            }}
                        />
                        <IconButton onClick={handleSearch} disabled={loading}>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {loading && <CircularProgress sx={{ mt: 3 }} />}

            {error && <Typography color="error" sx={{ mt: 3 }}>{error}</Typography>}

            {searchExecuted && resultTickets.length === 0 && !loading && (
                <Typography variant="h5" sx={{ mt: 3 }}>No Tickets Found</Typography>
            )}

            {resultTickets.length > 0 && (
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h5" gutterBottom>Search Results</Typography>
                    {resultTickets.map((ticket) => (
                        <Box key={ticket.id} sx={{ mb: 2, textAlign: 'left' }}>
                            <Typography><strong>ID:</strong> {ticket.id}</Typography>
                            <Typography><strong>Title:</strong> {ticket.title}</Typography>
                            <Typography><strong>Priority:</strong> {ticket.priority}</Typography>
                            <Typography><strong>Status:</strong> {ticket.status}</Typography>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default SearchComponent;
