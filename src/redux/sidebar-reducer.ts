export type FriendsType = {
    id: number,
    name: string,
}

export type SidebarType = {
    friends: FriendsType[]
}

const initialState: SidebarType = {
    friends: [
        {id: 1, name: 'Ilona'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
    ] as FriendsType[],
}

const sidebarReducer = (state: SidebarType = initialState, action: any): SidebarType => {
        return state
}

export default  sidebarReducer