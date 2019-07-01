import React, { Component } from 'react';
import * as api from './api';

class Voter extends Component {
  state = {
    voteChange: 0,
    clicked: 0
  }
  render() {
    const {voteChange, clicked} = this.state;
    const {votes} = this.props
    return (

<div className='voter' >

        <span className={clicked > 0 ? "up-disabled" : "up"} onClick={()=> this.handleVote(1)}>
        <i className="fas fa-arrow-up" ></i>
        </span>

          <span className='votesLabel'>Votes:</span> 
          
          <span className='votesNumber'>{votes + voteChange}</span>

          <span className={clicked < 0 ? "down-disabled" : "down"} onClick={()=> this.handleVote(-1)}>
        <i className="fas fa-arrow-down" ></i>
        </span>

      </div>

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

    this.setState(({voteChange, clicked}) => {
      console.log(increment, '<--- increment!')
      console.log(clicked, '<---- clicked!')
      return {voteChange: voteChange + increment, clicked: clicked + increment}
    }, ()=>{
      console.log(this.state);
        localStorage.setItem(`voter_${type}_${article_id || comment_id}`, this.state.clicked);
    }, )
  }

  componentDidMount(){
    const {article_id, comment_id} = this.props;
    
    let type;
    if (article_id) type = 'article';
    if (comment_id) type = 'comment';

    let res = localStorage.getItem(`voter_${type}_${article_id || comment_id}`);
    console.log(res, '<=========', `voter_${type}_${article_id || comment_id}`)

    this.setState({
      clicked: Number(res)
    })
  }
}

export default Voter;