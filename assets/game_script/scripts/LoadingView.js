var o;
var $switchContext = require("./SwitchContext");
var $uIParam = require("./UIParam");
var $uIView = require("./UIView");
var c = cc._decorator;
var u = c.ccclass;
var d = c.property;
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.uiType = $uIParam.LayerType.WAITING;
        e.progressBar = null;
        e.bgSp = null;
        e.bg2 = null;
        e.targetProgress = 0;
        e.completedCB = null;
        e.isCompleted = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.onResetView = function () {
        if ($switchContext.SwitchContext.currVersion === $switchContext.GameVersion.V2 && this.bg2) {
            this.bgSp.spriteFrame = this.bg2;
        }
    };
    e.prototype.registerCB = function (t, e) {
        this.completedCB = t.bind(e);
    };
    e.prototype.setProgress = function (t, e) {
        if (void 0 === e) {
            e = !1;
        }
        e
            ? ((this.targetProgress = t), (this.progressBar.progress = t))
            : this.targetProgress < t && (this.targetProgress = t);
    };
    e.prototype.removeToScreen = function () {
        this.targetProgress = 0;
        this.completedCB = null;
        this.isCompleted = !1;
        this.progressBar.progress = 0;
    };
    e.prototype.update = function (t) {
        this.progressBar.progress = cc.misc.lerp(this.progressBar.progress, this.targetProgress, 10 * t);
        if (this.progressBar.progress >= 0.98 && !this.isCompleted && this.completedCB) {
            this.isCompleted = !0;
            this.completedCB();
        }
    };
    __decorate([d(cc.ProgressBar)], e.prototype, "progressBar", void 0);
    __decorate([d(cc.Sprite)], e.prototype, "bgSp", void 0);
    __decorate([d(cc.SpriteFrame)], e.prototype, "bg2", void 0);
    return __decorate([u], e);
})($uIView.UIView);
exports.default = p;
