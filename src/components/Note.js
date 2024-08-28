import React, { useState } from "react";
import EditNote from "./EditNote";

export default function Note({ note, onEdit, onDelete }) {
    // Create boolean in state to decide whether to render the EditNote component
    const [showEditNote, setShowEditNote] = useState(false);

    // Function to toggle the EditNote component
    const toggleEditNote = () => {
        setShowEditNote(!showEditNote);
    };

    // Handle editing a note
    const handleEdit = () => {
        toggleEditNote();
    };

    // Handle deleting a note
    const handleDelete = () => {
        onDelete(note);
    };

    return (
        <li className='note'>
            <h3 className='note-title'>{note.title}</h3>
            <p className='note-content'>{note.content}</p>
            {!showEditNote && (
                <button className='icon-button' onClick={handleEdit}>
                    <span className='material-icons'>edit</span>
                </button>
            )}
            {showEditNote && (
                <EditNote
                    note={note}
                    onFinish={toggleEditNote}
                    onSave={onEdit}
                />
            )}
            <button className='icon-button' onClick={handleDelete}>
                <span className='material-icons'>delete</span>
            </button>
        </li>
    );
}
