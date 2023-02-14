//import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addMessageAC, DialogsType, MessageType, updateNewMessageAC } from '../../redux/dialogs-reducer';
import { AppStateType } from '../../redux/redux-store';
//import { DialogsType, MessagesType } from '../../redux/store';
//import { StoreContext } from '../../StoreContext';
import { Dialogs } from './Dialogs';


type MapToStatePropsType = {
    dialogs: DialogsType[],
    messages: MessageType[],
    newMessage: string,
}

type MaptoDispatchPropsType = {
    addMessage: ()=>void,
    changeNewTextMessage: (test:string)=>void,
}

export type DialogsPropsType = MapToStatePropsType & MaptoDispatchPropsType 

const mapToStatetoProps = (state: AppStateType): MapToStatePropsType => {
    return ({
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
    })
}
const mapToDispatchProps = (dispatch: Dispatch): MaptoDispatchPropsType => {
    return ({
        addMessage: () => { dispatch(addMessageAC()) },
        changeNewTextMessage: (text: string) => { dispatch(updateNewMessageAC(text)) },
    })
}
export const DialogsContainer = connect(mapToStatetoProps, mapToDispatchProps)(Dialogs);

/* export const DialogsContainer = () => {
    return (

        <StoreContext.Consumer>
            {(store) => {
                const addMessage = () => {
                    store.dispatch(addMessageAC(store.getState().dialogsPage.newMessage));
                }
                const changeNewTextMessage = (text: string) => {
                    store.dispatch(updateNewMessageAC(text));
                }
                return (<Dialogs
                    dialogs={store.getState().dialogsPage.dialogs}
                    messages={store.getState().dialogsPage.messages}
                    newMessage={store.getState().dialogsPage.newMessage}
                    addMessage={addMessage}
                    changeNewTextMessage={changeNewTextMessage}
                />
                )
            }}
        </StoreContext.Consumer>


    );
} */

