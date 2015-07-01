'use strict'

module.exports = polyBool

var pslg2poly = require('pslg-to-poly')
var poly2pslg = require('poly-to-pslg')
var overlay   = require('overlay-pslg')

function polyBool(a, b, op) {
  var apsl = poly2pslg(a)
  var bpsl = poly2pslg(b)
  var result = overlay(
    apsl.points, apsl.edges,
    bpsl.points, bpsl.edges,
    op)
  return pslg2poly(result.points, result.red.concat(result.blue))
}
