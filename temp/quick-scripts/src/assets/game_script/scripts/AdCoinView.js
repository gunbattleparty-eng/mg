"use strict";
cc._RF.push(module, 'b4463f160JBgrFXdARznHmp', 'AdCoinView');
// game_script/scripts/AdCoinView.js

"use strict";

var o;

var $assetsMap = require("./AssetsMap");

var $popupManager = require("./PopupManager");

var $popupView = require("./PopupView");

var $platform = require("./Platform");

var $seedUtil = require("./SeedUtil");

var $aD = require("./AD");

var $adService = require("./AdService");

var $shopContext = require("./ShopContext");

var $userDataContext = require("./UserDataContext");

var m = cc._decorator;
var y = m.ccclass;
var g = m.property;

var _ = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btnAd = null;
    e.counts = [2, 3, 4, 5, 6, 7];
    e.weights = [6e3, 3e3, 100, 10, 1, 1];
    return e;
  }

  __extends(e, t);

  e.prototype.addEvent = function () {
    this.btnAd.on("click", this.clickAd, this);
  };

  e.prototype.removeEvent = function () {
    this.btnAd.off("click", this.clickAd, this);
  };

  e.prototype.clickAd = function () {
    var e = this;
    $adService["default"].Ins.showRewardedVideo(function () {
      if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
        $aD["default"].toutiao.report("free_ad_box");
      }

      var i = $seedUtil["default"].weightRandomCount(e.weights, 1)[0];
      var o = e.counts[i];
      $userDataContext["default"].Ins.opearAdCoin(o);
      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
        infos: [{
          type: 12,
          num: o
        }]
      });
      $shopContext["default"].Ins.addShopResRecord(12);
      t.prototype.onClickClose.call(e);
    });
  };

  __decorate([g(cc.Node)], e.prototype, "btnAd", void 0);

  return __decorate([y], e);
}($popupView.PopupView);

exports["default"] = _;

cc._RF.pop();