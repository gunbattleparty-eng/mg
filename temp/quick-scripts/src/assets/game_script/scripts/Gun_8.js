"use strict";
cc._RF.push(module, 'a3bcfNJRKhAz7yXEdmznRbu', 'Gun_8');
// game_script/scripts/Gun_8.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $seedUtil = require("./SeedUtil");

var $configContext = require("./ConfigContext");

var $globalParam = require("./GlobalParam");

var $localEventName = require("./LocalEventName");

var $roleContext = require("./RoleContext");

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var $gameGemInfo = require("./GameGemInfo");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseGun = require("./BaseGun");

var k = cc.Vec3.ZERO;

var v = function (t) {
  function e(e) {
    var i = t.call(this, e) || this;
    i.militX = 0;
    i.skillId = 135;
    i.skinAtkLeftCd = 0;
    i.skinAtkCurrCount = 0;
    i.skillParam = $gameContext["default"].ins.skillInfo.getSkillById(i.skillId);
    return i;
  }

  __extends(e, t);

  e.prototype.updateF = function (e) {
    t.prototype.updateF.call(this, e);

    if (!(this.isAttacking || $globalParam["default"].isGamePuase)) {
      if (7 === $roleContext["default"].ins.currSkinInfo.skin && this.skinAtkCurrCount >= $gameContext["default"].ins.skillInfo.skinAtkTargetCount) {
        this.skinAtkLeftCd -= e;

        if (this.skinAtkLeftCd <= 0) {
          this.sendSkinBullet();
        }
      }

      this.timeLeft -= e;
      this.timeLeft <= 0 ? (this.isAttacking = !0, this.timeLeft = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL], $eventManager["default"].send($localEventName["default"].RENDER_SKILL_CD_INFO, this.skillId, 0, -1), this.starGun() || (this.isAttacking = !1, this.timeLeft = 0)) : $eventManager["default"].send($localEventName["default"].RENDER_SKILL_CD_INFO, this.skillId, this.timeLeft / this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL], -1);
    }
  };

  e.prototype.sendSkinBullet = function () {
    $eventManager["default"].send($localEventName["default"].SEND_SKILL_ANIM);
    var t = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.s_bullet_7);

    if (!t) {
      var e = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.SBullet_7);
      t = $resUtil.ResUtil.instantiate(e, $gameContext["default"].ins.lowBulletLayer.parent).getComponent($baseBullet["default"]);
    }

    k.x = 0;
    k.y = -550;
    t.setPosition(k);
    t.initButtle(null, this.skillId);
    t.insert($gameContext["default"].ins.lowBulletLayer);
    this.skinAtkLeftCd = $gameContext["default"].ins.skillInfo.skinAtkCd;
    this.skinAtkCurrCount = 0;
    return !0;
  };

  e.prototype.starGun = function () {
    var t = this;
    var e = this.skillParam.iceBoomCount;

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.AddSkill) && $seedUtil["default"].probability(100 * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.AddSkill))) {
      e *= 2;
    }

    var i = $gameContext["default"].ins.getRandomEnemys(this.pointNode, e, this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL]);

    if (i.length <= 0) {
      return !1;
    }

    var o = function o(e) {
      n.schedulesOnce(function () {
        t.sendButtle(i[e].getPosition().clone());
      }, 0.1 * e);
    };

    var n = this;

    for (var s = 0; s < i.length; s++) {
      o(s);
    }

    this.isAttacking = !1;
    return !0;
  };

  e.prototype.sendButtle = function (t) {
    var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.ice_boom);

    if (!e) {
      var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_19);
      (e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.lowBulletLayer.parent).getComponent($baseBullet["default"])).skillSpecialitys = $configContext["default"].instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
    }

    this.militX = 360 - e.node.width / 2 * this.skillParam.iceBoomAtkRange;

    if (t.x <= -this.militX) {
      t.x = -this.militX;
    }

    if (t.x >= this.militX) {
      t.x = this.militX;
    }

    e.setPosition(t);
    e.initButtle(null, this.skillId);
    e.insert($gameContext["default"].ins.lowBulletLayer);
    e.setAnimation("");
    this.skinAtkCurrCount++;
  };

  return e;
}($baseGun["default"]);

exports["default"] = v;

cc._RF.pop();