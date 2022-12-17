import React from 'react';
import person from '../../../../img/logo/person.png';
import stylePost from './Post.module.css'

const Post = () => {
    return (
        <div className={stylePost.blockPost}>
            <div className={stylePost.post}>
                <div><img src={person} alt={'person_logo'}/></div>
                <div className={stylePost.textPost}>Post 1</div>
            </div>
            <span>like</span>
        </div>
    );
};

export default Post;