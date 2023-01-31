import {MessagesType, DialogsPageType, ActionsType} from "./store";

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

const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Kristina'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Lina'},
        {id: 4, name: 'Bob'},
        {id: 5, name: 'Jan'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I will call you back'},
        {id: 4, message: 'YO!!!'},
        {id: 5, message: 'YO!!!'},
    ],
    newMessage: '',
}

const dialogsReducer = (state: DialogsPageType = initialState , action: ActionsType) => {
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