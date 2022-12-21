import React from 'react';
import styleDialogs from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = () => {
    const dialogs = [
        {id: 1, name: 'Kristina'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Lina'},
        {id: 4, name: 'Bob'},
        {id: 5, name: 'Jan'},
    ];

    const messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'I will call you back'},
        {id: 4, message: 'YO'},
        {id: 5, message: 'YO'},
    ]

    return (
        <div className={styleDialogs.container}>
            <div className={styleDialogs.dialogsPerson}>
                {dialogs.map((d) => <DialogsItem id={d.id} name={d.name}/>)}
            </div>
            <div className={styleDialogs.litters}>
                {messages.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    );
};

export default Dialogs;