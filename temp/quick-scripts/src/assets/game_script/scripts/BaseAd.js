"use strict";
cc._RF.push(module, '41240xX67VD/rBpSV9UAL55', 'BaseAd');
// game_script/scripts/BaseAd.js

"use strict";

exports.BaseAd = void 0;

var $audioPlayer = require("./AudioPlayer");

var n = function () {
  function t() {
    this.adUnitId = null;
    this.adIns = null;
    this.musicVolume = -1;
    this.effectsVolume = -1;
    this.isOpenPreLoad = !0;
    this.isLoaded = !1;
    this.showing = !1;
    this.isAutoShow = !1;
    this.isConsume = !1;
    this.isCanShow = !0;
    this.hideing = !1;
    this.onLoad = null;
    this.onError = null;
    this.onClose = null;
    this.onResize = null;
    this.onHide = null;
    this.showCallback = null;
    this.closeCallback = null;
    this.errorCallback = null;
    this.noRespondCount = 0;
  }

  t.prototype.setOpenPreLoad = function (t) {
    this.isOpenPreLoad = t;
  };

  t.prototype.initAd = function (t) {
    this.adUnitId = t;
    this.adUnitId && "" !== this.adUnitId ? (this.onLoad = this.onAdLoad.bind(this), this.onClose = this.onAdClose.bind(this), this.onError = this.onAdError.bind(this), this.onResize = this.onAdResize.bind(this), this.onHide = this.onAdHide.bind(this), this.isOpenPreLoad && this.loadAd()) : console.warn("初始化广告参数为空");
  };

  t.prototype.loadAd = function () {
    console.warn(this.adUnitId, "广告loadAd");
  };

  t.prototype.onAdLoad = function () {
    console.warn(this.adUnitId, "广告onAdLoad");
  };

  t.prototype.onAdError = function (t) {
    console.warn(this.adUnitId, "广告onAdError", JSON.stringify(t));
  };

  t.prototype.onAdClose = function () {
    console.warn(this.adUnitId, "广告onAdClose");
  };

  t.prototype.onAdHide = function () {
    console.warn(this.adUnitId, "广告onHide");
  };

  t.prototype.onAdResize = function () {
    console.warn(this.adUnitId, "广告onAdResize");
  };

  t.prototype.forbidderAd = function (t) {
    console.warn(this.adUnitId, "执行禁用", t);
    this.isCanShow = !t;

    if (t) {
      this.hideAd(!1);
    }
  };

  t.prototype.hideAd = function (t) {
    console.warn(this.adUnitId, "执行隐藏");
    t ? this.isConsume && this.destroyAd() : this.showing && this.adIns.hide();
  };

  t.prototype.destroyAd = function (t) {
    if (void 0 === t) {
      t = !1;
    }

    this.isLoaded = !1;
    this.isAutoShow = !1;
    this.isConsume = !1;
    this.showing = !1;
    this.hideing = !1;

    if (!t) {
      this.showCallback = null;
      this.closeCallback = null;
      this.errorCallback = null;
    }

    console.warn(this.adUnitId, "执行销毁");
  };

  t.prototype.reCreateAd = function (t) {
    var e = this;
    console.warn(this.adUnitId, "执行重建");
    this.destroyAd(t);
    this.isAutoShow = t;
    setTimeout(function () {
      e.loadAd();
    }, 100);
  };

  t.prototype.pause = function () {
    $audioPlayer["default"].pauseAll();
    cc.director.pause();
  };

  t.prototype.resume = function () {
    cc.director.resume();
    $audioPlayer["default"].resumeAll();
  };

  return t;
}();

exports.BaseAd = n;

cc._RF.pop();