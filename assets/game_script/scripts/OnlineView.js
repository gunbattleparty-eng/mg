var o;
var $list = require("./List");
var $popupView = require("./PopupView");
var $configContext = require("./ConfigContext");
var $onlineListItem = require("./OnlineListItem");
var u = cc._decorator;
var d = u.ccclass;
var p = u.property;
var f = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.list = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onResetView = function () {
        this.list.numItems = $configContext.default.instance.onlineConfigs.length;
    };
    e.prototype.renderItem = function (t, e) {
        var i = $configContext.default.instance.onlineConfigs[e];
        t.getComponent($onlineListItem.default).init(i);
    };
    __decorate([p($list.default)], e.prototype, "list", void 0);
    return __decorate([d], e);
})($popupView.PopupView);
exports.default = f;
