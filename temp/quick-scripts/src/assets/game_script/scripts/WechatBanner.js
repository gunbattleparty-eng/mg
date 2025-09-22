"use strict";
cc._RF.push(module, 'e5475T9dTtDI7HjmXxBPnBZ', 'WechatBanner');
// game_script/scripts/WechatBanner.js

"use strict";

var o;
exports.WechatBanner = void 0;

var $aDConfig = require("./ADConfig");

var $baseAd = require("./BaseAd");

var a = window.wx;

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isOpenPreLoad = !1;
    e.style = null;
    return e;
  }

  __extends(e, t);

  e.prototype.loadAd = function () {
    if (this.adUnitId) {
      if (a && a.createBannerAd) {
        var t = this.style || {};
        var e = {
          adUnitId: this.adUnitId,
          style: {
            left: t.left || 0,
            top: t.top || 0,
            width: t.width || $aDConfig.ADConfig.oppo.banner_width,
            height: 100
          }
        };
        this.adIns = a.createBannerAd(e);

        if (this.adIns.onLoad) {
          this.adIns.onLoad(this.onLoad);
        }

        if (this.adIns.onHide) {
          this.adIns.onHide(this.onHide);
        }

        if (this.adIns.onResize) {
          this.adIns.onResize(this.onResize);
        }

        if (this.adIns.onError) {
          this.adIns.onError(this.onError);
        }
      } else {
        console.warn("当前平台不支持创建banner");
      }
    } else {
      console.warn("Banner ID为空");
    }
  };

  e.prototype.showBanner = function (t, e, i) {
    var o = this;
    this.showCallback = e;
    this.errorCallback = i;

    if (this.isCanShow) {
      if (!this.adIns) {
        console.warn(this.adUnitId, ":未创建，执行创建");
        this.isAutoShow = !0;
        return void this.loadAd();
      }

      if (this.isConsume) {
        return this.reCreateAd(!0);
      }

      if (!this.isLoaded) {
        console.warn(this.adUnitId, ":未加载完成，稍等");
        return void (this.isAutoShow = !0);
      }

      if (this.adIns && t) {
        if (void 0 !== t.top) {
          this.adIns.style.top = t.top;
        }

        if (void 0 !== t.left) {
          this.adIns.style.left = t.left;
        }

        if (void 0 !== t.width) {
          this.adIns.style.width = t.width;
        }
      }

      this.showing = !1;
      this.isConsume = !1;

      if (this.adIns.show) {
        var n = this.adIns.show();
        n && n.then ? n.then(function () {
          o.isConsume = !0;
          o.showing = !0;

          if (o.showCallback) {
            o.showCallback();
          }

          o.showCallback = null;
        })["catch"](function (t) {
          console.warn(o.adUnitId, ":执行显示错误错误，重新加载", t);
          o.reCreateAd(!0);
        }) : (console.warn(this.adUnitId, ":执行显示错误显示失败，重新加载"), this.reCreateAd(!0));
      }
    } else {
      console.warn(this.adUnitId, ":当前广告禁止显示");
    }
  };

  e.prototype.autoShow = function () {
    if (this.isAutoShow) {
      this.isAutoShow = !1;
      this.showBanner(this.style, this.showCallback, this.errorCallback);
    }
  };

  e.prototype.onAdLoad = function () {
    console.log(this.adUnitId, ":===onAdload===");
    this.isConsume = !1;
    this.isLoaded = !0;
    this.autoShow();
  };

  e.prototype.onAdError = function (t) {
    console.error("onAdError", this.adUnitId, t);

    if (this.errorCallback) {
      this.errorCallback();
    }

    this.destroyAd();
  };

  e.prototype.onAdResize = function (t) {
    console.log("onBannerResize", t);
    var e = a.getSystemInfoSync();
    var i = e.windowWidth;
    var o = e.windowHeight;
    var n = this.style || {};
    null != n.top ? this.adIns.style.top = n.top : this.adIns.style.top = Math.round(o - t.height + 0.1);
    null != n.left ? this.adIns.style.left = n.left : this.adIns.style.left = Math.round((i - t.width) / 2 + 0.1);
  };

  e.prototype.destroyAd = function () {
    t.prototype.destroyAd.call(this);

    if (this.adIns) {
      if (this.adIns.offLoad) {
        this.adIns.offLoad(this.onLoad);
      }

      if (this.adIns.offResize) {
        this.adIns.offResize(this.onResize);
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

  return e;
}($baseAd.BaseAd);

exports.WechatBanner = l;

cc._RF.pop();