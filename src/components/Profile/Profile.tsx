import React from 'react';
import styleProfile from './Profile.module.css';
import MyPost  from "./MyPost/MyPost";
import PersonalData from "./PersonalData/PersonalData";
import {ActionsType, PostsType} from '../../redux/store';

export type ProfilePropsType = {
    newPost: string,
    posts: Array<PostsType>,
    dispatch: (action: ActionsType) => void,
}


const Profile = (props: ProfilePropsType) => {
    
    return (
        <div className={styleProfile.content}>
            <div className={styleProfile.teamFon}></div>
            <PersonalData/>
            <MyPost
                newPost={props.newPost}
                posts={props.posts}
                dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;