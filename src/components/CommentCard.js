import React from 'react';

const CommentCard = ({comment, deleteComment, loggedInUser}) => {

  const handleClick = (event) => {
    console.log('handling click...')

    deleteComment(comment.comment_id);
  }

  return (
    <div>
      <p style={{fontSize: 10, textAlign: 'left', marginLeft: '2%'}}>🕑 {comment.created_at}
      {comment.author === loggedInUser ? <button onClick={handleClick}>X</button> : null}
      </p><b></b>
      <p style={{textAlign: 'left', marginLeft: '2%'}}><span style={{fontWeight: 'bold'}}>{comment.author} </span><span>{comment.body}</span></p>
    </div>
  );


};

export default CommentCard;