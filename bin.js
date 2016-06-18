#!/usr/bin/env electro
var fs = require('fs')

var XMarkdown = require('./x-markdown')()

var embed = require('./')
var d = new XMarkdown()
d.setAttribute('src', process.argv[2])

//d.innerHTML = embed(fs.readFileSync(process.argv[2], 'utf8'))
document.body.appendChild(d)


