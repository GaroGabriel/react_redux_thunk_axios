import React, {useEffect} from 'react';
import './Comments.scss'

import Comment from "./Comment/Comment";

const Comments = ({comments}) => {

    return (
        <div className='posts'>
            {comments.map(comment => {
                return (
                    <Comment
                        comment={comment}
                        key={comment.id}
                    />
                )
            })
            }
        </div>
    );
};

export default Comments;
