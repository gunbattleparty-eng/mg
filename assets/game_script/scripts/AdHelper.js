var $uIManager = require("./UIManager");
var n = (function () {
    function t() {}
    t.initAdService = function () {
        if (cc.sys.platform === cc.sys.ANDROID) {
            var e = this.getChannel();
            if (e) {
                t.CHANNEL = e;
            }
            if ("xiaomi" === t.CHANNEL) {
                t.CHANNEL = "mi";
            }
            t.getIsHuaweiTest();
            "mi" === t.CHANNEL
                ? (t.initFlowBanner("2", "", t.FLOW_BANNER_PARAM, 99999),
                  t.initFlowRewardVideo("3", "", t.FLOW_REWARD_PARAM, 99999),
                  t.initFlowPatch("4", "", t.FLOW_PATCH_PARAM, 99999),
                  t.initFlowInterstitial("5", "", t.FLOW_INTERSTITIAL_PARAM, 99999),
                  t.initFlowIcon("6", "", t.FLOW_ICON_PARAM, 99999),
                  setInterval(function () {
                      t.adSchedule();
                  }, 1e3))
                : "vivo" === e
                ? (t.initFlowBanner("2", "", t.FLOW_BANNER_PARAM, 99999),
                  t.initFlowRewardVideo("3", "", t.FLOW_REWARD_PARAM, 99999),
                  t.initFlowInterstitial("4", "", t.FLOW_INTERSTITIAL_PARAM, 99999),
                  t.initFlowInterstitial("6", "", t.FLOW_INTERSTITIAL_PARAM2, 99999),
                  t.initFlowIcon("5", "", t.FLOW_ICON_PARAM, 99999),
                  setInterval(function () {
                      t.adSchedule();
                  }, 1e3))
                : "huawei" === e &&
                  (t.initBanner("r8ngfn18gm", "18568", t.BANNER_PARAM, 99999),
                  t.initRewardVideo("i0n1r6e2l0", "18567", t.REWARD_PARAM, 99999),
                  t.initPatch("NativePatch1_p0q7fvcev4", "18569", t.PATCH_PARAM, 99999),
                  t.initNativeInterstitialAd("NativeStyle2_u9uj0lh33f", "18566", t.NATIVE_INTERSTITIAL_PARAM, 99999));
        }
    };
    t.adSchedule = function () {
        --t.residuRefreshTime;
        if (t.residuRefreshTime <= 0) {
            t.residuRefreshTime = 10;
            t.showFlowIcon();
        }
        if ("vivo" === t.CHANNEL) {
            t.showFlowInterstitial(t.FLOW_INTERSTITIAL_PARAM2);
        }
    };
    t.showFlowBanner = function (e) {
        if (!e) {
            e = t.FLOW_BANNER_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "showWaterFallBannerAd", "(I)V", e);
        }
    };
    t.closeFlowBanner = function (e) {
        if (!e) {
            e = t.FLOW_BANNER_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "closeWaterFallBannerAd", "(I)V", e);
        }
    };
    t.showFlowInterstitial = function (e) {
        if (!e) {
            e = t.FLOW_INTERSTITIAL_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "showWaterFallInterstitialAd", "(I)V", e);
        }
    };
    t.closeFlowInterstitial = function (e) {
        if (!e) {
            e = t.FLOW_INTERSTITIAL_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "closeWaterFallInterstitialAd", "(I)V", e);
        }
    };
    t.showFlowPatch = function (e) {
        if (!e) {
            e = t.FLOW_PATCH_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "showWaterFallPatchAd", "(I)V", e);
        }
    };
    t.closeFlowPatch = function (e) {
        if (!e) {
            e = t.FLOW_PATCH_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "closeWaterFallPatchAd", "(I)V", e);
        }
    };
    t.showFlowRewardVideo = function (e, i, o) {
        if (!e) {
            e = t.FLOW_REWARD_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            t.showCallbacks["" + e] = i;
            t.completedCallbacks["" + e] = o;
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "showWaterFallRewardAd", "(I)V", e);
        }
    };
    t.showFlowIcon = function (e) {
        if (!e) {
            e = t.FLOW_ICON_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "showWaterFallFloatIconAd", "(I)V", e);
        }
    };
    t.closeFlowIcon = function (e) {
        if (!e) {
            e = t.FLOW_ICON_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "closeWaterFallFloatIconAd", "(I)V", e);
        }
    };
    t.initFlowPatch = function (t, e, i, o) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod(
                "com/pailedi/wd/platform/CWD",
                "initWaterFallPatchAd",
                "(Ljava/lang/String;Ljava/lang/String;II)V",
                t,
                e,
                i,
                o
            );
        }
    };
    t.initFlowRewardVideo = function (t, e, i, o) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            console.log("WD_LOG,initFlowRewardVideo", "adid", t, "openId", e, "param", i, "limit", o);
            jsb.reflection.callStaticMethod(
                "com/pailedi/wd/platform/CWD",
                "initWaterFallRewardAd",
                "(Ljava/lang/String;Ljava/lang/String;II)V",
                t,
                e,
                i,
                o
            );
        }
    };
    t.initFlowIcon = function (t, e, i, o) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            console.log("WD_LOG,initFlowIcon", "adid", t, "openId", e, "param", i, "limit", o);
            jsb.reflection.callStaticMethod(
                "com/pailedi/wd/platform/CWD",
                "initWaterFallFloatIconAd",
                "(Ljava/lang/String;Ljava/lang/String;II)V",
                t,
                e,
                i,
                o
            );
        }
    };
    t.initFlowBanner = function (t, e, i, o) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod(
                "com/pailedi/wd/platform/CWD",
                "initWaterFallBannerAd",
                "(Ljava/lang/String;Ljava/lang/String;II)V",
                t,
                e,
                i,
                o
            );
        }
    };
    t.initFlowInterstitial = function (t, e, i, o) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod(
                "com/pailedi/wd/platform/CWD",
                "initWaterFallInterstitialAd",
                "(Ljava/lang/String;Ljava/lang/String;II)V",
                t,
                e,
                i,
                o
            );
        }
    };
    t.initBanner = function (t, e, i, o) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod(
                "com/pailedi/wd/platform/CWD",
                "initBanner",
                "(Ljava/lang/String;Ljava/lang/String;II)V",
                t,
                e,
                i,
                o
            );
        }
    };
    t.showBanner = function (e) {
        if (void 0 === e) {
            e = null;
        }
        if (null === e) {
            e = t.BANNER_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            if (t.IS_HIDE_BANNER) {
                return;
            }
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "showBanner", "(I)V", e);
        }
    };
    t.hideBanner = function (e) {
        if (void 0 === e) {
            e = !1;
        }
        t.IS_HIDE_BANNER = e;
    };
    t.closeBanner = function (e) {
        if (void 0 === e) {
            e = null;
        }
        if (null === e) {
            e = t.BANNER_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "closeBanner", "(I)V", e);
        }
    };
    t.initPatch = function (t, e, i, o) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod(
                "com/pailedi/wd/platform/CWD",
                "initNativePatch",
                "(Ljava/lang/String;Ljava/lang/String;II)V",
                t,
                e,
                i,
                o
            );
        }
    };
    t.showPatch = function (e) {
        if (null === e) {
            e = t.PATCH_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "showNativePatch", "(I)V", e);
        }
    };
    t.closePatch = function (e) {
        if (null === e) {
            e = t.PATCH_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "closeNativePatch", "(I)V", e);
        }
    };
    t.initInterstitialAd = function (t, e, i, o) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod(
                "com/pailedi/wd/platform/CWD",
                "initInterstitialAd",
                "(Ljava/lang/String;Ljava/lang/String;II)V",
                t,
                e,
                i,
                o
            );
        }
    };
    t.showInterstitialAd = function (e) {
        if (void 0 === e) {
            e = null;
        }
        if (null === e) {
            e = t.INTERSTITIAL_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "showInterstitialAd", "(I)V", e);
        }
    };
    t.isInterstitialAdHide = function (e) {
        if (null === e) {
            e = t.INTERSTITIAL_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            return jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "isInterstitialAdHide", "(I)V", e);
        }
    };
    t.initRewardVideo = function (t, e, i, o) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod(
                "com/pailedi/wd/platform/CWD",
                "initRewardVideo",
                "(Ljava/lang/String;Ljava/lang/String;II)V",
                t,
                e,
                i,
                o
            );
        }
    };
    t.showRewardVideo = function (e, i, o) {
        if (null === e) {
            e = t.REWARD_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            t.showCallbacks["" + e] = i;
            t.completedCallbacks["" + e] = o;
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "showRewardVideo", "(I)V", e);
        }
    };
    t.isRewardVideoHide = function (t) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            return jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "isRewardVideoHide", "(I)V", t);
        }
    };
    t.initNativeBanner = function (t, e, i, o) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod(
                "com/pailedi/wd/platform/CWD",
                "initNativeBanner",
                "(Ljava/lang/String;Ljava/lang/String;II)V",
                t,
                e,
                i,
                o
            );
        }
    };
    t.showNativeBanner = function (t) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "showNativeBanner", "(I)V", t);
        }
    };
    t.closeNativeBanner = function (t) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "closeNativeBanner", "(I)V", t);
        }
    };
    t.showPrivacy = function () {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showPrivacyDialog", "(I)V", 0);
        }
    };
    t.showAgeTip = function () {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showPrivacyDialog", "(I)V", 1);
        }
    };
    t.initNativeInterstitialAd = function (t, e, i, o) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod(
                "com/pailedi/wd/platform/CWD",
                "initNativeInterstitialAd",
                "(Ljava/lang/String;Ljava/lang/String;II)V",
                t,
                e,
                i,
                o
            );
        }
    };
    t.showNativeInterstitialAd = function (e) {
        if (void 0 === e) {
            e = null;
        }
        if (null === e) {
            e = t.NATIVE_INTERSTITIAL_PARAM;
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "showNativeInterstitialAd", "(I)V", e);
        }
    };
    t.isNativeInterstitialAdHide = function (t) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            return jsb.reflection.callStaticMethod(
                "com/pailedi/wd/platform/CWD",
                "isNativeInterstitialAdHide",
                "(I)V",
                t
            );
        }
    };
    t.tdEvent = function (t, e) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod(
                "com/pailedi/wd/platform/CWD",
                "tdEvent",
                "(Ljava/lang/String;Ljava/lang/String;)V",
                t,
                e
            );
        }
    };
    t.getChannel = function () {
        return cc.sys.platform === cc.sys.ANDROID
            ? jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "getChannel", "()Ljava/lang/String;")
            : "";
    };
    t.jump = function (t) {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "jump", "(I)V", t);
        }
    };
    t.onQuitGame = function () {
        if (cc.sys.platform === cc.sys.ANDROID) {
            jsb.reflection.callStaticMethod("com/pailedi/wd/platform/CWD", "onQuitGame", "()V");
        }
    };
    t.getIsHuaweiTest = function () {
        if (cc.sys.platform === cc.sys.ANDROID) {
            var e = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getIsHuaweiTest", "()I");
            t.isHuaweiTest = 0 === e;
        }
    };
    t.onAdReady = function (t) {
        console.error("WD_LOG:      onAdReady   " + t);
    };
    t.onAdClose = function (e) {
        console.error("WD_LOG:      onAdClose   " + e);
        var i = JSON.parse(e);
        var o = i.type;
        var n = i.param;
        if (t.isAdType(o) && t.closeCallbacks[n]) {
            t.closeCallbacks[n]();
            t.closeCallbacks[n] = null;
        }
    };
    t.onAdFailed = function (e) {
        console.error("WD_LOG:      onAdFailed   " + e);
        var i = JSON.parse(e);
        var n = i.type;
        var s = i.param;
        if (40 === n) {
            $uIManager.UIManager.instance.showToast("暂无广告资源");
        }
        if (t.isAdType(n) && t.errorCallbacks[s]) {
            t.errorCallbacks[s]();
            t.errorCallbacks[s] = null;
        }
    };
    t.onAdShow = function (e) {
        var i = JSON.parse(e);
        var o = i.type;
        var n = i.param;
        if (t.isAdType(o) && t.showCallbacks[n]) {
            t.showCallbacks[n]();
            t.showCallbacks[n] = null;
        }
    };
    t.onAdClick = function (t) {
        console.error("WD_LOG:      onAdClick   " + t);
    };
    t.onAdComplete = function (e) {
        console.error("WD_LOG:      onAdComplete   " + e);
        var i = JSON.parse(e);
        var o = i.type;
        var n = i.param;
        if (t.isAdType(o) && t.completedCallbacks[n]) {
            t.completedCallbacks[n]();
        }
    };
    t.isAdType = function (t) {
        return ![100, 200, 300, 400, 500, 3e3].includes(t);
    };
    t.onKeyDown = function (e) {
        console.error("WD_LOG:      onKeyDown   " + e.keyCode, cc.macro.KEY.back);
        if (e.keyCode === cc.macro.KEY.back) {
            t.onQuitGame();
        }
    };
    t.IS_HIDE_BANNER = !1;
    t.BANNER_PARAM = 51;
    t.INTERSTITIAL_PARAM = 52;
    t.NATIVE_BANNER_PARAM = 53;
    t.NATIVE_INTERSTITIAL_PARAM = 54;
    t.REWARD_PARAM = 55;
    t.FULLSCREEN_VIDEO_PARAM = 56;
    t.PATCH_PARAM = 57;
    t.FLOW_REWARD_PARAM = 1;
    t.FLOW_BANNER_PARAM = 10;
    t.FLOW_ICON_PARAM = 21;
    t.FLOW_PATCH_PARAM = 31;
    t.FLOW_INTERSTITIAL_PARAM = 41;
    t.FLOW_INTERSTITIAL_PARAM2 = 42;
    t.CHANNEL = "";
    t.completedCallbacks = {};
    t.showCallbacks = {};
    t.closeCallbacks = {};
    t.errorCallbacks = {};
    t.isHuaweiTest = !1;
    t.residuRefreshTime = 10;
    return t;
})();
exports.default = n;
window.onAdReady = n.onAdReady;
window.onAdClose = n.onAdClose;
window.onAdShow = n.onAdShow;
window.onAdFailed = n.onAdFailed;
window.onAdClick = n.onAdClick;
window.onAdComplete = n.onAdComplete;
