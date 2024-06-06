import { Outlet } from "react-router-dom"

import { Box, Container, GlobalStyles, CssBaseline } from "@mui/material"
import Footer from "./components/Footer"
import Header from "./components/Header"
export default function Layout() {
    return (
        <Box>
            <CssBaseline />
            <GlobalStyles styles={{ body: { overflowX: "hidden" } }} />
            <Header />
            <Outlet />
            <Footer />
        </Box>
    );
}