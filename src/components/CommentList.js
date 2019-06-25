import React, { Component } from 'react';
import CommentCard from "./CommentCard";

class CommentList extends Component {
  state = {
    comments: []
  }
  render() {
    const {comments} = this.state;
    return (
      <section>
        <input type="text"/>
      {comments.map(comment=> (
        <CommentCard comment={comment} key={comment.comment_id}/>
  ))}
    </section>
    );
  }

  componentDidMount() {
    const {comments} = this.props;
    this.setState({comments})
  }
}

export default CommentList;