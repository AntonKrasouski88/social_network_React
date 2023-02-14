import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPostAC, PostsType, updateNewPostAC } from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
//import { ActionsType, ProfilePageType} from '../../../redux/store';
import MyPost from './MyPost';

export type mapToStatetoPropsType = {
    posts: PostsType[],
    newPost: string,
}

export type mapToDispatchProps = {
    changeNewPost: (text: string) => void,
    addPost: () => void,
}

export type MyPostContainerType = mapToStatetoPropsType & mapToDispatchProps;

const mapToStatetoProps = (state: AppStateType) => {
    return (
        {
            posts: state.profilePage.posts,
            newPost: state.profilePage.newPost,
        }
    )
}

const mapToDispatchToProps = (dispatch: Dispatch) => {
    return (
        {
            changeNewPost: (text: string) => {
                dispatch(updateNewPostAC(text));
            },
            addPost: () => {
                    dispatch(addPostAC());
            }
        }
    )
}



export const MyPostContainer = connect(mapToStatetoProps, mapToDispatchToProps)(MyPost)

/* type MyPostContainerType = {
    state: ProfilePageType,
    dispatch: (action: ActionsType) => void,
} */

/* export const MyPostContainer = () => {
    
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

export default MyPostContainer; */