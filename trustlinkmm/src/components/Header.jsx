import {
    Box,
    Typography,
    Container,
    IconButton,
    Button,
} from "@mui/material"

import {
    Language as LanguageIcon,
    ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";

import { Link } from "react-router-dom"

import CompanyLogo from "../images/logo-1 3.png"

export default function Header() {
    return (
        <Box>
            <Box sx={{
                height: 100,
                display: "flex",
                alignItems: "center",
            }}>
                <Container maxWidth="lg">
                    <Button>
                        <img src={CompanyLogo} alt="Company Logo" width="400" height="60"/>
                    </Button>
                </Container>
            </Box>

            <Box sx={{
                width: "100%",
                height: "60px",
                backgroundColor: "#74b683",
            }}>
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    // border: "1px solid",
                }}>
                <Container maxWidth="lg"  >
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <Box sx={{
                            display: "flex",
                            // gap: "35px",
                            height: "60px",
                           
                        }}>
                            <Box sx={{
                                width: "120px",
                                '&:hover': {
                                    background: "#588f27",
                                    color: "#ffffff",
                                    fontWeight: 800,
                                }, 
                                
                            }}>
                                <Link style={{ 
                                    textDecoration: "none", 
                                    height: "100%", 
                                    display: "flex", 
                                    justifyContent: "center", 
                                    alignItems: "center",
                                }}>
                                    <Typography sx={{
                                        fontSize: "13px",
                                        color: "#f5f5dc", 
                                        '&:hover': {
                                            color: "#ffffff",
                                            fontWeight: 600,
                                        }, 
                                       
                                    }}>
                                        Submit ticket
                                    </Typography>
                                </Link>
                            </Box>

                            <Box sx={{
                                width: "80px",
                                '&:hover': {
                                    background: "#588f27",
                                    color: "#ffffff",
                                    fontWeight: 800,
                                }, 
                                
                            }}>
                                <Link style={{ 
                                    textDecoration: "none", 
                                    height: "100%", 
                                    display: "flex", 
                                    justifyContent: "center", 
                                    alignItems: "center",
                                }}>
                                    <Typography sx={{
                                        fontSize: "13px",
                                        color: "#f5f5dc", 
                                        '&:hover': {
                                            color: "#ffffff",
                                            fontWeight: 600,
                                        }, 
                                       
                                    }}>
                                        Login
                                    </Typography>
                                </Link>
                            </Box>

                            
                        </Box>
                        <Box>
                            <Box sx={{
                                '&:hover': {
                                    background: "#588f27",
                                }, 
                            }}>
                                <IconButton sx={{
                                    color: "#f5f5dc", 
                                    
                                }}>
                                    <LanguageIcon />
                                    <ArrowDropDownIcon />
                                </IconButton>
                            </Box>
                        </Box>

                    </Box>
                </Container>
                </Box>
            </Box>

            
        </Box>
    )
}