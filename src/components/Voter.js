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

  handleVote = (increment) => {
    const {article_id, comment_id} = this.props; // check - article_id or comment_id?

    let type;
    if (article_id) type = 'article';
    if (comment_id) type = 'comment';

    api.patchVotes(type, article_id || comment_id, increment).catch(err => {
      this.setState(({voteChange}) => {
      return {voteChange: voteChange - increment}
      })
    })

    this.setState(({voteChange}) => { 
      return {voteChange: voteChange + increment, wasClicked: true}
    }, ()=>{
        localStorage.setItem(`voter_${type}_${article_id || comment_id}`, this.state.voteChange);
    }, )
  }

  componentDidMount(){
    const {article_id, comment_id} = this.props;
    
    let type;
    if (article_id) type = 'article';
    if (comment_id) type = 'comment';

    let res = localStorage.getItem(`voter_${type}_${article_id || comment_id}`);
    console.log(typeof res, '<-----=== res')
    // this.setState({
    //   voteChange: Number(res)
    // })
  }
}

export default Voter;