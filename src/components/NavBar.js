import React from "react";

// Material UI components
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";

export default function NavBar({ onAddClick }) {
    return (
        <nav className='navbar'>
            <Button variant="contained" startIcon={<SearchIcon />} className='icon-button'>
                Search
            </Button>
            <Button variant="contained" startIcon={<AddIcon />} onClick={onAddClick} className='icon-button'>
                Add
            </Button>
            <Button variant="contained" startIcon={<SettingsIcon />} className='icon-button'>
                Settings
            </Button>
        </nav>
    );
}
