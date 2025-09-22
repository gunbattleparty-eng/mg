"use strict";
cc._RF.push(module, 'c644efCKENC8KfT6GeHzEN2', 'OPPOGamePortal');
// game_script/scripts/OPPOGamePortal.js

"use strict";

var o = window.qg;

var n = function () {
  function t() {
    this.adUnitId = null;
    this._adIns = null;
    this.isLoaded = !1;
    this.isAutoShow = !1;
    this.isConsume = !1;
    this.showing = !1;
    this.onLoad = null;
    this.onError = null;
    this.onClose = null;
    this.showCallback = null;
    this.closeCallback = null;
    this.errorCallback = null;
  }

  t.prototype.loadAd = function () {
    if (this.adUnitId) {
      if (o && o.createGamePortalAd) {
        var t = {
          adUnitId: this.adUnitId
        };
        this._adIns = o.createGamePortalAd(t);

        if (this._adIns.onLoad) {
          this._adIns.onLoad(this.onLoad);
        }

        if (this._adIns.onClose) {
          this._adIns.onClose(this.onClose);
        }

        if (this._adIns.onError) {
          this._adIns.onError(this.onError);
        }

        this.isLoaded = !1;

        this._adIns.load();
      } else {
        console.warn("当前平台不支持创建OPPOGamePortal");
      }
    } else {
      console.error("oppo OPPOGamePortal ID为空");
    }
  };

  t.prototype.initAd = function (t) {
    this.adUnitId = t;
    this.onLoad = this.onAdLoad.bind(this);
    this.onClose = this.onAdClose.bind(this);
    this.onError = this.onAdError.bind(this);
  };

  t.prototype.showGamePortal = function (t, e, i) {
    var o = this;
    this.showCallback = t;
    this.closeCallback = e;
    this.errorCallback = i;
    return this._adIns ? this.isConsume ? this.reCreateAd(!0) : this.isLoaded ? void (this.showing ? console.warn(this.adUnitId, ":正在显示中，不给显示") : this._adIns ? this._adIns.show && this._adIns.show().then(function () {
      o.showing = !0;

      if (o.showCallback) {
        o.showCallback();
      }

      o.showCallback = null;
    })["catch"](function (t) {
      o.showing = !1;
      console.warn("interstitial show error:", t);
      o.destroyAd();
    }) : (console.warn("interstitial,interstitial对象未创建,将在创建完成后自动显示"), this.reCreateAd(!0))) : (console.warn(this.adUnitId, ":未加载完成，稍等"), void (this.isAutoShow = !0)) : (console.warn(this.adUnitId, ":未创建，执行创建"), this.isAutoShow = !0, this.loadAd());
  };

  t.prototype.reCreateAd = function (t) {
    this.destroyAd();
    this.isAutoShow = t;
    this.loadAd();
  };

  t.prototype.destroyAd = function () {
    console.log(this.adUnitId, ":===destroyAd===");
    this.isLoaded = !1;
    this.isAutoShow = !1;
    this.isConsume = !1;
    this.showCallback = null;
    this.errorCallback = null;

    if (this._adIns) {
      if (this._adIns.offLoad) {
        this._adIns.offLoad(this.onLoad);
      }

      if (this._adIns.offClose) {
        this._adIns.offClose(this.onClose);
      }

      if (this._adIns.offError) {
        this._adIns.offError(this.onError);
      }

      if (this._adIns.destroy) {
        this._adIns.destroy();
      }

      this._adIns = null;
    }
  };

  t.prototype.onAdLoad = function () {
    console.log(this.adUnitId, ":===onAdload===");
    this.isConsume = !1;
    this.isLoaded = !0;
    this.autoShow();
  };

  t.prototype.onAdError = function (t) {
    console.log(this.adUnitId, t);
    this.showing = !1;

    if (this.errorCallback) {
      this.errorCallback();
    }

    this.destroyAd();
  };

  t.prototype.onAdClose = function () {
    console.log(this.adUnitId, ":===onAdClose===");
    this.showing = !1;

    if (this.closeCallback) {
      this.closeCallback();
    }

    this.reCreateAd(!1);
  };

  t.prototype.autoShow = function () {
    if (this.isAutoShow) {
      this.isAutoShow = !1;
      this.showGamePortal(this.showCallback, this.closeCallback, this.errorCallback);
    }
  };

  return t;
}();

exports["default"] = n;

cc._RF.pop();