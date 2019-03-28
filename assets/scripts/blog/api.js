'use strict'
const config = require('../config.js')
// const store = require('../store.js')

const createBlog = (formData) => {
  const blog = formData.blog
  return $.ajax({
    url: config.apiUrl + '/blogs',
    method: 'POST',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    data: {blog}
  })
}

const indexBlog = () => {
  return $.ajax({
    url: config.apiUrl + '/blogs',
    method: 'GET'
  })
}

const indexMyBlogs = () => {
  return $.ajax({
    url: config.apiUrl + '/my-blogs',
    method: 'GET'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

const showBlog = (formData) => {
  const id = formData.blog.id
  return $.ajax({
    url: config.apiUrl + `/blogs/${id}`,
    method: 'GET'
  })
}

const updateBlog = (formData) => {
  const blog = formData.blog
  const id = formData.blog.id
  console.log(blog)
  return $.ajax({
    url: config.apiUrl + `/blogs/${id}`,
    method: 'PATCH',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    data: {blog}
  })
}

const deleteBlog = (formData) => {
  const id = formData.blog.id
  return $.ajax({
    url: config.apiUrl + `/blogs/${id}`,
    method: 'DELETE'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

module.exports = {
  createBlog,
  indexBlog,
  showBlog,
  updateBlog,
  deleteBlog,
  indexMyBlogs
}
