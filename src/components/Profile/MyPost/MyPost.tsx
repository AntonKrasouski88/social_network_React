import React, {ChangeEvent} from 'react';
import {ActionsType, PostsType} from '../../../redux/state';
import styleMyPost from './MyPost.module.css'
import Post from "./Post/Post";


export type MyPostProps =  {
    posts: Array<PostsType>,
    dispatch: (action: ActionsType) => void,
    newPost: string,
}

const MyPost = (props: MyPostProps) => {

        let onClickAddPostHandler = () => {
            props.dispatch({type:'ADD-POST', post: props.newPost});
        }

        const onChangeNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch({type: "UPDATE-NEW-POST", text: e.currentTarget.value});
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