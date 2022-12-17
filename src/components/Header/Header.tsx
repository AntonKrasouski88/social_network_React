import React from 'react';
import logo from "../../img/logo/logo.png";
import styleHeader from './Header.module.css'

const Header = () => {
    return (
        <header className={styleHeader.header}>
            <img src={logo} alt={'logo_social_network'}/>
        </header>
    );
};

export default Header;