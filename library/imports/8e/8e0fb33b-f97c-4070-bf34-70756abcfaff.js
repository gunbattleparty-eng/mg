"use strict";
cc._RF.push(module, '8e0fbM7+XxAcL80cHVqvPr/', 'Enemy_42');
// game_script/scripts/Enemy_42.js

"use strict";

var o;

var $configContext = require("./ConfigContext");

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

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
    e.flyTime = 0.5;
    e.timeLeft = 0;
    e.scaleRatio = 0.5;
    e.isFly = !1;
    e.immunity = [$enemyStatus.EnemyDebuffType.FREEZE, $enemyStatus.EnemyDebuffType.PARALYSIS, $enemyStatus.EnemyDebuffType.SLOW,, $enemyStatus.EnemyDebuffType.STUN];
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.wind, this.config.value[0]);

    if (this.healthBar) {
      this.healthBar.init(this.statusManager.hp, e.hp_num);
    }

    this.timeLeft = 0;
    this.isFly = !0;
    var n = null;
    42 === e.id ? n = $configContext["default"].instance.getEnemyConfig(38) : 43 === e.id && (n = $configContext["default"].instance.getEnemyConfig(39));
    var s = n.value[1] / this.flyTime;
    this.speed = s;
  };

  e.prototype.addAdsorb = function (e) {
    if (!this.isFly) {
      t.prototype.addAdsorb.call(this, e);
    }
  };

  e.prototype.removeAdsorb = function (e) {
    if (!this.isFly) {
      t.prototype.removeAdsorb.call(this, e);
    }
  };

  e.prototype.sufferDebuff = function (e) {
    if (!(this.isFly || this.immunity.includes(e.type))) {
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

  e.prototype.updateFrame = function (e) {
    if (!this.statusManager.isDie) {
      if (this.isFly) {
        this.timeLeft += e;

        if (this.timeLeft >= this.flyTime) {
          this.timeLeft = this.flyTime;
          this.speed = this.statusManager.initSpeed;
          this.isFly = !1;
        }

        this.skin.node.scale = this.easeSine(this.timeLeft, 1, this.scaleRatio, this.flyTime);
      }

      t.prototype.updateFrame.call(this, e);
    }
  };

  e.prototype.speedRatioRight = function () {
    if (this.isFly) {
      if (1 !== this.currRatio && 0 !== this.skin.timeScale) {
        this.skin.timeScale = 1;
      }
    } else {
      if ($gameContext["default"].ins.gameRatio !== this.currRatio) {
        this.currRatio = $gameContext["default"].ins.gameRatio;
        var t = this.speed / this.statusManager.initSpeed * this.currRatio;

        if (0 !== this.skin.timeScale) {
          this.skin.timeScale = t;
        }
      }
    }
  };

  e.prototype.easeSine = function (t, e, i, o) {
    return i * Math.sin(t / o * Math.PI) + e;
  };

  __decorate([h($healthBar["default"])], e.prototype, "healthBar", void 0);

  return __decorate([f], e);
}($baseEnemy["default"]);

exports["default"] = m;

cc._RF.pop();