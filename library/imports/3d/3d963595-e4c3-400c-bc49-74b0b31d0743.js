"use strict";
cc._RF.push(module, '3d963WV5MNADLxJdLCzHQdD', 'Bullet_12');
// game_script/scripts/Bullet_12.js

"use strict";

var o;

var $gamePool = require("./GamePool");

var $util = require("./Util");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var d = cc._decorator;
var p = d.ccclass;
var f = d.property;
var h = new cc.Size(0, 20);
var m = new cc.Vec3();

var y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.thunder_puncture;
    e.animPrefab = null;
    e.currAtkEnemyCount = 0;
    e.currTargetPos = null;
    e.currTarget = null;
    e.targetIsExist = !0;
    e.tailNode = [];
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.atk = this.skillParam.thunderPierceAtk[$gameSkillInfo.Skill4Param.FINAL];
  };

  e.prototype.initBullet12 = function (t, e) {
    this.skillId = e;
    this.isUse = !1;
    this.currAtkEnemyCount = 0;
    this.targetIsExist = !0;
    this.currTarget = t;
    this.currTargetPos = t.getPosition();
    this.tailNode.length = 0;
  };

  e.prototype.updateFrame = function (t) {
    if (!this.isUse) {
      if (this.targetIsExist) {
        if (!(cc.isValid(this.currTarget) && this.currTarget.node.parent)) {
          this.targetIsExist = !1;
          this.currTargetPos = this.node.position.clone();
        }
      }

      var e = this.getPosition();
      var i = this.velocity;
      m.x = e.x + i.x * t;
      m.y = e.y + i.y * t;
      m.z = e.z + i.z * t;
      this.setPosition(m);

      if (this.node.position.sub(this.currTargetPos).magSqr() < 400) {
        var o = null;
        this.targetIsExist ? (this.currTarget.sufferAtk({
          id: 61,
          skillSpecialitys: this.skillSpecialitys,
          atk: this.atk
        }), o = $gameContext["default"].ins.getRangeRandomEnemyLayer(this.currTarget.node, this.skillParam.thunderPierceRange)) : o = $gameContext["default"].ins.getRangeRandomEnemyLayerByPos(this.currTargetPos, this.skillParam.thunderPierceRange);
        this.currAtkEnemyCount++;

        if (!o || this.currAtkEnemyCount >= this.skillParam.thunderPierceCount) {
          return void this.destoryBullet();
        }

        this.targetIsExist = !0;
        this.currTarget = o;
        this.currTargetPos = o.getPosition();
      }

      if (this.tailNode.length < this.currAtkEnemyCount + 1) {
        var n = $gamePool["default"].instance.get($gamePool.PoolKey.THUNDER_PUNCTURE_ANIMS);

        if (!cc.isValid(n)) {
          n = cc.instantiate(this.animPrefab);
        }

        n.parent = $gameContext["default"].ins.buttleLayer;
        n.position = this.getPosition().clone();
        h.width = 0;
        n.setContentSize(h);
        this.tailNode[this.currAtkEnemyCount] = n;
      }

      var s = this.tailNode[this.currAtkEnemyCount];
      var c = $util["default"].dirConverAngle(this.node.position.sub(s.position).normalize());
      s.angle = c;
      h.width = s.width + this.speed * t;
      s.setContentSize(h);
      var u = this.currTargetPos.sub(this.node.position).normalize();
      this.speed = 1200;
      this.velocity.set(u).mulSelf(this.speed);
    }
  };

  e.prototype.destoryBullet = function () {
    var t = this;
    this.isUse = !0;
    this.scheduleOnce(function () {
      for (var e = 0; e < t.tailNode.length; e++) {
        $gamePool["default"].instance.put($gamePool.PoolKey.THUNDER_PUNCTURE_ANIMS, t.tailNode[e]);
      }

      t.removeSelf();
    }, 0.15);
  };

  __decorate([f(cc.Prefab)], e.prototype, "animPrefab", void 0);

  return __decorate([p], e);
}($baseBullet["default"]);

exports["default"] = y;

cc._RF.pop();