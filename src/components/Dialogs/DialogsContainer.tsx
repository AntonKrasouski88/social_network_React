import React from 'react';
import { addMessageAC, updateNewMessageAC } from '../../redux/dialogs-reducer';
import { ActionsType, DialogsPageType } from '../../redux/store';
import { Dialogs } from './Dialogs';

type DialogsContainerType = {
    state: DialogsPageType,
    dispatch: (action: ActionsType) => void
}

export const DialogsContainer = (props: DialogsContainerType) => {
    const addMessage = () => {
        props.dispatch(addMessageAC(props.state.newMessage));
    }
    const changeNewTextMessage = (text: string) => {
        props.dispatch(updateNewMessageAC(text));
    }

    return (
        <div>
            <Dialogs
                dialogs={props.state.dialogs}
                messages={props.state.messages}
                newMessage={props.state.newMessage}
                addMessage={addMessage}
                changeNewTextMessage={changeNewTextMessage}
            />
        </div>
    );
};
