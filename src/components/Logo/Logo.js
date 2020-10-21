import React from 'react';
import logo from '../../images/logos/logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-div">
            <img style={{maxWidth:"300px"}}  src={logo}alt=""/>
        </div>
    );
};

export default Logo;