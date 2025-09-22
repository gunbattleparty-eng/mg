"use strict";
cc._RF.push(module, '98a514DcwNMP4N3h/Q3it7z', 'SBullet_5_1');
// game_script/scripts/SBullet_5_1.js

"use strict";

var o;

var $object = require("./Object");

var $gameContext = require("./GameContext");

var $baseBullet = require("./BaseBullet");

var c = cc._decorator;
var u = c.ccclass;
var d = c.property;
var p = new cc.Vec3();

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.s_bullet_5_1;
    e.boomAnim = null;
    e.leftTime = 0;
    e.targetY = 0;
    e.attackedEnemy = new Set();
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    this.speed = $gameContext["default"].ins.skillInfo.skinParam[3];
    t.prototype.initButtle.call(this, e, null);

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }

    this.setAngle(0);
    this.setScale(cc.v3($gameContext["default"].ins.skillInfo.skinParam[4], $gameContext["default"].ins.skillInfo.skinParam[4]));
    this.leftTime = Math.abs(this.getPosition().y - this.targetY) / this.speed;
    this.atk = $gameContext["default"].ins.skillInfo.skinAtk;
    this.node.children[0].active = !0;
    this.node.children[1].active = !1;
  };

  e.prototype.onTrigger = function (t, e) {
    if (e == $object.Trigger.stay) {
      var i = t.object;

      if (!this.attackedEnemy.has(i)) {
        this.attackedEnemy.add(i);
        i.sufferAtk({
          skillSpecialitys: this.skillSpecialitys,
          atk: this.atk
        });
      }
    }
  };

  e.prototype.updateFrame = function (t) {
    if (!(this.leftTime <= 0)) {
      this.leftTime -= t;

      if (this.leftTime <= 0) {
        this.node.children[0].active = !1;
        this.node.children[1].active = !0;
        return this.playAnim();
      }

      var e = this.getPosition();
      var i = this.velocity;
      p.x = e.x + i.x * t;
      p.y = e.y + i.y * t;
      p.z = e.z + i.z * t;
      this.setPosition(p);
    }
  };

  e.prototype.playAnim = function () {
    var t = this;
    this.trigger = !0;
    this.boomAnim.once(cc.Animation.EventType.FINISHED, function () {
      t.trigger = !1;
      t.attackedEnemy.clear();
      t.removeSelf();
    }, this);
    this.boomAnim.play().speed = $gameContext["default"].ins.gameRatio;
  };

  __decorate([d(cc.Animation)], e.prototype, "boomAnim", void 0);

  return __decorate([u], e);
}($baseBullet["default"]);

exports["default"] = f;

cc._RF.pop();