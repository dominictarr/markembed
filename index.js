var marked = require('marked')
var h = require('hyperscript')

var render = new Marked.Renderer()

render.link = function (href, title, text) {
  var p = URL.parse(title)
  var attrs = qs.parse(p.query)
  var opts = {href: '#/'+p.pathname+'/'+href + attrs.query}

  return h('anchor', opts, text).outerHTML.toString()
}

render.image = function (src, title, text) {
  var p = URL.parse(title)
  var attrs = qs.parse(p.query)
  var tag = p.pathname || 'img'
  attrs.src = src
  return h(p.pathname, attrs, text).outerHTML.toString()
}

module.exports = function (str) {
  return marked(str, {renderer: renderer})
}


