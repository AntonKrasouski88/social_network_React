import React from 'react';
import styleDialogs from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsType, MessagesType} from '../../redux/state';


type DialogsPropsType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>,
    addMessage: (message: string) => void,
}


export const Dialogs = (props: DialogsPropsType) => {
    const newMessage = React.createRef<HTMLTextAreaElement>();
    const addMessageHandler = () => {
        if (newMessage.current?.value) {
            props.addMessage(newMessage.current.value)
        }

    }

    return (
        <div className={styleDialogs.container}>
            <div className={styleDialogs.dialogsPerson}>
                {props.dialogs.map(d => <DialogsItem key={d.id} id={d.id} name={d.name}/>)}
            </div>
            <div className={styleDialogs.litters}>
                {props.messages.map(m => <Message key={m.id} id={m.id}
                                                  message={m.message}/>)}
                <div>
                    <textarea
                        placeholder='Type message'
                        ref={newMessage}
                        className={styleDialogs.textArea}></textarea>
                    <button
                        onClick={addMessageHandler}
                        className={styleDialogs.buttonTextArea}>Add
                    </button>
                </div>
            </div>


        </div>
    );
};