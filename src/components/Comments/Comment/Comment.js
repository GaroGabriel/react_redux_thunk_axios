import React from 'react';
import './Comment.scss'
const Comment = ({comment}) => {
    console.log(comment)
    return (
        <div  className='comment'>
            <p>{comment.name}</p>
            <h3 className='comment__title'>{comment.name}</h3>
            <p className='comment__body'>{comment.body}</p>
            <span className='comment__email'>{comment.email}</span>
        </div>
    );
};

export default Comment;
