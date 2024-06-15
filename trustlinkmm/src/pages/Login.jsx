import {
    Box,
    Container,
    Typography,
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
    Tooltip,
    
} from "@mui/material"

import {
    Search as SearchIcon,
} from "@mui/icons-material"

// import 'react-quill/dist/quill.snow.css'; 

// import ReactQuill from 'react-quill';
// // import { Tooltip } from '@mui/material';
// import { styled } from '@mui/system';

// import { Slate, Editable, withReact } from 'slate-react';

// import { Editor, EditorState } from 'draft-js';
// import 'draft-js/dist/Draft.css';

// import { useAuth } from "../providers/AuthProvider"
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// if (typeof global === 'undefined') {
//     window.global = window;
//   }


import { useAuth } from "../providers/AuthProvider";

import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

import { useMemo } from "react";

const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ];


  import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/plugins.pkgd.min.css';
  

export default function Login() {

    const [editorContent, setEditorContent] = useState('');


    const [content, setContent] = useState('');

    const {auth, setAuth } = useAuth();

  const handleModelChange = (newContent) => {
    setContent(newContent);
  };

    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState(initialValue);


    const emailRef = useRef();
	const passwordRef = useRef();
    const [category, setCategory] = useState("");

	// const { setAuth, setAuthUser } = useAuth();
	const navigate = useNavigate();

	const [hasError, setHasError] = useState(false);
	const [errorMsessage, setErrorMessage] = useState(10);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
      };


      const [selectedFiles, setSelectedFiles] = useState([]);

      const handleFileUpload = (files) => {
        const fileArray = Array.from(files);
        setSelectedFiles([...selectedFiles, ...fileArray]);
    
        return new Promise((resolve) => {
          const link = URL.createObjectURL(files[0]);
          resolve({ link });
        });
      };


     

      const editorRef = useRef();

    //   useEffect(() => {
    //       const toolbarButtons = document.querySelectorAll('.ql-toolbar .ql-formats button');
    //       toolbarButtons.forEach(button => {
    //           const tooltipText = tooltips[`.${button.classList[1]}`];
    //           if (tooltipText) {
    //               button.setAttribute('title', tooltipText);
    //           }
    //       });
    //       ignoreWarningRef.current = true;
    //   }, []);

    //   useEffect(() => {
    //     // Ignore the warning if the flag is set to true
    //     if (ignoreWarningRef.current) {
    //         console.warn = () => {};
    //     }
    // }, [ignoreWarningRef.current]);


      


    return (
        <Box>
            <Box sx={{
                width: "100%",
                height: "200px",
                background: "#f2f4f8",
            }}>
                <Box>
                    <Container maxWidth="lg">
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            // justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "50px",
                        }}
                        
                        >
                            <Typography>How can we help you?</Typography>
                            <Box sx={{
                                width: "100%",
                                paddingLeft: "60px",
                                paddingRight: "60px",
                            }}>
                                <Box sx={{ 
                                    width: "100%", 
                                    // border: "1px solid", 
                                   
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    background: "#ffffff",
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
                                            
                                            }}
                                        />
                                    
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box> 

            <Box sx={{ marginTop: "60px" }}>
				<Box>
                    <Container maxWidth="lg">
                           <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                // border: "1px solid",
                           }}>
                                <Box sx={{
                                    width: "400px",

                                }}>
                                    <form
                                            onSubmit={e => {
                                            e.preventDefault();
                                            const email = emailRef.current.value;
                                            const password = passwordRef.current.value;

                                            if (!email || !password) {
                                                setHasError(true);
                                                setErrorMessage("Invalid login details");
                                                return false;
                                            }

                                            // (async () => {
                                            // 	const api = import.meta.env.VITE_API_URL;
                                            // 	const res = await fetch(`${api}/login`, {
                                            // 		method: "POST",
                                            // 		body: JSON.stringify({ handle, password }),
                                            // 		headers: {
                                            // 			"Content-Type": "application/json",
                                            // 		},
                                            // 	});

                                            // 	if (!res.ok) {
                                            // 		// setErrorMessage( (await res.json()).msg );
                                            // 		setErrorMessage("incorrect handle or password");
                                            // 		setHasError(true);
                                            // 		return false;
                                            // 	}

                                            // 	const data = await res.json();
                                            // 	localStorage.setItem("token", data.token);

                                            // 	fetch(`${api}/verify`, {
                                            // 		headers: {
                                            // 			Authorization: `Bearer ${data.token}`,
                                            // 		},
                                            // 	})
                                            // 		.then(res => res.json())
                                            // 		.then(user => {
                                            // 			setAuth(true);
                                            // 			setAuthUser(user);
                                            // 			navigate("/");
                                            // 		});
                                            // })();


                                            async (email, password) => {
                                                try {
                                                  const response = await fetch('http://localhost:3000/login', {
                                                    method: 'POST',
                                                    headers: {
                                                      'Content-Type': 'application/json',
                                                    },
                                                    body: JSON.stringify({ email, password }),
                                                  });
                                            
                                                  const data = await response.json();
                                                  if (response.ok) {
                                                    localStorage.setItem('token', data.token);
                                                    const user = { email }; // Add more user details as needed
                                                    localStorage.setItem('user', JSON.stringify(user));
                                            
                                                    setAuth({
                                                      isAuthenticated: true,
                                                      token: data.token,
                                                      user,
                                                    });
                                            
                                                    navigate('/view-tickets');
                                                  } else {
                                                    setHasError(true);
                                                    setErrorMessage(data.message || 'Invalid login details');
                                                  }
                                                } catch (error) {
                                                  setHasError(true);
                                                  setErrorMessage('An error occurred during login');
                                                }
                                              };
                                        }}>
                                        {hasError && (
                                            <Alert
                                                severity="warning"
                                                sx={{ mb: 4 }}>
                                                {errorMsessage}
                                            </Alert>
                                        )}

                                        <TextField
                                            label="Email"
                                            fullWidth
                                            sx={{ mb: 2 }}
                                            inputRef={emailRef}
                                        />
                                        <TextField
                                            label="Password"
                                            fullWidth
                                            type="password"
                                            sx={{ mb: 2 }}
                                            inputRef={passwordRef}
                                        />
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

                                        {/* <Box>
                                            <ReactQuill 
                                                value={value} 
                                                onChange={setValue} 
                                                ref={editorRef}
                                                formats={formats}
                                                modules={modules}
                                                placeholder="Write your message..."
                                                style={{ height: '200px', marginBottom: '20px' }}
                                            />

                                        </Box> */}

                                        {/* <Editor
                                            editorState={editorState}
                                            onChange={setEditorState}
                                        /> */}

                                        {/* <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
                                        <Editable />
                                        </Slate> */}


                                <FroalaEditor
                                    tag='textarea'
                                    config={{
                                        placeholderText: 'Write your message...',
                                        charCounterCount: false,
                                        toolbarButtons: [
                                            'bold', 'italic', 'underline', 'strikeThrough', 
                                            'insertLink', 'insertImage', 'insertFile','formatOL', 'formatUL', 
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
                                        events: {
                                            'image.beforeUpload': function (files) {
                                              handleFileUpload(files);
                                              return false; // Stop default upload
                                            },
                                            'file.beforeUpload': function (files) {
                                              handleFileUpload(files);
                                              return false; // Stop default upload
                                            }
                                          }
                                    }}
                                    model={editorContent}
                                    onModelChange={setEditorContent}
                                />

                                    

                                        {/* <TextField

                                            label="Message"
                                            fullWidth
                                            multiline
                                            row={8}
                                            type="text"
                                            
                                        /> */}
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                height: "40px",
                                                background: "#74b683",
                                                textTransform: 'none',
                                                '&:hover': {
                                                    backgroundColor: "#74b683", 
                                                    
                                                  },
                                            }}    
                                            
                                        >
                                            Login
                                        </Button>
                                        </form>
                                    <Box sx={{
                                        marginTop: "15px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                        <Link style={{ textDecoration: "none" }}>
                                            <Typography sx={{ fontSize: "15px" }}>
                                                Forgot Password?
                                            </Typography>
                                        
                                        </Link>
                                    </Box>
                                    <Box sx={{
                                        marginTop: "40px",
                                        marginBottom: "130px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                        <Typography>
                                            Do not have an account?
                                        </Typography>
                                        <Button
                                           variant="outlined"

                                            sx={{
                                                 mt: 2, 
                                                //  background: "#74b683", 
                                                 borderColor: 'black',
                                                 color: 'black',
                                                 textTransform: 'none',
                                                 '&:hover': {
                                                    backgroundColor: '#c8e6c9', 
                                                    borderColor: 'black', 
                                                    color: 'black', 
                                                  },
                                                  fontSize: '16px',
                                                  fontWeight: 'bold',
                                                  letterSpacing: 'normal',
                                            }}
                                            fullWidth
                                            onClick={() => {
                                                navigate("/register");
                                            }}>
                                            Register
                                        </Button>
                                    </Box>

                                </Box>


                           </Box>
                    </Container>
                </Box>
			</Box>


        </Box>
         
    )
}