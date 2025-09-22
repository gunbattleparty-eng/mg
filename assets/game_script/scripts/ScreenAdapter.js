var o;
var $storageUtil = require("./StorageUtil");
var a = cc._decorator;
var l = a.ccclass;
var c = a.executionOrder;
var u = a.property;
var d = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.isOpen = !0;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var t = $storageUtil.StorageUtil.getItem("adapt", !1, !1);
        this.isOpen = t;
        if (this.isOpen) {
            this.init();
        }
        if (this.isOpen) {
            this.adapt();
        }
    };
    e.prototype.onEnable = function () {
        if (this.isOpen) {
            this.adapt();
        }
    };
    e.prototype.init = function () {
        var t = this;
        cc.view.setResizeCallback(function () {
            return t.onResize();
        });
    };
    e.prototype.onResize = function () {
        this.adapt();
    };
    e.prototype.adapt = function () {
        var t = cc.winSize;
        var e = t.width / t.height;
        var i = cc.Canvas.instance.designResolution;
        var o = i.width / i.height;
        e <= 1 && e <= o ? this.setFitWidth() : this.setFitHeight();
    };
    e.prototype.setFitHeight = function () {
        var t = cc.Canvas.instance;
        t.fitHeight = !0;
        t.fitWidth = !1;
    };
    e.prototype.setFitWidth = function () {
        var t = cc.Canvas.instance;
        t.fitHeight = !1;
        t.fitWidth = !0;
    };
    __decorate([u], e.prototype, "isOpen", void 0);
    return __decorate([l, c(-1)], e);
})(cc.Component);
exports.default = d;
