import {
    Box,
    Container,
    Typography,
} from "@mui/material"

import { Link, useNavigate } from "react-router-dom"

export default function Footer() {
    return (
        <Box sx={{ 
            height: "60px", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
            // border: "1px solid", 
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // border: "1px solid",
                }}>
                   <Typography >
                        <Link style={{ textDecoration: "none"}}><Typography component="span">Service Desk Software </Typography></Link> by Vision Helpdesk
                    </Typography> 
                </Box>
            </Container>
        </Box>
    )
}