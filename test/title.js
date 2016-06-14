var URL = require('url')

var inputs = [
  'video',
  'code?line=22&lang=js'
]

function parse (str) {
  var url = URL.parse(str)
  console.log(url)
}

inputs.map(parse)
