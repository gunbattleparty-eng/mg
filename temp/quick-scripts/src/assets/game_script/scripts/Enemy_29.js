"use strict";
cc._RF.push(module, '2a35fznYuZNZ5XODMl0SVuV', 'Enemy_29');
// game_script/scripts/Enemy_29.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var $enemy_5 = require("./Enemy_5");

var $enemyStatus = require("./EnemyStatus");

var u = cc._decorator;
var d = u.ccclass;
var p = u.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.e_bullet_5;
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.clear();
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.ice, this.config.value[0]);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.fire, this.config.value[1]);
    this.atkRange = this.config.value[2];
    this.atkSpeed = this.config.value[3];
  };

  e.prototype.sufferDebuff = function (e) {
    if (e.type !== $enemyStatus.EnemyDebuffType.BURN && e.type !== $enemyStatus.EnemyDebuffType.PARALYSIS && e.type !== $enemyStatus.EnemyDebuffType.BACK && e.type !== $enemyStatus.EnemyDebuffType.FREEZE) {
      t.prototype.sufferDebuff.call(this, e);
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

  e.prototype.attackAnim = function () {
    var t = $gameContext["default"].ins.getButtlePool(this.buttleType);

    if (!t) {
      t = cc.instantiate(this.bulletPrefab).getComponent($baseBullet["default"]);
    }

    var e = $gameContext["default"].ins.enemyBulletLayer.convertToNodeSpaceAR(this.atkPoint.convertToWorldSpaceAR(cc.Vec3.ZERO));
    t.setPosition(e);
    t.initEButtle(this.statusManager.atk, this.atkSpeed);
    t.insert($gameContext["default"].ins.enemyBulletLayer);
  };

  __decorate([p({
    type: cc.Enum($baseBullet.BulletType)
  })], e.prototype, "buttleType", void 0);

  return __decorate([d], e);
}($enemy_5["default"]);

exports["default"] = f;

cc._RF.pop();