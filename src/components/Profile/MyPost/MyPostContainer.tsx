import React from 'react';
import { addPostAC, updateNewPostAC } from '../../../redux/profile-reducer';
import { ActionsType, ProfilePageType } from '../../../redux/store';
import MyPost from './MyPost';

type MyPostContainerType = {
    state: ProfilePageType,
    dispatch: (action: ActionsType) => void,
}

export const MyPostContainer = (props: MyPostContainerType) => {
    
    const addPost = () => {
        if(props.state.newPost.trim() !== '') {
            props.dispatch(addPostAC(props.state.newPost));
        }
    }

    const changeNewPost = (text: string) => {
        props.dispatch(updateNewPostAC(text));
    }
    
    return (
        <>
         <MyPost 
            posts = {props.state.posts}
            newPost = {props.state.newPost} 
            addPost = {addPost} 
            changeNewPost = {changeNewPost}/>   
        </>
    );
};

export default MyPostContainer;