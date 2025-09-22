exports.GeService = void 0;
var $login = require("./Login");
var $platform = require("./Platform");
var $storageUtil = require("./StorageUtil");
var $switchContext = require("./SwitchContext");
var a = (function () {
    function t() {
        this.isRegister = !1;
        this.isInit = !1;
        this.ge = null;
        this.param = {
            ttAccessToken: "",
            wxAccessToken: "",
            ksAccessToken: "",
            isDebug: !1
        };
    }
    t.prototype.start = function () {
        if (
            !(
                $platform.Platform.currPlatForm !== $platform.PlatformEnum.TOU_TIAO &&
                $platform.Platform.currPlatForm !== $platform.PlatformEnum.WECHAT &&
                $platform.Platform.currPlatForm !== $platform.PlatformEnum.KS
            )
        ) {
            this.param = $switchContext.SwitchContext.geParam;
            this.isRegister = $storageUtil.StorageUtil.getItem("GE_ISREGISTER", !1, !1);
            this.init();
        }
    };
    t.prototype.init = function () {
        if (
            $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO ||
            $platform.Platform.currPlatForm === $platform.PlatformEnum.KS ||
            $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT
        ) {
            var t = this.getOpenId();
            if ("" !== t && !this.isInit) {
                var e = "";
                $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT
                    ? (e = this.param.wxAccessToken)
                    : $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO
                    ? (e = this.param.ttAccessToken)
                    : $platform.Platform.currPlatForm === $platform.PlatformEnum.KS && (e = this.param.ksAccessToken);
                if ("" !== e) {
                    var i = {
                        accessToken: e,
                        clientId: t,
                        autoTrack: {
                            appLaunch: !0,
                            appShow: !0,
                            appHide: !0
                        },
                        name: "ge",
                        debugMode: this.param.isDebug ? "debug" : "none"
                    };
                    this.ge = new GravityAnalyticsAPI(i);
                    this.ge.setupAndStart();
                    this.isInit = !0;
                    console.log("=========GE 初始化完成==========");
                    this.register();
                }
            }
        }
    };
    t.prototype.register = function () {
        var t = this;
        var e = "";
        $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT
            ? (e = this.param.wxAccessToken)
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO
            ? (e = this.param.ttAccessToken)
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.KS && (e = this.param.ksAccessToken);
        if ("" !== e) {
            if (this.isRegister) {
                console.log("=========玩家已经注册=======");
            } else {
                {
                    var i = this.getOpenId();
                    "" !== i
                        ? (console.log("参数：", {
                              name: i,
                              version: 1,
                              openid: i,
                              enable_sync_attribution: !1
                          }),
                          this.ge
                              .initialize({
                                  name: i,
                                  version: 1,
                                  openid: i,
                                  enable_sync_attribution: !1
                              })
                              .then(function (e) {
                                  console.log("register success " + JSON.stringify(e));
                                  t.isRegister = !0;
                                  $storageUtil.StorageUtil.setItem("GE_ISREGISTER", !0, !1);
                              })
                              .catch(function (t) {
                                  console.log("register failed, error is " + JSON.stringify(t));
                              }))
                        : console.error("openID为空");
                }
            }
        }
    };
    t.prototype.reportBytedanceAdToGravity = function (t) {
        if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
            this.isInit && this.isRegister && "" !== t && "" !== $login.Login.instance.ttOpenId
                ? console.log("抖音AD上报-", t)
                : console.warn(
                      "条件不成立-不进行上报",
                      this.isInit,
                      this.isRegister,
                      t,
                      $login.Login.instance.ttOpenId
                  );
        }
    };
    t.prototype.reportWxAdToGravity = function (t) {
        if ($platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT) {
            this.isInit && this.isRegister && "" !== t && "" !== $login.Login.instance.wxOpenId
                ? (this.ge.adShowEvent("reward", t, {
                      custom_param: ""
                  }),
                  console.log("微信AD上报-", t))
                : console.warn(
                      "条件不成立-不进行上报",
                      this.isInit,
                      this.isRegister,
                      t,
                      $login.Login.instance.wxOpenId
                  );
        }
    };
    t.prototype.getOpenId = function () {
        return $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO
            ? $login.Login.instance.ttOpenId
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT
            ? $login.Login.instance.wxOpenId
            : $login.Login.instance.ksOpenId;
    };
    t.instance = new t();
    return t;
})();
exports.GeService = a;
