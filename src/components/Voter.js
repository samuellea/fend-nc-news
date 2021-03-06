import React, { Component } from 'react';
import * as api from './api';
import '../styles/Voter.css';

class Voter extends Component {
  state = {
    voteChange: 0,
    clicked: 0
  }
  render() {
    const { voteChange, clicked } = this.state;
    const { votes, voterType } = this.props;
    let voterStyle = '';
    let voterIconSize = '';
    if (voterType === 'bigVoter' && window.innerWidth > 479) {
      voterStyle = 'articleVoterLarge';
      voterIconSize = 'fa-lg';
    };

    return (
      <div className={`voter ${voterStyle}`}>
        <div className={`voter-upArrow ${voterIconSize}`}>
          <span className={clicked > 0 ? "up-disabled" : "up"} onClick={() => this.handleVote(1)}>
            <i className="fas fa-angle-up" ></i>
          </span>
        </div>

        <div className={`voter-votesLabel ${voterStyle}`}>
          <span>Votes:</span>
        </div>

        <div className={`voter-votesNumber ${voterStyle}`} >
          <span>{votes + voteChange}</span>
        </div>

        <div className={`voter-downArrow ${voterIconSize}`}>
          <span className={clicked < 0 ? "down-disabled" : "down"} onClick={() => this.handleVote(-1)}>
            <i className="fas fa-angle-down" ></i>
          </span>
        </div>

      </div>
    );
  }

  handleVote = (increment) => {
    const { article_id, comment_id } = this.props;

    let type;
    if (article_id) type = 'article';
    if (comment_id) type = 'comment';

    api.patchVotes(type, article_id || comment_id, increment).catch(err => {
      this.setState(({ voteChange }) => {
        return { voteChange: voteChange - increment }
      })
    })

    this.setState(({ voteChange, clicked }) => {
      return { voteChange: voteChange + increment, clicked: clicked + increment }
    }, () => {
      localStorage.setItem(`voter_${type}_${article_id || comment_id}`, this.state.clicked);
    })
  }

  componentDidMount() {
    const { article_id, comment_id } = this.props;
    let type;
    if (article_id) type = 'article';
    if (comment_id) type = 'comment';

    let res = localStorage.getItem(`voter_${type}_${article_id || comment_id}`);

    this.setState({
      clicked: Number(res)
    })
  }
}

export default Voter;