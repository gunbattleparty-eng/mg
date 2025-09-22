"use strict";
cc._RF.push(module, '586d40Qja5GgZwxWdEbgYQ6', 'RGun_1');
// game_script/scripts/RGun_1.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $configContext = require("./ConfigContext");

var $globalParam = require("./GlobalParam");

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var f = function (t) {
  function e(e, i) {
    var o = t.call(this, e) || this;
    o.atk = 0;
    o.cd = 0;
    o.range = 0;
    o.bulletSpeed = 0;
    o.attackInterval = 0;
    o.bulletCount = 0;
    o.config = null;
    o.skin = null;
    o.tempPos = cc.Vec3.ZERO;
    o.lockEnemy = null;
    o.config = $configContext["default"].instance.robotConfigs.find(function (t) {
      return 2 === t.id;
    });
    o.cd = o.config.Petsskin_skill_value[1];
    o.range = o.config.Petsskin_skill_value[2];
    o.bulletSpeed = o.config.Petsskin_skill_value[3];
    o.attackInterval = o.config.Petsskin_skill_value[4];
    o.bulletCount = Math.round(o.config.Petsskin_skill_value[5] / o.attackInterval);
    o.timeLeft = o.cd;
    o.skin = i;
    o.tempPos.x = o.pointNode.position.x;
    o.tempPos.y = o.pointNode.position.y + 150;
    return o;
  }

  __extends(e, t);

  e.prototype.updateF = function (e) {
    t.prototype.updateF.call(this, e);

    if (!(this.isAttacking || $globalParam["default"].isGamePuase)) {
      this.timeLeft -= e;

      if (this.timeLeft <= 0) {
        this.startGun();
      }
    }
  };

  e.prototype.startGun = function () {
    var t = this;
    this.lockEnemy = $gameContext["default"].ins.getRangeRankEnemy(this.pointNode, this.range);

    if (!this.lockEnemy) {
      this.timeLeft = 1;
      return !1;
    }

    if (!this.skillParam) {
      this.skillParam = $gameContext["default"].ins.skillInfo.getSkillById(1);
    }

    this.lockEnemy.addDieCallback(this.dieEnemy, this);
    this.atk = Math.ceil(this.config.Petsskin_skill_value[0] * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]);
    this.isAttacking = !0;
    var e = 0;
    this.skin.playAnimation("hit", 0);

    for (var i = 0; i < this.bulletCount; i++) {
      this.schedulesOnce(function () {
        if (t.lockEnemy && !t.lockEnemy.isDie()) {
          t.createButtle(t.lockEnemy);
        }

        if (++e >= t.bulletCount) {
          t.isAttacking = !1;
          t.timeLeft = t.cd;
          t.skin.playAnimation("stand", 0);

          if (t.lockEnemy) {
            t.lockEnemy.removeDieCallback(t);
            t.lockEnemy = null;
          }
        }
      }, this.attackInterval * i);
    }
  };

  e.prototype.dieEnemy = function (t) {
    if (this.lockEnemy === t) {
      this.lockEnemy = null;
      this.lockEnemy = $gameContext["default"].ins.getRandomEnemy(t);
    }
  };

  e.prototype.createButtle = function (t) {
    var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.r_bullet_1);

    if (!e) {
      var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_1);
      e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.buttleLayer.parent).getComponent($baseBullet["default"]);
    }

    e.setPosition(this.tempPos);
    e.initRBullet(t, this.atk, this.bulletSpeed);
    e.insert($gameContext["default"].ins.buttleLayer);
  };

  return e;
}(require("./BaseGun")["default"]);

exports["default"] = f;

cc._RF.pop();