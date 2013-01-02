# vec3

3D vector math with robust unit tests.

## Usage

```js
var v = require('vec3');

var v1 = v(1, 2, 3);
console.log(v1); // prints "(1, 2, 3)"
var v2 = v1.offset(0, 0, 1);
console.log(v2); // prints "(1, 2, 4)"
```

Or:

```js
var Vec3 = require('vec3').Vec3;

var v1 = new Vec3(1, 2, 3);
// etc...
```

More available functions are listed below in Test Coverage.

## Test Coverage

```
  v()
    ✓ x, y, z 
    ✓ array 
    ✓ object 

  vec3
    ✓ floored 
    ✓ offset 
    ✓ plus 
    ✓ minus 
    ✓ scaled 
    ✓ abs 
    ✓ distanceTo 
    ✓ equals 
    ✓ toString 
    ✓ clone 


  13 tests complete (3 ms)
```

More functions welcome in the form of pull requests.
