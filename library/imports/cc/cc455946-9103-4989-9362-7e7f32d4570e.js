"use strict";
cc._RF.push(module, 'cc455lGkQNJiZNifn8y1FcO', 'Bullet_15');
// game_script/scripts/Bullet_15.js

"use strict";

var o;

var $object = require("./Object");

var $countDownUtil = require("./CountDownUtil");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $enemyStatus = require("./EnemyStatus");

var $baseBullet = require("./BaseBullet");

var p = cc._decorator;
var f = p.ccclass;
var h = (p.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.thunder_matrix;
    e.leftTime = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.atk = this.skillParam.thunderMatrixAtk[$gameSkillInfo.Skill4Param.FINAL];
    this.leftTime = this.skillParam.thunderMatrixTime;
    var o = this.skillParam.thunderMatrixRange;
    this.setScale(cc.v3(o, o));
  };

  e.prototype.onTrigger = function (t, e) {
    var i = t.object;

    if (e === $object.Trigger.stay) {
      if ($countDownUtil.CountDownUtil.time - i.getLastAtkTime(2) <= this.skillParam.thunderMatrixAtkInterval / $gameContext["default"].ins.gameRatio) {
        return;
      }

      i.setLastAtkTime(2, $countDownUtil.CountDownUtil.time);
      i.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });
      var o = {
        type: $enemyStatus.EnemyDebuffType.SLOW,
        timeLeft: this.skillParam.thunderMatrixSpeedSlowTime,
        value: this.skillParam.thunderMatrixSpeedSlow
      };
      i.sufferDebuff(o);
    }
  };

  e.prototype.updateFrame = function (t) {
    this.leftTime -= t;

    if (this.leftTime <= 0) {
      this.removeSelf();
    }
  };

  return __decorate([f], e);
}($baseBullet["default"]));
exports["default"] = h;

cc._RF.pop();