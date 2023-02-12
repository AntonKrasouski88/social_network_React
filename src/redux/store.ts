import profileReducer, {AddPostACType, UpdateNewPostACType} from "./profile-reducer";
import dialogsReducer, {
    AddMessageACType,
    UpdateNewMessageACType,
} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type DialogsType = {
    id: number,
    name: string,
}
export type MessagesType = {
    id: number,
    message: string,
}

export type PostsType = {
    id: number,
    message: string,
    countLikes: number,
}

export type FriendsType = {
    id: number,
    name: string,
}
export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessage: string,
}
export type ProfilePageType = {
    posts: PostsType[],
    newPost: string,
}
export type SidebarType = {
    friends: FriendsType[]
}
export type RootStateType = {
    dialogsPage: DialogsPageType,
    profilePage: ProfilePageType,
    sidebar: SidebarType,
}

export type  storeType = {
    _state: RootStateType,
    getState: ()=>RootStateType,
    _renderTree: ()=>void,
    subscriber: (observer: () => void) => void,
    dispatch: (action: ActionsType) => void,
}

export const store: storeType = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hello my friend!', countLikes: 5},
                {id: 2, message: 'How are you?', countLikes: 7},
                {id: 3, message: 'Do you look a new movie?', countLikes: 15},
                {id: 4, message: 'Yes, I do', countLikes: 21},
            ],
            newPost: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Ilona'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
            ]
        },
    },
    _renderTree () {
        console.log('hello')
    },
    getState () {
        return this._state
    },
    subscriber (observer) {
        this._renderTree = observer
    },

    dispatch (action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state.sidebar, action)
        this._renderTree()
    }
}

export type ActionsType = AddPostACType | UpdateNewPostACType | AddMessageACType | UpdateNewMessageACType


