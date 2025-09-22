"use strict";
cc._RF.push(module, 'df75blqawRIWpxYc9pGF5gK', 'Enemy_21');
// game_script/scripts/Enemy_21.js

"use strict";

var o;

var $eventManager = require("./EventManager");

var $localEventName = require("./LocalEventName");

var $baseBullet = require("./BaseBullet");

var $baseEnemy = require("./BaseEnemy");

var $enemyStatus = require("./EnemyStatus");

var $healthBar = require("./HealthBar");

var p = cc._decorator;
var f = p.ccclass;
var h = p.property;

var m = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.healthBar = null;
    e.addUnitHp = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.fire, this.config.value[0]);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.ice, this.config.value[1]);

    if (this.healthBar) {
      this.healthBar.init(this.statusManager.hp, e.hp_num);
    }

    this.addUnitHp = Math.ceil(this.statusManager.initHp * this.config.value[2]);
  };

  e.prototype.sufferDebuff = function (e) {
    if (e.type !== $enemyStatus.EnemyDebuffType.BURN && e.type !== $enemyStatus.EnemyDebuffType.FREEZE && e.type !== $enemyStatus.EnemyDebuffType.ALL_ATK_ADD) {
      t.prototype.sufferDebuff.call(this, e);
    }
  };

  e.prototype.sufferAtk = function (e) {
    return !!t.prototype.sufferAtk.call(this, e) || !this.hasDebuff($enemyStatus.EnemyDebuffType.FORBID_RECOVER) && (e.skillSpecialitys.includes($baseBullet.BulletSpeciality.fire) && (this.statusManager.hp += this.addUnitHp, this.statusManager.hp = Math.min(this.statusManager.hp, this.statusManager.initHp), $eventManager["default"].send($localEventName["default"].HURT_ANIM, this.getAnimPos(), this.addUnitHp, 2, 1)), !1);
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

  __decorate([h($healthBar["default"])], e.prototype, "healthBar", void 0);

  return __decorate([f], e);
}($baseEnemy["default"]);

exports["default"] = m;

cc._RF.pop();