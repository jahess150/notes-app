import React from "react";
import Note from "./Note";

export default function NoteList({ notes }) {
    return (
        <ul className='note-list'>
            {notes.map((note) => (
                <Note note={note} />
            ))}
        </ul>
    );
}
