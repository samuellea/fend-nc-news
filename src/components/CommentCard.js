import React from 'react';
import Voter from './Voter';

const CommentCard = ({comment, deleteComment, username, handleVoteInApp, loggedInUser}) => {

  const handleClick = (event) => {
    deleteComment(comment.comment_id);
  }

  return (
    <div>
      <p style={{fontSize: 10, textAlign: 'left', marginLeft: '2%'}}>🕑 {comment.created_at}
      {comment.author === username ? <button onClick={handleClick}>X</button> : null}  <Voter votes={comment.votes} comment_id={comment.comment_id} handleVoteInApp={handleVoteInApp} loggedInUser={loggedInUser} key={`voter_${comment.comment_id}`}/>
      </p><b></b>
      <p style={{textAlign: 'left', marginLeft: '2%'}}><span style={{fontWeight: 'bold'}}>{comment.author} </span><span>{comment.body}</span></p>
    </div>
  );


};

export default CommentCard;