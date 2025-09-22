"use strict";
cc._RF.push(module, '04b072GEzlKdZzpk6+DRIph', 'ShopDiamondItem');
// game_script/scripts/ShopDiamondItem.js

"use strict";

var o;

var $list = require("./List");

var $configContext = require("./ConfigContext");

var $shopDiamondListItem = require("./ShopDiamondListItem");

var c = cc._decorator;
var u = c.ccclass;
var d = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.list = null;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    var t = this;
    this.scheduleOnce(function () {
      t.list.numItems = $configContext["default"].instance.shopDiamondConfigs.length;
    });
  };

  e.prototype.renderItem = function (t, e) {
    t.getComponent($shopDiamondListItem["default"]).init($configContext["default"].instance.shopDiamondConfigs[e]);
  };

  __decorate([d($list["default"])], e.prototype, "list", void 0);

  return __decorate([u], e);
}(cc.Component);

exports["default"] = p;

cc._RF.pop();