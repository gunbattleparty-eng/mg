"use strict";
cc._RF.push(module, '49bc7QTi5xMyLl5YwBauSnO', 'EBullet_31');
// game_script/scripts/EBullet_31.js

"use strict";

var o;

var $object = require("./Object");

var $eventManager = require("./EventManager");

var $remoteAudio = require("./RemoteAudio");

var $globalParam = require("./GlobalParam");

var $localEventName = require("./LocalEventName");

var $enemyStatus = require("./EnemyStatus");

var $baseBullet = require("./BaseBullet");

var f = cc._decorator;
var h = f.ccclass;
var m = (f.property, new cc.Vec3(0, -1), function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.e_bullet_31;
    e.value = [];
    e.atkedEnemy = new Set();
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (t) {
    var e = this.value[2];
    this.setScale(cc.v3(e, e));
    this.atkedEnemy.clear();

    if (t) {
      this.velocity.set(t).multiplyScalar(this.speed);
    }
  };

  e.prototype.setAnimation = function () {
    var t = this;
    var e = this.node.children[0].getComponent(cc.Animation);
    $remoteAudio["default"].instance.playEffectMusicRestrict("boom", 0.3);
    e.play("bullet_2");
    e.once(cc.Animation.EventType.FINISHED, function () {
      if (Math.abs(t.getPosition().y - $globalParam["default"].doorY) <= 100 * t.value[2]) {
        $eventManager["default"].send($localEventName["default"].ATK_DOOR, t.value[1]);
      }

      t.removeSelf();
    }, this);
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && (e == $object.Trigger.enter || e == $object.Trigger.stay)) {
      var i = t.object;

      if (this.atkedEnemy.has(i)) {
        return;
      }

      this.atkedEnemy.add(i);
      var o = {
        type: $enemyStatus.EnemyDebuffType.BACK,
        timeLeft: -1,
        value: this.value[3],
        dir: cc.v2(i.getPosition().sub(this.getPosition()).normalize())
      };
      i.sufferDebuff(o);
    }
  };

  e.prototype.updateFrame = function () {};

  return __decorate([h], e);
}($baseBullet["default"]));
exports["default"] = m;

cc._RF.pop();