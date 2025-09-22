"use strict";
cc._RF.push(module, '77a572A6x5LvpBtdvUjSqty', 'Enemy_7');
// game_script/scripts/Enemy_7.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $baseEnemy = require("./BaseEnemy");

var $enemyStatus = require("./EnemyStatus");

var c = cc._decorator;
var u = c.ccclass;
var d = (c.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.fire, this.config.value[1]);
  };

  e.prototype.sufferDebuff = function (t) {
    if (!this.statusManager.isDie || t.type !== $enemyStatus.EnemyDebuffType.BACK) {
      if (t.type === $enemyStatus.EnemyDebuffType.BACK) {
        t.timeLeft = t.timeLeft * (1 - this.config.value[0]);

        if (t.timeLeft <= 0.016) {
          return;
        }
      } else {
        if (t.type === $enemyStatus.EnemyDebuffType.BURN) {
          t.timeLeft *= 2;
        }
      }

      this.statusManager.addDebuff(t);
    }
  };

  return __decorate([u], e);
}($baseEnemy["default"]));
exports["default"] = d;

cc._RF.pop();