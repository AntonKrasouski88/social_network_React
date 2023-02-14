import { combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";
import { StoreType } from "./store";

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: SidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store: StoreType = createStore(rootReducer)

export default store