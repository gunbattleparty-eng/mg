"use strict";
cc._RF.push(module, '7222dqcdVRL7JLrAOwzQbRD', 'RBullet_5_3');
// game_script/scripts/RBullet_5_3.js

"use strict";

var o;

var $object = require("./Object");

var $countDownUtil = require("./CountDownUtil");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var d = cc._decorator;
var p = d.ccclass;
var f = (d.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.r_bullet_5_3;
    e.timeLeft = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    t.prototype.initButtle.call(this, e, null);
    this.atk = Math.ceil($gameContext["default"].ins.skillInfo.robotParam[6] * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]);
    var i = $gameContext["default"].ins.skillInfo.robotParam[9];
    this.setScale(cc.v3(i, i));
    this.timeLeft = $gameContext["default"].ins.skillInfo.robotParam[8];
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && e == $object.Trigger.stay) {
      var i = t.object;

      if ($countDownUtil.CountDownUtil.time - i.getLastAtkTime(5) <= $gameContext["default"].ins.skillInfo.robotParam[7] / $gameContext["default"].ins.gameRatio) {
        return;
      }

      i.setLastAtkTime(5, $countDownUtil.CountDownUtil.time);
      i.sufferAtk({
        skillSpecialitys: [],
        atk: this.atk
      });
    }
  };

  e.prototype.updateFrame = function (t) {
    if (!(this.timeLeft <= 0)) {
      this.timeLeft -= t;

      if (this.timeLeft <= 0) {
        this.removeSelf();
      }
    }
  };

  return __decorate([p], e);
}($baseBullet["default"]));
exports["default"] = f;

cc._RF.pop();