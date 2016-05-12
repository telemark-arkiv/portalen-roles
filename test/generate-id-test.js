'use strict'

var tap = require('tap')
var generateId = require('../utils/generate-id')
var testData = require('./data/test-data-generate-id.json')

testData.forEach(function (item) {
  tap.equal(item.expected, generateId(item.input), 'It returns expected result from ' + item.input)
})
