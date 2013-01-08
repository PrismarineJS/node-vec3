var util = require('util');

module.exports = v;
v.Vec3 = Vec3;

function Vec3(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

function v(x, y, z) {
  return x == null ?
    new Vec3(0, 0, 0) :
    util.isArray(x) ?
      new Vec3(x[0], x[1], x[2]) :
      (typeof x === 'object') ?
        new Vec3(x.x, x.y, x.z) :
        new Vec3(x, y, z);
}

Vec3.prototype.set = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

Vec3.prototype.floored = function() {
  return new Vec3(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z));
};

Vec3.prototype.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  this.z = Math.floor(this.z);
  return this;
};

Vec3.prototype.offset = function(dx, dy, dz) {
  return new Vec3(this.x + dx, this.y + dy, this.z + dz);
};
Vec3.prototype.translate = function(dx, dy, dz) {
  this.x += dx;
  this.y += dy;
  this.z += dz;
  return this;
};
Vec3.prototype.add = function(other) {
  this.x += other.x;
  this.y += other.y;
  this.z += other.z;
  return this;
};
Vec3.prototype.subtract = function(other) {
  this.x -= other.x;
  this.y -= other.y;
  this.z -= other.z;
  return this;
};
Vec3.prototype.plus = function(other) {
  return this.offset(other.x, other.y, other.z);
};
Vec3.prototype.minus = function(other) {
  return this.offset(-other.x, -other.y, -other.z);
};
Vec3.prototype.scaled = function(scalar) {
  return new Vec3(this.x * scalar, this.y * scalar, this.z * scalar);
};
Vec3.prototype.abs = function() {
  return new Vec3(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
};
Vec3.prototype.volume = function() {
  return this.x * this.y * this.z;
};
Vec3.prototype.modulus = function(other) {
  return new Vec3(
    euclideanMod(this.x, other.x),
    euclideanMod(this.y, other.y),
    euclideanMod(this.z, other.z));
};
Vec3.prototype.distanceTo = function(other) {
  var dx = other.x - this.x;
  var dy = other.y - this.y;
  var dz = other.z - this.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
};
Vec3.prototype.equals = function(other) {
  return this.x === other.x && this.y === other.y && this.z === other.z;
};
Vec3.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ", " + this.z + ")";
};
Vec3.prototype.clone = function() {
  return this.offset(0, 0, 0);
};

function euclideanMod(numerator, denominator) {
  var result = numerator % denominator;
  return result < 0 ? result + denominator : result;
}
