"use strict";
cc._RF.push(module, 'f1f1bPq2uhF34bxpok2+LAa', 'Bullet_7');
// game_script/scripts/Bullet_7.js

"use strict";

var o;

var $object = require("./Object");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var c = cc._decorator;
var u = c.ccclass;
var d = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.thermobaric_split;
    e.targetEnemy = null;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.speed = this.skillParam.thermobaricSpeed[$gameSkillInfo.Skill4Param.FINAL];
    this.velocity.set(e).multiplyScalar(this.speed);
    this.atk = this.skillParam.thermobaricSplitAtk[$gameSkillInfo.Skill4Param.FINAL];
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && e == $object.Trigger.enter) {
      if (cc.isValid(this.targetEnemy) && t.object === this.targetEnemy) {
        return;
      }

      this.isUse = !0;
      t.object.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });
      this.removeSelf();
    }
  };

  return __decorate([u], e);
}($baseBullet["default"]));
exports["default"] = d;

cc._RF.pop();