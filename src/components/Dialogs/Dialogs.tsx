import React from 'react';
import styleDialogs from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = () => {
    return (
        <div className={styleDialogs.container}>
            <div className={styleDialogs.dialogsPerson}>
                <DialogsItem id={1} name={'Kristina'}/>
                <DialogsItem id={2} name={'Dima'}/>
                <DialogsItem id={3} name={'Lina'}/>
                <DialogsItem id={4} name={'Bob'}/>
                <DialogsItem id={5} name={'Jan'}/>
            </div>
            <div className={styleDialogs.litters}>
                <Message message={'Hi!'}/>
                <Message message={'How are you'}/>
                <Message message={'I will call you back'}/>
            </div>
        </div>
    );
};

export default Dialogs;