"use strict";
cc._RF.push(module, '878b3Adpi1DqIZ/khSKuMzA', 'SBullet_7');
// game_script/scripts/SBullet_7.js

"use strict";

var o;

var $object = require("./Object");

var $globalParam = require("./GlobalParam");

var $gameContext = require("./GameContext");

var $enemyStatus = require("./EnemyStatus");

var $baseBullet = require("./BaseBullet");

var d = cc._decorator;
var p = d.ccclass;
var f = (d.property, cc.Vec3.ZERO);

var h = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.s_bullet_7;
    e.leftTime = 0.8;
    e.currAngle = 180;
    e.attackAtks = new Set();
    e.isStart = !1;
    e.startTime = 0.5;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.attackAtks.clear();
    this.atk = $gameContext["default"].ins.skillInfo.skinAtk;
    this.startTime = 0.5;
    this.isStart = !1;
    this.leftTime = 0.8;
    this.currAngle = 180;
    this.speed = this.currAngle / this.leftTime;
    this.setAngle(this.currAngle);
    f.y = this.getPosition().y;
  };

  e.prototype.onTrigger = function (t, e) {
    var i = t.object;

    if (this.isStart && (e === $object.Trigger.enter || e === $object.Trigger.stay)) {
      if (this.attackAtks.has(i)) {
        return;
      }

      this.attackAtks.add(i);
      i.sufferAtk({
        atk: this.atk,
        skillSpecialitys: this.skillSpecialitys
      });
      var o = i.getPosition();
      f.x = o.x;
      f.y = o.y - this.getPosition().y;
      var n = {
        type: $enemyStatus.EnemyDebuffType.BACK,
        timeLeft: -1,
        value: $gameContext["default"].ins.skillInfo.skinParam[3],
        dir: cc.v2(f.y, -f.x).normalizeSelf()
      };
      i.sufferDebuff(n);
    }
  };

  e.prototype.updateFrame = function (t) {
    if (!this.isStart) {
      this.startTime -= t;

      if (this.startTime <= 0) {
        this.isStart = !0;
      }
    }

    if (!$globalParam["default"].isGamePuase && this.isStart) {
      this.leftTime -= t;

      if (this.leftTime <= 0) {
        this.removeSelf();
      }

      if (!(this.currAngle <= 0)) {
        this.currAngle -= this.speed * t;
        this.setAngle(this.currAngle);
      }
    }
  };

  return __decorate([p], e);
}($baseBullet["default"]);

exports["default"] = h;

cc._RF.pop();