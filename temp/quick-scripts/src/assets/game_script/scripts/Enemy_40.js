"use strict";
cc._RF.push(module, '57c47c611JDxLNEKvq6ZB+q', 'Enemy_40');
// game_script/scripts/Enemy_40.js

"use strict";

var o;

var $eventManager = require("./EventManager");

var $globalParam = require("./GlobalParam");

var $localEventName = require("./LocalEventName");

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var $baseEnemy = require("./BaseEnemy");

var $healthBar = require("./HealthBar");

var f = cc._decorator;
var h = f.ccclass;
var m = f.property;

var y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.healthBar = null;
    e.createEnemyId = 44;
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.clear();
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.physics, this.config.value[0]);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.laser, this.config.value[1]);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.fire, this.config.value[2]);

    if (this.healthBar) {
      this.healthBar.init(this.statusManager.hp, e.hp_num);
    }
  };

  e.prototype.sufferAttack = function (e, i) {
    if (this.statusManager.isDie) {
      return !1;
    }

    var o = t.prototype.sufferAttack.call(this, e, i);

    if (this.healthBar) {
      this.healthBar.render(this.statusManager.hp);
    }

    return o;
  };

  e.prototype.dieAnim = function () {
    return Math.abs(this.getPosition().y - $globalParam["default"].doorY) >= this.config.value[1] ? (this.skin.node.opacity = 1, this.createEnemy(), !1) : t.prototype.dieAnim.call(this);
  };

  e.prototype.createEnemy = function () {
    var t = this;
    $gameContext["default"].ins.removeEnemy(this);
    this.skin.off(dragonBones.EventObject.COMPLETE);
    this.skin.timeScale = $gameContext["default"].ins.gameRatio;
    this.skin.playAnimation("boom", 1);
    this.unscheduleAllCallbacks();
    this.skin.once(dragonBones.EventObject.COMPLETE, function () {
      $eventManager["default"].send($localEventName["default"].CREATE_ENEMY, t.createEnemyId, cc.v3(t.getPosition().x, t.getPosition().y), t.Avoid_injury, t.lot);

      if (!(2 !== t.config.monster_type && 3 !== t.config.monster_type)) {
        t.bossChooseSKill();
      }

      t.removeSelf();
    }, this);
  };

  __decorate([m($healthBar["default"])], e.prototype, "healthBar", void 0);

  __decorate([m], e.prototype, "createEnemyId", void 0);

  return __decorate([h], e);
}($baseEnemy["default"]);

exports["default"] = y;

cc._RF.pop();