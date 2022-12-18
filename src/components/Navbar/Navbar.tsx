import React from 'react';
import styleNavbar from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styleNavbar.nav}>
            <div className={styleNavbar.item}>
                <NavLink to={'/Profile'} activeClassName={styleNavbar.active}>Profile</NavLink>
            </div>
            <div className={styleNavbar.item}>
                <NavLink to={'/Messages'} activeClassName={styleNavbar.active}>Messages</NavLink>
            </div>
            <div className={styleNavbar.item}>
                <NavLink to={'/News'} activeClassName={styleNavbar.active}>News</NavLink>
            </div>
            <div className={styleNavbar.item}>
                <NavLink to={'/Music'} activeClassName={styleNavbar.active}>Music</NavLink>
            </div>
            <div className={styleNavbar.item}>
                <NavLink to={'/Setting'} activeClassName={styleNavbar.active}>Setting</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;