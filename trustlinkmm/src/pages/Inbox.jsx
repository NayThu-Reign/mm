import {
    Box,
    Typography,
    Button,
    IconButton,

} from "@mui/material"
import AppDrawer from "../components/AppDrawer"

export default function Inbox() {
    return (
        <Box sx={{display: "flex"}}>
            <AppDrawer />
            <Box>
                <Typography>Hello</Typography>
            </Box>
        </Box>
    )
}