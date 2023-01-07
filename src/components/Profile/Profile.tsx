import React from 'react';
import styleProfile from './Profile.module.css';
import MyPost  from "./MyPost/MyPost";
import PersonalData from "./PersonalData/PersonalData";
import { PostsType } from '../../redux/state';

export type ProfilePropsType = {
    newPost: string,
    posts: Array<PostsType>
    addPost: (post:string)=>void
    updateNewPost: (text: string) => void,
}


const Profile = (props: ProfilePropsType) => {
    
    return (
        <div className={styleProfile.content}>
            <div className={styleProfile.teamFon}></div>
            <PersonalData/>
            <MyPost
                newPost={props.newPost}
                posts={props.posts}
                addPost={props.addPost}
                updateNewPost={props.updateNewPost}/>
        </div>
    );
};

export default Profile;