import axios from 'axios';

const request = axios.create({ baseURL: 'https://bend-nc-news.herokuapp.com/api/' })

export const getTopics = (topic, author) => {
  return request.get('/topics').then(({ data }) => {
    return data.topics;
  })
}

export const getArticles = (topic, sortBy, order) => {
  return request.get('/articles', {
    params: {
      topic: topic,
      sort_by: sortBy,
      order: order
    }
  }).then(({ data }) => {
    return data.articles;
  })
}

export const getArticleById = (article_id) => {
  return request.get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    })
}

export const getCommentsByArticleId = (article_id) => {
  return request.get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    })
}

export const addCommentById = (article_id, newComment) => {
  return request.post(`/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data;
    })
}

export const deleteCommentById = (comment_id) => {
  return request.delete(`/comments/${comment_id}`).then((response) => {
    return response;
  })
}

export const patchVotes = (type, id, increment) => {
  if (type === 'article') {
    return request.patch(`/articles/${id}`, { inc_votes: increment }) // 2nd object going to be sent by axios as the body. same syntax as getArticles
      .then(({ data }) => {
        return data.article
      })
  } else if (type === 'comment') {
    return request.patch(`/comments/${id}`, { inc_votes: increment }) // 2nd object going to be sent by axios as the body. same syntax as getArticles
      .then(({ data }) => {
        return data.comment
      })
  }
}

export const getUserById = user_id => {
  return request.get(`/users/${user_id}`)
    .then(({ data }) => {
      return data.user;
    })
}