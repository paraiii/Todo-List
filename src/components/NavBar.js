import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar">
                <Link to="/todo" className="nav-link">todo</Link>
                <Link to="/about" className="nav-link">about</Link>
        </div>
    );
}

export default NavBar;
