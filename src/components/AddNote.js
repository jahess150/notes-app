import React, { useState } from "react";

// Material UI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import CloseIcon from "@mui/icons-material/Close";

export default function AddNote({ onFinish, onSave }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSave = () => {
        onSave(title, content);
        onFinish(); // Hide the AddNote component
    };

    const handleCancel = () => {
        onFinish(); // Hide the AddNote component without saving
    };

    return (
        <Box
            component='form'
            noValidate
            autoComplete='off'
            className='add-note'>
            <h2>Add a New Note</h2>

            <TextField
                required
                id='outlined-required'
                label='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label for='note-content'>Note Content:</label>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}></textarea>

            <Button
                variant='contained'
                startIcon={<SaveAltIcon />}
                onClick={handleSave}>
                Save
            </Button>
            <Button
                variant='contained'
                startIcon={<CloseIcon />}
                onClick={handleCancel}>
                Cancel
            </Button>
        </Box>
    );
}
