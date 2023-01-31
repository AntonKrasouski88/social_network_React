import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-Reducer";
import SidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: SidebarReducer
})


let store = createStore(reducers)

export default store