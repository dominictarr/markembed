var qs = require('qs')

//valid embed

 // /(^[img|image|audio|video|iframe]|(?:\w+(?:-\w+)+))(?:\?(.*))$/

var embed = 
/^(img|image|audio|video|iframe|(?:[a-z][a-z0-9]*(?:-[a-z0-9]+)+))(?:\?(.*))?$/

module.exports = function (title) {
  var m = embed.exec(title)
  if(m)
    return {tag: m[1], attributes: qs.parse(m[2]) || {}}
}

