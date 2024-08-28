import React from "react";
import Note from "./Note";

export default function NoteList({ notes, editFunction, deleteFunction }) {
    return (
        <ul className='note-list'>
            {notes.map((note, index) => (
                <React.Fragment key={index}>
                    <Note
                        note={note}
                        onEdit={editFunction}
                        onDelete={deleteFunction}
                    />
                </React.Fragment>
            ))}
        </ul>
    );
}
