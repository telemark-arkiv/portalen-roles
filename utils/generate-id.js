'use strict'

function generateId (input) {
  input = input.toLowerCase()
  input = input.replace(/\s/g, '')

  return input
}

module.exports = generateId
