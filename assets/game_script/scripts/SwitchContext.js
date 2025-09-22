var o;
var n;
exports.SwitchContext = exports.GameVersion = void 0;
(n = o = exports.GameVersion || (exports.GameVersion = {}))[(n.V1 = 0)] = "V1";
n[(n.V2 = 1)] = "V2";
var s = (function () {
    function t() {}
    Object.defineProperty(t, "rankKey", {
        get: function () {
            return t.currVersion === o.V1 ? "eplu255h5odeeqbj" : t.currVersion === o.V2 ? "idrtrkerokcyccb1" : void 0;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(t, "rankId", {
        get: function () {
            return t.currVersion === o.V1 ? 141 : t.currVersion === o.V2 ? 140 : void 0;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(t, "configId", {
        get: function () {
            return t.currVersion === o.V1 ? 49 : t.currVersion === o.V2 ? 52 : 49;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(t, "geParam", {
        get: function () {
            return t.currVersion === o.V1
                ? {
                      ttAccessToken: "melk9Wx3VTmuqOAziM671PtvgJYdNkuH",
                      wxAccessToken: "",
                      ksAccessToken: "",
                      isDebug: !1
                  }
                : t.currVersion === o.V2
                ? {
                      ttAccessToken: "",
                      wxAccessToken: "",
                      ksAccessToken: "",
                      isDebug: !1
                  }
                : null;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(t, "loginParam", {
        get: function () {
            return t.currVersion === o.V1
                ? {
                      ttAppid: "ttd1f4a7494ec275ef02",
                      ttSecret: "00a90429061d31fc0836e81ee30046ba3ca62282",
                      wxAuthUid: "",
                      ksAuthUid: ""
                  }
                : t.currVersion === o.V2
                ? {
                      ttAppid: "tt7b450df8e472ed9b02",
                      ttSecret: "c804144ce840f55e97f1c5d153ace4972d5c50b7",
                      wxAuthUid: "",
                      ksAuthUid: ""
                  }
                : null;
        },
        enumerable: !1,
        configurable: !0
    });
    t.currVersion = o.V1;
    t._configId = 49;
    t.zgStr =
        t.currVersion === o.V1
            ? "著作权人：深圳欢鱼软件有限公司\n登记号：2024SA0027204"
            : "著作权人：深圳欢鱼软件有限公司\n登记号：2024SA0027233";
    return t;
})();
exports.SwitchContext = s;
