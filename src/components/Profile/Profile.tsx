import React from 'react';
import styleProfile from './Profile.module.css';
import MyPost  from "./MyPost/MyPost";
import PersonalData from "./PersonalData/PersonalData";

export interface PostsType {
    id: number,
    message: string,
    countLikes: number,
}

export type ProfilePropsType = {
    posts: Array<PostsType>
}


const Profile = (props: ProfilePropsType) => {
    
    return (
        <div className={styleProfile.content}>
            <div className={styleProfile.teamFon}></div>
            <PersonalData/>
            <MyPost posts={props.posts}/>
        </div>
    );
};

export default Profile;