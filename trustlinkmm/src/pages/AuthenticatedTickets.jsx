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

import { Link, useNavigate, useLocation, useParams } from "react-router-dom"
import { useRef, useState, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";


export default function ViewTickets() {

    const { id } = useParams();
    const searchRef = useRef();
    const { authUser, setAuthUser } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [showSolvedTickets, setShowSolvedTickets] = useState(false);
    const [showUnsolvedTickets, setShowUnsolvedTickets] = useState(false);
    const [ userSolvedTickets, setUserSolvedTickets ] = useState([]);
    const [ filteredTickets, SetFilteredTickets ] = useState([]);
	const [menuPosition, setMenuPosition] = useState(null);

    const [userTickets, setUserTickets] = useState([]);

    // const [ filteredTickets, setFilteredTickets ] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const ticketsPerPage = 20;
  
    const indexOfLastTicket = currentPage * ticketsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
    const currentTickets = filteredTickets.length > 0 
    ? filteredTickets.slice(indexOfFirstTicket, indexOfLastTicket) 
    : (showSolvedTickets && userSolvedTickets.length > 0 
        ? userSolvedTickets.slice(indexOfFirstTicket, indexOfLastTicket) 
        : userTickets.slice(indexOfFirstTicket, indexOfLastTicket));

const totalTickets = filteredTickets.length > 0 
    ? filteredTickets.length 
    : (showSolvedTickets && userSolvedTickets.length > 0 
        ? userSolvedTickets.length 
        : userTickets.length);

        const totalPages = Math.ceil(totalTickets / ticketsPerPage);
    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    };
  



    const [ departmentCategories, setDepartmentCategories ] = useState(10);
    const [ ticketCategories, setTicketCategories ] = useState(10);
    const [ priorityCategories, setPriorityCategories ] = useState(10);

	// const { setAuth, setAuthUser } = useAuth();

   

    // const [searchName, setSearchName] = useState('');
//   const [selectedDepartment, setSelectedDepartment] = useState('');
//   const [selectedPriority, setSelectedPriority] = useState('');

  const [ selectedDepartmentCategory, setSelectedDepartmentCategory ] = useState('');
  const [ selectedTicketCategory, setSelectedTicketCategory ] = useState('');
  const [ selectedStatus, setSelectedStatus ] = useState('');
  const [ selectedOwner, setSelectedOwner ] = useState('');
  const [ selectedType, setSelectedType ] = useState('');


  const departmentRef = useRef();
  const priorityRef = useRef();
  const ticketCategoryRef = useRef();
  const titleRef = useRef();
  const statusRef = useRef();
  const ownerRef = useRef();
  const typeRef = useRef();


  const handleDepartmentCategoriesChange = (event) => {
    setSelectedDepartmentCategory(event.target.value);
 };

const handlePriorityCategoriesChange = (event) => {
    setPriorityCategories(event.target.value);
};

const handleTicketCategoriesChange = (event) => {
    setSelectedTicketCategory(event.target.value);
};

const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
};

const handleOwnerChange = (event) => {
    setSelectedOwner(event.target.value);
};

const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
};



    const handleClear = () => {
        // setSearchName('');
        setSelectedDepartmentCategory('');
        setPriorityCategories('');
        setSelectedStatus('');
        setSelectedOwner('');
        setSelectedTicketCategory('');
        setSelectedType('');
      };
    
    //   const filteredTickets = userTickets.filter(ticket =>
    //     (searchName === '' || ticket.subject.toLowerCase().includes(searchName.toLowerCase())) &&
    //     (selectedDepartment === '' || ticket.department.toLowerCase() === selectedDepartment.toLowerCase()) &&
    //     (selectedPriority === '' || ticket.priority.toLowerCase() === selectedPriority.toLowerCase())
    //   );

    // useEffect(() => {
    //     const fetchUserTickets = async () => {
    //       try {
    //         const token = localStorage.getItem('token');

    //         const api = import.meta.env.VITE_API_URL;
    //         const response = await fetch(`${api}/api/tickets`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`,

    //             },
    //         });
    //         const data = await response.json();
            
    //         const authUserTickets = data.filter(ticket => ticket.issuerId === authUser.id);
    //         setUserTickets(authUserTickets);
    //       } catch (error) {
    //         console.error('Error fetching user tickets:', error);
    //       }
    //     };
    
    //     if (authUser) {
    //       fetchUserTickets();
    //       console.log('tickets:', userTickets);
    //     }
    //   }, [authUser, currentPage]);
    
    const fetchUserTickets = async () => {
      try {
        const token = localStorage.getItem('token');
        const api = import.meta.env.VITE_API_URL;

        const response = await fetch(`${api}/api/tickets`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const textData = await response.text();
        console.log('Received raw data:', textData);

        const data = JSON.parse(textData); 
        const authUserTickets = data.filter(ticket => ticket.issuerId === authUser.id && ticket.status !== "Closed");
        setUserTickets(authUserTickets);
      } catch (error) {
        console.error('Error fetching user tickets:', error);
      }
    };

    const fetchUserSolvedTickets = async () => {
        try {
            const token = localStorage.getItem('token');
            const api = import.meta.env.VITE_API_URL;
    
            const response = await fetch(`${api}/api/tickets`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });
    
            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.statusText}`);
            }
    
            const textData = await response.text();
            console.log('Received raw data:', textData);
    
            const data = JSON.parse(textData); 
            const authUserTickets = data.filter(ticket => ticket.issuerId === authUser.id && ticket.status === "Closed");
            setUserSolvedTickets(authUserTickets);
          } catch (error) {
            console.error('Error fetching user tickets:', error);
          }
    }

    const fetchFilterTickets = async () => {
        try {
            const token = localStorage.getItem('token');
            const api = import.meta.env.VITE_API_URL;
    
            const filter_res = await fetch(`${api}/api/tickets/find/:field/:value`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });
    
            if (!filter_res.ok) {
              throw new Error(`Network response was not ok: ${response.statusText}`);
            }
    
            // const textData = await response.text();
            // console.log('Received raw data:', textData);
    
            // const data = JSON.parse(textData); 
            const filter_data = await filter_res.json();
            const authUserTickets = filter_data.filter(ticket => ticket.issuerId === authUser.id);
            setFilteredTickets(authUserTickets);
          } catch (error) {
            console.error('Error fetching user tickets:', error);
          }
    };

    const fetchDepartmentCategories = async () => {
        try {
        //   const token = localStorage.getItem('token');
            // const user = JSON.parse(localStorage.getItem('user'));

          const api = import.meta.env.VITE_API_URL;
          const departments_res = await fetch(`${api}/api/departments`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            //   'Authorization': `Bearer ${token, user}`
            },
          });
          if (!departments_res.ok) {
            if (departments_res.status === 401) {
              throw new Error('Unauthorized: Please login to access department categories');
            } else {
              throw new Error('Failed to fetch department categories');
            }
          }
          const departments_result = await departments_res.json();
          const department_categories = departments_result.records; 
          setDepartmentCategories(department_categories);
        } catch (error) {
          console.error(error);
          throw error;
        }
      };
      
      

    const fetchTicketCategories = async () => {
        try {
          const api = import.meta.env.VITE_API_URL;
          const tickets_res = await fetch(`${api}/api/tickets/categories`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!tickets_res.ok) {
            throw new Error('Failed to fetch data');
          }
          const tickets_result = await tickets_res.json();
        //   console.log('API response:', tickets_result); // Log the response to see its structure
          const categories = tickets_result.records; // Extract the records array
          if (!Array.isArray(categories)) {
            throw new Error('Invalid data format');
          }
          setTicketCategories(categories);
        } catch (error) {
          console.error(error);
          setError(error.message);
        }
      };


    useEffect(() => {
    
          fetchUserTickets();
          fetchUserSolvedTickets();
          fetchFilterTickets();
          fetchDepartmentCategories();
          fetchTicketCategories();

      }, [authUser, currentPage]);
    
      useEffect(() => {
        console.log('tickets:', userTickets);
      }, [userTickets]);
    
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
                            
                        }}>View tickets ({ showSolvedTickets ? userSolvedTickets.length : userTickets.length })</Typography>
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
                                                    borderColor: 'transparent', 
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'transparent', 
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
                            <Button 
                            onClick={() => setShowSolvedTickets(false)}
                                
                            sx={{
                                height: "30px",
                                background: showSolvedTickets ? "none" : "#74b683",
                                borderRadius: "30px",
                                fontSize: "13px",
                                color: showSolvedTickets ? "#000000" : "#ffffff",
                               
                            }}>
                                Unsolved
                            </Button>
                            <Button 
                                 onClick={() => setShowSolvedTickets(previous => !previous) }
                            sx={{
                                height: "30px",
                                background: showSolvedTickets ? "#74b683" : "none",
                                border: "3px solid #f2f4f8",
                                borderRadius: "30px",
                                fontSize: "13px",
                                color: showSolvedTickets ? "#ffffff" : "#000000",
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

                                const department = departmentRef.current.value;
                                const priority = priorityRef.current.value;
                                const ticketCategory = ticketCategoryRef.current.value;
                                const title = titleRef.current.value;
                                const status = statusRef.current.value;
                                const type = typeRef.current.value;
    
    
                                // if ( !firstName || !lastName || !email || !userName || !password || !confirmPassword || !contactNumber || imageVerification) {
                                //     setHasError(true);
                                //     setErrorMessage("Invalid register details");
                                //     return false;
                                // }


                                (async () => {
                                    try {
                                        const token = localStorage.getItem('token');

                                        const api = import.meta.env.VITE_API_URL;
                                        const res = await fetch(`${api}/api/tickets/search`, {
                                            method: 'POST',
                                            body: JSON.stringify({ 
                                                title : title,
                                                // description : userSolvedTickets ? userSolvedTickets.description ? filteredTickets ? filteredTickets.description : userTickets.description,
                                                "categoryId": ticketCategory,
                                                "departmentId": department,
                                                priority: priority,
                                                "status": status,                                  
                                            }),
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'Authorization': `Bearer ${token}`,

                                            },
                                        });
                            
                                        const data = await res.json();
                                        console.log(data);
                            
                                        if (res.status === 200) {
                                            navigate('/ticket/view-ticket');
                                            console.log('Ticket submitted successfully');
                                        } else {
                                            console.error('Error submitting ticket:', data.error ? data.error.details : 'Unknown error');
                                            setHasError(true);
                                            setErrorMessage(data.error ? data.error.details : 'Unknown error');
                                        }
                                    } catch (error) {
                                        console.error('Error submitting ticket:', error.message);
                                        setHasError(true);
                                        setErrorMessage("Failed to submit ticket");
                                    }
                                })();
    
                                
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
                                                                width: "100%",
                                                                padding: '8px',
                                                        },
                                                    }}
                                                    inputRef={titleRef}
                                                />
                                            </Box>
                                </Box>
    
                                <Box sx={{
                                    display: "flex",
                                    flexWrap: 'wrap',
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
                                                            width: "80px",
                                                            padding: '8px',
                                                        },
                                                }}>
                                                <Select
                                                    labelId="category-label"
                                                    value={ selectedDepartmentCategory }
                                                    onChange={handleDepartmentCategoriesChange}
                                                    inputRef={departmentRef}

                                                    sx={{
                                                        height: "30px",
                                                    }}
                                                >
                                                    {Array.isArray(departmentCategories) && departmentCategories.map((department) => (
                                                        <MenuItem key={department.id} value={Number(department.id)}>
                                                            {department.departmentName}
                                                        </MenuItem>
                                                    ))}
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
                                                <label style={{ color: "#808080", fontSize: "15px" }}>Status</label>
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
                                                            width: "80px",
                                                            padding: '8px',
                                                        },
                                                }}>
                                                <Select
                                                    labelId="category-label"
                                                    value={ selectedStatus }
                                                    onChange={handleStatusChange}
                                                    inputRef={statusRef}
                                                    sx={{
                                                        height: "30px",
                                                    }}
                                                >
                                                    <MenuItem value={10}>Open</MenuItem>
                                                    <MenuItem value={20}>Assign</MenuItem>
                                                    <MenuItem value={30}>Closed</MenuItem>
                                                    <MenuItem value={30}>Pending</MenuItem>
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
                                                <label style={{ color: "#808080", fontSize: "15px" }}>Owner</label>
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
                                                            width: "80px",
                                                            padding: '8px',
                                                        },
                                                }}>
                                                <Select
                                                    labelId="category-label"
                                                    value={ selectedOwner }
                                                    onChange={handleOwnerChange}
                                                    inputRef={ownerRef}

                                                    sx={{
                                                        height: "30px",
                                                    }}
                                                >
                                                    <MenuItem value={10}>Nobody</MenuItem>
                                                    <MenuItem value={20}>Administrator</MenuItem>
                                                    <MenuItem value={30}>Admin Trust</MenuItem>
                                                    <MenuItem value={30}>Customer Support</MenuItem>
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
                                                <label style={{ color: "#808080", fontSize: "15px" }}>Priority</label>
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
                                                            width: "80px",
                                                            padding: '8px',
                                                        },
                                                }}>
                                                <Select
                                                    labelId="category-label"
                                                    value={ priorityCategories }
                                                    onChange={handlePriorityCategoriesChange}
                                                    sx={{
                                                        height: "30px",
                                                    }}
                                                >
                                                    <MenuItem value={10}>Critical</MenuItem>
                                                    <MenuItem value={20}>Moderate</MenuItem>
                                                    <MenuItem value={30}>Low</MenuItem>
                                                    <MenuItem value={30}>Medium</MenuItem>
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
                                                <label style={{ color: "#808080", fontSize: "15px" }}>Type</label>
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
                                                            width: "80px",
                                                            padding: '8px',
                                                        },
                                                }}>
                                                <Select
                                                    labelId="category-label"
                                                    value={ selectedType }
                                                    onChange={handleTypeChange}
                                                    sx={{
                                                        height: "30px",
                                                    }}
                                                >
                                                    <MenuItem value={10}>Select</MenuItem>
                                                    {/* <MenuItem value={20}>Category 2</MenuItem> */}
                                                    {/* <MenuItem value={30}>Category 3</MenuItem> */}
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
                                                <label style={{ color: "#808080", fontSize: "15px" }}>Category</label>
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
                                                            width: "80px",
                                                            padding: '8px',
                                                        },
                                                }}>
                                                <Select
                                                    labelId="category-label"
                                                    value={ selectedTicketCategory }
                                                    onChange={ handleTicketCategoriesChange }
                                                    inputRef={ticketCategoryRef}
                                                    sx={{
                                                        height: "30px",
                                                    }}
                                                >
                                                    {Array.isArray(ticketCategories) && ticketCategories.map((ticket) => (
                                                        <MenuItem key={ticket.id} value={Number(ticket.id)}>
                                                            {ticket.categoryName}
                                                        </MenuItem>
                                                    ))}
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
                                        onClick={handleClear}
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
                        <Button 
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        
                        sx={{
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
                                 {currentPage}
                        </Typography>
                        <Button 
                            onClick={handleNextPage}
                            disabled={currentPage >= totalPages}
                            
                        sx={{
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

                        {filteredTickets.length > 0 ? (
                            filteredTickets.map(filteredTicket => (
                                <TableRow key={filteredTicket.id} sx={{
                                    "&:hover" : {
                                        background: "#f8fbff",
                                    }
                                }}>
                                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.id}</TableCell>
                                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.title}</TableCell>
                                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.departmentId}</TableCell>
                                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.status}</TableCell>
                                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.priority}</TableCell>
                                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.type}</TableCell>
                                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{filteredTicket.issuerId}</TableCell>
                                    <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>
                                        {new Date(filteredTicket.submittedDate).toLocaleDateString('en-US')}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            showSolvedTickets && userSolvedTickets.length > 0 ? (
                                userSolvedTickets.map(solvedTicket => (
                                    <TableRow key={solvedTicket.id} sx={{
                                        "&:hover" : {
                                            background: "#f8fbff",
                                        }
                                    }}>
                                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{solvedTicket.id}</TableCell>
                                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{solvedTicket.title}</TableCell>
                                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{solvedTicket.departmentId}</TableCell>
                                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{solvedTicket.status}</TableCell>
                                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{solvedTicket.priority}</TableCell>
                                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{solvedTicket.type}</TableCell>
                                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{solvedTicket.issuerId}</TableCell>
                                        <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>
                                            {new Date(solvedTicket.submittedDate).toLocaleDateString('en-US')}
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                userUnsolvedTickets.map(userTicket => (
                                    <TableRow 
                                        key={userTicket.id} 
                                        
                                        sx={{
                                            "&:hover" : {
                                                background: "#f8fbff",
                                            }
                                        }}
                                    >
                                        <TableCell  
                                            onClick={() => {
                                                navigate(`/ticket/ticket-detail/${userTicket.id}`)
                                            }}
                                            align="center"
                                            style={{ 
                                                borderLeft: 'none', 
                                                borderRight: 'none', 
                                            }}>
                                                TL - {userTicket.id}
                                        </TableCell>
                                        <TableCell 
                                            onClick={() => {
                                                navigate(`/ticket/ticket-detail/${userTicket.id}`)
                                            }}
                                            align="center" 
                                            style={{ 
                                                borderLeft: 'none', 
                                                borderRight: 'none', 
                                            }}>
                                                {userTicket.title}
                                        </TableCell>
                                        <TableCell 
                                            onClick={() => {
                                                navigate(`/ticket/ticket-detail/${userTicket.id}`)
                                            }}
                                            align="center" 
                                            style={{ 
                                                borderLeft: 'none', 
                                                borderRight: 'none', 
                                                
                                            }}>
                                                {userTicket.departmentId}
                                        </TableCell>
                                        <TableCell 
                                            onClick={() => {
                                                navigate(`/ticket/ticket-detail/${userTicket.id}`)
                                            }}
                                            align="center" 
                                            style={{ 
                                                borderLeft: 'none', 
                                                borderRight: 'none', 
                                            }}>
                                                {userTicket.status}
                                        </TableCell>
                                        <TableCell 
                                            onClick={() => {
                                                navigate(`/ticket/ticket-detail/${userTicket.id}`)
                                            }}
                                            align="center" 
                                            style={{ 
                                                borderLeft: 'none', 
                                                borderRight: 'none', 
                                            }}>
                                                {userTicket.priority}
                                        </TableCell>
                                        <TableCell 
                                            onClick={() => {
                                                navigate(`/ticket/ticket-detail/${userTicket.id}`)
                                            }}
                                            align="center" 
                                            style={{ 
                                                borderLeft: 'none', 
                                                borderRight: 'none', 
                                            }}>
                                                {userTicket.type}
                                        </TableCell>
                                        <TableCell 
                                            onClick={() => {
                                                navigate(`/ticket/ticket-detail/${userTicket.id}`)
                                            }}
                                            align="center" 
                                            style={{ 
                                                borderLeft: 'none', 
                                                borderRight: 'none', 
                                            }}>
                                                {userTicket.issuerId}
                                        </TableCell>
                                        <TableCell 
                                            onClick={() => {
                                                navigate(`/ticket/ticket-detail/${userTicket.id}`)
                                            }}
                                            align="center" 
                                            style={{ 
                                                borderLeft: 'none',
                                                 borderRight: 'none', 
                                            }}>
                                            {new Date(userTicket.submittedDate).toLocaleString('en-US')}
                                            {/* {new TimeRanges(userTickets.submittedDate).toLocaleString('en-US')} */}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )
                        )}

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
                        <Button 
                        onClick={() => handlePreviousPage}
                        
                        sx={{
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
                                {currentPage}
                        </Typography>
                        <Button 
                            onClick={() => { handleNextPage }}
                        sx={{
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

