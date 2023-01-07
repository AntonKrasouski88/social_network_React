import React, {ChangeEvent} from 'react';
import {PostsType, state} from '../../../redux/state';
import styleMyPost from './MyPost.module.css'
import Post from "./Post/Post";


export interface MyPostProps {
    posts: Array<PostsType>,
    addPost: (post: string) => void,
    updateNewPost: (text: string) => void,
    newPost: string,
}

const MyPost: React.FC<MyPostProps> =
    ({
         posts,
         addPost,
         updateNewPost,
         newPost
     }) => {

        let onClickAddPostHandler = () => {
            addPost(newPost);
        }

        const onChangeNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            updateNewPost(e.currentTarget.value);
        }

        return (
            <div className={styleMyPost.container}>
                My post
                <div>
                    <div className={styleMyPost.blockTextarea}>
                    <textarea
                        value={newPost}
                        onChange={onChangeNewPostHandler}
                        placeholder={'New Post'}
                        className={styleMyPost.textarea}></textarea>
                    </div>
                    <div className={styleMyPost.addButtonPost}>
                        <button onClick={onClickAddPostHandler}>Add post</button>
                    </div>
                    {posts.map(p => <Post message={p.message} countLikes={p.countLikes}/>)}
                </div>
            </div>
        );
    };

export default MyPost;