var $platform = require("./Platform");
var n = window.qq;
var s = window.qg;
var r = window.tt;
var a = window.wx;
var l = (function () {
    function t() {}
    t.autoVibration = function () {
        t.isOpenVibration = !t.isOpenVibration;
    };
    t.setVibration = function (e) {
        t.isOpenVibration = e;
    };
    t.vibrateShort = function () {
        if (t.isOpenVibration) {
            $platform.Platform.currPlatForm === $platform.PlatformEnum.BROWSER
                ? window.navigator.vibrate
                    ? window.navigator.vibrate([30])
                    : console.warn("你的浏览器不支持调用手机震动")
                : $platform.Platform.currPlatForm === $platform.PlatformEnum.OPPO
                ? s.vibrateShort({
                      success: function () {},
                      fail: function () {}
                  })
                : $platform.Platform.currPlatForm === $platform.PlatformEnum.VIVO
                ? s.vibrateShort()
                : $platform.Platform.currPlatForm === $platform.PlatformEnum.QQ
                ? n.vibrateShort({
                      success: function () {},
                      fail: function () {}
                  })
                : $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO
                ? r.vibrateShort({
                      success: function () {},
                      fail: function () {}
                  })
                : $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT
                ? a.vibrateShort({
                      success: function () {},
                      fail: function () {}
                  })
                : $platform.Platform.currPlatForm === $platform.PlatformEnum.HUAWEI_GAME
                ? s.vibrateShort()
                : cc.sys.os === cc.sys.OS_ANDROID &&
                  jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "vibrate", "(I)V", 30);
        }
    };
    t.vibrateLong = function () {
        if (t.isOpenVibration) {
            $platform.Platform.currPlatForm === $platform.PlatformEnum.BROWSER
                ? window.navigator.vibrate
                    ? window.navigator.vibrate([400])
                    : console.warn("你的浏览器不支持调用手机震动")
                : $platform.Platform.currPlatForm === $platform.PlatformEnum.OPPO
                ? s.vibrateLong({
                      success: function () {},
                      fail: function () {}
                  })
                : $platform.Platform.currPlatForm === $platform.PlatformEnum.VIVO
                ? s.vibrateLong()
                : $platform.Platform.currPlatForm === $platform.PlatformEnum.QQ
                ? n.vibrateLong({
                      success: function () {},
                      fail: function () {}
                  })
                : $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO
                ? r.vibrateLong({
                      success: function () {},
                      fail: function () {}
                  })
                : $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT
                ? a.vibrateLong({
                      success: function () {},
                      fail: function () {}
                  })
                : $platform.Platform.currPlatForm === $platform.PlatformEnum.HUAWEI_GAME
                ? (console.log("========="), s.vibrateLong())
                : cc.sys.os === cc.sys.OS_ANDROID &&
                  jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "vibrate", "(I)V", 400);
        }
    };
    t.isOpenVibration = !0;
    return t;
})();
exports.default = l;
