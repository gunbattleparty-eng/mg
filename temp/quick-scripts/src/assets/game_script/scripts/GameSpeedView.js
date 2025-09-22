"use strict";
cc._RF.push(module, 'fc48b3slgVGs4dK/gA10UBJ', 'GameSpeedView');
// game_script/scripts/GameSpeedView.js

"use strict";

var o;

var $popupView = require("./PopupView");

var $platform = require("./Platform");

var $aD = require("./AD");

var $adService = require("./AdService");

var $userDataContext = require("./UserDataContext");

var $gameContext = require("./GameContext");

var p = cc._decorator;
var f = p.ccclass;
var h = p.property;

var m = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.anim1 = null;
    e.anim2 = null;
    e.btnSpeed1 = null;
    e.btnSpeed2 = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    var t = 0;

    if ($userDataContext["default"].Ins.speedRecord[0]) {
      t = 1;

      if (1.5 === $gameContext["default"].ins.gameRatio) {
        t = 2;
      }
    }

    this.render(1, t);
    t = 0;

    if ($userDataContext["default"].Ins.speedRecord[1]) {
      t = 1;

      if (2 === $gameContext["default"].ins.gameRatio) {
        t = 2;
      }
    }

    this.render(2, t);
  };

  e.prototype.addEvent = function () {
    this.btnSpeed1.on("click", this.clickBtn, this);
    this.btnSpeed2.on("click", this.clickBtn, this);
  };

  e.prototype.removeEvent = function () {
    this.btnSpeed1.off("click", this.clickBtn, this);
    this.btnSpeed2.off("click", this.clickBtn, this);
  };

  e.prototype.clickBtn = function (t) {
    var e = this;

    if ("btn_seed1" === t.node.name) {
      if (!$userDataContext["default"].Ins.speedRecord[0]) {
        return void $adService["default"].Ins.showRewardedVideo(function () {
          if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
            $aD["default"].toutiao.report("game15x");
          }

          $userDataContext["default"].Ins.speedRecord[0] = !0;
          $userDataContext["default"].Ins.saveSpeedRecord();
          e.onResetView();
        });
      }

      if (1.5 !== $gameContext["default"].ins.gameRatio) {
        $gameContext["default"].ins.gameRatio = 1.5;
        return void this.onResetView();
      }

      if (1.5 === $gameContext["default"].ins.gameRatio) {
        $gameContext["default"].ins.gameRatio = 1;
        return void this.onResetView();
      }
    } else {
      if (!$userDataContext["default"].Ins.speedRecord[1]) {
        return void $adService["default"].Ins.showRewardedVideo(function () {
          if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
            $aD["default"].toutiao.report("game2x");
          }

          $userDataContext["default"].Ins.speedRecord[1] = !0;
          $userDataContext["default"].Ins.saveSpeedRecord();
          e.onResetView();
        });
      }

      if (2 !== $gameContext["default"].ins.gameRatio) {
        $gameContext["default"].ins.gameRatio = 2;
        return void this.onResetView();
      }

      if (2 === $gameContext["default"].ins.gameRatio) {
        $gameContext["default"].ins.gameRatio = 1;
        return void this.onResetView();
      }
    }
  };

  e.prototype.render = function (t, e) {
    var i = 1 === t ? this.anim1 : this.anim2;
    var o = 1 === t ? this.btnSpeed1 : this.btnSpeed2;
    var n = o.children[2].children[0];
    var s = o.children[2].children[1].getComponent(cc.Label);
    n.active = !1;
    o.children[0].active = !1;
    o.children[1].active = !1;
    0 === e ? (i.playAnimation("off_" + t, 0), n.active = !0, s.string = "解锁") : 1 === e ? (i.playAnimation("off_" + t, 0), o.children[0].active = !0, s.string = "使用") : 2 === e && (i.playAnimation("on_" + t, 0), o.children[1].active = !0, s.string = "取消");
  };

  __decorate([h(dragonBones.ArmatureDisplay)], e.prototype, "anim1", void 0);

  __decorate([h(dragonBones.ArmatureDisplay)], e.prototype, "anim2", void 0);

  __decorate([h(cc.Node)], e.prototype, "btnSpeed1", void 0);

  __decorate([h(cc.Node)], e.prototype, "btnSpeed2", void 0);

  return __decorate([f], e);
}($popupView.PopupView);

exports["default"] = m;

cc._RF.pop();