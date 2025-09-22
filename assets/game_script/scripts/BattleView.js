var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $eventManager = require("./EventManager");
var $popupManager = require("./PopupManager");
var $uIManager = require("./UIManager");
var $platform = require("./Platform");
var $remoteAudio = require("./RemoteAudio");
var $util = require("./Util");
var $battleContext = require("./BattleContext");
var $configContext = require("./ConfigContext");
var $equipmentContext = require("./EquipmentContext");
var $globalParam = require("./GlobalParam");
var $localEventName = require("./LocalEventName");
var $onlineContext = require("./OnlineContext");
var $switchContext = require("./SwitchContext");
var $taskContext = require("./TaskContext");
var $userDataContext = require("./UserDataContext");
var $gameContext = require("./GameContext");
var $coinDiamondView = require("./CoinDiamondView");
var $itemView = require("./ItemView");
var $startView = require("./StartView");
var B = cc._decorator;
var x = B.ccclass;
var O = B.property;
var L = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.levelContent = null;
        e.btnStart = null;
        e.btnPre = null;
        e.btnNext = null;
        e.levelLabel = null;
        e.progressBox = null;
        e.btnTask = null;
        e.btnOnline = null;
        e.btnTip = null;
        e.btnPack = null;
        e.btnSweep = null;
        e.progressLayer = null;
        e.btnEgg = null;
        e.btnRank = null;
        e.btnWeek = null;
        e.bg = null;
        e.bg2 = null;
        e.isAnim = !1;
        e.anims = ["stand1", "stand3", "stand2"];
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        if ($switchContext.SwitchContext.currVersion === $switchContext.GameVersion.V2) {
            this.bg.spriteFrame = this.bg2;
        }
    };
    e.prototype.start = function () {
        $eventManager.default.on($localEventName.default.RENDER_DOT, this.renderDot, this);
        this.btnStart.on("click", this.clickGame, this);
        this.render();
        this.btnPre.on("click", this.clickPre, this);
        this.btnNext.on("click", this.clickNext, this);
        this.btnTask.on("click", this.clickTask, this);
        this.btnOnline.on("click", this.clickOnline, this);
        this.progressBox.on(cc.Node.EventType.TOUCH_START, this.touchBox, this);
        this.btnTip.on("click", this.clickTip, this);
        this.btnPack.on("click", this.clickPack, this);
        this.btnSweep.on("click", this.clickSweep, this);
        this.btnSweep.active = $battleContext.default.Ins.getLastRecord().level > 0;
        this.btnEgg.on("click", this.clickEgg, this);
        this.btnRank.on("click", this.clickRank, this);
        this.btnWeek.on("click", this.clickWeek, this);
        this.renderDot($startView.MenuType.Battle);
        if (!$configContext.default.instance.getAdSwitch2("open_shop_diamond")) {
            if ($switchContext.SwitchContext.currVersion === $switchContext.GameVersion.V2) {
                this.btnOnline.active = !1;
                this.btnPack.active = !1;
                this.btnEgg.active = !1;
                this.btnTask.active = !1;
                this.btnRank.active = !1;
            }
            this.btnWeek.active = !1;
        }
    };
    e.prototype.onDestroy = function () {
        $eventManager.default.off($localEventName.default.RENDER_DOT, this.renderDot, this);
        this.btnStart.off("click", this.clickGame, this);
        this.btnPre.off("click", this.clickPre, this);
        this.btnNext.off("click", this.clickNext, this);
        this.btnTask.off("click", this.clickTask, this);
        this.btnOnline.off("click", this.clickOnline, this);
        this.progressBox.off(cc.Node.EventType.TOUCH_START, this.touchBox, this);
        this.btnTip.off("click", this.clickTip, this);
        this.btnPack.off("click", this.clickPack, this);
        this.btnSweep.off("click", this.clickSweep, this);
        this.btnEgg.off("click", this.clickEgg, this);
        this.btnRank.off("click", this.clickRank, this);
        this.btnWeek.off("click", this.clickWeek, this);
    };
    e.prototype.clickWeek = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.WeeklyPassView);
    };
    e.prototype.clickRank = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        if (
            $battleContext.default.Ins.getLastRecord().level < 10 &&
            $platform.Platform.currPlatForm !== $platform.PlatformEnum.BROWSER
        ) {
            return $uIManager.UIManager.instance.showToast("通关10关解锁排行榜");
        }
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RankView);
    };
    e.prototype.clickEgg = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.EggTipView);
    };
    e.prototype.reuse = function () {
        this.renderDot($startView.MenuType.Battle);
    };
    e.prototype.renderDot = function (t) {
        if (!(t !== $startView.MenuType.Battle && t !== $startView.MenuType.ALL)) {
            this.btnOnline.children[0].active = $onlineContext.default.Ins.hasRedDot();
            this.btnTask.children[0].active = $taskContext.default.Ins.hasRedDot();
            this.btnPack.children[1].active = !$userDataContext.default.Ins.isSign();
            this.btnSweep.children[1].active = $userDataContext.default.Ins.getSweepTime() >= 8;
            this.btnEgg.children[1].active = -1 === $userDataContext.default.Ins.getCurrConfigIndex();
        }
    };
    e.prototype.clickSweep = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.SweepView);
    };
    e.prototype.clickPack = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.NewPackView);
    };
    e.prototype.clickPre = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        $battleContext.default.Ins.currLevel--;
        this.render();
    };
    e.prototype.clickNext = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        $battleContext.default.Ins.currLevel++;
        this.render();
    };
    e.prototype.clickTask = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.TaskView);
    };
    e.prototype.clickOnline = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.OnlineView);
    };
    e.prototype.clickTip = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.BattleTipView, {
            level: $battleContext.default.Ins.currLevel
        });
    };
    e.prototype.render = function () {
        var t = $battleContext.default.Ins.getLastRecord().level;
        this.btnPre.active = 1 !== $battleContext.default.Ins.currLevel;
        this.btnNext.active =
            $battleContext.default.Ins.currLevel < $globalParam.default.countLevel &&
            $battleContext.default.Ins.currLevel < t + 2;
        this.levelLabel.string = "第" + $battleContext.default.Ins.currLevel + "关";
        this.btnStart.active = $battleContext.default.Ins.currLevel < t + 2;
        $util.default.updateMaterialState(this.levelContent, !this.btnStart.active);
        this.renderProgress();
        this.renderBox(!this.btnStart.active);
    };
    e.prototype.renderProgress = function () {
        var t = $battleContext.default.Ins.getRecord($battleContext.default.Ins.currLevel);
        this.progressLayer.children[0].active = !1;
        this.progressLayer.children[1].active = !1;
        if (t.resBlood >= 1) {
            this.progressLayer.children[0].active = !0;
        } else {
            if (t.resBlood > 0) {
                this.progressLayer.children[1].active = !0;
                this.progressLayer.children[1].getComponent(cc.Label).string =
                    "城墙血量记录：" + Math.floor(100 * t.resBlood) + "%";
            } else {
                if (t.time > 0) {
                    this.progressLayer.children[1].active = !0;
                    var e = $util.default.formatDate(t.time);
                    this.progressLayer.children[1].getComponent(cc.Label).string = "坚守时间:" + e[1] + ":" + e[2];
                }
            }
        }
    };
    e.prototype.clickGame = function () {
        var t = this;
        $remoteAudio.default.instance.playEffectMusic("Click");
        if ($userDataContext.default.Ins.opearPower(-5)) {
            $equipmentContext.default.Ins.refreshGameGem();
            var e = [];
            var i = $configContext.default.instance.getConfigByLevel($battleContext.default.Ins.currLevel);
            var o = $util.default.deepCopy(i.Monsterspool);
            for (var n = 0; n < o.length; n++) {
                e.push("/prefabs/Enemy_" + o[n]);
            }
            if (0 === $userDataContext.default.Ins.getEgg(6) && 6 === $battleContext.default.Ins.currLevel) {
                e.push("/prefabs/EggEnemy_1");
            }
            $uIManager.UIManager.instance.lodingView(
                [$assetsMap.BundleNames.Game, $assetsMap.BundleNames.Enemy],
                [$assetsMap.BundleNames.Game],
                function () {
                    return __awaiter(t, void 0, void 0, function () {
                        return __generator(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [
                                        4,
                                        $gameContext.default.ins.loadLevel($battleContext.default.Ins.currLevel)
                                    ];
                                case 1:
                                    t.sent();
                                    return [
                                        4,
                                        $assetsLoader.default.instance.loadResSync(
                                            $assetsMap.BundleNames.Enemy,
                                            e,
                                            cc.Prefab
                                        )
                                    ];
                                case 2:
                                    t.sent();
                                    $uIManager.UIManager.instance.replaceView(
                                        $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.GameView
                                    );
                                    $uIManager.UIManager.instance.removeLoadingView();
                                    return [2];
                            }
                        });
                    });
                },
                !1
            );
        } else {
            $popupManager.PopupManager.instance.open(
                $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView,
                {
                    type: $coinDiamondView.AstType.POWER
                }
            );
        }
    };
    e.prototype.touchBox = function () {
        var t = this;
        var e = $battleContext.default.Ins.canPassBoxIndex($battleContext.default.Ins.currLevel);
        if (-1 !== e) {
            $remoteAudio.default.instance.playEffectMusic("Click");
            if (this.isAnim) {
                $uIManager.UIManager.instance.showToast("动画正在播放中~");
            } else {
                {
                    this.isAnim = !0;
                    var i = this.progressBox.children[e].getComponent(dragonBones.ArmatureDisplay);
                    i.playAnimation("on", 1);
                    i.once(
                        dragonBones.EventObject.COMPLETE,
                        function () {
                            t.isAnim = !1;
                            var i = $battleContext.default.Ins.openBox($battleContext.default.Ins.currLevel, e);
                            $popupManager.PopupManager.instance.open(
                                $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView,
                                {
                                    infos: i
                                }
                            );
                            t.renderBox();
                        },
                        this
                    );
                }
            }
        }
    };
    e.prototype.renderBox = function (t) {
        if (void 0 === t) {
            t = !1;
        }
        var e = $battleContext.default.Ins.currLevel;
        var i = this.progressBox.getChildByName("progress_dot").children;
        for (var o = 0; o < 3; o++) {
            i[o].active = $battleContext.default.Ins.isGainBox(e, o);
            var n = this.anims[$battleContext.default.Ins.boxStatus(e, o)];
            if (t) {
                n = "stand4";
            }
            this.progressBox.children[o].getComponent(dragonBones.ArmatureDisplay).playAnimation(n, 0);
        }
        var s = this.progressBox.getChildByName("progress_bar").children;
        var r = $battleContext.default.Ins.getRecord(e);
        s[0].active = r.resBlood >= 0.5;
        s[1].active = r.resBlood >= 1;
    };
    __decorate([O(cc.Node)], e.prototype, "levelContent", void 0);
    __decorate([O(cc.Node)], e.prototype, "btnStart", void 0);
    __decorate([O(cc.Node)], e.prototype, "btnPre", void 0);
    __decorate([O(cc.Node)], e.prototype, "btnNext", void 0);
    __decorate([O(cc.Label)], e.prototype, "levelLabel", void 0);
    __decorate([O(cc.Node)], e.prototype, "progressBox", void 0);
    __decorate([O(cc.Node)], e.prototype, "btnTask", void 0);
    __decorate([O(cc.Node)], e.prototype, "btnOnline", void 0);
    __decorate([O(cc.Node)], e.prototype, "btnTip", void 0);
    __decorate([O(cc.Node)], e.prototype, "btnPack", void 0);
    __decorate([O(cc.Node)], e.prototype, "btnSweep", void 0);
    __decorate([O(cc.Node)], e.prototype, "progressLayer", void 0);
    __decorate([O(cc.Node)], e.prototype, "btnEgg", void 0);
    __decorate([O(cc.Node)], e.prototype, "btnRank", void 0);
    __decorate([O(cc.Node)], e.prototype, "btnWeek", void 0);
    __decorate([O(cc.Sprite)], e.prototype, "bg", void 0);
    __decorate([O(cc.SpriteFrame)], e.prototype, "bg2", void 0);
    return __decorate([x], e);
})($itemView.default);
exports.default = L;
