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
      const commentPromise = () => {
        return request.get(`/articles/${article_id}/comments`)
      }
      return Promise.all([data, commentPromise()])
    }).then(articleAndComments => {
      return {
        article: articleAndComments[0].article,
        comments: articleAndComments[1].data.comments
      }
    })
}

export const addCommentById = (article_id, newComment) => {
  return request.post(`/articles/${article_id}/comments`, newComment)
    .then(({data}) => {
      return data;
    })
}