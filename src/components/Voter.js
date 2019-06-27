import React, { Component } from 'react';
import * as api from './api';

class Voter extends Component {
  state = {
    voteChange: 0,
    wasClicked: false
  }
  render() {
    const {voteChange} = this.state;
    const {votes} = this.props
    return (
      <>
        <button onClick={()=> this.handleVote(1)} disabled={voteChange > 0}>⬆</button> 
        <button onClick={()=> this.handleVote(-1)} disabled={voteChange < 0}>⬇</button>
        Votes: {votes + voteChange}
      </>
    );
  }

  handleVote =(increment)=>{
    const {article_id, comment_id} = this.props; // check - article_id or comment_id?
    let type;
    if (article_id) type = 'article';
    if (comment_id) type = 'comment';

    this.props.handleVoteInApp(article_id); // <--- SEND UP TO APP FOR SAVING IN STATE

    api.patchVotes(type, article_id || comment_id, increment).catch(err => {
      this.setState(({voteChange}) => {
      return {voteChange: voteChange - increment}
      })
    })

    this.setState(({voteChange}) => { 
      return {voteChange: voteChange + increment, wasClicked: true}
    })
  }
}

export default Voter;