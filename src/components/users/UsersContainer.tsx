import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { setStateAC, userFollowAC, UserType, userUnFollowAC } from "../../redux/users-reducer";
import { Users } from "./Users";



type mapToStatetoPropsType = {
    state: UserType[],
}

type mapToDispatchPropsType = {
    follow: (id:number, value: boolean) =>void,
    unfollow: (id:number, value: boolean) =>void,
    setUser: (users: UserType[]) => void,
}

export type UsersContainerType = mapToStatetoPropsType & mapToDispatchPropsType

const mapToStatetoProps = (state: AppStateType): mapToStatetoPropsType => {
    return {
        state: state.usersPage.users
    }
}

const mapToDispatchProps = (dispatch: Dispatch): mapToDispatchPropsType =>{
    return {
        follow: (id:number, value: boolean) => dispatch(userFollowAC(id, value)),
        unfollow: (id: number, value: boolean) => dispatch(userUnFollowAC(id,value)),
        setUser: (users) => dispatch(setStateAC(users))
    }
}


export const UsersContainer = connect (mapToStatetoProps, mapToDispatchProps)(Users)