"use strict";
cc._RF.push(module, '35d5eaYM9dJwrqPskERJ5FA', 'Body');
// game_script/scripts/Body.js

"use strict";

exports.cBody = void 0;

var $object = require("./Object");

var n = cc.Mat3;
var s = (cc.Quat, cc.Vec3);

var r = function () {
  function t(t) {
    this.id = 0;
    this.mask = 0;
    this.group = 0;
    this.shape = null;
    this.object = null;
    this.priority = 0;
    this.isDirty = 15;
    this.lower = 0;
    this.upper = 0;
    this.aabb = [0, 0, 0, 0, 0, 0];
    this.isRemove = !1;
    this.isRetrieve = !1;
    this.isIdentity = !1;
    this.inCollider = !1;
    this.raidus = 0;
    this.points = [];
    this.center = new s();
    this.rotMat3 = new n();
    this.halfSize = new s();
    this.scale = new s(1, 1, 1);
    this.isAgent = !1;
    this.maxNeighbors = 0;
    this.neighborDist = 0;
    this.maxVelocity = 0;
    this.newVelocity = new s();
    this.prefVelocity = new s();
    this.orcaLines = [];
    this.object = t;
  }

  t.prototype.updateBound = function (t) {
    if (void 0 === t) {
      t = $object.Dirty.NON;
    }

    var e;
    var i = this.object;
    var n = t | i.isDirty;

    if (this.isAgent) {
      var s = i.velocity;
      this.newVelocity.x = s.x;
      this.newVelocity.y = s.y;
    }

    if (n > 0) {
      var r = !1;
      var a = this.shape;

      if (n & $object.Dirty.S) {
        r = !0;
        var l = this.getScale();
        this.scale.x = l.x >= 0 ? l.x : -l.x;
        this.scale.y = l.y >= 0 ? l.y : -l.y;
        this.scale.z = l.z >= 0 ? l.z : -l.z;
      }

      if (n & $object.Dirty.R) {
        this.isIdentity = 0 == (e = this.getRotation()).x && 0 == e.y && 0 == e.z && 1 == e.w;
        r = !0;
      }

      if (r) {
        a.updateAABB(this.getScale(), this.getRotMat3(), this.isIdentity);
      }

      var c = this.aabb;
      var u = a.aabb;
      var d = this.getPosition();
      c[0] = u[0] + d.x;
      c[1] = u[1] + d.y;
      c[2] = u[2] + d.z;
      c[3] = u[3] + d.x;
      c[4] = u[4] + d.y;
      c[5] = u[5] + d.z;
      this.isDirty = 15;
      i.isDirty = $object.Dirty.NON;
      return !0;
    }

    return !1;
  };

  t.prototype.clear = function () {
    this.shape = null;
    this.object = null;
    this.isRemove = !1;
    this.inCollider = !1;
    this.orcaLines.length = 0;
  };

  t.prototype.getScale = function () {
    return this.object.worldScale;
  };

  t.prototype.getPosition = function () {
    return this.object.worldPosition;
  };

  t.prototype.getRotation = function () {
    return this.object.worldRotation;
  };

  t.prototype.getRotMat3 = function () {
    return this.object.worldRotatioMat3;
  };

  t.prototype.getCenter = function () {
    if (1 & this.isDirty) {
      this.isDirty &= -2;
      var t = this.aabb;
      var e = this.center;
      e.x = 0.5 * (t[0] + t[3]);
      e.y = 0.5 * (t[1] + t[4]);
      e.z = 0.5 * (t[2] + t[5]);
    }

    return this.center;
  };

  t.prototype.getRaidus = function () {
    if (2 & this.isDirty) {
      this.isDirty &= -3;
      var t = this.scale;
      var e = this.shape.radius;
      this.raidus = Math.max(t.x, t.y, t.z) * e;
    }

    return this.raidus;
  };

  t.prototype.getHalfSize = function () {
    if (4 & this.isDirty) {
      this.isDirty &= -5;
      var t = this.scale;
      var e = this.shape.size;
      var i = this.halfSize;
      i.x = t.x * e.x * 0.5;
      i.y = t.y * e.y * 0.5;
      i.z = t.z * e.z * 0.5;
    }

    return this.halfSize;
  };

  t.prototype.getPoints = function () {
    if (8 & this.isDirty) {
      this.isDirty &= -9;
      var t = this.scale;
      var e = this.getRotMat3().m;
      var i = this.getCenter();
      var o = this.points;
      var n = this.shape.point2Ds;
      var s = n.length;

      for (var r = 0; r < s; r++) {
        var a = n[r].x * t.x;
        var l = n[r].y * t.y;

        if (null == o[r]) {
          o[r] = new cc.Vec2();
        }

        o[r].x = a * e[0] + l * e[3] + 0 * e[6] + i.x;
        o[r].y = a * e[1] + l * e[4] + 0 * e[7] + i.y;
      }

      o.length = s;
    }

    return this.points;
  };

  return t;
}();

exports.cBody = r;

cc._RF.pop();