import {
    Box,
    Container,
    Typography,
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

import { useAuth } from "../providers/AuthProvider"
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
    const emailRef = useRef();
	const passwordRef = useRef();
    const [category, setCategory] = useState("");

	// const { setAuth, setAuthUser } = useAuth();
	const navigate = useNavigate();

	const [hasError, setHasError] = useState(false);
	const [errorMsessage, setErrorMessage] = useState(10);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
      };

    return (
        <Box>
            <Box sx={{
                width: "100%",
                height: "200px",
                background: "#f2f4f8",
            }}>
                <Box>
                    <Container maxWidth="lg">
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            // justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "50px",
                        }}
                        
                        >
                            <Typography>How can we help you?</Typography>
                            <Box sx={{
                                width: "100%",
                                paddingLeft: "60px",
                                paddingRight: "60px",
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
                    </Container>
                </Box>
            </Box> 

            <Box sx={{ marginTop: "60px" }}>
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
                                            const password = passwordRef.current.value;

                                            if (!email || !password) {
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
                                        <TextField
                                            label="Password"
                                            fullWidth
                                            type="password"
                                            sx={{ mb: 2 }}
                                            inputRef={passwordRef}
                                        />
                                         <Grid container alignItems="center" sx={{ mb: 2 }}>
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
                                        </Grid>
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
                                            Login
                                        </Button>
                                        </form>
                                    <Box sx={{
                                        marginTop: "15px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                        <Link style={{ textDecoration: "none" }}>
                                            <Typography sx={{ fontSize: "15px" }}>
                                                Forgot Password?
                                            </Typography>
                                        
                                        </Link>
                                    </Box>
                                    <Box sx={{
                                        marginTop: "40px",
                                        marginBottom: "130px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                        <Typography>
                                            Do not have an account?
                                        </Typography>
                                        <Button
                                           variant="outlined"

                                            sx={{
                                                 mt: 2, 
                                                //  background: "#74b683", 
                                                 borderColor: 'black',
                                                 color: 'black',
                                                 textTransform: 'none',
                                                 '&:hover': {
                                                    backgroundColor: '#c8e6c9', 
                                                    borderColor: 'black', 
                                                    color: 'black', 
                                                  },
                                                  fontSize: '16px',
                                                  fontWeight: 'bold',
                                                  letterSpacing: 'normal',
                                            }}
                                            fullWidth
                                            onClick={() => {
                                                navigate("/register");
                                            }}>
                                            Register
                                        </Button>
                                    </Box>

                                </Box>


                           </Box>
                    </Container>
                </Box>
			</Box>


        </Box>
         
    )
}