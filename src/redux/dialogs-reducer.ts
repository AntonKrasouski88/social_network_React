import {ActionsType} from "./store";

export type AddMessageACType = ReturnType <typeof addMessageAC>
export type UpdateNewMessageACType = ReturnType <typeof updateNewMessageAC>

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
        payload: {
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

export type DialogsType = {
    id: number,
    name: string,
}

export type MessageType = {
    id: number,
    message: string,
}

export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessageType[],
    newMessage: string,
}

const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Kristina'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Lina'},
        {id: 4, name: 'Bob'},
        {id: 5, name: 'Jan'},
    ] as DialogsType[],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I will call you back'},
        {id: 4, message: 'YO!!!'},
        {id: 5, message: 'YO!!!'},
    ] as MessageType[],
    newMessage: '',
}

const dialogsReducer = (state: DialogsPageType = initialState , action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            if(state.newMessage.trim()!=='') {
                let newMessage: MessageType = {id: new Date().getTime(), message: state.newMessage};
                let stateCopy = {...state}
                stateCopy.messages.push(newMessage);
                stateCopy.newMessage = '';
                return stateCopy
            } else {
                return state;
            }
        case 'UPDATE-NEW-MESSAGE':
            let stateCopy = {...state}
            stateCopy.newMessage = action.payload.text;
            return stateCopy
        default:
            return state;

    }
}
export default dialogsReducer