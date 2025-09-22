"use strict";
cc._RF.push(module, 'e200arLWgRK2aEVd3mb65un', 'AILib');
// game_script/scripts/AILib.js

"use strict";

exports.obbIntersect = exports.sphereOBBDistance = exports.sphereAABBDistance = void 0;
var o = cc.Vec3;
var n = cc.Quat;
var s = {
  x: 0,
  y: 0,
  z: 0
};
var r = {
  x: 0,
  y: 0,
  z: 0
};
var a = {
  x: 0,
  y: 0,
  z: 0
};
var l = {
  x: 0,
  y: 0,
  z: 0,
  w: 1
};

function c(t, e, i) {
  r.x = Math.max(-i.x, Math.min(t.x, i.x));
  r.y = Math.max(-i.y, Math.min(t.y, i.y));
  r.z = Math.max(-i.z, Math.min(t.z, i.z));
  o.subtract(r, r, t);
  return o.dot(r, r) <= e * e;
}

function u(t, e, i, o) {
  var n = (o.x - i.x) * (t.y - i.y) - (o.y - i.y) * (t.x - i.x);
  var s = (e.x - t.x) * (t.y - i.y) - (e.y - t.y) * (t.x - i.x);
  var r = (o.y - i.y) * (e.x - t.x) - (o.x - i.x) * (e.y - t.y);

  if (0 !== r) {
    var a = n / r;
    var l = s / r;

    if (a >= 0 && a <= 1 && l >= 0 && l <= 1) {
      return !0;
    }
  }

  return !1;
}

exports.sphereAABBDistance = c;

exports.sphereOBBDistance = function (t, e, i, r, u) {
  o.subtract(a, t, i);
  n.conjugate(l, r);
  o.transformQuat(s, a, l);
  return c(s, e, u);
};

exports.obbIntersect = function (t, e, i, o, n, s) {
  var r;
  var a = e.x;
  var l = e.y;
  var c = e.z;
  var u = i.m;
  var d = u[0];
  var p = u[1];
  var f = u[2];
  var h = u[3];
  var m = u[4];
  var y = u[5];
  var g = u[6];
  var _ = u[7];
  var k = u[8];
  var v = n.x;
  var b = n.y;
  var w = n.z;
  var A = s.m;
  var S = A[0];
  var C = A[1];
  var I = A[2];
  var P = A[3];
  var R = A[4];
  var B = A[5];
  var x = A[6];
  var O = A[7];
  var L = A[8];
  var E = d * S + p * C + f * I;
  var M = d * P + p * R + f * B;
  var T = d * x + p * O + f * L;
  var D = h * S + m * C + y * I;
  var G = h * P + m * R + y * B;
  var N = h * x + m * O + y * L;
  var U = g * S + _ * C + k * I;
  var j = g * P + _ * R + k * B;
  var F = g * x + _ * O + k * L;
  var V = o.x - t.x;
  var H = o.y - t.y;
  var z = o.z - t.z;
  var W = V * d + H * p + z * f;
  var q = V * h + H * m + z * y;
  var K = V * g + H * _ + z * k;
  var Q = Number.EPSILON;
  var Z = (E >= 0 ? E : -E) + Q;
  var X = (M >= 0 ? M : -M) + Q;
  var Y = (T >= 0 ? T : -T) + Q;
  var J = (D >= 0 ? D : -D) + Q;
  var $ = (G >= 0 ? G : -G) + Q;
  var tt = (N >= 0 ? N : -N) + Q;
  var et = (U >= 0 ? U : -U) + Q;
  var it = (j >= 0 ? j : -j) + Q;
  var ot = (F >= 0 ? F : -F) + Q;
  return !((W >= 0 ? W : -W) > a + (v * Z + b * X + w * Y) || (q >= 0 ? q : -q) > l + (v * J + b * $ + w * tt) || (K >= 0 ? K : -K) > c + (v * et + b * it + w * ot) || ((r = W * E + q * D + K * U) >= 0 ? r : -r) > a * Z + l * J + c * et + v || ((r = W * M + q * G + K * j) >= 0 ? r : -r) > a * X + l * $ + c * it + b || ((r = W * T + q * N + K * F) >= 0 ? r : -r) > a * Y + l * tt + c * ot + w || ((r = K * D - q * U) >= 0 ? r : -r) > l * et + c * J + b * Y + w * X || ((r = K * G - q * j) >= 0 ? r : -r) > l * it + c * $ + v * Y + w * Z || ((r = K * N - q * F) >= 0 ? r : -r) > l * ot + c * tt + v * X + b * Z || ((r = W * U - K * E) >= 0 ? r : -r) > a * et + c * Z + b * tt + w * $ || ((r = W * j - K * M) >= 0 ? r : -r) > a * it + c * X + v * tt + w * J || ((r = W * F - K * T) >= 0 ? r : -r) > a * ot + c * Y + v * $ + b * J || ((r = q * E - W * D) >= 0 ? r : -r) > a * J + l * Z + b * ot + w * it || ((r = q * M - W * G) >= 0 ? r : -r) > a * $ + l * X + v * ot + w * et || ((r = q * T - W * N) >= 0 ? r : -r) > a * tt + l * Y + v * it + b * et);
};

var d = new cc.Vec2();
var p = new cc.Vec2();
var f = new cc.Vec2();
var h = new cc.Vec2();

function m(t, e, i) {
  var o = d;
  var n = p;
  var s = f;
  var r = h;
  o.x = i.x;
  o.y = i.y;
  n.x = i.x;
  n.y = i.yMax;
  s.x = i.xMax;
  s.y = i.yMax;
  r.x = i.xMax;
  r.y = i.y;
  return !!(u(t, e, o, n) || u(t, e, n, s) || u(t, e, s, r) || u(t, e, r, o));
}

function y(t, e, i) {
  var o = i.length;

  for (var n = 0; n < o; ++n) {
    if (u(t, e, i[n], i[(n + 1) % o])) {
      return !0;
    }
  }

  return !1;
}

function g(t, e) {
  var i = t.x;
  var o = t.y;
  var n = t.x + t.width;
  var s = t.y + t.height;
  var r = e.x;
  var a = e.y;
  var l = e.x + e.width;
  var c = e.y + e.height;
  return i <= l && n >= r && o <= c && s >= a;
}

function _(t, e) {
  var i = d;
  var o = p;
  var n = f;
  var s = h;
  i.x = t.x;
  i.y = t.y;
  o.x = t.x;
  o.y = t.yMax;
  n.x = t.xMax;
  n.y = t.yMax;
  s.x = t.xMax;
  s.y = t.y;

  if (y(i, o, e)) {
    return !0;
  }

  if (y(o, n, e)) {
    return !0;
  }

  if (y(n, s, e)) {
    return !0;
  }

  if (y(s, i, e)) {
    return !0;
  }

  var r = 0;

  for (var a = e.length; r < a; ++r) {
    if (t.contains(e[r])) {
      return !0;
    }
  }

  return !!(A(i, e) || A(o, e) || A(n, e) || A(s, e));
}

function k(t, e) {
  var i;
  var o;
  i = 0;

  for (o = t.length; i < o; ++i) {
    if (y(t[i], t[(i + 1) % o], e)) {
      return !0;
    }
  }

  i = 0;

  for (o = e.length; i < o; ++i) {
    if (A(e[i], t)) {
      return !0;
    }
  }

  i = 0;

  for (o = t.length; i < o; ++i) {
    if (A(t[i], e)) {
      return !0;
    }
  }

  return !1;
}

function v(t, e, i, o) {
  return cc.Vec2.distance(t, i) < e + o;
}

function b(t, e, i) {
  var o = e;

  if (A(o, t)) {
    return !0;
  }

  var n = 0;

  for (var s = t.length; n < s; n++) {
    if (S(o, 0 === n ? t[t.length - 1] : t[n - 1], t[n], !0) < i) {
      return !0;
    }
  }

  return !1;
}

function w(t, e, i) {
  var o = e.x;
  var n = e.y;
  var s = t.x;
  var r = t.y;
  var a = t.width;
  var l = t.height;
  var c = o;
  var u = n;
  o < s ? c = s : o > s + a && (c = s + a);
  n < r ? u = r : n > r + l && (u = r + l);
  var d = o - c;
  var p = n - u;
  return Math.sqrt(d * d + p * p) <= i;
}

function A(t, e) {
  var i = !1;
  var o = t.x;
  var n = t.y;
  var s = e.length;
  var r = 0;

  for (var a = s - 1; r < s; a = r++) {
    var l = e[r].x;
    var c = e[r].y;
    var u = e[a].x;
    var d = e[a].y;

    if (c > n != d > n && o < (u - l) * (n - c) / (d - c) + l) {
      i = !i;
    }
  }

  return i;
}

function S(t, e, i, o) {
  var n;
  var s = i.x - e.x;
  var r = i.y - e.y;
  var a = s * s + r * r;
  var l = ((t.x - e.x) * s + (t.y - e.y) * r) / a;
  o ? a ? l < 0 ? n = e : l > 1 ? n = i : ((n = d).x = e.x + l * s, n.y = e.y + l * r) : n = e : ((n = d).x = e.x + l * s, n.y = e.y + l * r);
  s = t.x - n.x;
  r = t.y - n.y;
  return Math.sqrt(s * s + r * r);
}

var C = function () {
  function t() {}

  t.lineLine = u;
  t.lineRect = m;
  t.linePolygon = y;
  t.rectRect = g;
  t.rectPolygon = _;
  t.rectCircle = w;
  t.polygonPolygon = k;
  t.circleCircle = v;
  t.polygonCircle = b;
  t.pointInPolygon = A;
  t.pointLineDistance = S;
  return t;
}();

exports["default"] = C;

cc._RF.pop();