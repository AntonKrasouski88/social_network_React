import profileReducer from "./profile-reducer";
import dialogsReducer, {
} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import { ActionsType } from "./redux-store";

type DialogsType = {
    id: number,
    name: string,
}
type MessagesType = {
    id: number,
    message: string,
}

type PostsType = {
    id: number,
    message: string,
    countLikes: number,
}

type FriendsType = {
    id: number,
    name: string,
}
type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessage: string,
}
type ProfilePageType = {
    posts: PostsType[],
    newPost: string,
}
type SidebarType = {
    friends: FriendsType[]
}
export type RootStateType = {
    dialogsPage: DialogsPageType,
    profilePage: ProfilePageType,
    sidebar: SidebarType,
}

export type  StoreType = {
    _state: RootStateType,
    getState: ()=>RootStateType,
    _renderTree: ()=>void,
    subscribe: (observer: () => void) => void,
    dispatch: (action: ActionsType) => void,
}

export const store: StoreType = {
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
    subscribe (observer) {
        this._renderTree = observer
    },

    dispatch (action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state.sidebar, action)
        this._renderTree()
    }
}


