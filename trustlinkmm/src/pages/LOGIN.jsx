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
    const userNameRef = useRef();
	const passwordRef = useRef();

    const [category, setCategory] = useState("");

	const { setAuth, setAuthUser } = useAuth();
	const navigate = useNavigate();

	const [hasError, setHasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;

        if (!userName || !password) {
            setHasError(true);
            setErrorMessage("Invalid login details");
            return;
        }

        try {
            const api = "http://192.168.11.106:3000";
            const res = await fetch(`${api}/api/login`, {
                method: "POST",
                body: JSON.stringify({ userName, password }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();
            
            if (!res.ok) {
                setErrorMessage(data.msg || "Incorrect username or password");
                setHasError(true);
                return;
            }

            localStorage.setItem("token", data.token);
            setAuth(true);
            setAuthUser(data.user);  // Ensure that the data returned from the API includes user details
            navigate("/home");

        } catch (error) {
            console.error("Login failed:", error);
            setErrorMessage("Login failed. Please try again.");
            setHasError(true);
        }
    };

    return (
        <Box>
            <Box sx={{
                width: "100%",
                height: "100%",
                background: "#f2f4f8",
            }}>
                <Box>
                    <Container maxWidth="lg">
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingTop: "50px",
                        }}>
                            <Typography sx={{
                                fontSize: "35px",
                                color: "#788288",
                            }}>
                                How can we help you?
                            </Typography>
                            <Box sx={{
                                width: "100%",
                                paddingLeft: "60px",
                                paddingRight: "60px",
                                marginTop: "10px",
                                marginBottom: "30px",
                            }}>
                                <Box sx={{ 
                                    width: "100%", 
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
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Search"
                                        sx={{ 
                                            backgroundColor: 'white',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'transparent', 
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'transparent',
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
                        }}>
                            <Box sx={{
                                width: "350px",
                            }}>
                                <form onSubmit={handleLogin}>
                                    {hasError && (
                                        <Alert
                                            severity="warning"
                                            sx={{ mb: 4 }}>
                                            {errorMessage}
                                        </Alert>
                                    )}
                                    <TextField
                                        label="Username"
                                        fullWidth
                                        sx={{ mb: 2 }}
                                        inputRef={userNameRef}
                                    />
                                    <TextField
                                        label="Password"
                                        fullWidth
                                        type="password"
                                        sx={{ mb: 2 }}
                                        inputRef={passwordRef}
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
