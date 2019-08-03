import React from 'react';
import Voter from './Voter';
import '../styles/CommentCard.css';
const timeago = require("timeago.js");


const CommentCard = ({comment, deleteComment, username, handleVoteInApp, loggedInUser}) => {

  const handleClick = (event) => {
    deleteComment(comment.comment_id);
  }

  const tsToDate = new Date(comment.created_at)
  let toDisplay = timeago.format(tsToDate);  
  
  return (
    <>
    <div className="commentMainContainer-outer">
    
      <div className="commentMainContainer-inner">

      <div className='commentVoter'>
      <div>
      <Voter votes={comment.votes} comment_id={comment.comment_id} handleVoteInApp={handleVoteInApp} loggedInUser={loggedInUser} key={`voter_${comment.comment_id}`}/>
      </div>

      </div>
      <div className="commentInfo">
        <span className="commentAuthorInfo">{comment.author} </span> 
        <span className="commentDateTime">  🕑{toDisplay}</span>
        <span className="commentDeleteButtonContainer">{comment.author === username ? 
          <button onClick={handleClick} className="commentDeleteButton">delete</button> : null}
        </span>
      </div>

      <div className="commentBody">
      {comment.body}
      </div>


      </div>
 
 <div className="commentDividerContainer">
   _
      <div className="commentDivider">_</div>
 </div>

    </div>
      </>
  );


};

export default CommentCard;