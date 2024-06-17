import {
    Box,
    Typography,
    Container,
    TextField, 
    InputAdornment,
    IconButton,
    Button,
    Select,
    Alert,
    MenuItem,
    FormControl,
    InputLabel,
    Grid,
} from "@mui/material"

import {
    Search as SearchIcon,
} from "@mui/icons-material"

import { Link, useNavigate } from "react-router-dom"
import { useRef, useState } from "react";

export default function SubmitTicket() {
	const navigate = useNavigate();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const userNameRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
    const contactNumberRef = useRef();
    const imageVerificationRef = useRef();

    const [hasError, setHasError] = useState(false);
	const [errorMsessage, setErrorMessage] = useState("");

    const [ departmentCategories, setDepartmentCategories ] = useState(10);
    const [ ticketCategories, setTicketCategories ] = useState(10);
    const [ priorityCategories, setPriorityCategories ] = useState(10);

	// const { setAuth, setAuthUser } = useAuth();

    const handleDepartmentCategoriesChange = (event) => {
        setDepartmentCategories(event.target.value);
    };

    const handlePriorityCategoriesChange = (event) => {
        setPriorityCategories(event.target.value);
    };

    const handleTicketCategoriesChange = (event) => {
        setTicketCategories(event.target.value);
    };


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
                                    
                                }}>Submit ticket</Typography>
                                <Typography sx={{ color: "#788288" }}>
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                        <Typography component="span" sx={{ color: "#3097d2" }}>
                                            Home 
                                        </Typography>
                                    </Link>
                                     / Submit ticket
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

            <Box sx={{ marginTop: "60px", marginBottom: "100px" }}>
                <Box>
                    <Container maxWidth="lg">
                        <Box sx={{
                             display: "flex",
                             flexDirection: "column",
                             justifyContent: "center",
                             alignItems: "center",
                        }}>
                            <Box sx={{
                                width: "100%",
                                // border: "1px solid"
                            }}>
                                <form
                                     onSubmit={e => {
                                        e.preventDefault();
                                        const firstName = firstNameRef.current.value;
                                        const lastName = lastNameRef.current.value;
                                        const email = emailRef.current.value;
                                        const userName = userNameRef.current.value;
                                        const password = passwordRef.current.value;
                                        const confirmPassword = passwordRef.current.value;
                                        const contactNumber = contactNumberRef.current.value;
                                        const imageVerification = imageVerificationRef.current.value;

                                        const description = editorContent;
        const payload = { title, description, category, files };


                                        if ( !firstName || !lastName || !email || !userName || !password || !confirmPassword || !contactNumber || imageVerification) {
                                            setHasError(true);
                                            setErrorMessage("Invalid register details");
                                            return false;
                                        }


                                        async() => {
                                            try {
                                                const response = await fetch("http://localhost:3000/api/tickets", {
                                                  method: "POST",
                                                  headers: {
                                                    "Content-Type": "application/json",
                                                  },
                                                  body: JSON.stringify(payload),
                                                });
                                          
                                                const result = await response.json();
                                          
                                                if (response.ok) {
                                                  setSuccess("Ticket submitted successfully!");
                                                  setTitle("");
                                                  setDescription("");
                                                  setCategory("");
                                                  navigate("/")
                                                } else {
                                                  setError(result.message || "An error occurred");
                                                }
                                              } catch (error) {
                                                setError("An error occurred while submitting the ticket");
                                              }
                                        }

                                
                                }}>

                                    {hasError && (
                                        <Alert
                                            severity="warning"
                                            sx={{ mb: 4 }}>
                                            {errorMsessage}
                                        </Alert>
                                    )}

                                        {/* <Grid container alignItems="center" sx={{ mb: 2 }}>
                                            <InputLabel id="category-label" sx={{ marginRight: 1 }}>Category</InputLabel>
                                            <FormControl fullWidth>
                                            <Select
                                                labelId="category-label"
                                                value={category}
                                                onChange={handleCategoryChange}
                                            >
                                                <MenuItem value={10}>Category 1</MenuItem>
                                                <MenuItem value={20}>Category 2</MenuItem>
                                                <MenuItem value={30}>Category 3</MenuItem>
                                            </Select>
                                            </FormControl>
                                        </Grid> */}
                                    
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }
                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                            // border: "1px solid",
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Department</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px",  
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            }
                                        }}>
                                        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
  <InputLabel>Department</InputLabel>
  <Select
    value={selectedDepartment}
    onChange={handleDepartmentChange}
    label="Department"
  >
    {selectedDepartment === '' && <MenuItem value="">IT (Placeholder)</MenuItem>}
    {departments.map(department => (
      <MenuItem key={department.id} value={department.name}>{department.name}</MenuItem>
    ))}
  </Select>
</FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }
                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>First Name</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px",
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            }    
                                        }}>
                                            <TextField
                                                // label="Email"
                                                fullWidth
                                                sx={{ 
                                                    // width: "750px",
                                                    // height: "100%",
                                                    // mb: 2,
                                                    // border: "1px solid",
                                                    display: "flex",
                                                    
                                                    backgroundColor: 'white',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                        borderColor: "black",
                                                        },
                                                    },
                                                }}
                                                inputRef={emailRef}
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Last Name</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px",
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            } 
                                            
                                        }}>
                                            <TextField
                                                // label="Email"
                                                fullWidth
                                                sx={{ 
                                                    // width: "750px",
                                                    // height: "100%",
                                                    // mb: 2,
                                                    // border: "1px solid",
                                                    display: "flex",
                                                    
                                                    backgroundColor: 'white',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                        borderColor: "black",
                                                        },
                                                    },
                                                }}
                                                inputRef={emailRef}
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Email</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px",
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            },
                                             
                                        }}>
                                            <TextField
                                                // label="Email"
                                                fullWidth
                                                sx={{ 
                                                    // width: "750px",
                                                    // height: "100%",
                                                    // mb: 2,
                                                    // border: "1px solid",
                                                    display: "flex",
                                                    
                                                    backgroundColor: 'white',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                        borderColor: "black",
                                                        },
                                                    },
                                                }}
                                                inputRef={emailRef}
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }
                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                            // border: "1px solid",
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Priority</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px", 
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            }
                                            
                                        }}>
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="category-label"
                                                value={ priorityCategories }
                                                onChange={handlePriorityCategoriesChange}
                                            >
                                                <MenuItem value={10}>Critical</MenuItem>
                                                <MenuItem value={20}>Moderate</MenuItem>
                                                <MenuItem value={30}>Low</MenuItem>
                                                <MenuItem value={30}>Medium</MenuItem>
                                            </Select>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }
                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Ticket category</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px",
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            } 
                                            
                                        }}>
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="category-label"
                                                value={ ticketCategories }
                                                onChange={handleTicketCategoriesChange}
                                            >
                                                <MenuItem value={10}>Select</MenuItem>
                                                <MenuItem value={20}>PC</MenuItem>
                                                <MenuItem value={30}>Power Supply</MenuItem>
                                                <MenuItem value={40}>Touch Screen</MenuItem>
                                                <MenuItem value={50}>HDD</MenuItem>
                                            </Select>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Subject</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px", 
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            }
                                            
                                        }}>
                                            <TextField
                                                // label="Email"
                                                fullWidth
                                                sx={{ 
                                                    // width: "750px",
                                                    // height: "100%",
                                                    // mb: 2,
                                                    // border: "1px solid",
                                                    display: "flex",
                                                    
                                                    backgroundColor: 'white',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                        borderColor: "black",
                                                        },
                                                    },
                                                }}
                                                inputRef={emailRef}
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Password</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px", 
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            }
                                            
                                        }}>
                                            <TextField
                                                // label="Email"
                                                fullWidth
                                                multiline
                                                rows={6}
                                                sx={{ 
                                                    // width: "750px",
                                                    // height: "500%",
                                                    // mb: 2,
                                                    // border: "1px solid",
                                                    display: "flex",
                                                    
                                                    backgroundColor: 'white',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                        borderColor: "black",
                                                        },
                                                    },
                                                }}
                                                inputRef={emailRef}
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Image Verification</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px", 
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            }
                                            
                                        }}>
                                            <TextField
                                                // label="Email"
                                                fullWidth
                                                sx={{ 
                                                    // width: "750px",
                                                    // height: "100%",
                                                    // mb: 2,
                                                    // border: "1px solid",
                                                    display: "flex",
                                                    
                                                    backgroundColor: 'white',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                        borderColor: "black",
                                                        },
                                                    },
                                                }}
                                                inputRef={emailRef}
                                            />
                                        </Box>
                                    </Box>

                                    <Box sx={{
                                        marginLeft: "180px",
                                        marginTop: "20px",
                                        width: "90px",
                                        "@media (max-width: 750px)" : {
                                            marginLeft: 0,
                                            width: "100%",
                                            // border: "1px solid",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }
                                    }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            // fullWidth
                                            sx={{
                                                height: "45px",
                                                background: "#74b683",
                                                textTransform: 'none',
                                                fontSize: "15px",
                                                '&:hover': {
                                                    backgroundColor: "#74b683", 
                                                    
                                                },
                                                "@media (max-width: 750px)" : {
                                                    width: "100px",
                                                }
                                            }}    
                                            
                                        >
                                            Register
                                        </Button>
                                    </Box>



                                </form>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}