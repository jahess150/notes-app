import React from "react";

export default function NavBar({ onAddClick }) {
    return (
        <nav className='navbar'>
            <button className='icon-button'>
                <span className='material-icons'>search</span>
            </button>
            <button onClick={onAddClick} className='icon-button'>
                <span className='material-icons'>add</span>
            </button>
            <button className='icon-button'>
                <span className='material-icons'>settings</span>
            </button>
        </nav>
    );
}
