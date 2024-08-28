import React, { useState } from "react";

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
        <div className='add-note'>
            <h2>Add a New Note</h2>

            <label for='note-title'>Note Title:</label>
            <input
                type='text'
                id='note-title'
                name='note-title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label for='note-content'>Note Content:</label>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}
