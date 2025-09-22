exports.Login = void 0;
var $eventManager = require("./EventManager");
var $seedUtil = require("./SeedUtil");
var $storageUtil = require("./StorageUtil");
var $platform = require("./Platform");
var $geService = require("./GeService");
var $switchContext = require("./SwitchContext");
var $userDataContext = require("./UserDataContext");
var u = (function () {
    function t() {
        this.info = null;
        this.ttOpenId = "";
        this.wxOpenId = "";
        this.ksOpenId = "";
        this.param = {
            ttAppid: "",
            ttSecret: "",
            wxAuthUid: "",
            ksAuthUid: ""
        };
    }
    
    t.prototype.start = function () {
        console.log("=========login-param=======", this.param);
        this.param = $switchContext.SwitchContext.loginParam;
        this.info = {
            openId: this.getLocalOpenID(),
            nickname: "",
            headImg: "https://cooperation.pailedi.com/web2/wuff/bhrhj/config/default_img2.png"
        };
        $userDataContext.default.Ins.openId = this.info.openId;
        $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO
            ? (this.ttOpenId = $storageUtil.StorageUtil.getItem("TT_OPENID", "", !1))
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT
            ? (this.wxOpenId = $storageUtil.StorageUtil.getItem("WX_OPENID", "", !1))
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.KS &&
              (this.ksOpenId = $storageUtil.StorageUtil.getItem("KS_OPENID", "", !1));
    };
    t.prototype.qqGetUserInfo = function () {
        var t = this;
        window.qq.getSetting({
            success: function (e) {
                if (e.authSetting["scope.userInfo"]) {
                    window.qq.getUserInfo({
                        success: function (e) {
                            var i = e.userInfo;
                            t.onGetUserInfo(i);
                        }
                    });
                } else {
                    {
                        var i = window.qq.createUserInfoButton({
                            type: "text",
                            text: "",
                            style: {
                                left: 0,
                                top: 0,
                                width: 3e3,
                                height: 3e3,
                                lineHeight: 40,
                                textAlign: "center",
                                fontSize: 16,
                                borderRadius: 4
                            }
                        });
                        i.onTap(function (e) {
                            console.log("button res:", e);
                            if (e && "getUserInfo:ok" === e.errMsg) {
                                var o = e.userInfo;
                                t.onGetUserInfo(o);
                            }
                            i.destroy();
                        });
                        i.show();
                    }
                }
            }
        });
    };
    t.prototype.wxGetUserInfo = function (t) {
        var e = this;
        t && "" === this.wxOpenId
            ? window.wx.login({
                  success: function (t) {
                      t.code ? e.getWxOpenId(t.code) : console.log("登录失败！" + t.errMsg);
                  }
              })
            : t && "" != this.wxOpenId && $geService.GeService.instance.init();
        console.log("==========wxGetUserInfo==========");
        window.wx.getSetting({
            success: function (t) {
                if (t.authSetting["scope.userInfo"]) {
                    console.log("===++++===", t);
                    window.wx.getUserInfo({
                        success: function (t) {
                            var i = t.userInfo;
                            console.log("======", t);
                            e.onGetUserInfo(i);
                        }
                    });
                } else {
                    {
                        var i = window.wx.createUserInfoButton({
                            type: "text",
                            text: "",
                            style: {
                                left: 0,
                                top: 0,
                                width: 3e3,
                                height: 3e3,
                                lineHeight: 40,
                                textAlign: "center",
                                fontSize: 16,
                                borderRadius: 4
                            }
                        });
                        i.onTap(function (t) {
                            console.log("button res:", t);
                            if (t && "getUserInfo:ok" === t.errMsg) {
                                var o = t.userInfo;
                                e.onGetUserInfo(o);
                            }
                            i.destroy();
                        });
                        i.show();
                    }
                }
            },
            fail: function (t) {
                console.error(t);
            }
        });
    };
    t.prototype.getWxOpenId = function (e) {
        var i = this;
        fly.post(
            "https://fkxjl.shenzhendongwei.com/auth/login",
            {
                authUid: this.param.wxAuthUid,
                code: e
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        ).then(function (e) {
            console.log("getOpenId", e.data);
            i.wxOpenId = e.data.openId;
            console.log("getOpenId", i.wxOpenId);
            $storageUtil.StorageUtil.setItem("WX_OPENID", i.wxOpenId, !1);
            $eventManager.default.send(t.LOGIN_SUCCESS);
            $geService.GeService.instance.init();
        });
    };
    t.prototype.ttGetUserInfo = function (t) {
        var e = this;
        window.tt.login({
            force: !1,
            success: function (i) {
                t && "" === e.ttOpenId
                    ? e.getTTOpenId(i.code)
                    : t && "" != e.ttOpenId && $geService.GeService.instance.init();
                console.log("login 调用成功" + i.code + " " + i.anonymousCode);
                window.tt.getUserInfo({
                    withCredentials: !0,
                    success: function (t) {
                        console.log("getUserInfo 调用成功 ", t);
                        e.onGetUserInfo(t.userInfo);
                    },
                    fail: function (t) {
                        console.log("getUserInfo 调用失败", t);
                    }
                });
            }
        });
    };
    t.prototype.getTTOpenId = function (e) {
        var i = this;
        if ("" !== this.param.ttSecret) {
            fly.post("https://developer.toutiao.com/api/apps/v2/jscode2session", {
                appid: this.param.ttAppid,
                secret: this.param.ttSecret,
                code: e
            }).then(function (e) {
                console.log("getOpenId", e);
                i.ttOpenId = e.data.openid;
                $storageUtil.StorageUtil.setItem("TT_OPENID", i.ttOpenId, !1);
                $eventManager.default.send(t.LOGIN_SUCCESS);
                $geService.GeService.instance.init();
            });
        }
    };
    t.prototype.ksGetUserInfo = function (t) {
        var e = this;
        window.ks.login({
            success: function (i) {
                t && "" === e.ksOpenId
                    ? e.getKSOpenId(i.code)
                    : t && "" != e.ttOpenId && $geService.GeService.instance.init();
                console.log("login 调用成功" + i.code + " " + i.anonymousCode);
            }
        });
        console.log("============================================");
        window.ks.getSetting({
            success: function (t) {
                t["scope.userInfo"]
                    ? window.ks.getUserInfo({
                          success: function (t) {
                              console.log("已授权");
                              var i = t.userInfo;
                              e.onGetUserInfo(i);
                          }
                      })
                    : window.ks.authorize({
                          scope: "scope.userInfo",
                          success: function () {
                              console.log("授权获取用户信息成功");
                              window.ks.getUserInfo({
                                  success: function (t) {
                                      var i = t.userInfo;
                                      e.onGetUserInfo(i);
                                  }
                              });
                          }
                      });
            },
            fail: function (t) {
                console.error(t);
            }
        });
    };
    t.prototype.getKSOpenId = function (e) {
        var i = this;
        fly.post(
            "https://fkxjl.shenzhendongwei.com/auth/login",
            {
                authUid: this.param.ksAuthUid,
                code: e
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        ).then(function (e) {
            console.log("getOpenId1", e);
            i.ksOpenId = e.data.openId;
            console.log("getOpenId2", i.ksOpenId);
            $storageUtil.StorageUtil.setItem("KS_OPENID", i.ksOpenId, !1);
            $eventManager.default.send(t.LOGIN_SUCCESS);
            $geService.GeService.instance.init();
        });
    };
    t.prototype.onGetUserInfo = function (e) {
        $userDataContext.default.Ins.nickname = e.nickName;
        $eventManager.default.send(t.LOGIN_SUCCESS);
    };
    t.prototype.getLocalOpenID = function () {
        var t = $storageUtil.StorageUtil.getItem(
            "user_open_id",
            "1020" + $seedUtil.default.randomFrom(0, 99999999),
            !1
        );
        $storageUtil.StorageUtil.setItem("user_open_id", t, !1);
        return t;
    };
    t.LOGIN_SUCCESS = "LOGIN_SUCCESS";
    t.instance = new t();
    return t;
})();
exports.Login = u;
