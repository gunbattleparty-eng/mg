var o;
exports.TTRewardedVideo = void 0;
var $audioPlayer = require("./AudioPlayer");
var $baseAd = require("./BaseAd");
var a = window.tt;
var l = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.videoEndCallback = null;
        e.lastTime = 0;
        e.tryCount = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.loadAd = function () {
        if (this.adUnitId) {
            if (a && a.createRewardedVideoAd) {
                var t = {
                    adUnitId: this.adUnitId
                };
                console.log("创建激励视频", t);
                this.adIns = a.createRewardedVideoAd(t);
                if (this.adIns.onLoad) {
                    this.adIns.onLoad(this.onLoad);
                }
                if (this.adIns.onClose) {
                    this.adIns.onClose(this.onClose);
                }
                if (this.adIns.onError) {
                    this.adIns.onError(this.onError);
                }
                this.adIns.load();
            } else {
                console.warn("当前平台不支持创建激励视频");
            }
        } else {
            console.error("头条激励视频ID为空");
        }
    };
    e.prototype.showRewardedVideo = function (t, e, i) {
        this.tryCount = 0;
        this.show(t, e, i);
    };
    e.prototype.show = function (t, e, i) {
        var o = this;
        this.showCallback = t;
        this.closeCallback = e;
        this.videoEndCallback = i;
        this.musicVolume = $audioPlayer.default.musicVolume;
        this.effectsVolume = $audioPlayer.default.effectVolume;
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
                    if (this.showing) {
                        console.warn(this.adUnitId, "广告正在显示中");
                    } else {
                        this.showing = !1;
                        if (this.adIns.show) {
                            var n = this.adIns.show();
                            n && n.then
                                ? n
                                      .then(function () {
                                          o.tryCount = 0;
                                          o.isConsume = !0;
                                          o.showing = !0;
                                          if (o.showCallback) {
                                              o.showCallback();
                                          }
                                          o.showCallback = null;
                                          o.pause();
                                      })
                                      .catch(function (t) {
                                          console.warn(o.adUnitId, ":show错误，重新加载", t);
                                          o.reCreateAd(!0);
                                          o.resume();
                                      })
                                : (console.warn(this.adUnitId, ":show显示失败，重新加载"),
                                  this.reCreateAd(!0),
                                  this.resume());
                        } else {
                            this.resume();
                            console.error(this.adUnitId, ":未知错误");
                        }
                    }
                }
            }
        } else {
            console.warn(this.adUnitId, ":当前广告禁止显示");
        }
    };
    e.prototype.reCreateAd = function (t) {
        this.tryCount++;
        this.tryCount >= 4 ? (this.isAutoShow = !1) : (this.destroyAd(), (this.isAutoShow = t), this.loadAd());
    };
    e.prototype.autoShow = function () {
        if (this.isAutoShow) {
            this.isAutoShow = !1;
            this.showRewardedVideo(this.showCallback, this.closeCallback, this.videoEndCallback);
        }
    };
    e.prototype.onAdLoad = function () {
        console.log(this.adUnitId, ":===onAdload===");
        this.isConsume = !1;
        this.isLoaded = !0;
        this.autoShow();
    };
    e.prototype.onAdError = function (t) {
        console.log("激励视频onAdError", this.adUnitId, t);
        this.showing = !1;
        this.resume();
        this.destroyAd();
    };
    e.prototype.onAdClose = function (t) {
        console.log(":===onAdClose===");
        this.showing = !1;
        t && t.isEnded ? this.videoEndCallback && this.videoEndCallback() : this.closeCallback && this.closeCallback();
        this.isOpenPreLoad ? this.adIns.load() : this.destroyAd();
        this.resume();
    };
    e.prototype.destroyAd = function () {
        this.isLoaded = !1;
        this.isAutoShow = !1;
        this.isConsume = !1;
        this.showCallback = null;
        this.closeCallback = null;
        this.videoEndCallback = null;
        this.showing = !1;
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
    return e;
})($baseAd.BaseAd);
exports.TTRewardedVideo = l;
