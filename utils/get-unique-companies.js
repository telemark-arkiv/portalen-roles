'use strict'

var fs = require('fs')
var makeUnique = require('tfk-unique-array')
var companies = fs.readFileSync('data/raw/companies.txt', 'utf-8')
var uniques = makeUnique(companies.split('\n'))

uniques.sort()

fs.writeFileSync('data/raw/unique-companies.txt', uniques.join('\n'))
