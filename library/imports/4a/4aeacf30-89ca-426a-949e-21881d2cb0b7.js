"use strict";
cc._RF.push(module, '4aeac8wicpCapSeIYgdLLC3', 'Gun_6');
// game_script/scripts/Gun_6.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $seedUtil = require("./SeedUtil");

var $util = require("./Util");

var $configContext = require("./ConfigContext");

var $globalParam = require("./GlobalParam");

var $localEventName = require("./LocalEventName");

var $roleContext = require("./RoleContext");

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var $gameGemInfo = require("./GameGemInfo");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseGun = require("./BaseGun");

var v = new cc.Vec3();

var b = function (t) {
  function e(e) {
    var i = t.call(this, e) || this;
    i.skinAtkLeftCd = 0;
    i.skinAtkCurrCount = 0;
    i.skillId = 100;
    i.skillParam = $gameContext["default"].ins.skillInfo.getSkillById(i.skillId);
    return i;
  }

  __extends(e, t);

  e.prototype.updateF = function (e) {
    t.prototype.updateF.call(this, e);

    if (!(this.isAttacking || $globalParam["default"].isGamePuase)) {
      if (6 === $roleContext["default"].ins.currSkinInfo.skin && this.skinAtkCurrCount >= $gameContext["default"].ins.skillInfo.skinAtkTargetCount) {
        this.skinAtkLeftCd -= e;

        if (this.skinAtkLeftCd <= 0) {
          this.sendSkinBullet();
        }
      }

      this.timeLeft -= e;
      this.timeLeft <= 0 ? (this.isAttacking = !0, this.timeLeft = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL], $eventManager["default"].send($localEventName["default"].RENDER_SKILL_CD_INFO, this.skillId, 0, -1), this.starGun() || (this.isAttacking = !1, this.timeLeft = 0)) : $eventManager["default"].send($localEventName["default"].RENDER_SKILL_CD_INFO, this.skillId, this.timeLeft / this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL], -1);
    }
  };

  e.prototype.starGun = function () {
    var t = $gameContext["default"].ins.getRangeRankEnemy(this.pointNode, this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL]);
    return !!t && (this.sendButtle(t), this.isAttacking = !1, !0);
  };

  e.prototype.sendButtle = function (t) {
    var e = this.skillParam.pulseLaserCount;

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.AddSkill) && $seedUtil["default"].probability($gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.AddSkill) * this.skillId)) {
      e *= 2;
    }

    for (var i = 0; i < e; i++) {
      if (i >= 1 && !(t = $gameContext["default"].ins.getRangeRandomEnemyLayerByPos(this.pointNode.position))) {
        return;
      }

      var o = t.node.position.sub(this.pointNode.position).normalize();
      this.createButtle(o);
    }

    if (this.skillParam.pulseLaserSweepCount > 0) {
      this.createButtle(null, !0);
    }
  };

  e.prototype.createButtle = function (t, e) {
    if (void 0 === e) {
      e = !1;
    }

    var i = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.pulse_laser);

    if (!i) {
      var o = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_14);
      (i = $resUtil.ResUtil.instantiate(o, $gameContext["default"].ins.buttleLayer.parent).getComponent($baseBullet["default"])).skillSpecialitys = $configContext["default"].instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
    }

    i.setPosition(this.pointNode.position.clone());
    i.isSweep = e;
    i.initButtle(null, this.skillId);
    i.insert($gameContext["default"].ins.buttleLayer);
    i.setAnimation("");

    if (!e) {
      i.setAngle($util["default"].dirConverAngle(t));
      this.skinAtkCurrCount++;
    }
  };

  e.prototype.sendSkinBullet = function () {
    var t = $gameContext["default"].ins.getRandomEnemys(this.pointNode, 4, $gameContext["default"].ins.skillInfo.skinAtkRange);

    if (t.length <= 0) {
      this.skinAtkLeftCd = 2;
      return !1;
    }

    $eventManager["default"].send($localEventName["default"].SEND_SKILL_ANIM);
    var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.s_bullet_6);

    if (!e) {
      var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.SBullet_6);
      e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.lowBulletLayer.parent).getComponent($baseBullet["default"]);
    }

    v.x = 0;
    v.y = -280;
    e.setPosition(v.clone());
    e.initButtle(null, this.skillId);
    e.node.zIndex = 100;
    e.insert($gameContext["default"].ins.lowBulletLayer);
    this.sendSkinBullet2(t);
    this.skinAtkCurrCount = 0;
    this.skinAtkLeftCd = $gameContext["default"].ins.skillInfo.skinAtkCd;
  };

  e.prototype.sendSkinBullet2 = function (t) {
    var e = this;
    this.patching(t, 4);
    this.createSkillBullet(t);

    for (var i = 1; i <= $gameContext["default"].ins.skillInfo.skinParam[4] - 1; i++) {
      this.schedulesOnce(function () {
        var t = $gameContext["default"].ins.getRandomEnemys(e.pointNode, 4, $gameContext["default"].ins.skillInfo.skinAtkRange);

        if (t.length > 0) {
          e.patching(t, 4);
          e.createSkillBullet(t);
        }
      }, i * $gameContext["default"].ins.skillInfo.skinParam[3]);
    }
  };

  e.prototype.createSkillBullet = function (t) {
    for (var e = 0; e < t.length; e++) {
      var i = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.s_bullet_6_1);

      if (!i) {
        var o = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.SBullet_6_1);
        i = $resUtil.ResUtil.instantiate(o, $gameContext["default"].ins.lowBulletLayer.parent).getComponent($baseBullet["default"]);
      }

      var n = t[e].node.position.sub(this.pointNode.position).normalize();
      v.x = 154 * e - 231;
      v.y = -280;
      i.targetEnemy = t[e];
      i.setPosition(v);
      i.initButtle(n, this.skillId);
      i.node.zIndex = 99;
      i.insert($gameContext["default"].ins.lowBulletLayer);
    }
  };

  e.prototype.patching = function (t, e) {
    var i = t.length;

    for (var o = i; o < e; o++) {
      t[o] = t[o % i];
    }
  };

  return e;
}($baseGun["default"]);

exports["default"] = b;

cc._RF.pop();