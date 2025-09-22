"use strict";
cc._RF.push(module, 'fa77bx8EhVK2KF9GVDYZ1OX', 'SBullet_6');
// game_script/scripts/SBullet_6.js

"use strict";

var o;

var $gameContext = require("./GameContext");

var $baseBullet = require("./BaseBullet");

var l = cc._decorator;
var c = l.ccclass;
var u = (l.property, new cc.Vec3(), function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.s_bullet_6;
    e.leftTime = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    t.prototype.initButtle.call(this, e, null);

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }

    this.node.children[0].scaleY = 0;
    cc.tween(this.node.children[0]).to(0.3, {
      scaleY: 1
    }).start();
    this.leftTime = $gameContext["default"].ins.skillInfo.skinParam[5];
  };

  e.prototype.updateFrame = function (t) {
    var e = this;

    if (!(this.leftTime <= 0)) {
      this.leftTime -= t;

      if (this.leftTime <= 0) {
        cc.tween(this.node.children[0]).to(0.3, {
          scaleY: 0
        }).call(function () {
          e.removeSelf();
        }).start();
      }
    }
  };

  return __decorate([c], e);
}($baseBullet["default"]));
exports["default"] = u;

cc._RF.pop();