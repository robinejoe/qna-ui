import { useState, useEffect } from 'react';
import Moment from 'react-moment';

function CommentCard(props) {
    const [ comment, setComment ] = useState(); 
    useEffect(() => {
        setComment(props.comment);
    }, []);
    return (
        <div className="comment">
            { comment && 
                <div>
                    <p>{comment.content}</p>
                    <p>Posted by: <em>{comment.user}</em> on <Moment format="MM/DD/YYYY \a\t h:mm:ss a">{comment.createdAt}</Moment></p>
                </div>
            }
        </div>
    )
}

export default CommentCard;