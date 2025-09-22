var o;
var $list = require("./List");
var $configContext = require("./ConfigContext");
var $shopResLIstItem = require("./ShopResLIstItem");
var c = cc._decorator;
var u = c.ccclass;
var d = c.property;
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.list = null;
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {
        var t = this;
        var e = $configContext.default.instance.shopResConfigs.length;
        if (!$configContext.default.instance.getAdSwitch2("open_shop_diamond")) {
            e -= 2;
        }
        this.scheduleOnce(function () {
            t.list.numItems = e;
        });
    };
    e.prototype.renderItem = function (t, e) {
        t.getComponent($shopResLIstItem.default).init($configContext.default.instance.shopResConfigs[e]);
    };
    __decorate([d($list.default)], e.prototype, "list", void 0);
    return __decorate([u], e);
})(cc.Component);
exports.default = p;
