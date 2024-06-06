import {
    Box,
    Container,
    Typography,
    TextField, 
    InputAdornment,
    IconButton,
    Button,
} from "@mui/material"

import {
    Search as SearchIcon,
} from "@mui/icons-material"

import { useAuth } from "../providers/AuthProvider"
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function ForgotPassword() {
    const emailRef = useRef();
	// const passwordRef = useRef();

	// const { setAuth, setAuthUser } = useAuth();
	const navigate = useNavigate();

	const [hasError, setHasError] = useState(false);
	const [errorMsessage, setErrorMessage] = useState("");

    return (
        <Box>
            <Box sx={{
                width: "100%",
                height: "200px",
                background: "#f2f4f8",
            }}>
                <Box sx={{ height: "100%"}}>
                    <Container maxWidth="lg" sx={{ height: "100%"}}>
                        <Box sx={{
                             display: "flex",
                             justifyContent: "space-between",
                             alignItems: "center",
                             height: "100%",
                            //  border: "1px solid"
                        }}>
                            <Box>
                                <Typography sx={{ marginBottom: "12px"}}>Forgot Password</Typography>
                                <Typography>
                                    <Link>
                                        <Typography component="span">
                                            Home 
                                        </Typography>
                                    </Link>
                                     / Forgot Password
                                </Typography>
                            </Box>

                            <Box sx={{ width: "40%",}}>
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
                                                
                                                }}
                                            />
                                        
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>

                
            </Box>
            <Box sx={{ marginTop: "60px", marginBottom: "130px" }}>
				<Box>
                    <Container maxWidth="lg">
                           <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                // border: "1px solid",
                           }}>
                                <Box sx={{
                                    width: "400px",

                                }}>
                                    <form
                                            onSubmit={e => {
                                            e.preventDefault();
                                            const email = emailRef.current.value;

                                            if (!email) {
                                                setHasError(true);
                                                setErrorMessage("Invalid login details");
                                                return false;
                                            }

                                            // (async () => {
                                            // 	const api = import.meta.env.VITE_API_URL;
                                            // 	const res = await fetch(`${api}/login`, {
                                            // 		method: "POST",
                                            // 		body: JSON.stringify({ handle, password }),
                                            // 		headers: {
                                            // 			"Content-Type": "application/json",
                                            // 		},
                                            // 	});

                                            // 	if (!res.ok) {
                                            // 		// setErrorMessage( (await res.json()).msg );
                                            // 		setErrorMessage("incorrect handle or password");
                                            // 		setHasError(true);
                                            // 		return false;
                                            // 	}

                                            // 	const data = await res.json();
                                            // 	localStorage.setItem("token", data.token);

                                            // 	fetch(`${api}/verify`, {
                                            // 		headers: {
                                            // 			Authorization: `Bearer ${data.token}`,
                                            // 		},
                                            // 	})
                                            // 		.then(res => res.json())
                                            // 		.then(user => {
                                            // 			setAuth(true);
                                            // 			setAuthUser(user);
                                            // 			navigate("/");
                                            // 		});
                                            // })();
                                        }}>
                                        {hasError && (
                                            <Alert
                                                severity="warning"
                                                sx={{ mb: 4 }}>
                                                {errorMsessage}
                                            </Alert>
                                        )}

                                        <TextField
                                            label="Email"
                                            fullWidth
                                            sx={{ mb: 2 }}
                                            inputRef={emailRef}
                                        />
                                        
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                height: "40px",
                                                background: "#74b683",
                                                textTransform: 'none',
                                                '&:hover': {
                                                    backgroundColor: "#74b683", 
                                                    
                                                  },
                                            }}    
                                            
                                        >
                                            Send
                                        </Button>

                                        <Box sx={{ marginTop: "20px"}}>
                                            <Link>
                                                <Typography sx={{
                                                    textAlign: "center"
                                                }}>
                                                    Back to login
                                                </Typography>
                                            </Link>
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