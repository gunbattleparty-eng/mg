var o;
exports.WechatAd = void 0;
var $aDConfig = require("./ADConfig");
var $generalAd = require("./GeneralAd");
var $weChatInterstitial = require("./WeChatInterstitial");
var $wechatBanner = require("./WechatBanner");
var $wechatCustomAd = require("./WechatCustomAd");
var $wechatRewardedVideo = require("./WechatRewardedVideo");
var $wechatShare = require("./WechatShare");
var p = (function (t) {
    function e() {
        var e = t.call(this) || this;
        e.wechatReward = null;
        e.wechatInterstitial = null;
        e.wechatBanner = null;
        e.wechatShare = null;
        e.customGrids = [];
        e.customIcons = [];
        e.customPatchs = [];
        e.customMoreGame = null;
        e.customInterstitials = [];
        e.customBanner = null;
        e.wechatReward = new $wechatRewardedVideo.default();
        e.wechatReward.initAd($aDConfig.ADConfig.wechat.rewarded_video_id);
        e.wechatInterstitial = new $weChatInterstitial.default();
        e.wechatInterstitial.initAd($aDConfig.ADConfig.wechat.interstitial_id);
        e.wechatBanner = new $wechatBanner.WechatBanner();
        e.wechatBanner.initAd($aDConfig.ADConfig.wechat.banner_id);
        for (var i = 0; i < $aDConfig.ADConfig.wechat.custom_grids.length; i++) {
            (o = new $wechatCustomAd.default()).initAd($aDConfig.ADConfig.wechat.custom_grids[i]);
            e.customGrids.push(o);
        }
        for (i = 0; i < $aDConfig.ADConfig.wechat.custom_icon.length; i++) {
            (o = new $wechatCustomAd.default()).initAd($aDConfig.ADConfig.wechat.custom_icon[i]);
            e.customIcons.push(o);
        }
        for (i = 0; i < $aDConfig.ADConfig.wechat.custom_patch.length; i++) {
            (o = new $wechatCustomAd.default()).initAd($aDConfig.ADConfig.wechat.custom_patch[i]);
            e.customPatchs.push(o);
        }
        e.customMoreGame = new $wechatCustomAd.default();
        e.customMoreGame.setOpenPreLoadCustomAd(
            e.proccessStyle({
                top: 0.15,
                left: 0.025,
                width: 0.95
            })
        );
        e.customMoreGame.initAd($aDConfig.ADConfig.wechat.custom_more_game);
        for (i = 0; i < $aDConfig.ADConfig.wechat.custom_interstitial.length; i++) {
            var o;
            (o = new $wechatCustomAd.default()).initAd($aDConfig.ADConfig.wechat.custom_interstitial[i]);
            e.customInterstitials.push(o);
        }
        e.customBanner = new $wechatCustomAd.default();
        e.customBanner.initAd($aDConfig.ADConfig.wechat.custom_banner);
        e.wechatShare = new $wechatShare.default();
        e.wechatShare.init();
        return e;
    }
    __extends(e, t);
    e.prototype.showRewardedVideo = function (t, e, i) {
        this.wechatReward.showRewardedVideo(t, e, i);
    };
    e.prototype.showInterstitial = function (t, e, i) {
        this.wechatInterstitial.showInterstitial(t, e, i);
    };
    e.prototype.showBanner = function (t, e, i) {
        this.wechatBanner.showBanner(t, e, i);
    };
    e.prototype.forbiddenBanner = function (t) {
        this.wechatBanner.forbidderAd(t);
    };
    e.prototype.hideBanner = function (t) {
        this.wechatBanner.hideAd(t);
    };
    e.prototype.showCustomGrid = function (t, e, i, o, n) {
        t >= this.customGrids.length
            ? console.warn("模板广告不存在")
            : ((e = this.proccessStyle(e)), this.customGrids[t].showCustomAd(e, i, o, n));
    };
    e.prototype.hideCustomGrid = function (t, e) {
        this.customGrids[t].hideAd(e);
    };
    e.prototype.showCustomIcon = function (t, e, i, o, n) {
        t >= this.customIcons.length
            ? console.warn("模板广告不存在")
            : ((e = this.proccessStyle(e)), this.customIcons[t].showCustomAd(e, i, o, n));
    };
    e.prototype.hideCustomIcon = function (t, e) {
        this.customIcons[t].hideAd(e);
    };
    e.prototype.showCustomPatch = function (t, e, i, o, n) {
        t >= this.customPatchs.length
            ? console.warn("模板广告不存在")
            : ((e = this.proccessStyle(e)), this.customPatchs[t].showCustomAd(e, i, o, n));
    };
    e.prototype.hideCustomPatch = function (t, e) {
        this.customPatchs[t].hideAd(e);
    };
    e.prototype.showCustomMoreGame = function (t, e, i, o) {
        t = this.proccessStyle(t);
        this.customMoreGame.showCustomAd(t, e, i, o);
    };
    e.prototype.hideCustomMoreGame = function (t) {
        this.customMoreGame.hideAd(t);
    };
    e.prototype.showCustomInterstitial = function (t, e, i, o, n) {
        t >= this.customInterstitials.length
            ? console.warn("模板广告不存在")
            : ((e = this.proccessStyle(e)), this.customInterstitials[t].showCustomAd(e, i, o, n));
    };
    e.prototype.hideCustomInterstitial = function (t, e) {
        this.customInterstitials[t].hideAd(e);
    };
    e.prototype.showCustomBanner = function (t, e, i, o) {
        t = this.proccessStyle(t);
        this.customBanner.showCustomAd(t, e, i, o);
    };
    e.prototype.forbiddenCustomBanner = function (t) {
        this.customBanner.forbidderAd(t);
    };
    e.prototype.hideCustomBanner = function (t) {
        this.customBanner.hideAd(t);
    };
    e.prototype.share = function (t) {
        this.wechatShare.share(t);
    };
    e.prototype.proccessStyle = function (t) {
        var e = window.wx.getSystemInfoSync();
        var i = e.screenWidth;
        var o = e.screenHeight;
        if (t && t.top && t.top <= 1) {
            t.top = o * t.top;
        }
        if (t && t.left && t.left <= 1) {
            t.left = i * t.left;
        }
        if (t && t.width && t.width <= 1) {
            t.width = i * t.width;
        }
        return t;
    };
    return e;
})($generalAd.GeneralAd);
exports.WechatAd = p;
