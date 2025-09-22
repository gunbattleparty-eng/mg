var o;
exports.OPPONativeAd = void 0;
var $baseAdNode = require("./BaseAdNode");
var r = window.qg;
var a = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.adViewName = null;
        e.isOpenPreLoad = !1;
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
            return this.adIns && this.adData
                ? this.isLoaded
                    ? void (
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
                          this.setAdData(this.adData.imgUrlList[0], this.adData.title, this.adData.desc),
                          this.adIns.reportAdShow({
                              adId: this.adData.adId.toString()
                          }))
                      )
                    : (console.warn(this.adUnitId, ":正在加载中，稍等"), void (this.isAutoShow = !0))
                : (console.warn(this.adUnitId, ":无数据执行重建"), this.reCreateAd(!0));
        }
        console.warn(this.adUnitId, ":当前广告禁止显示");
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
exports.OPPONativeAd = a;
