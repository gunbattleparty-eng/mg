"use strict";
cc._RF.push(module, 'd1b45VXjNxBrJhWY57+VyPO', 'OPPOBanner');
// game_script/scripts/OPPOBanner.js

"use strict";

var o;
exports.OPPOBanner = void 0;

var $aDConfig = require("./ADConfig");

var $baseAd = require("./BaseAd");

var a = window.qg;

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
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
            height: 0
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
      console.warn("OPPOBanner ID为空");
    }
  };

  e.prototype.showBanner = function (t, e, i) {
    var o = this;
    this.showCallback = e;
    this.errorCallback = i;

    if (this.isCanShow) {
      if (this.hideing) {
        console.warn(this.adUnitId, ":正在影藏中稍后显示");
        return void (this.isAutoShow = !0);
      }

      if (!this.adIns) {
        console.warn(this.adUnitId, ":未创建，执行创建");
        this.isAutoShow = !0;
        return this.loadAd();
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

  e.prototype.hideBanner = function (t) {
    t && this.isConsume ? (this.destroyAd(), this.reCreateAd(!1)) : this.adIns && this.adIns.hide && this.adIns.hide();
  };

  e.prototype.forbiddenBanner = function (t) {
    this.isCanShow = !t;

    if (t && this.isConsume) {
      this.hideBanner(!1);
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

  e.prototype.onAdHide = function () {
    console.log(this.adUnitId, "===onAdHide===");
    this.hideing = !1;
    this.autoShow();
  };

  e.prototype.destroyAd = function () {
    t.prototype.destroyAd.call(this);

    if (this.adIns) {
      if (this.adIns.offLoad) {
        this.adIns.offLoad(this.onLoad);
      }

      if (this.adIns.offHide) {
        this.adIns.offHide(this.onHide);
      }

      if (this.adIns.offResize) {
        this.adIns.offResize(this.onResize);
      }

      if (this.adIns.offError) {
        this.adIns.offError(this.onError);
      }
    }
  };

  return e;
}($baseAd.BaseAd);

exports.OPPOBanner = l;

cc._RF.pop();