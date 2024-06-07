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
    Menu,
    ListItemIcon,
	ListItemText,

    // MenuItem,
    // Alert,
} from "@mui/material"

import {
    Search as SearchIcon,
    ArrowDropDown as ArrowDropDownIcon,
    Refresh as RefreshIcon,
	Delete as DeleteIcon,

} from "@mui/icons-material"

import { Link, useNavigate } from "react-router-dom"
import { useRef, useState } from "react";

const generateRandomCaptcha = () => {
    // This should be replaced with a real CAPTCHA generation logic
    const randomString = Math.random().toString(36).substring(2, 8);
    return `https://via.placeholder.com/150x50?text=${randomString}`;
};

export default function Register() {

    const [captchaImage, setCaptchaImage] = useState(generateRandomCaptcha());

    const handleRefreshClick = () => {
        setCaptchaImage(generateRandomCaptcha());
    };

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


    const [anchorEl, setAnchorEl] = useState(null);
    const [sortBy, setSortBy] = useState('Sort By');


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (option) => {
        setSortBy(option);
        setAnchorEl(null);
    };

    const menuOptions = ['Option 1', 'Option 2', 'Option 3'];

    const [showMenu, setShowMenu] = useState(false);
	const [menuPosition, setMenuPosition] = useState(null);




    // const [imageURL, setImageURL] = useState(generateRandomImageURL());

    // // Function to generate a random image URL
    // function generateRandomImageURL() {
    //     // Replace this with your logic to generate a random image URL
    //     return `https://source.unsplash.com/random/200x100?verify=${Math.random()}`;
    // }

    // // Function to handle refresh icon click
    // function handleRefreshClick() {
    //     // Generate a new random image URL and update the state
    //     setImageURL(generateRandomImageURL());
    // }


   


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
                                    
                                }}>Register</Typography>
                                <Typography sx={{ color: "#788288" }}>
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                        <Typography component="span" sx={{ color: "#3097d2" }}>
                                            Home 
                                        </Typography>
                                    </Link>
                                     / Register
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
                                <Button
                                    variant="contained"
                                    endIcon={<ArrowDropDownIcon />}
                                    onClick={e => {
                                        setShowMenu(true);
                                        setMenuPosition(e.currentTarget)
                                    }}
                                    sx={{
                                        mb: 2,
                                        backgroundColor: "#74b683",
                                        '&:hover': {
                                            backgroundColor: "#74b683",
                                        },
                                    }}
                                >
                                    {sortBy}
                                </Button>
                                <Menu
                                    anchorEl={menuPosition}
                                    open={showMenu}
                                    
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    onClose={() => {
                                        setShowMenu(false);
                                    
                                    
                                    }}
                                    
                                    slotProps={{
                                        paper: {
                                            sx: {
                                                maxHeight: 200,
                                                width: "200px",
                                                overflow: "auto",
                                            },
                                        }
                                    }}
                                
                                
                                >
                                
                                <MenuItem
									onClick={() => {
										const api = import.meta.env
											.VITE_API_URL;
										fetch(`${api}/posts/${post._id}`, {
											method: "DELETE",
										});

										remove(post._id);
									}}

                                    sx={{
                                        height: 50,
                                        marginBottom: "20px",
                                    }}
                                    
                                    
                                >
									<ListItemIcon>
										<DeleteIcon color="error" />
									</ListItemIcon>
									<ListItemText primary="Delete" />
								</MenuItem>
                                <MenuItem
									onClick={() => {
										const api = import.meta.env
											.VITE_API_URL;
										fetch(`${api}/posts/${post._id}`, {
											method: "DELETE",
										});

										remove(post._id);
									}}>
									<ListItemIcon>
										<DeleteIcon color="error" />
									</ListItemIcon>
									<ListItemText primary="Delete" />
								</MenuItem>
                                <MenuItem
									onClick={() => {
										const api = import.meta.env
											.VITE_API_URL;
										fetch(`${api}/posts/${post._id}`, {
											method: "DELETE",
										});

										remove(post._id);
									}}>
									<ListItemIcon>
										<DeleteIcon color="error" />
									</ListItemIcon>
									<ListItemText primary="Delete" />
								</MenuItem>
                                <MenuItem
									onClick={() => {
										const api = import.meta.env
											.VITE_API_URL;
										fetch(`${api}/posts/${post._id}`, {
											method: "DELETE",
										});

										remove(post._id);
									}}>
									<ListItemIcon>
										<DeleteIcon color="error" />
									</ListItemIcon>
									<ListItemText primary="Delete" />
								</MenuItem>
                                <MenuItem
									onClick={() => {
										const api = import.meta.env
											.VITE_API_URL;
										fetch(`${api}/posts/${post._id}`, {
											method: "DELETE",
										});

										remove(post._id);
									}}>
									<ListItemIcon>
										<DeleteIcon color="error" />
									</ListItemIcon>
									<ListItemText primary="Delete" />
								</MenuItem>
                                <MenuItem
									onClick={() => {
										const api = import.meta.env
											.VITE_API_URL;
										fetch(`${api}/posts/${post._id}`, {
											method: "DELETE",
										});

										remove(post._id);
									}}>
									<ListItemIcon>
										<DeleteIcon color="error" />
									</ListItemIcon>
									<ListItemText primary="Delete" />
								</MenuItem>
                                </Menu>
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

                                        if ( !firstName || !lastName || !email || !userName || !password || !confirmPassword || !contactNumber || imageVerification) {
                                            setHasError(true);
                                            setErrorMessage("Invalid register details");
                                            return false;
                                        }

                                
                                }}>

                                    {hasError && (
                                        <Alert
                                            severity="warning"
                                            sx={{ mb: 4 }}>
                                            {errorMsessage}
                                        </Alert>
                                    )}
                                    
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>First Name</label>
                                        </Box>
                                        <Box>
                                            <TextField
                                                // label="Email"
                                                // fullWidth
                                                sx={{ 
                                                    width: "750px",
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

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Last Name</label>
                                        </Box>
                                        <Box>
                                            <TextField
                                                // label="Email"
                                                // fullWidth
                                                sx={{ 
                                                    width: "750px",
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

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Email</label>
                                        </Box>
                                        <Box>
                                            <TextField
                                                // label="Email"
                                                // fullWidth
                                                sx={{ 
                                                    width: "750px",
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

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>User Name</label>
                                        </Box>
                                        <Box>
                                            <TextField
                                                // label="Email"
                                                // fullWidth
                                                sx={{ 
                                                    width: "750px",
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

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Password</label>
                                        </Box>
                                        <Box>
                                            <TextField
                                                // label="Email"
                                                // fullWidth
                                                sx={{ 
                                                    width: "750px",
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

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Confirm Password</label>
                                        </Box>
                                        <Box>
                                            <TextField
                                                // label="Email"
                                                // fullWidth
                                                sx={{ 
                                                    width: "750px",
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

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Contact Number</label>
                                        </Box>
                                        <Box>
                                            <TextField
                                                // label="Email"
                                                // fullWidth
                                                sx={{ 
                                                    width: "750px",
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
                                    {/* <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Image Verification</label>
                                        </Box>
                                        <Box>
                                            <TextField
                                                // label="Email"
                                                // fullWidth
                                                sx={{ 
                                                    width: "750px",
                                                    // height: "100%",
                                                    // mb: 2,
                                                    // border: "1px solid",
                                                    display: "flex",
                                                    border: "1px solid",
                                                    
                                                    backgroundColor: 'white',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                        borderColor: "black",
                                                        },
                                                    },
                                                    '& .MuiInputBase-input': {
                                                            height: '20px', // Adjust the height here
                                                            padding: '8px', // Adjust the padding to make it vertically centered
                                                        },
                                                    
                                                }}
                                                inputRef={emailRef}
                                            />
                                        </Box>
                                    </Box> */}




                                    {/* <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Image Verification</label>
                                        </Box>
                                        <Box>
                                            <TextField
                                                sx={{ 
                                                    width: "450px",
                                                    display: "flex",
                                                    border: "1px solid",
                                                    backgroundColor: 'white',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: "black",
                                                        },
                                                    },
                                                }}
                                                value={imageURL}
                                                InputProps={{
                                                    endAdornment: (
                                                        <IconButton onClick={handleRefreshClick}>
                                                            <RefreshIcon />
                                                        </IconButton>
                                                    ),
                                                }}
                                            />
                                        </Box>
                                    </Box> */}

<Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "10px",
                marginLeft: "30px",
            }}>
                <Box sx={{
                    width: "150px",
                    display: "flex",
                    justifyContent: "flex-end",
                }}>                                           
                    <label style={{ color: "#808080", fontSize: "15px" }}>Image Verification</label>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={captchaImage} alt="captcha" style={{ marginRight: '10px' }} />
                    <IconButton onClick={handleRefreshClick}>
                        <RefreshIcon />
                    </IconButton>
                </Box>
                <Box>
                    <TextField
                        sx={{ 
                            width: "750px",
                            display: "flex",
                            backgroundColor: 'white',
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: "black",
                                },
                            },
                        }}
                        inputRef={imageVerificationRef}
                    />
                </Box>
            </Box>

                                    <Box sx={{
                                        marginLeft: "180px",
                                        marginTop: "20px",
                                        width: "90px",
                                    }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                height: "45px",
                                                background: "#74b683",
                                                textTransform: 'none',
                                                fontSize: "15px",
                                                '&:hover': {
                                                    backgroundColor: "#74b683", 
                                                    
                                                  },
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