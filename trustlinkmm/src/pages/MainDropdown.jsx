import React, { useState } from 'react';
import { Button, Menu, MenuItem, ListItemText, ListItemIcon, Box, Avatar, IconButton } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import {
  ArrowDropDown as ArrowDropDownIcon,
  Language as LanguageIcon, 
} from "@mui/icons-material"

const MainDropdown = () => {
  const [anchorElA, setAnchorElA] = useState(null);
  const [showSubMenuC, setShowSubMenuC] = useState(false);
  const [showSubMenuD, setShowSubMenuD] = useState(false);

  const handleOpenA = (event) => {
    setAnchorElA(event.currentTarget);
  };

  const handleCloseA = () => {
    setAnchorElA(null);
    setShowSubMenuC(false); // Close sub-menu C when main menu A is closed
    setShowSubMenuD(false); // Close sub-menu D when main menu A is closed
  };

  const toggleSubMenuC = () => {
    setShowSubMenuC(prev => !prev);
    setShowSubMenuD(false); // Close sub-menu D when sub-menu C is toggled
  };

  const toggleSubMenuD = () => {
    setShowSubMenuD(prev => !prev);
    setShowSubMenuC(false); // Close sub-menu C when sub-menu D is toggled
  };

  return (
    <div>
      <Button
        aria-controls="main-menu"
        aria-haspopup="true"
        onClick={handleOpenA}
        variant="contained"
      >
        Open Menu A
      </Button>
      <Menu
        id="main-menu"
        anchorEl={anchorElA}
        open={Boolean(anchorElA)}
        onClose={handleCloseA}
        slotProps={{
          paper: {
              sx: {
                  // position: 'fixed',
                  width: '100vw',  // Full viewport width
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
                  transform: 'translateX(-30px)',

              },
          },
      }}
      
      >
        <MenuItem>
          <ListItemText>Item 1</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Item 2</ListItemText>
        </MenuItem>
        <MenuItem onClick={toggleSubMenuC}>
        <Box>
                                 <Button 
                                     endIcon={<ArrowDropDownIcon />}
                                     
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
                                     {/* {authUser.username} */}
                                 </Button>
                                 
                                </Box>
        </MenuItem>
        {showSubMenuC && [
          <MenuItem key="sub-item-c1">
            <ListItemText>Sub Item C1</ListItemText>
          </MenuItem>,
          <MenuItem key="sub-item-c2">
            <ListItemText>Sub Item C2</ListItemText>
          </MenuItem>,

           <MenuItem key="profile"
           onClick={() => {
              navigate(`/client`)
           }}
           
       >
           <ListItemText primary="Profile" />
       </MenuItem>,
        ]}
        <MenuItem onClick={toggleSubMenuD}>
        <Box>
                                 <IconButton 
                                    
                                     sx={{
                                         color: "#f5f5dc", 
                                     
                                     }}
                                 >
                                     <LanguageIcon />
                                     <ArrowDropDownIcon />
                                 </IconButton>
                                 
                             </Box>
        </MenuItem>
        {showSubMenuD && [
          <MenuItem key="sub-item-d1">
            <ListItemText>Sub Item D1</ListItemText>
          </MenuItem>,
          <MenuItem key="sub-item-d2">
            <ListItemText>Sub Item D2</ListItemText>
          </MenuItem>,
           <MenuItem
          key="english"
           
       >
           <ListItemText primary="English" />
       </MenuItem>,
       <MenuItem
          key="myanmar3"
           
       >
           <ListItemText primary="Myanmar3" />
       </MenuItem>
       
        ]}
        <MenuItem>
          <ListItemText>Item 3</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MainDropdown;
