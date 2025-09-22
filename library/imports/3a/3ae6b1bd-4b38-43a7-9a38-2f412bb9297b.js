"use strict";
cc._RF.push(module, '3ae6bG9SzhDp5o4L0EruSl7', 'RBullet_4');
// game_script/scripts/RBullet_4.js

"use strict";

var o;

var $object = require("./Object");

var $countDownUtil = require("./CountDownUtil");

var $util = require("./Util");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $enemyStatus = require("./EnemyStatus");

var $baseBullet = require("./BaseBullet");

var f = cc._decorator;
var h = f.ccclass;
var m = (f.property, new cc.Vec3());

var y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.r_bullet_4;
    e.timeLeft = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    this.speed = $gameContext["default"].ins.skillInfo.robotParam[3];
    t.prototype.initButtle.call(this, e, null);
    this.atk = Math.ceil($gameContext["default"].ins.skillInfo.robotParam[0] * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]);
    this.timeLeft = $gameContext["default"].ins.skillInfo.robotParam[5];
    this.isUse = !1;

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }
  };

  e.prototype.updateFrame = function (t) {
    if (!(this.timeLeft <= 0)) {
      this.timeLeft -= t;

      if (this.timeLeft <= 0) {
        this.timeLeft = 0;
        return this.removeSelf();
      }

      this.move(t);
    }
  };

  e.prototype.move = function (t) {
    var e = this.getPosition();
    var i = this.velocity;
    var o = !1;
    m.x = e.x + i.x * t;
    m.y = e.y + i.y * t;
    m.z = e.z + i.z * t;

    if (m.x < -310 || m.x > 310) {
      m.x = e.x;
      this.velocity.x = -this.velocity.x;
      var n = $util["default"].dirConverAngle(this.velocity);
      this.setAngle(n);
      o = !0;
    }

    if (m.y < -300 || m.y > cc.winSize.height / 2 - 50) {
      m.y = e.y;
      this.velocity.y = -this.velocity.y;
      n = $util["default"].dirConverAngle(this.velocity);
      this.setAngle(n);
      o = !0;
    }

    if (o) {
      var s = $gameContext["default"].ins.getRandomEnemy();

      if (s) {
        this.velocity = s.getPosition().sub(this.getPosition()).normalize();
        this.velocity.multiplyScalar(this.speed);
        n = $util["default"].dirConverAngle(this.velocity);
        this.setAngle(n);
      }
    }

    this.setPosition(m);
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse) {
      var i = t.object;

      if (e == $object.Trigger.enter) {
        i.sufferAtk({
          skillSpecialitys: [],
          atk: this.atk
        });
        var o = {
          id: -1,
          type: $enemyStatus.EnemyDebuffType.FREEZE,
          timeLeft: $gameContext["default"].ins.skillInfo.robotParam[4],
          value: -1
        };
        i.sufferDebuff(o);
      } else {
        if (e === $object.Trigger.stay) {
          if ($countDownUtil.CountDownUtil.time - i.getLastAtkTime(5) <= $gameContext["default"].ins.skillInfo.robotParam[6] / $gameContext["default"].ins.gameRatio) {
            return;
          }

          i.setLastAtkTime(5, $countDownUtil.CountDownUtil.time);
          i.sufferAtk({
            skillSpecialitys: [],
            atk: this.atk
          });
        }
      }
    }
  };

  e.prototype.lerpAngleRes = function (t) {
    var e = 180 * cc.v2(0, 1).signAngle(cc.v2(t)) / Math.PI;
    e = e < 0 ? 360 + e : e;
    var i = this.node.angle < 0 ? 360 + this.node.angle : this.node.angle;
    i %= 360;

    if (Math.abs(i - e) <= 10) {
      return e;
    }

    var o = i - e;
    o = o < 0 ? 360 + o : o;
    var n = e - i;
    n = n < 0 ? 360 + n : n;
    var s = cc.misc.lerp(0, Math.abs(e - i), 0.1);
    o < n ? i -= s : i += s;
    return i;
  };

  return __decorate([h], e);
}($baseBullet["default"]);

exports["default"] = y;

cc._RF.pop();