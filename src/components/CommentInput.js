import React, { Component } from 'react';
import * as api from './api';

class CommentInput extends Component {
  state = {
    newComment: {
      username: 'jessjelly',
      body: ''
    },
    buttonActive: false
  }

  handleSubmit = event => {
    event.preventDefault();
    api.addCommentById(this.props.article_id, this.state.newComment).then(({comment}) => {
      this.props.addNewComment(comment)
    }).then(()=>{
      this.setState(prevState => {
        const {newComment} = prevState
        return {
          newComment: {...newComment, body: '' }
        }
      })
    })
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState(prevState => {
      const { newComment } = prevState;
      return {
        newComment: {...newComment, body: value},
        buttonActive: true
      };
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Enter your comment:
        <input
          type="text"
          name="comment"
          onChange={this.handleChange}
          value={this.state.newComment.body}
        />
      </label>
      <button >Comment</button>
    </form>
    );
  }
}

export default CommentInput;