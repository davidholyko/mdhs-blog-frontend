'use strict'
const store = require('../store.js')
const view = require('../view/view')

const signUpSuccess = () => {
  $('form').trigger('reset')
  $('#sign-up-modal').modal('hide')
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  $('form').trigger('reset')
  $('.post-login').show()
  $('.pre-login').hide()
  $('#sign-in-modal').modal('hide')
  view.showOwnership()
}

const changePasswordSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully changed password!')
  $('form').trigger('reset')
  $('#change-password-modal').modal('hide')
}

const signOutSuccess = () => {
  store.user = null
  $('#user-message').show()
  $('form').trigger('reset')
  $('.post-login').hide()
  $('.pre-login').show()
  $('#sign-out-modal').modal('hide')
  view.hideOwnership()
}

const failure = () => {
  $('#user-message').show()
  $('#user-message').text('Something went wrong')
  $('form').trigger('reset')
  $('#failure-modal').modal('show')
}

const signInFailure = () => {
  $('form').trigger('reset')
  $('#sign-in-form-feedback').text('Your username must exist already and password must be correct. Try again.')
  setTimeout(() => $('#sign-in-form-feedback').text(''), 3000)
}

const signUpFailure = () => {
  $('form').trigger('reset')
  $('#sign-up-form-feedback').text('Your username and email must be unique! Try a different one.')
  setTimeout(() => $('#sign-up-form-feedback').text(''), 3000)
}

const changePasswordFailure = () => {
  $('form').trigger('reset')
  $('#change-password-form-feedback').text('Your old password must be correct. Try again.')
  setTimeout(() => $('#change-password-form-feedback').text(''), 3000)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signInFailure,
  failure,
  signUpFailure
}
