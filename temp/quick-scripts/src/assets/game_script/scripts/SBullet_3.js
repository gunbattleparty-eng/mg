"use strict";
cc._RF.push(module, '33d6eNYquFHYqwumgZlybMx', 'SBullet_3');
// game_script/scripts/SBullet_3.js

"use strict";

var o;

var $object = require("./Object");

var $gameContext = require("./GameContext");

var $baseBullet = require("./BaseBullet");

var c = cc._decorator;
var u = c.ccclass;
var d = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.s_bullet_3;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    t.prototype.initButtle.call(this, e, null);
    this.atk = $gameContext["default"].ins.skillInfo.skinAtk;
    this.speed = $gameContext["default"].ins.skillInfo.skinParam[4];

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse) {
      if (e == $object.Trigger.enter) {
        t.object.sufferAtk({
          skillSpecialitys: this.skillSpecialitys,
          atk: this.atk
        });
      }
    }
  };

  return __decorate([u], e);
}($baseBullet["default"]));
exports["default"] = d;

cc._RF.pop();