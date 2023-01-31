import { SidebarType} from "./store";


/*
export type SidebarReducerACType = ReturnType <typeof sidebarReducerAC>

export const sidebarReducerAC = () => {
    return {
        type: 'STATE',
    } as const
}
*/


const initialState: SidebarType = {
    friends: [
        {id: 1, name: 'Ilona'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
    ]
}

const sidebarReducer = (state: SidebarType = initialState, action: any) => {
        return state
}

export default  sidebarReducer