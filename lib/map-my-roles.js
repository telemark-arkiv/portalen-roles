'use strict'

var makeUnique = require('tfk-unique-array')
var roleMappings = require('../data/role-mappings.json')

function mapMyRoles (roles) {
  var myRoles = []

  roles.forEach(function (item) {
    if (roleMappings.hasOwnProperty(item)) {
      myRoles = myRoles.concat(roleMappings[item].groups)
    }
  })

  return makeUnique(myRoles)
}

module.exports = mapMyRoles
