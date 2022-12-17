import React from 'react';
import styleNavbar from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styleNavbar.nav}>
            <div className={styleNavbar.item}>
                <a href={''}>Profile</a>
            </div>
            <div className={styleNavbar.item}>
                <a href={''}>Messages</a>
            </div>
            <div className={styleNavbar.item}>
                <a href={''}>News</a>
            </div>
            <div className={styleNavbar.item}>
                <a href={''}>Music</a>
            </div>
            <div className={styleNavbar.item}>
                <a href={''}>Setting</a>
            </div>
        </nav>
    );
};

export default Navbar;