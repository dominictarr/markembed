var embed = require('./')
var fs = require('fs')

function update (self) {
  var src = self.attributes.src && self.attributes.src.value
  if(src) self.innerHTML = embed(fs.readFileSync(src, 'utf8'))
}

module.exports = function () {
  var proto = Object.create(HTMLElement.prototype)
  proto.createdCallback = function () {
    update(this)
  }
  proto.attributeChangedCallback = function (key, _value, value) {
    if(key === 'src') update(this)
  }

  return document.registerElement('x-markdown', { prototype: proto })
}

