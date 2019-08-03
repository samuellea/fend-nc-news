import React, { Component } from 'react';
import * as api from './api';
import '../styles/CommentInput.css';


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

      <form onSubmit={this.handleSubmit} className="commentInputForm">

      {/* <label> */}
        <textarea
          type="text"
          name="comment"
          placeholder="Add a public comment..."
          onChange={this.handleChange}
          value={this.state.newComment.body}
          className="commentInputTextArea"
        />
      {/* </label> */}
     

      <div className="commentButtonContainer">
        <button className="commentButton" disabled={body.length === 0}>Comment</button>
      </div>


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