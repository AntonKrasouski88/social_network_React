import React from 'react';
import { PostsType } from '../Profile';
import styleMyPost from './MyPost.module.css'
import Post from "./Post/Post";


export interface MyPostProps {
    posts: Array<PostsType>,
}

const MyPost:React.FC<MyPostProps> = 
    ({posts}) => {

    return (
        <div className={styleMyPost.container}>
            My post
            <div>
                <div className={styleMyPost.blockTextarea}>
                    <textarea placeholder={'New Post'} className={styleMyPost.textarea}></textarea>
                </div>
                <div className={styleMyPost.addButtonPost}>
                    <button>Add post</button>
                </div>
                {posts.map(p=> <Post message={p.message} countLikes={p.countLikes}/>)}
            </div>
        </div>
    );
};

export default MyPost;