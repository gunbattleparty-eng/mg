exports.TTNativeToScene = void 0;
var $storageUtil = require("./StorageUtil");
var $util = require("./Util");
var s = window.tt;
var r = (function () {
    function t() {
        this.isGain = 0;
        this.refreshCb = null;
        this.isGain = $storageUtil.StorageUtil.getItem("tt_isGains", 0, !1);
    }
    Object.defineProperty(t.prototype, "sidebarCome", {
        get: function () {
            return window.isSidebarComeIn;
        },
        enumerable: !1,
        configurable: !0
    });
    t.prototype.closeScene = function () {
        this.isGain = $util.default.startDayTimestamp();
        $storageUtil.StorageUtil.setItem("tt_isGains", this.isGain, !1);
    };
    t.prototype.checkScene = function (t, e) {
        var i = $util.default.startDayTimestamp();
        if (this.isGain >= i) {
            return e && e();
        }
        s.checkScene({
            scene: "sidebar",
            success: function (e) {
                console.log("check scene success: ", e);
                console.log("check scene success: ", e.isExist);
                if (t) {
                    t(e.isExist);
                }
            },
            fail: function (t) {
                console.log("check scene fail:", t);
                if (e) {
                    e();
                }
            }
        });
    };
    t.prototype.navigateToScene = function (t, e) {
        s.navigateToScene({
            scene: "sidebar",
            success: function (e) {
                console.log("navigate to scene success");
                if (t) {
                    t(e);
                }
            },
            fail: function (t) {
                console.log("navigate to scene fail: ", t);
                if (e) {
                    e();
                }
            }
        });
    };
    t.prototype.bindOnShow = function (t, e) {
        this.refreshCb = t;
        this.refreshCb.bind(e);
    };
    return t;
})();
exports.TTNativeToScene = r;
