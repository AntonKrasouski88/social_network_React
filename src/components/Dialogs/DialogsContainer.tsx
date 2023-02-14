//import React from 'react';
//import { connect } from 'react-redux';
import { addMessageAC, updateNewMessageAC } from '../../redux/dialogs-reducer';
//import { AppStateType } from '../../redux/redux-store';
//import { DialogsType, MessagesType } from '../../redux/store';
import { StoreContext } from '../../StoreContext';
import { Dialogs } from './Dialogs';


export const DialogsContainer = () => {
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
}


/* type MapToStatePropsType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessage: string,
}

const mapToStatetoProps = (state: AppStateType): MapToStatePropsType => {
    return ({
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
    })
}
const mapToDispatchProps = (dispatch: any, state: AppStateType) => {
    return ({
        addMessage: () => { dispatch(addMessageAC(state.dialogsPage.newMessage)) },
        changeNewTextMessage: (text: string) => { dispatch(updateNewMessageAC(text)) },
    })
}
export const DialogsContainer = connect(mapToStatetoProps, mapToDispatchProps)(Dialogs); */
