import { combineReducers, createStore} from "redux";
import dialogsReducer, { AddMessageACType, UpdateNewMessageACType } from "./dialogs-reducer";
import profileReducer, { AddPostACType, UpdateNewPostACType } from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";

export type ActionsType = AddPostACType |UpdateNewPostACType | AddMessageACType |UpdateNewMessageACType 
// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    sidebar: SidebarReducer
})
// определить автоматически тип всего объекта состояния
export type AppStateType = ReturnType<typeof rootReducer>
// непосредственно создаём store
export let store = createStore(rootReducer)
// @ts-ignore
window.store = store;