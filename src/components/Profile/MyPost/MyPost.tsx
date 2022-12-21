import React from 'react';
import styleMyPost from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = () => {

    const posts = [
        {id: 1, message: 'Hello my friend!', countLikes: 5},
        {id: 2, message: 'How are you?', countLikes: 7},
        {id: 3, message: 'Do you look a new movie?', countLikes: 15},
        {id: 4, message: 'Yes, I do', countLikes: 21},
    ]

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