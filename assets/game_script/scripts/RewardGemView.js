var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $list = require("./List");
var $popupManager = require("./PopupManager");
var $popupView = require("./PopupView");
var $remoteAudio = require("./RemoteAudio");
var $seedUtil = require("./SeedUtil");
var $configContext = require("./ConfigContext");
var $localEventName = require("./LocalEventName");
var $roleContext = require("./RoleContext");
var $taskContext = require("./TaskContext");
var $startView = require("./StartView");
var v = cc._decorator;
var b = v.ccclass;
var w = v.property;
var A = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.list = null;
        e.btnSure = null;
        e.gemIds = [];
        e.newGemConfigs = [];
        return e;
    }
    __extends(e, t);
    e.prototype.onResetView = function () {
        this.gemIds = this.uiParam.param.gemIds;
        this.list.numItems = this.gemIds.length;
    };
    e.prototype.addEvent = function () {
        this.btnSure.on("click", this.clickSure, this);
    };
    e.prototype.removeEvent = function () {
        this.btnSure.off("click", this.clickSure, this);
    };
    e.prototype.clickSure = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        var e = 0;
        var i = [];
        var o = function () {
            var t = $roleContext.default.ins.getPackInfo(n.gemIds[e]).grade + 1;
            var o = $configContext.default.instance.gemConfigs.filter(function (e) {
                return e.Grade === t;
            });
            var s = o[$seedUtil.default.randomFrom(0, o.length - 1)];
            $roleContext.default.ins.addPackItem(s, 1);
            i.push({
                type: 5,
                ext: s.id,
                num: 1
            });
            n.newGemConfigs.push(s);
            e += 5;
        };
        for (var n = this; e < this.gemIds.length; ) {
            o();
        }
        var s = [];
        var r = [];
        for (var l = 0; l < this.gemIds.length; l++) {
            var u = s.indexOf(this.gemIds[l]);
            -1 === u ? (s.push(this.gemIds[l]), r.push(1)) : r[u]++;
        }
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
            infos: i
        });
        for (var p = 0; p < s.length; p++) {
            $roleContext.default.ins.delPackItem(s[p], r[p]);
        }
        $taskContext.default.Ins.setTaskRecord(2, Math.round(this.gemIds.length / 5));
        $eventManager.default.send($localEventName.default.RENDER_GEM);
        $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.Role);
        t.prototype.onClickClose.call(this);
    };
    e.prototype.renderItem = function (t, e) {
        var i = this;
        var o = $roleContext.default.ins.getPackInfo(this.gemIds[e]);
        $assetsLoader.default.instance.loadRes(
            $assetsMap.BundleNames.Public,
            ["/textures/gem/g" + o.part + "_" + o.grade, "/textures/gem/k" + o.grade],
            cc.SpriteFrame,
            null,
            function (e, o) {
                var n = t.children[0].getComponent(cc.Sprite);
                var s = t.getComponent(cc.Sprite);
                var r = o[0];
                if (r && cc.isValid(n)) {
                    n.spriteFrame = $resUtil.ResUtil.assignWith(r, i.node);
                    s.spriteFrame = $resUtil.ResUtil.assignWith(o[1], i.node);
                }
            }
        );
    };
    __decorate([w($list.default)], e.prototype, "list", void 0);
    __decorate([w(cc.Node)], e.prototype, "btnSure", void 0);
    return __decorate([b], e);
})($popupView.PopupView);
exports.default = A;
