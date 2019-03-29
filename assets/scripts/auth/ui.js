'use strict'
const store = require('../store.js')
const view = require('../view/view')

const signUpSuccess = () => {
  $('#user-message').text('Successfully signed up!')
  $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  $('#user-message').text('Successfully signed in!')
  $('form').trigger('reset')
  $('.post-login').show()
  $('.pre-login').hide()
  view.showOwnership()
}

const changePasswordSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully changed password!')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully signed out!')
  $('form').trigger('reset')
  $('.post-login').hide()
  $('.pre-login').show()
  view.hideOwnership()
  store.user = null
}

const failure = () => {
  $('#user-message').show()
  $('#user-message').text('SOMETHING WENT WRONG')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure
}
