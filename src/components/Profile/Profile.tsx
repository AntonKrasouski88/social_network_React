import React from 'react';
import styleProfile from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import PersonalData from "./PersonalData/PersonalData";

const Profile = () => {
    return (
        <div className={styleProfile.content}>
            <div className={styleProfile.teamFon}></div>
            <PersonalData/>
            <MyPost/>
        </div>
    );
};

export default Profile;