var o;
var $list = require("./List");
var $popupView = require("./PopupView");
var $platform = require("./Platform");
var $aD = require("./AD");
var $adService = require("./AdService");
var $configContext = require("./ConfigContext");
var $weekCardService = require("./WeekCardService");
var $weeklyPassItem = require("./WeeklyPassItem");
var h = cc._decorator;
var m = h.ccclass;
var y = h.property;
var g = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.page1 = null;
        e.page2 = null;
        e.list = null;
        e.btnAd = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onResetView = function () {
        this.page1.active = !$weekCardService.default.Ins.isLock();
        this.page2.active = $weekCardService.default.Ins.isLock();
        if (this.page2.active) {
            this.list.numItems = $configContext.default.instance.weekCardConfigs.length;
        }
        this.btnAd.getComponentInChildren(cc.Label).string =
            "领取(" + $weekCardService.default.Ins.weekCardInfo.lockNum + "/5)";
    };
    e.prototype.addEvent = function () {
        this.btnAd.on("click", this.clickAd, this);
    };
    e.prototype.removeEvent = function () {
        this.btnAd.off("click", this.clickAd, this);
    };
    e.prototype.refresh = function () {
        this.page1.active = !$weekCardService.default.Ins.isLock();
        this.page2.active = $weekCardService.default.Ins.isLock();
        if (this.page2.active) {
            this.list.numItems = $configContext.default.instance.weekCardConfigs.length;
        }
        this.btnAd.getComponentInChildren(cc.Label).string =
            "领取(" + $weekCardService.default.Ins.weekCardInfo.lockNum + "/5)";
    };
    e.prototype.renderItem = function (t, e) {
        var i = $configContext.default.instance.weekCardConfigs[e];
        t.getComponent($weeklyPassItem.default).render(i);
    };
    e.prototype.clickAd = function () {
        var t = this;
        $adService.default.Ins.showRewardedVideo(function () {
            if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
                $aD.default.toutiao.report("week_reward");
            }
            $weekCardService.default.Ins.unlock();
            t.refresh();
        });
    };
    __decorate([y(cc.Node)], e.prototype, "page1", void 0);
    __decorate([y(cc.Node)], e.prototype, "page2", void 0);
    __decorate([y($list.default)], e.prototype, "list", void 0);
    __decorate([y(cc.Node)], e.prototype, "btnAd", void 0);
    return __decorate([m], e);
})($popupView.PopupView);
exports.default = g;
