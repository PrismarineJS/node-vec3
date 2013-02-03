module.exports = v;
v.Vec3 = Vec3;

var re = /\((-?[.\d]+), (-?[.\d]+), (-?[.\d]+)\)/;

function Vec3(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

function v(x, y, z) {
  if (x == null) {
    return new Vec3(0, 0, 0);
  } else if (Array.isArray(x)) {
    return new Vec3(parseFloat(x[0], 10), parseFloat(x[1], 10), parseFloat(x[2], 10));
  } else if (typeof x === 'object') {
    return new Vec3(parseFloat(x.x, 10), parseFloat(x.y, 10), parseFloat(x.z, 10));
  } else if (typeof x === 'string' && y == null) {
    var match = x.match(re);
    if (match) {
      return new Vec3(
          parseFloat(match[1], 10),
          parseFloat(match[2], 10),
          parseFloat(match[3], 10));
    } else {
      throw new Error("vec3: cannot parse: " + x);
    }
  } else {
    return new Vec3(parseFloat(x, 10), parseFloat(y, 10), parseFloat(z, 10));
  }
}

Vec3.prototype.set = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  return this;
};

Vec3.prototype.update = function(other) {
  this.x = other.x;
  this.y = other.y;
  this.z = other.z;
  return this;
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
Vec3.prototype.min = function(other) {
  return new Vec3(Math.min(this.x, other.x), Math.min(this.y, other.y), Math.min(this.z, other.z));
};
Vec3.prototype.max = function(other) {
  return new Vec3(Math.max(this.x, other.x), Math.max(this.y, other.y), Math.max(this.z, other.z));
};

function euclideanMod(numerator, denominator) {
  var result = numerator % denominator;
  return result < 0 ? result + denominator : result;
}
