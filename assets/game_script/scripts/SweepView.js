var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $list = require("./List");
var $popupManager = require("./PopupManager");
var $uIManager = require("./UIManager");
var $popupView = require("./PopupView");
var $platform = require("./Platform");
var $remoteAudio = require("./RemoteAudio");
var $countDownUtil = require("./CountDownUtil");
var $seedUtil = require("./SeedUtil");
var $util = require("./Util");
var $aD = require("./AD");
var $adService = require("./AdService");
var $battleContext = require("./BattleContext");
var $configContext = require("./ConfigContext");
var $localEventName = require("./LocalEventName");
var $skillContext = require("./SkillContext");
var $userDataContext = require("./UserDataContext");
var $startView = require("./StartView");
var P = cc._decorator;
var R = P.ccclass;
var B = P.property;
var x = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.levelLabel = null;
        e.coinLabel = null;
        e.skillLable = null;
        e.timeLabel = null;
        e.list = null;
        e.enemptyTip = null;
        e.resdieLabel = null;
        e.btnAd = null;
        e.btnGina = null;
        e.sweepRewards = [];
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var t = $userDataContext.default.Ins.getSweepTime();
        this.sweepRewards = this.caculateReward(t);
        this.renderTime();
        this.schedule(this.renderTime, 1);
        this.list.numItems = this.sweepRewards.length;
    };
    e.prototype.onResetView = function () {
        var t = $battleContext.default.Ins.getLastRecord();
        var e = 0 !== t.level ? t.level : 1;
        this.levelLabel.string = "第" + t.level + "关";
        var i = $configContext.default.instance.getSweepConfig(e);
        this.coinLabel.string = "" + i.rewardnum[0];
        this.skillLable.string = "" + i.rewardnum[1];
        var o = $userDataContext.default.Ins.sweepQuikCount();
        this.resdieLabel.string = o + "/4";
        this.btnAd.children[0].active = o < 4;
        this.btnAd.children[2].active = 4 === o;
        this.list.node.active = 0 !== this.sweepRewards.length;
        this.enemptyTip.active = 0 === this.sweepRewards.length;
        this.btnAd.getComponent(cc.Button).interactable = o > 0;
        $util.default.updateMaterialState(this.btnAd, o <= 0);
    };
    e.prototype.addEvent = function () {
        this.btnAd.on("click", this.clickAd, this);
        this.btnGina.on("click", this.clickGain, this);
    };
    e.prototype.removeEvent = function () {
        this.btnAd.off("click", this.clickAd, this);
        this.btnGina.off("click", this.clickGain, this);
    };
    e.prototype.clickAd = function () {
        var t = this;
        if ($userDataContext.default.Ins.sweepQuikCount() > 3) {
            if (!$userDataContext.default.Ins.opearPower(-5)) {
                return void $uIManager.UIManager.instance.showToast("体力不足");
            }
            $remoteAudio.default.instance.playEffectMusic("Click");
            $userDataContext.default.Ins.autoSeep();
            var e = this.caculateReward(8, !1);
            this.reward(e);
            this.onResetView();
        } else {
            $adService.default.Ins.showRewardedVideo(function () {
                if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
                    $aD.default.toutiao.report("sweep");
                }
                $userDataContext.default.Ins.autoSeep();
                var e = t.caculateReward(8, !1);
                t.reward(e);
                t.onResetView();
            });
        }
    };
    e.prototype.clickGain = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        if (0 !== this.sweepRewards.length) {
            var t = $userDataContext.default.Ins.getSweepTime();
            this.sweepRewards = this.caculateReward(t);
            $userDataContext.default.Ins.sweep();
            this.reward(this.sweepRewards);
            this.sweepRewards.length = 0;
            this.onResetView();
            this.list.numItems = this.sweepRewards.length;
            this.list.updateAll();
            $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.Battle);
        } else {
            $uIManager.UIManager.instance.showToast("没有可领取的奖励");
        }
    };
    e.prototype.reward = function (t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            1 === i.type
                ? $userDataContext.default.Ins.opearCoin(i.num)
                : 4 === i.type && $userDataContext.default.Ins.opearSkillBook(i.num, i.ext);
        }
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
            infos: $util.default.deepCopy(t)
        });
        $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.ALL);
    };
    e.prototype.caculateReward = function (t, e) {
        if (void 0 === e) {
            e = !0;
        }
        var i = [];
        if (t <= 0) {
            return i;
        }
        var o = $battleContext.default.Ins.getLastRecord();
        var n = 0 !== o.level ? o.level : 1;
        var s = $configContext.default.instance.getSweepConfig(n);
        i.push({
            type: 1,
            num: s.rewardnum[0] * t
        });
        var r = s.rewardnum[1] * t;
        e
            ? $seedUtil.default.init($userDataContext.default.Ins.sweepInfo.seed)
            : $seedUtil.default.init($seedUtil.default.randomFrom(0, 9999999));
        var a = $seedUtil.default.randomFromSync(1, 4);
        var l = $skillContext.default.Ins.getUseSkillIds();
        a = Math.min(l.length, a);
        a = Math.min(r, a);
        l = $seedUtil.default.randomArrSync(l, a);
        var c = $seedUtil.default.splitNumber(r, a, !0);
        for (var u = 0; u < a; u++) {
            $userDataContext.default.Ins.opearSkillBook(l[u], c[u]);
            i.push({
                type: 4,
                ext: l[u],
                num: c[u]
            });
        }
        return i;
    };
    e.prototype.renderTime = function () {
        var t = $userDataContext.default.Ins.sweepInfo.lastSweepTime;
        var e = $countDownUtil.CountDownUtil.currTime - t;
        if (e > 288e5) {
            e = 288e5;
        }
        var i = $util.default.formatDate(Math.ceil(e / 1e3));
        this.timeLabel.string = i[0] + ":" + i[1] + ":" + i[2];
    };
    e.prototype.renderItem = function (t, e) {
        var i = this;
        var o = this.sweepRewards[e];
        if (1 === o.type) {
            $assetsLoader.default.instance.loadRes(
                $assetsMap.BundleNames.Public,
                ["/textures/gem/jinbi"],
                cc.SpriteFrame,
                null,
                function (e, n) {
                    var s = n[0];
                    if (s && cc.isValid(t)) {
                        t.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, i.node);
                        t.children[1].getComponent(cc.Label).string = o.num.toString();
                    }
                }
            );
        } else {
            if (4 === o.type) {
                var n = $configContext.default.instance.skillConfigs.find(function (t) {
                    return t.id === o.ext;
                });
                $assetsLoader.default.instance.loadRes(
                    $assetsMap.BundleNames.Public_Res,
                    ["/skill_book/" + n.icon],
                    cc.SpriteFrame,
                    null,
                    function (e, n) {
                        var s = n[0];
                        if (s && cc.isValid(t)) {
                            t.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, i.node);
                            t.children[1].getComponent(cc.Label).string = o.num.toString();
                        }
                    }
                );
            }
        }
    };
    __decorate([B(cc.Label)], e.prototype, "levelLabel", void 0);
    __decorate([B(cc.Label)], e.prototype, "coinLabel", void 0);
    __decorate([B(cc.Label)], e.prototype, "skillLable", void 0);
    __decorate([B(cc.Label)], e.prototype, "timeLabel", void 0);
    __decorate([B($list.default)], e.prototype, "list", void 0);
    __decorate([B(cc.Node)], e.prototype, "enemptyTip", void 0);
    __decorate([B(cc.Label)], e.prototype, "resdieLabel", void 0);
    __decorate([B(cc.Node)], e.prototype, "btnAd", void 0);
    __decorate([B(cc.Node)], e.prototype, "btnGina", void 0);
    return __decorate([R], e);
})($popupView.PopupView);
exports.default = x;
