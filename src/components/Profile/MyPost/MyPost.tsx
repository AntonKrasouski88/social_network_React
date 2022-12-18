import React from 'react';
import styleMyPost from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
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
                <Post messages={'Hello my friend!'}/>
                <Post messages={'How are you?'}/>
                <Post messages={'Do you look a new movie?'}/>
                <Post messages={'Yes, I do'}/>
            </div>
        </div>
    );
};

export default MyPost;