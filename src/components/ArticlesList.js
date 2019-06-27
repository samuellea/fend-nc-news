import React, { Component } from 'react';
import * as api from './api';
import ArticleCard from "./ArticleCard";

class ArticlesList extends Component {

  state = {
    articles: [],
    sortBy: null,
    isLoading: true
  }

  render() {
    const {articles, isLoading} = this.state
    return (
    <section>
      <br/>
        <select id="sortBy-dropdown" onChange={this.handleChange}>
        <option value="created_at" selected="selected">CREATED AT</option>
        <option value="votes" >VOTES</option>
        <option value="comment_count">COMMENT COUNT</option>
        </select>
      <br/>
      {isLoading === true ? <p>Loading...</p> : articles.map(article=> {
        return (
          <>
          <ArticleCard article={article} key={article.article_id}/>
          </>
        )
      })}
    </section>
    );
  }

  handleChange = (event) => {
    const {target: {value}} = event
    this.setState({
      sortBy: value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate...')
    const topicChange = prevProps.topic !== this.props.topic;
    const sortByChange = prevState.sortBy !== this.state.sortBy;
    const {topic} = this.props

    if (sortByChange) {
      this.fetchArticles();
    }

    if (topicChange) {
      this.setState({
        sortBy: 'created_at',
        isLoading: true
      }, ()=>{
        document.getElementById("sortBy-dropdown").selectedIndex = 0;
        this.fetchArticles();
      })
    }

  }

  componentDidMount() {
    console.log('componentDidMount')
    this.fetchArticles();    
  }

  fetchArticles = () => {
    const {topic} = this.props
    const {sortBy} = this.state

    api.getArticles(topic, sortBy).then(articles => {
      this.setState({
        articles: articles,
        isLoading: false
      })
    })
  }
}

export default ArticlesList;