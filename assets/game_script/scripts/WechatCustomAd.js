var o;
var $baseAd = require("./BaseAd");
var r = window.wx;
var a = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.isOpenPreLoad = !1;
        e.style = null;
        return e;
    }
    __extends(e, t);
    e.prototype.setOpenPreLoadCustomAd = function (t) {
        this.isOpenPreLoad = !0;
        this.style = t;
    };
    e.prototype.loadAd = function () {
        if (this.adUnitId) {
            if (r && r.createCustomAd) {
                var t = {
                    adUnitId: this.adUnitId,
                    adIntervals: 0,
                    style: {
                        left: this.style.left || 0,
                        top: this.style.top || 0,
                        width: this.style.width || null,
                        fixed: !0
                    }
                };
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
            } else {
                console.warn("当前平台不支持创建customAd");
            }
        } else {
            console.error("Customer ID为空");
        }
    };
    e.prototype.showCustomAd = function (t, e, i, o) {
        var n = this;
        this.showCallback = e;
        this.closeCallback = i;
        this.errorCallback = o;
        this.style = t;
        if (this.isCanShow) {
            if (!this.adIns) {
                console.warn(this.adUnitId, ":未创建，执行创建");
                this.isAutoShow = !0;
                return void this.loadAd();
            }
            if (this.hideing || !this.isLoaded) {
                console.warn(this.adUnitId, ":正在隐藏或加载中，稍等");
                return void (this.isAutoShow = !0);
            }
            this.showing = !1;
            this.isConsume = !0;
            if (this.adIns.show) {
                var s = this.adIns.show();
                s && s.then
                    ? s
                          .then(function () {
                              n.showing = !0;
                              if (n.showCallback) {
                                  n.showCallback();
                              }
                              n.showCallback = null;
                          })
                          .catch(function (t) {
                              console.warn(n.adUnitId, ":show错误，重新加载", t);
                              n.reCreateAd(!0);
                          })
                    : (console.warn(this.adUnitId, ":show显示失败，重新加载"), this.reCreateAd(!0));
            } else {
                console.error(this.adUnitId, ":未知错误");
            }
        } else {
            console.warn(this.adUnitId, ":当前广告禁止显示", this.isCanShow);
        }
    };
    e.prototype.destroyAd = function () {
        t.prototype.destroyAd.call(this);
        if (this.adIns) {
            if (this.adIns.offLoad) {
                this.adIns.offLoad(this.onLoad);
            }
            if (this.adIns.offHide) {
                this.adIns.offLoad(this.onHide);
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
    e.prototype.autoShow = function () {
        if (this.isAutoShow) {
            this.isAutoShow = !1;
            this.showCustomAd(this.style, this.showCallback, this.closeCallback, this.errorCallback);
        }
    };
    e.prototype.onAdLoad = function (e) {
        t.prototype.onAdLoad.call(this, e);
        this.isConsume = !1;
        this.isLoaded = !0;
        this.autoShow();
    };
    e.prototype.onAdError = function (t) {
        console.log("原生模板onAdError", this.adUnitId, t);
        this.showing = !1;
        if (this.errorCallback) {
            this.errorCallback();
        }
        this.destroyAd();
    };
    e.prototype.onAdClose = function () {
        console.log(":===onAdClose===");
        this.showing = !1;
        if (this.closeCallback) {
            this.closeCallback();
        }
    };
    e.prototype.onAdHide = function () {
        console.log(":===onAdHide===");
        this.showing = !1;
        this.hideing = !1;
        if (this.closeCallback) {
            this.closeCallback();
        }
    };
    return e;
})($baseAd.BaseAd);
exports.default = a;
