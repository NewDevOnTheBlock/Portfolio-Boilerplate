import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="nav">
            <div className="nav-routes">
                <NavLink to="/" >
                    Home
                </NavLink>
                <NavLink to="/about">
                    About    
                </NavLink>
                <NavLink to="/projects">
                    Projects
                </NavLink>
            </div>
            <div className="nav-routes">
                <a>LinkedIn</a>
                <a>Github</a>
            </div>
        </nav>
    )
}

export default NavBar;