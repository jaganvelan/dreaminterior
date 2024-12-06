import React from "react";
import "./Navbar.Module.css";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Navbar logo"/>
                <div>Dream Interior</div>
            </div>
            
            <ul className="navbar-links">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/Gallery'>Gallery</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
                        
            </ul>
        </nav>
    );
};

export default Navbar;
