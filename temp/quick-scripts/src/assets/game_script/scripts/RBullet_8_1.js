"use strict";
cc._RF.push(module, '8baf9DkUmtAf4dE3uLN4Vlk', 'RBullet_8_1');
// game_script/scripts/RBullet_8_1.js

"use strict";

var o;

var $object = require("./Object");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var u = cc._decorator;
var d = u.ccclass;
var p = (u.property, new cc.Vec3(), function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.r_bullet_8_1;
    e.penetrationCount = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    this.speed = $gameContext["default"].ins.skillInfo.robotParam[6];
    t.prototype.initButtle.call(this, e, null);
    this.atk = Math.ceil($gameContext["default"].ins.skillInfo.robotParam[0] * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]);
    this.penetrationCount = $gameContext["default"].ins.skillInfo.robotParam[7];

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }
  };

  e.prototype.onTrigger = function (t, e) {
    if (!(this.penetrationCount <= 0)) {
      var i = t.object;
      return e === $object.Trigger.enter && (this.penetrationCount--, i.sufferAtk({
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      }), this.penetrationCount <= 0) ? this.removeSelf() : void 0;
    }
  };

  return __decorate([d], e);
}($baseBullet["default"]));
exports["default"] = p;

cc._RF.pop();