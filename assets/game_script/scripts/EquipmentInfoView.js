var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $popupManager = require("./PopupManager");
var $uIManager = require("./UIManager");
var $popupView = require("./PopupView");
var $remoteAudio = require("./RemoteAudio");
var $configContext = require("./ConfigContext");
var $equipmentContext = require("./EquipmentContext");
var $localEventName = require("./LocalEventName");
var $roleContext = require("./RoleContext");
var $userDataContext = require("./UserDataContext");
var $gameGemInfo = require("./GameGemInfo");
var $startView = require("./StartView");
var $coinDiamondView = require("./CoinDiamondView");
var $equipmentGemDescItem = require("./EquipmentGemDescItem");
var A = cc._decorator;
var S = A.ccclass;
var C = A.property;
var I = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.titleLabel = null;
        e.eIconSp = null;
        e.gemInfos = null;
        e.atkLable = null;
        e.gradeLabel = null;
        e.btnUpgrade = null;
        e.btnUpgradeAuto = null;
        e.upgradeInfoLayer = null;
        e.gemDescItem = null;
        e.upgradeAnim = null;
        e.euipmentPart = null;
        e.colors = [new cc.Color().fromHEX("#13613B"), new cc.Color().fromHEX("#9C2A2E")];
        e.partNames = ["帽子", "上衣", "鞋子", "护臂", "裤子", "手套"];
        return e;
    }
    __extends(e, t);
    e.prototype.onResetView = function () {
        this.euipmentPart = this.uiParam.param.part;
        this.titleLabel.string = this.partNames[this.euipmentPart - 1];
        this.render();
        this.renderDot();
    };
    e.prototype.addEvent = function () {
        this.btnUpgrade.on("click", this.clickUpgradeEquipt, this);
        this.btnUpgradeAuto.on("click", this.clickAutoUpgrade, this);
        for (var t = 0; t < this.gemInfos.children.length; t++) {
            var e = this.gemInfos.children[t].children[1].getChildByName("lock");
            e.gem_index = t;
            e.on(cc.Node.EventType.TOUCH_START, this.lockOrUnlockGem, this);
            var i = this.gemInfos.children[t].children[1].getChildByName("xiexia2");
            i.gem_index = t;
            i.on("click", this.clickUnload, this);
        }
        $eventManager.default.on($localEventName.default.RENDER_GEM, this.renderGems, this);
    };
    e.prototype.removeEvent = function () {
        this.btnUpgrade.off("click", this.clickUpgradeEquipt, this);
        this.btnUpgradeAuto.off("click", this.clickAutoUpgrade, this);
        for (var t = 0; t < this.gemInfos.children.length; t++) {
            this.gemInfos.children[t].children[1]
                .getChildByName("lock")
                .off(cc.Node.EventType.TOUCH_START, this.lockOrUnlockGem, this);
            this.gemInfos.children[t].children[1].getChildByName("xiexia2").off("click", this.clickUnload, this);
        }
        $eventManager.default.off($localEventName.default.RENDER_GEM, this.renderGems, this);
    };
    e.prototype.render = function () {
        var t = this;
        var e = $equipmentContext.default.Ins.getGrade(this.euipmentPart);
        $assetsLoader.default.instance.loadRes(
            $assetsMap.BundleNames.Public,
            ["/textures/gem/e_" + this.euipmentPart + "_" + e, "/textures/gem/k" + e],
            cc.SpriteFrame,
            null,
            function (e, i) {
                if (i[0] && cc.isValid(t.eIconSp)) {
                    t.eIconSp.spriteFrame = $resUtil.ResUtil.assignWith(i[1], t.node);
                    t.eIconSp.node.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(
                        i[0],
                        t.node
                    );
                }
            }
        );
        var i = $equipmentContext.default.Ins.getEquipemtnAtkByPart(this.euipmentPart);
        this.atkLable.string = "攻击力：" + i;
        this.gradeLabel.string = "等级：" + $equipmentContext.default.Ins.equipmentMap.get(this.euipmentPart);
        this.renderGems();
        this.renderMaterials();
    };
    e.prototype.renderDot = function () {
        var t = $equipmentContext.default.Ins.checkPartEquipUpgrade(this.euipmentPart);
        this.btnUpgrade.children[1].active = t;
        this.btnUpgradeAuto.children[1].active = t;
    };
    e.prototype.renderGems = function () {
        var t = this;
        var e = $equipmentContext.default.Ins.getGemList(this.euipmentPart);
        var i = function (i) {
            var n = o.gemInfos.children[i];
            if (e && e.length > i && e[i]) {
                var s = e[i];
                n.children[0].active = !1;
                n.children[1].active = !0;
                var c = n.children[1].children[0].getComponent(cc.Sprite);
                var u = $configContext.default.instance.gemConfigs.find(function (t) {
                    return t.id === s;
                });
                $assetsLoader.default.instance.loadRes(
                    $assetsMap.BundleNames.Public,
                    ["/textures/gem/g" + u.part + "_" + u.Grade],
                    cc.SpriteFrame,
                    null,
                    function (e, i) {
                        var o = i[0];
                        if (o && cc.isValid(c)) {
                            c.spriteFrame = $resUtil.ResUtil.assignWith(o, t.node);
                        }
                    }
                );
                var d = $gameGemInfo.GameGemInfo.ins.getGemDesc(u);
                if (d.length >= 15) {
                    d = d.substring(0, 13) + "...";
                }
                n.children[1].children[1].getComponent(cc.Label).string = d;
                var p = $roleContext.default.ins.getPackInfo(s);
                n.children[1].children[2].children[1].active = p.isLock;
            } else {
                n.children[0].active = !0;
                n.children[1].active = !1;
            }
        };
        var o = this;
        for (var n = 0; n < 5; n++) {
            i(n);
        }
    };
    e.prototype.renderMaterials = function () {
        var t = this;
        var e = $equipmentContext.default.Ins.getEquipmentUpInfo(this.euipmentPart);
        if (e) {
            this.upgradeInfoLayer.active = !0;
            var i = this.upgradeInfoLayer.getChildByName("coin_layer");
            i.children[0].getComponent(cc.Label).string = $userDataContext.default.Ins.coin.toString();
            i.children[1].getComponent(cc.Label).string = "/" + e.coin;
            e.coin <= $userDataContext.default.Ins.coin
                ? (i.children[0].color = this.colors[0])
                : (i.children[0].color = this.colors[1]);
            var o = $userDataContext.default.Ins.getEquipBookByPart(this.euipmentPart);
            var n = this.upgradeInfoLayer.getChildByName("icon").getComponent(cc.Sprite);
            var s = "/equipment_icon/zb" + this.euipmentPart;
            if (0 === e.type) {
                s = "/equipment_icon/upgrade_eq";
                o = $userDataContext.default.Ins.upgradeStone;
            }
            $assetsLoader.default.instance.loadRes(
                $assetsMap.BundleNames.Public_Res,
                [s],
                cc.SpriteFrame,
                null,
                function (e, i) {
                    var o = i[0];
                    if (o && cc.isValid(n)) {
                        n.spriteFrame = $resUtil.ResUtil.assignWith(o, t.node);
                    }
                }
            );
            var c = this.upgradeInfoLayer.getChildByName("materials_layer");
            c.children[0].getComponent(cc.Label).string = o.toString();
            c.children[1].getComponent(cc.Label).string = "/" + e.num;
            e.num <= o ? (c.children[0].color = this.colors[0]) : (c.children[0].color = this.colors[1]);
        } else {
            this.upgradeInfoLayer.active = !1;
        }
    };
    e.prototype.clickUpgradeEquipt = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        var t = $equipmentContext.default.Ins.getEquipmentUpInfo(this.euipmentPart);
        if (t) {
            if ($userDataContext.default.Ins.checkCoin(-t.coin)) {
                if (0 !== t.type || $userDataContext.default.Ins.checkUpgradeStone(-t.num)) {
                    if (1 !== t.type || $userDataContext.default.Ins.checkEquipBook(this.euipmentPart, -t.num)) {
                        $remoteAudio.default.instance.playEffectMusic("levelup");
                        $userDataContext.default.Ins.opearCoin(-t.coin);
                        0 === t.type
                            ? $userDataContext.default.Ins.opearUpgradeStone(-t.num)
                            : 1 === t.type && $userDataContext.default.Ins.opearEquipBook(this.euipmentPart, -t.num);
                        var e = $equipmentContext.default.Ins.equipmentMap.get(this.euipmentPart) + 1;
                        $equipmentContext.default.Ins.upgradeEquip(this.euipmentPart, e);
                        this.render();
                        this.renderDot();
                        this.playAnim();
                        $eventManager.default.send($localEventName.default.RENDER_GEM);
                        $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.Role);
                        if ($userDataContext.default.Ins.addExp(15)) {
                            $popupManager.PopupManager.instance.open(
                                $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.UpgradeView
                            );
                        }
                    } else {
                        $uIManager.UIManager.instance.showToast("图纸不足");
                    }
                } else {
                    $uIManager.UIManager.instance.showToast("升品石不足");
                }
            } else {
                $popupManager.PopupManager.instance.open(
                    $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView,
                    {
                        type: $coinDiamondView.AstType.COIN
                    }
                );
            }
        }
    };
    e.prototype.playAnim = function () {
        var t = this;
        this.upgradeAnim.node.active = !0;
        this.upgradeAnim.playAnimation("stand", 1);
        this.upgradeAnim.once(
            dragonBones.EventObject.COMPLETE,
            function () {
                t.upgradeAnim.node.active = !1;
            },
            this
        );
        $eventManager.default.send($localEventName.default.EQUIP_UPGRADE, [this.euipmentPart]);
    };
    e.prototype.clickAutoUpgrade = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        var t = $equipmentContext.default.Ins.getEquipmentUpInfo(this.euipmentPart);
        for (
            var e = 0;
            t &&
            $userDataContext.default.Ins.checkCoin(-t.coin) &&
            (0 !== t.type || $userDataContext.default.Ins.checkUpgradeStone(-t.num)) &&
            (1 !== t.type || $userDataContext.default.Ins.checkEquipBook(this.euipmentPart, -t.num));

        ) {
            $userDataContext.default.Ins.opearCoin(-t.coin);
            0 === t.type
                ? $userDataContext.default.Ins.opearUpgradeStone(-t.num)
                : 1 === t.type && $userDataContext.default.Ins.opearEquipBook(this.euipmentPart, -t.num);
            e++;
            var i = $equipmentContext.default.Ins.equipmentMap.get(this.euipmentPart) + 1;
            $equipmentContext.default.Ins.upGradeEquipCache(this.euipmentPart, i);
            t = $equipmentContext.default.Ins.getEquipmentUpInfo(this.euipmentPart);
        }
        if (0 !== e) {
            $remoteAudio.default.instance.playEffectMusic("levelup");
            var o = $equipmentContext.default.Ins.equipmentMap.get(this.euipmentPart);
            $equipmentContext.default.Ins.upgradeEquip(this.euipmentPart, o);
            this.render();
            this.renderDot();
            $eventManager.default.send($localEventName.default.RENDER_GEM);
            $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.Role);
            if ($userDataContext.default.Ins.addExp(15 * e, e)) {
                $popupManager.PopupManager.instance.open(
                    $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.UpgradeView,
                    {
                        count: e
                    }
                );
            }
            this.playAnim();
        }
    };
    e.prototype.clickGemItem = function (t) {
        var e = this.gemInfos.children.indexOf(t.target);
        var i = $equipmentContext.default.Ins.getPartAndIndexGemId(this.euipmentPart, e);
        if (-1 !== i) {
            var o = $configContext.default.instance.gemConfigs.find(function (t) {
                return t.id === i;
            });
            this.gemDescItem.node.active = !0;
            this.gemDescItem.render(o, e);
        }
    };
    e.prototype.lockOrUnlockGem = function (t) {
        var e = t.target;
        var i = this.gemInfos.children.indexOf(e.parent.parent);
        var o = $equipmentContext.default.Ins.getPartAndIndexGemId(this.euipmentPart, i);
        $roleContext.default.ins.lockAndUnlock(o);
        this.renderGems();
        $eventManager.default.send($localEventName.default.RENDER_GEM);
    };
    e.prototype.clickUnload = function (t) {
        var e = t.node.gem_index;
        $equipmentContext.default.Ins.removeGem(this.euipmentPart, e);
        $eventManager.default.send($localEventName.default.RENDER_GEM);
    };
    __decorate([C(cc.Label)], e.prototype, "titleLabel", void 0);
    __decorate([C(cc.Sprite)], e.prototype, "eIconSp", void 0);
    __decorate([C(cc.Node)], e.prototype, "gemInfos", void 0);
    __decorate([C(cc.Label)], e.prototype, "atkLable", void 0);
    __decorate([C(cc.Label)], e.prototype, "gradeLabel", void 0);
    __decorate([C(cc.Node)], e.prototype, "btnUpgrade", void 0);
    __decorate([C(cc.Node)], e.prototype, "btnUpgradeAuto", void 0);
    __decorate([C(cc.Node)], e.prototype, "upgradeInfoLayer", void 0);
    __decorate([C($equipmentGemDescItem.default)], e.prototype, "gemDescItem", void 0);
    __decorate([C(dragonBones.ArmatureDisplay)], e.prototype, "upgradeAnim", void 0);
    return __decorate([S], e);
})($popupView.PopupView);
exports.default = I;
