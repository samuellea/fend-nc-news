import React from 'react';
import Voter from './Voter';

const CommentCard = ({comment, deleteComment, username, handleVoteInApp, loggedInUser}) => {

  const handleClick = (event) => {
    deleteComment(comment.comment_id);
  }

  return (
    <div style={{borderStyle: 'dotted', borderColor: 'lightgray', borderWidth: '2px', marginBottom: '10px', backgroundColor: '#fcfcfc', width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
      <p style={{fontSize: '80%', textAlign: 'left', marginLeft: '2%'}}>🕑 {comment.created_at}
      <span style={{paddingLeft: '1%'}}><Voter votes={comment.votes} comment_id={comment.comment_id} handleVoteInApp={handleVoteInApp} loggedInUser={loggedInUser} key={`voter_${comment.comment_id}`}/></span>
      </p><b></b>
      <p style={{textAlign: 'left', marginLeft: '2%'}}><span style={{fontWeight: 'bold'}}>{comment.author} </span><span>{comment.body}</span><span style={{paddingLeft: '1%'}}>{comment.author === username ? <button onClick={handleClick} style={{color: 'darkred'}}>delete</button> : null}</span></p>
    </div>
  );


};

export default CommentCard;