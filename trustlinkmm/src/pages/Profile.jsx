import {
    Box,
    Typography
} from "@mui/material"

import { Link } from "react-router-dom"

export default function Profile() {
    return (
        <Box>
            <Typography>Hello</Typography>
            <Link to="/client/update-profile">Update</Link>
            <Link to="/client/change-password">Change</Link>
        </Box>
    )
}