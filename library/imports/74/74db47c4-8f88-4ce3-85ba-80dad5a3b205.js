"use strict";
cc._RF.push(module, '74db4fEj4hM44W6gNrVo7IF', 'Enemy_11');
// game_script/scripts/Enemy_11.js

"use strict";

var o;

var $eventManager = require("./EventManager");

var $localEventName = require("./LocalEventName");

var $baseBullet = require("./BaseBullet");

var $baseEnemy = require("./BaseEnemy");

var $enemyStatus = require("./EnemyStatus");

var d = cc._decorator;
var p = d.ccclass;
var f = (d.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.minHp = 0;
    e.addTime = 0;
    e.addUnitHp = 0;
    e.isAdded = !1;
    e.addHping = !1;
    e.dtAddTime = 1;
    e.dtAddLeft = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.fire, this.config.value[3]);
    this.minHp = this.statusManager.initHp * this.config.value[0];
    this.addTime = this.config.value[1];
    this.addUnitHp = Math.ceil(this.minHp / this.addTime);
    this.dtAddLeft = this.dtAddTime;
    this.addHping = !1;
    this.isAdded = !1;
  };

  e.prototype.sufferDebuff = function (e) {
    if (e.type === $enemyStatus.EnemyDebuffType.BURN) {
      e.timeLeft *= this.config.value[4] + 1;
      e.value *= this.config.value[3] + 1;
    }

    t.prototype.sufferDebuff.call(this, e);
  };

  e.prototype.updateFrame = function (e) {
    if (!this.statusManager.isDie) {
      t.prototype.updateFrame.call(this, e);

      if (this.addHping && this.hasDebuff($enemyStatus.EnemyDebuffType.FORBID_RECOVER)) {
        this.addHping = !1;
        return void (this.hasDebuff($enemyStatus.EnemyDebuffType.RECOVER) && this.removeDebuff($enemyStatus.EnemyDebuffType.RECOVER));
      }

      if (!this.isAdded && this.statusManager.hp <= this.minHp) {
        this.isAdded = !0;
        this.addHping = !0;
        this.sufferDebuff({
          type: $enemyStatus.EnemyDebuffType.RECOVER,
          timeLeft: this.addTime,
          value: -1
        });
      }

      if (this.addHping) {
        this.dtAddLeft -= e;

        if (this.dtAddLeft <= 0) {
          this.dtAddLeft = this.dtAddTime;
          this.addTime -= 1;
          this.statusManager.hp += this.addUnitHp;
          this.statusManager.hp = Math.min(this.statusManager.hp, this.statusManager.initHp);
          $eventManager["default"].send($localEventName["default"].HURT_ANIM, this.getAnimPos(), this.addUnitHp, 2, 1);

          if (this.addTime <= 0) {
            this.addHping = !1;
          }
        }
      }
    }
  };

  return __decorate([p], e);
}($baseEnemy["default"]));
exports["default"] = f;

cc._RF.pop();