// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const store = require('../../store.js')

const ifLiked = (blogLikes) => {
  let liked = false
  if (blogLikes.some(like => like.toString() === store.user._id)) { liked = true }
  if (liked) {
    return 'Unlike 👎'
  } else {
    return 'Like 👍'
  }
}

module.exports = ifLiked
