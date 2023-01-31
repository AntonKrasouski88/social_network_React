import {MessagesType, DialogsPageType, ActionsType} from "./state";

export type AddMessageACType = ReturnType <typeof addMessageAC>
export type UpdateNewMessageACType = ReturnType <typeof updateNewMessageAC>

export const addMessageAC = (message: string) => {
    return {
        type: 'ADD-MESSAGE',
        payload: {
            message,
        }
    } as const
}

export const updateNewMessageAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        payload: {
            text
        }
    } as const
}

const dialogsReducer = (state: DialogsPageType , action: ActionsType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessagesType = {id: new Date().getTime(), message: action.payload.message};
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        case 'UPDATE-NEW-MESSAGE':
            state.newMessage = action.payload.text;
            return state
        default:
            return state;

    }
}
export default dialogsReducer