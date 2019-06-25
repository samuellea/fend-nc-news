import React, { Component } from 'react';
import CommentCard from "./CommentCard";
import CommentInput from "./CommentInput";

class CommentList extends Component {
  state = {
    comments: []
  }
  render() {
    const {comments} = this.state;
    return (
      <section>
        <CommentInput addNewComment={this.addNewComment} article_id={this.props.article_id}/>
      {comments.map(comment=> (
        <CommentCard comment={comment} key={comment.comment_id}/>
  ))}
    </section>
    );
  }

  addNewComment = newComment => {
      this.setState(prevState => {
        const {comments} = this.state;
        return {
          comments: [newComment, ...comments]
        }
      })
  }

  componentDidUpdate() {
  }

  componentDidMount() {
    const {comments} = this.props;
    this.setState({comments})
  }
}

export default CommentList;