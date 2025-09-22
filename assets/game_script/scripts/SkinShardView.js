var o;
var $assetsMap = require("./AssetsMap");
var $popupManager = require("./PopupManager");
var $popupView = require("./PopupView");
var $platform = require("./Platform");
var $aD = require("./AD");
var $adService = require("./AdService");
var $roleContext = require("./RoleContext");
var $userDataContext = require("./UserDataContext");
var h = cc._decorator;
var m = h.ccclass;
var y = h.property;
var g = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.btnAd = null;
        return e;
    }
    __extends(e, t);
    e.prototype.addEvent = function () {
        this.btnAd.on("click", this.clickAd, this);
    };
    e.prototype.removeEvent = function () {
        this.btnAd.off("click", this.clickAd, this);
    };
    e.prototype.clickAd = function () {
        var e = this;
        $adService.default.Ins.showRewardedVideo(function () {
            if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
                $aD.default.toutiao.report("Egg_skin");
            }
            $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
                infos: [
                    {
                        type: 9,
                        ext: 2,
                        num: 1
                    }
                ]
            });
            var i = $roleContext.default.ins.getPlayerSkinInfo(2);
            i.shard += 1;
            $roleContext.default.ins.setPlayerSKinInfo(i);
            $userDataContext.default.Ins.setEgg(3, 1);
            t.prototype.onClickClose.call(e);
        });
    };
    __decorate([y(cc.Node)], e.prototype, "btnAd", void 0);
    return __decorate([m], e);
})($popupView.PopupView);
exports.default = g;
