var o;
var $assetsMap = require("./AssetsMap");
var $eventManager = require("./EventManager");
var $list = require("./List");
var $uIManager = require("./UIManager");
var $remoteAudio = require("./RemoteAudio");
var $configContext = require("./ConfigContext");
var $localEventName = require("./LocalEventName");
var $roleContext = require("./RoleContext");
var $itemView = require("./ItemView");
var $startView = require("./StartView");
var $skillListItem = require("./SkillListItem");
var g = cc._decorator;
var _ = g.ccclass;
var k = g.property;
var v = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.skillList = null;
        e.btnRobot = null;
        e.robot = null;
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {
        this.skillList.numItems = $configContext.default.instance.basicSkillConfigs.length;
        $eventManager.default.on($localEventName.default.RENDER_DOT, this.renderDot, this);
        this.btnRobot.on("click", this.clickRobot, this);
        this.render();
    };
    e.prototype.onDestroy = function () {
        $eventManager.default.off($localEventName.default.RENDER_DOT, this.renderDot, this);
        this.btnRobot.off("click", this.clickRobot, this);
    };
    e.prototype.reuse = function () {
        $eventManager.default.on($localEventName.default.RENDER_DOT, this.renderDot, this);
        this.skillList.updateAll();
    };
    e.prototype.unuse = function () {
        $eventManager.default.off($localEventName.default.RENDER_DOT, this.renderDot, this);
    };
    e.prototype.render = function () {
        this.robot.armatureName = "hl" + $roleContext.default.ins.currSkinInfo.robot;
        this.btnRobot.children[0].active = $roleContext.default.ins.hasRobotSkinDot();
    };
    e.prototype.clickRobot = function () {
        $remoteAudio.default.instance.playEffectMusic("Click");
        $uIManager.UIManager.instance.replaceView($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.RobotShopView);
    };
    e.prototype.renderDot = function (t) {
        if (t === $startView.MenuType.Skill) {
            this.skillList.updateAll();
        }
    };
    e.prototype.renderItem = function (t, e) {
        t.getComponent($skillListItem.default).render($configContext.default.instance.basicSkillConfigs[e], this.node);
    };
    __decorate([k($list.default)], e.prototype, "skillList", void 0);
    __decorate([k(cc.Node)], e.prototype, "btnRobot", void 0);
    __decorate([k(dragonBones.ArmatureDisplay)], e.prototype, "robot", void 0);
    return __decorate([_], e);
})($itemView.default);
exports.default = v;
