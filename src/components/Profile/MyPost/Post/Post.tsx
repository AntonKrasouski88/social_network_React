import React from 'react';
import person from '../../../../img/logo/person.png';
import stylePost from './Post.module.css'

type PostTypeProps = {
    messages: string
}

const Post = (props: PostTypeProps) => {
    return (
        <div className={stylePost.blockPost}>
            <div className={stylePost.post}>
                <div><img src={person} alt={'person_logo'}/></div>
                <div className={stylePost.textPost}>{props.messages}</div>
            </div>
            <span>like</span>
        </div>
    );
};

export default Post;