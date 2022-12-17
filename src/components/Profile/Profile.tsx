import React from 'react';
import styleProfile from './Profile.module.css';
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (
        <div className={styleProfile.content}>
            <div className={styleProfile.teamFon}></div>
            <div>
                avatar + description
            </div>
            <MyPost/>
        </div>
    );
};

export default Profile;