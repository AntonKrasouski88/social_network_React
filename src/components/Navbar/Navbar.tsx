import React from 'react';
import styleNavbar from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styleNavbar.nav}>
            <div className={styleNavbar.item}>
                <a href={'/Profile'}>Profile</a>
            </div>
            <div className={styleNavbar.item}>
                <a href={'/Messages'}>Messages</a>
            </div>
            <div className={styleNavbar.item}>
                <a href={'/News'}>News</a>
            </div>
            <div className={styleNavbar.item}>
                <a href={'/Music'}>Music</a>
            </div>
            <div className={styleNavbar.item}>
                <a href={'/Setting'}>Setting</a>
            </div>
        </nav>
    );
};

export default Navbar;