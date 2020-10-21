import React from 'react';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <nav className = "navbar navbar-expand-lg navbar-light" >
           <img className="logo"  src = {logo}alt = ""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        <div className = "collapse navbar-collapse"id = "navbarSupportedContent" >
        <ul className = "navbar-nav ml-auto" >
        <li className = "nav-item active" >
        <a className = "nav-link mr-5"href = "/home" > Home < span className = "sr-only" > (current) </span></a >
        </li> 
        <li className = "nav-item mr-5" ><a className = "nav-link"href = "/ourPortfolio" > Our
        portfolio </a> 
        </li > 
        <li className = "nav-item" >
        <a className = "nav-link mr-5"href = "/ourTeam" > Our team </a> 
        </li > 
        <li className = "nav-item" >
        <a className = "nav-link mr-5"href = "/contactUs" > Contact Us </a> 
        </li >
        <a href = "/login">
        <button className = " nav-link mr-5 btn btn-dark text-white" > Login </button>
        </a>
         
         </ul> 
         </div > 
         </nav>
    );
};

export default Navbar;