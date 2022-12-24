import React from 'react';
import styleDialogs from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

export type DialogType = {
    id: number,
    name: string,
}

export type MessageType = {
    id: number,
    message: string,
}


type DialogsPropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}


const Dialogs = (props: DialogsPropsType) => {
    

    return (
        <div className={styleDialogs.container}>
            <div className={styleDialogs.dialogsPerson}>
                {props.dialogs.map((d) => <DialogsItem id= {d.id} name={d.name}/>)}
            </div>
            <div className={styleDialogs.litters}>
                {props.messages.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    );
};

export default Dialogs;