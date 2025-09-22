"use strict";
cc._RF.push(module, '2a190/vv5tKgKahZOeIgq3Y', 'RBullet_5_2');
// game_script/scripts/RBullet_5_2.js

"use strict";

var o;

var $object = require("./Object");

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var f = cc._decorator;
var h = f.ccclass;
var m = (f.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.r_bullet_5_2;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    this.speed = $gameContext["default"].ins.skillInfo.robotParam[3];
    t.prototype.initButtle.call(this, e, null);
    this.atk = Math.ceil($gameContext["default"].ins.skillInfo.robotParam[0] * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]);

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && e == $object.Trigger.enter) {
      var i = t.object;
      i.sufferAtk({
        skillSpecialitys: [],
        atk: this.atk
      });
      this.createMatrix(i.getPosition());
      return this.removeSelf();
    }
  };

  e.prototype.createMatrix = function (t) {
    var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.r_bullet_5_3);

    if (!e) {
      var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_5_3);
      e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.floorLayer.parent).getComponent($baseBullet["default"]);
    }

    e.setPosition(t.add(cc.v3(0, -50)));
    e.initButtle(null, null);
    e.insert($gameContext["default"].ins.floorLayer);
  };

  return __decorate([h], e);
}($baseBullet["default"]));
exports["default"] = m;

cc._RF.pop();