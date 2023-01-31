import React, {ChangeEvent} from 'react';
import {ActionsType, PostsType,} from '../../../redux/state';
import styleMyPost from './MyPost.module.css'
import Post from "./Post/Post";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-Reducer";


export type MyPostProps =  {
    posts: Array<PostsType>,
    dispatch: (action: ActionsType) => void,
    newPost: string,
}

const MyPost = (props: MyPostProps) => {

        let onClickAddPostHandler = () => {
            if(props.newPost.trim() !== '') {
                props.dispatch(addPostAC(props.newPost));
            }
        }

        const onChangeNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch(updateNewPostAC(e.currentTarget.value));
        }

        return (
            <div className={styleMyPost.container}>
                My post
                <div>
                    <div className={styleMyPost.blockTextarea}>
                    <textarea
                        value={props.newPost}
                        onChange={onChangeNewPostHandler}
                        placeholder={'New Post'}
                        className={styleMyPost.textarea}></textarea>
                    </div>
                    <div className={styleMyPost.addButtonPost}>
                        <button onClick={onClickAddPostHandler}>Add post</button>
                    </div>
                    {props.posts.map(p => <Post message={p.message} countLikes={p.countLikes}/>)}
                </div>
            </div>
        );
    };

export default MyPost;