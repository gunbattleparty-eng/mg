"use strict";
cc._RF.push(module, '4dfdcNkgK9GHrl3po+vYf6p', 'Bullet_26');
// game_script/scripts/Bullet_26.js

"use strict";

var o;

var $object = require("./Object");

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $countDownUtil = require("./CountDownUtil");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $enemyStatus = require("./EnemyStatus");

var $baseBullet = require("./BaseBullet");

var m = cc._decorator;
var y = m.ccclass;
var g = (m.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.oil_burn_area;
    e.leftTime = 0;
    e.attackEnemy = new Set();
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    var o = this.skillParam.oilBurnAreaRange[$gameSkillInfo.Skill4Param.FINAL];
    this.setScale(cc.v3(o, o));
    this.atk = this.skillParam.oilBurnAreaAtk[$gameSkillInfo.Skill4Param.FINAL];
    this.leftTime = this.skillParam.oilBurnAreaTime;
    this.node.children[0].children[0].active = 1 === this.skillParam.oilSkin;
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse) {
      if (e == $object.Trigger.enter || e == $object.Trigger.stay) {
        var i = t.object;

        if (!(!this.skillParam.oilNoRecover || this.attackEnemy.has(i) && i.hasDebuff($enemyStatus.EnemyDebuffType.FORBID_RECOVER))) {
          this.attackEnemy.add(i);
          i.sufferDebuff({
            type: $enemyStatus.EnemyDebuffType.FORBID_RECOVER,
            timeLeft: -1,
            value: 0
          });
        }

        if ($countDownUtil.CountDownUtil.time - i.getLastAtkTime(6) <= this.skillParam.oilBurnAreaInterval / $gameContext["default"].ins.gameRatio) {
          return;
        }

        i.setLastAtkTime(6, $countDownUtil.CountDownUtil.time);
        this.skillParam.oilLiftAtkAdd > 0 ? i.sufferAtk({
          id: this.skillId,
          skillSpecialitys: this.skillSpecialitys,
          atk: this.atk,
          bulletBuff: $baseBullet.BulletBuff.atk_life,
          value: this.skillParam.oilLiftAtkAdd
        }) : i.sufferAtk({
          id: this.skillId,
          skillSpecialitys: this.skillSpecialitys,
          atk: this.atk
        });

        if (this.skillParam.oilBurnAreaSlow < 0) {
          i.sufferDebuff({
            type: $enemyStatus.EnemyDebuffType.SLOW,
            timeLeft: this.skillParam.oilBurnAreaInterval + 0.1,
            value: this.skillParam.oilBurnAreaSlow
          });
        }
      } else {
        if (e == $object.Trigger.exit) {
          i = t.object;
          this.attackEnemy["delete"](i);
          i.removeDebuff($enemyStatus.EnemyDebuffType.FORBID_RECOVER);
        }
      }
    }
  };

  e.prototype.updateFrame = function (t) {
    if (!this.isUse) {
      this.leftTime -= t;

      if (this.leftTime <= 0) {
        this.isUse = !0;
        this.createBoom();
        this.attackEnemy.forEach(function (t) {
          t.removeDebuff($enemyStatus.EnemyDebuffType.FORBID_RECOVER);
        });
        this.attackEnemy.clear();
        this.removeSelf();
      }
    }
  };

  e.prototype.createBoom = function () {
    if (!(this.skillParam.oilBurnAreaBoomRange <= 0)) {
      var t = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.oil_burn_area_boom);

      if (!t) {
        var e = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_27);
        (t = $resUtil.ResUtil.instantiate(e, $gameContext["default"].ins.lowBulletLayer.parent).getComponent($baseBullet["default"])).skillSpecialitys = this.skillSpecialitys;
      }

      t.setPosition(this.getPosition());
      t.initButtle(null, this.skillId);
      t.insert($gameContext["default"].ins.lowBulletLayer);
      t.setAnimation(null);
    }
  };

  return __decorate([y], e);
}($baseBullet["default"]));
exports["default"] = g;

cc._RF.pop();