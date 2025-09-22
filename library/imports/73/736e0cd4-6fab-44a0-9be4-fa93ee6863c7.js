"use strict";
cc._RF.push(module, '736e0zUb6tEoJvk+pPuaGPH', 'HWNativeAd');
// game_script/scripts/HWNativeAd.js

"use strict";

var o;
exports.HWNativeAd = void 0;

var $baseAdNode = require("./BaseAdNode");

var r = window.qg;

var a = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.adViewName = null;
    e.isOpenPreLoad = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.loadAd = function () {
    var t = this;

    if (this.adUnitId) {
      if (r && r.createNativeAd) {
        var e = {
          adUnitId: this.adUnitId,
          fail: function fail() {
            t.destroyAd();
          }
        };
        this.adIns = r.createNativeAd(e);

        if (this.adIns.onLoad) {
          this.adIns.onLoad(this.onLoad);
        }

        if (this.adIns.onError) {
          this.adIns.onError(this.onError);
        }

        this.adIns.load();
      } else {
        console.warn("组件不支持NativeAd");
      }
    } else {
      console.error("OPPONativeAd ID为空");
    }
  };

  e.prototype.showNativeAd = function (t, e, i, o) {
    var n = this;
    this.showCallback = e;
    this.errorCallback = o;
    this.closeCallback = i;
    this.adViewName = t;

    if (this.isCanShow) {
      return this.adIns && this.adData ? this.isLoaded ? void (this.isLoaded && this.adData && (this.isConsume = !0, this.createNativeAd(t, function () {
        if (n.adIns && n.adData) {
          console.log("======", n.adData.adId.toString());
          n.adIns.reportAdClick({
            adId: n.adData.adId.toString()
          });
        }

        if (n.showCallback) {
          n.showCallback();
        }

        n.destroyAd();
      }, function () {
        n.onAdClose(null);
      }), this.setHwAdData(this.adData.imgUrlList[0], this.adData.title, this.adData.desc, this.adData.source), this.adIns.reportAdShow({
        adId: this.adData.adId.toString()
      }))) : (console.warn(this.adUnitId, ":正在加载中，稍等"), void (this.isAutoShow = !0)) : (console.warn(this.adUnitId, ":无数据执行重建"), this.reCreateAd(!0));
    }

    console.warn(this.adUnitId, ":当前广告禁止显示");
  };

  e.prototype.setHwAdData = function (t, e, i, o) {
    if (cc.isValid(this.adNode)) {
      this.setAdData(t, e, i);
      var n = this.adNode.getChildByName("content");

      if (t) {
        n.getChildByName("ad_source").getComponent(cc.Label).string = o || "";
      }
    }
  };

  e.prototype.forbiddenNativeAd = function (t) {
    this.isCanShow = !t;

    if (t && this.isConsume) {
      this.hideNativeAd(!1);
    }
  };

  e.prototype.hideNativeAd = function (e) {
    e && this.isConsume ? (this.destroyAd(), this.reCreateAd(!1)) : t.prototype.destroyNativeAdNode.call(this);
  };

  e.prototype.destroyAd = function () {
    t.prototype.destroyAd.call(this);
    this.adData = null;

    if (this.adIns) {
      if (this.adIns.offLoad) {
        this.adIns.offLoad(this.onLoad);
      }

      if (this.adIns.offError) {
        this.adIns.offError(this.onError);
      }

      if (this.adIns.destroy) {
        this.adIns.destroy();
      }

      this.adIns = null;
    }
  };

  e.prototype.autoShow = function () {
    if (this.isAutoShow) {
      this.isAutoShow = !1;
      this.showNativeAd(this.adViewName, this.showCallback, this.errorCallback);
    }
  };

  e.prototype.onAdLoad = function (e) {
    t.prototype.onAdLoad.call(this, e);
    this.isConsume = !1;
    this.isLoaded = !0;

    if (e && e.adList && e.adList.length > 0) {
      var i = e.adList.pop();
      console.log("广告参数:", i);
      this.adData = i;
      this.autoShow();
    }
  };

  e.prototype.onAdError = function (e) {
    t.prototype.onAdError.call(this, e);
    console.error("onAdError", this.adUnitId, JSON.stringify(e));

    if (this.errorCallback) {
      this.errorCallback();
    }

    this.destroyAd();
  };

  e.prototype.onAdClose = function (e) {
    t.prototype.onAdClose.call(this, e);

    if (this.closeCallback) {
      this.closeCallback();
    }

    this.destroyAd();
  };

  return e;
}($baseAdNode["default"]);

exports.HWNativeAd = a;

cc._RF.pop();