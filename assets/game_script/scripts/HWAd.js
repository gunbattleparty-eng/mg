var o;
exports.HWAd = void 0;
var $aDConfig = require("./ADConfig");
var $generalAd = require("./GeneralAd");
var $hWBanner = require("./HWBanner");
var $hWNativeAd = require("./HWNativeAd");
var $hWRewardedVideo = require("./HWRewardedVideo");
var u = (function (t) {
    function e() {
        var e = t.call(this) || this;
        e.hwReward = null;
        e.hwBanner = null;
        e.hwNativeInterstitial = null;
        console.warn("初始化OPPO广告...");
        e.hwReward = new $hWRewardedVideo.HWRewardedVideo();
        e.hwReward.initAd($aDConfig.ADConfig.huawei.rewarded_video_id);
        e.hwBanner = new $hWBanner.HWBanner();
        e.hwBanner.initAd($aDConfig.ADConfig.huawei.banner_id);
        e.hwNativeInterstitial = new $hWNativeAd.HWNativeAd();
        e.hwNativeInterstitial.initAd($aDConfig.ADConfig.huawei.native_interstitial_id);
        return e;
    }
    __extends(e, t);
    e.prototype.showRewardedVideo = function (t, e, i) {
        this.hwReward.showRewardedVideo(t, e, i);
    };
    e.prototype.showBanner = function (t, e, i) {
        this.hwBanner.showBanner(t, e, i);
    };
    e.prototype.hideBanner = function (t) {
        this.hwBanner.hideBanner(t);
    };
    e.prototype.forbiddenBanner = function (t) {
        this.hwBanner.forbiddenBanner(t);
    };
    e.prototype.showNativeInterstitial = function (t, e, i, o) {
        if ($aDConfig.ADConfig.huawei.native_interstitial_id) {
            this.hwNativeInterstitial.showNativeAd(t, e, i, o);
        }
    };
    e.prototype.forbiddenNativeAd = function (t) {
        if ($aDConfig.ADConfig.huawei.native_interstitial_id) {
            this.hwNativeInterstitial.forbidderAd(t);
        }
    };
    e.prototype.hideNativeAd = function (t) {
        if ($aDConfig.ADConfig.huawei.native_interstitial_id) {
            this.hwNativeInterstitial.hideNativeAd(t);
        }
    };
    return e;
})($generalAd.GeneralAd);
exports.HWAd = u;
