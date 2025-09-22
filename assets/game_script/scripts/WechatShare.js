var $aDConfig = require("./ADConfig");
var n = window.wx;
var s = (function () {
    function t() {}
    t.prototype.init = function () {
        console.log("share init");
        if (n && n.showShareMenu) {
            n.showShareMenu({
                withShareTicket: !0,
                menus: ["shareAppMessage", "shareTimeline"]
            });
        }
        if (n && n.showShareMenu) {
            n.showShareMenu({
                withShareTicket: !0,
                menus: ["shareAppMessage", "shareTimeline"]
            });
        }
        if (n && n.onShareAppMessage) {
            n.onShareAppMessage(function () {
                return {
                    title: $aDConfig.ADConfig.wechat.share_title,
                    imageUrl: $aDConfig.ADConfig.wechat.share_imageUrl
                };
            });
        }
    };
    t.prototype.share = function (t) {
        if (n && n.shareAppMessage) {
            n.shareAppMessage({
                title: t.share_title || $aDConfig.ADConfig.wechat.share_title,
                imageUrl: t.share_imageUrl || $aDConfig.ADConfig.wechat.share_imageUrl,
                query: t.query || "",
                success: function () {
                    if (t && t.success) {
                        t.success();
                    }
                },
                fail: function () {
                    if (t && t.fail) {
                        t.fail();
                    }
                },
                complete: function () {
                    if (t && t.complete) {
                        t.complete();
                    }
                }
            });
        }
    };
    return t;
})();
exports.default = s;
