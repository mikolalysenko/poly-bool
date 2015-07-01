var polybool = require('../bool')

var a = [[[-1,-1], [-1,1], [1,1], [1,-1]]]
var b = [[[0, 0], [0,2], [2,2], [2,0]]]

console.log(polybool(a, b, 'sub'))
