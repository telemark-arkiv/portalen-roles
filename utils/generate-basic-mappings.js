'use strict'

var fs = require('fs')
var generateId = require('./generate-id')
var list = fs.readFileSync('data/raw/unique-companies.txt', 'utf-8').split('\n')
var mapping = {}

list.forEach(function (item) {
  var id = generateId(item)
  mapping[id] = {
    name: item,
    groups: ['alle', id]
  }
})

fs.writeFileSync('data/raw/basic-mappings.json', JSON.stringify(mapping, null, 2))
