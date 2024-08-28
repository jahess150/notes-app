import React, { useState } from "react";

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
        <div className='edit-note'>
            <h2>Update Note</h2>

            <label for='note-title'>New Title:</label>
            <input
                type='text'
                id='note-title'
                name='note-title'
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />

            <label for='note-content'>New Note Content:</label>
            <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
            ></textarea>

            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}
