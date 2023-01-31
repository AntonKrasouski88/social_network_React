import React, {ChangeEvent} from 'react';
import styleDialogs from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {ActionsType, DialogsType, MessagesType, } from '../../redux/state';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>,
    newMessage: string,
    dispatch: (action: ActionsType) => void,
}


export const Dialogs = (props: DialogsPropsType) => {
    const addMessageHandler = () => {
        props.dispatch(addMessageAC(props.newMessage));
    }
    const onChangeNewTextMessage = (e: ChangeEvent <HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageAC(e.currentTarget.value));
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
                        value={props.newMessage}
                        placeholder='Type message'
                        onChange={onChangeNewTextMessage}
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