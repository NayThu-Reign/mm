import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { FormatBold, FormatItalic, FormatUnderlined, FormatListBulleted, FormatListNumbered, FormatQuote, Code, InsertLink, InsertPhoto } from "@mui/icons-material";

const CustomToolbar = ({ handleBold, handleItalic, handleUnderline, handleBulletList, handleNumberedList, handleQuote, handleCode, handleLink, handleImage }) => {
    return (
        <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title="Bold">
                <IconButton onClick={handleBold}>
                    <FormatBold />
                </IconButton>
            </Tooltip>
            <Tooltip title="Italic">
                <IconButton onClick={handleItalic}>
                    <FormatItalic />
                </IconButton>
            </Tooltip>
            <Tooltip title="Underline">
                <IconButton onClick={handleUnderline}>
                    <FormatUnderlined />
                </IconButton>
            </Tooltip>
            <Tooltip title="Bullet List">
                <IconButton onClick={handleBulletList}>
                    <FormatListBulleted />
                </IconButton>
            </Tooltip>
            <Tooltip title="Numbered List">
                <IconButton onClick={handleNumberedList}>
                    <FormatListNumbered />
                </IconButton>
            </Tooltip>
            <Tooltip title="Quote">
                <IconButton onClick={handleQuote}>
                    <FormatQuote />
                </IconButton>
            </Tooltip>
            <Tooltip title="Code">
                <IconButton onClick={handleCode}>
                    <Code />
                </IconButton>
            </Tooltip>
            <Tooltip title="Insert Link">
                <IconButton onClick={handleLink}>
                    <InsertLink />
                </IconButton>
            </Tooltip>
            <Tooltip title="Insert Image">
                <IconButton onClick={handleImage}>
                    <InsertPhoto />
                </IconButton>
            </Tooltip>
        </Box>
    );
};

export default CustomToolbar;
