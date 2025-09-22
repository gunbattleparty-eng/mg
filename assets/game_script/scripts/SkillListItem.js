var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $popupManager = require("./PopupManager");
var $remoteAudio = require("./RemoteAudio");
var $configContext = require("./ConfigContext");
var $localEventName = require("./LocalEventName");
var $skillContext = require("./SkillContext");
var $startView = require("./StartView");
var y = cc._decorator;
var g = y.ccclass;
var _ = y.property;
var k = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.icon = null;
        e.resDot = null;
        e.levelLabel = null;
        e.maskNode = null;
        e.basicSkillId = 0;
        e.skillId = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchSkill, this);
    };
    e.prototype.render = function (t, e) {
        var i = this;
        var o = $configContext.default.instance.skillConfigsMap.get(t.skillmaster_id);
        if (t.id !== this.basicSkillId) {
            $assetsLoader.default.instance.loadRes(
                $assetsMap.BundleNames.Public_Res,
                ["/skills/" + o.icon],
                cc.SpriteFrame,
                null,
                function (t, o) {
                    var n = o[0];
                    if (n && cc.isValid(i.icon)) {
                        i.icon.spriteFrame = $resUtil.ResUtil.assignWith(n, e);
                    }
                }
            );
        }
        this.basicSkillId = t.id;
        this.skillId = o.id;
        var n = $skillContext.default.Ins.getSKillLevel(this.skillId);
        n <= 0
            ? ((this.levelLabel.node.active = !1),
              (this.maskNode.active = !0),
              (this.maskNode.getComponentInChildren(cc.Label).string = "达到" + t.unclok_level + "级解锁"))
            : ((this.levelLabel.node.active = !0), (this.maskNode.active = !1), (this.levelLabel.string = "等级:" + n));
        this.resDot.active = $skillContext.default.Ins.checkSkillUpgrade(this.skillId);
    };
    e.prototype.touchSkill = function () {
        if (!this.maskNode.active) {
            $remoteAudio.default.instance.playEffectMusic("Click");
            $popupManager.PopupManager.instance.open(
                $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.SkillInfoView,
                {
                    skillId: this.skillId
                }
            );
            this.resDot.active = $skillContext.default.Ins.checkSkillUpgrade(this.skillId);
            $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.Skill);
        }
    };
    __decorate([_(cc.Sprite)], e.prototype, "icon", void 0);
    __decorate([_(cc.Node)], e.prototype, "resDot", void 0);
    __decorate([_(cc.Label)], e.prototype, "levelLabel", void 0);
    __decorate([_(cc.Node)], e.prototype, "maskNode", void 0);
    return __decorate([g], e);
})(cc.Component);
exports.default = k;
