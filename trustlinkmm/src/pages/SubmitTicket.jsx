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
    List,
    ListItem,
} from "@mui/material"

import {
    Search as SearchIcon,
    Refresh as RefreshIcon,
    Clear as ClearIcon,
} from "@mui/icons-material"

import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react";


import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/plugins.pkgd.min.css';
import { useAuth } from "../providers/AuthProvider";
  

export default function SubmitTicket() {
	const navigate = useNavigate();
    const {authUser, setAuthUser} = useAuth();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const departmentRef = useRef();
	const priorityRef = useRef();
	const ticketCategoryRef = useRef();
    const titleRef = useRef();
    // const messageRef = useRef();
    const imageVerificationRef = useRef();

    const froalaEditorRef = useRef(null);

    const [hasError, setHasError] = useState(false);
	const [errorMsessage, setErrorMessage] = useState("");

    const [ departmentCategories, setDepartmentCategories ] = useState([]);
    // const [ ticketCategories, setTicketCategories ] = useState([]);
    const [ ticketCategories, setTicketCategories ] = useState([]);
    const [ priorityCategories, setPriorityCategories ] = useState("Critical");
    

    const [ selectedDepartmentCategory, setSelectedDepartmentCategory ] = useState('');
    const [ selectedTicketCategory, setSelectedTicketCategory ] = useState('');

    const [files, setFiles] = useState([]);

    const handleFileUpload = (uploadedFiles) => {
        if (!uploadedFiles || uploadedFiles.length === 0) {
            console.log("No files to upload");
            return;
        }
    
        const fileArray = Array.from(uploadedFiles);
        console.log("Files to upload:", fileArray);
    
        const fileReaders = [];
        const processedFiles = [];
    
        fileArray.forEach(file => {
            const reader = new FileReader();
            fileReaders.push(reader);
    
            reader.onload = (event) => {
                processedFiles.push({
                    name: file.name,
                    data: event.target.result
                });
    
                if (processedFiles.length === fileArray.length) {
                    console.log("Processed files:", processedFiles);
                    setFiles((prevFiles) => [...prevFiles, ...processedFiles]);
                }
            };
    
            reader.readAsDataURL(file);
        });
    };

    const handleDelete = (fileName) => {
        const updatedFiles = files.filter(file => file.name !== fileName);
        setFiles(updatedFiles);
    };

    

	// const { setAuth, setAuthUser } = useAuth();

    const handleDepartmentCategoriesChange = (event) => {
        setSelectedDepartmentCategory(event.target.value);
    };

    const handlePriorityCategoriesChange = (event) => {
        setPriorityCategories(event.target.value);
    };

    const handleTicketCategoriesChange = (event) => {
        setSelectedTicketCategory(event.target.value);
      };
    

      const [verificationInput, setVerificationInput] = useState('');
      const [verificationError, setVerificationError] = useState('');

      const generateRandomCaptcha = () => {
        const randomString = Math.random().toString(36).substring(2, 8);
        return `https://via.placeholder.com/150x50?text=${randomString}`;
    };

    const [captchaImage, setCaptchaImage] = useState(generateRandomCaptcha());

    const handleRefreshClick = () => {
        setCaptchaImage(generateRandomCaptcha());
        setVerificationInput(''); 
        setVerificationError(''); 
    };

    const initialValue = [
        {
          type: 'paragraph',
          children: [{ text: 'A line of text in a paragraph.' }],
        },
      ];

      const [value, setValue] = useState(initialValue);

      const [editorContent, setEditorContent] = useState('');


    // const [content, setContent] = useState('');
    // const [formData, setFormData] = useState({
    //     title: '',
    //     description: '',
    //     status: 'Pending',
    //     priority: 'Low',
    //     categoryId: '',
    //     assigneeId: null,
    //     startDate: null,
    //     endDate: null,
    //     issuerId: null,
    //     departmentId: '',
    //     firstName: '',
    //     lastName: '',
    //     email: ''
    // });

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
    //   const getTextContent = () => {
    //     const description = froalaEditorRef.current.editor.html.get();

    //     // Create a temporary element
    //     const tempElement = document.createElement('div');
    //     // Set its inner HTML to the content you want to extract
    //     tempElement.innerHTML = description;
    //     // Get the text content
    //     const textContent = tempElement.textContent || tempElement.innerText;

    //     return textContent;
    // };

    const getTextContent = () => {
        const descriptionHtml = froalaEditorRef.current.editor.html.get();
    
        // Create a temporary div element to manipulate the HTML
        const tempElement = document.createElement('div');
        tempElement.innerHTML = descriptionHtml;
    
        // Get plain text content without HTML tags
        const textContent = tempElement.innerText.trim();
    
        // Get image sources as base64 data URLs
        const imageElements = tempElement.querySelectorAll('img');
        const imageSources = Array.from(imageElements).map(img => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const image = new Image();
            image.src = img.src;
    
            // Draw image onto canvas to get base64 data URL
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
            return canvas.toDataURL('image/png');
        });
    
        // Combine text content and image sources into a single object
        const description = {
            textContent: textContent,
            imageSources: imageSources
        };
    
        return description;
    };

    // const getTextContent = () => {
    //     const descriptionHtml = froalaEditorRef.current.editor.html.get();
    
    //     // Create a temporary div element to manipulate the HTML
    //     const tempElement = document.createElement('div');
    //     tempElement.innerHTML = descriptionHtml;
    
    //     // Get plain text content without HTML tags
    //     const textContent = tempElement.innerText.trim();
    
    //     // Get image sources as base64 data URLs
    //     const imageElements = tempElement.querySelectorAll('img');
    //     const imageBase64Array = [];
    
    //     imageElements.forEach(img => {
    //         const canvas = document.createElement('canvas');
    //         const ctx = canvas.getContext('2d');
    //         const image = new Image();
    //         image.src = img.src;
    
    //         // Ensure the image is loaded before manipulating it
    //         image.onload = () => {
    //             canvas.width = image.width;
    //             canvas.height = image.height;
    //             ctx.drawImage(image, 0, 0);
    //             const base64String = canvas.toDataURL('image/png');
    //             imageBase64Array.push(base64String);
    //         };
    //     });
    
    //     // Return an object containing both text content and image sources
    //     return {
    //         textContent: textContent,
    //         imageSources: imageBase64Array,
    //     };
    // };
    
    

    // const getTextContent = () => {
    //     // Get the HTML content from Froala Editor
    //     const descriptionHtml = froalaEditorRef.current.editor.html.get();
    
    //     // Create a temporary div element to manipulate the content
    //     const tempElement = document.createElement('div');
    //     tempElement.innerHTML = descriptionHtml;
    
    //     // Extract plain text content
    //     const textContent = tempElement.innerText.trim(); // Use innerText to get plain text without HTML tags
    
    //     // Extract base64 image sources
    //     const imageElements = tempElement.querySelectorAll('img');
    //     const imageSources = Array.from(imageElements).map(img => img.src);
    
    //     // Construct an object to represent both text and image sources
    //     const content = {
    //         textContent,
    //         imageSources
    //     };
    
    //     return content;
    // };

    // const getTextContent = () => {
    //     const descriptionHtml = froalaEditorRef.current.editor.html.get();
    //     const tempElement = document.createElement('div');
    //     tempElement.innerHTML = descriptionHtml;
    
    //     const textContent = tempElement.innerText.trim();
    //     const imageElements = tempElement.querySelectorAll('img');
    //     const imageSources = Array.from(imageElements).map(img => img.src);
    
    //     // Return combined object
    //     return {
    //         textContent: textContent,
    //         imageSources: imageSources
    //     };
    // };


    //   const getTextContent = () => {
    //     const description = froalaEditorRef.current.editor.html.get();

    //     // Create a temporary element
    //     const tempElement = document.createElement('div');
    //     // Set its inner HTML to the content you want to extract
    //     tempElement.innerHTML = description;
    //     // Get the text content
    //     const textContent = tempElement.textContent || tempElement.innerText;

    //     return textContent;
    // };

    // const getTextContent = () => {
    //     const descriptionHtml = froalaEditorRef.current.editor.html.get();
    //     const tempElement = document.createElement('div');
    //     tempElement.innerHTML = descriptionHtml;
    
    //     const textContent = tempElement.innerText || tempElement.textContent
    //     const imageElements = tempElement.querySelectorAll('img');
    //     const imageSources = Array.from(imageElements).map(img => img.src);
    
    //     // Return combined object
    //     return {
    //         textContent: textContent,
    //         imageSources: imageSources
    //     };
    // };

    // const getTextContent = async () => {
    //     const descriptionHtml = froalaEditorRef.current.editor.html.get();
    //     const tempElement = document.createElement('div');
    //     tempElement.innerHTML = descriptionHtml;
    
    //     // Convert images to base64 strings and replace src attributes with base64 strings
    //     const imageElements = tempElement.querySelectorAll('img');
    
    //     // Convert each image to base64 and replace src attribute with base64 string
    //     await Promise.all(Array.from(imageElements).map(async (img) => {
    //         const canvas = document.createElement('canvas');
    //         const ctx = canvas.getContext('2d');
    //         const image = new Image();
    //         image.src = img.src;
    
    //         // Wait for image to load
    //         await new Promise((resolve) => {
    //             image.onload = () => resolve();
    //         });
    
    //         canvas.width = image.width;
    //         canvas.height = image.height;
    //         ctx.drawImage(image, 0, 0);
    //         const base64String = canvas.toDataURL('image/png');
    //         img.src = base64String;
    //     }));
    
    //     // Get the plain text content
    //     const textContent = tempElement.textContent || tempElement.innerText;
    
    //     // Return the plain text content
    //     return textContent.trim();
    // };
    
    
    // const getTextContent = () => {
    //     const descriptionHtml = froalaEditorRef.current.editor.html.get();
    //     const tempElement = document.createElement('div');
    //     tempElement.innerHTML = descriptionHtml;
    
    //     // Extract text content without HTML tags
    //     const textContent = tempElement.innerText.trim();
    
    //     // Convert images to base64 strings
    //     const imageElements = tempElement.querySelectorAll('img');
    //     const imageSources = Array.from(imageElements).map(img => {
    //         const canvas = document.createElement('canvas');
    //         const ctx = canvas.getContext('2d');
    //         const image = new Image();
    //         image.src = img.src;
            
    //         // Draw the image onto the canvas to get base64 data URL
    //         canvas.width = image.width;
    //         canvas.height = image.height;
    //         ctx.drawImage(image, 0, 0);
    //         return canvas.toDataURL('image/png');
    //     });
    
    //     return {
    //         textContent: textContent,
    //         imageSources: imageSources
    //     };
    // };
    
    
    
   
    const getProcessedContent = () => {
        const description = froalaEditorRef.current.editor.html.get();

        // Create a temporary element
        const tempElement = document.createElement('div');
        // Set its inner HTML to the content you want to extract
        tempElement.innerHTML = description;

        // Process the content to remove tags but retain images
        const content = Array.from(tempElement.childNodes).map(node => {
            if (node.nodeName === 'IMG') {
                return node.outerHTML; // Keep image tags with base64 data
            } else {
                return node.textContent || node.innerText; // Extract text content
            }
        }).join('');

        return content;
    };
   
    useEffect(() => {
        fetchDepartmentCategories();
        fetchTicketCategories();
      }, []);
     


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
                                    
                                }}>Submit ticket</Typography>
                                <Typography sx={{ color: "#788288" }}>
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                        <Typography component="span" sx={{ color: "#3097d2" }}>
                                            Home 
                                        </Typography>
                                    </Link>
                                     / Submit ticket
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

            <Box sx={{ marginTop: "60px", marginBottom: "100px" }}>
                <Box>
                    <Container maxWidth="lg">
                        <Box sx={{
                             display: "flex",
                             flexDirection: "column",
                             justifyContent: "center",
                             alignItems: "center",
                        }}>
                            <Box sx={{
                                width: "100%",
                                // border: "1px solid"
                            }}>
                                <form
                                     onSubmit={e => {
                                        e.preventDefault();
                                        const firstName = firstNameRef.current ? firstNameRef.current.value : '';
                                        const lastName = lastNameRef.current ? lastNameRef.current.value : '';
                                        const email = emailRef.current ? emailRef.current.value : '';
                                        const department = departmentRef.current.value;
                                        const priority = priorityRef.current.value;
                                        const ticketCategory = ticketCategoryRef.current.value;
                                        const title = titleRef.current.value;
                                        const description = getTextContent();

                                        // const { textContent, imageSources } = getTextContent();
                                        // const description = getProcessedContent();
                                        // const description = froalaEditorRef.current.editor.html.get();
                                        // const description = editorContent;
                                        const imageVerification = imageVerificationRef.current.value;

                                        // const { textContent, imageSources } = getTextContent();

                                       
                                        console.log('title', title);
                                        // console.log('Description:', description);

                                        if (!authUser) {
                                            // Validation for unauthenticated users
                                            if (!firstName || !lastName || !email || !department || !ticketCategory || !title || !imageVerification) {
                                                setHasError(true);
                                                setErrorMessage("Invalid submit tickets details");
                                                return false;
                                            }
                                        } else {
                                            // Validation for authenticated users
                                            if (!department || !priority || !ticketCategory || !title || !imageVerification ) {
                                                setHasError(true);
                                                setErrorMessage("Invalid submit tickets details");
                                                return false;
                                            }
                                        }

                                        const captchaText = captchaImage.substring(captchaImage.lastIndexOf('=') + 1);
                                        if (imageVerification !== captchaText) {
                                            setVerificationError('Incorrect verification code');
                                            return;
                                        }

                                        (async () => {
                                            try {
                                                const token = localStorage.getItem('token');

                                                const api = import.meta.env.VITE_API_URL;
                                                const res = await fetch(`${api}/api/tickets/submitTicket`, {
                                                    method: 'POST',
                                                    body: JSON.stringify({ 
                                                        title,
                                                        description: JSON.stringify(description),
                                                        "categoryId": ticketCategory,
                                                        "issuerId": authUser ? authUser.id : '',
                                                        "departmentId": department,
                                                        priority: priority,
                                                        firstName : firstName ? firstName : '',
                                                        lastName : lastName ? lastName : '',
                                                        email : email ? email : '',
                                                        // "status": "Closed",
                                                    
                                                    }),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                        'Authorization': `Bearer ${token}`,

                                                    },
                                                });
                                    
                                                const data = await res.json();
                                                console.log(data);
                                    
                                                if (res.status === 200) {
                                                    // navigate('/tickets/view-tickets');
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

                                    {hasError && (
                                        <Alert
                                            severity="warning"
                                            sx={{ mb: 4 }}>
                                            {errorMsessage}
                                        </Alert>
                                    )}

                                        {/* <Grid container alignItems="center" sx={{ mb: 2 }}>
                                            <InputLabel id="category-label" sx={{ marginRight: 1 }}>Category</InputLabel>
                                            <FormControl fullWidth>
                                            <Select
                                                labelId="category-label"
                                                value={category}
                                                onChange={handleCategoryChange}
                                            >
                                                <MenuItem value={10}>Category 1</MenuItem>
                                                <MenuItem value={20}>Category 2</MenuItem>
                                                <MenuItem value={30}>Category 3</MenuItem>
                                            </Select>
                                            </FormControl>
                                        </Grid> */}
                                    
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }
                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                            // border: "1px solid",
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Department</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px",  
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            }
                                        }}>
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="category-label"
                                                value={ selectedDepartmentCategory }
                                                onChange={handleDepartmentCategoriesChange}
                                                inputRef={departmentRef}
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
                                   { !authUser && (
                                        <>
                                                     <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }
                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>First Name</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px",
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            }    
                                        }}>
                                            <TextField
                                                // label="Email"
                                                fullWidth
                                                type="text"
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
                                                }}
                                                inputRef={firstNameRef}
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Last Name</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px",
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            } 
                                            
                                        }}>
                                            <TextField
                                                // label="Email"
                                                fullWidth
                                                type="text"
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
                                                }}
                                                inputRef={lastNameRef}
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Email</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px",
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            },
                                             
                                        }}>
                                            <TextField
                                                // label="Email"
                                                fullWidth
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
                                                }}
                                                inputRef={emailRef}
                                            />
                                        </Box>
                                    </Box>
                                        
                                        
                                        </>
                                   )}
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }
                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                            // border: "1px solid",
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Priority</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px", 
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
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }
                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Ticket category</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px",
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            } 
                                            
                                        }}>
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="category-label"
                                                value={ selectedTicketCategory  }
                                                onChange={handleTicketCategoriesChange}
                                                inputRef={ticketCategoryRef}
                                            >
                                                    {Array.isArray(ticketCategories) && ticketCategories.map((ticket) => (
                                                        <MenuItem key={ticket.id} value={Number(ticket.id)}>
                                                            {ticket.categoryName}
                                                        </MenuItem>
                                                    ))}

                                                        {/* {ticketCategories.map((ticket) => (
                                                                    <MenuItem key={ticket.id} value={ticket.id}>
                                                                        {ticket.name}
                                                                    </MenuItem>
                                                        ))} */}

                                                {/* <MenuItem value={10}>Critical</MenuItem>
                                                <MenuItem value={20}>Moderate</MenuItem>
                                                <MenuItem value={30}>Low</MenuItem>
                                                <MenuItem value={30}>Medium</MenuItem> */}
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
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Subject</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px", 
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            }
                                            
                                        }}>
                                            <TextField
                                                // label="Email"
                                                type="text"
                                                fullWidth
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
                                                }}
                                                inputRef={titleRef}
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Message </label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px", 
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            }
                                            
                                        }}>
                                              <FroalaEditor
                                                tag='textarea'
                                                config={{
                                                    placeholderText: 'Write your message...',
                                                    charCounterCount: false,
                                                    toolbarButtons: [
                                                        'bold', 'italic', 'underline', 'strikeThrough', 
                                                        'insertLink', 'insertImage', 'insertFile', 'formatOL', 'formatUL', 
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
                                                    fontSize: ['8', '10', '12', '14', '16', '18', '20', '24', '30', '36', '48', '60', '72'],
                                                    imageUpload: true,
                                                    imageUploadURL: false,
                                                    imageUploadToS3: false,
                                                    imageAllowedTypes: ['jpeg', 'jpg', 'png'],
                                                    events: {
                                                        // 'paste.before': function (e, editor, html) {
                                                        //     // Strip all HTML tags to handle plain text
                                                        //     const plainText = (new DOMParser()).parseFromString(html, 'text/html').body.textContent || '';
                                                        //     editor.html.insert(plainText, true);
                                                        //     return false; // Prevent default paste behavior
                                                        // },
                                                        'file.beforeUpload': function (files) {
                                                            console.log("File before upload:", files);
                                                            handleFileUpload(files);
                                                            return false; // Stop default upload
                                                        },
                                                        'image.beforeUpload': function (files) {
                                                            if (files.length) {
                                                                const reader = new FileReader();
                                                                reader.onload = function (e) {
                                                                    const result = e.target.result;
                                                                    froalaEditorRef.current.editor.image.insert(result, null, null, froalaEditorRef.current.editor.image.get());
                                                                };
                                                                reader.readAsDataURL(files[0]);
                                                            }
                                                            return false; // Prevent default upload
                                                        }
                                                    }
                                                }}
                                                model={editorContent}
                                                onModelChange={setEditorContent}
                                                ref={froalaEditorRef}
                                                // style={{ height: '800px' }}
                                                
                                            />
                                                <Box sx={{
                                                    marginTop: "10px",
                                                }}>
                                                    <Typography>Uploaded Files:</Typography>
                                                    <List>
                                                        {files.map((file, index) => (
                                                            <ListItem key={index}>
                                                                {file.name} 
                                                                <IconButton onClick={() => handleDelete(file.name)}>
                                                                    <ClearIcon />
                                                                </IconButton>
                                                            
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        // border: "1px solid",
                                        gap: "20px",
                                        marginBottom: "10px",
                                        marginLeft: "30px",
                                        // border: "1px solid",
                                        "@media (max-width: 750px)" : {
                                            display: "block",
                                            // flexDirection: "column",
                                            // justifyContent: "flex-start",


                                        }

                                    }}>
                                        <Box sx={{
                                            width: "150px",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            // border: "1px solid",
                                            "@media (max-width: 750px)" : {
                                                justifyContent: "flex-start",
                                            }
                                        }}>                                           
                                            <label style={{ color: "#808080", fontSize: "15px" }}>Image Verification</label>
                                        </Box>
                                        <Box sx={{ 
                                            width: "750px", 
                                            "@media (max-width: 750px)" : {
                                                width: "100%",
                                            }
                                            
                                        }}>
                                            <img src={captchaImage} alt="captcha" style={{ marginRight: '10px'}}/>
                                            <IconButton onClick={handleRefreshClick}>
                                                <RefreshIcon />
                                            </IconButton>
                                            <TextField
                                                // label="Email"
                                                fullWidth
                                                // type="text"
                                                required
                                                error={!!verificationError}
                                                helperText={verificationError}
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
                                                }}
                                                inputRef={imageVerificationRef}
                                                value={verificationInput}
                                                onChange={(e) => setVerificationInput(e.target.value)}
                                            />
                                        </Box>
                                    </Box>

                                    <Box sx={{
                                        marginLeft: "180px",
                                        marginTop: "20px",
                                        width: "90px",
                                        "@media (max-width: 750px)" : {
                                            marginLeft: 0,
                                            width: "100%",
                                            // border: "1px solid",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }
                                    }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            // fullWidth
                                            sx={{
                                                height: "45px",
                                                background: "#74b683",
                                                textTransform: 'none',
                                                fontSize: "15px",
                                                color: "#ffffff",
                                                '&:hover': {
                                                    backgroundColor: "#74b683", 
                                                    
                                                },
                                                "@media (max-width: 750px)" : {
                                                    width: "100px",
                                                }
                                            }}    
                                            
                                        >
                                            Submit
                                        </Button>
                                    </Box>



                                </form>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}