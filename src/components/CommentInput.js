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

      // <div className="commentInputContainer">
      //   test
      // </div>

      <form onSubmit={this.handleSubmit} style={{marginBottom: '2%', textAlign: 'left'}}>
      <label>
        <textarea
          // rows="5" 
          // cols="5"
          type="text"
          name="comment"
          placeholder="Add a public comment..."
          onChange={this.handleChange}
          value={this.state.newComment.body}
          style={{width: '90%', height: 50, backgroundColor: 'lavenderblush', fontSize: '100%', margin: 'auto'}}
        />
      </label>
      <button className="commentButton" disabled={body.length === 0}>Comment</button>
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