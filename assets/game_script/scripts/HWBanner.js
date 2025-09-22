var o;
exports.HWBanner = void 0;
var $baseAd = require("./BaseAd");
var r = window.qg;
var a = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.style = null;
        e.isOpenPreLoad = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.loadAd = function () {
        var t = this;
        if (this.adUnitId) {
            if (r && r.createBannerAd) {
                var e = r.getSystemInfoSync();
                console.log("on getSystemInfoSync: success =" + JSON.stringify(e));
                var i = e.safeArea.height;
                var o = {
                    adUnitId: this.adUnitId,
                    style: {
                        top: i - 57,
                        left: 0,
                        height: 57,
                        width: 360
                    }
                };
                this.adIns = r.createBannerAd(o);
                if (this.adIns.onLoad) {
                    this.adIns.onLoad(this.onLoad);
                }
                if (this.adIns.onClose) {
                    this.adIns.onClose(this.onAdClose);
                }
                if (this.adIns.onError) {
                    this.adIns.onError(this.onError);
                }
                setTimeout(function () {
                    t.isLoaded = !0;
                    t.autoShow();
                }, 1e3);
            } else {
                console.warn("当前平台不支持创建banner");
            }
        } else {
            console.error("Banner ID为空");
        }
    };
    e.prototype.onAdLoad = function () {
        t.prototype.onAdLoad.call(this);
        if (this.showCallback) {
            this.showCallback();
        }
        this.showCallback = null;
    };
    e.prototype.showBanner = function (t, e, i) {
        this.showCallback = e;
        this.errorCallback = i;
        if (this.isCanShow) {
            if (!this.adIns) {
                console.warn(this.adUnitId, ":未创建，执行创建");
                this.isAutoShow = !0;
                this.loadAd();
            }
            return this.isConsume
                ? (console.log("banner 已消耗重新创建"), this.reCreateAd(!0))
                : this.isLoaded
                ? ((this.isConsume = !1),
                  this.adIns.show ? ((this.isConsume = !0), this.adIns.show(), void console.log("显示banner")) : void 0)
                : (console.warn(this.adUnitId, ":未加载完成，稍等"), void (this.isAutoShow = !0));
        }
        console.warn(this.adUnitId, ":当前广告禁止显示");
    };
    e.prototype.forbiddenBanner = function (t) {
        this.isCanShow = !t;
        if (t && this.isConsume) {
            this.hideBanner(!1);
        }
    };
    e.prototype.hideBanner = function (t) {
        t && this.isConsume
            ? (this.destroyAd(), this.reCreateAd(!1))
            : this.adIns && this.adIns.hide && this.adIns.hide();
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
            if (this.adIns.offClose) {
                this.adIns.offClose(this.onAdClose);
            }
            if (this.adIns.offSize) {
                this.adIns.offSize(this.onResize);
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
})($baseAd.BaseAd);
exports.HWBanner = a;
