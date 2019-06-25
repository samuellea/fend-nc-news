import React, { Component } from 'react';
import * as api from './api';
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {

  state = {
    articles: []
  }

  render() {
    const {articles} = this.state
    return (
    <section>
      {articles.map(article=> (
        <ArticleCard article={article} key={article.article_id}/>
  ))}
    </section>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const {topic} = this.props
    if (prevProps.topic !== topic) {
      this.fetchArticles();
    }
  }

  componentDidMount() {
    const {topic} = this.props
    this.fetchArticles();    
  }

  fetchArticles = () => {
    const {topic} = this.props
    api.getArticles(topic).then(articles => {
      this.setState({
        articles: articles
      })
    })
  }
}

export default ArticleList;