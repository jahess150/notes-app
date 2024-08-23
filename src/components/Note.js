import React from "react";

export default function Note(note) {
    return (
        <li className='note'>
            <h3 className='note-title'>{note.title}</h3>
            <p className='note-content'>{note.content}</p>
            <a href='/' className='icon-button'>
                <span className='material-icons'>edit</span>
            </a>
            <a href='/' className='icon-button'>
                <span className='material-icons'>delete</span>
            </a>
        </li>
    );
}
