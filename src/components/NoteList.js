import React, { useState } from "react";
import Note from "./Note";
import EditNote from "./EditNote";

export default function NoteList({ notes, editFunction, deleteFunction }) {
    /* ------ EditNote Logic ------ */
    
    // Create boolean in state to decide whether to render the EditNote component
    const [showEditNote, setShowEditNote] = useState(false);

    // Function to toggle the EditNote component
    const toggleEditNote = () => {
        setShowEditNote(!showEditNote);
    };

    return (
        <ul className='note-list'>
            {notes.map((note, index) => (
                <React.Fragment key={index}>
                    <Note
                        note={note}
                        onEdit={toggleEditNote} 
                        onDelete={deleteFunction}
                    />
                    {showEditNote && (
                        <EditNote
                            note={note}
                            onFinish={toggleEditNote}
                            onSave={editFunction}
                        />
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
}
