'use strict'

var mapMyRoles = require('./map-my-roles')
var generateId = require('../utils/generate-id')
var envs = process.env

module.exports = function (options) {
  var seneca = this

  seneca.add('cmd:map-roles, type:user', getMyRoles)

  return {
    name: envs.PORTALEN_ROLES_TAG || 'portalen-roles'
  }
}

function getMyRoles (args, callback) {
  var company = args.company
  var roles = args.roles || []

  if (company) {
    roles.push(generateId(company))
  }

  callback(null, mapMyRoles(roles))
}
