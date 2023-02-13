import React from 'react';
import { addMessageAC, updateNewMessageAC } from '../../redux/dialogs-reducer';
/* import { ActionsType, DialogsPageType } from '../../redux/store'; */
import { StoreContext } from '../../StoreContext';
import { Dialogs } from './Dialogs';

/* type DialogsContainerType = {
    state: DialogsPageType,
    dispatch: (action: ActionsType) => void
}
 */
export const DialogsContainer = () => {
    return (
        
           <StoreContext.Consumer>
            {(store)=>{
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
            )}}
           </StoreContext.Consumer>
            

    );
};
