var o;
exports.TTAd = void 0;
var $aDConfig = require("./ADConfig");
var $generalAd = require("./GeneralAd");
var $tTBanner = require("./TTBanner");
var $tTInterstitial = require("./TTInterstitial");
var $tTNativeToScene = require("./TTNativeToScene");
var $tTRecorder = require("./TTRecorder");
var $tTReport = require("./TTReport");
var $tTRewardedVideo = require("./TTRewardedVideo");
var $tTShare = require("./TTShare");
var h = (function (t) {
    function e() {
        var e = t.call(this) || this;
        e.ttReward = null;
        e.ttBanner = null;
        e.ttInterstitial = null;
        e.ttRecord = null;
        e.ttShare = null;
        e.ttReport = null;
        e.ttNativeToScene = null;
        console.warn("初始化头条广告...");
        e.ttNativeToScene = new $tTNativeToScene.TTNativeToScene();
        e.ttReward = new $tTRewardedVideo.TTRewardedVideo();
        e.ttReward.initAd($aDConfig.ADConfig.tt.rewarded_video_id);
        e.ttBanner = new $tTBanner.TTBanner();
        e.ttBanner.initAd($aDConfig.ADConfig.tt.banner_id);
        e.ttInterstitial = new $tTInterstitial.default();
        e.ttInterstitial.initAd($aDConfig.ADConfig.tt.interstitial_id);
        e.ttRecord = new $tTRecorder.default();
        e.ttRecord.init();
        e.ttShare = new $tTShare.default();
        e.ttShare.init();
        e.ttReport = new $tTReport.default();
        return e;
    }
    __extends(e, t);
    e.prototype.showRewardedVideo = function (t, e, i) {
        this.ttReward.showRewardedVideo(t, e, i);
    };
    e.prototype.showBanner = function (t, e, i) {
        this.ttBanner.showBanner(t, e, i);
    };
    e.prototype.hideBanner = function (t) {
        this.ttBanner.hideBanner(t);
    };
    e.prototype.forbiddenBanner = function (t) {
        this.ttBanner.forbiddenBanner(t);
    };
    e.prototype.showInterstitial = function (t, e, i) {
        this.ttInterstitial.showInterstitial(t, e, i);
    };
    e.prototype.startRecorder = function (t) {
        this.ttRecord.startRecorder(t);
    };
    e.prototype.stopRecorder = function (t) {
        this.ttRecord.stopRecorder(t);
    };
    e.prototype.getRecordVideoPath = function () {
        return this.ttRecord.getRecordVideoPath();
    };
    e.prototype.share = function (t) {
        this.ttShare.share(t);
    };
    e.prototype.report = function (t, e) {
        this.ttReport.report(t, e);
    };
    e.prototype.checkScene = function (t, e) {
        this.ttNativeToScene.checkScene(t, e);
    };
    e.prototype.navigateToScene = function (t, e) {
        this.ttNativeToScene.navigateToScene(t, e);
    };
    e.prototype.isSidebarCome = function () {
        return this.ttNativeToScene.sidebarCome;
    };
    e.prototype.closeScene = function () {
        this.ttNativeToScene.closeScene();
    };
    return e;
})($generalAd.GeneralAd);
exports.TTAd = h;
