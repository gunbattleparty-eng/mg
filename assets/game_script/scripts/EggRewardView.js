var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $list = require("./List");
var $popupView = require("./PopupView");
var $platform = require("./Platform");
var $seedUtil = require("./SeedUtil");
var $aD = require("./AD");
var $adService = require("./AdService");
var $configContext = require("./ConfigContext");
var $skillContext = require("./SkillContext");
var $userDataContext = require("./UserDataContext");
var _ = cc._decorator;
var k = _.ccclass;
var v = _.property;
var b = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.list = null;
        e.adBtn = null;
        e.rewardList = [];
        return e;
    }
    __extends(e, t);
    e.prototype.onResetView = function () {
        this.caculateReward();
        this.list.numItems = this.rewardList.length;
    };
    e.prototype.addEvent = function () {
        this.adBtn.on("click", this.clickAd, this);
    };
    e.prototype.removeEvent = function () {
        this.adBtn.off("click", this.clickAd, this);
    };
    e.prototype.renderItem = function (t, e) {
        var i = this;
        var o = this.rewardList[e];
        if (1 === o.type) {
            $assetsLoader.default.instance.loadRes(
                $assetsMap.BundleNames.Public,
                ["/textures/gem/jinbi"],
                cc.SpriteFrame,
                null,
                function (e, n) {
                    var s = n[0];
                    if (s && cc.isValid(t)) {
                        t.children[0].getComponent(cc.Sprite).spriteFrame = null;
                        t.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, i.node);
                        t.children[2].getComponent(cc.Label).string = o.num.toString();
                    }
                }
            );
        } else {
            if (2 === o.type) {
                $assetsLoader.default.instance.loadRes(
                    $assetsMap.BundleNames.Public,
                    ["/textures/gem/exp"],
                    cc.SpriteFrame,
                    null,
                    function (e, n) {
                        var s = n[0];
                        if (s && cc.isValid(t)) {
                            t.children[0].getComponent(cc.Sprite).spriteFrame = null;
                            t.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, i.node);
                            t.children[2].getComponent(cc.Label).string = o.num.toString();
                        }
                    }
                );
            } else {
                if (3 === o.type) {
                    $assetsLoader.default.instance.loadRes(
                        $assetsMap.BundleNames.Public_Res,
                        ["/equipment_icon/zb" + o.ext],
                        cc.SpriteFrame,
                        null,
                        function (e, n) {
                            var s = n[0];
                            if (s && cc.isValid(t)) {
                                t.children[0].getComponent(cc.Sprite).spriteFrame = null;
                                t.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(
                                    s,
                                    i.node
                                );
                                t.children[2].getComponent(cc.Label).string = o.num.toString();
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
                                    t.children[0].getComponent(cc.Sprite).spriteFrame = null;
                                    t.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(
                                        s,
                                        i.node
                                    );
                                    t.children[2].getComponent(cc.Label).string = o.num.toString();
                                }
                            }
                        );
                    } else {
                        if (6 === o.type) {
                            $assetsLoader.default.instance.loadRes(
                                $assetsMap.BundleNames.Public,
                                ["/textures/gem/zuanshi"],
                                cc.SpriteFrame,
                                null,
                                function (e, n) {
                                    var s = n[0];
                                    if (s && cc.isValid(t)) {
                                        t.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(
                                            s,
                                            i.node
                                        );
                                        t.children[2].getComponent(cc.Label).string = o.num.toString();
                                    }
                                }
                            );
                        }
                    }
                }
            }
        }
    };
    e.prototype.caculateReward = function () {
        this.rewardList.push({
            type: 1,
            num: 3e3
        });
        this.rewardList.push({
            type: 2,
            num: 100
        });
        this.rewardList.push({
            type: 6,
            num: 400
        });
        var t = $seedUtil.default.randomFrom(1, 4);
        var e = $seedUtil.default.randomCount(1, 6, t);
        var i = $seedUtil.default.splitNumber(30, t);
        for (var o = 0; o < t; o++) {
            this.rewardList.push({
                type: 3,
                ext: e[o],
                num: i[o]
            });
        }
        var n = $seedUtil.default.randomFrom(1, 4);
        var s = $skillContext.default.Ins.getUseSkillIds();
        n = Math.min(s.length, n);
        s = $seedUtil.default.randomArr(s, n);
        var r = $seedUtil.default.splitNumber(100, n);
        for (o = 0; o < n; o++) {
            this.rewardList.push({
                type: 4,
                ext: s[o],
                num: r[o]
            });
        }
    };
    e.prototype.clickAd = function () {
        var e = this;
        $adService.default.Ins.showRewardedVideo(function () {
            if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
                $aD.default.toutiao.report("Egg_Benefits");
            }
            for (var i = 0; i < e.rewardList.length; i++) {
                var o = e.rewardList[i];
                1 === o.type
                    ? $userDataContext.default.Ins.opearCoin(o.num)
                    : 2 === o.type
                    ? $userDataContext.default.Ins.addExp(o.num)
                    : 3 === o.type
                    ? $userDataContext.default.Ins.opearEquipBook(o.ext, o.num)
                    : 4 === o.type
                    ? $userDataContext.default.Ins.opearSkillBook(o.ext, o.num)
                    : 6 === o.type && $userDataContext.default.Ins.opearDiamond(o.num);
            }
            $userDataContext.default.Ins.setEgg(6, 1);
            t.prototype.onClickClose.call(e);
        });
    };
    __decorate([v($list.default)], e.prototype, "list", void 0);
    __decorate([v(cc.Node)], e.prototype, "adBtn", void 0);
    return __decorate([k], e);
})($popupView.PopupView);
exports.default = b;
