import {
    Box,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Container,
    Link,
    TextField,
    Avatar,
    Alert,
    FormControl,
    Select,
} from "@mui/material"

import {
    Search as SearchIcon,
    Computer as ComputerIcon,
    StarOutline as StarOutlineIcon,
    AccessAlarms as AccessAlarmsIcon,

} from "@mui/icons-material"

import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/plugins.pkgd.min.css';
import { useAuth } from "../providers/AuthProvider";
  

export default function TicketDetail() {
    const [ ticket, setTicket ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const messageRef = useRef();
    

    const froalaEditorRef = useRef(null);

    const initialValue = [
        {
          type: 'paragraph',
          children: [{ text: 'A line of text in a paragraph.' }],
        },
      ];

      const [value, setValue] = useState(initialValue);

      const [editorContent, setEditorContent] = useState('');

      const getTextContent = () => {
        const description = froalaEditorRef.current.editor.html.get();

        // Create a temporary element
        const tempElement = document.createElement('div');
        // Set its inner HTML to the content you want to extract
        tempElement.innerHTML = description;
        // Get the text content
        const textContent = tempElement.textContent || tempElement.innerText;

        return textContent;
    };

    const [showReply, setShowReply] = useState(false);

    const priorityRef = useRef();

    const [ priorityCategories, setPriorityCategories ] = useState(ticket.priority);
    const handlePriorityCategoriesChange = (event) => {
        setPriorityCategories(event.target.value);
    };

    // const priorityRef = useRef();



    const { id } = useParams();

    const [ showCloseTicketSuccess, setShowCloseTicketSuccess ] = useState(false);
   
    // const remove = () => {
    //     setTicket();
    // }


    const navigate = useNavigate();
    // const [ userTicket, setUserTicket ] = useState({});

    useEffect(() => {
        ( async () => {
            const token = localStorage.getItem('token');
            const api = import.meta.env.VITE_API_URL;

			const ticket_res = await fetch(`${api}/api/tickets/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,

                },
            });

            const data = await ticket_res.json();
			setTicket( data );
            setIsLoading(false);
        })();
    }, [id]);

    // const [ ticketStatus, setTicketStatus ] = useState(ticket.status)


   

    return (
        <Box>
            {isLoading ? (
                <Box>
                    <Container maxWidth="lg">
                        <Typography sx={{ textAlign: "center" }}>Loading....</Typography>
                    </Container>
                </Box>
            ) : (
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
                            
                        }}>View tickets</Typography>
                        <Typography sx={{ color: "#788288" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Typography component="span" sx={{ color: "#3097d2" }}>
                                    Home 
                                </Typography>
                            </Link>
                             / View tickets / TL-{ticket.id}
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

            <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
                {showCloseTicketSuccess && (
                    <Alert severity="success">
                        Closing Ticket successfully
                    </Alert>
                )}
                <Box sx={{ 
                    display: "flex", 
                    justifyContent: "space-between",
                    "@media (max-width: 950px)" : {
                        display: "flex",
                        flexDirection: "column",
                        // justifyContent: "space-between",

                    }
                }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton sx={{
                            "&:hover" : {
                                background: "none",
                            }
                        }}>
                            <ComputerIcon />
                        </IconButton>
                        <Typography sx={{
                            fontSize: "20px",
                            color: "#788288",
                        }}>
                            TL - {ticket.id}
                        </Typography>
                        <IconButton sx={{
                            "&:hover" : {
                                background: "none",
                            }
                        }}>
                            <StarOutlineIcon style={{ color: "orange" }}/>
                            <StarOutlineIcon style={{ color: "orange" }}/>
                            <StarOutlineIcon style={{ color: "orange" }}/>
                            <StarOutlineIcon style={{ color: "orange" }}/>
                            <StarOutlineIcon style={{ color: "orange" }}/>                        
                        </IconButton>
                    </Box>
                    <Box>
                        <Box sx={{ 
                            display: "flex", 
                            alignItems: "center", 
                            gap: "20px", 
                            marginTop: "20px", 

                            "@media (max-width: 950px)" : {
                                justifyContent: "flex-end",
                            }
                            
                        }}>
                            <Button 
                                 onClick={() => setShowReply(prev => !prev)}
                                sx={{
                                    background: "none",
                                    "&:hover" : {
                                        background: "#788288",
                                        color: "#ffffff",
                                    }
                                }}
                            
                            >
                                Reply
                            </Button>

                            <Button 
                                
                                onClick={ async() => {
                                    try {
                                        const token = localStorage.getItem('token');
                                        const api = import.meta.env.VITE_API_URL;
                                        const closeTicketCriteria = {
                                            status: "Closed",
                                            assign_to: ticket.assigneeId,
                                            created_by: ticket.issuer.id,
                                        };
                                       

                                        // if(description) closeTicketCriteria.description = description;
                                   
                                        const res = await fetch(`${api}/api/tickets/${ticket.id}/change_status`, {
                                            method: "POST",
                                            body: JSON.stringify(closeTicketCriteria),
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'Authorization': `Bearer ${token}`,
                            
                                            },
                                        });
                                    //    navigate("/ticket/view-ticket");
                                    const data  = await res.json();
                                    console.log("Response from server:", data); 
                                    // localStorage.setItem('ticketClosed', 'true');

                                    // setTicket({...ticket, data})
                                    setShowCloseTicketSuccess(true)
                                    // window.location.reload();
                                    // setTicketStatus("Closed")

                                    // navigate("/tickets/view-tickets")

                                    // window.onload = () => {
                                    //     const ticketClosed = localStorage.getItem('ticketClosed');
                                    //     if (ticketClosed === 'true') {
                                    //         setShowCloseTicketSuccess(true);
                                    //         localStorage.removeItem('ticketClosed'); // Remove flag after showing alert
                                    //     }
                                    // };

                                    } catch (error) {
                                        console.error('Error Closing ticket:', error);
                                    }

                                }}
                                sx={{
                                    background: "red",
                                    color: "#ffffff",
                                    display: showCloseTicketSuccess ? "block" : "none",
                                    "&:hover" : {
                                        background: "red",
                                        color: "#000000",
                                    }
                                }}

                                
                            
                            >
                                Close ticket
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <hr style={{ border: "1px solid #f2f4f8", marginTop: "20px" }} />
                <Box sx={{
                    width: "100%",
                    paddingLeft: "20px",
                    marginTop: "20px",
                }}>
                    <Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                        }}>
                            <Typography sx={{  fontSize: "20px", color: "#788288", fontWeight: 700,}}>Subject</Typography>
                            <Typography sx={{  fontSize: "16px", color: "#788288", fontWeight: 700, }}>{ticket.title}</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            "@media (max-width: 950px)" : {
                                    display: "block",
                                    marginTop: "20px",
                            }
                        }}>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}>
                                <Typography  sx={{  fontSize: "20px", color: "#788288", fontWeight: 700,}}>Created by</Typography>
                                <Typography  sx={{  fontSize: "15px", color: "#788288", fontWeight: 400,}}>{ticket.issuer.username}</Typography>
                            </Box>
                            {/* <hr style={{ height: "30px", width: "2px", marginTop: "25px"}} /> */}
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}>
                                <Typography  sx={{  fontSize: "20px", color: "#788288", fontWeight: 700,}}>Created on</Typography>
                                           
                                <Typography  sx={{  fontSize: "15px", color: "#788288", fontWeight: 400,}}>
                                    {new Date(ticket.submittedDate).toLocaleString('en-US')}

                                </Typography>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}>
                                <Typography  sx={{  fontSize: "20px", color: "#788288", fontWeight: 700,}}>Modified on</Typography>
                                <Typography  sx={{  fontSize: "15px", color: "#788288", fontWeight: 400,}}>
                                    {new Date(ticket.lastModifiedDate).toLocaleString('en-US')}
                                </Typography>
                            </Box>
                            

                        </Box>
                    </Box>
                    <hr style={{ border: "1px solid #f2f4f8", marginTop: "10px" }} />
                    
                    <Box>
                        <Box sx={{
                            display: "flex",
                            // justifyContent: "space-around",
                            alignItems: "center",
                            gap: "200px",
                            marginBottom: "30px",
                            "@media (max-width: 950px)" : {
                                display: "block",
                                marginBottom: 0,
                            }
                        }}>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "50px",
                                "@media (max-width: 950px)" : {
                                    display: "block",

                                }
                            }}>
                                <Typography sx={{  fontSize: "20px", color: "#788288", fontWeight: 700,}}>Department</Typography>
                                <Typography sx={{  fontSize: "16px",}}>{ticket.department.departmentName}</Typography>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "50px",
                                "@media (max-width: 950px)" : {
                                    display: "block",
                                    
                                }
                            }}>
                                <Typography sx={{  fontSize: "20px", color: "#788288", fontWeight: 700,}}>Status</Typography>
                                <Typography sx={{  fontSize: "16px",}}>{ticket.status}</Typography>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "50px",
                                "@media (max-width: 950px)" : {
                                    display: "block",
                                    
                                }
                            }}>
                                <Typography sx={{  fontSize: "20px", color: "#788288", fontWeight: 700,}}>Ticket Type</Typography>
                                <Typography sx={{  fontSize: "16px",}}>
                                    {ticket.type}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            // justifyContent: "space-around",
                            alignItems: "center",
                            gap: "200px",
                            marginBottom: "30px",
                            "@media (max-width: 950px)" : {
                                display: "block",
                                marginBottom: 0,                            
                            }
                        }}>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "50px",
                                "@media (max-width: 950px)" : {
                                    display: "block",
                                    
                                }
                            }}>
                                <Typography sx={{  fontSize: "20px", color: "#788288", fontWeight: 700,}}>Priority</Typography>
                                <Typography sx={{  fontSize: "16px",}}>

                                    {ticket.priority}
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "50px",
                                "@media (max-width: 950px)" : {
                                    display: "block",
                                    
                                }
                            }}>
                                <Typography sx={{  fontSize: "20px", color: "#788288", fontWeight: 700,}}>Category</Typography>
                                <Typography sx={{  fontSize: "16px",}}>
                                    {ticket.category.categoryName}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            // justifyContent: "space-around",
                            alignItems: "center",
                            gap: "200px",
                            "@media (max-width: 950px)" : {
                                display: "block",
                                
                            }
                        }}>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "150px",
                                "@media (max-width: 950px)" : {
                                    display: "block",
                                    
                                }
                            }}>
                                <Typography sx={{  fontSize: "20px", color: "#788288", fontWeight: 700,}}>Assigned to</Typography>
                                <Typography sx={{  fontSize: "16px",}}>
                                    {ticket.assigneeId}
                                </Typography>
                            </Box>
                            
                        </Box>
                    </Box>

                </Box>
                    <Box sx={{
                        width: "100%",
                        paddingLeft: "20px",
                        marginTop: "20px",
                        background: "#ffe3af",
                    }}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "150px",
                            "@media (max-width: 980px)" : {
                                display: "block",
                            }
                        }}>
                            <Box>
                                <Typography>SLA</Typography>
                            </Box>

                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <Typography>Response Time</Typography>
                                <IconButton sx={{
                                    fontSize: "15px",
                                    textAlign: "center",
                                }}>
                                    <AccessAlarmsIcon />
                                     Undue
                                </IconButton>
                            </Box>

                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <Typography>Resolution Time</Typography>
                                <IconButton sx={{
                                    fontSize: "15px",
                                    textAlign: "center",
                                }}>
                                    <AccessAlarmsIcon />
                                     Undue
                                </IconButton>
                            </Box>

                            
                        </Box>
                    </Box>

                <hr style={{ border: "1px solid #f2f4f8", marginTop: "20px" }} />


                {showReply && (
                   <form onSubmit={e => {
                        e.preventDefault();

                        const message = getTextContent()
                        const priority = priorityRef.current.value;

                        (async () => {
                            try {
                                const token = localStorage.getItem('token');

                                const api = import.meta.env.VITE_API_URL;
                                const replyCriteria = {
                                    message,
                                    senderId: ticket.issuerId,
                                };
                        
                                if (ticket.priority) {
                                    replyCriteria.priority = priority;
                                }
                        
                                // if (title) filterCriteria.title = title;
                                // if (ticketCategory) filterCriteria.categoryId = ticketCategory;
                                // if (department) filterCriteria.departmentId = department;
                                // if (priority) filterCriteria.priority = priority;
                                // if (status) filterCriteria.status = status;
                                const res = await fetch(`${api}/api/tickets/$ticket.id}`, {
                                    method: 'POST',
                                    body: JSON.stringify(replyCriteria),
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${token}`,

                                    },
                                });
                                if (!res.ok) {
                                   
                                    const errorText = await res.text();
                                    throw new Error(`Server error: ${res.status} - ${errorText}`);
                                  }

                                  
                               
                               
                                  
                                  
                                  
                                  const data = await res.json();
                                  console.log(data);

                                //   const authUserTickets = data.ticket.filter(ticket => ticket.issuerId === authUser.id);

                                setTicket(prevTicket => ({
                                    ...prevTicket,
                                    message_ticket: [...prevTicket.message_ticket, data],
                                }));

                                if (authUserTickets.length === 0) {
                                    setNothingFilter(true);
                                }

                                

                    
                               
                                    console.log('Ticket filtered successfully');
                              
                            } catch (error) {
                                console.error('Error filtering ticket:', error.message);
                                setHasError(true);
                                setErrorMessage("Failed to filter ticket");
                            }
                        })();  
                   }}>
                             <Box sx={{ 
                        width: "100%", 
                        // "@media (max-width: 750px)" : {
                        //     width: "100%",
                        // }
                                            
                    }}>
                        <FroalaEditor
                            tag='textarea'
                            config={{
                                placeholderText: 'Write your message...',
                                charCounterCount: false,
                                toolbarButtons: [
                                    'bold', 'italic', 'underline', 'strikeThrough', 
                                    'insertLink', 'insertImage', 'formatOL', 'formatUL', 
                                    'quote', 'html', 'paragraphFormat', 'fontSize'],
                                    paragraphFormat: {
                                                        N: 'Normal',
                                                        H1: 'Heading 1',
                                                        H2: 'Heading 2',
                                                        H3: 'Heading 3',
                                                        H4: 'Heading 4',
                                                        H5: 'Heading 5',
                                                        H6: 'Heading 6'
                                    },
                                    fontSize: ['8', '10', '12', '14', '16', '18', '20', '24', '30', '36', '48', '60', '72']
                            }}
                            model={editorContent}
                            onModelChange={setEditorContent}
                            ref={froalaEditorRef}
                                                
                        />
                            </Box>
                            <Box sx={{
                                marginTop: "30px",
                                display: "flex",
                                gap: "40px",
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}>
                                <Box sx={{ 
                                            width: "150px",  
                                            // height: "10px",
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            }
                                        }}>
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="category-label"
                                                value={ priorityCategories }
                                                onChange={handlePriorityCategoriesChange}
                                                inputRef={priorityRef}
                                                

                                            >
                                                <MenuItem value="Critical">Critical</MenuItem>
                                                <MenuItem value="Moderate">Moderate</MenuItem>
                                                <MenuItem value="Low">Low</MenuItem>
                                                <MenuItem value="Medium">Medium</MenuItem>
                                            </Select>
                                        </FormControl>
                                </Box>
                                <Box sx={{
                                    display: "flex",
                                    gap: "20px",
                                }}>
                                    <Button sx={{
                                        border: "1px solid",
                                        height: "30px",
                                        }}>Cancel</Button>
                                    <Button 
                                         type="submit"
                                         fullWidth
                                        variant="contained"

                                    sx={{
                                   
                                        background: "#74b683",
                                        height: "30px",
                                        color: "#ffffff",

                                       
                                            fontSize: "15px",
                                            '&:hover': {
                                                backgroundColor: "#74b683", 
                                                
                                        }    
                                        

                                    }}>Submit</Button>
                                </Box>
                            </Box>
                   </form>
                )}

                <Box sx={{
                    marginTop: "20px",
                    paddingLeft: "20px",
                }}>
                    <Box sx={{
                        border: "3px solid #f2f4f8",
                        marginBottom: "60px",
                        
                    }}>
                       <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",

                            "@media (max-width: 950px)" : {
                                display: "flex",
                                flexDirection: "column",
                            }

                       }}>
                                <Box sx={{
                                    marginTop: "20px",
                                    display: "flex",
                                    gap: "25px",
                                }}>
                                    <Avatar 
                                        sx={{
                                            marginLeft: "20px",
                                            width: 60,
                                            height: 60,
                                            fontSize: "30px",
                                        }}
                                    
                                    >
                                        TA
                                    </Avatar>

                                    <Box sx={{
                                        "@media (max-width: 950px)" : {
                                            width: "100%",
                                        }
                                    }}>
                                        <Typography sx={{ fontSize: "15px"}}>
                                            <Typography component="span" sx={{ fontSize: "18px", fontWeight: 600, marginRight: "10px", }}>Client</Typography>
                                            {ticket.issuer.username}
                                        </Typography>
                                        <Typography sx={{ fontSize: "15px"}}>
                                            {ticket.issuer.email}
                                        </Typography>
                                        <Typography sx={{ fontSize: "15px"}}>
                                            <Typography component="span" sx={{ fontSize: "18px", fontWeight: 600, marginRight: "10px", }}>To</Typography>
                                            {ticket.department.departmentName}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    marginTop: "20px",
                                    marginRight: "20px",
                                    // marginBottom: "30px",
                                    display: "flex",
                                    gap: "25px",
                                    
                                    "@media (max-width: 950px)" : {
                                        justifyContent: "flex-end",
                                        marginTop: "15px",
                                    }
                                }}>
                                    <Box>
                                        <Typography sx={{ fontSize: "13px"}}>
                                            <Typography component="span" sx={{ fontSize: "15px", fontWeight: 600, marginRight: "10px", }}>Posted on</Typography>
                                                {new Date(ticket.submittedDate).toLocaleString('en-US')}
                                        </Typography>
                                    </Box>
                                </Box>
                       </Box>

                       <hr style={{ 
                            border: "1px solid #f2f4f8", 
                            marginTop: "20px",
                            
                        }} />

                        <Box sx={{
                            height: "50px",
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <Typography sx={{ marginLeft: "20px" }}>
                                {ticket.description}
                            </Typography>
                        </Box>

                    </Box>
                   
                </Box>
                
                {/* {ticket.message_ticket && (
                    ticket.message_ticket.map(messageTicket => (
                        <Box sx={{
                            marginTop: "20px",
                            paddingLeft: "20px",
                        }}>
                            <Box sx={{
                                border: "3px solid #f2f4f8",
                                marginBottom: "60px",
                                
                            }}>
                               <Box sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
        
                                    "@media (max-width: 950px)" : {
                                        display: "flex",
                                        flexDirection: "column",
                                    }
        
                               }}>
                                        <Box sx={{
                                            marginTop: "20px",
                                            display: "flex",
                                            gap: "25px",
                                        }}>
                                            <Avatar 
                                                sx={{
                                                    marginLeft: "20px",
                                                    width: 60,
                                                    height: 60,
                                                    fontSize: "30px",
                                                }}
                                            
                                            >
                                                TA
                                            </Avatar>
        
                                            <Box sx={{
                                                "@media (max-width: 950px)" : {
                                                    width: "100%",
                                                }
                                            }}>
                                                <Typography sx={{ fontSize: "15px"}}>
                                                    <Typography component="span" sx={{ fontSize: "18px", fontWeight: 600, marginRight: "10px", }}>Client</Typography>
                                                    {ticket.issuer.username}
                                                </Typography>
                                                <Typography sx={{ fontSize: "15px"}}>
                                                    {ticket.issuer.email}
                                                </Typography>
                                                <Typography sx={{ fontSize: "15px"}}>
                                                    <Typography component="span" sx={{ fontSize: "18px", fontWeight: 600, marginRight: "10px", }}>Replied To</Typography>
                                                    {messageTicket.recipientId}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            marginTop: "20px",
                                            marginRight: "20px",
                                            // marginBottom: "30px",
                                            display: "flex",
                                            gap: "25px",
                                            
                                            "@media (max-width: 950px)" : {
                                                justifyContent: "flex-end",
                                                marginTop: "15px",
                                            }
                                        }}>
                                            <Box>
                                                <Typography sx={{ fontSize: "13px"}}>
                                                    <Typography component="span" sx={{ fontSize: "15px", fontWeight: 600, marginRight: "10px", }}>Posted on</Typography>
                                                        {new Date(messageTicket.emittedDate).toLocaleString('en-US')}
                                                </Typography>
                                            </Box>
                                        </Box>
                               </Box>
        
                               <hr style={{ 
                                    border: "1px solid #f2f4f8", 
                                    marginTop: "20px",
                                    
                                }} />
        
                                <Box sx={{
                                    height: "50px",
                                    display: "flex",
                                    alignItems: "center",
                                }}>
                                    <Typography sx={{ marginLeft: "20px" }}>
                                        {messageTicket.message}
                                    </Typography>
                                </Box>
        
                            </Box>
                           
                        </Box>
                    ))
                )} */}


{ticket.message_ticket && (
    ticket.message_ticket.map((messageTicket, index) => {
        const isUserMessage = messageTicket.senderID === authUser.id || messageTicket.senderID === ticket.issuerId;
        const isAdminMessage = !isUserMessage; 
            <Box
                key={index}
                sx={{
                    marginTop: "20px",
                    paddingLeft: "20px",
                    display: "flex",
                    justifyContent: isUserMessage ? "flex-end" : "flex-start",
                }}
            >
                <Box
                    sx={{
                        border: "3px solid #f2f4f8",
                        marginBottom: "60px",
                        maxWidth: "70%",
                        textAlign: isUserMessage ? "right" : "left",
                        backgroundColor: isUserMessage ? "#e1ffc7" : "#ffffff", // Different background colors for user and admin messages
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: isUserMessage ? "row-reverse" : "row",
                            "@media (max-width: 950px)": {
                                flexDirection: "column",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                marginTop: "20px",
                                display: "flex",
                                gap: "25px",
                                flexDirection: isUserMessage ? "row-reverse" : "row",
                            }}
                        >
                            <Avatar
                                sx={{
                                    marginLeft: isUserMessage ? "0" : "20px",
                                    marginRight: isUserMessage ? "20px" : "0",
                                    width: 60,
                                    height: 60,
                                    fontSize: "30px",
                                }}
                            >
                                {isUserMessage ? "U" : "A"}
                            </Avatar>

                            <Box
                                sx={{
                                    "@media (max-width: 950px)": {
                                        width: "100%",
                                    }
                                }}
                            >
                                <Typography sx={{ fontSize: "15px" }}>
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: "18px", fontWeight: 600, marginRight: "10px" }}
                                    >
                                        {isUserMessage ? "User" : "Admin"}
                                    </Typography>
                                    {isUserMessage ? ticket.issuer.username : "Admin"}
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>
                                    {isUserMessage ? ticket.issuer.email : "admin@example.com"}
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: "18px", fontWeight: 600, marginRight: "10px" }}
                                    >
                                        Replied To
                                    </Typography>
                                    {messageTicket.recipientId}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                marginTop: "20px",
                                marginRight: "20px",
                                display: "flex",
                                gap: "25px",
                                "@media (max-width: 950px)": {
                                    justifyContent: "flex-end",
                                    marginTop: "15px",
                                }
                            }}
                        >
                            <Box>
                                <Typography sx={{ fontSize: "13px" }}>
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: "15px", fontWeight: 600, marginRight: "10px" }}
                                    >
                                        Posted on
                                    </Typography>
                                    {new Date(messageTicket.emittedDate).toLocaleString('en-US')}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <hr
                        style={{
                            border: "1px solid #f2f4f8",
                            marginTop: "20px",
                        }}
                    />

                    <Box
                        sx={{
                            height: "50px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: isUserMessage ? "flex-end" : "flex-start",
                        }}
                    >
                        <Typography sx={{ marginLeft: isUserMessage ? "0" : "20px", marginRight: isUserMessage ? "20px" : "0" }}>
                            {messageTicket.message}
                        </Typography>
                    </Box>
                </Box>
            </Box>
    })
)}

            </Container>


        </Box>
            )}
        </Box>
    )
}