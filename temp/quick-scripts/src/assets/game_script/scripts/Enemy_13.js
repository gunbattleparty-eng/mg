"use strict";
cc._RF.push(module, '9104dbZUVVBlaW0RKs8MhCg', 'Enemy_13');
// game_script/scripts/Enemy_13.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $enemyStatus = require("./EnemyStatus");

var $enemy_5 = require("./Enemy_5");

var c = cc._decorator;
var u = c.ccclass;
var d = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.e_bullet_13;
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.specialityAtkAdd.clear();
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.thunder, this.config.value[0]);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.trajectory, this.config.value[2]);
    this.atkRange = this.config.value[3];
    this.atkSpeed = this.config.value[4];
  };

  e.prototype.sufferDebuff = function (e) {
    if (!(e.type === $enemyStatus.EnemyDebuffType.PARALYSIS && (e.timeLeft *= 1 + this.config.value[1], e.timeLeft <= 0.016))) {
      t.prototype.sufferDebuff.call(this, e);
    }
  };

  return __decorate([u], e);
}($enemy_5["default"]));
exports["default"] = d;

cc._RF.pop();