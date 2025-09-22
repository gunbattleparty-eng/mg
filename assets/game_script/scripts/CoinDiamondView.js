var o;
exports.AstType = void 0;
var r;
var $assetsMap = require("./AssetsMap");
var $eventManager = require("./EventManager");
var $popupManager = require("./PopupManager");
var $uIManager = require("./UIManager");
var $popupView = require("./PopupView");
var $globalParam = require("./GlobalParam");
var $localEventName = require("./LocalEventName");
var $startView = require("./StartView");
var m = cc._decorator;
var y = m.ccclass;
var g = m.property;
(r = exports.AstType || (exports.AstType = {}))[(r.DIAMON = 0)] = "DIAMON";
r[(r.COIN = 1)] = "COIN";
r[(r.POWER = 2)] = "POWER";
var _ = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.showIcon = null;
        e.titleLabel = null;
        e.contentLabel = null;
        e.btnGain = null;
        e.type = 2;
        return e;
    }
    __extends(e, t);
    e.prototype.onResetView = function () {
        this.type = this.uiParam.param.type;
        this.showIcon.children[this.type].active = !0;
        var t = "钻石";
        1 === this.type ? (t = "金币") : 2 === this.type && (t = "体力");
        this.titleLabel.string = t + "不足";
        this.contentLabel.string = t + "不足，是否获取大量" + t;
    };
    e.prototype.addEvent = function () {
        this.btnGain.on("click", this.clickGain, this);
    };
    e.prototype.removeEvent = function () {
        this.btnGain.off("click", this.clickGain, this);
    };
    e.prototype.clickGain = function () {
        $globalParam.default.isStartView
            ? (0 === this.type
                  ? $eventManager.default.send($localEventName.default.MENU, $startView.MenuType.Shop, 3)
                  : $eventManager.default.send($localEventName.default.MENU, $startView.MenuType.Shop, 2),
              $popupManager.PopupManager.instance.closeAll())
            : $uIManager.UIManager.instance.replaceView(
                  $assetsMap.AssetsMap.StartBundles.prefabs.assetsList.StartView,
                  {
                      type: $startView.MenuType.Shop,
                      ext: 0 === this.type ? 3 : 2
                  }
              );
    };
    __decorate([g(cc.Node)], e.prototype, "showIcon", void 0);
    __decorate([g(cc.Label)], e.prototype, "titleLabel", void 0);
    __decorate([g(cc.Label)], e.prototype, "contentLabel", void 0);
    __decorate([g(cc.Node)], e.prototype, "btnGain", void 0);
    return __decorate([y], e);
})($popupView.PopupView);
exports.default = _;
