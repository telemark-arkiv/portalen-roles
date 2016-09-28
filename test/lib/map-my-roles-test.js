'use strict'

var tap = require('tap')
var mapMyRoles = require('../../lib/map-my-roles')
var testData = require('./../data/test-data-mapping.json')

tap.equal(JSON.stringify(testData.expected), JSON.stringify(mapMyRoles(testData.testinput)), 'It returns expected results')
