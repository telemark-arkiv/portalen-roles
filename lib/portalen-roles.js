'use strict'

var mapMyRoles = require('./map-my-roles')
var envs = process.env

module.exports = function (options) {
  var seneca = this

  seneca.add('cmd:map-roles, type:user', getMyRoles)

  return {
    name: envs.PORTALEN_ROLES_TAG || 'portalen-roles'
  }
}

function getMyRoles (args, callback) {
  var roles = args.roles
  var result = mapMyRoles(roles)

  callback(null, result)
}
