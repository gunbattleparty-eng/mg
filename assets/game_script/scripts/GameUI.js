var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $battleContext = require("./BattleContext");
var $configContext = require("./ConfigContext");
var $localEventName = require("./LocalEventName");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var m = cc._decorator;
var y = m.ccclass;
var g = m.property;
var _ = cc.size(0, 0);
var k = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.progressBar = null;
        e.progressLable = null;
        e.gradeLable = null;
        e.braAnims = null;
        e.completedNode = null;
        e.cdLayer = null;
        e.levelLabel = null;
        e.showRangeLayer = null;
        e.currLevel = 1;
        e.upgradeAniming = !1;
        e.currIndex = 1;
        e.cdRecord = new Map();
        e.graphics = null;
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {
        this.graphics = this.showRangeLayer.getComponent(cc.Graphics);
        this.levelLabel.string = "第" + $battleContext.default.Ins.currLevel + "关";
        this.cdRecord.set(1, 0);
        $eventManager.default.on($localEventName.default.ADD_SKILL_CD, this.renderSkillInfo, this);
        $eventManager.default.on($localEventName.default.RENDER_SKILL_CD_INFO, this.renderSkillCDInfo, this);
        for (var t = 0; t < this.cdLayer.children.length; t++) {
            this.cdLayer.children[t].on(cc.Node.EventType.TOUCH_START, this.touchCD, this);
            this.cdLayer.children[t].on(cc.Node.EventType.TOUCH_END, this.endCD, this);
        }
    };
    e.prototype.onDestroy = function () {
        $eventManager.default.off($localEventName.default.ADD_SKILL_CD, this.renderSkillInfo, this);
        $eventManager.default.off($localEventName.default.RENDER_SKILL_CD_INFO, this.renderSkillCDInfo, this);
    };
    e.prototype.touchCD = function (t) {
        var e = this.cdLayer.children.indexOf(t.target);
        var i = -1;
        this.cdRecord.forEach(function (t, o) {
            if (t === e) {
                i = o;
            }
        });
        if (-1 !== i) {
            _.height =
                $gameContext.default.ins.skillInfo.getSkillById(i).skillAtkRange[$gameSkillInfo.Skill4Param.FINAL];
            this.graphics.clear();
            this.graphics.circle(0, 0, _.height);
            this.graphics.stroke();
            this.graphics.fill();
            this.showRangeLayer.active = !0;
            this.showRangeLayer.setContentSize(_);
        }
    };
    e.prototype.endCD = function () {
        this.showRangeLayer.active = !1;
    };
    e.prototype.renderSkillCDInfo = function (t, e, i) {
        if (this.cdRecord.has(t)) {
            if (!this.skillParam) {
                this.skillParam = $gameContext.default.ins.skillInfo.getSkillById(1);
            }
            var o = this.cdRecord.get(t);
            var n = this.cdLayer.children[o];
            1 === t
                ? (-1 !== i && (n.children[2].getComponent(cc.Label).string = i + "/" + this.skillParam.bulletCount),
                  -1 !== e && (n.children[3].getComponent(cc.Sprite).fillRange = e))
                : (n.children[2].getComponent(cc.Sprite).fillRange = e);
        }
    };
    e.prototype.renderSkillInfo = function (t) {
        this.cdRecord.has(t) ? this.renderSkillCount(t) : this.addSkillInfo(t);
    };
    e.prototype.renderSkillCount = function (t) {
        var e = $gameContext.default.ins.skillInfo.getChooseParendCount(t);
        var i = this.cdRecord.get(t);
        this.cdLayer.children[i].children[1].getComponent(cc.Label).string = e.toString();
    };
    e.prototype.addSkillInfo = function (t) {
        var e = this;
        if (!(1 === t || this.cdRecord.size > 5 || this.currIndex >= this.cdLayer.children.length)) {
            var i = $configContext.default.instance.skillConfigsMap.get(t);
            var o = this.cdLayer.children[this.currIndex];
            var n = o.children[0].getComponent(cc.Sprite);
            $assetsLoader.default.instance.loadRes(
                $assetsMap.BundleNames.Public_Res,
                ["/cd_icon/" + i.icon],
                cc.SpriteFrame,
                null,
                function (t, i) {
                    var o = i[0];
                    if (o && cc.isValid(n)) {
                        n.spriteFrame = $resUtil.ResUtil.assignWith(o, e.node);
                    }
                }
            );
            o.children[1].getComponent(cc.Label).string = "1";
            this.cdRecord.set(t, this.currIndex);
            this.currIndex++;
        }
    };
    e.prototype.update = function () {
        var t = this;
        if (!this.upgradeAniming) {
            if (this.currLevel !== $gameContext.default.ins.currPlayerLevel) {
                this.upgradeAniming = !0;
                this.currLevel = $gameContext.default.ins.currPlayerLevel;
                this.gradeLable.string = this.currLevel.toString();
                this.progressBar.fillRange = 1;
                var e = this.completedNode.getComponent(cc.Animation);
                e.node.active = !0;
                e.play("exp_anim");
                return void e.once(
                    cc.Animation.EventType.FINISHED,
                    function () {
                        e.node.active = !1;
                        t.upgradeAniming = !1;
                    },
                    this
                );
            }
            var i = $gameContext.default.ins.currExp / $gameContext.default.ins.needExp();
            this.progressBar.fillRange = i;
            this.progressLable.string = $gameContext.default.ins.currExp + " /" + $gameContext.default.ins.needExp();
            _.width = 364 * i;
            this.braAnims.setContentSize(_);
        }
    };
    __decorate([g(cc.Sprite)], e.prototype, "progressBar", void 0);
    __decorate([g(cc.Label)], e.prototype, "progressLable", void 0);
    __decorate([g(cc.Label)], e.prototype, "gradeLable", void 0);
    __decorate([g(cc.Node)], e.prototype, "braAnims", void 0);
    __decorate([g(cc.Node)], e.prototype, "completedNode", void 0);
    __decorate([g(cc.Node)], e.prototype, "cdLayer", void 0);
    __decorate([g(cc.Label)], e.prototype, "levelLabel", void 0);
    __decorate([g(cc.Node)], e.prototype, "showRangeLayer", void 0);
    return __decorate([y], e);
})(cc.Component);
exports.default = k;
