import React from "react";

export default function NavBar() {
    return (
        <nav className='navbar'>
            <p>Hello, Josh!</p>
            <a href='/' className='icon-button'>
                <span className='material-icons'>search</span>
            </a>
            <a href='/' className='icon-button'>
                <span className='material-icons'>add</span>
            </a>
            <a href='/' className='icon-button'>
                <span className='material-icons'>settings</span>
            </a>
        </nav>
    );
}
