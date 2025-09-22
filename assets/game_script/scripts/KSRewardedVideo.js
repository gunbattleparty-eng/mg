var o;
var $baseRewardedVideo = require("./BaseRewardedVideo");
var r = window.ks;
var a = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e._rewardedVideoAd = null;
        return e;
    }
    __extends(e, t);
    e.prototype.createRewardedVideo = function () {
        console.log("createRewardedVideo");
        if (this.adUnitId) {
            if (r && r.createRewardedVideoAd) {
                var t = {
                    adUnitId: this.adUnitId
                };
                this._rewardedVideoAd = r.createRewardedVideoAd(t);
                if (this._rewardedVideoAd.onLoad) {
                    this._rewardedVideoAd.onLoad(this._onLoadCallbackRef);
                }
                if (this._rewardedVideoAd.onClose) {
                    this._rewardedVideoAd.onClose(this._onCloseCallbackRef);
                }
                if (this._rewardedVideoAd.onError) {
                    this._rewardedVideoAd.onError(this._onErrorCallbackRef);
                }
            } else {
                console.warn("当前平台不支持创建激励视频");
            }
        } else {
            console.warn("激励视频组件创建失败,未配置pos_id");
        }
    };
    e.prototype.showRewardedVideo = function (e, i, o) {
        var n = this;
        console.log("微信激励视频开始：");
        new Date().getTime() - this._lastCallShowTime < 2e3
            ? console.warn("showRewardedVideo,调用太频繁")
            : (t.prototype.showRewardedVideo.call(this, e, i, o),
              this._rewardedVideoAd
                  ? ((this._isLoadComplete = !0),
                    this._isLoadComplete
                        ? this._rewardedVideoAd.show &&
                          this._rewardedVideoAd
                              .show()
                              .then(function () {
                                  n._errorReloadCount = 0;
                                  n.onRewardedVideoShowSuccessHandler();
                              })
                              .catch(function (t) {
                                  console.log("微信激励视频报错：", t);
                                  n.onRewardedVideoShowFailHandler(t);
                              })
                        : (console.log("微信激励视频没加载好："), this.onRewardedVideoNotLoadHandler()))
                  : (console.log("微信激励视频没实例："), this.onRewardedVideoNotLoadHandler()));
    };
    e.prototype.destroyRewardedVideo = function () {
        t.prototype.destroyRewardedVideo.call(this);
        if (this._rewardedVideoAd) {
            if (this._rewardedVideoAd.offLoad) {
                this._rewardedVideoAd.offLoad(this._onLoadCallbackRef);
            }
            if (this._rewardedVideoAd.offClose) {
                this._rewardedVideoAd.offClose(this._onCloseCallbackRef);
            }
            if (this._rewardedVideoAd.offError) {
                this._rewardedVideoAd.offError(this._onErrorCallbackRef);
            }
            if (this._rewardedVideoAd.destroy) {
                this._rewardedVideoAd.destroy();
            }
            this._rewardedVideoAd = null;
        }
    };
    e.prototype.onRewardedVideoLoad = function () {
        console.log("onRewardedVideoLoad");
        this._isLoadComplete = !0;
    };
    e.prototype.onRewardedVideoClose = function (t) {
        this.onRewardedVideoCloseHandler((t && t.isEnded) || void 0 === t);
    };
    e.prototype.onRewardedVideoError = function (t) {
        this.onRewardedVideoErrorHandler(t);
    };
    return e;
})($baseRewardedVideo.default);
exports.default = a;
