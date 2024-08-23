import React from "react";

export default function Note() {
    return (
        <div className='note'>
            <p>This is an example note</p>
            <a href='/' className='icon-button'>
                <span className='material-icons'>edit</span>
            </a>
            <a href='/' className='icon-button'>
                <span className='material-icons'>delete</span>
            </a>
        </div>
    );
}
