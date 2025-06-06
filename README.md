# vec3
[![NPM version](https://img.shields.io/npm/v/vec3.svg)](http://npmjs.com/package/vec3)
[![Build Status](https://github.com/PrismarineJS/node-vec3/workflows/CI/badge.svg)](https://github.com/PrismarineJS/node-vec3/actions?query=workflow%3A%22CI%22)

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
  ▶ v()
  ✔ no args (0.498125ms)
  ✔ x, y, z (0.119292ms)
  ✔ array (0.051625ms)
  ✔ object (0.048458ms)
  ✔ string coords (0.109917ms)
  ✔ deserialize (0.138834ms)
  ✔ invalid deserialize (0.3055ms)
✔ v() (2.058334ms)
▶ vec3
  ✔ isZero (1.018417ms)
  ✔ at (0.428667ms)
  ✔ xz (0.152125ms)
  ✔ xy (0.041292ms)
  ✔ yz (0.045375ms)
  ✔ xzy (0.038917ms)
  ✔ rounded (0.050167ms)
  ✔ round (0.044667ms)
  ✔ floored (0.041708ms)
  ✔ floor (0.037375ms)
  ✔ offset (0.037458ms)
  ✔ translate (0.035791ms)
  ✔ plus (0.040667ms)
  ✔ minus (0.039542ms)
  ✔ scaled (0.039375ms)
  ✔ abs (0.036291ms)
  ✔ distanceTo (0.044708ms)
  ✔ distanceSquared (0.041125ms)
  ✔ equals (0.048042ms)
  ✔ toString (0.028667ms)
  ✔ clone (0.034458ms)
  ✔ add (0.036875ms)
  ✔ subtract (0.034167ms)
  ✔ multiply (0.033ms)
  ✔ divide (0.033ms)
  ✔ set (0.040125ms)
  ✔ modulus (0.052375ms)
  ✔ volume (0.030792ms)
  ✔ min (0.043541ms)
  ✔ max (0.035458ms)
  ✔ update (0.049667ms)
  ✔ norm (0.053458ms)
  ✔ dot (0.039125ms)
  ✔ cross (0.044ms)
  ✔ unit (0.054083ms)
  ✔ normalize (0.04425ms)
  ✔ scale (0.036709ms)
  ✔ xyDistanceTo (0.038334ms)
  ✔ xzDistanceTo (0.035625ms)
  ✔ yzDistanceTo (0.035334ms)
  ✔ innerProduct (0.033917ms)
  ✔ manhattanDistanceTo (0.038583ms)
  ✔ toArray (0.036667ms)
✔ vec3 (3.8025ms)
```

More functions welcome in the form of pull requests.

## History

See [History](HISTORY.md)
