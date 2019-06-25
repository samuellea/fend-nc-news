import React, { Component } from 'react';
import * as api from './api';
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
             <h4 style={{textAlign: 'left', marginLeft: '2%'}}>Comments ({comments.length})</h4>
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

  componentDidMount() {
    const {article_id} = this.props;
    api.getCommentsByArticleId(article_id)
    .then(({comments}) => {
      this.setState({comments})
    })

  }
}

export default CommentList;