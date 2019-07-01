import React from 'react';
import Voter from './Voter';

const CommentCard = ({comment, deleteComment, username, handleVoteInApp, loggedInUser}) => {

  const handleClick = (event) => {
    deleteComment(comment.comment_id);
  }

  return (
    <div style={{borderStyle: 'dotted', borderColor: 'lightgray', borderWidth: '2px', padding: '1%', marginBottom: '10px', backgroundColor: '#fcfcfc', width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
    
      <p style={{textAlign: 'left', margin: '0'}}>
        <span style={{fontWeight: 'bold'}}>{comment.author} </span> <span>  🕑{comment.created_at}</span><span style={{paddingLeft: '1%'}}>{comment.author === username ? <button onClick={handleClick} style={{color: 'darkred'}}>delete</button> : null}</span>
      <br/>
      <span>{comment.body}</span>
      </p>

      <div className='commentVoter'>
    <Voter votes={comment.votes} comment_id={comment.comment_id} handleVoteInApp={handleVoteInApp} loggedInUser={loggedInUser} key={`voter_${comment.comment_id}`}/>
      </div>
 
    </div>
  );


};

export default CommentCard;