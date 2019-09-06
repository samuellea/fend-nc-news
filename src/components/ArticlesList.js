import React, { Component } from 'react';
import * as api from './api';
import ArticleCard from "./ArticleCard";
import Error from './Error';
import SortDropdown from './SortDropdown';
import '../styles/ArticlesList.css';

class ArticlesList extends Component {

  state = {
    articles: [],
    sortBy: null,
    isLoading: true,
    error: null,
    order: 'desc'
  }

  render() {

    const { articles, isLoading, error, sortBy, order } = this.state
    const { topic } = this.props
    if (error) return (
      <section>5
        <Error error={error} />
      </section>
    )
    return (
      <section className="articlesList">
        <div className={`topicBanner ${topic}`}>
          <SortDropdown handleSortChange={this.handleSortChange} handleOrderChange={this.handleOrderChange} sortBy={sortBy} order={order} />
        </div>

        {
          isLoading === true ?
            <div className="loader">Loading...</div>
            :
            articles.map((article, index) => {
              return (
                <>
                  <ArticleCard article={article} index={index} key={article.article_id} />
                </>
              )
            })
        }
      </section>
    )
  }

  handleSortChange = (event) => {
    const { target: { value } } = event
    this.setState({
      sortBy: value
    })
  }

  handleOrderChange = (event) => {
    const { order } = this.state;
    let orderToSet;

    if (order === 'desc') {
      orderToSet = 'asc'
    } else {
      orderToSet = 'desc'
    };

    this.setState({
      order: orderToSet
    })
  }


  componentDidUpdate(prevProps, prevState) {
    const topicChange = prevProps.topic !== this.props.topic;
    const sortByChange = prevState.sortBy !== this.state.sortBy;
    const orderChange = prevState.order !== this.state.order;

    if (sortByChange) {
      this.fetchArticles();
    }

    if (orderChange) {
      this.fetchArticles();
    }

    if (topicChange) {
      this.setState({
        sortBy: 'created_at',
        isLoading: true,
        error: null,
        order: 'desc'
      }, () => {
        this.fetchArticles();
      })
    }
  }

  componentDidMount() {

    this.fetchArticles();

    this.setState({
      sortBy: 'created_at'
    })
  }

  fetchArticles = () => {
    const { topic } = this.props
    const { sortBy, order } = this.state

    api.getArticles(topic, sortBy, order).then(articles => {

      this.setState({
        articles: articles,
        isLoading: false
      })

    }).catch(err => {
      this.setState({ isLoading: false, error: err })
    })
  }
}

export default ArticlesList;