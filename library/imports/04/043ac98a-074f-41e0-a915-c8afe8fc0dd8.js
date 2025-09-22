"use strict";
cc._RF.push(module, '043acmKB09B4KkVyK/o/A3Y', 'Gun_12');
// game_script/scripts/Gun_12.js

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

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var g = function (t) {
  function e(e) {
    var i = t.call(this, e) || this;
    i.skillId = 153;
    i.skillParam = $gameContext["default"].ins.skillInfo.getSkillById(i.skillId);
    return i;
  }

  __extends(e, t);

  e.prototype.updateF = function (e) {
    t.prototype.updateF.call(this, e);

    if (!$globalParam["default"].isGamePuase) {
      this.timeLeft -= e;
      this.timeLeft <= 0 ? (this.timeLeft = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL], $eventManager["default"].send($localEventName["default"].RENDER_SKILL_CD_INFO, this.skillId, 0), this.startGun() ? (this.releaseing = !0, this.timeLeft = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL], $eventManager["default"].send($localEventName["default"].RENDER_SKILL_CD_INFO, this.skillId, 1)) : this.timeLeft = 0) : $eventManager["default"].send($localEventName["default"].RENDER_SKILL_CD_INFO, this.skillId, this.timeLeft / this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL], -1);
    }
  };

  e.prototype.startGun = function () {
    var t = this.skillParam.releaseCount;

    if ($seedUtil["default"].probability(this.skillParam.releaseProbability)) {
      t += 1;
    }

    var e = $gameContext["default"].ins.getRandomEnemys(this.pointNode, t, this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL]);

    if (e.length <= 0) {
      return !1;
    }

    var i = Math.min(e.length, t);

    for (var o = 0; o < i; o++) {
      this.createBullet(e[o]);
    }

    return !0;
  };

  e.prototype.createBullet = function (t) {
    if (t && $util["default"].isValid(t.node)) {
      var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.thunder_chain);

      if (!e) {
        var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_31);
        (e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.lowBulletLayer.parent).getComponent($baseBullet["default"])).skillSpecialitys = $configContext["default"].instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
      }

      e.setPosition(this.pointNode.position);
      e.initBullet31(t, this.skillId);
      e.initButtle(null, this.skillId);
      e.insert($gameContext["default"].ins.lowBulletLayer);
    }
  };

  return e;
}(require("./BaseGun")["default"]);

exports["default"] = g;

cc._RF.pop();