"use strict";
cc._RF.push(module, '74cb2EoGVJC3LZssaBm8vzn', 'Bullet_32');
// game_script/scripts/Bullet_32.js

"use strict";

var o;

var $object = require("./Object");

var $remoteAudio = require("./RemoteAudio");

var $gameSkillInfo = require("./GameSkillInfo");

var $enemyStatus = require("./EnemyStatus");

var $baseBullet = require("./BaseBullet");

var d = cc._decorator;
var p = d.ccclass;
var f = (d.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.thunder_chain_bomb;
    e.skillSpecialitys = [$baseBullet.BulletSpeciality.boom, $baseBullet.BulletSpeciality.thunder];
    e.attackEnemy = new Set();
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    var o = this.skillParam.bombRange;
    this.setScale(cc.v3(o, o));
    this.atk = this.skillParam.bombAtk[$gameSkillInfo.Skill4Param.FINAL];
    this.attackEnemy.clear();
    this.setAnimation(null);
  };

  e.prototype.setAnimation = function () {
    var t = this;
    var e = this.node.children[0].getComponent(cc.Animation);
    $remoteAudio["default"].instance.playEffectMusicRestrict("boom", 0.3);
    e.play("bullet_32");
    e.once(cc.Animation.EventType.FINISHED, function () {
      t.removeSelf();
    }, this);
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && (e == $object.Trigger.enter || e == $object.Trigger.stay)) {
      var i = t.object;

      if (this.attackEnemy.has(i)) {
        return;
      }

      this.attackEnemy.add(i);

      if (i.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      })) {
        return;
      }

      if (this.skillParam.bombParalysisTime > 0) {
        i.sufferDebuff({
          type: $enemyStatus.EnemyDebuffType.PARALYSIS,
          timeLeft: this.skillParam.bombParalysisTime,
          value: 0
        });
      }
    }
  };

  e.prototype.updateFrame = function () {};

  return __decorate([p], e);
}($baseBullet["default"]));
exports["default"] = f;

cc._RF.pop();