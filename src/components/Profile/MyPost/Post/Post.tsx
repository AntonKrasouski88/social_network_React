import React from 'react';
import person from '../../../../img/logo/person.png';
import stylePost from './Post.module.css'

export interface PostTypeProps {
    message: string;
    countLikes: number;
}

const Post = (props: PostTypeProps) => {
    return (
        <div className={stylePost.blockPost}>
            <div className={stylePost.post}>
                <div><img src={person} alt={'person_logo'}/></div>
                <div className={stylePost.textPost}>{props.message}</div>
            </div>
            <span>{`like ${props.countLikes}`}</span>
        </div>
    );
};

export default Post;