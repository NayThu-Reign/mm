import {
    Box,
    Typography,
    Container,
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
    Menu,
	// MenuItem,
    ListItemIcon,
	ListItemText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material"

import {
	MoreVert as MenuIcon,
	Comment as CommentIcon,
	Delete as DeleteIcon,
} from "@mui/icons-material";


import {
    Search as SearchIcon,
    ArrowDropDown as ArrowDropDownIcon,
    UnfoldMore as UnfoldMoreIcon,
} from "@mui/icons-material"

import { Link, useNavigate, useLocation } from "react-router-dom"
import { useRef, useState } from "react";


export default function ViewTickets() {

    const searchRef = useRef();

    const location = useLocation();
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

	const [menuPosition, setMenuPosition] = useState(null);



    const [ departmentCategories, setDepartmentCategories ] = useState(10);
    const [ ticketCategories, setTicketCategories ] = useState(10);
    const [ priorityCategories, setPriorityCategories ] = useState(10);

	// const { setAuth, setAuthUser } = useAuth();

    const handleDepartmentCategoriesChange = (event) => {
        setDepartmentCategories(event.target.value);
    };

    const handlePriorityCategoriesChange = (event) => {
        setPriorityCategories(event.target.value);
    };

    const handleTicketCategoriesChange = (event) => {
        setTicketCategories(event.target.value);
    };

    return (
        <Box>
            <Box sx={{
                width: "100%",
                height: "200px",
                background: "#f2f4f8",
                // border: "1px solid",
                "@media (max-width: 950px)" : {
                    height: "230px",
                }
            }}>
            <Box sx={{ 
                height: "100%",
                // border: "1px solid",

                
            }}>
            <Container 
                maxWidth="lg" 
                sx={{ 
                    height: "100%",
                    "@media (max-width: 950px)" : {
                    marginBottom: "30px",
                    } 
            }}>
                <Box sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                     height: "100%",
                     "@media (max-width: 950px)" : {
                        display: "block",
                        paddingTop: "30px",
                        
                     }
                    //  border: "1px solid"
                }}>
                    <Box>
                        <Typography sx={{ 
                            marginBottom: "12px",
                            fontSize: "35px",
                            color: "#788288",
                            
                        }}>View tickets ()</Typography>
                        <Typography sx={{ color: "#788288" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Typography component="span" sx={{ color: "#3097d2" }}>
                                    Home 
                                </Typography>
                            </Link>
                             / View tickets
                        </Typography>
                    </Box>

                    <Box sx={{ 
                        width: "40%",
                        height: "40%",
                        // border: "1px solid",
                        "@media (max-width: 950px)" : {
                            width: "100%",
                            marginTop: "30px",
                        },
                        "@media (max-width: 765px)" : {
                            width: "100%",
                            marginTop: "30px",
                            // border: "1px solid",
                            // borderRadius: "20px",
                        }
                        
                    }}>
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
                                "@media (max-width: 950px)" : {
                                    marginBottom: "30px",
                                },

                                "@media (max-width: 765px)" : {
                                    borderRadius: "30px",

                                }
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

                                            "@media (max-width: 765px)" : {
                                                borderRadius: "30px",
                                            }
                                        
                                        }}
                                    />
                                
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            </Box>

        
            </Box>
            <Box>
                <Container maxWidth="lg">
                    <Box sx={{
                        width: "100%",
                        marginTop: "20px",
                        // height: "100px",
                    }}>
                        <Box sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            // justifyContent: "center",
                            alignItems: "center",
                            gap: "10px"
                        }}>
                            <Button sx={{
                                height: "30px",
                                background: "#74b683",
                                borderRadius: "30px",
                                fontSize: "13px",
                                color: "#ffffff",
                            }}>
                                Unsolved
                            </Button>
                            <Button sx={{
                                height: "30px",
                                // background: "#f2f4f8",
                                border: "3px solid #f2f4f8",
                                borderRadius: "30px",
                                fontSize: "13px",
                                color: "#000000",
                            }}>
                                Solved
                            </Button>
                            <Button 

                                onClick={() => setShowFilter(prev => !prev)}
                            
                                sx={{
                                    height: "30px",
                                    // background: "#f2f4f8",
                                    border: "3px solid #f2f4f8",

                                    borderRadius: "30px",
                                    fontSize: "13px",
                                    color: "#000000",
                            }}>
                                Filter
                            </Button>
                            
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
                <hr style={{ border: "1px solid #f2f4f8" }} />

               {showFilter && (
                         <Box sx={{ marginTop: "20px" }}>
                         <form 
                             onSubmit={e => {
                                 e.preventDefault();
                                 const search = searchRef.current.value
     
     
                                 // if ( !firstName || !lastName || !email || !userName || !password || !confirmPassword || !contactNumber || imageVerification) {
                                 //     setHasError(true);
                                 //     setErrorMessage("Invalid register details");
                                 //     return false;
                                 // }
     
                                 
                         }}>
                             <Box>
                                 <Box sx={{
                                             display: "flex",
                                             // justifyContent: "center",
                                             alignItems: "center",
                                             // border: "1px solid",
                                             gap: "20px",
                                             marginBottom: "10px",
                                             // border: "1px solid",
                                             
                                             // border: "1px solid",
                                             "@media (max-width: 750px)" : {
                                                 display: "block",
                                                 // flexDirection: "column",
                                                 // justifyContent: "flex-start",
     
     
                                             }
                                         }}>
                                             <Box sx={{
                                                 width: "80px",
                                                 // display: "flex",
                                                 // justifyContent: "flex-end",
                                                 // border: "1px solid",
                                                 "@media (max-width: 750px)" : {
                                                     justifyContent: "flex-start",
                                                 }
                                             }}>                                           
                                                 <label style={{ color: "#808080", fontSize: "15px" }}>Subject</label>
                                             </Box>
                                             <Box sx={{ 
                                                 width: "100%",
                                                 "@media (max-width: 750px)" : {
                                                     width: "100%",
                                                 }    
                                             }}>
                                                 <TextField
                                                     // label="Email"
                                                     fullWidth
                                                     type="search"
                                                     sx={{ 
                                                         // width: "750px",
                                                         // height: "100%",
                                                         // mb: 2,
                                                         // border: "1px solid",
                                                         display: "flex",
                                                         
                                                         backgroundColor: 'white',
                                                         '& .MuiOutlinedInput-root': {
                                                             '&.Mui-focused fieldset': {
                                                             borderColor: "black",
                                                             },
                                                         },
                                                         '& .MuiInputBase-input': {
                                                                 height: '20px', 
                                                                 padding: '8px',
                                                         },
                                                     }}
                                                     inputRef={searchRef}
                                                 />
                                             </Box>
                                 </Box>
     
                                 <Box sx={{
                                     display: "flex",
                                     gap: "30px",
                                 }}>
                                     <Box sx={{
                                             display: "flex",
                                             // justifyContent: "center",
                                             alignItems: "center",
                                             // border: "1px solid",
                                             gap: "20px",
                                             marginBottom: "10px",
                                             // border: "1px solid",
                                             
                                             // border: "1px solid",
                                             "@media (max-width: 750px)" : {
                                                 display: "block",
                                                 // flexDirection: "column",
                                                 // justifyContent: "flex-start",
     
     
                                             }
                                         }}>
                                             <Box sx={{
                                                 width: "120px",
                                                 // display: "flex",
                                                 // justifyContent: "flex-end",
                                                 // border: "1px solid",
                                                 
                                                 "@media (max-width: 750px)" : {
                                                     justifyContent: "flex-start",
                                                 }
                                             }}>                                           
                                                 <label style={{ color: "#808080", fontSize: "15px" }}>Department</label>
                                             </Box>
                                             <Box sx={{ 
                                                 width: "100%",
                                                 "@media (max-width: 750px)" : {
                                                     width: "100%",
                                                 }    
                                             }}>
                                                 <FormControl fullWidth sx={{
                                                     '& .MuiInputBase-input': {
                                                             height: '10px', 
                                                             padding: '8px',
                                                         },
                                                 }}>
                                                 <Select
                                                     labelId="category-label"
                                                     value={ departmentCategories}
                                                     onChange={handleDepartmentCategoriesChange}
                                                     sx={{
                                                         height: "30px",
                                                     }}
                                                 >
                                                     <MenuItem value={10}>Category 1</MenuItem>
                                                     <MenuItem value={20}>Category 2</MenuItem>
                                                     <MenuItem value={30}>Category 3</MenuItem>
                                                 </Select>
                                             </FormControl>
                                             </Box>
                                     </Box>
                                     <Box sx={{
                                             display: "flex",
                                             // justifyContent: "center",
                                             alignItems: "center",
                                             // border: "1px solid",
                                             gap: "20px",
                                             marginBottom: "10px",
                                             // border: "1px solid",
                                             
                                             // border: "1px solid",
                                             "@media (max-width: 750px)" : {
                                                 display: "block",
                                                 // flexDirection: "column",
                                                 // justifyContent: "flex-start",
     
     
                                             }
                                         }}>
                                             <Box sx={{
                                                 width: "120px",
                                                 // display: "flex",
                                                 // justifyContent: "flex-end",
                                                 // border: "1px solid",
                                                 
                                                 "@media (max-width: 750px)" : {
                                                     justifyContent: "flex-start",
                                                 }
                                             }}>                                           
                                                 <label style={{ color: "#808080", fontSize: "15px" }}>Department</label>
                                             </Box>
                                             <Box sx={{ 
                                                 width: "100%",
                                                 "@media (max-width: 750px)" : {
                                                     width: "100%",
                                                 }    
                                             }}>
                                                 <FormControl fullWidth sx={{
                                                     '& .MuiInputBase-input': {
                                                             height: '10px', 
                                                             padding: '8px',
                                                         },
                                                 }}>
                                                 <Select
                                                     labelId="category-label"
                                                     value={ departmentCategories}
                                                     onChange={handleDepartmentCategoriesChange}
                                                     sx={{
                                                         height: "30px",
                                                     }}
                                                 >
                                                     <MenuItem value={10}>Category 1</MenuItem>
                                                     <MenuItem value={20}>Category 2</MenuItem>
                                                     <MenuItem value={30}>Category 3</MenuItem>
                                                 </Select>
                                             </FormControl>
                                             </Box>
                                     </Box>
                                     <Box sx={{
                                             display: "flex",
                                             // justifyContent: "center",
                                             alignItems: "center",
                                             // border: "1px solid",
                                             gap: "20px",
                                             marginBottom: "10px",
                                             // border: "1px solid",
                                             
                                             // border: "1px solid",
                                             "@media (max-width: 750px)" : {
                                                 display: "block",
                                                 // flexDirection: "column",
                                                 // justifyContent: "flex-start",
     
     
                                             }
                                         }}>
                                             <Box sx={{
                                                 width: "120px",
                                                 // display: "flex",
                                                 // justifyContent: "flex-end",
                                                 // border: "1px solid",
                                                 
                                                 "@media (max-width: 750px)" : {
                                                     justifyContent: "flex-start",
                                                 }
                                             }}>                                           
                                                 <label style={{ color: "#808080", fontSize: "15px" }}>Department</label>
                                             </Box>
                                             <Box sx={{ 
                                                 width: "100%",
                                                 "@media (max-width: 750px)" : {
                                                     width: "100%",
                                                 }    
                                             }}>
                                                 <FormControl fullWidth sx={{
                                                     '& .MuiInputBase-input': {
                                                             height: '10px', 
                                                             padding: '8px',
                                                         },
                                                 }}>
                                                 <Select
                                                     labelId="category-label"
                                                     value={ departmentCategories}
                                                     onChange={handleDepartmentCategoriesChange}
                                                     sx={{
                                                         height: "30px",
                                                     }}
                                                 >
                                                     <MenuItem value={10}>Category 1</MenuItem>
                                                     <MenuItem value={20}>Category 2</MenuItem>
                                                     <MenuItem value={30}>Category 3</MenuItem>
                                                 </Select>
                                             </FormControl>
                                             </Box>
                                     </Box>
                                     <Box sx={{
                                             display: "flex",
                                             // justifyContent: "center",
                                             alignItems: "center",
                                             // border: "1px solid",
                                             gap: "20px",
                                             marginBottom: "10px",
                                             // border: "1px solid",
                                             
                                             // border: "1px solid",
                                             "@media (max-width: 750px)" : {
                                                 display: "block",
                                                 // flexDirection: "column",
                                                 // justifyContent: "flex-start",
     
     
                                             }
                                         }}>
                                             <Box sx={{
                                                 width: "120px",
                                                 // display: "flex",
                                                 // justifyContent: "flex-end",
                                                 // border: "1px solid",
                                                 
                                                 "@media (max-width: 750px)" : {
                                                     justifyContent: "flex-start",
                                                 }
                                             }}>                                           
                                                 <label style={{ color: "#808080", fontSize: "15px" }}>Department</label>
                                             </Box>
                                             <Box sx={{ 
                                                 width: "100%",
                                                 "@media (max-width: 750px)" : {
                                                     width: "100%",
                                                 }    
                                             }}>
                                                 <FormControl fullWidth sx={{
                                                     '& .MuiInputBase-input': {
                                                             height: '10px', 
                                                             padding: '8px',
                                                         },
                                                 }}>
                                                 <Select
                                                     labelId="category-label"
                                                     value={ departmentCategories}
                                                     onChange={handleDepartmentCategoriesChange}
                                                     sx={{
                                                         height: "30px",
                                                     }}
                                                 >
                                                     <MenuItem value={10}>Category 1</MenuItem>
                                                     <MenuItem value={20}>Category 2</MenuItem>
                                                     <MenuItem value={30}>Category 3</MenuItem>
                                                 </Select>
                                             </FormControl>
                                             </Box>
                                     </Box>
                                 </Box>
                                 <Box sx={{
                                     display: "flex",
                                     gap: "30px",
                                 }}>
                                     <Box sx={{
                                             display: "flex",
                                             // justifyContent: "center",
                                             alignItems: "center",
                                             // border: "1px solid",
                                             gap: "20px",
                                             marginBottom: "10px",
                                             // border: "1px solid",
                                             
                                             // border: "1px solid",
                                             "@media (max-width: 750px)" : {
                                                 display: "block",
                                                 // flexDirection: "column",
                                                 // justifyContent: "flex-start",
     
     
                                             }
                                         }}>
                                             <Box sx={{
                                                 width: "120px",
                                                 // display: "flex",
                                                 // justifyContent: "flex-end",
                                                 // border: "1px solid",
                                                 
                                                 "@media (max-width: 750px)" : {
                                                     justifyContent: "flex-start",
                                                 }
                                             }}>                                           
                                                 <label style={{ color: "#808080", fontSize: "15px" }}>Department</label>
                                             </Box>
                                             <Box sx={{ 
                                                 width: "100%",
                                                 "@media (max-width: 750px)" : {
                                                     width: "100%",
                                                 }    
                                             }}>
                                                 <FormControl fullWidth sx={{
                                                     '& .MuiInputBase-input': {
                                                             height: '10px', 
                                                             padding: '8px',
                                                         },
                                                 }}>
                                                 <Select
                                                     labelId="category-label"
                                                     value={ departmentCategories}
                                                     onChange={handleDepartmentCategoriesChange}
                                                     sx={{
                                                         height: "30px",
                                                     }}
                                                 >
                                                     <MenuItem value={10}>Category 1</MenuItem>
                                                     <MenuItem value={20}>Category 2</MenuItem>
                                                     <MenuItem value={30}>Category 3</MenuItem>
                                                 </Select>
                                             </FormControl>
                                             </Box>
                                     </Box>
                                     <Box sx={{
                                             display: "flex",
                                             // justifyContent: "center",
                                             alignItems: "center",
                                             // border: "1px solid",
                                             gap: "20px",
                                             marginBottom: "10px",
                                             // border: "1px solid",
                                             
                                             // border: "1px solid",
                                             "@media (max-width: 750px)" : {
                                                 display: "block",
                                                 // flexDirection: "column",
                                                 // justifyContent: "flex-start",
     
     
                                             }
                                         }}>
                                             <Box sx={{
                                                 width: "120px",
                                                 // display: "flex",
                                                 // justifyContent: "flex-end",
                                                 // border: "1px solid",
                                                 
                                                 "@media (max-width: 750px)" : {
                                                     justifyContent: "flex-start",
                                                 }
                                             }}>                                           
                                                 <label style={{ color: "#808080", fontSize: "15px" }}>Department</label>
                                             </Box>
                                             <Box sx={{ 
                                                 width: "100%",
                                                 "@media (max-width: 750px)" : {
                                                     width: "100%",
                                                 }    
                                             }}>
                                                 <FormControl fullWidth sx={{
                                                     '& .MuiInputBase-input': {
                                                             height: '10px', 
                                                             padding: '8px',
                                                         },
                                                 }}>
                                                 <Select
                                                     labelId="category-label"
                                                     value={ departmentCategories}
                                                     onChange={handleDepartmentCategoriesChange}
                                                     sx={{
                                                         height: "30px",
                                                     }}
                                                 >
                                                     <MenuItem value={10}>Category 1</MenuItem>
                                                     <MenuItem value={20}>Category 2</MenuItem>
                                                     <MenuItem value={30}>Category 3</MenuItem>
                                                 </Select>
                                             </FormControl>
                                             </Box>
                                     </Box>
                                 </Box>
     
                                 <Box sx={{
                                     display: "flex",
                                     justifyContent: "flex-end",
                                     gap: "20px",
                                     marginBottom: "20px",
                                 }}>
                                     <Button
                                        
                                     sx={{
                                         width: "50px",
                                         height: "30px",
                                         background: "#f2f4f8",
                                         color: "#788288",
                                     }}>
                                         Clear
                                     </Button>
                                     <Button
                                     
                                     type="submit"
                                     
                                     sx={{
                                         width: "50px",
                                         height: "30px",
                                         background: "green",
                                         color: "#ffffff",
     
                                         "&:hover" : {
                                             background: "green",
                                         }
                                        
                                     }}>
                                         Search
                                     </Button>
     
                                    
                                 </Box>
                                     
                             </Box>
     
     
                         </form>
                         
     
     
                         <hr style={{ border: "1px solid #f2f4f8" }} />
     
                     </Box>
               )}

                <Box sx={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Box>
                        {/* <Box sx={{ 
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100px",
                            height: "30px",
                            background: "#f2f4f8",
                            // border: "1px solid",
                            // paddingLeft: "10px",
                        }}>
                            <Link style={{ textDecoration: "none" }}><Typography sx={{ color: "#808080", textAlign: "center", fontSize: "15px", marginLeft: "5px" }}>Sort by</Typography></Link>
                            <IconButton sx={{
                                 "&: hover" : {
                                    background: "transparent",
                                }
                            }}>
                                <ArrowDropDownIcon />
                            </IconButton>
                            <Menu
								anchorEl={menuPosition}
								open={showMenu}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								onClose={() => {
									setShowMenu(false);
								}}>
								<MenuItem
									onClick={() => {
										const api = import.meta.env
											.VITE_API_URL;
										fetch(`${api}/posts/${post._id}`, {
											method: "DELETE",
										});

										remove(post._id);
									}}>
									<ListItemIcon>
										<DeleteIcon color="error" />
									</ListItemIcon>
									<ListItemText primary="Delete" />
								</MenuItem>
							</Menu>
                        </Box> */}

                        <Box>
                        <Button
                            variant="contained"
                            endIcon={<ArrowDropDownIcon />}
                            onClick={e => {
                                setShowMenu(true);
                                setMenuPosition(e.currentTarget)
                            }}
                            sx={{
                                // width: "100px",
                                // height: "30px",
                                mb: 2,
                                backgroundColor: "transparent",
                                border: "1px solid #808080",
                                color: "#808080",
                                // fontSize: "13px",
                                '&:hover': {
                                        backgroundColor: "#f8fbff",
                                },
                            }}
                        >
                            Sort by
                        </Button>
                                <Menu
                                    anchorEl={menuPosition}
                                    open={showMenu}
                                    
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    onClose={() => {
                                        setShowMenu(false);
                                    
                                    
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
                                    <ListItemText primary="Modified Date" />
                                </MenuItem>
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
                                    <ListItemText primary="Creation Date" />
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        width: "200px",
                        border: "1px solid #808080",
                        height: "40px",
                        // fontSize: "13px",
                        marginBottom: "30px",
                    }}>
                        <Button sx={{
                            width: "40%",
                            fontSize: "10px",
                            color: "#808080",
                        }}>
                            Previous
                        
                        </Button>
                        <Typography 
                            component="span" 
                            sx={{ 
                                background: "#74b683", 
                                width: "20%", 
                                height: "100%", 
                                // textAlign: "center", 
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#ffffff",
                            }}>
                                1
                        </Typography>
                        <Button sx={{
                            width: "40%",
                            fontSize: "10px",
                            color: "#808080",
                        }}>
                            Next
                        </Button>

                    </Box>
                </Box>


            <TableContainer 
                component={Paper} 
                style={{ 
                    borderTop: '1px solid #f2f4f8', 
                    borderBottom: '1px solid #f2f4f8',
                    borderLeft: 'none',
                    borderRight: 'none',
                    border: "1px solid",
                }}
            >
                <Table aria-label="customized table" sx={{ borderLeft: "none", borderRight: "none" }}>
                    <TableHead sx={{ background: "#f8fbff",}}>
                        <TableRow>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Ticket hash
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Subject
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Department
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Status
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Priority
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Type
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Submitted by
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                            <TableCell 
                                align="center" 
                                style={{ 
                                    borderBottom: '2px solid #808080', 
                                    borderLeft: 'none', 
                                    borderRight: 'none', 
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // background: "none"
                                }}>
                                     <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginLeft: "10px",              
                                    }}>
                                        <IconButton sx={{
                                            "&:hover" : {
                                                background: "transparent",
                                            }
                                        }}>
                                            <Typography sx={{
                                                color: "#788288",
                                                fontSize: "13px",
                                                fontWeight: "600",

                                            }}>
                                                Creation Date
                                            </Typography>
                                            <UnfoldMoreIcon />
                                        </IconButton>
                                    </Box>
                            </TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow>
                                <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>TL-1389</TableCell>
                                <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>test</TableCell>
                                <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>Software</TableCell>
                                <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>Open</TableCell>
                                <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>Critical</TableCell>
                                <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>Issue</TableCell>
                                <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>tt at</TableCell>
                                <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>06-06-2024 11:01</TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

                <Box sx={{
                    width: "100%",
                    height: "100%",
                    marginTop: "40px",
                    marginBottom: "60px",
                    display: "flex",
                    justifyContent: "flex-end",
                    // alignItems: "center",
                    // border: "1px solid",
                    // height: "40px",

                }}>
                    <Box sx={{
                        // marginTop
                        display: "flex",
                        width: "200px",
                        border: "1px solid #808080",
                        // fontSize: "13px",
                    }}>
                        <Button sx={{
                            width: "40%",
                            fontSize: "10px",
                            color: "#808080",
                        }}>
                            Previous
                        
                        </Button>
                        <Typography 
                            component="span" 
                            sx={{ 
                                background: "#74b683", 
                                width: "20%", 
                                height: "100%", 
                                // textAlign: "center", 
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#ffffff",
                            }}>
                                1
                        </Typography>
                        <Button sx={{
                            width: "40%",
                            fontSize: "10px",
                            color: "#808080",
                        }}>
                            Next
                        </Button>

                    </Box>
                </Box>
            </Container>
        </Box>
    )
}