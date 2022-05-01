import React from 'react'
import './header.css'

// material UI components 
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img 
            className="header_logo"
            src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" alt="tinder logo" />

            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header
