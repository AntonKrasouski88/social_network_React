import React from 'react';
import styleDialogsItem from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: number,
    name: string,
}

const DialogsItem = (props: DialogsItemPropsType) => {
    return (
        <div className={styleDialogsItem.dialogsItem + ' ' + styleDialogsItem.active}>
            <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default DialogsItem;