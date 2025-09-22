"use strict";
cc._RF.push(module, '392b16aJA9Jwp0bhmkvomfB', 'QQBanner');
// game_script/scripts/QQBanner.js

"use strict";

var o;
exports.QQBanner = void 0;

var $baseAd = require("./BaseAd");

var r = window.qq;

var a = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isOpenPreLoad = !1;
    e.style = null;
    return e;
  }

  __extends(e, t);

  e.prototype.loadAd = function () {
    if (this.adUnitId) {
      if (r && r.createBannerAd) {
        var t = r.getSystemInfoSync().windowWidth;
        var e = this.style || {};
        var i = {
          adUnitId: this.adUnitId,
          style: {
            left: e.left || 0,
            top: e.top || 0,
            width: t
          }
        };
        this.adIns = r.createBannerAd(i);

        if (this.adIns.onLoad) {
          this.adIns.onLoad(this.onLoad);
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
      console.error("QQ Banner ID为空");
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
        return this.loadAd();
      }

      if (this.isConsume) {
        this.reCreateAd(!0);
      } else {
        {
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

          this.isConsume = !1;

          if (this.adIns.show) {
            var n = this.adIns.show();
            n && n.then ? n.then(function () {
              o.isConsume = !0;

              if (o.showCallback) {
                o.showCallback();
              }

              o.showCallback = null;
            })["catch"](function (t) {
              console.warn(o.adUnitId, ":show错误，重新加载", t);
              o.reCreateAd(!0);
            }) : (console.warn(this.adUnitId, ":show显示失败，重新加载"), this.reCreateAd(!0));
          }
        }
      }
    } else {
      console.warn(this.adUnitId, ":当前广告禁止显示");
    }
  };

  e.prototype.forbiddenBanner = function (t) {
    this.isCanShow = !t;

    if (t && this.isConsume) {
      this.hideBanner(!1);
    }
  };

  e.prototype.hideBanner = function (t) {
    t && this.isConsume ? (this.destroyAd(), this.reCreateAd(!1)) : this.adIns && this.adIns.hide && this.adIns.hide();
  };

  e.prototype.onAdResize = function (t) {
    console.warn("onBannerResize", t);
    var e = r.getSystemInfoSync();
    var i = e.windowWidth;
    var o = e.windowHeight;
    var n = this.style || {};
    null != n.top ? this.adIns.style.top = n.top : this.adIns.style.top = Math.round(o - t.height + 0.1);
    null != n.left ? this.adIns.style.left = n.left : this.adIns.style.left = Math.round((i - t.width) / 2 + 0.1);
  };

  e.prototype.reCreateAd = function (t) {
    var e = this;
    this.destroyAd();
    this.isAutoShow = t;
    setTimeout(function () {
      e.loadAd();
    }, 100);
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
    console.warn("onAdError", this.adUnitId, t);

    if (this.errorCallback) {
      this.errorCallback();
    }

    this.destroyAd();
  };

  return e;
}($baseAd.BaseAd);

exports.QQBanner = a;

cc._RF.pop();