var $platform = require("./Platform");
var $generalAd = require("./GeneralAd");
var $hWAd = require("./HWAd");
var $kSAd = require("./KSAd");
var $oPPOAd = require("./OPPOAd");
var $qQAd = require("./QQAd");
var $tTAd = require("./TTAd");
var $vIVOAd = require("./VIVOAd");
var $wechatAd = require("./WechatAd");
var p = (function () {
    function t() {}
    t.init = function () {
        return $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT
            ? (t.adInstance = new $wechatAd.WechatAd())
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO
            ? (t.adInstance = new $tTAd.TTAd())
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.OPPO
            ? (t.adInstance = new $oPPOAd.OPPOAd())
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.VIVO
            ? (t.adInstance = new $vIVOAd.VIVOAd())
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.HUAWEI_GAME
            ? (t.adInstance = new $hWAd.HWAd())
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.QQ
            ? (t.adInstance = new $qQAd.QQAd())
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.KS
            ? (t.adInstance = new $kSAd.KSAd())
            : void (t.adInstance = new $generalAd.GeneralAd());
    };
    Object.defineProperty(t, "auto", {
        get: function () {
            return t.adInstance;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(t, "wechat", {
        get: function () {
            return t.adInstance;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(t, "toutiao", {
        get: function () {
            return t.adInstance;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(t, "oppo", {
        get: function () {
            return t.adInstance;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(t, "vivo", {
        get: function () {
            return t.adInstance;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(t, "huawei", {
        get: function () {
            return t.adInstance;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(t, "qq", {
        get: function () {
            return t.adInstance;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(t, "ks", {
        get: function () {
            return t.adInstance;
        },
        enumerable: !1,
        configurable: !0
    });
    t.adInstance = null;
    return t;
})();
exports.default = p;
