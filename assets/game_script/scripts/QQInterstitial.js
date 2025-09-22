var o;
var $baseAd = require("./BaseAd");
var r = window.qq;
var a = (function (t) {
    function e() {
        return (null !== t && t.apply(this, arguments)) || this;
    }
    __extends(e, t);
    e.prototype.loadAd = function () {
        if (this.adUnitId) {
            if (r && r.createInterstitialAd) {
                var t = {
                    adUnitId: this.adUnitId
                };
                this.adIns = r.createInterstitialAd(t);
                if (this.adIns.onLoad) {
                    this.adIns.onLoad(this.onLoad);
                }
                if (this.adIns.onClose) {
                    this.adIns.onClose(this.onClose);
                }
                if (this.adIns.onErro) {
                    this.adIns.onError(this.onError);
                }
                this.isLoaded = !1;
                this.adIns.load();
            } else {
                console.warn("当前平台不支持创建banner");
            }
        } else {
            console.error("QQ 插屏 ID为空");
        }
    };
    e.prototype.showInterstitial = function (t, e, i) {
        var o = this;
        this.showCallback = t;
        this.closeCallback = e;
        this.errorCallback = i;
        return this.adIns
            ? this.isConsume
                ? this.reCreateAd(!0)
                : this.isLoaded
                ? void (this.showing
                      ? console.warn(this.adUnitId, ":正在显示中，不给显示")
                      : this.adIns
                      ? this.adIns.show &&
                        this.adIns
                            .show()
                            .then(function () {
                                o.showing = !0;
                                if (o.showCallback) {
                                    o.showCallback();
                                }
                                o.showCallback = null;
                            })
                            .catch(function (t) {
                                o.showing = !1;
                                console.warn("interstitial show error:", t);
                                o.destroyAd();
                            })
                      : (console.warn("interstitial,interstitial对象未创建,将在创建完成后自动显示"),
                        (this.showing = !1),
                        this.reCreateAd(!0)))
                : (console.warn(this.adUnitId, ":未加载完成，稍等"), void (this.isAutoShow = !0))
            : (console.warn(this.adUnitId, ":未创建，执行创建"), (this.isAutoShow = !0), this.loadAd());
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
                this.adIns.offClose(this.onClose);
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
    e.prototype.onAdLoad = function () {
        t.prototype.onAdLoad.call(this);
        this.isConsume = !1;
        this.isLoaded = !0;
        this.autoShow();
    };
    e.prototype.onAdError = function (e) {
        t.prototype.onAdError.call(this, e);
        this.showing = !1;
        if (this.errorCallback) {
            this.errorCallback();
        }
        this.destroyAd();
    };
    e.prototype.onAdClose = function () {
        t.prototype.onAdClose.call(this);
        this.showing = !1;
        if (this.closeCallback) {
            this.closeCallback();
        }
        this.reCreateAd(!1);
    };
    e.prototype.autoShow = function () {
        if (this.isAutoShow) {
            this.isAutoShow = !1;
            this.showInterstitial(this.showCallback, this.closeCallback, this.errorCallback);
        }
    };
    return e;
})($baseAd.BaseAd);
exports.default = a;
