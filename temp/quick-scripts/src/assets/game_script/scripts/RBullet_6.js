"use strict";
cc._RF.push(module, 'dc3c4m+zT1D+I+mQxs7wacB', 'RBullet_6');
// game_script/scripts/RBullet_6.js

"use strict";

var o;

var $object = require("./Object");

var $remoteAudio = require("./RemoteAudio");

var $countDownUtil = require("./CountDownUtil");

var $util = require("./Util");

var $globalParam = require("./GlobalParam");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var h = cc._decorator;
var m = h.ccclass;
var y = (h.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.r_bullet_6;
    e.leftTime = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    t.prototype.initButtle.call(this, null, null);
    $remoteAudio["default"].instance.playLoopEffect("laser");
    this.leftTime = $gameContext["default"].ins.skillInfo.robotParam[4];
    this.atk = Math.ceil($gameContext["default"].ins.skillInfo.robotParam[0] * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]);
    this.setAngle($util["default"].dirConverAngle(e));
    t.prototype.initButtle.call(this, e, null);

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }
  };

  e.prototype.onTrigger = function (t, e) {
    var i = t.object;

    if (e === $object.Trigger.stay) {
      if ($countDownUtil.CountDownUtil.time - i.getLastAtkTime(5) <= $gameContext["default"].ins.skillInfo.robotParam[3] / $gameContext["default"].ins.gameRatio) {
        return;
      }

      i.setLastAtkTime(5, $countDownUtil.CountDownUtil.time);
      i.sufferAtk({
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });
    }
  };

  e.prototype.updateFrame = function (t) {
    if (!($globalParam["default"].isGamePuase || this.leftTime <= 0)) {
      this.leftTime -= t;

      if (this.leftTime <= 0) {
        $remoteAudio["default"].instance.stopLoopEffect("laser");
        this.removeSelf();
      }
    }
  };

  return __decorate([m], e);
}($baseBullet["default"]));
exports["default"] = y;

cc._RF.pop();