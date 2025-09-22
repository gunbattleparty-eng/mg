"use strict";
cc._RF.push(module, 'ad6fcWUxApD7L7oOwJdMWS2', 'Bullet_4');
// game_script/scripts/Bullet_4.js

"use strict";

var o;

var $object = require("./Object");

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $seedUtil = require("./SeedUtil");

var $configContext = require("./ConfigContext");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $enemyStatus = require("./EnemyStatus");

var $baseBullet = require("./BaseBullet");

var y = cc._decorator;
var g = y.ccclass;

var _ = (y.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.thermobaric_bullet;
    e.id = 23;
    e.anim = null;
    e.currButtlePenetrateLayer = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.currButtlePenetrateLayer = 0;
    this.atk = this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL];
    this.speed = this.skillParam.thermobaricSpeed[$gameSkillInfo.Skill4Param.FINAL];
    this.velocity.set(e).multiplyScalar(this.speed);

    if (!this.anim) {
      this.anim = this.node.children[0].getComponent(cc.Animation);
    }

    this.setAnimation();
  };

  e.prototype.setAnimation = function (t) {
    if (void 0 === t) {
      t = "bullet_4";
    }

    if (this.skillParam.isAllPenetrateBoom) {
      t = "bullet_4_2";
    }

    this.anim.play(t);
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && e == $object.Trigger.enter) {
      var i = t.object;
      i.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });

      if (0 === this.currButtlePenetrateLayer) {
        if (this.skillParam.thermobaricBoomRange > 0) {
          this.createButtleBoom(i);
        }

        if (this.skillParam.thermobaricSplitCount > 0) {
          this.createSplitButtle(i);
        }
      }

      if (!(29 !== i.config.id && 30 !== i.config.id && 36 !== i.config.id)) {
        this.currButtlePenetrateLayer = this.skillParam.thermobaricPenetrateLayer;
      }

      this.currButtlePenetrateLayer++;

      if (this.skillParam.thermobaricPenetrateLayer <= this.currButtlePenetrateLayer) {
        this.isUse = !0;
        return this.removeSelf();
      }

      if (0 === this.currButtlePenetrateLayer) {
        for (var o = 0; o < this.skillParam.thermobaricStunParam.length; o++) {
          var n = this.skillParam.thermobaricStunParam;

          if ($seedUtil["default"].probability(100 * n[o][0])) {
            var s = {
              type: $enemyStatus.EnemyDebuffType.STUN,
              timeLeft: n[o][1],
              value: 0
            };
            i.sufferDebuff(s);
          }
        }
      } else {
        if (this.skillParam.isAllPenetrateBoom && this.currButtlePenetrateLayer > 1 && this.skillParam.thermobaricBoomRange > 0) {
          this.createButtleBoom(i);
        }
      }
    }
  };

  e.prototype.createSplitButtle = function (t) {
    var e = $gameContext["default"].ins.getNearbyN2(t.node, this.skillParam.thermobaricSplitCount);

    for (var i = 0; i < e.length; i++) {
      var o = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.thermobaric_split);

      if (!o) {
        var n = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_7);
        (o = $resUtil.ResUtil.instantiate(n).getComponent($baseBullet["default"])).skillSpecialitys = $configContext["default"].instance.basicSkillConfigMap.get(23).skill_tpye;
      }

      o.setPosition(this.node.position.clone());
      o.targetEnemy = t;
      o.initButtle(e[i].node.position.sub(this.node.position).normalize(), this.skillId);
      o.insert($gameContext["default"].ins.buttleLayer);
    }
  };

  e.prototype.createButtleBoom = function (t) {
    var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.thermobaric_boom);

    if (!e) {
      var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_5);
      e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.lowBulletLayer.parent).getComponent($baseBullet["default"]);
    }

    e.setPosition(cc.v3(t.node.position.x, this.node.position.y));
    e.initButtle(null, this.skillId);
    e.insert($gameContext["default"].ins.lowBulletLayer);
    e.setAnimation(null);
  };

  return __decorate([g], e);
}($baseBullet["default"]));

exports["default"] = _;

cc._RF.pop();