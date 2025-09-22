var o;
var $assetsMap = require("./AssetsMap");
var $eventManager = require("./EventManager");
var $popupManager = require("./PopupManager");
var $popupView = require("./PopupView");
var $platform = require("./Platform");
var $seedUtil = require("./SeedUtil");
var $aD = require("./AD");
var $adService = require("./AdService");
var $configContext = require("./ConfigContext");
var $localEventName = require("./LocalEventName");
var $roleContext = require("./RoleContext");
var $userDataContext = require("./UserDataContext");
var $startView = require("./StartView");
var k = cc._decorator;
var v = k.ccclass;
var b = k.property;
var w = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.btnAd = null;
        e.signContent = null;
        e.countLayer = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onResetView = function () {
        this.btnAd.active = !$userDataContext.default.Ins.isSign();
        for (var t = 1; t <= 3; t++) {
            this.signContent.children[t - 1].active = $userDataContext.default.Ins.sign.day >= t;
        }
        for (t = 0; t < $configContext.default.instance.signConfigs.length; t++) {
            var e = $configContext.default.instance.signConfigs[t];
            var i = this.countLayer.children[t];
            for (var o = 0; o < e.num.length; o++) {
                i.children[o].getComponent(cc.Label).string = e.num[o].toString();
            }
        }
    };
    e.prototype.addEvent = function () {
        this.btnAd.on("click", this.clickAd, this);
    };
    e.prototype.removeEvent = function () {
        this.btnAd.off("click", this.clickAd, this);
    };
    e.prototype.clickAd = function () {
        var t = this;
        $adService.default.Ins.showRewardedVideo(function () {
            if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
                $aD.default.toutiao.report("New_gift");
            }
            t.caculetReward();
            t.onResetView();
            $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.Battle);
        });
    };
    e.prototype.caculetReward = function () {
        var t = $configContext.default.instance.signConfigs.find(function (t) {
            return t.id === $userDataContext.default.Ins.sign.day + 1;
        });
        var e = [];
        for (var i = 0; i < t.rewardtpye.length; i++) {
            var o = t.rewardtpye[i];
            if (1 === o) {
                var n = $roleContext.default.ins.getGunSkinInfo(2);
                n.shard += 1;
                $roleContext.default.ins.setGunSkinInfo(n);
                e.push({
                    type: 10,
                    ext: 2,
                    num: 1
                });
            } else {
                if (2 === o) {
                    var s = $configContext.default.instance.gemConfigs.filter(function (t) {
                        return 4 === t.Grade;
                    });
                    var a = s[$seedUtil.default.randomFrom(0, s.length - 1)];
                    $roleContext.default.ins.addPackItem(a, 1);
                    e.push({
                        type: 5,
                        ext: a.id,
                        num: 1
                    });
                } else {
                    3 === o
                        ? ($userDataContext.default.Ins.opearCoin(t.num[i]),
                          e.push({
                              type: 1,
                              num: t.num[i]
                          }))
                        : 4 === o &&
                          ($userDataContext.default.Ins.opearDiamond(t.num[i]),
                          e.push({
                              type: 6,
                              num: t.num[i]
                          }));
                }
            }
        }
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
            infos: e
        });
        $userDataContext.default.Ins.signRecord();
    };
    __decorate([b(cc.Node)], e.prototype, "btnAd", void 0);
    __decorate([b(cc.Node)], e.prototype, "signContent", void 0);
    __decorate([b(cc.Node)], e.prototype, "countLayer", void 0);
    return __decorate([v], e);
})($popupView.PopupView);
exports.default = w;
