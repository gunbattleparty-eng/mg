var o;
var $assetsMap = require("./AssetsMap");
var $eventManager = require("./EventManager");
var $popupManager = require("./PopupManager");
var $uIManager = require("./UIManager");
var $platform = require("./Platform");
var $remoteAudio = require("./RemoteAudio");
var $seedUtil = require("./SeedUtil");
var $aD = require("./AD");
var $adService = require("./AdService");
var $configContext = require("./ConfigContext");
var $localEventName = require("./LocalEventName");
var $roleContext = require("./RoleContext");
var $shopContext = require("./ShopContext");
var $taskContext = require("./TaskContext");
var $userDataContext = require("./UserDataContext");
var $coinDiamondView = require("./CoinDiamondView");
var $startView = require("./StartView");
var A = cc._decorator;
var S = A.ccclass;
var C = A.property;
var I = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.btnLayer = null;
        e.normalOPen1Btn = null;
        e.normalOPen10Btn = null;
        e.normalAdBtn = null;
        e.normalCount = null;
        e.normalProgressNode = null;
        e.advancedOPen1Btn = null;
        e.advancedOPen10Btn = null;
        e.advancedAdBtn = null;
        e.advancedCount = null;
        e.advancedProgressNode = null;
        e.excellentOPen1Btn = null;
        e.excellentOPen10Btn = null;
        e.excellentAdBtn = null;
        e.excellentCount = null;
        e.excellentProgressNode = null;
        e.boxAnimNode = null;
        e.dir = 1;
        e.count = 0;
        e.isSheep = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {
        var t = "";
        $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO
            ? (t = "tt_open_shop_diamond")
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT && (t = "wx_open_shop_diamond");
        if (!("" === t || $configContext.default.instance.getAdSwitch(t))) {
            $configContext.default.instance.gemBoxConfigs[0].video_num = 1;
            $configContext.default.instance.gemBoxConfigs[0].VLottery_num = 1;
            $configContext.default.instance.gemBoxConfigs[1].video_num = 1;
            $configContext.default.instance.gemBoxConfigs[1].VLottery_num = 1;
            $configContext.default.instance.gemBoxConfigs[2].video_num = 1;
            $configContext.default.instance.gemBoxConfigs[2].VLottery_num = 1;
        }
        this.renderBtn(!1);
        this.renderBtn(!0);
        this.renderSkinBtn();
        this.renderCount(!1);
        this.renderCount(!0);
        this.renderSkinCount();
        this.isSheep = 1 === $userDataContext.default.Ins.getEgg(2);
        if (this.isSheep) {
            this.boxAnimNode.getComponentInChildren(dragonBones.ArmatureDisplay).playAnimation("biyan", 0);
        }
        this.normalAdBtn.getComponentInChildren(cc.Label).string =
            "抽" + $configContext.default.instance.gemBoxConfigs[0].VLottery_num + "次";
        this.advancedAdBtn.getComponentInChildren(cc.Label).string =
            "抽" + $configContext.default.instance.gemBoxConfigs[1].VLottery_num + "次";
        this.excellentAdBtn.getComponentInChildren(cc.Label).string =
            "抽" + $configContext.default.instance.gemBoxConfigs[2].VLottery_num + "次";
        this.normalOPen1Btn.on("click", this.clickNormalOPen1, this);
        this.normalOPen10Btn.on("click", this.clickNormalOPen10, this);
        this.normalAdBtn.on("click", this.clickNormalAd, this);
        this.advancedOPen1Btn.on("click", this.clickAdvancedOPen1, this);
        this.advancedOPen10Btn.on("click", this.clickAdvancedOPen10, this);
        this.advancedAdBtn.on("click", this.clickAdvancedAd, this);
        this.excellentOPen1Btn.on("click", this.clickSkinBox1, this);
        this.excellentOPen10Btn.on("click", this.clickSkinBox10, this);
        this.excellentAdBtn.on("click", this.clickSkinBoxAd, this);
        for (var e = 0; e < this.btnLayer.children.length; e++) {
            this.btnLayer.children[e].on("click", this.clickTip, this);
        }
        if ($userDataContext.default.Ins.getEgg(2) < 2) {
            this.boxAnimNode.on(cc.Node.EventType.TOUCH_END, this.touchBoxAnim, this);
            this.boxAnimNode.on(cc.Node.EventType.TOUCH_MOVE, this.moveBoxAnim, this);
        }
    };
    e.prototype.clickTip = function (t) {
        var e = this.btnLayer.children.indexOf(t.node) + 1;
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.ChanceView, {
            id: e
        });
    };
    e.prototype.onDestroy = function () {
        this.normalOPen1Btn.off("click", this.clickNormalOPen1, this);
        this.normalOPen10Btn.off("click", this.clickNormalOPen10, this);
        this.normalAdBtn.off("click", this.clickNormalAd, this);
        this.advancedOPen1Btn.off("click", this.clickAdvancedOPen1, this);
        this.advancedOPen10Btn.off("click", this.clickAdvancedOPen10, this);
        this.advancedAdBtn.off("click", this.clickAdvancedAd, this);
        this.excellentOPen1Btn.off("click", this.clickSkinBox1, this);
        this.excellentOPen10Btn.off("click", this.clickSkinBox10, this);
        this.excellentAdBtn.off("click", this.clickSkinBoxAd, this);
    };
    e.prototype.touchBoxAnim = function () {
        if ($userDataContext.default.Ins.getEgg(1) < 1) {
            if (this.isSheep) {
                $uIManager.UIManager.instance.showToast("缺少钥匙");
            } else {
                {
                    var t = this.boxAnimNode.getComponentInChildren(dragonBones.ArmatureDisplay);
                    t.playAnimation("yao", 1);
                    t.once(
                        dragonBones.EventObject.COMPLETE,
                        function () {
                            t.playAnimation("stand", 0);
                        },
                        this
                    );
                }
            }
        } else {
            if (1 === $userDataContext.default.Ins.getEgg(1)) {
                if (this.isSheep) {
                    $userDataContext.default.Ins.setEgg(1, 2);
                    $userDataContext.default.Ins.setEgg(2, 2);
                    this.boxAnimNode.getComponentInChildren(dragonBones.ArmatureDisplay).playAnimation("stand", 0);
                    var e = $configContext.default.instance.gemConfigs.filter(function (t) {
                        return 7 === t.Grade;
                    });
                    e = [e[$seedUtil.default.randomFrom(0, e.length - 1)]];
                    $roleContext.default.ins.addPackItem(e[0], 1);
                    $popupManager.PopupManager.instance.open(
                        $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView,
                        {
                            infos: this.createInfo(e)
                        }
                    );
                    $eventManager.default.send($localEventName.default.RENDER_GEM, $startView.MenuType.ALL);
                } else {
                    var i = this.boxAnimNode.getComponentInChildren(dragonBones.ArmatureDisplay);
                    i.playAnimation("yao", 1);
                    i.once(
                        dragonBones.EventObject.COMPLETE,
                        function () {
                            i.playAnimation("stand", 0);
                        },
                        this
                    );
                }
            }
        }
    };
    e.prototype.moveBoxAnim = function (t) {
        var e = this;
        if (!(this.count >= 3)) {
            -1 === this.dir
                ? t.getStartLocation().x - t.getLocation().x >= 100 && (this.count++, (this.dir = 1))
                : t.getLocation().x - t.getStartLocation().x >= 100 && (this.count++, (this.dir = -1));
            if (this.count >= 3) {
                t.stopPropagationImmediate();
                $popupManager.PopupManager.instance.open(
                    $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.EggKeyView,
                    {
                        type: 2
                    },
                    {
                        closeCallback: function () {
                            1 === $userDataContext.default.Ins.getEgg(2)
                                ? (e.boxAnimNode
                                      .getComponentInChildren(dragonBones.ArmatureDisplay)
                                      .playAnimation("biyan", 0),
                                  (e.isSheep = !0))
                                : ((e.count = 0), (e.dir = -1));
                        }
                    }
                );
            }
        }
    };
    e.prototype.clickNormalOPen1 = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        if ($userDataContext.default.Ins.opearDiamond(-$configContext.default.instance.gemBoxConfigs[0].spend)) {
            var t = $shopContext.default.Ins.getNormalBoxRecord(1);
            $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
                infos: this.createInfo(t)
            });
            return void this.renderCount(!0);
        }
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
            type: $coinDiamondView.AstType.DIAMON
        });
    };
    e.prototype.clickAdvancedOPen1 = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        if ($userDataContext.default.Ins.opearDiamond(-$configContext.default.instance.gemBoxConfigs[1].spend)) {
            var t = $shopContext.default.Ins.getRobotBox(1);
            var e = this.createInfo(t.gems);
            for (var i = 0; i < t.robots.length; i++) {
                e.push({
                    type: 11,
                    num: 1,
                    ext: t.robots[i]
                });
            }
            $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
                infos: e
            });
            return void this.renderCount(!1);
        }
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
            type: $coinDiamondView.AstType.DIAMON
        });
    };
    e.prototype.clickSkinBox1 = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        if ($userDataContext.default.Ins.opearDiamond(-$configContext.default.instance.gemBoxConfigs[2].spend)) {
            var t = $shopContext.default.Ins.getSkinBoxRecord(1);
            $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
                infos: t
            });
            return void this.renderSkinCount();
        }
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
            type: $coinDiamondView.AstType.DIAMON
        });
    };
    e.prototype.clickSkinBox10 = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        if ($userDataContext.default.Ins.opearDiamond(10 * -$configContext.default.instance.gemBoxConfigs[2].spend)) {
            var t = $shopContext.default.Ins.getSkinBoxRecord(10);
            $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
                infos: t
            });
            return void this.renderSkinCount();
        }
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
            type: $coinDiamondView.AstType.DIAMON
        });
    };
    e.prototype.clickSkinBoxAd = function () {
        var t = this;
        $remoteAudio.default.instance.playEffectMusic("Click");
        $adService.default.Ins.showRewardedVideo(function () {
            if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
                $aD.default.toutiao.report("JP_box");
            }
            var e = $shopContext.default.Ins.getSkinBoxVideoRecord();
            if (++e >= $configContext.default.instance.gemBoxConfigs[2].video_num) {
                e = 0;
                var i = $shopContext.default.Ins.getSkinBoxRecord(
                    $configContext.default.instance.gemBoxConfigs[0].VLottery_num
                );
                $popupManager.PopupManager.instance.open(
                    $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView,
                    {
                        infos: i
                    }
                );
                t.renderSkinCount();
                $shopContext.default.Ins.setSkinBoxVideoRecord(e);
                t.renderSkinBtn();
            } else {
                $shopContext.default.Ins.setSkinBoxVideoRecord(e);
                t.renderSkinBtn();
            }
        });
    };
    e.prototype.clickNormalOPen10 = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        if ($userDataContext.default.Ins.opearDiamond(10 * -$configContext.default.instance.gemBoxConfigs[0].spend)) {
            var t = $shopContext.default.Ins.getNormalBoxRecord(10);
            $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
                infos: this.createInfo(t)
            });
            return void this.renderCount(!0);
        }
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
            type: $coinDiamondView.AstType.DIAMON
        });
    };
    e.prototype.clickAdvancedOPen10 = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        if ($userDataContext.default.Ins.opearDiamond(10 * -$configContext.default.instance.gemBoxConfigs[1].spend)) {
            var t = $shopContext.default.Ins.getRobotBox(10);
            var e = this.createInfo(t.gems);
            for (var i = 0; i < t.robots.length; i++) {
                e.push({
                    type: 11,
                    num: 1,
                    ext: t.robots[i]
                });
            }
            $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
                infos: e
            });
            return void this.renderCount(!1);
        }
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
            type: $coinDiamondView.AstType.DIAMON
        });
    };
    e.prototype.clickNormalAd = function () {
        var t = this;
        $remoteAudio.default.instance.playEffectMusic("Click");
        $adService.default.Ins.showRewardedVideo(function () {
            if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
                $aD.default.toutiao.report("normal_box");
            }
            var e = $shopContext.default.Ins.getBoxVideoRecord(!0);
            if (++e >= $configContext.default.instance.gemBoxConfigs[0].video_num) {
                e = 0;
                var i = $shopContext.default.Ins.getNormalBoxRecord(
                    $configContext.default.instance.gemBoxConfigs[0].VLottery_num
                );
                $popupManager.PopupManager.instance.open(
                    $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView,
                    {
                        infos: t.createInfo(i)
                    }
                );
                t.renderCount(!0);
                $shopContext.default.Ins.setBoxVideoRecord(!0, e);
                t.renderBtn(!0);
            } else {
                $shopContext.default.Ins.setBoxVideoRecord(!0, e);
                t.renderBtn(!0);
            }
        });
    };
    e.prototype.clickAdvancedAd = function () {
        var t = this;
        $remoteAudio.default.instance.playEffectMusic("Click");
        $adService.default.Ins.showRewardedVideo(function () {
            if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
                $aD.default.toutiao.report("NB_box");
            }
            var e = $shopContext.default.Ins.getBoxVideoRecord(!1);
            if (++e >= $configContext.default.instance.gemBoxConfigs[1].video_num) {
                e = 0;
                var i = $shopContext.default.Ins.getAdvancedBoxRecord(
                    $configContext.default.instance.gemBoxConfigs[1].VLottery_num
                );
                $popupManager.PopupManager.instance.open(
                    $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView,
                    {
                        infos: t.createInfo(i)
                    }
                );
                t.renderCount(!1);
                $shopContext.default.Ins.setBoxVideoRecord(!1, e);
                t.renderBtn(!1);
            } else {
                $shopContext.default.Ins.setBoxVideoRecord(!1, e);
                t.renderBtn(!1);
            }
        });
    };
    e.prototype.createInfo = function (t) {
        var e = [];
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            e.push({
                type: 5,
                ext: o.id,
                num: 1
            });
        }
        $taskContext.default.Ins.setTaskRecord(4, t.length);
        return e;
    };
    e.prototype.renderBtn = function (t) {
        var e = t
            ? $configContext.default.instance.gemBoxConfigs[0].spend
            : $configContext.default.instance.gemBoxConfigs[1].spend;
        var i = t
            ? $configContext.default.instance.gemBoxConfigs[0].video_num
            : $configContext.default.instance.gemBoxConfigs[1].video_num;
        (t ? this.normalOPen1Btn : this.advancedOPen1Btn).children[2].getComponent(cc.Label).string = e.toString();
        (t ? this.normalOPen10Btn : this.advancedOPen10Btn).children[2].getComponent(cc.Label).string = (
            10 * e
        ).toString();
        var o = t ? this.normalAdBtn : this.advancedAdBtn;
        o.children[2].active = 1 !== i;
        o.children[2].getComponent(cc.Label).string =
            "(" + $shopContext.default.Ins.getBoxVideoRecord(t) + "/" + i + ")";
    };
    e.prototype.renderSkinBtn = function () {
        var t = $configContext.default.instance.gemBoxConfigs[2].spend;
        var e = $configContext.default.instance.gemBoxConfigs[2].video_num;
        this.excellentOPen1Btn.children[2].getComponent(cc.Label).string = t.toString();
        this.excellentOPen10Btn.children[2].getComponent(cc.Label).string = (10 * t).toString();
        var i = this.excellentAdBtn;
        i.children[2].active = 1 !== e;
        i.children[2].getComponent(cc.Label).string =
            "(" + $shopContext.default.Ins.getSkinBoxVideoRecord() + "/" + e + ")";
    };
    e.prototype.renderCount = function (t) {
        var e = t ? this.normalCount : this.advancedCount;
        var i = t ? $shopContext.default.Ins.boxRewardRecord.normal : $shopContext.default.Ins.boxRewardRecord.advanced;
        e.string = i.toString();
        this.renderProgress();
    };
    e.prototype.renderSkinCount = function () {
        this.excellentCount.string = $shopContext.default.Ins.boxRewardRecord.skin.toString();
        this.renderProgress();
    };
    e.prototype.renderProgress = function () {
        var t = 10 - $shopContext.default.Ins.boxRewardRecord.normal;
        var e = (t / 10) * 218;
        this.normalProgressNode.setContentSize(cc.size(e, this.normalProgressNode.height));
        e = ((t = 10 - $shopContext.default.Ins.boxRewardRecord.advanced) / 10) * 218;
        this.advancedProgressNode.setContentSize(cc.size(e, this.advancedProgressNode.height));
        e = ((t = 10 - $shopContext.default.Ins.boxRewardRecord.skin) / 10) * 218;
        this.excellentProgressNode.setContentSize(cc.size(e, this.excellentProgressNode.height));
    };
    __decorate([C(cc.Node)], e.prototype, "btnLayer", void 0);
    __decorate([C(cc.Node)], e.prototype, "normalOPen1Btn", void 0);
    __decorate([C(cc.Node)], e.prototype, "normalOPen10Btn", void 0);
    __decorate([C(cc.Node)], e.prototype, "normalAdBtn", void 0);
    __decorate([C(cc.Label)], e.prototype, "normalCount", void 0);
    __decorate([C(cc.Node)], e.prototype, "normalProgressNode", void 0);
    __decorate([C(cc.Node)], e.prototype, "advancedOPen1Btn", void 0);
    __decorate([C(cc.Node)], e.prototype, "advancedOPen10Btn", void 0);
    __decorate([C(cc.Node)], e.prototype, "advancedAdBtn", void 0);
    __decorate([C(cc.Label)], e.prototype, "advancedCount", void 0);
    __decorate([C(cc.Node)], e.prototype, "advancedProgressNode", void 0);
    __decorate([C(cc.Node)], e.prototype, "excellentOPen1Btn", void 0);
    __decorate([C(cc.Node)], e.prototype, "excellentOPen10Btn", void 0);
    __decorate([C(cc.Node)], e.prototype, "excellentAdBtn", void 0);
    __decorate([C(cc.Label)], e.prototype, "excellentCount", void 0);
    __decorate([C(cc.Node)], e.prototype, "excellentProgressNode", void 0);
    __decorate([C(cc.Node)], e.prototype, "boxAnimNode", void 0);
    return __decorate([S], e);
})(cc.Component);
exports.default = I;
