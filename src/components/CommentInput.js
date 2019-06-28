import React, { Component } from 'react';
import * as api from './api';

class CommentInput extends Component {
  state = {
    newComment: {
      body: ''
    }
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
      };
    });
  };

  render() {
    const {newComment: {body}} = this.state
    return (
      <form onSubmit={this.handleSubmit} style={{marginBottom: '2%'}}>
      <label>
        Enter your comment: 
        <input
          type="text"
          name="comment"
          onChange={this.handleChange}
          value={this.state.newComment.body}
          style={{width: '50%', height: 48, backgroundColor: 'lavenderblush'}}
        />
      </label>
      <button disabled={body.length === 0} style={{height: 48, marginLeft: '1%', marginTop: '2%', color: 'white', backgroundColor: 'darkred', borderRadius: '3px'}}>Comment</button>
    </form>
    );
  }

  componentDidMount() {
    this.setState({
      newComment: {
        username: this.props.username,
        body: ''
      }
    })
  }
}

export default CommentInput;