import axios from 'axios';

const request = axios.create({baseURL: 'https://bend-nc-news.herokuapp.com/api/'})

export const getTopics = (topic, author) => {
  return request.get('/topics').then(({data}) => {
    return data.topics;
  })
}

export const getArticles = (topic, author) => {
  return request.get('/articles', {params: {
    topic: topic
  }}).then(({data}) => {
    return data.articles;
  })
}

export const getArticleById = (article_id) => {
  return request.get(`/articles/${article_id}`)
  .then(({data}) => {
    return data;
  })
}

export const getCommentsByArticleId = (article_id) => {
  return request.get(`/articles/${article_id}/comments`)
    .then(({data}) => {
      return data;
    })
}

export const addCommentById = (article_id, newComment) => {
  return request.post(`/articles/${article_id}/comments`, newComment)
    .then(({data}) => {
      return data;
    })
}