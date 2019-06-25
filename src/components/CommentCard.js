import React from 'react';

const CommentCard = ({comment}) => {
  return (
    <div>
      <p style={{fontSize: 10, textAlign: 'left', marginLeft: '2%'}}>🕑 {comment.created_at}</p><b></b>
      <p style={{textAlign: 'left', marginLeft: '2%'}}><span style={{fontWeight: 'bold'}}>{comment.author} </span><span>{comment.body}</span></p>
    </div>
  );
};

export default CommentCard;