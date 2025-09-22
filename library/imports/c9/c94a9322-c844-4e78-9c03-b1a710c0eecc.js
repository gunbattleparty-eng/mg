"use strict";
cc._RF.push(module, 'c94a9MiyEROeJwDsacQwO7M', 'Bullet_6');
// game_script/scripts/Bullet_6.js

"use strict";

var o;

var $object = require("./Object");

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $util = require("./Util");

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
    e.buttleType = $baseBullet.BulletType.freeze_bullet;
    e.currPenetrateLayer = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.currPenetrateLayer = 0;
    this.atk = this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL];
    this.speed = this.skillParam.freezeSpeed[$gameSkillInfo.Skill4Param.FINAL];
    this.velocity.set(e).multiplyScalar(this.speed);
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && e == $object.Trigger.enter) {
      var i = t.object;
      i.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        bulletBuff: $baseBullet.BulletBuff.paralysis_damage,
        value: this.skillParam.freezeSuffParalysisAdd,
        atk: this.atk
      });

      if (this.skillParam.freezeBack[$gameSkillInfo.Skill4Param.FINAL] > 0) {
        var o = {
          type: $enemyStatus.EnemyDebuffType.BACK,
          timeLeft: -1,
          value: this.skillParam.freezeBack[$gameSkillInfo.Skill4Param.FINAL]
        };
        i.sufferDebuff(o);
      }

      for (var n = 0; n < this.skillParam.freezeEnemyAtkAddParam.length; n++) {
        var s = this.skillParam.freezeEnemyAtkAddParam;
        var a = {
          type: $enemyStatus.EnemyDebuffType.ALL_ATK_ADD,
          timeLeft: s[n][0],
          value: s[n][1]
        };
        i.sufferDebuff(a);
      }

      if (this.skillParam.freezeTime > 0) {
        o = {
          type: $enemyStatus.EnemyDebuffType.FREEZE,
          timeLeft: this.skillParam.freezeTime,
          value: 0
        };
        i.sufferDebuff(o);
      }

      if (0 === this.currPenetrateLayer && this.skillParam.freezeSplitCount > 0) {
        this.createSplitButtle(i);
      }

      if (!(29 !== i.config.id && 30 !== i.config.id && 36 !== i.config.id)) {
        this.currPenetrateLayer = this.skillParam.freezePenetrateLayer;
      }

      this.currPenetrateLayer++;

      if (this.skillParam.freezePenetrateLayer <= this.currPenetrateLayer) {
        this.isUse = !0;
        this.removeSelf();
      }
    }
  };

  e.prototype.createSplitButtle = function (t) {
    var e = $gameContext["default"].ins.getNearbyN2(t.node, this.skillParam.freezeSplitCount);

    for (var i = 0; i < e.length; i++) {
      var o = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.thermobaric_split);

      if (!o) {
        var n = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_8);
        (o = $resUtil.ResUtil.instantiate(n).getComponent($baseBullet["default"])).skillSpecialitys = $configContext["default"].instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
      }

      o.setPosition(this.node.position.clone());
      o.initButtle(e[i].node.position.sub(this.node.position).normalize(), this.skillId);
      o.targetEnemy = t;
      o.insert($gameContext["default"].ins.buttleLayer);
    }
  };

  e.prototype.checkBoundary = function () {
    if (!this.skillParam.freezeIsReflect) {
      return t.prototype.checkBoundary.call(this);
    }

    var e = cc.winSize.width / 2;
    var i = cc.winSize.height / 2;
    this.node.x <= -e ? (this.velocity.x = Math.abs(this.velocity.x), this.setAngle($util["default"].dirConverAngle(this.velocity))) : this.node.x >= e && (this.velocity.x = -Math.abs(this.velocity.x), this.setAngle($util["default"].dirConverAngle(this.velocity)));

    if (this.node.y >= i) {
      this.velocity.y = -Math.abs(this.velocity.y);
      this.setAngle($util["default"].dirConverAngle(this.velocity));
    }

    return !(this.node.y <= -cc.winSize.height / 2 - 100);
  };

  return __decorate([g], e);
}($baseBullet["default"]));

exports["default"] = _;

cc._RF.pop();