import React from 'react';
import './post.scss'
const Post = ({post}) => {
    return (
        <div  className='post'>
            <h3 className='post__title'>{post.title}</h3>
            <p className='post__body'>{post.body}</p>
        </div>
    );
};

export default Post;
