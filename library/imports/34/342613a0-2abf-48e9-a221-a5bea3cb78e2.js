"use strict";
cc._RF.push(module, '34261OgKr9I6aIhpb6jy3ji', 'Bullet_8');
// game_script/scripts/Bullet_8.js

"use strict";

var o;

var $object = require("./Object");

var $gameSkillInfo = require("./GameSkillInfo");

var $enemyStatus = require("./EnemyStatus");

var $baseBullet = require("./BaseBullet");

var u = cc._decorator;
var d = u.ccclass;
var p = (u.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.freeze_split;
    e.targetEnemy = null;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.atk = this.skillParam.freezeSplitAtk[$gameSkillInfo.Skill4Param.FINAL];
    this.speed = this.skillParam.freezeSpeed[$gameSkillInfo.Skill4Param.FINAL];
    this.velocity.set(e).multiplyScalar(this.speed);
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && e == $object.Trigger.enter) {
      if (cc.isValid(this.targetEnemy) && t.object === this.targetEnemy) {
        return;
      }

      this.isUse = !0;
      var i = t.object;
      i.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });

      if (this.skillParam.freezeSplitTime > 0) {
        var o = {
          type: $enemyStatus.EnemyDebuffType.FREEZE,
          timeLeft: this.skillParam.freezeSplitTime,
          value: 0
        };
        i.sufferDebuff(o);
      }

      this.removeSelf();
    }
  };

  return __decorate([d], e);
}($baseBullet["default"]));
exports["default"] = p;

cc._RF.pop();