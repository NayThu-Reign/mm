import React, { useState, useEffect } from 'react';
import { Box, TableRow, Typography } from '@mui/material';
import { useAuth } from '../providers/AuthProvider';

export default function  ViewTickets ()  {
  const { auth } = useAuth();
  const [userTickets, setUserTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 10;



  const [searchName, setSearchName] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  const handleClear = () => {
    setSearchName('');
    setSelectedDepartment('');
    setSelectedPriority('');
  };

  const filteredTickets = userTickets.filter(ticket =>
    (searchName === '' || ticket.subject.toLowerCase().includes(searchName.toLowerCase())) &&
    (selectedDepartment === '' || ticket.department.toLowerCase() === selectedDepartment.toLowerCase()) &&
    (selectedPriority === '' || ticket.priority.toLowerCase() === selectedPriority.toLowerCase())
  );

  useEffect(() => {
    const fetchUserTickets = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/tickets');
        const data = await response.json();
        
        // Filter tickets to show only the ones belonging to the authenticated user
        const authUserTickets = data.filter(ticket => ticket.issuerId === auth.user.id);
        setUserTickets(authUserdTickets);
      } catch (error) {
        console.error('Error fetching user tickets:', error);
      }
    };

    if (auth.isAuthenticated) {
      fetchUserTickets();
    }
  }, [auth, currentPage]);

  const totalPages = Math.ceil(userTickets.length / ticketsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  return (
    <Box>
      <Typography variant="h2">Your Tickets</Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        {/* Search Name Input */}
        <TextField
          label="Search by Name"
          variant="outlined"
          value={searchName}
          onChange={handleSearchNameChange}
        />
        
        {/* Department Selection */}
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Department</InputLabel>
          <Select
            value={selectedDepartment}
            onChange={handleDepartmentChange}
            label="Department"
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="HR">HR</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            {/* Add more departments as needed */}
          </Select>
        </FormControl>
        
        {/* Priority Selection */}
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Priority</InputLabel>
          <Select
            value={selectedPriority}
            onChange={handlePriorityChange}
            label="Priority"
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            {/* Add more priorities as needed */}
          </Select>
        </FormControl>
        
        {/* Clear and Search Buttons */}
        <Button variant="outlined" onClick={handleClear}>Clear</Button>
        <Button variant="contained" color="primary">Search</Button>
      </Box>
      <TableContainer 
                component={Paper} 
                style={{ 
                    borderTop: '1px solid #f2f4f8', 
                    borderBottom: '1px solid #f2f4f8',
                    borderLeft: 'none',
                    borderRight: 'none',
                    border: "1px solid",
                }}
            >
                <Table aria-label="customized table" sx={{ borderLeft: "none", borderRight: "none" }}>
                    <TableHead sx={{ background: "#f8fbff",}}>
                        <TableRow>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Ticket hash
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Subject
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Department
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Status
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Priority
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Type
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Submitted by
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Creation Date
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                   {filteredTickets.length > 0 ? (
                    filteredTickets.map(filteredTicket => (
                        <TableRow key={ticket.id} mb={2} p={2} border="1px solid #ccc">
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                           
                    </TableRow>
                    ))
                   ) : userTickets.length > 0 ? (
                    userTickets.map(ticket => (
                    <TableRow key={ticket.id} mb={2} p={2} border="1px solid #ccc">
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{ticket.hash}</TableCell>
                           
                    </TableRow>
                    ))
                ) : (
                    <Typography>No tickets found.</Typography>
                )}
                   
                   

                    
                            
                    </TableBody>
                </Table>
        </TableContainer>

        <Box sx={{
                        // marginTop
                        display: "flex",
                        width: "200px",
                        border: "1px solid #808080",
                        // fontSize: "13px",
                    }}>
                        <Button 
                            disabled={currentPage === 1} 
                            onClick={handlePreviousPage}
                        
                        sx={{
                            width: "40%",
                            fontSize: "10px",
                            color: "#808080",
                        }}>
                            Previous
                        
                        </Button>
                        <Typography 
                            component="span" 
                            sx={{ 
                                background: "#74b683", 
                                width: "20%", 
                                height: "100%", 
                                // textAlign: "center", 
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#ffffff",
                            }}>
                                {/* Page {currentPage} of {totalPages} */}
                                {currentPage}
                        </Typography>
                        <Button 
                        
                        disabled={currentPage === totalPages} 
                        onClick={handleNextPage}
                        
                        sx={{
                            width: "40%",
                            fontSize: "10px",
                            color: "#808080",
                        }}>
                            Next
                        </Button>

                    </Box>
     
    </Box>
  );
};

