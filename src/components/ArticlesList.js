import React, { Component } from 'react';
import * as api from './api';
import ArticleCard from "./ArticleCard";

class ArticlesList extends Component {

  state = {
    articles: []
  }

  render() {
    const {articles} = this.state
    return (
    <section>

      {articles.map(article=> {
        return (
          <>
          <ArticleCard article={article} key={article.article_id}/>
          </>
        )
      })}
    </section>
    );
  }

  componentDidUpdate(prevProps) {
    const {topic} = this.props
    if (prevProps.topic !== topic) {
      this.fetchArticles();
    }
  }

  componentDidMount() {
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

export default ArticlesList;