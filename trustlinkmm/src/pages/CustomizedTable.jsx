import React from 'react';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    Box,
    Avatar,
    Button,
} from '@mui/material'

import { blue, pink } from "@mui/material/colors";

import { useState } from 'react';


export default function CustomizedTable() {
    const [photo, setPhoto] = useState("");

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
        const file = await getFile();
        setPhoto(URL.createObjectURL(file));

        const fileName = 
            file.type === "image/png"
                ? "profile.png"
                : "profile.jpg"

        const formData = new FormData();
        formData.append("profile", file, fileName);
    }

    return (
        <Box>
            <TableContainer 
            component={Paper} 
            style={{ 
                borderTop: '2px solid red', 
                borderBottom: '2px solid red',
            }}
        >
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" style={{ borderBottom: '2px solid blue', borderLeft: 'none', borderRight: 'none' }}>Header 1</TableCell>
                        <TableCell align="center" style={{ borderBottom: '2px solid blue', borderLeft: 'none', borderRight: 'none' }}>Header 2</TableCell>
                        <TableCell align="center" style={{ borderBottom: '2px solid blue', borderLeft: 'none', borderRight: 'none' }}>Header 3</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[
                        { col1: 'Data 1', col2: 'Data 2', col3: 'Data 3' },
                        { col1: 'Data 4', col2: 'Data 5', col3: 'Data 6' },
                    ].map((row, index) => (
                        <TableRow key={index}>
                            <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{row.col1}</TableCell>
                            <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{row.col2}</TableCell>
                            <TableCell align="center" style={{ borderLeft: 'none', borderRight: 'none' }}>{row.col3}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>


            <Button 
                onClick={changePhoto}
            >
                <Avatar 
                    src={photo}
                
                sx={{
                width: 128,
                height: 128,
                background: pink[500],
                }}>
                    H
                </Avatar>
            </Button>
        </Box>
    );
}
