var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $popupManager = require("./PopupManager");
var $remoteAudio = require("./RemoteAudio");
var $seedUtil = require("./SeedUtil");
var $util = require("./Util");
var $localEventName = require("./LocalEventName");
var $skillContext = require("./SkillContext");
var $taskContext = require("./TaskContext");
var $userDataContext = require("./UserDataContext");
var $startView = require("./StartView");
var k = cc._decorator;
var v = k.ccclass;
var b = k.property;
var w = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.titleLaleb = null;
        e.progress = null;
        e.btnGain = null;
        e.iconSp = null;
        e.countLable = null;
        e.redDot = null;
        e.config = null;
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {
        this.btnGain.on("click", this.clickGain, this);
    };
    e.prototype.init = function (t) {
        this.config = t;
        this.countLable.string = t.num.toString();
        this.render();
        this.renderIcon();
    };
    e.prototype.renderIcon = function () {
        var t = this;
        var e = "";
        var i = "";
        1 === this.config.reward
            ? ((e = $assetsMap.BundleNames.Public), (i = "/textures/gem/zuanshi"))
            : 2 === this.config.reward
            ? ((e = $assetsMap.BundleNames.Public), (i = "/textures/gem/jinbi"))
            : 3 === this.config.reward
            ? ((e = $assetsMap.BundleNames.Public_Res), (i = "/skill_book/jn0"))
            : 4 === this.config.reward
            ? ((e = $assetsMap.BundleNames.Public_Res), (i = "/equipment_icon/zb0"))
            : 6 === this.config.reward && ((e = $assetsMap.BundleNames.Public), (i = "/textures/gem/upgrade_sone"));
        $assetsLoader.default.instance.loadRes(e, [i], cc.SpriteFrame, null, function (e, i) {
            var o = i[0];
            if (o && cc.isValid(t.iconSp)) {
                t.iconSp.spriteFrame = $resUtil.ResUtil.assignWith(o, t.node);
            }
        });
    };
    e.prototype.render = function () {
        this.titleLaleb.string = this.config.name;
        var t = $taskContext.default.Ins.getTaskRecord(this.config.id);
        this.progress.node.getComponentInChildren(cc.Label).string = t.num + "/" + this.config.target_num;
        this.progress.progress = t.num / this.config.target_num;
        this.btnGain.active = !0;
        this.redDot.active = !1;
        t.isGain
            ? (this.btnGain.active = !1)
            : t.num >= this.config.target_num
            ? ($util.default.updateMaterialState(this.btnGain, !1),
              (this.btnGain.getComponent(cc.Button).interactable = !0),
              (this.btnGain.getComponentInChildren(cc.Label).string = "领取"),
              (this.redDot.active = !0))
            : ($util.default.updateMaterialState(this.btnGain, !0),
              (this.btnGain.getComponent(cc.Button).interactable = !1),
              (this.btnGain.getComponentInChildren(cc.Label).string = "未完成"));
    };
    e.prototype.clickGain = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        if ($taskContext.default.Ins.getTaskRecord(this.config.id).num >= this.config.target_num) {
            $taskContext.default.Ins.gainTask(this.config.id);
            var t = [];
            if (1 === this.config.reward) {
                $userDataContext.default.Ins.opearDiamond(this.config.num);
                t.push({
                    type: 6,
                    num: this.config.num
                });
            } else {
                if (2 === this.config.reward) {
                    $userDataContext.default.Ins.opearCoin(this.config.num);
                    t.push({
                        type: 1,
                        num: this.config.num
                    });
                } else {
                    if (3 === this.config.reward) {
                        var e = $skillContext.default.Ins.getUseSkillIds();
                        var i = e[$seedUtil.default.randomFrom(0, e.length - 1)];
                        t.push({
                            type: 4,
                            ext: i,
                            num: this.config.num
                        });
                        $userDataContext.default.Ins.opearSkillBook(i, this.config.num);
                    } else {
                        if (4 === this.config.reward) {
                            var o = $seedUtil.default.randomFrom(1, 6);
                            t.push({
                                type: 3,
                                ext: o,
                                num: this.config.num
                            });
                            $userDataContext.default.Ins.opearEquipBook(o, this.config.num);
                        } else {
                            if (6 === this.config.reward) {
                                t.push({
                                    type: 7,
                                    num: this.config.num
                                });
                                $userDataContext.default.Ins.opearUpgradeStone(this.config.num);
                            }
                        }
                    }
                }
            }
            $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.ALL);
            $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
                infos: t
            });
        }
        this.render();
    };
    __decorate([b(cc.Label)], e.prototype, "titleLaleb", void 0);
    __decorate([b(cc.ProgressBar)], e.prototype, "progress", void 0);
    __decorate([b(cc.Node)], e.prototype, "btnGain", void 0);
    __decorate([b(cc.Sprite)], e.prototype, "iconSp", void 0);
    __decorate([b(cc.Label)], e.prototype, "countLable", void 0);
    __decorate([b(cc.Node)], e.prototype, "redDot", void 0);
    return __decorate([v], e);
})(cc.Component);
exports.default = w;
