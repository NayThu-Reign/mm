import {
    Box,
    IconButton,
    Typography,
    Container,

} from "@mui/material"

import {
    Search as SearchIcon,
    Computer as ComputerIcon,
    StarOutline as StarOutlineIcon,
    AccessAlarms as AccessAlarmsIcon,

} from "@mui/icons-material"

export default function Search() {
    return (
        <Box>
            <Container maxWidth="lg">
                <Box sx={{
                    width: "100%"
                }}>
                    <Box>
                        <Typography>Tickets (1)</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <Box>
                            <Box sx={{
                                display: "flex",
                                gap: "20px"
                            }}>
                                <Box sx={{
                                    width: "50px",
                                    height: "50px",
                                    background: "#000000",
                                }}>


                                </Box>
                                <Box>
                                    <Typography>TL -1398 - 
                                        <Typography component="span">test</Typography>
                                    </Typography>
                                    <Box sx={{
                                        display: "flex",
                                        gap: "20px",
                                        alignItems: "center",
                                    }}>
                                        <Typography>Creation Date</Typography>
                                        <hr style={{ height: "30px" }} />
                                        <Typography>
                                            Modified Date
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
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
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}