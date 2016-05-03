'use strict'

var envs = process.env

module.exports = function (options) {
  var seneca = this

  seneca.add('cmd:list-roles, type:user', listAllRoles)

  return {
    name: envs.PORTALEN_ROLES_TAG || 'portalen-roles'
  }
}

function listAllRoles (args, callback) {
  var roleMappings = require('../data/role-mappings.json')
  var roles = []

  Object.keys(roleMappings).forEach(function (key) {
    roles.push({
      id: key,
      name: roleMappings[key].name
    })
  })

  callback(null, roles)
}
