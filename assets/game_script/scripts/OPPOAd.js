var o;
exports.OPPOAd = void 0;
var $aDConfig = require("./ADConfig");
var $generalAd = require("./GeneralAd");
var $oPPOAddDesktop = require("./OPPOAddDesktop");
var $oPPOBanner = require("./OPPOBanner");
var $oPPOCustom = require("./OPPOCustom");
var $oPPOGamePortal = require("./OPPOGamePortal");
var $oPPONativeAd = require("./OPPONativeAd");
var $oPPORewardedVideo = require("./OPPORewardedVideo");
var f = (function (t) {
    function e() {
        var e = t.call(this) || this;
        e.oppoReward = null;
        e.oppoBanner = null;
        e.oppoGamePortal = null;
        e.customeAds = [];
        e.nativeAds = [];
        e.oppoAddDesktop = null;
        console.warn("初始化OPPO广告...");
        e.oppoReward = new $oPPORewardedVideo.OPPORewardedVideo();
        e.oppoReward.initAd($aDConfig.ADConfig.oppo.rewarded_video_id);
        e.oppoBanner = new $oPPOBanner.OPPOBanner();
        e.oppoBanner.initAd($aDConfig.ADConfig.oppo.banner_id);
        e.oppoGamePortal = new $oPPOGamePortal.default();
        e.oppoGamePortal.initAd($aDConfig.ADConfig.oppo.game_portal_id);
        for (var i = 0; i < $aDConfig.ADConfig.oppo.customer_ad_ids.length; i++) {
            e.customeAds[i] = new $oPPOCustom.default();
            e.customeAds[i].initAd($aDConfig.ADConfig.oppo.customer_ad_ids[i]);
        }
        for (i = 0; i < $aDConfig.ADConfig.oppo.native_ad_ids.length; i++) {
            e.nativeAds[i] = new $oPPONativeAd.OPPONativeAd();
            e.nativeAds[i].initAd($aDConfig.ADConfig.oppo.native_ad_ids[i]);
        }
        e.oppoAddDesktop = new $oPPOAddDesktop.default();
        return e;
    }
    __extends(e, t);
    e.prototype.showRewardedVideo = function (t, e, i) {
        this.oppoReward.showRewardedVideo(t, e, i);
    };
    e.prototype.showBanner = function (t, e, i) {
        this.oppoBanner.showBanner(t, e, i);
    };
    e.prototype.hideBanner = function (t) {
        this.oppoBanner.hideBanner(t);
    };
    e.prototype.forbiddenBanner = function (t) {
        this.oppoBanner.forbiddenBanner(t);
    };
    e.prototype.showGamePortal = function (t, e, i) {
        this.oppoGamePortal.showGamePortal(t, e, i);
    };
    e.prototype.showCustomAd = function (t, e, i, o, n) {
        if ($aDConfig.ADConfig.oppo.customer_ad_ids[t] && "" !== $aDConfig.ADConfig.oppo.customer_ad_ids[t]) {
            return this.customeAds[t]
                ? void this.customeAds[t].showCustomAd(e, i, o, n)
                : console.error("showCustomAd index ", t, "为空");
        }
    };
    e.prototype.forbiddenCustomAd = function (t, e) {
        if ($aDConfig.ADConfig.oppo.customer_ad_ids[t] && "" !== $aDConfig.ADConfig.oppo.customer_ad_ids[t]) {
            return this.customeAds[t]
                ? void this.customeAds[t].forbidderAd(e)
                : console.error("forbiddenCustomAd index ", t, "为空");
        }
    };
    e.prototype.hideCustomAd = function (t, e) {
        if ($aDConfig.ADConfig.oppo.customer_ad_ids[t] && "" !== $aDConfig.ADConfig.oppo.customer_ad_ids[t]) {
            return this.customeAds[t]
                ? void this.customeAds[t].hideAd(e)
                : console.error("hideCustomAd index ", t, "为空");
        }
    };
    e.prototype.showNativeAd = function (t, e, i, o, n) {
        if ($aDConfig.ADConfig.oppo.native_ad_ids[t] && "" !== $aDConfig.ADConfig.oppo.native_ad_ids[t]) {
            return this.nativeAds[t]
                ? void this.nativeAds[t].showNativeAd(e, i, o, n)
                : console.warn("showNativeAd index ", t, "为空");
        }
    };
    e.prototype.forbiddenNativeAd = function (t, e) {
        if ($aDConfig.ADConfig.oppo.native_ad_ids[t] && "" !== $aDConfig.ADConfig.oppo.native_ad_ids[t]) {
            return this.nativeAds[t]
                ? void this.nativeAds[t].forbiddenNativeAd(e)
                : console.error("forbiddenNativeAd index ", t, "为空");
        }
    };
    e.prototype.hideNativeAd = function (t, e) {
        if ($aDConfig.ADConfig.oppo.native_ad_ids[t] && "" !== $aDConfig.ADConfig.oppo.native_ad_ids[t]) {
            return this.nativeAds[t]
                ? void this.nativeAds[t].hideNativeAd(e)
                : console.error("hideNativeAd index ", t, "为空");
        }
    };
    e.prototype.hasShortcutInstalled = function (t) {
        this.oppoAddDesktop.hasShortcutInstalled(t);
    };
    e.prototype.addDesktop = function (t) {
        this.oppoAddDesktop.addDesktop(t);
    };
    return e;
})($generalAd.GeneralAd);
exports.OPPOAd = f;
