var URL = require('url')
var parse = require('../parse')

var inputs = [
  'video',
  'image',
  'audio',
  'iframe',
  'x-code?line=22&lang=js',
  'x-withnum1'
]

var title = [
  'Assyrian people',
  'Refugees'
]

console.log(inputs.map(parse))








