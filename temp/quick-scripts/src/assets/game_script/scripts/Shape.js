"use strict";
cc._RF.push(module, '83d94jbLnZF7oVs2WQ1jJK+', 'Shape');
// game_script/scripts/Shape.js

"use strict";

var o;
exports.ShapeSupport = exports.cPolygon = exports.cSphere = exports.cBox = exports.cShape = exports.ShapeType = void 0;
var s;
var r;

var $aILib = require("./AILib");

var l = cc.Vec3;
(r = s = exports.ShapeType || (exports.ShapeType = {}))[r.Box = 1] = "Box";
r[r.Sphere = 2] = "Sphere";
r[r.Polygon = 4] = "Polygon";

var c = function () {
  function t(t, e) {
    this.radius = 0;
    this.height = 0;
    this.type = s.Box;
    this.point2Ds = [];
    this.size = {
      x: 0,
      y: 0,
      z: 0
    };
    this.center = {
      x: 0,
      y: 0,
      z: 0
    };
    this.aabb = [0, 0, 0, 0, 0, 0];
    this.type = e;
    this.center.x = t.x;
    this.center.y = t.y;
    this.center.z = t.z;
  }

  t.prototype.updateAABB = function (t, e, i) {
    if (void 0 === i) {
      i = !0;
    }

    var o = this.size;
    var n = this.center;
    var s = t.x;
    var r = t.y;
    var a = t.z;
    var l = n.x;
    var c = n.y;
    var u = n.z;
    var d = 0.5 * o.x;
    var p = 0.5 * o.y;
    var f = 0.5 * o.z;
    var h = this.aabb;

    if (i) {
      d = Math.abs(d * s);
      p = Math.abs(p * r);
      f = Math.abs(f * a);
      h[0] = l * s - d;
      h[1] = c * r - p;
      h[2] = u * a - f;
      h[3] = l * s + d;
      h[4] = c * r + p;
      h[5] = u * a + f;
    } else {
      {
        var m = e.m;
        var y = m[0] * s;
        var g = m[1] * s;

        var _ = m[2] * s;

        var k = m[3] * r;
        var v = m[4] * r;
        var b = m[5] * r;
        var w = m[6] * a;
        var A = m[7] * a;
        var S = m[8] * a;
        var C = y * l + k * c + w * u;
        var I = g * l + v * c + A * u;
        var P = _ * l + b * c + S * u;
        var R = Math.abs(y) * d + Math.abs(k) * p + Math.abs(w) * f;
        var B = Math.abs(g) * d + Math.abs(v) * p + Math.abs(A) * f;
        var x = Math.abs(_) * d + Math.abs(b) * p + Math.abs(S) * f;
        h[0] = C - R;
        h[1] = I - B;
        h[2] = P - x;
        h[3] = C + R;
        h[4] = I + B;
        h[5] = P + x;
      }
    }

    return h;
  };

  return t;
}();

exports.cShape = c;

var u = function (t) {
  function e(e, i) {
    var o = t.call(this, e, s.Box) || this;
    o.size.x = i.x;
    o.size.y = i.y;
    o.size.z = i.z;
    return o;
  }

  __extends(e, t);

  return e;
}(c);

exports.cBox = u;

var d = function (t) {
  function e(e, i) {
    var o = t.call(this, e, s.Sphere) || this;
    o.radius = i;
    o.size.x = 2 * i;
    o.size.y = 2 * i;
    o.size.z = 2 * i;
    return o;
  }

  __extends(e, t);

  return e;
}(c);

exports.cSphere = d;

var p = function (t) {
  function e(e, i) {
    var o = t.call(this, e, s.Polygon) || this;
    o.point2Ds = i;
    var n = i[0].x;
    var r = i[0].y;
    var a = n;
    var l = r;
    var c = i.length;

    for (var u = 1; u < c; u++) {
      var d = i[u].x;
      var p = i[u].y;
      n >= d ? n = d : a <= d && (a = d);
      r >= p ? r = p : l <= p && (l = p);
    }

    o.size.x = a - n;
    o.size.y = l - r;
    o.size.z = 0;
    return o;
  }

  __extends(e, t);

  return e;
}(c);

exports.cPolygon = p;
var f = new cc.Vec3();
var h = new cc.Vec2();
exports.ShapeSupport = [];

exports.ShapeSupport[s.Box | s.Box] = function (t, e) {
  return !(!t.isIdentity || !e.isIdentity) || $aILib.obbIntersect(t.getCenter(), t.getHalfSize(), t.getRotMat3(), e.getCenter(), e.getHalfSize(), e.getRotMat3());
};

exports.ShapeSupport[s.Box | s.Sphere] = function (t, e) {
  return t.isIdentity ? (l.subtract(f, e.getCenter(), t.getCenter()), $aILib.sphereAABBDistance(f, e.getRaidus(), t.getHalfSize())) : $aILib.sphereOBBDistance(e.getCenter(), e.getRaidus(), t.getCenter(), t.getRotation(), t.getHalfSize());
};

exports.ShapeSupport[s.Sphere | s.Sphere] = function (t, e) {
  var i = t.getCenter();
  var o = e.getCenter();
  l.subtract(f, i, o);
  var n = f.lengthSqr();
  var s = t.getRaidus() + e.getRaidus();
  return n <= s * s;
};

exports.ShapeSupport[s.Box | s.Polygon] = function (t, e) {
  return $aILib["default"].polygonPolygon(t.getPoints(), e.getPoints());
};

exports.ShapeSupport[s.Sphere | s.Polygon] = function (t, e) {
  var i = t.getCenter();
  var o = t.getRaidus();
  h.x = i.x;
  h.y = i.y;
  return $aILib["default"].polygonCircle(e.getPoints(), h, o);
};

exports.ShapeSupport[s.Polygon | s.Polygon] = function (t, e) {
  return $aILib["default"].polygonPolygon(t.getPoints(), e.getPoints());
};

cc._RF.pop();