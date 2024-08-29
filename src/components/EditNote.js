import React, { useState } from "react";

// Material UI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import CloseIcon from "@mui/icons-material/Close";

export default function EditNote({ note, onFinish, onSave }) {
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    const handleSave = () => {
        onSave(note, newTitle, newContent);
        onFinish(); // Hide the EditNote component
    };

    const handleCancel = () => {
        onFinish(); // Hide the EditNote component without saving
    };

    return (
        <Box
            component='form'
            noValidate
            autoComplete='off'
            className='edit-note'>
            <h2>Edit Note</h2>

            <TextField
                required
                id='outlined-required'
                label='Title'
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />

            <label for='note-content'>Note Content:</label>
            <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}></textarea>

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
