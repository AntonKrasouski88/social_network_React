interface LocationType {
    country: string,
    sity: string,
}

export interface UserType {
    id: number, 
    fotoUser: string,
    userName: string,
    follower: boolean,
    status: string,
    location: LocationType,
}

type initialStateType = typeof initialState

const initialState = {
    users: [
        
    ] as UserType[]
}

export const usersReducer = (state: initialStateType = initialState, action: UsersACAllType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(el=> el.id === action.payload.id ? 
                {...el, follower: action.payload.value}: el)
            }
        case 'UNFOLLOW': 
            return {...state, users: state.users.map(el=> el.id === action.payload.id ? 
                {...el, follower: action.payload.value}: el)
            }
        case 'SET_USERS':
            return {...state, users: [...state.users,...action.payload.users]}
        default:
            return state
    }
}

export type UsersACAllType = UsersFollowACType | UsersUnFollowACType | setUsersACType

type UsersFollowACType = ReturnType <typeof userFollowAC>
type UsersUnFollowACType = ReturnType <typeof userUnFollowAC>
type setUsersACType = ReturnType <typeof setStateAC>  

export const userFollowAC = (id: number, value: boolean) => {
    return {
        type: 'FOLLOW',
        payload: {
            id,
            value,
        }
    } as const
} 

export const userUnFollowAC = (id: number, value: boolean)=> {
    return {
        type: 'UNFOLLOW',
        payload: {
            id,
            value,
        } 
    } as const
}

export const setStateAC = (users: UserType[])=> {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }
    } as const
}