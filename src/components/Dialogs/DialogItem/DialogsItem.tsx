import React from 'react';
import styleDialogsItem from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import user from "../../../img/logo/user.png"

export type DialogsItemPropsType = {
    id: number,
    name: string,
}

const DialogsItem = (props: DialogsItemPropsType) => {
    return (
        <div className={styleDialogsItem.dialogsItem + ' ' + styleDialogsItem.active}>
            <div className={styleDialogsItem.iconUser}>
                <img src={user} alt="icon_user" />
            </div>
            <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default DialogsItem;