"use strict";
cc._RF.push(module, 'e2c21ZV8PJOlIixfSCJFMNr', 'Bullet_30');
// game_script/scripts/Bullet_30.js

"use strict";

var o;

var $object = require("./Object");

var $shape = require("./Shape");

var $countDownUtil = require("./CountDownUtil");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var p = cc._decorator;
var f = p.ccclass;
var h = (p.property, cc.Vec3.ZERO);

var m = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.drat_release;
    e._type = $shape.ShapeType.Sphere;
    e.isStop = !1;
    e.countTime = 0;
    e.time = 0;
    e.leftTime = 0;
    e.r = 70;
    e.countSpeed = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.isStop = !1;
    this.speed = 0;
    this.countSpeed = 1.6 * this.skillParam.speed[$gameSkillInfo.Skill4Param.FINAL];
    var o = this.skillParam.releaseSize;
    this.setScale(cc.v3(o, o));
    this.r = 70 * o;
    this.countTime = this.skillParam.releaseDistance / this.countSpeed;
    this.time = 0;
    this.leftTime = this.skillParam.releaseTime;
    this.atk = this.skillParam.releaseAtk[$gameSkillInfo.Skill4Param.FINAL];
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && e == $object.Trigger.stay) {
      var i = t.object;

      if ($countDownUtil.CountDownUtil.time - i.getLastAtkTime(9) <= this.skillParam.releaseInterval / $gameContext["default"].ins.gameRatio) {
        return;
      }

      i.setLastAtkTime(9, $countDownUtil.CountDownUtil.time);
      i.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });
    }
  };

  e.prototype.updateFrame = function (t) {
    if (!this.isUse) {
      this.leftTime -= t;

      if (this.leftTime <= 0) {
        this.isUse = !0;
        this.removeSelf();
      }

      if (!this.isStop) {
        this.time += t;

        if (this.time >= this.countTime) {
          this.isStop = !0;
        }

        this.move(t);
      }
    }
  };

  e.prototype.move = function (t) {
    this.speed = this.easeCos(this.time, 0, this.countSpeed, this.countTime);
    var e = this.getPosition();
    var i = this.velocity;
    h.x = e.x + i.x * t * this.speed;
    h.y = e.y + i.y * t * this.speed;
    h.z = e.z + i.z * t * this.speed;
    h.x < -360 + this.r || h.x > 360 - this.r ? (h.x = e.x, this.isStop = !0) : (h.y < -450 + this.r || h.y > cc.winSize.height / 2 - this.r) && (h.y = e.y, this.isStop = !0);
    this.setPosition(h);
  };

  e.prototype.easeCos = function (t, e, i, o) {
    return i * Math.cos(t / o * Math.PI / 2) + e;
  };

  return __decorate([f], e);
}($baseBullet["default"]);

exports["default"] = m;

cc._RF.pop();