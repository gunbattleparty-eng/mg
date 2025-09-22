"use strict";
cc._RF.push(module, '757b8ujSCFOZJeLAYSa5ZNn', 'Maths');
// game_script/scripts/Maths.js

"use strict";

exports.RVOMath = exports.Vector2 = exports.Line = void 0;

exports.Line = function () {};

var o = function () {
  function t(t, e) {
    if (void 0 === t) {
      t = 0;
    }

    if (void 0 === e) {
      e = 0;
    }

    this.x = t;
    this.y = e;
  }

  t.multiply = function (t, e) {
    return t.x * e.x + t.y * e.y;
  };

  t.multiply2 = function (e, i) {
    return new t(i.x * e, i.y * e);
  };

  t.division = function (e, i) {
    if (0 == i) {
      i = 1;
    }

    return new t(e.x / i, e.y / i);
  };

  t.subtract = function (e, i) {
    return new t(e.x - i.x, e.y - i.y);
  };

  t.addition = function (e, i) {
    return new t(e.x + i.x, e.y + i.y);
  };

  return t;
}();

exports.Vector2 = o;

var n = function () {
  function t() {}

  t.abs = function (t) {
    return this.sqrt(this.absSq(t));
  };

  t.absSq = function (t) {
    return o.multiply(t, t);
  };

  t.normalize = function (t) {
    return o.division(t, this.abs(t));
  };

  t.det = function (t, e) {
    return t.x * e.y - t.y * e.x;
  };

  t.distSqPointLineSegment = function (t, e, i) {
    var n = o.multiply(o.subtract(i, t), o.subtract(e, t)) / this.absSq(o.subtract(e, t));
    return n < 0 ? this.absSq(o.subtract(i, t)) : n > 1 ? this.absSq(o.subtract(i, e)) : this.absSq(o.subtract(i, o.addition(t, o.multiply2(n, o.subtract(e, t)))));
  };

  t.fabs = function (t) {
    return Math.abs(t);
  };

  t.leftOf = function (t, e, i) {
    return this.det(o.subtract(t, i), o.subtract(e, t));
  };

  t.sqr = function (t) {
    return t * t;
  };

  t.sqrt = function (t) {
    return Math.sqrt(t);
  };

  t.transfromFloat = function (t) {
    return Math.floor(10 * t) / 10;
  };

  t.RVO_EPSILON = 1e-5;
  t.RVO_POSITIVEINFINITY = 1e13;
  return t;
}();

exports.RVOMath = n;

cc._RF.pop();