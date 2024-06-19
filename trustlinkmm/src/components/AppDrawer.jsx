import { 
    Drawer, 
    Box, 
    Avatar, 
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";

import {
    Home as HomeIcon,
    Person as ProfileIcon,
    PersonAdd as RegisterIcon,
    Login as LoginIcon,
    Logout as LogoutIcon,
} from "@mui/icons-material";

import { pink, blue, grey } from "@mui/material/colors";

import { useNavigate } from "react-router-dom";

import { useUIState } from "../providers/UIStateProvider";
import { useAuth } from "../providers/AuthProvider";

export default function AppDrawer() {
	const { openDrawer, setOpenDrawer } = useUIState();
    const { auth, setAuth, authUser, setAuthUser } = useAuth();

    const navigate = useNavigate();

	return (
		<Box
            sx={{
                width: 250, // Set width of the drawer
                height: "100vh", // Adjust height minus the header height
                overflowY: 'auto', // Enable vertical scrolling within the sidebar
                // padding: 2, // Adjust padding as needed
                backgroundColor: '#ffffff', // Optional

                '&::-webkit-scrollbar': {
    width: '8px', // Width of the scrollbar
    height: '8px', // Height of the scrollbar
    backgroundColor: '#f5f5f5', // Background color of the scrollbar track
    borderRadius: '4px', // Border radius of the scrollbar track
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888', // Color of the scrollbar thumb
    borderRadius: '4px', // Border radius of the scrollbar thumb
  },
            }}
        >
            <Box sx={{ width: "100%"}}>
                <List sx={{ width: "100%" }}>
                    <Typography>Folders</Typography>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                </List>
                <List sx={{ width: "100%" }}>
                    <Typography>Folders</Typography>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                </List>
                <List sx={{ width: "100%" }}>
                    <Typography>Folders</Typography>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                </List>
                <List sx={{ width: "100%" }}>
                    <Typography>Folders</Typography>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                    <ListItem disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemText primary="Menu Item 1" />
                        </ListItemButton>
                    </ListItem>
                   
                </List>
            </Box>
        </Box>
	);
}
