import React from 'react';
import styleNavbar from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import { Sidebar } from './Sidebar/Sidebar';

export type SidebarFriends = {
    id: number,
    name: string,
}


export type NavbarPropsType = {
    sidebarFriends: Array<SidebarFriends>
}


const Navbar = (props: NavbarPropsType) => {
    return (
        <div>
            <nav className={styleNavbar.nav}>
                <div className={styleNavbar.item}>
                    <NavLink to={'/Profile'} activeClassName={styleNavbar.active}>Profile</NavLink>
                </div>
                <div className={styleNavbar.item}>
                    <NavLink to={'/Dialogs'} activeClassName={styleNavbar.active}>Messages</NavLink>
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
            <div className={styleNavbar.sidebar}>
                <span className={styleNavbar.spanFrinds}>Friends</span>
                <div className = {styleNavbar.sidebarFriends}>{props.sidebarFriends.map(item => <Sidebar name={item.name}/>) }</div>
            </div>
            
        </div>
        
    );
};

export default Navbar;