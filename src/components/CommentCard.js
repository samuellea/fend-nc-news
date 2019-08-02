import React from 'react';
import Voter from './Voter';
const timeago = require("timeago.js");

const CommentCard = ({comment, deleteComment, username, handleVoteInApp, loggedInUser}) => {

  const handleClick = (event) => {
    deleteComment(comment.comment_id);
  }

  const tsToDate = new Date(comment.created_at)
  let toDisplay = timeago.format(tsToDate);  
  
  return (
    <div style={{borderStyle: 'dotted', borderColor: 'lightgray', borderWidth: '2px', padding: '1%', marginBottom: '10px', backgroundColor: '#fcfcfc', width: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
    
      {/* <p style={{textAlign: 'left', margin: '0'}}>


    

      <br/>

      <span style={{paddingTop: '10%'}}>{comment.body}</span>

      </p> */}

      <div className="commentMainContainer">
      <div className='commentVoter'>
      <div>
      <Voter votes={comment.votes} comment_id={comment.comment_id} handleVoteInApp={handleVoteInApp} loggedInUser={loggedInUser} key={`voter_${comment.comment_id}`}/>
      </div>


      </div>
      <div className="commentInfo">
      <span style={{fontWeight: 'bold'}}>{comment.author} </span> <span style={{color: 'grey', marginLeft: '0.5%'}}>  🕑{toDisplay}</span><span style={{paddingLeft: '1%'}}>{comment.author === username ? <button onClick={handleClick} style={{color: 'darkred'}}>delete</button> : null}</span>
      </div>

      <div className="commentBody">
{comment.body}
      </div>

      </div>

      {/* <div className='commentVoter'>
    <Voter votes={comment.votes} comment_id={comment.comment_id} handleVoteInApp={handleVoteInApp} loggedInUser={loggedInUser} key={`voter_${comment.comment_id}`}/>
      </div> */}
 
    </div>
  );


};

export default CommentCard;