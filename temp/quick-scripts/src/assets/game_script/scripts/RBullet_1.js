"use strict";
cc._RF.push(module, '9b45cburwdLVKZZyQzguehy', 'RBullet_1');
// game_script/scripts/RBullet_1.js

"use strict";

var o;

var $object = require("./Object");

var $motionTrail = require("./MotionTrail");

var $componentProxy = require("./ComponentProxy");

var $seedUtil = require("./SeedUtil");

var $util = require("./Util");

var $gameContext = require("./GameContext");

var $baseBullet = require("./BaseBullet");

var f = cc._decorator;
var h = f.ccclass;
var m = (f.property, cc.Vec3.ZERO);

var y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.r_bullet_1;
    e.angleSpeed = 100;
    e.randomeAngle = 30;
    e.targetEnemy = null;
    e.targetPos = null;
    e.tail = null;
    return e;
  }

  __extends(e, t);

  e.prototype.initRBullet = function (e, i, o) {
    this.atk = i;
    this.speed = o;
    this.targetPos = e.getPosition().clone();
    this.targetEnemy = e;
    this.targetEnemy.addDieCallback(this.dieEnemy, this);
    var n = this.targetEnemy.getPosition().subtract(this.getPosition()).normalize();
    var s = $util["default"].dirConverAngle(n);
    var r = $seedUtil["default"].randomFrom(this.randomeAngle - 10, this.randomeAngle + 10);
    s += r = $seedUtil["default"].probability(50) ? r : -r;
    n = $util["default"].angleConverDir(s);
    t.prototype.initButtle.call(this, n, null);

    if (n) {
      this.velocity.set(n).multiplyScalar(this.speed);
    }

    if (!this.tail) {
      this.tail = this.node.getComponent($motionTrail["default"]);
    }
  };

  e.prototype.dieEnemy = function (t) {
    if (t === this.targetEnemy) {
      this.targetPos = t.getPosition().clone();
      this.targetEnemy = null;
    }
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse) {
      if (e == $object.Trigger.enter) {
        t.object.sufferAtk({
          skillSpecialitys: [],
          atk: this.atk
        });
        this.targetEnemy = null;
        this.removeSelf();
      }
    }
  };

  e.prototype.updateFrame = function (t) {
    if (!this.tail.isActive) {
      this.tail.isActive = !0;
    }

    if (this.targetEnemy) {
      if (this.targetEnemy.isDie() || null == this.targetEnemy.node.parent) {
        this.targetEnemy = null;
        m.x = this.targetPos.x;
        m.y = this.targetPos.y;
        return void this.trace(m, t);
      }

      this.targetPos.set(this.targetEnemy.getPosition());
      this.trace(this.targetEnemy.getPosition(), t);
    } else {
      m.x = this.targetPos.x;
      m.y = this.targetPos.y;
      this.trace(m, t);
    }
  };

  e.prototype.trace = function (t, e) {
    var i = this.lerpAngleRes(t.subtract(this.getPosition()), e);
    this.setAngle(i);
    this.velocity.set($util["default"].angleConverDir(i).normalizeSelf()).mulSelf(this.speed);
    this.move(e);
  };

  e.prototype.move = function (t) {
    var e = this.getPosition();
    var i = this.velocity;
    m.x = e.x + i.x * t;
    m.y = e.y + i.y * t;
    m.z = e.z + i.z * t;
    this.setPosition(m);
    return this.checkBoundary() ? !this.targetEnemy && m.subtract(this.targetPos).magSqr() <= 900 ? this.removeSelf() : void 0 : this.removeSelf();
  };

  e.prototype.removeSelf = function (t) {
    if (void 0 === t) {
      t = !0;
    }

    this.tail.isActive = !1;
    $componentProxy["default"].Ins.removeObj(this);

    if (t) {
      $gameContext["default"].ins.putButtlePool(this);
    }
  };

  e.prototype.lerpAngleRes = function (t, e) {
    var i = ($util["default"].dirConverAngle(t) + 360) % 360;
    var o = (this.node.angle + 360) % 360;
    return Math.abs(o - i) <= this.angleSpeed * e ? i : ((o - i + 360) % 360 < (i - o + 360) % 360 ? o -= this.angleSpeed * e : o += this.angleSpeed * e, o);
  };

  return __decorate([h], e);
}($baseBullet["default"]);

exports["default"] = y;

cc._RF.pop();