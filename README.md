polygon-boolean
===============
A robust polygon Boolean library in under 20 lines of code! (Excluding dependencies)  Work with *any* kind of polygon, results are accurate to *machine precision*, and under no circumstances will valid input ever crash or produce incorrect output.

# Example

```javascript
var polybool = require('polygon-boolean')

var a = [[[-1,-1], [-1,1], [1,1], [1,-1]]]
var b = [[[0, 0], [0,2], [2,2], [2,0]]]

console.log(polybool(a, b, 'sub'))
```

#### Output

```javascript
[ [ [ 1, 1 ], [ 1, 0 ], [ 2, 0 ], [ 2, 2 ], [ 0, 2 ], [ 0, 1 ] ] ]
```

# Install

```
npm i polygon-boolean
```

# API

#### `require('polygon-boolean')(a, b, op)`
Computes a Boolean set operation between `a` and `b`

* `a,b` are polygons represented by lists of loops of points
* `op` is the operation to apply

**Returns** A polygon encoding some boolean combination of the components of `a` and `b`

# License
(c) 2015 Mikola Lysenko. MIT License
