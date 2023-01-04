import React from 'react';
import { PostsType } from '../Profile';
import styleMyPost from './MyPost.module.css'
import Post from "./Post/Post";


export interface MyPostProps {
    posts: Array<PostsType>,
}

const MyPost:React.FC<MyPostProps> = 
    ({posts}) => {
    
    let newPost = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        console.log(newPost.current?.value)
    }    

    return (
        <div className={styleMyPost.container}>
            My post
            <div>
                <div className={styleMyPost.blockTextarea}>
                    <textarea ref={newPost}  placeholder={'New Post'} className={styleMyPost.textarea}></textarea>
                </div>
                <div className={styleMyPost.addButtonPost}>
                    <button onClick={addPost}>Add post</button>
                </div>
                {posts.map(p=> <Post message={p.message} countLikes={p.countLikes}/>)}
            </div>
        </div>
    );
};

export default MyPost;