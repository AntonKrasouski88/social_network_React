import React from 'react';
import styleDialogs from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: 'Kristina'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Lina'},
        {id: 4, name: 'Bob'},
        {id: 5, name: 'Jan'},
    ];

    const messageData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'I will call you back'},
        {id: 4, message: 'YO'},
        {id: 5, message: 'YO'},
    ]


    return (
        <div className={styleDialogs.container}>
            <div className={styleDialogs.dialogsPerson}>
                <DialogsItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogsItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogsItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogsItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogsItem id={dialogsData[4].id} name={dialogsData[4].name}/>
            </div>
            <div className={styleDialogs.litters}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
            </div>
        </div>
    );
};

export default Dialogs;