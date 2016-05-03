'use strict'

var Seneca = require('seneca')
var Mesh = require('seneca-mesh')
var PortalenRoles = require('./lib/portalen-roles')
var PortalenListRoles = require('./lib/portalen-list-roles')
var envs = process.env

var options = {
  seneca: {
    tag: envs.PORTALEN_ROLES_TAG || 'portalen-roles'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'cmd:map-roles, type:user', model: 'consume'},
      {pin: 'cmd:list-roles, type:user', model: 'consume'}
    ]
  },
  portalenRoles: {
    url: envs.PORTALEN_ROLES_URL || 'http://roles.portalen.no'
  },
  portalenListRoles: {
    url: envs.PORTALEN_ROLES_URL || 'http://roles.portalen.no'
  },
  isolated: {
    host: envs.PORTALEN_ROLES_HOST || 'localhost',
    port: envs.PORTALEN_ROLES_PORT || 8000
  }
}

var Service = Seneca(options.seneca)

if (envs.PORTALEN_ROLES_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(PortalenRoles, options.portalenRoles)
Service.use(PortalenListRoles, options.portalenListRoles)
