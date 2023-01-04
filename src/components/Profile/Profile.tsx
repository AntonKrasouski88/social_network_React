import React from 'react';
import styleProfile from './Profile.module.css';
import MyPost  from "./MyPost/MyPost";
import PersonalData from "./PersonalData/PersonalData";
import { PostsType } from '../../redux/state';

export type ProfilePropsType = {
    posts: Array<PostsType>
    addPost: (post:string)=>void
}


const Profile = (props: ProfilePropsType) => {
    
    return (
        <div className={styleProfile.content}>
            <div className={styleProfile.teamFon}></div>
            <PersonalData/>
            <MyPost posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;