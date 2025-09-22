var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $list = require("./List");
var $popupManager = require("./PopupManager");
var $popupView = require("./PopupView");
var $configContext = require("./ConfigContext");
var $userDataContext = require("./UserDataContext");
var $gameContext = require("./GameContext");
var $skillHurtItem = require("./SkillHurtItem");
var y = cc._decorator;
var g = y.ccclass;
var _ = y.property;
var k = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.btnBack = null;
        e.list = null;
        e.rewardNode = null;
        e.skillIds = [];
        e.rewardInfos = [];
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var t = this;
        $gameContext.default.ins.hurtRecord.forEach(function (e, i) {
            t.skillIds.push(i);
        });
        if (0 !== this.skillIds.length) {
            this.list.numItems = this.skillIds.length;
        }
    };
    e.prototype.onResetView = function () {
        this.rewardInfos = $gameContext.default.ins.pauseReward();
        this.renderReward();
    };
    e.prototype.addEvent = function () {
        this.btnBack.on("click", this.clickBack, this);
    };
    e.prototype.removeEvent = function () {
        this.btnBack.off("click", this.clickBack, this);
    };
    e.prototype.clickBack = function () {
        this.uiCallback.closeCallback = null;
        t.prototype.onClickClose.call(this);
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.SettleView, {
            isSuccess: !1,
            isPause: !0
        });
    };
    e.prototype.renderItem = function (t, e) {
        var i = this.skillIds[e];
        var o = $gameContext.default.ins.gameStartTime - $gameContext.default.ins.skillInfo.chooseParentTime.get(i);
        var n = {
            icon: 1 === i ? "jn1_1" : $configContext.default.instance.skillConfigsMap.get(i).icon,
            skillCount: $gameContext.default.ins.skillInfo.getChooseParendCount(i),
            skillName: $configContext.default.instance.basicSkillConfigs.find(function (t) {
                return t.skillmaster_id === i;
            }).name,
            skillHurt: $gameContext.default.ins.hurtRecord.get(i),
            skillHurtSec: Math.floor($gameContext.default.ins.hurtRecord.get(i) / o)
        };
        t.getComponent($skillHurtItem.default).render(n);
    };
    e.prototype.renderReward = function () {
        var t = this;
        this.rewardNode.children.forEach(function (t) {
            return (t.active = !1);
        });
        var e = function (e) {
            var o = i.rewardNode.children[e];
            o.active = !0;
            var n = i.rewardInfos[e];
            if (1 === n.type) {
                $assetsLoader.default.instance.loadRes(
                    $assetsMap.BundleNames.Public,
                    ["/textures/gem/jinbi"],
                    cc.SpriteFrame,
                    null,
                    function (e, i) {
                        var s = i[0];
                        if (s && cc.isValid(o)) {
                            o.children[0].getComponent(cc.Sprite).spriteFrame = null;
                            o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                            o.children[2].getComponent(cc.Label).string = n.num.toString();
                        }
                    }
                );
            } else {
                if (2 === n.type) {
                    $assetsLoader.default.instance.loadRes(
                        $assetsMap.BundleNames.Public,
                        ["/textures/gem/exp"],
                        cc.SpriteFrame,
                        null,
                        function (e, i) {
                            var s = i[0];
                            if (s && cc.isValid(o)) {
                                o.children[0].getComponent(cc.Sprite).spriteFrame = null;
                                o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(
                                    s,
                                    t.node
                                );
                                o.children[2].getComponent(cc.Label).string = n.num.toString();
                            }
                        }
                    );
                } else {
                    if (3 === n.type) {
                        $assetsLoader.default.instance.loadRes(
                            $assetsMap.BundleNames.Public_Res,
                            ["/equipment_icon/zb" + n.ext],
                            cc.SpriteFrame,
                            null,
                            function (e, i) {
                                var s = i[0];
                                if (s && cc.isValid(o)) {
                                    o.children[0].getComponent(cc.Sprite).spriteFrame = null;
                                    o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(
                                        s,
                                        t.node
                                    );
                                    o.children[2].getComponent(cc.Label).string = n.num.toString();
                                }
                            }
                        );
                        $userDataContext.default.Ins.opearEquipBook(n.ext, n.num);
                    } else {
                        if (4 === n.type) {
                            var s = "jn0";
                            if (0 !== n.ext) {
                                s = $configContext.default.instance.skillConfigs.find(function (t) {
                                    return t.id === n.ext;
                                }).icon;
                            }
                            $assetsLoader.default.instance.loadRes(
                                $assetsMap.BundleNames.Public_Res,
                                ["/skill_book/" + s],
                                cc.SpriteFrame,
                                null,
                                function (e, i) {
                                    var s = i[0];
                                    if (s && cc.isValid(o)) {
                                        o.children[0].getComponent(cc.Sprite).spriteFrame = null;
                                        o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(
                                            s,
                                            t.node
                                        );
                                        o.children[2].getComponent(cc.Label).string = n.num.toString();
                                    }
                                }
                            );
                        } else {
                            if (5 === n.type) {
                                var c = ["/textures/gem/wenhao", "/textures/gem/k1"];
                                if (0 !== n.ext) {
                                    var u = $configContext.default.instance.gemConfigs.find(function (t) {
                                        return t.id === n.ext;
                                    });
                                    c = ["/textures/gem/g" + u.part + "_" + u.Grade, "/textures/gem/k" + u.Grade];
                                }
                                $assetsLoader.default.instance.loadRes(
                                    $assetsMap.BundleNames.Public,
                                    c,
                                    cc.SpriteFrame,
                                    null,
                                    function (e, i) {
                                        var s = i[0];
                                        if (s && cc.isValid(o)) {
                                            o.children[0].getComponent(cc.Sprite).spriteFrame =
                                                $resUtil.ResUtil.assignWith(i[1], t.node);
                                            o.children[1].getComponent(cc.Sprite).spriteFrame =
                                                $resUtil.ResUtil.assignWith(s, t.node);
                                            o.children[2].getComponent(cc.Label).string = n.num.toString();
                                        }
                                    }
                                );
                            }
                        }
                    }
                }
            }
        };
        var i = this;
        for (var o = 0; o < this.rewardInfos.length; o++) {
            e(o);
        }
    };
    __decorate([_(cc.Node)], e.prototype, "btnBack", void 0);
    __decorate([_($list.default)], e.prototype, "list", void 0);
    __decorate([_(cc.Node)], e.prototype, "rewardNode", void 0);
    return __decorate([g], e);
})($popupView.PopupView);
exports.default = k;
