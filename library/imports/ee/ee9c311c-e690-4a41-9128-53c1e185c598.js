"use strict";
cc._RF.push(module, 'ee9c3Ec5pBKQZEoU8HhhcWY', 'Gun_1');
// game_script/scripts/Gun_1.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $seedUtil = require("./SeedUtil");

var $util = require("./Util");

var $configContext = require("./ConfigContext");

var $localEventName = require("./LocalEventName");

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var $gameGemInfo = require("./GameGemInfo");

var $gameSkillInfo = require("./GameSkillInfo");

var _ = cc._decorator;
var k = _.ccclass;
var v = _.property;

var b = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.point = null;
    e.residueChangeTime = 0;
    e.residueButtleCount = 0;
    e.isShoot = !1;
    e.isAttacking = !1;
    e.schedules = [];
    e.count = 0;
    e.skillId = 1;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.skillParam = $gameContext["default"].ins.skillInfo.getSkillById(this.skillId);
    this.residueButtleCount = this.skillParam.bulletCount;
    this.residueChangeTime = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL];
    $eventManager["default"].send($localEventName["default"].RENDER_SKILL_CD_INFO, this.skillId, -1, this.residueButtleCount);
  };

  e.prototype.notifyChangeReloadAnimStart = function () {
    this.isShoot = !0;
    $eventManager["default"].send($localEventName["default"].CHANGE_RELOAD_ANIM, !0);
  };

  e.prototype.notifyChangeReloadAnimEnd = function () {
    this.isShoot = !1;
    $eventManager["default"].send($localEventName["default"].CHANGE_RELOAD_ANIM, !1);
  };

  e.prototype.sendButtle = function (t) {
    var e = this;
    this.isAttacking = !0;
    --this.residueButtleCount;
    $eventManager["default"].send($localEventName["default"].RENDER_SKILL_CD_INFO, this.skillId, -1, this.residueButtleCount);

    if (this.residueButtleCount <= 0) {
      this.notifyChangeReloadAnimStart();
    }

    var i = 150 / this.skillParam.bulletSpeed;
    var o = 0;
    var n = this.skillParam.bulletComboCount + 1;

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.AddSkill) && $seedUtil["default"].probability(100 * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.AddSkill))) {
      n *= 2;
    }

    for (var s = 0; s < n; s++) {
      this.schedulesOnce2(function () {
        e.createButtle(t);
        var i = $util["default"].dirConverAngle(t);

        if (e.skillParam.bulletParallelCount >= 1) {
          e.createButtle($util["default"].angleConverDir(i + 5));
        }

        if (e.skillParam.bulletParallelCount >= 2) {
          e.createButtle($util["default"].angleConverDir(i - 5));
        }

        if (++o === n) {
          e.isAttacking = !1;
        }
      }, i * s);
    }
  };

  e.prototype.schedulesOnce2 = function (t, e) {
    this.schedules.push({
      cb: t,
      sec: e
    });
  };

  e.prototype.createButtle = function (t) {
    var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.normal_bullet);

    if (!e) {
      var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_1);
      (e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.buttleLayer.parent).getComponent($baseBullet["default"])).skillSpecialitys = $configContext["default"].instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
    }

    var o = $gameContext["default"].ins.buttleLayer.convertToNodeSpaceAR(this.point.convertToWorldSpaceAR(cc.Vec3.ZERO));
    e.setPosition(o);
    e.initButtle(t, this.skillId);
    e.insert($gameContext["default"].ins.buttleLayer);
  };

  e.prototype.updateF = function (t) {
    this.count = this.schedules.length;

    for (var e = 0; e < this.count; e++) {
      var i = this.schedules.shift();
      i.sec = i.sec - t;
      i.sec <= 0 ? i.cb() : this.schedules.push(i);
    }

    if (!this.isAttacking) {
      this.isShoot ? (this.residueChangeTime -= t, $eventManager["default"].send($localEventName["default"].RENDER_SKILL_CD_INFO, this.skillId, this.residueChangeTime / this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL], -1), this.residueChangeTime <= 0 && (this.isShoot = !1, this.residueChangeTime = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL], this.residueButtleCount = this.skillParam.bulletCount, $eventManager["default"].send($localEventName["default"].RENDER_SKILL_CD_INFO, this.skillId, 0, -1), this.notifyChangeReloadAnimEnd())) : this.residueButtleCount <= 0 && (this.isShoot = !0, this.notifyChangeReloadAnimStart());
    }
  };

  __decorate([v(cc.Node)], e.prototype, "point", void 0);

  return __decorate([k], e);
}(cc.Component);

exports["default"] = b;

cc._RF.pop();