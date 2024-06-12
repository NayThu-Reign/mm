import { Typography } from "@mui/material"

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

            {filteredTickets.map(filteredTicket => (
                <TableRow key={filteredTicket.id} sx={{
                    "&:hover" : {
                        background: "#f8fbff",
                    }
                }}>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.id}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.title}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.departmentId}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.status}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.priority}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.type}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.issuerId}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>
                        {new Date(filteredTicket.submittedDate).toLocaleDateString('en-US')}
                    </TableCell>
                </TableRow>
            ))      
        }

    </TableBody>
</Table>
</TableContainer>



{filteredTicket.length > 0 ? (
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

            {filteredTickets.map(filteredTicket => (
                <TableRow key={filteredTicket.id} sx={{
                    "&:hover" : {
                        background: "#f8fbff",
                    }
                }}>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.id}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.title}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.departmentId}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.status}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.priority}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.type}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.issuerId}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>
                        {new Date(filteredTicket.submittedDate).toLocaleDateString('en-US')}
                    </TableCell>
                </TableRow>
            ))      
        }

    </TableBody>
</Table>
</TableContainer>
) : (
    showSolvedTickets ? (
        userSolvedTickets.length > 0 ? (
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

            {filteredTickets.map(filteredTicket => (
                <TableRow key={filteredTicket.id} sx={{
                    "&:hover" : {
                        background: "#f8fbff",
                    }
                }}>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.id}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.title}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.departmentId}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.status}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.priority}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.type}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.issuerId}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>
                        {new Date(filteredTicket.submittedDate).toLocaleDateString('en-US')}
                    </TableCell>
                </TableRow>
            ))      
        }

    </TableBody>
</Table>
</TableContainer>
        ) : (
            <Typography>Nothing to display yet</Typography>
        )) : (
            userUnsolvedTickets.length > 0 ? (
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

            {filteredTickets.map(filteredTicket => (
                <TableRow key={filteredTicket.id} sx={{
                    "&:hover" : {
                        background: "#f8fbff",
                    }
                }}>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.id}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.title}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.departmentId}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.status}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.priority}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.type}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.issuerId}</TableCell>
                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>
                        {new Date(filteredTicket.submittedDate).toLocaleDateString('en-US')}
                    </TableCell>
                </TableRow>
            ))      
        }

    </TableBody>
</Table>
</TableContainer>
            ) : (
                <Typography>Nothing to display yet</Typography>
            )
        )) }