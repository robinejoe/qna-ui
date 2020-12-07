import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="navbar">
            <Link to='/'>Robin's Q&amp;A App</Link>
        </header>
    );
}

export default Header;