var $audioPlayer = require("./AudioPlayer");
var n = (function () {
    function t() {
        this.showCallback = null;
        this.closeCallback = null;
        this.videoEndCallback = null;
        this._isLoadComplete = !1;
        this._gameMusicVolume = -1;
        this._gameEffectsVolume = -1;
        this._onLoadCallbackRef = null;
        this._onCloseCallbackRef = null;
        this._onErrorCallbackRef = null;
        this._errorReloadCount = 0;
        this._lastCallShowTime = -1;
        this.adUnitId = null;
    }
    t.prototype.initAd = function (t) {
        console.log("rewardedVideo init");
        this.adUnitId = t;
        this._onLoadCallbackRef = this.onRewardedVideoLoad.bind(this);
        this._onCloseCallbackRef = this.onRewardedVideoClose.bind(this);
        this._onErrorCallbackRef = this.onRewardedVideoError.bind(this);
        this.createRewardedVideo();
    };
    t.prototype.showRewardedVideo = function (t, e, i) {
        console.log("showRewardedVideo");
        var n = new Date().getTime();
        this._lastCallShowTime = n;
        this.showCallback = t;
        this.closeCallback = e;
        this.videoEndCallback = i;
        this._gameMusicVolume = $audioPlayer.default.musicVolume;
        this._gameEffectsVolume = $audioPlayer.default.effectVolume;
    };
    t.prototype.destroyRewardedVideo = function () {
        console.log("destoryRewardedVideo");
        this.showCallback = null;
        this.closeCallback = null;
        this.videoEndCallback = null;
        this._isLoadComplete = !1;
    };
    t.prototype.onRewardedVideoShowSuccessHandler = function () {
        console.log("onRewardedVideoShowSuccess");
        if (this.showCallback) {
            this.showCallback();
        }
        this.pause();
    };
    t.prototype.onRewardedVideoShowFailHandler = function (t) {
        console.log("onRewardedVideoShowFailHandler", t);
        if (this.closeCallback) {
            this.closeCallback();
        }
        this.showCallback = null;
        this.closeCallback = null;
        this.videoEndCallback = null;
        this.resume();
        if (this._errorReloadCount < 2) {
            this.destroyRewardedVideo();
            this.createRewardedVideo();
            this._errorReloadCount++;
        }
    };
    t.prototype.onRewardedVideoNotLoadHandler = function () {
        console.log("onRewardedVideoNotLoadHandler");
        this.resume();
        this.destroyRewardedVideo();
        this.createRewardedVideo();
    };
    t.prototype.onRewardedVideoErrorHandler = function (t) {
        console.log("onRewardedVideoErrorHandler", t);
        this.resume();
        if (this._errorReloadCount < 2) {
            this._errorReloadCount++;
            console.log("重新加载激励视频");
            this.destroyRewardedVideo();
            this.createRewardedVideo();
        }
    };
    t.prototype.onRewardedVideoCloseHandler = function (t) {
        console.log("onRewardedVideoCloseHandler", t);
        this._isLoadComplete = !1;
        this.resume();
        t ? this.videoEndCallback && this.videoEndCallback() : this.closeCallback && this.closeCallback();
        this.showCallback = null;
        this.closeCallback = null;
        this.videoEndCallback = null;
    };
    t.prototype.pause = function () {
        $audioPlayer.default.pauseAll();
        console.log("暂停");
        cc.game.pause();
    };
    t.prototype.resume = function () {
        cc.game.resume();
        console.log("开始");
        $audioPlayer.default.resumeAll();
    };
    return t;
})();
exports.default = n;
