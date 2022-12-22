import React from 'react';
import styleProfile from './Profile.module.css';
import MyPost, { PostsType } from "./MyPost/MyPost";
import PersonalData from "./PersonalData/PersonalData";

const Profile = () => {
    const posts: Array<PostsType> = [
        {id: 1, message: 'Hello my friend!', countLikes: 5},
        {id: 2, message: 'How are you?', countLikes: 7},
        {id: 3, message: 'Do you look a new movie?', countLikes: 15},
        {id: 4, message: 'Yes, I do', countLikes: 21},
    ]


    return (
        <div className={styleProfile.content}>
            <div className={styleProfile.teamFon}></div>
            <PersonalData/>
            <MyPost posts={posts}/>
        </div>
    );
};

export default Profile;