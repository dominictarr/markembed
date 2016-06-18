var marked = require('marked')
var parse = require('./parse')
var QS = require('qs')

function element(tag, attrs, text) {
  var s = '<'+tag
  for(var k in attrs)
    s += ' ' + k + '='+JSON.stringify(attrs[k])
  if(text)
    s += '>'+text+'</'+tag+'>'
  else
    s += '/>'
  return s
}

var renderer = new marked.Renderer()

//renderer.link = function (href, title, text) {
//  var p = parse(title)
////  var opts = {href: '#/'+p.pathname+'/'+href + '?'+QS.stringify(attrs)}
//
//  var el = parse(title)
//  var tag = el.tag || 'img'
//  var attrs = el.attributes || {title: title}
//  attrs.href = 
//
//  if(!attrs.title) delete attrs.title
//
//  return element('anchor', opts, text)
//}

renderer.image = function (src, title, text) {
  var el = parse(title)
  var tag = el.tag || 'img'
  var attrs = el.attributes || {title: title}
  attrs.src = src
  attrs.alt = text
  return element(tag, attrs)
}

module.exports = function (str) {
  return marked(str, {renderer: renderer})
}

