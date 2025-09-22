"use strict";
cc._RF.push(module, '02b87eft0xLs4FiJsPvxxr9', 'Bullet_20');
// game_script/scripts/Bullet_20.js

"use strict";

var o;

var $object = require("./Object");

var $remoteAudio = require("./RemoteAudio");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var u = cc._decorator;
var d = u.ccclass;
var p = (u.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.ice_boom_boom;
    e.skillSpecialitys = [$baseBullet.BulletSpeciality.boom, $baseBullet.BulletSpeciality.ice];
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    var o = this.skillParam.iceBoomBoomRange;
    this.setScale(cc.v3(o, o));
    this.atk = this.skillParam.iceBoomBoomAtk[$gameSkillInfo.Skill4Param.FINAL];
  };

  e.prototype.setAnimation = function () {
    var t = this;
    $remoteAudio["default"].instance.playEffectMusicRestrict("boom", 0.3);
    var e = this.node.children[0].getComponent(cc.Animation);
    e.play("bullet_20");
    e.once(cc.Animation.EventType.FINISHED, function () {
      t.removeSelf();
    }, this);
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse) {
      if (e == $object.Trigger.enter) {
        t.object.sufferAtk({
          id: this.skillId,
          skillSpecialitys: this.skillSpecialitys,
          atk: this.atk
        });
      }
    }
  };

  e.prototype.updateFrame = function () {};

  return __decorate([d], e);
}($baseBullet["default"]));
exports["default"] = p;

cc._RF.pop();