import React from 'react';
import styleDialogs from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={styleDialogs.container}>
            <div className={styleDialogs.dialogsPerson}>
                <div className={styleDialogs.dialogsItem + ' ' + styleDialogs.active}>
                    <NavLink to={'/Dialogs/1'}>Kristina</NavLink>
                </div>
                <div className={styleDialogs.dialogsItem}>
                    <NavLink to={'/Dialogs/2'}>Dima</NavLink>
                </div>
                <div className={styleDialogs.dialogsItem}>
                    <NavLink to={'/Dialogs/3'}>Lina</NavLink>
                </div>
                <div className={styleDialogs.dialogsItem}>
                    <NavLink to={'/Dialogs/4'}>Bob</NavLink>
                </div>
                <div className={styleDialogs.dialogsItem}>
                    <NavLink to={'/Dialogs/5'}>Jan</NavLink>
                </div>
            </div>
            <div className={styleDialogs.litters}>
                <div className={styleDialogs.message}>
                    Hi!
                </div>
                <div className={styleDialogs.message}>
                    How are you?
                </div>
                <div className={styleDialogs.message}>
                    I'll call you back!
                </div>
            </div>
        </div>
    );
};

export default Dialogs;