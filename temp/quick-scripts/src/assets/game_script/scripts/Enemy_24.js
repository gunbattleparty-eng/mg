"use strict";
cc._RF.push(module, '9463328pOxMC6ztzccoMVl5', 'Enemy_24');
// game_script/scripts/Enemy_24.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $enemy_23 = require("./Enemy_23");

var l = cc._decorator;
var c = l.ccclass;
var u = (l.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.initSpeed = 0;
    e.speedTime = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.sufferAtk = function (e) {
    return !!t.prototype.sufferAtk.call(this, e) || (e.skillSpecialitys.includes($baseBullet.BulletSpeciality.thunder) && (this.speedTime <= 0 && (this.initSpeed = this.statusManager.initSpeed, this.statusManager.initSpeed = Math.floor(this.statusManager.initSpeed * (1 + this.config.value[3])), this.statusManager.tryRecoverSpeed()), this.speedTime = 3), !1);
  };

  e.prototype.move = function (e) {
    if (this.speedTime > 0) {
      this.speedTime -= e;

      if (this.speedTime <= 0) {
        this.closeSpeed();
      }
    }

    t.prototype.move.call(this, e);
  };

  e.prototype.closeSpeed = function () {
    this.statusManager.initSpeed = this.initSpeed;
    this.statusManager.tryRecoverSpeed();
  };

  return __decorate([c], e);
}($enemy_23["default"]));
exports["default"] = u;

cc._RF.pop();