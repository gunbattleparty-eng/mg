var o;
var $uIManager = require("./UIManager");
var $popupView = require("./PopupView");
var $aD = require("./AD");
var $switchContext = require("./SwitchContext");
var $userDataContext = require("./UserDataContext");
var d = cc._decorator;
var p = d.ccclass;
var f = d.property;
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.btnTip = null;
        e.icons = [];
        e.zis = [];
        return e;
    }
    __extends(e, t);
    e.prototype.onResetView = function () {
        console.log("=========================", $aD.default.toutiao.isSidebarCome());
        var t = $aD.default.toutiao.isSidebarCome() ? "领取奖励" : "前往侧边栏";
        this.btnTip.getComponentInChildren(cc.Label).string = t;
        for (var e = 0; e < this.icons.length; e++) {
            this.icons[e].active = $switchContext.SwitchContext.currVersion === e;
            this.zis[e].active = $switchContext.SwitchContext.currVersion === e;
        }
    };
    e.prototype.addEvent = function () {
        this.btnTip.on("click", this.clickBtn, this);
    };
    e.prototype.removeEvent = function () {
        this.btnTip.off("click", this.clickBtn, this);
    };
    e.prototype.clickBtn = function () {
        $aD.default.toutiao.isSidebarCome()
            ? ($userDataContext.default.Ins.opearCoin(100),
              $uIManager.UIManager.instance.showToast("领取成功,金币+100"),
              $aD.default.toutiao.closeScene(),
              t.prototype.onClickClose.call(this))
            : ($aD.default.toutiao.navigateToScene(null, function () {
                  $uIManager.UIManager.instance.showToast("若点击按钮无反应，可主动从侧边栏访问本游戏后领奖");
              }),
              t.prototype.onClickClose.call(this));
    };
    __decorate([f(cc.Node)], e.prototype, "btnTip", void 0);
    __decorate([f([cc.Node])], e.prototype, "icons", void 0);
    __decorate([f([cc.Node])], e.prototype, "zis", void 0);
    return __decorate([p], e);
})($popupView.PopupView);
exports.default = h;
