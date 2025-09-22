"use strict";
cc._RF.push(module, '0c5b1UEiiBBxIN2qARvUwM0', 'ShopView');
// game_script/scripts/ShopView.js

"use strict";

var o;

var $eventManager = require("./EventManager");

var $uIManager = require("./UIManager");

var $platform = require("./Platform");

var $remoteAudio = require("./RemoteAudio");

var $configContext = require("./ConfigContext");

var $localEventName = require("./LocalEventName");

var $shopContext = require("./ShopContext");

var $itemView = require("./ItemView");

var $startView = require("./StartView");

var m = cc._decorator;
var y = m.ccclass;
var g = m.property;

var _ = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.boxItem = null;
    e.resItem = null;
    e.diamondItem = null;
    e.btnLayer = null;
    e.redDotLayer = null;
    e.currItemIndex = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    $eventManager["default"].on($localEventName["default"].RENDER_DOT, this.renderDot, this);

    for (var t = 0; t < this.btnLayer.children.length; t++) {
      this.btnLayer.children[t].on("click", this.clickItem, this);
    }

    this.renderItems();
    this.renderDot($startView.MenuType.ALL);
  };

  e.prototype.reuse = function () {
    $eventManager["default"].on($localEventName["default"].RENDER_DOT, this.renderDot, this);
    this.renderItems();
    this.renderDot($startView.MenuType.ALL);
  };

  e.prototype.unuse = function () {
    $eventManager["default"].off($localEventName["default"].RENDER_DOT, this.renderDot, this);
  };

  e.prototype.onDestroy = function () {
    $eventManager["default"].off($localEventName["default"].RENDER_DOT, this.renderDot, this);
  };

  e.prototype.renderDot = function (t) {
    if (!(t !== $startView.MenuType.Battle && t !== $startView.MenuType.ALL)) {
      this.redDotLayer.children[0].active = !1;
      this.redDotLayer.children[1].active = $shopContext["default"].Ins.hasResRedDot();
      this.redDotLayer.children[2].active = $shopContext["default"].Ins.hasDiamondRedDot();
    }
  };

  e.prototype.clickItem = function (t) {
    var e = this.btnLayer.children.indexOf(t.node);
    var i = "";
    $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO ? i = "tt_open_shop_diamond" : $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT && (i = "wx_open_shop_diamond");
    2 !== e || "" === i || $configContext["default"].instance.getAdSwitch(i) ? e !== this.currItemIndex && ($remoteAudio["default"].instance.playEffectMusic("Click"), this.currItemIndex = e, this.renderItems()) : $uIManager.UIManager.instance.showToast("敬请期待");
  };

  e.prototype.renderItems = function () {
    var t = "";
    $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO ? t = "tt_open_shop_diamond" : $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT && (t = "wx_open_shop_diamond");

    if (2 !== this.currItemIndex || "" === t || $configContext["default"].instance.getAdSwitch(t)) {
      for (var e = 0; e < this.btnLayer.children.length; e++) {
        this.btnLayer.children[e].opacity = this.currItemIndex === e ? 255 : 0;
      }

      this.boxItem.active = 0 === this.currItemIndex;
      this.resItem.active = 1 === this.currItemIndex;
      this.diamondItem.active = 2 === this.currItemIndex;
    } else {
      $uIManager.UIManager.instance.showToast("敬请期待");
    }
  };

  __decorate([g(cc.Node)], e.prototype, "boxItem", void 0);

  __decorate([g(cc.Node)], e.prototype, "resItem", void 0);

  __decorate([g(cc.Node)], e.prototype, "diamondItem", void 0);

  __decorate([g(cc.Node)], e.prototype, "btnLayer", void 0);

  __decorate([g(cc.Node)], e.prototype, "redDotLayer", void 0);

  return __decorate([y], e);
}($itemView["default"]);

exports["default"] = _;

cc._RF.pop();