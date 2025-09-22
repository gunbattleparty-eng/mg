"use strict";
cc._RF.push(module, '43271o1BYlAUoMwo94OKMs6', 'RBullet_8');
// game_script/scripts/RBullet_8.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $globalParam = require("./GlobalParam");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var f = cc._decorator;
var h = f.ccclass;
var m = f.property;
var y = new cc.Vec3();

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.r_bullet_8;
    e.skin = null;
    e.status = 0;
    e.leftTime = 0;
    e.targetEnemy = null;
    e.findLeftTime = 0;
    e.atkLeftTime = 0;
    e.atkIntervalTime = 1;
    e.pointNode = null;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    this.targetEnemy = null;
    this.speed = $gameContext["default"].ins.skillInfo.robotParam[3];
    this.atkIntervalTime = $gameContext["default"].ins.skillInfo.robotParam[4];
    this.leftTime = $gameContext["default"].ins.skillInfo.robotParam[5];
    t.prototype.initButtle.call(this, e, null);
    this.atk = Math.ceil($gameContext["default"].ins.skillInfo.robotParam[0] * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]);
    this.status = 0;
    this.node.zIndex = 10;

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }
  };

  e.prototype.attack = function (t) {
    var e = this;
    this.atkLeftTime -= t;

    if (!(this.atkLeftTime > 0)) {
      this.atkLeftTime = 1;
      this.skin.off(dragonBones.EventObject.COMPLETE);
      this.playAnim("hit", 1);
      this.skin.once(dragonBones.EventObject.COMPLETE, function () {
        e.atkLeftTime = e.atkIntervalTime;
        e.playAnim("stand_2", 0);
        e.targetEnemy.getPosition().y < -250 ? (e.targetEnemy.removeDieCallback(e), e.status = 0) : 0 !== e.status && (e.status = 1);
      }, this);
      this.createBullet();
    }
  };

  e.prototype.findTarget = function (t) {
    if ("stand_2" !== this.skin.animationName) {
      this.skin.off(dragonBones.EventObject.COMPLETE);
      this.playAnim("stand_2", 0);
    }

    this.findLeftTime -= t;

    if (this.findLeftTime <= 0) {
      this.findLeftTime = 1;
      var e = this.getTarget();

      if (e) {
        this.targetEnemy = e;
        this.targetEnemy.addDieCallback(this.targetDie, this);
        this.status = 1;
      }
    }
  };

  e.prototype.getTarget = function () {
    var t = [];

    for (var e = 0; e < $gameContext["default"].ins.currEnemys.length; e++) {
      var i = $gameContext["default"].ins.currEnemys[e];

      if (i && i.getPosition().y >= -250 && Math.abs(i.getPosition().y - this.pointNode.position.y) < $gameContext["default"].ins.skillInfo.robotParam[2]) {
        t.push(i);
      }
    }

    return t.length < 0 ? null : (t.sort(function (t, e) {
      return t.residueDis - e.residueDis;
    }), t[0]);
  };

  e.prototype.findPath = function (t) {
    y.x = this.targetEnemy.getPosition().x - this.node.position.x;
    y.y = this.targetEnemy.getPosition().y - this.node.position.y - 100;
    y.z = 0;
    y.normalizeSelf();
    Math.abs(this.targetEnemy.getPosition().x - this.node.position.x) <= 30 && Math.abs(this.targetEnemy.getPosition().y - this.node.position.y - 100) <= 30 ? 0 !== this.status && (this.status = 2) : ("stand_2" !== this.skin.animationName && (this.skin.off(dragonBones.EventObject.COMPLETE), this.playAnim("stand_2", 0)), this.setPosition(y.mulSelf(this.speed * t).add(this.getPosition())));
  };

  e.prototype.targetDie = function () {
    this.status = 0;
  };

  e.prototype.updateFrame = function (t) {
    if (!($globalParam["default"].isGamePuase || this.leftTime <= 0)) {
      this.leftTime -= t;
      this.leftTime <= 0 ? this.removeSelf() : this.updateStatus(t);
    }
  };

  e.prototype.updateStatus = function (t) {
    0 === this.status ? this.findTarget(t) : 1 === this.status ? this.findPath(t) : 2 === this.status && this.attack(t);
  };

  e.prototype.playAnim = function (t, e) {
    this.skin.timeScale = $gameContext["default"].ins.gameRatio;
    this.skin.playAnimation(t, e);
  };

  e.prototype.createBullet = function () {
    var t = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.r_bullet_8_1);

    if (!t) {
      var e = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_8_1);
      t = $resUtil.ResUtil.instantiate(e, $gameContext["default"].ins.robotFlyLayer.parent).getComponent($baseBullet["default"]);
    }

    t.setPosition(this.node.position.clone());
    y.x = 0;
    y.y = 1;
    t.initButtle(y, null);
    t.insert($gameContext["default"].ins.robotFlyLayer);
  };

  __decorate([m(dragonBones.ArmatureDisplay)], e.prototype, "skin", void 0);

  return __decorate([h], e);
}($baseBullet["default"]);

exports["default"] = g;

cc._RF.pop();