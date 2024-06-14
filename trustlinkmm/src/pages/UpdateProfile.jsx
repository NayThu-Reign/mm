import {
    Box,
    Typography,
    Avatar,
    Container,
    IconButton,
    TextField,
    Button,
    FormControl,
    Select,
    MenuItem,

} from "@mui/material"

import {
    Search as SearchIcon,
} from "@mui/icons-material"

import 'react-quill/dist/quill.snow.css'; 

import ReactQuill, { displayName } from 'react-quill';

import { styled } from '@mui/system';

import { Link, useNavigate, useParams } from "react-router-dom"
import { useRef, useState, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";

export default function UpdateProfile() {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const userNameRef = useRef();
    const phoneRef = useRef();
	const addressRef = useRef();
	const cityRef = useRef();
	const stateRef = useRef();
	const zipCodeRef = useRef();
	const countryRef = useRef();
	const websiteRef = useRef();
	const companyNameRef = useRef();
	const departmentRef = useRef();
	const jobTitleRef = useRef();
	const companyWebsiteRef = useRef();
	const languageRef = useRef();
	const forumSignatureRef = useRef();
    const forumCommentNotificationRef = useRef();

    const { authUser, setAuthUser } = useAuth();

    const [user, setUser] = useState({});

	const { id } = useParams();



    const [hasError, setHasError] = useState(false);
	const [errorMsessage, setErrorMessage] = useState("");



    const [ languageCategories, setLanguageCategories ] = useState(10);
	// const { setAuth, setAuthUser } = useAuth();

    const handleLanguageCategoriesChange = (event) => {
        setLanguageCategories(event.target.value);
    };



    const [value, setValue] = useState('');
    const tooltips = {
        '.ql-bold': 'Bold',
        '.ql-italic': 'Italic',
        '.ql-underline': 'Underline',
        '.ql-list.ql-bullet': 'Unordered List',
        '.ql-list.ql-ordered': 'Ordered List',
        '.ql-header': 'Header',
        '.ql-link': 'Insert Link',
        '.ql-image': 'Insert Image',
        '.ql-blockquote': 'Blockquote',
        '.ql-code-block': 'Code Block',
        '.ql-clean': 'Remove Formatting'
    };

    const modules = {
        toolbar: [
            // [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image'],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'blockquote': true }, { 'code-block': true }],
            ['clean'], // remove formatting button
        ],
    }

    const formats = [
        'header', 'font', 'list', 'bullet',
        'bold', 'italic', 'underline',
        'color', 'background',
        'align', 'link', 'image',
        'blockquote', 'code-block',
    ];


    const [photo, setPhoto] = useState('');

    // useEffect(() => {
	// 	(async () => {

    //         const token = localStorage.getItem('token');
	// 		const api = import.meta.env.VITE_API_URL;

	// 		const user_res = await fetch(`${api}/api/users/}`);
	// 		const user_data = await user_res.json();

	// 		setUser(user_data);
    //         if (user_data.userAvatar) {
    //             setPhoto(user_data.userAvatar);
    //         }

	// 		// const profilePhoto = `${api}/api/users/${id}`;
	// 		// setPhoto(profilePhoto);

			
	// 	})();
	// }, []);

    const getFile = async () => {
        const [fileHandle] = await window.showOpenFilePicker({
            types: [
                {
                    description: "Images",
                    accept: {
                        "image/*" : [".png", ".jpeg", ".jpg"],
                    },
                },
            ],
            excludeAcceptAllOption: true,
            multiple: false,
        });
        return await fileHandle.getFile();
    }

    const changePhoto = async e => {
    try{
        const file = await getFile();
        setPhoto(URL.createObjectURL(file));

        const fileName = 
            file.type === "image/png"
                ? "profile.png"
                : "profile.jpg"

        const formData = new FormData();
        formData.append("profile", file, fileName);


        const token = localStorage.getItem('token');

        const api = import.meta.env.VITE_API_URL;

        const upload_res = await fetch(`${api}/api/uploads/avatar`, {
            method: 'POST',
            body: formData,
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
    
          if (!upload_res.ok) {
            throw new Error('Failed to upload photo');
          }
    
          const data = await upload_res.json();
          console.log('File uploaded successfully:', data);
          setAuthUser({...authUser, userAvatar: data.srcUrl})
        } 
        catch (error) {
          console.error('Error uploading photo:', error);
        }
    }




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
                            "@media (max-width: 990px)" : {
                                marginBottom: "30px",
                                // paddingLeft: "60px",
                                // paddingRight: "60px",
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
                                    
                                }}>Profile</Typography>
                                <Typography sx={{ color: "#788288" }}>
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                        <Typography component="span" sx={{ color: "#3097d2" }}>
                                            Home 
                                        </Typography>
                                    </Link>
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                        <Typography component="span" sx={{ color: "#3097d2" }}>
                                            / Profile 
                                        </Typography>
                                    </Link>

                                    / Update Profile
                                     
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

            <Container maxWidth="lg" >
                <Box sx={{
                    // width: "100%",
                    marginTop: "20px",
                    marginLeft: "60px",
                    "@media (max-width: 950px)" : {
                        marginLeft: 0,
                    }
                    // border: "1px solid",
                }}>
                    <Box sx={{
                        display: "flex",
                        gap: "20px",
                        "@media (max-width: 765px)" : {
                            display: "block",
                        }
                    }}>
                        <Box>
                            <Typography sx={{ 
                                fontSize: "15px", 
                                color: "#788288",
                                marginTop: "10px",
                                 
                            }}>Profile Image</Typography>
                        </Box>
                        <Box sx={{ display: "flex",gap: "20px", marginTop: "30px" }}>
                            <Box>
                                <Avatar
                                    src={photo}
                                    sx={{
                                        
                                        width: 120,
                                        height: 120,
                                        fontSize: "45px",
                                        // color: "#788288",
                                    }}
                                >
                                    H
                                </Avatar>
                            </Box>
                            <Box>
                                <Button 
                                    onClick={changePhoto}
                                    sx={{ 
                                        marginTop: "30px", 
                                        fontSize: "12px",                                     
                                }}>
                                    Upload Image
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ 
                        width: "100%",
                        marginTop: "20px",
                        marginBottom: "60px",
                        
                    }}>
                    <form
                        onSubmit={e => {
                                    e.preventDefault();
                                      
                                    const firstName = firstNameRef.current.value;
                                    const lastName = lastNameRef.current.value;
                                    const userName = userNameRef.current.value;
                                    const email =  emailRef.current.value;
                                    const phone = phoneRef.current.value;
                                    const address = addressRef.current.value;
                                    const city = cityRef.current.value;
                                    const state = stateRef.current.value;
                                    const zipCode = zipCodeRef.current.value;
                                    const country = countryRef.current.value;
                                    const website = websiteRef.current.value;
                                    const companyName = companyNameRef.current.value;
                                    const department = departmentRef.current.value;
                                    const jobTitle = jobTitleRef.current.value;
                                    const companyWebsite = companyWebsiteRef.current.value;
                                    const language = languageRef.current.value;
                                    const forumSignature = forumSignatureRef.current.value;
                                    const forumCommentNotification = forumCommentNotificationRef.current.value;
                                   

                                    if ( !firstName || !lastName || !userName || !email ) {
                                        setHasError(true);
                                        setErrorMessage("Invalid profile details");
                                        return false;
                                    }

                                    (async () => {
                                        try {
                                            const token = localStorage.getItem('token');
                                            
                                            const api = import.meta.VITE_API_URL;
                                            const user_res = await fetch(`${api}/api/users/${authUser.id}/update_details`, {
                                                method: "POST",
                                                body: {
                                                    
                                                },
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                    'Authorization': `Bearer ${token}`,
                                                },

                                            })
                                            const data = await user_res.json();
                                            console.log(data);
                                            setAuthUser(data);
                                
                                            if (res.status === 200) {
                                                navigate('/client/profile');
                                                console.log('Update Profile successfully');
                                            } else {
                                                console.error('Error editing Profile:', data.error ? data.error.details : 'Unknown error');
                                                setHasError(true);
                                                setErrorMessage(data.error ? data.error.details : 'Unknown error');
                                            }
                                        } catch (error) {
                                            console.error('Error editing Profile:', error.message);
                                            setHasError(true);
                                            setErrorMessage("Failed to update profile");
                                        }
                                    })()

                                
                        }}>

                            {hasError && (
                                <Alert
                                    severity="warning"
                                    sx={{ mb: 4 }}>
                                        {errorMsessage}
                                </Alert>
                            )}
                                    
                                <Box sx={{
                                    display: "flex",
                                        // justifyContent: "center",
                                    alignItems: "center",
                                        // border: "1px solid",
                                    gap: "20px",
                                    marginBottom: "10px",
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>First Name</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                            type="text"
                                            value={authUser.firstName}
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>Last Name</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                                value={authUser.lastName}
                                            type="text"
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>Email</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                            type="text"
                                            value={authUser.email}
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
                                            }}
                                                inputRef={emailRef}
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>User Name</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                            type="text"
                                            value={authUser.userName}
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
                                            }}
                                                inputRef={userNameRef}
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>Phone</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                                value={authUser.phone}
                                            type="number"
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
                                            }}
                                                inputRef={phoneRef}
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>Address</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                                value={authUser.address}
                                            type="text"
                                            multiline
                                            rows={5}
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
                                            }}
                                                inputRef={addressRef}
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>City</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                                value={authUser.city}
                                            type="text"
                                            // multiline
                                            // rows={5}
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
                                            }}
                                                inputRef={cityRef}
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>State</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                            type="text"
                                            value={authUser.state}
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
                                            }}
                                                inputRef={stateRef}
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>Zip Code</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                            type="text"
                                            value={authUser.zipCode}
                                            
                                    
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
                                            }}
                                                inputRef={zipCodeRef}
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>Country</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                                value={authUser.country}
                                            type="text"
                                            
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
                                            }}
                                                inputRef={countryRef}
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>Website</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                                value={authUser.website}
                                            type="text"
                                           
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
                                            }}
                                                inputRef={websiteRef}
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>Company Name</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                                value={authUser.companyName}
                                            type="text"
                                           
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
                                            }}
                                                inputRef={companyNameRef}
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>Department</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                                value={authUser.department}
                                            type="text"
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
                                            }}
                                                inputRef={departmentRef}
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>Job Title</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                                value={authUser.jobTitle}
                                            type="text"
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
                                            }}
                                                inputRef={jobTitleRef}
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>Company Website</label>
                                    </Box>
                                    <Box>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                            type="text"
                                            sx={{ 
                                                    width: "750px",
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

                                                    "@media (max-width: 950px)" : {
                                                        width: "100%",
                                                    }
                                            }}
                                                inputRef={companyWebsiteRef}
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
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>Language</label>
                                    </Box>
                                        <Box>
                                            <FormControl sx={{ width: "750px" }}>
                                                <Select
                                                    labelId="language-label"
                                                    value={ languageCategories}
                                                    onChange={handleLanguageCategoriesChange}
                                                >
                                                    <MenuItem value={10}>English</MenuItem>
                                                    <MenuItem value={20}>Myanmar3</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                </Box>
                                {/* <Box sx={{
                                    display: "flex",
                                        // justifyContent: "center",
                                    alignItems: "center",
                                        // border: "1px solid",
                                    gap: "20px",
                                    marginBottom: "30px",
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            justifyContent: "flex-start",
                                        }
                                    }}>                                           
                                        <label style={{ color: "#808080", fontSize: "15px" }}>Forum Signature</label>
                                    </Box>
                                        <Box>
                                            <ReactQuill 
                                                value={value} 
                                                onChange={setValue} 
                                                formats={formats}
                                                modules={modules}
                                                placeholder="Write your message..."
                                                style={{ height: '200px', marginBottom: '20px', width: "750px" }}
                                            />
                                        </Box>
                                </Box> */}

                                <Box sx={{
                                    display: "flex",
                                        // justifyContent: "center",
                                    alignItems: "center",
                                        // border: "1px solid",
                                    gap: "20px",
                                    marginBottom: "10px",
                                        // marginLeft: "30px",

                                    "@media (max-width: 950px)" : {
                                        display: "block",
                                    }
                                }}>
                                    <Box sx={{
                                        width: "150px",
                                        display: "flex",
                                        // justifyContent: "flex-end",
                                        // border: "1px solid",
                                            // border: "1px solid",
                                        "@media (max-width: 950px)" : {
                                            // justifyContent: "flex-end",
                                        }
                                    }}>                                           
                                        <label style={{ 
                                            color: "#808080", 
                                            fontSize: "15px", 
                                            marginLeft: "20px",
                                            // border: "1px solid",
                                            "@media(maxWidth: 960px)" : {
                                                
                                                // marginRight: "10px",
                                            }
                                        }}>
                                            Forum Comment Notification
                                        </label>
                                    </Box>
                                    <Box sx={{ width: "50px" }}>
                                        <TextField
                                                // label="Email"
                                                // fullWidth
                                            type="checkbox"
                                            sx={{ 
                                                    width: "20px",
                                                    // height: "100%",
                                                    // mb: 2,
                                                    // border: "1px solid",
                                                    display: "flex",
                                                    
                                                    backgroundColor: 'white',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                        // borderColor: "black",
                                                            border: "none"
                                                        },
                                                        border: "none",
                                                    },
                                                    '& .MuiInputBase-input': {
                                                            height: '20px', 
                                                            padding: '8px',
                                                            // width: "100%",
                                                            // border: "none",

                                                    },

                                                    "@media (max-width: 950px)" : {
                                                        // width: "100%",
                                                        marginLeft: "30px",
                                                        marginTop: "10px",
                                                    }
                                            }}
                                                inputRef={forumCommentNotificationRef}
                                            />
                                        </Box>
                                </Box>
                                   
                                    

                                    <Box sx={{
                                        marginLeft: "180px",
                                        marginTop: "20px",
                                        width: "90px",
                                    }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                height: "45px",
                                                background: "#74b683",
                                                textTransform: 'none',
                                                fontSize: "15px",
                                                '&:hover': {
                                                    backgroundColor: "#74b683", 
                                                    
                                                  },
                                            }}    
                                            
                                        >
                                            Update
                                        </Button>
                                    </Box>



                    </form>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}