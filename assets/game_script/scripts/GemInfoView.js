var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $uIManager = require("./UIManager");
var $popupView = require("./PopupView");
var $guide = require("./Guide");
var $remoteAudio = require("./RemoteAudio");
var $configContext = require("./ConfigContext");
var $equipmentContext = require("./EquipmentContext");
var $globalParam = require("./GlobalParam");
var $localEventName = require("./LocalEventName");
var $roleContext = require("./RoleContext");
var $userDataContext = require("./UserDataContext");
var $gameGemInfo = require("./GameGemInfo");
var $startView = require("./StartView");
var w = cc._decorator;
var A = w.ccclass;
var S = w.property;
var C = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.infoList = null;
        e.gemIconSp = null;
        e.gemName = null;
        e.gemDesc = null;
        e.embedBtn = null;
        e.gemMask = null;
        e.changeMask = null;
        e.btnLock = null;
        e.gemId = -1;
        e.names = ["普通", "精良", "稀有", "史诗", "传奇", "绝世", "神话"];
        e.partNames = ["帽子", "上衣", "鞋子", "护臂", "裤子", "手套"];
        e.config = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onResetView = function () {
        var t = this;
        this.gemId = this.uiParam.param.gemId;
        $globalParam.default.currGemIdInfo = this.gemId;
        var e = $configContext.default.instance.gemConfigs.find(function (e) {
            return e.id === t.gemId;
        });
        this.config = e;
        $assetsLoader.default.instance.loadRes(
            $assetsMap.BundleNames.Public,
            ["/textures/gem/g" + e.part + "_" + e.Grade],
            cc.SpriteFrame,
            null,
            function (e, i) {
                var o = i[0];
                if (o && cc.isValid(t.gemIconSp)) {
                    t.gemIconSp.spriteFrame = $resUtil.ResUtil.assignWith(o, t.node);
                }
            }
        );
        this.gemName.string = this.partNames[e.part - 1] + "·" + this.names[e.Grade - 1] + "宝石";
        this.gemName.node.color = $gameGemInfo.GameGemInfo.gemColor[e.Grade - 1];
        this.gemDesc.string = $gameGemInfo.GameGemInfo.ins.getGemDesc(e);
        var i = $roleContext.default.ins.getPackInfo(e.id);
        this.btnLock.children[1].active = i.isLock;
        this.render();
        if (!$userDataContext.default.Ins.isEndGuide) {
            $userDataContext.default.Ins.guideStep = 2;
            $guide.default.self.startGuideTest(this.embedBtn, "点击镶嵌");
        }
    };
    e.prototype.render = function () {
        var t = this;
        var e = $equipmentContext.default.Ins.getGemList(this.config.part);
        var i = function (i) {
            var n = o.infoList.children[i];
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
                if (d.length >= 19) {
                    d = d.substring(0, 18) + "...";
                }
                n.children[1].children[1].getComponent(cc.Label).string = d;
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
    e.prototype.addEvent = function () {
        this.gemMask.on(cc.Node.EventType.TOUCH_START, this.clickClose, this);
        if (this.gemMask._touchListener) {
            this.gemMask._touchListener.setSwallowTouches(!1);
        }
        this.changeMask.on(cc.Node.EventType.TOUCH_START, this.clickCloseChange, this);
        if (this.changeMask._touchListener) {
            this.gemMask._touchListener.setSwallowTouches(!1);
        }
        this.embedBtn.on("click", this.clickEmbed, this);
        for (var t = 0; t < this.infoList.children.length; t++) {
            this.infoList.children[t].on(cc.Node.EventType.TOUCH_START, this.touchItem, this);
        }
        this.btnLock.on(cc.Node.EventType.TOUCH_START, this.clickLock, this);
    };
    e.prototype.removeEvent = function () {
        this.gemMask.off(cc.Node.EventType.TOUCH_START, this.clickClose, this);
        this.embedBtn.off("click", this.clickEmbed, this);
        this.changeMask.off(cc.Node.EventType.TOUCH_START, this.clickCloseChange, this);
        for (var t = 0; t < this.infoList.children.length; t++) {
            this.infoList.children[t].off(cc.Node.EventType.TOUCH_START, this.touchItem, this);
        }
        this.btnLock.off(cc.Node.EventType.TOUCH_START, this.clickLock, this);
    };
    e.prototype.touchItem = function (e) {
        if ($equipmentContext.default.Ins.hasSameGem(this.config.part, this.config.id)) {
            $uIManager.UIManager.instance.showToast("宝石已存在");
        } else {
            {
                var i = this.infoList.children.indexOf(e.target);
                if (-1 === $equipmentContext.default.Ins.getPartAndIndexGemId(this.config.part, i)) {
                    return this.clickEmbed();
                }
                $equipmentContext.default.Ins.removeGem(this.config.part, i);
                $equipmentContext.default.Ins.setGem(this.config.part, this.config.id, i);
                this.render();
                $eventManager.default.send($localEventName.default.RENDER_GEM);
                this.gemMask.active = !0;
                this.changeMask.active = !1;
                $uIManager.UIManager.instance.showToast("替换完成");
                $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.Role);
                $globalParam.default.currGemIdInfo = -1;
                t.prototype.onClickClose.call(this);
            }
        }
    };
    e.prototype.clickCloseChange = function (t) {
        var e = this.changeMask.convertToNodeSpaceAR(t.getLocation());
        if (e.y >= this.changeMask.children[2].y || e.y <= this.changeMask.children[3].y) {
            this.gemMask.active = !0;
            this.changeMask.active = !1;
        }
    };
    e.prototype.clickClose = function (e) {
        var i = this.gemMask.convertToNodeSpaceAR(e.getLocation());
        if (i.y >= this.gemMask.children[0].y || i.y <= this.gemMask.children[1].y) {
            $globalParam.default.currGemIdInfo = -1;
            t.prototype.onClickClose.call(this);
            e.stopPropagationImmediate();
        }
    };
    e.prototype.onClickClose = function () {
        $globalParam.default.currGemIdInfo = -1;
        t.prototype.onClickClose.call(this);
    };
    e.prototype.clickEmbed = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        if (!this.changeMask.active) {
            if ($equipmentContext.default.Ins.hasSameGem(this.config.part, this.config.id)) {
                $uIManager.UIManager.instance.showToast("宝石已存在");
            } else {
                {
                    if ($equipmentContext.default.Ins.gemCount(this.config.part) >= 5) {
                        this.gemMask.active = !1;
                        return void (this.changeMask.active = !0);
                    }
                    $equipmentContext.default.Ins.setGem(this.config.part, this.config.id);
                    this.render();
                    $eventManager.default.send($localEventName.default.RENDER_GEM);
                    $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.Role);
                    $globalParam.default.currGemIdInfo = -1;
                    t.prototype.onClickClose.call(this);
                }
            }
        }
    };
    e.prototype.clickLock = function () {
        var t = $roleContext.default.ins.lockAndUnlock(this.config.id);
        this.btnLock.children[1].active = t;
        $eventManager.default.send($localEventName.default.RENDER_GEM);
    };
    e.prototype.openAnim = function () {
        return null;
    };
    e.prototype.closeAnim = function () {
        return cc.tween().to(0.15, {
            opacity: 100
        });
    };
    __decorate([S(cc.Node)], e.prototype, "infoList", void 0);
    __decorate([S(cc.Sprite)], e.prototype, "gemIconSp", void 0);
    __decorate([S(cc.Label)], e.prototype, "gemName", void 0);
    __decorate([S(cc.Label)], e.prototype, "gemDesc", void 0);
    __decorate([S(cc.Node)], e.prototype, "embedBtn", void 0);
    __decorate([S(cc.Node)], e.prototype, "gemMask", void 0);
    __decorate([S(cc.Node)], e.prototype, "changeMask", void 0);
    __decorate([S(cc.Node)], e.prototype, "btnLock", void 0);
    return __decorate([A], e);
})($popupView.PopupView);
exports.default = C;
