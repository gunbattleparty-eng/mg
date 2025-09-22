"use strict";
cc._RF.push(module, '5cb65rRB71KAYKAmXWD62Q6', 'RBullet_7');
// game_script/scripts/RBullet_7.js

"use strict";

var o;

var $object = require("./Object");

var $util = require("./Util");

var $globalParam = require("./GlobalParam");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var p = cc._decorator;
var f = p.ccclass;
var h = p.property;
var m = new cc.Vec3();

var y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.r_bullet_7;
    e.skin = null;
    e.status = 0;
    e.leftTime = 0;
    e.enemys = [];
    e.targetEnemy = null;
    e.findLeftTime = 0;
    e.atkLeftTime = 0;
    e.atkIntervalTime = 1;
    e.pointNode = null;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    this.enemys.length = 0;
    this.targetEnemy = null;
    this.speed = $gameContext["default"].ins.skillInfo.robotParam[3];
    this.atkIntervalTime = $gameContext["default"].ins.skillInfo.robotParam[4];
    this.leftTime = $gameContext["default"].ins.skillInfo.robotParam[5];
    this.setAngle($util["default"].dirConverAngle(e));
    t.prototype.initButtle.call(this, e, null);
    this.atk = Math.ceil($gameContext["default"].ins.skillInfo.robotParam[0] * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]);
    this.status = 0;

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }
  };

  e.prototype.onTrigger = function (t, e) {
    var i = t.object;

    if (e === $object.Trigger.enter) {
      this.enemys.push(i);
    } else {
      if (e === $object.Trigger.exit) {
        var o = this.enemys.indexOf(i);

        if (-1 !== o) {
          this.enemys.splice(o, 1);
        }
      }
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
        e.playAnim("stand", 0);

        if (0 !== e.status) {
          e.status = 1;
        }
      }, this);

      for (var i = 0; i < this.enemys.length; i++) {
        this.enemys[i].sufferAtk({
          skillSpecialitys: this.skillSpecialitys,
          atk: this.atk
        });
      }
    }
  };

  e.prototype.findTarget = function (t) {
    if ("stand" !== this.skin.animationName) {
      this.skin.off(dragonBones.EventObject.COMPLETE);
      this.playAnim("stand", 0);
    }

    this.findLeftTime -= t;

    if (this.findLeftTime <= 0) {
      this.findLeftTime = 1;
      var e = $gameContext["default"].ins.getRangeRankEnemy(this.pointNode, $gameContext["default"].ins.skillInfo.robotParam[2]);

      if (e) {
        this.targetEnemy = e;
        this.targetEnemy.addDieCallback(this.targetDie, this);
        this.status = 1;
      }
    }
  };

  e.prototype.findPath = function (t) {
    m.x = this.targetEnemy.getPosition().x - this.node.position.x;
    m.y = this.targetEnemy.getPosition().y - this.node.position.y;
    m.z = 0;
    m.normalizeSelf();
    this.targetEnemy.getPosition().sub(this.node.position.add(m.mul(50))).magSqr() < 22500 ? 0 !== this.status && (this.status = 2) : ("run" !== this.skin.animationName && (this.skin.off(dragonBones.EventObject.COMPLETE), this.playAnim("run", 0)), this.setAngle($util["default"].dirConverAngle(m)), this.setPosition(m.mulSelf(this.speed * t).add(this.getPosition())));
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

  __decorate([h(dragonBones.ArmatureDisplay)], e.prototype, "skin", void 0);

  return __decorate([f], e);
}($baseBullet["default"]);

exports["default"] = y;

cc._RF.pop();