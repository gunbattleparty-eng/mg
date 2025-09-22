"use strict";
cc._RF.push(module, '1390al9O6ROH4aHB+AwgGW2', 'Bullet_22');
// game_script/scripts/Bullet_22.js

"use strict";

var o;

var $object = require("./Object");

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $seedUtil = require("./SeedUtil");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $enemyStatus = require("./EnemyStatus");

var $baseBullet = require("./BaseBullet");

var m = cc._decorator;
var y = m.ccclass;
var g = (m.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.wind_blade;
    e.anim = null;
    e.currButtlePenetrateLayer = 0;
    e.animName = "bullet_22";
    e.isLoadedSkin = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    var o = this;
    t.prototype.initButtle.call(this, e, i);
    this.speed = this.skillParam.windBladeSpeed;
    this.velocity.set(e).multiplyScalar(this.speed);
    this.setScale(cc.v3(this.skillParam.windBladeRange, this.skillParam.windBladeRange));

    if (!this.anim) {
      this.anim = this.node.children[0].getComponent(cc.Animation);
    }

    this.setAnimation();
    this.currButtlePenetrateLayer = 0;
    this.atk = this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL];

    if (!this.isLoadedSkin && this.skillParam.windBladeMulti > 0) {
      this.isLoadedSkin = !0;
      $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Game, ["/anim/bullet_22_1"], cc.AnimationClip, null, function (t, e) {
        var i = e[0];

        if (sp && cc.isValid(i)) {
          o.animName = "bullet_22_1";
          $resUtil.ResUtil.assignWith(i, $gameContext["default"].ins.buttleLayer.parent);
          o.anim.addClip(i);
          o.anim.play(o.animName);
        }
      });
    }
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && e == $object.Trigger.enter) {
      var i = t.object;
      i.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });

      if (this.skillParam.windBladeBack[$gameSkillInfo.Skill4Param.FINAL] > 0) {
        var o = this.skillParam.windBladeBack[$gameSkillInfo.Skill4Param.FINAL];

        if (this.skillParam.windBladeFreezeBackAdd > 0 && i.hasDebuff($enemyStatus.EnemyDebuffType.FREEZE)) {
          o = Math.ceil(o * (1 + this.skillParam.windBladeFreezeBackAdd));
        }

        var n = {
          id: this.skillId,
          type: $enemyStatus.EnemyDebuffType.BACK,
          timeLeft: -1,
          value: o
        };
        i.sufferDebuff(n);
      }

      for (var s = 0; s < this.skillParam.windBladeFreezeParam.length; s++) {
        var a = this.skillParam.windBladeFreezeParam[s];

        if ($seedUtil["default"].probability(100 * a[1])) {
          i.sufferDebuff({
            type: $enemyStatus.EnemyDebuffType.FREEZE,
            timeLeft: a[0],
            value: 0
          });
        }
      }

      if (!(29 !== i.config.id && 30 !== i.config.id && 36 !== i.config.id)) {
        this.currButtlePenetrateLayer = this.skillParam.windBladePenetrateLayer;
      }

      this.currButtlePenetrateLayer++;

      if (this.skillParam.windBladePenetrateLayer <= this.currButtlePenetrateLayer) {
        if (this.skillParam.windBladeWaveAtk[$gameSkillInfo.Skill4Param.FINAL] > 0) {
          this.createBoom();
        }

        this.removeSelf();
      }
    }
  };

  e.prototype.createBoom = function () {
    var t = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.wind_blade_boom);

    if (!t) {
      var e = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_23);
      t = $resUtil.ResUtil.instantiate(e, $gameContext["default"].ins.lowBulletLayer.parent).getComponent($baseBullet["default"]);
    }

    t.setPosition(this.getPosition());
    t.initButtle(null, this.skillId);
    t.insert($gameContext["default"].ins.lowBulletLayer);
    t.setAnimation(null);
  };

  e.prototype.checkBoundary = function () {
    return !(this.node.x <= -560 || this.node.x >= 560 || this.node.y >= cc.winSize.height / 2 + 100 || this.node.y <= -cc.winSize.height / 2 - 200);
  };

  e.prototype.setAnimation = function (t) {
    if (void 0 === t) {
      t = "bullet_22";
    }

    if (this.isLoadedSkin) {
      t = "bullet_22_1";
    }

    this.anim.play(t);
  };

  return __decorate([y], e);
}($baseBullet["default"]));
exports["default"] = g;

cc._RF.pop();