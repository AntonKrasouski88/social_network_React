import React, {ChangeEvent} from 'react';
import {PostsType,} from '../../../redux/store';
import styleMyPost from './MyPost.module.css'
import Post from "./Post/Post";


export type MyPostProps =  {
    posts: Array<PostsType>,
    newPost: string,
    addPost: ()=>void,
    changeNewPost: (text: string)=>void,
}

const MyPost = (props: MyPostProps) => {

        let onClickAddPostHandler = () => {
            props.addPost()
        }

        const onChangeNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.changeNewPost(e.currentTarget.value);
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
                    {props.posts.map(p => <Post key={p.id} message={p.message} countLikes={p.countLikes}/>)}
                </div>
            </div>
        );
    };

export default MyPost;