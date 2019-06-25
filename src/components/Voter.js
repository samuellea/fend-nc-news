import React, { Component } from 'react';

class Voter extends Component {
  state = {

  }
  render() {
    return (
      <div>
        <button>⬆</button>
        <button>⬇</button><span></span>
        Votes: {this.props.votes}
      </div>
    );
  }
}

export default Voter;