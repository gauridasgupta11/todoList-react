import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}> 
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | 
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    textAlign: "center",
    background: "#333",
    color: "white",
    padding: "10px"

}

const linkStyle = {
    color: "white",
    textDecoration: "none"
}

export default Header;