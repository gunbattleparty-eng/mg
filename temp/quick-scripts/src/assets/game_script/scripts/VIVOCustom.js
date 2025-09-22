"use strict";
cc._RF.push(module, '63430J8ENJL37KLQKaO0b29', 'VIVOCustom');
// game_script/scripts/VIVOCustom.js

"use strict";

var o;

var $baseAd = require("./BaseAd");

var r = window.qg;

var a = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.style = null;
    e.isOpenPreLoad = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.loadAd = function () {
    var t;
    var e = r.getSystemInfoSync();
    var i = (e.windowWidth, e.windowHeight);
    t = this.style && !this.style.isBanner ? {
      adUnitId: this.adUnitId,
      style: {
        left: this.style.left || 0,
        top: this.style.top || 0.4 * i
      }
    } : {
      adUnitId: this.adUnitId,
      style: {
        left: this.style.left || 0,
        top: this.style.top || Math.round(i)
      }
    };
    this.isLoaded = !0;
    this.adIns = r.createCustomAd(t);

    if (this.adIns.onLoad) {
      this.adIns.onLoad(this.onLoad);
    }

    if (this.adIns.onClose) {
      this.adIns.onClose(this.onClose);
    }

    if (this.adIns.onHide) {
      this.adIns.onHide(this.onHide);
    }

    if (this.adIns.onError) {
      this.adIns.onError(this.onError);
    }

    this.autoShow();
  };

  e.prototype.showCustomAd = function (e, i, o, n) {
    var s = this;
    this.showCallback = i;
    this.closeCallback = o;
    this.errorCallback = n;

    if (this.isCanShow) {
      this.style = e;

      if (this.adIns) {
        if (this.isLoaded) {
          this.isConsume = !0;

          if (this.adIns.show) {
            var r = this.adIns.show();
            r && r.then ? r.then(function () {
              console.log("customAd show success");

              if (s.showCallback) {
                s.showCallback();
              }

              s.showCallback = null;
            })["catch"](function (i) {
              console.warn("customAd show error:", i);
              console.warn("showCustomAd, customAd显示异常,执行重新创建并显示");
              t.prototype.destroyAd.call(s);
              s.style = e;
              s.reCreateAd(!0);
            }) : (console.warn("showCustomAd, customAd显示异常,执行重新创建并显示"), this.style = e, this.reCreateAd(!0));
          } else {
            console.warn("找不到show");
          }
        } else {
          console.warn("showCustomAd, customAd未加载完毕,执行重新创建并显示");
          this.style = e;
          this.reCreateAd(!0);
        }
      } else {
        console.warn("showCustomAd, customAd对象未创建,执行自动创建并显示");
        this.style = e;
        this.reCreateAd(!0);
      }
    } else {
      console.warn(this.adUnitId, ":当前广告禁止显示");
    }
  };

  e.prototype.reCreateAd = function (t) {
    var e = this;
    this.destroyAd(t);
    this.isAutoShow = t;
    setTimeout(function () {
      e.loadAd();
    }, 100);
  };

  e.prototype.forbidderAd = function (t) {
    this.isCanShow = !t;

    if (t) {
      this.hideAd(!0);
    }
  };

  e.prototype.hideAd = function (t) {
    t ? this.destroyAd() : this.showing && this.adIns.hide();
  };

  e.prototype.destroyAd = function (e) {
    if (void 0 === e) {
      e = !1;
    }

    t.prototype.destroyAd.call(this, e);

    if (this.adIns) {
      if (this.adIns.offLoad) {
        this.adIns.offLoad(this.onLoad);
      }

      if (this.adIns.offClose) {
        this.adIns.offClose(this.onClose);
      }

      if (this.adIns.offHide) {
        this.adIns.offLoad(this.onHide);
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
      this.showCustomAd(this.style, this.showCallback, this.closeCallback, this.errorCallback);
    }
  };

  e.prototype.onAdLoad = function () {
    t.prototype.onAdLoad.call(this);
  };

  e.prototype.onAdError = function (e) {
    t.prototype.onAdError.call(this, e);
    this.showing = !1;

    if (this.errorCallback) {
      this.errorCallback();
    }

    this.errorCallback = null;
    this.destroyAd();
  };

  e.prototype.onAdClose = function () {
    t.prototype.onAdClose.call(this);
    this.showing = !1;

    if (this.closeCallback) {
      this.closeCallback();
    }

    this.closeCallback = null;
    this.destroyAd();

    if (this.isOpenPreLoad) {
      this.reCreateAd(!1);
    }
  };

  e.prototype.onAdHide = function () {
    t.prototype.onAdHide.call(this);
    this.showing = !1;
    this.hideing = !1;

    if (this.isOpenPreLoad) {
      this.reCreateAd(!1);
    }
  };

  return e;
}($baseAd.BaseAd);

exports["default"] = a;

cc._RF.pop();