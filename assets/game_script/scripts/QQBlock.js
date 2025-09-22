var o;
exports.QQBlock = void 0;
var $aDConfig = require("./ADConfig");
var $baseAd = require("./BaseAd");
var a = window.qq;
var l = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.style = null;
        return e;
    }
    __extends(e, t);
    e.prototype.loadAd = function () {
        if (this.adUnitId) {
            if (a && a.createBlockAd) {
                var t = this.style || {};
                var e = {
                    adUnitId: this.adUnitId,
                    style: {
                        left: t.left || 20,
                        top: t.top || 200
                    },
                    size: $aDConfig.ADConfig.qq.block_size,
                    orientation: $aDConfig.ADConfig.qq.block_orientation
                };
                this.adIns = a.createBlockAd(e);
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
                console.warn("当前平台不支持创建Block");
            }
        } else {
            console.error("QQ Block ID为空");
        }
    };
    e.prototype.showBlock = function (t, e, i) {
        var o = this;
        this.showCallback = e;
        this.errorCallback = i;
        if (this.isCanShow) {
            if (!this.adIns) {
                console.warn(this.adUnitId, ":未创建，执行创建");
                this.isAutoShow = !0;
                this.loadAd();
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
                    }
                    this.style = t;
                    this.isConsume = !1;
                    if (this.adIns.show) {
                        var n = this.adIns.show();
                        n && n.then
                            ? n
                                  .then(function () {
                                      o.isConsume = !0;
                                      if (o.showCallback) {
                                          o.showCallback();
                                      }
                                      o.showCallback = null;
                                  })
                                  .catch(function (t) {
                                      console.warn(o.adUnitId, ":show错误，重新加载", t);
                                      o.reCreateAd(!0);
                                  })
                            : (console.warn(this.adUnitId, ":show显示失败，重新加载"), this.reCreateAd(!0));
                    }
                }
            }
        } else {
            console.warn(this.adUnitId, ":当前广告禁止显示");
        }
    };
    e.prototype.forbiddenBlock = function (t) {
        this.isCanShow = !t;
        if (t && this.isConsume) {
            this.hideBlock(!1);
        }
    };
    e.prototype.hideBlock = function (t) {
        t ? (this.destroyAd(), this.reCreateAd(!1)) : this.adIns && this.adIns.hide && this.adIns.hide();
    };
    e.prototype.onAdResize = function (t) {
        console.warn("onBlockResize", t);
        var e = a.getSystemInfoSync();
        var i = e.windowWidth;
        var o = e.windowHeight;
        var n = this.style || {};
        null != n.top ? (this.adIns.style.top = n.top) : (this.adIns.style.top = Math.round(o - t.height - 50));
        null != n.left ? (this.adIns.style.left = n.left) : (this.adIns.style.left = Math.round((i - t.width) / 2));
    };
    e.prototype.reCreateAd = function (t) {
        this.destroyAd();
        this.isAutoShow = t;
        this.loadAd();
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
            this.showBlock(this.style, this.showCallback, this.errorCallback);
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
        if (this.errorCallback) {
            this.errorCallback();
        }
        this.destroyAd();
    };
    return e;
})($baseAd.BaseAd);
exports.QQBlock = l;
