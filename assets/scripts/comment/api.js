'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createComment = (formData, blogId) => {
  const comment = formData.comment.text
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'POST',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: {
      comment: {
        text: comment,
        blog: blogId
      }
    }
  })
}

const indexComment = () => {
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'GET'
  })
}

const indexMyComments = () => {
  return $.ajax({
    url: config.apiUrl + '/my-comments',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showComment = (formData) => {
  const id = formData.comment.id
  return $.ajax({
    url: config.apiUrl + `/comments/${id}`,
    method: 'GET'
  })
}

const updateComment = (formData, id) => {
  const comment = formData.comment
  return $.ajax({
    url: config.apiUrl + `/comments/${id}`,
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: {comment}
  })
}

const deleteComment = id => {
// console.log('deleteComment')
  return $.ajax({
    url: config.apiUrl + `/comments/${id}`,
    method: 'DELETE',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

module.exports = {
  createComment,
  indexComment,
  showComment,
  updateComment,
  deleteComment,
  indexMyComments
}
