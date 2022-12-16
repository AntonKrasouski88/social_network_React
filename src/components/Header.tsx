import React from 'react';
import logo from "../img/logo/logo.png";

const Header = () => {
    return (
        <header className={'header'}>
            <img src={logo} alt={'logo_social_network'}/>
        </header>
    );
};

export default Header;