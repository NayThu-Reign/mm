import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const TicketList = () => {
    const [userTickets, setUserTickets] = useState([]);
    const [userSolvedTickets, setUserSolvedTickets] = useState([]);
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [sortBy, setSortBy] = useState(null); // null or 'createdDate' or 'modifiedDate'
    const [currentPage, setCurrentPage] = useState(1);
    const [ticketsPerPage, setTicketsPerPage] = useState(5);

    useEffect(() => {
        fetchUserTickets();
        fetchUserSolvedTickets();
    }, []);

    const fetchUserTickets = async () => {
        try {
            // Fetch user tickets from API
            // Replace with your actual API call
            const token = localStorage.getItem('token');
            const api = import.meta.env.VITE_API_URL;
            const response = await fetch(`${api}/api/tickets`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const data = await response.json();
            const authUserTickets = data.filter(ticket => ticket.issuerId === authUser.id && ticket.status !== "Closed");
            setUserTickets(authUserTickets);
        } catch (error) {
            console.error('Error fetching user tickets:', error);
        }
    };

    const fetchUserSolvedTickets = async () => {
        try {
            // Fetch user solved tickets from API
            // Replace with your actual API call
            const token = localStorage.getItem('token');
            const api = import.meta.env.VITE_API_URL;
            const response = await fetch(`${api}/api/tickets`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const data = await response.json();
            const authUserSolvedTickets = data.filter(ticket => ticket.issuerId === authUser.id && ticket.status === "Closed");
            setUserSolvedTickets(authUserSolvedTickets);
        } catch (error) {
            console.error('Error fetching user solved tickets:', error);
        }
    };

    const handleMenuOpen = (event) => {
        setShowMenu(true);
        setMenuPosition(event.currentTarget);
    };

    const handleMenuClose = () => {
        setShowMenu(false);
    };

    const handleSortBy = (field) => {
        setSortBy(field);
        setShowMenu(false);
    };

    // Sorting logic
    const sortTickets = (tickets, sortByField) => {
        if (sortByField === 'createdDate') {
            return [...tickets].sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));
        } else if (sortByField === 'modifiedDate') {
            return [...tickets].sort((a, b) => new Date(a.modifiedDate) - new Date(b.modifiedDate));
        }
        return tickets; // Default order
    };

    // Pagination logic
    const indexOfLastTicket = currentPage * ticketsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;

    const currentTickets = () => {
        let sortedTickets = [];

        if (filteredTickets.length > 0) {
            sortedTickets = sortTickets(filteredTickets, sortBy);
        } else if (userSolvedTickets.length > 0) {
            sortedTickets = sortTickets(userSolvedTickets, sortBy);
        } else {
            sortedTickets = sortTickets(userTickets, sortBy);
        }

        return sortedTickets.slice(indexOfFirstTicket, indexOfLastTicket);
    };

    const totalTickets = () => {
        if (filteredTickets.length > 0) {
            return filteredTickets.length;
        } else if (userSolvedTickets.length > 0) {
            return userSolvedTickets.length;
        } else {
            return userTickets.length;
        }
    };

    const totalPages = Math.ceil(totalTickets() / ticketsPerPage);

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : prevPage));
    };

    const handleTicketsPerPageChange = (value) => {
        setTicketsPerPage(value);
        setCurrentPage(1);
        handleMenuClose();
    };

    return (
        <Box>
            <Box sx={{
                display: "flex",
                gap: "60px",
                alignItems: "center",
                marginBottom: "40px",
            }}>
                <Button
                    variant="contained"
                    endIcon={<UnfoldMoreIcon />}
                    onClick={handleMenuOpen}
                    sx={{
                        backgroundColor: "transparent",
                        border: "1px solid #808080",
                        color: "#808080",
                        '&:hover': {
                            backgroundColor: "#f8fbff",
                        },
                    }}
                >
                    Sort by
                </Button>
                <Menu
                    anchorEl={menuPosition}
                    open={showMenu}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    PaperProps={{
                        sx: {
                            maxHeight: 200,
                            width: "200px",
                            overflow: "auto",
                            marginLeft: "90px",
                        },
                    }}
                >
                    <MenuItem onClick={() => handleSortBy('modifiedDate')}>
                        <ListItemText primary="Modified Date" />
                        {sortBy === 'modifiedDate' && <CheckIcon />}
                    </MenuItem>
                    <MenuItem onClick={() => handleSortBy('createdDate')}>
                        <ListItemText primary="Creation Date" />
                        {sortBy === 'createdDate' && <CheckIcon />}
                    </MenuItem>
                </Menu>
            </Box>

            {/* Display tickets */}
            <TableContainer component="div">
                <Table aria-label="customized table" sx={{ borderLeft: "none", borderRight: "none" }}>
                    <TableHead sx={{ background: "#f8fbff" }}>
                        <TableRow>
                            <TableCell align="center">Ticket hash</TableCell>
                            <TableCell align="center">Subject</TableCell>
                            <TableCell align="center">Department</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Priority</TableCell>
                            <TableCell align="center">Type</TableCell>
                            <TableCell align="center">Submitted by</TableCell>
                            <TableCell align="center">Creation Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentTickets().map(ticket => (
                            <TableRow key={ticket.id}>
                                <TableCell align="center">
                                    <Link to={`/tickets/ticket-detail/${ticket.id}`} style={{ textDecoration: "none", color: "#000000" }}>
                                        TL - {ticket.id}
                                    </Link>
                                </TableCell>
                                <TableCell align="center">{ticket.subject}</TableCell>
                                <TableCell align="center">{ticket.department}</TableCell>
                                <TableCell align="center">{ticket.status}</TableCell>
                                <TableCell align="center">{ticket.priority}</TableCell>
                                <TableCell align="center">{ticket.type}</TableCell>
                                <TableCell align="center">{ticket.submittedBy}</TableCell>
                                <TableCell align="center">{new Date(ticket.createdDate).toLocaleDateString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination controls */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button variant="outlined" disabled={currentPage === 1} onClick={handlePreviousPage}>
                    Previous
                </Button>
                <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>
                    Page {currentPage} of {totalPages}
                </Typography>
                <Button variant="outlined" disabled={currentPage === totalPages} onClick={handleNextPage}>
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default TicketList;
