"use strict";
cc._RF.push(module, '72eeeuRLqNLwoN7G3zS17D8', 'Player');
// game_script/scripts/Player.js

"use strict";

var o;

var $eventManager = require("./EventManager");

var $componentProxy = require("./ComponentProxy");

var $remoteAudio = require("./RemoteAudio");

var $util = require("./Util");

var $globalParam = require("./GlobalParam");

var $localEventName = require("./LocalEventName");

var $roleContext = require("./RoleContext");

var $playerSkin = require("./PlayerSkin");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $gun_1 = require("./Gun_1");

var g = cc._decorator;
var _ = g.ccclass;
var k = g.property;

var v = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.skin = null;
    e.skin2 = null;
    e.robotSkin = null;
    e.gun = null;
    e.cd = 0.5;
    e.residuCD = 0;
    e.isChangeBullet = !1;
    e.skilling = !1;
    e.angleBack = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.gun = this.node.getComponent($gun_1["default"]);
  };

  e.prototype.start = function () {
    $componentProxy["default"].Ins.pushObj(this);
    $eventManager["default"].on($localEventName["default"].CHANGE_RELOAD_ANIM, this.changeReloadAnim, this);
    $eventManager["default"].on($localEventName["default"].SEND_SKILL_ANIM, this.playSkillAnim, this);
    var t = $roleContext["default"].ins.currSkinInfo;
    this.skin.armatureName = "juese" + t.skin + "_1";
    this.skin2.armatureName = "juese" + t.skin + "_2";
    this.robotSkin.armatureName = "jqr" + t.robot;
    this.node.getComponent($playerSkin.PlayerSkin).checkGun(t.gun);
  };

  e.prototype.onDestroy = function () {
    $componentProxy["default"].Ins.removeObj(this);
    $eventManager["default"].off($localEventName["default"].CHANGE_RELOAD_ANIM, this.changeReloadAnim, this);
    $eventManager["default"].off($localEventName["default"].SEND_SKILL_ANIM, this.playSkillAnim, this);
  };

  e.prototype.changeReloadAnim = function (t) {
    if (t) {
      this.isChangeBullet = !0;
      $remoteAudio["default"].instance.playEffectMusic("gunexchange");
      return void (this.skilling || this.skin.playAnimation("huandan", 0));
    }

    if (!this.skilling) {
      this.skin.playAnimation("stand", 0);
    }

    this.isChangeBullet = !1;
  };

  e.prototype.playSkillAnim = function () {
    var t = this;
    this.skilling = !0;
    this.angleBack = this.node.angle;
    this.node.angle = 90;
    this.skin.off(dragonBones.EventObject.COMPLETE);
    this.skin.playAnimation("skill", 1);
    this.skin.once(dragonBones.EventObject.COMPLETE, function () {
      t.skilling = !1;
      t.isChangeBullet ? t.skin.playAnimation("huandan", 0) : (t.node.angle = t.angleBack, t.skin.playAnimation("stand", 0));
    });
  };

  e.prototype.updateFrame = function (t) {
    this.gun.updateF(t);

    if (!this.gun.isAttacking) {
      this.residuCD -= t;

      if (this.residuCD <= 0) {
        this.residuCD = this.cd;
        this.startGun();
      }
    }
  };

  e.prototype.update = function () {
    this.proccessSpeed();
  };

  e.prototype.proccessSpeed = function () {
    $globalParam["default"].isGamePuase ? 0 !== this.skin.timeScale && (this.skin.timeScale = 0) : this.skin.timeScale !== $gameContext["default"].ins.gameRatio && (this.skin.timeScale = $gameContext["default"].ins.gameRatio);
  };

  e.prototype.startGun = function () {
    var t = this;

    if (!this.isChangeBullet && !this.skilling) {
      if (!this.skillParam) {
        this.skillParam = $gameContext["default"].ins.skillInfo.getSkillById(1);
      }

      var e = $gameContext["default"].ins.getRangeRankEnemy(this.node, this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL]);

      if (e) {
        $remoteAudio["default"].instance.playEffectMusic("gun");

        if (!this.skilling) {
          this.skin.playAnimation("sheji", 1);
          this.skin.once(dragonBones.EventObject.COMPLETE, function () {
            t.skin.playAnimation("stand", 0);
          }, this);
        }

        var i = e.node.position.subtract(this.node.position).normalize();
        this.gun.sendButtle(i);
        var o = $util["default"].dirConverAngle(i);
        this.node.angle = o;
      }
    }
  };

  __decorate([k(dragonBones.ArmatureDisplay)], e.prototype, "skin", void 0);

  __decorate([k(dragonBones.ArmatureDisplay)], e.prototype, "skin2", void 0);

  __decorate([k(dragonBones.ArmatureDisplay)], e.prototype, "robotSkin", void 0);

  return __decorate([_], e);
}(cc.Component);

exports["default"] = v;

cc._RF.pop();