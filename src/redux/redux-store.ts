import { combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";
import { StoreType } from "./store";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: SidebarReducer
})

export type createStoreType = ReturnType<typeof reducers>

let store: StoreType = createStore(reducers)

export default store