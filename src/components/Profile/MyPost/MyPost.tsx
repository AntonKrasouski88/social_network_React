import React from 'react';
import styleMyPost from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            My post
            <div>
                <div className={styleMyPost.blockTextarea}>
                    <textarea placeholder={'New Post'} className={styleMyPost.textarea}></textarea>
                </div>
                <div className={styleMyPost.addButtonPost}>
                    <button>Add post</button>
                </div>

                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPost;