"use strict";
cc._RF.push(module, '9b1bbz7/H1D9pE1Y0/XQtSf', 'EggTipView');
// game_script/scripts/EggTipView.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $popupView = require("./PopupView");

var $platform = require("./Platform");

var $remoteAudio = require("./RemoteAudio");

var $util = require("./Util");

var $aD = require("./AD");

var $adService = require("./AdService");

var $configContext = require("./ConfigContext");

var $localEventName = require("./LocalEventName");

var $userDataContext = require("./UserDataContext");

var $startView = require("./StartView");

var v = cc._decorator;
var b = v.ccclass;
var w = v.property;

var A = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.unLockImage = null;
    e.img = null;
    e.btnPre = null;
    e.btnNext = null;
    e.pageNo = null;
    e.btnAd = null;
    e.currSecIndex = -1;
    e.secIndexs = [];
    e.currIndex = 0;
    e.spNames = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    this.currSecIndex = -1;
    var t = [];
    var e = $configContext["default"].instance.eggConfigs;

    for (var i = 0; i < e.length; i++) {
      if (!(0 === (o = e[i]).tag.length || $userDataContext["default"].Ins.hasEggCompleted(o.tag))) {
        t.push(i);
      }
    }

    if (0 !== t.length) {
      for (i = 0; i < e.length; i++) {
        var o;

        if (0 === (o = e[i]).tag.length) {
          t.push(i);
        }
      }
    } else {
      for (i = 0; i < e.length; i++) {
        t.push(i);
      }
    }

    $util["default"].shuffle(t);
    var n = $userDataContext["default"].Ins.getCurrConfigIndex();

    if (-1 !== n) {
      -1 !== (i = t.indexOf(n)) ? (t.splice(i, 1), t.unshift(n), this.currSecIndex = 0) : this.currSecIndex = -1;
    }

    this.secIndexs = t;
    this.render();
  };

  e.prototype.addEvent = function () {
    this.btnAd.on("click", this.clickGain, this);
    this.btnPre.on("click", this.clickPre, this);
    this.btnNext.on("click", this.clickNext, this);
  };

  e.prototype.removeEvent = function () {
    this.btnAd.off("click", this.clickGain, this);
    this.btnPre.off("click", this.clickPre, this);
    this.btnNext.off("click", this.clickNext, this);
  };

  e.prototype.render = function () {
    this.unLockImage.active = !1;
    this.img.node.active = !1;
    this.btnPre.active = !1;
    this.btnNext.active = !1;
    this.pageNo.node.active = !1;

    if (-1 === this.currSecIndex) {
      this.unLockImage.active = !0;
      return void (this.btnAd.getComponentInChildren(cc.Label).string = "获取");
    }

    this.img.node.active = !0;
    this.btnPre.active = !0;
    this.btnNext.active = !0;
    this.pageNo.node.active = !0;
    this.btnAd.getComponentInChildren(cc.Label).string = "刷新";
    this.currIndex = 0;
    this.spNames = $configContext["default"].instance.eggConfigs[this.secIndexs[this.currSecIndex]].tipsimg;
    this.pageNo.string = this.currIndex + 1 + "/" + this.spNames.length;
    this.renderSp();
  };

  e.prototype.clickGain = function () {
    var t = this;
    $adService["default"].Ins.showRewardedVideo(function () {
      if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
        $aD["default"].toutiao.report("Egg_day");
      }

      t.currSecIndex++;

      if (t.currSecIndex >= t.secIndexs.length) {
        t.currSecIndex = 0;
      }

      $userDataContext["default"].Ins.setCurrConfigIndex(t.secIndexs[t.currSecIndex]);
      t.render();
      $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Battle);
    });
  };

  e.prototype.renderSp = function () {
    var t = this;
    $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/egg_img/" + this.spNames[this.currIndex]], cc.SpriteFrame, null, function (e, i) {
      var o = i[0];

      if (o && cc.isValid(t.img)) {
        t.img.spriteFrame = $resUtil.ResUtil.assignWith(o, t.node);
      }
    });
    this.btnNext.active = this.currIndex < this.spNames.length - 1;
    this.btnPre.active = 0 !== this.currIndex;
    this.pageNo.string = this.currIndex + 1 + "/" + this.spNames.length;
  };

  e.prototype.clickPre = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");
    this.currIndex--;
    this.renderSp();
  };

  e.prototype.clickNext = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");
    this.currIndex++;
    this.renderSp();
  };

  __decorate([w(cc.Node)], e.prototype, "unLockImage", void 0);

  __decorate([w(cc.Sprite)], e.prototype, "img", void 0);

  __decorate([w(cc.Node)], e.prototype, "btnPre", void 0);

  __decorate([w(cc.Node)], e.prototype, "btnNext", void 0);

  __decorate([w(cc.Label)], e.prototype, "pageNo", void 0);

  __decorate([w(cc.Node)], e.prototype, "btnAd", void 0);

  return __decorate([b], e);
}($popupView.PopupView);

exports["default"] = A;

cc._RF.pop();