import {
    Box,
    Typography,
    Container,
    IconButton,
    Button,
    Avatar,
    Menu,
    MenuItem,
    ListItemText,
} from "@mui/material"

import {
    Language as LanguageIcon,
    ArrowDropDown as ArrowDropDownIcon,
    Menu as MenuIcon,
} from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom"

import { useState } from "react";

import CompanyLogo from "../images/logo-1 3.png"

import { useAuth } from "../providers/AuthProvider";

export default function Header() {

    // const [ profileCategories, setProfileCategories ] = useState(10);
    // const handleDepartmentCategoriesChange = (event) => {
    //     setDepartmentCategories(event.target.value);
    // };

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);
    const [showSecondChild, setShowSecondChild] = useState(false);
    const [showFirstChild, setShowFirstChild] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
	const [menuPosition, setMenuPosition] = useState(null);
    const [LanguageMenuPosition, setLanguageMenuPosition] = useState(null);
    const [ProfileMenuPosition, setProfileMenuPosition] = useState(null);

    const { auth, setAuth, authUser, setAuthUser } = useAuth([]);


    return (
        <Box>
            <Box sx={{
                height: 100,
                display: "flex",
                alignItems: "center",
            }}>
                <Container maxWidth="lg">
                   <Button 
                        onClick={() => {
                            navigate("/home")
                        }}
                        sx={{
                            "&:hover" : {
                                background: "none",
                            }
                   }}>
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
                        "@media (max-width : 750px)" : {
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }
                    }}>
                       
                        <Box sx={{
                            display: "flex",
                            // gap: "35px",
                            height: "60px",
                            "@media(max-width: 750px)" : {
                                display: "none",
                            }
                           
                        }}>
                            <Box sx={{
                                width: "120px",
                                '&:hover': {
                                    background: "#366d06",
                                    color: "#ffffff",
                                    fontWeight: 800,
                                }, 
                                
                            }}>
                                <Link to="/submit-ticket" style={{ 
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

                            {!authUser && (
                                <Box sx={{
                                    width: "100px",
                                    '&:hover': {
                                        background: "#366d06",
                                        color: "#ffffff",
                                        fontWeight: 800,
                                    }, 
                                    
                                }}>
                                    <Link to="/login" style={{ 
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
                            )}
                            {authUser && (
                                <Box sx={{
                                    width: "100px",
                                    '&:hover': {
                                        background: "#366d06",
                                        color: "#ffffff",
                                        fontWeight: 800,
                                    }, 
                                    
                                }}>
                                    <Link to="/tickets/view-tickets" style={{ 
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
                                            View Tickets
                                        </Typography>
                                    </Link>
                                </Box>
                            )}

                            
                        </Box>
                     
                             <Box 
                             sx={{
                                 display: "flex",
                                 gap: "20px",
                                 "@media(max-width: 750px)" : {
                                    display: "none",
                                 }
                             }}
                         >
                            {authUser && (
                                <Box>
                                 <Button 
                                     endIcon={<ArrowDropDownIcon />}
                                     onClick={e => {
                                         setShowProfile(true);
                                         setMenuPosition(e.currentTarget)
                                     }}
                                     sx={{
                                         textTransform: "none",
                                         color: "#808080",
                                         '&:hover': {
                                             background: "#366d06",
                                         }, 
                                     
                                     }}
                                 >
                                     <Avatar sx={{ 
                                         width: 30,
                                         height: 30,
                                         marginRight: "10px",
                                         background: "#366d06",
                                         fontSize: "15px",
                                     }}>
                                         TA
                                     </Avatar>
                                     {authUser.username}
                                 </Button>
                                 <Menu
                                     anchorEl={menuPosition}
                                     open={showProfile}
                                     
                                     anchorOrigin={{
                                         vertical: "bottom",
                                         horizontal: "left",
                                     }}
                                     transformOrigin={{
                                         vertical: "top",
                                         horizontal: "right",
                                     }}
                                     onClose={() => {
                                         setShowProfile(false);
                                     
                                     
                                     }}
                                     
                                     slotProps={{
                                         paper: {
                                             sx: {
                                                 maxHeight: 200,
                                                 width: "200px",
                                                 overflow: "auto",
                                                 marginLeft: "90px",
                                             },
                                         }
                                     }}
                                 
                                 
                                 >
                                 
                                 <MenuItem
                                     onClick={() => {
                                        navigate(`/client`)
                                     }}
                                     
                                 >
                                     <ListItemText primary="Profile" />
                                 </MenuItem>
                                 <MenuItem
                                     // onClick={() => {
                                     // }}
                                     
                                     
                                 >
                                     <ListItemText primary="Contacts" />
                                 </MenuItem>
                                 <MenuItem
                                     // onClick={() => {
                                     // }}
                                     
                                     
                                 >
                                     <ListItemText primary="Report" />
                                 </MenuItem>
 
                                 <MenuItem
                                     onClick={() => {
 
                                        setAuthUser(null);
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('user');
                                        navigate('/login');
                                     }}
                                     
                                     
                                 >
                                     <ListItemText primary="Logout" />
                                 </MenuItem>
                                 </Menu>
                                </Box>
                            )}
                            
                             <Box sx={{
                                 '&:hover': {
                                     background: "#588f27",
                                 }, 
                             }}>
                                 <IconButton 
                                     onClick={e => {
                                         setShowLanguage(true);
                                         setMenuPosition(e.currentTarget)
                                     }}
                                     sx={{
                                         color: "#f5f5dc", 
                                     
                                     }}
                                 >
                                     <LanguageIcon />
                                     <ArrowDropDownIcon />
                                 </IconButton>
 
                                 <Menu
                                     anchorEl={menuPosition}
                                     open={showLanguage}
                                     
                                     anchorOrigin={{
                                         vertical: "bottom",
                                         horizontal: "left",
                                     }}
                                     transformOrigin={{
                                         vertical: "top",
                                         horizontal: "right",
                                     }}
                                     onClose={() => {
                                         setShowLanguage(false);
                                     
                                     
                                     }}
                                     
                                     slotProps={{
                                         paper: {
                                             sx: {
                                                 maxHeight: 200,
                                                 width: "200px",
                                                 overflow: "auto",
                                                 marginLeft: "90px",
                                             },
                                         }
                                     }}
                                 
                                 
                                 >
                                 
                                 <MenuItem
                                     // onClick={() => {
                                     // 	const api = import.meta.env
                                     // 		.VITE_API_URL;
                                     // 	fetch(`${api}/posts/${post._id}`, {
                                     // 		method: "DELETE",
                                     // 	});
 
                                     // 	remove(post._id);
                                     // }}
                                     
                                 >
                                     <ListItemText primary="English" />
                                 </MenuItem>
                                 <MenuItem
                                     // onClick={() => {
                                     // }}
                                     
                                     
                                 >
                                     <ListItemText primary="Myanmar3" />
                                 </MenuItem>
                                 </Menu>
                                 
                             </Box>
                            </Box>

                            <Box sx={{
                             width: "100%",
                             display: "none",
                             "@media(max-width: 950px)" : {
                                 display: "flex",

                                 // flexDirection: "column",
                                 justifyContent: "flex-end",
                                 paddingTop: "10px",
                                //  alignItems: "center",
                                 // border: "1px solid",
                             }
                        }}>
                            <IconButton
                                    onClick={e => {
                                        setShowMenu(true);
                                        setMenuPosition(e.currentTarget);
                                        
                                    }}
                                    // sx={{ marginRight: "20px"}}
                                    >
                                    <MenuIcon />
                            </IconButton>

                            <Menu
                                    anchorEl={menuPosition}
                                    open={showMenu}
                                    // getContentAnchorEl={null}
                                    // anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                    // transformOrigin={{ vertical: "top", horizontal: "right" }}

                                    // PaperProps={{
                                    //     sx: {
                                    //         width: '100%',  // Full width
                                    //         maxWidth: '100%',  // Ensure it doesn't exceed 100%
                                    //         left: 0,
                                    //         right: 0,
                                    //         top: '50px',  // Adjust as necessary to align under the icon
                                    //         '@media (max-width: 950px)': {
                                    //             left: 0,
                                    //             right: 0,
                                    //         },
                                    //     },
                                    // }}

                                    slotProps={{
                                        paper: {
                                            sx: {
                                                // position: 'fixed',
                                                width: '100%',  // Full viewport width
                                                maxWidth: '100vw',  // Ensure it doesn't exceed viewport width
                                                // maxHeight: 'calc(100vh - 50px)', // Adjusted to fit all items without scroll
                                                maxHeight: 'none', // Disable max height
                                                left: '0',
                                                right: '0',
                                                // top: '100%',  // Adjust as necessary to align under the icon
                                                margin: '0',
                                                borderRadius: '0',  // Remove border radius for full width effect
                                                backgroundColor: "#74b683",
                                                color: "#ffffff",
                                                paddingLeft: "30px",
                                                // transform: 'translateX(-100%)',


                                            },
                                        },
                                    }}
                                    
                                    anchorOrigin={{
                                        vertical: "top",  // Align with the bottom of the logo
                                        horizontal: "left", 
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    onClose={() => {
                                        setShowMenu(false);
                                    }}

                                    // disableScrollLock={true}
                                    // PopperProps={{ disablePortal: true }}

                                    sx={{ marginTop: "50px" }}
                                    
                                    >
                                    <MenuItem
                                        onClick={() => {
                                            navigate("/submit-ticket")

                                            
                                        }}

                                        sx={{
                                            width: '100%',  // Full width for menu items
                                            
                                        }}
                                    
                                        >
                                        <ListItemText primary="Submit Ticket"  sx={{ 
                                            
                                            // textAlign: "center",
                                            '&:hover': {
                                                // backgroundColor: 'primary.main',
                                                color: 'white',
                                            },
                                            
                                        }}/>

                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            navigate("/")

                                            
                                        }}

                                        sx={{
                                            width: '100%',  // Full width for menu items
                                            "& .MuiTypography-root": {
                                                // fontSize: "26px", // Adjust the font size as needed
                                            },
                                            '&:hover': {
                                                // background: "#366d06",
                                                color: 'white',
                                            },
                                        }}
                                    
                                        >
                                        {/* <ListItemIcon >
                                            <DeleteIcon color="error" />
                                        </ListItemIcon> */}
                                        <ListItemText primary="Login"/>
                                    </MenuItem>
                                    {authUser && (
                                <Box>
                                 <Button 
                                     endIcon={<ArrowDropDownIcon />}
                                     onClick={e => {
                                         setShowFirstChild(true);
                                         setProfileMenuPosition(e.currentTarget)
                                     }}
                                     sx={{
                                         textTransform: "none",
                                         color: "#808080",
                                        //  '&:hover': {
                                        //      background: "#366d06",
                                        //  }, 
                                     
                                     }}
                                 >
                                     <Avatar sx={{ 
                                         width: 30,
                                         height: 30,
                                         marginRight: "10px",
                                         background: "#366d06",
                                         fontSize: "15px",
                                     }}>
                                         TA
                                     </Avatar>
                                     {authUser.username}
                                 </Button>
                                 <Menu
                                     anchorEl={ProfileMenuPosition}
                                     open={showFirstChild}
                                     
                                     anchorOrigin={{
                                         vertical: "bottom",
                                         horizontal: "left",
                                     }}
                                     transformOrigin={{
                                         vertical: "top",
                                         horizontal: "right",
                                     }}
                                     onClose={() => {
                                         setShowFirstChild(false);
                                     
                                     
                                     }}
                                     
                                     slotProps={{
                                         paper: {
                                             sx: {
                                                 maxHeight: 200,
                                                 width: "200px",
                                                 overflow: "auto",
                                                 marginLeft: "90px",
                                             },
                                         }
                                     }}
                                 
                                 
                                 >
                                 
                                 <MenuItem
                                     onClick={() => {
                                        navigate(`/client`)
                                     }}
                                     
                                 >
                                     <ListItemText primary="Profile" />
                                 </MenuItem>
                                 <MenuItem
                                     // onClick={() => {
                                     // }}
                                     
                                     
                                 >
                                     <ListItemText primary="Contacts" />
                                 </MenuItem>
                                 <MenuItem
                                     // onClick={() => {
                                     // }}
                                     
                                     
                                 >
                                     <ListItemText primary="Report" />
                                 </MenuItem>
 
                                 <MenuItem
                                     onClick={() => {
 
                                        setAuthUser(null);
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('user');
                                        navigate('/login');
                                     }}
                                     
                                     
                                 >
                                     <ListItemText primary="Logout" />
                                 </MenuItem>
                                 </Menu>
                                </Box>
                            )}

                            <Box>
                                 <IconButton 
                                     onClick={e => {
                                         setShowSecondChild(true);
                                         setLanguageMenuPosition(e.currentTarget)
                                     }}
                                     sx={{
                                         color: "#f5f5dc", 
                                     
                                     }}
                                 >
                                     <LanguageIcon />
                                     <ArrowDropDownIcon />
                                 </IconButton>
 
                                 <Menu
                                     anchorEl={LanguageMenuPosition}
                                     open={showSecondChild}
                                     
                                     anchorOrigin={{
                                         vertical: "bottom",
                                         horizontal: "center",
                                     }}
                                     transformOrigin={{
                                         vertical: "top",
                                         horizontal: "center",
                                     }}
                                     onClose={() => {
                                         setShowSecondChild(false);
                                     
                                     
                                     }}
                                     
                                     slotProps={{
                                         paper: {
                                             sx: {
                                                 maxHeight: 200,
                                                 width: "200px",
                                                 overflow: "auto",
                                                 marginLeft: "90px",
                                             },
                                         }
                                     }}
                                 
                                 
                                 >
                                 
                                 <MenuItem
                                     // onClick={() => {
                                     // 	const api = import.meta.env
                                     // 		.VITE_API_URL;
                                     // 	fetch(`${api}/posts/${post._id}`, {
                                     // 		method: "DELETE",
                                     // 	});
 
                                     // 	remove(post._id);
                                     // }}
                                     
                                 >
                                     <ListItemText primary="English" />
                                 </MenuItem>
                                 <MenuItem
                                     // onClick={() => {
                                     // }}
                                     
                                     
                                 >
                                     <ListItemText primary="Myanmar3" />
                                 </MenuItem>
                                 </Menu>
                                 
                             </Box>
                            </Menu>
                            </Box>


                            
                    </Box>
                </Container>
                </Box>
            </Box>
        </Box>

        

    )
}