import React, { Component } from 'react';
import * as api from './api';
import ArticleCard from "./ArticleCard";
import Error from './Error';
import SortDropdown from './SortDropdown';
import loadingSpinner from './Rolling-1s-200px.gif';

class ArticlesList extends Component {

  state = {
    articles: [],
    sortBy: null,
    isLoading: true,
    error: null
  }

  render() {

    const {articles, isLoading, error} = this.state
    const {topic} = this.props
    console.log(topic, '******************')
    if (error) return (
      <section>
          <SortDropdown handleChange={this.handleChange}/>
        <Error error={error}/>
      </section>
    )
    return (
    <section>

      <div className={`topicBanner ${topic}`}>
        <SortDropdown handleChange={this.handleChange}/>
      </div>

      {isLoading === true ? <img className="loadingSpinner" src={loadingSpinner} alt="loading..." /> : articles.map(article=> {
        return (
          <>
          <ArticleCard article={article} key={article.article_id} />
          </>
        )
      })}
    </section>
    )
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
        isLoading: true,
        error: null
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
    }).catch(err => {
      this.setState({isLoading: false, error: err}) // or the error itself
    })
  }
}

export default ArticlesList;

{/* <br/>
  <select id="sortBy-dropdown" onChange={this.handleChange}>
  <option value="created_at" selected="selected">CREATED AT</option>
  <option value="votes" >VOTES</option>
  <option value="comment_count">COMMENT COUNT</option>
  </select>
<br/> */}