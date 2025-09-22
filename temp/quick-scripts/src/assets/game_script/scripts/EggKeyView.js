"use strict";
cc._RF.push(module, '7b243fOhChPYrHiW3bpDQys', 'EggKeyView');
// game_script/scripts/EggKeyView.js

"use strict";

var o;

var $uIManager = require("./UIManager");

var $popupView = require("./PopupView");

var $platform = require("./Platform");

var $aD = require("./AD");

var $adService = require("./AdService");

var $userDataContext = require("./UserDataContext");

var p = cc._decorator;
var f = p.ccclass;
var h = p.property;

var m = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btnAd = null;
    e.tipLable = null;
    e.type = -1;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    var t;
    this.type = null === (t = this.uiParam.param) || void 0 === t ? void 0 : t.type;

    if (!this.type) {
      this.type;
    }

    1 === this.type ? this.tipLable.string = "观看广告获得钥匙" : this.tipLable.string = "是否让宝箱进入沉睡状态";
  };

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
        1 === e.type ? $aD["default"].toutiao.report("Egg_key") : $aD["default"].toutiao.report("Egg_key_box");
      }

      1 === e.type ? ($uIManager.UIManager.instance.showToast("获得钥匙"), $userDataContext["default"].Ins.setEgg(1, 1)) : $userDataContext["default"].Ins.setEgg(2, 1);
      t.prototype.onClickClose.call(e);
    });
  };

  __decorate([h(cc.Node)], e.prototype, "btnAd", void 0);

  __decorate([h(cc.Label)], e.prototype, "tipLable", void 0);

  return __decorate([f], e);
}($popupView.PopupView);

exports["default"] = m;

cc._RF.pop();