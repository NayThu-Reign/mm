import {
    Box,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Container,
    Link,
    TextField,
    Avatar,
    Alert,
    FormControl,
    Select,

} from "@mui/material"

import {
    Search as SearchIcon,
    Computer as ComputerIcon,
    StarOutline as StarOutlineIcon,
    AccessAlarms as AccessAlarmsIcon,

} from "@mui/icons-material"

import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { format } from 'date-fns';



export default function StatusReport() {
    const priorityRef = useRef();
    const durationRef = useRef();

    const [ priorityCategories, setPriorityCategories ] = useState("");
    const [ durationCategories, setDurationCategories ] = useState("");
    const handlePriorityCategoriesChange = (event) => {
        setPriorityCategories(event.target.value);
    };

    const handleDurationCategoriesChange = (event) => {
        setDurationCategories(event.target.value);
    };

    const [selectedDate, setSelectedDate] = useState(new Date());
    
    return (
        <Box>
             <Box sx={{
                width: "100%",
                height: "200px",
                background: "#f2f4f8",
                // border: "1px solid",
                "@media (max-width: 950px)" : {
                    height: "230px",
                }
            }}>
            <Box sx={{ 
                height: "100%",
                // border: "1px solid",

                
            }}>
            <Container 
                maxWidth="lg" 
                sx={{ 
                    height: "100%",
                    "@media (max-width: 950px)" : {
                    marginBottom: "30px",
                    } 
            }}>
                <Box sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                     height: "100%",
                     "@media (max-width: 950px)" : {
                        display: "block",
                        paddingTop: "30px",
                        
                     }
                    //  border: "1px solid"
                }}>
                    <Box>
                        <Typography sx={{ 
                            marginBottom: "12px",
                            fontSize: "35px",
                            color: "#788288",
                            
                        }}>View tickets</Typography>
                        <Typography sx={{ color: "#788288" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Typography component="span" sx={{ color: "#3097d2" }}>
                                    Home 
                                </Typography>
                            </Link>
                             / View ticket
                        </Typography>
                    </Box>

                    <Box sx={{ 
                        width: "40%",
                        height: "40%",
                        // border: "1px solid",
                        "@media (max-width: 950px)" : {
                            width: "100%",
                            marginTop: "30px",
                        },
                        "@media (max-width: 765px)" : {
                            width: "100%",
                            marginTop: "30px",
                            // border: "1px solid",
                            // borderRadius: "20px",
                        }
                        
                    }}>
                        <Box sx={{
                            width: "100%",
                            // border: "1px solid red"
                        }}>
                            <Box sx={{ 
                                width: "100%", 
                                // border: "1px solid", 
                            
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "#ffffff",
                                "@media (max-width: 950px)" : {
                                    marginBottom: "30px",
                                },

                                "@media (max-width: 765px)" : {
                                    borderRadius: "30px",

                                }
                            }}>
                                <Box>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </Box>
                                    <TextField
                                        // fullWidth
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Search"
                                        // InputProps={{
                                        //     startAdornment: (
                                        //     <InputAdornment position="start">
                                        //         <SearchIcon />
                                        //     </InputAdornment>
                                        //     ),
                                        // }}
                                        sx={{ 
                                            backgroundColor: 'white',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'transparent', // Border color when not focused
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'transparent', // Border color on hover when not focused
                                                },
                                                '&.Mui-focused fieldset': {
                                                borderColor: "#74b683",
                                                },
                                            },

                                            "@media (max-width: 765px)" : {
                                                borderRadius: "30px",
                                            }
                                        
                                        }}
                                    />
                                
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            </Box>

        
            </Box>

            <Container maxWidth="lg">
                <Box sx={{ width: "100%" }}>
                    <Box sx={{
                        display: "flex",
                        gap: "60px"
                    }}>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                // const search = searchRef.current.value

                                const duration = durationRef.current.value;
                                const priority = priorityRef.current.value;

                                
                                (async () => {
                                    try {
                                        const token = localStorage.getItem('token');

                                        const api = import.meta.env.VITE_API_URL;
                                        const filterCriteria = {
                                            duration,
                                            priority,
                                        };
                                        const res = await fetch(`${api}/api/tickets/search`, {
                                            method: 'POST',
                                            body: JSON.stringify(filterCriteria),
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'Authorization': `Bearer ${token}`,

                                            },
                                        });
                                        if (!res.ok) {
                                           
                                            const errorText = await res.text();
                                            throw new Error(`Server error: ${res.status} - ${errorText}`);
                                          }

                                          
                                       
                                       
                                          
                                          
                                          
                                          const data = await res.json();
                                          console.log(data);

                                          const authUserTickets = data.ticket.filter(ticket => ticket.issuerId === authUser.id);

                                        setFilteredTickets(authUserTickets);

                                        if (authUserTickets.length === 0) {
                                            setNothingFilter(true);
                                        }

                                        

                            
                                       
                                            console.log('Ticket filtered successfully');
                                      
                                    } catch (error) {
                                        console.error('Error filtering ticket:', error.message);
                                        setHasError(true);
                                        setErrorMessage("Failed to filter ticket");
                                    }
                                })();    
                                
                            }}  

                        
                        
                        >
                           <Box sx={{ 
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "60px",
                           }}>
                                <Box>
                                        <Box>
                                            <Typography>
                                                Duration
                                            </Typography>
                                        </Box>
                                    <Box sx={{
                                        width: "150px",
                                        "@media(max-width: 750px)": {
                                            width: "100%",
                                        }
                                    }}>
                                            <FormControl fullWidth>
                                                            <Select
                                                                labelId="category-label"
                                                                value={ durationCategories }
                                                                onChange={handleDurationCategoriesChange}
                                                                inputRef={durationRef}
                                                                

                                                            >
                                                                <MenuItem value="Last 30days">last 30days</MenuItem>
                                                                <MenuItem value="last 7days">last 7days</MenuItem>
                                                                <MenuItem value="last 24hours">last 24hours</MenuItem>
                                                                <MenuItem value="custom">Custom</MenuItem>
                                                            </Select>
                                                </FormControl>
                                    </Box>
                                    </Box>

                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <Box>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={(date) => setSelectedDate(date)}
                                                showTimeSelect
                                                dateFormat="Pp"
                                                customInput={<TextField label="Select Date and Time" value={format(selectedDate, 'Pp')} />}
                                            />
                                        </Box>
                                    </Box>
                               <Box>
                                <Box>
                                    <Typography>Status</Typography>
                                </Box>
                               <Box sx={{ 
                                            width: "150px",  
                                                // height: "10px",
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            }
                                    }}>
                                            <FormControl fullWidth>
                                                <Select
                                                    labelId="category-label"
                                                    value={ priorityCategories }
                                                    onChange={handlePriorityCategoriesChange}
                                                    inputRef={priorityRef}
                                                    

                                                >
                                                    <MenuItem value="Critical">Critical</MenuItem>
                                                    <MenuItem value="Moderate">Moderate</MenuItem>
                                                    <MenuItem value="Low">Low</MenuItem>
                                                    <MenuItem value="Medium">Medium</MenuItem>
                                                </Select>
                                            </FormControl>
                                </Box>
                               </Box>

                               <Box>
                                    <Button sx={{
                                        background: "green",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        marginTop: "20px"
                                    }}>
                                        Generate
                                    </Button>
                               </Box>
                           </Box>
                       
                        </form>

                        
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}