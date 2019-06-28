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
      <div style={{marginTop: '1.1%'}}>
        <button onClick={()=> this.handleVote(1)} disabled={clicked > 0} className='up' style={{lineHeight: '30px', width: '5%', fontSize: '150%', textAlign: 'center', justifyContent: 'center'}}>⬆</button> 
        <button onClick={()=> this.handleVote(-1)} disabled={clicked < 0} className='down' style={{lineHeight: '30px', width: '5%', fontSize: '150%', textAlign: 'center', justifyContent: 'center'}}>⬇</button>
          <span style={{paddingLeft: '10px'}}>Votes: <span style={{color: 'darkred', fontWeight: 'bold'}}>{votes + voteChange}</span></span>
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
      return {voteChange: voteChange + increment, clicked: clicked + increment}
    }, ()=>{
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