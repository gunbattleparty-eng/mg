"use strict";
cc._RF.push(module, '72b3aWYboxC5p/7srXbaXSO', 'RGun_6');
// game_script/scripts/RGun_6.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $configContext = require("./ConfigContext");

var $globalParam = require("./GlobalParam");

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var p = function (t) {
  function e(e) {
    var i = t.call(this, e) || this;
    $gameContext["default"].ins.skillInfo.robotParam = $configContext["default"].instance.robotConfigs.find(function (t) {
      return 7 === t.id;
    }).Petsskin_skill_value;
    i.timeLeft = $gameContext["default"].ins.skillInfo.robotParam[1];
    return i;
  }

  __extends(e, t);

  e.prototype.updateF = function (e) {
    t.prototype.updateF.call(this, e);

    if (!(this.isAttacking || $globalParam["default"].isGamePuase)) {
      this.timeLeft -= e;

      if (this.timeLeft <= 0) {
        this.startGun();
      }
    }
  };

  e.prototype.startGun = function () {
    var t = this;
    var e = $gameContext["default"].ins.getRangeRankEnemy(this.pointNode, $gameContext["default"].ins.skillInfo.robotParam[2]);

    if (!e) {
      this.timeLeft = 1;
      return !1;
    }

    var i = e.node.position.sub(cc.v3(150, -540)).normalize();
    this.isAttacking = !0;
    this.createButtle(i);
    this.schedulesOnce(function () {
      t.timeLeft = $gameContext["default"].ins.skillInfo.robotParam[1];
      t.isAttacking = !1;
    }, $gameContext["default"].ins.skillInfo.robotParam[4]);
  };

  e.prototype.createButtle = function (t) {
    var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.r_bullet_6);

    if (!e) {
      var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_6);
      e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.buttleLayer.parent).getComponent($baseBullet["default"]);
    }

    e.setPosition(cc.v3(150, -540));
    e.initButtle(t);
    e.insert($gameContext["default"].ins.buttleLayer);
  };

  return e;
}(require("./BaseGun")["default"]);

exports["default"] = p;

cc._RF.pop();