import React from 'react';
import { addPostAC, updateNewPostAC } from '../../../redux/profile-reducer';
//import { ActionsType, ProfilePageType} from '../../../redux/store';
import { StoreContext } from '../../../StoreContext';
import MyPost from './MyPost';

/* type MyPostContainerType = {
    state: ProfilePageType,
    dispatch: (action: ActionsType) => void,
} */

export const MyPostContainer = () => {
    
    return (
        <StoreContext.Consumer>
         {(store)=>{
            const addPost = () => {
                if( store.getState().profilePage.newPost.trim() !== '') {
                    store.dispatch(addPostAC(store.getState().profilePage.newPost));
                }
            }
        
            const changeNewPost = (text: string) => {
                store.dispatch(updateNewPostAC(text));
            }
            return (
                <MyPost 
                    posts = {store.getState().profilePage.posts}
                    newPost = {store.getState().profilePage.newPost} 
                    addPost = {addPost} 
                    changeNewPost = {changeNewPost}/>   
            )
         }}
        </StoreContext.Consumer>
    );
};

export default MyPostContainer;