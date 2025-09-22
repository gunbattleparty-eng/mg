var o;
exports.VIVONativeAd = void 0;
var $baseAdNode = require("./BaseAdNode");
var r = window.qg;
var a = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.adViewName = null;
        return e;
    }
    __extends(e, t);
    e.prototype.loadAd = function () {
        if (this.adUnitId) {
            if (r && r.createNativeAd) {
                var t = {
                    adUnitId: this.adUnitId
                };
                this.adIns = r.createNativeAd(t);
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
            console.error("vivoNative ID为空");
        }
    };
    e.prototype.showNativeAd = function (t, e, i, o) {
        var n = this;
        this.showCallback = e;
        this.errorCallback = o;
        this.closeCallback = i;
        if (this.isCanShow) {
            return this.hideing || !this.isLoaded
                ? (console.warn(this.adUnitId, ":正在隐藏或加载中，稍等"), void (this.isAutoShow = !0))
                : !this.adIns || this.adData
                ? this.reCreateAd(!0)
                : void (
                      this.isLoaded &&
                      this.adData &&
                      ((this.isConsume = !0),
                      this.createNativeAd(
                          t,
                          function () {
                              if (n.adIns && n.adData) {
                                  n.adIns.reportAdClick({
                                      adId: n.adData.adId.toString()
                                  });
                              }
                              if (n.showCallback) {
                                  n.showCallback();
                              }
                              n.destroyAd();
                              n.reCreateAd(!1);
                          },
                          function () {
                              if (n.closeCallback) {
                                  n.closeCallback();
                              }
                              n.reCreateAd(!1);
                          }
                      ),
                      this.setAdData(this.adData.icon, this.adData.title, this.adData.desc),
                      this.adIns.reportAdShow({
                          adId: this.adData.adId.toString()
                      }))
                  );
        }
        console.warn(this.adUnitId, ":当前广告禁止显示");
    };
    e.prototype.forbiddenNativeAd = function (t) {
        this.isCanShow = !t;
        if (t && this.isConsume) {
            this.hideNativeAd(!1);
        }
    };
    e.prototype.hideNativeAd = function (t) {
        t && this.isConsume ? (this.destroyAd(), this.reCreateAd(!1)) : this.destroyAd();
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
            this.adData = i;
            this.autoShow();
        }
    };
    e.prototype.onAdError = function (e) {
        t.prototype.onAdError.call(this, e);
        console.error("onAdError", this.adUnitId, e);
        if (this.errorCallback) {
            this.errorCallback();
        }
        this.destroyAd();
    };
    e.prototype.onAdClose = function (e) {
        t.prototype.onAdClose.call(this, e);
        this.destroyNativeAdNode();
    };
    return e;
})($baseAdNode.default);
exports.VIVONativeAd = a;
