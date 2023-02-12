import React from 'react';
import styleProfile from './Profile.module.css';
import PersonalData from "./PersonalData/PersonalData";
import {ActionsType, ProfilePageType} from '../../redux/store';
import MyPostContainer from './MyPost/MyPostContainer';

export type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionsType) => void,
}


const Profile = (props: ProfilePropsType) => {
    
    return (
        <div className={styleProfile.content}>
            <div className={styleProfile.teamFon}></div>
            <PersonalData/>
            <MyPostContainer state={props.state} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;