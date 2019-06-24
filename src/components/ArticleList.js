import React, { Component } from 'react';
import * as api from './api'; // import all the functions from the api.js file as a variable called 'api'

class ArticleList extends Component {

  state = {
    articles: []
  }

  render() {
    const {articles} = this.state
    return (
    <section>
      {articles.map(article=> (
        <p key={article._id}>{article.title}</p>
  ))}
    </section>
    );
  }

  componentDidUpdate(prevProps) {
    const {topic} = this.props
    if (prevProps.topic !== topic) {
      api.getArticles(topic).then(articles => {
        this.setState({
          articles: articles
        })
      })
    }
  }

  componentDidMount() {
    const {topic} = this.props
    api.getArticles(topic).then(articles => {
      console.log(articles, 'articles coming in during ArticleList componentDidMount')
      this.setState({
        articles: articles
      })
    })
  }
}

export default ArticleList;