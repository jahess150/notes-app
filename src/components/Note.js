import React, { useState } from "react";

export default function Note({ note, onEdit, onDelete }) {
    // Variables for editing notes
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    // Handle editing a note
    const handleEdit = () => {
        // TODO: Add logic to render inputs to enter new title, content and update state variables

        onEdit(note, newTitle, newContent);
    };

    // Handle deleting a note
    const handleDelete = () => {
        onDelete(note);
    };

    return (
        <li className='note'>
            <h3 className='note-title'>{note.title}</h3>
            <p className='note-content'>{note.content}</p>
            <button className='icon-button' onClick={handleEdit}>
                <span className='material-icons'>edit</span>
            </button>
            <button className='icon-button' onClick={handleDelete}>
                <span className='material-icons'>delete</span>
            </button>
        </li>
    );
}
