'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onBlogCrud = {
  create: function (event) {
    // console.log('onBlogCrudCreate')
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.createBlog(formData)
      .then(ui.onCreateBlogSuccess)
      .then(this.index)
      .catch(ui.onBlogFailure)
  },
  index: function (event) {
    // console.log('onBlogCrudIndex')
    if (event) { event.preventDefault() }
    api.indexBlog()
      .then(ui.onIndexBlogSuccess)
      .catch(ui.onBlogFailure)
  },
  show: function (event) {
    // console.log('onBlogCrudShow')
    if (event) { event.preventDefault() }
    const formData = getFormFields(event.target)
    api.showBlog(formData)
      .then(ui.onShowBlogSuccess)
      .catch(ui.onBlogFailure)
  },
  update: function (event) {
    // console.log('onBlogCrudUpdate')
    event.preventDefault()
    const blogId = $(event.target).data('blog-id')
    const formData = getFormFields(event.target)
    api.updateBlog(formData, blogId)
      .then(ui.onUpdateBlogSuccess)
      .then(this.index)
      .catch(ui.onBlogFailure)
  },
  delete: function (event) {
    // console.log('onBlogCrudDelete')
    event.preventDefault()
    const id = $(event.target).data('blog-id')
    api.deleteBlog(id)
      .then(() => ui.onDeleteBlogSuccess(id))
      .catch(ui.onBlogFailure)
  }
}

const onToggleComments = () => {
  console.log('onToggleComments')
  event.preventDefault()
  const blog = $(event.target).data('blog-id')
  $(`.comment[data-blog-id=${blog}]`).toggleClass('d-none')

  if ($(event.target).text() === 'Hide Comments') {
    $(event.target).text('Show Comments')
  } else {
    $(event.target).text('Hide Comments')
  }
}

const addHandlers = () => {
  $('body').on('submit', '.blog-crud-form', (event) => {
    event.preventDefault()
    const crudAction = $(event.target).data('action')
    onBlogCrud[crudAction](event)
  })
  $('body').on('click', '.toggle-comments', onToggleComments)
}

module.exports = {
  addHandlers,
  onBlogCrud
}
