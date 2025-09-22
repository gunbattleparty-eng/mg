"use strict";
cc._RF.push(module, 'be08cSgcaZBaISu/10LfNd7', 'TopLayer');
// game_script/scripts/TopLayer.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $login = require("./Login");

var $popupManager = require("./PopupManager");

var $uIManager = require("./UIManager");

var $platform = require("./Platform");

var $globalParam = require("./GlobalParam");

var $localEventName = require("./LocalEventName");

var $userDataContext = require("./UserDataContext");

var $startView = require("./StartView");

var _ = cc._decorator;
var k = _.ccclass;
var v = _.property;

var b = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.coinLabel = null;
    e.diamondLabel = null;
    e.powerLabel = null;
    e.adCoinLabel = null;
    e.headNode = null;
    e.gradeLevel = null;
    e.nameLabel = null;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    $eventManager["default"].on($localEventName["default"].RENDER_USER_INFO, this.render, this);
    $eventManager["default"].on($localEventName["default"].RENDER_HEAD, this.renderHead, this);
    $eventManager["default"].on($login.Login.LOGIN_SUCCESS, this.renderName, this);
    this.nameLabel = this.node.getChildByName("name_label").getComponent(cc.Label);
    this.nameLabel.string = $userDataContext["default"].Ins.nickname;
    this.coinLabel.node.parent.on(cc.Node.EventType.TOUCH_START, this.touchCoin, this);
    this.diamondLabel.node.parent.on(cc.Node.EventType.TOUCH_START, this.touchDiamond, this);
    this.powerLabel.node.parent.on(cc.Node.EventType.TOUCH_START, this.touchPower, this);
    this.adCoinLabel.node.parent.on(cc.Node.EventType.TOUCH_START, this.touchAdCoin, this);
    this.headNode.on(cc.Node.EventType.TOUCH_START, this.touchHead, this);
    this.render();
    this.renderHead();

    if ($platform.Platform.currPlatForm === $platform.PlatformEnum.BROWSER) {
      this.nameLabel.node.on(cc.Node.EventType.TOUCH_START, this.touchGM, this);
    }
  };

  e.prototype.touchGM = function () {
    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.GMView);
  };

  e.prototype.renderHead = function () {
    var t = this;
    var e = this.headNode.children[0].getComponent(cc.Sprite);
    $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/head_icon/tx" + ($userDataContext["default"].Ins.headIndex + 1)], cc.SpriteFrame, null, function (i, o) {
      var n = o[0];

      if (n && cc.isValid(e)) {
        e.spriteFrame = $resUtil.ResUtil.assignWith(n, t.node);
      }
    });
  };

  e.prototype.onDestroy = function () {
    $eventManager["default"].off($login.Login.LOGIN_SUCCESS, this.renderName, this);
    $eventManager["default"].off($localEventName["default"].RENDER_USER_INFO, this.render, this);
    $eventManager["default"].off($localEventName["default"].RENDER_HEAD, this.renderHead, this);
  };

  e.prototype.renderName = function () {
    this.nameLabel.string = $userDataContext["default"].Ins.nickname;
  };

  e.prototype.touchHead = function () {
    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.SettingView);
  };

  e.prototype.touchCoin = function () {
    $globalParam["default"].isStartView ? $eventManager["default"].send($localEventName["default"].MENU, $startView.MenuType.Shop, 2) : $uIManager.UIManager.instance.replaceView($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.StartView, {
      type: $startView.MenuType.Shop,
      ext: 2
    });
  };

  e.prototype.touchDiamond = function () {
    $globalParam["default"].isStartView ? $eventManager["default"].send($localEventName["default"].MENU, $startView.MenuType.Shop, 3) : $uIManager.UIManager.instance.replaceView($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.StartView, {
      type: $startView.MenuType.Shop,
      ext: 3
    });
  };

  e.prototype.touchAdCoin = function () {
    $globalParam["default"].isStartView ? $eventManager["default"].send($localEventName["default"].MENU, $startView.MenuType.Shop, 2) : $uIManager.UIManager.instance.replaceView($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.StartView, {
      type: $startView.MenuType.Shop,
      ext: 2
    });
  };

  e.prototype.touchPower = function () {
    $globalParam["default"].isStartView ? $eventManager["default"].send($localEventName["default"].MENU, $startView.MenuType.Shop, 2) : $uIManager.UIManager.instance.replaceView($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.StartView, {
      type: $startView.MenuType.Shop,
      ext: 2
    });
  };

  e.prototype.render = function () {
    this.coinLabel.string = $userDataContext["default"].Ins.coin.toString();
    this.diamondLabel.string = $userDataContext["default"].Ins.diamond.toString();
    this.powerLabel.string = $userDataContext["default"].Ins.power.toString();
    this.gradeLevel.string = $userDataContext["default"].Ins.gradeInfo.grade.toString();
    this.adCoinLabel.string = $userDataContext["default"].Ins.adCoin.toString();
  };

  __decorate([v(cc.Label)], e.prototype, "coinLabel", void 0);

  __decorate([v(cc.Label)], e.prototype, "diamondLabel", void 0);

  __decorate([v(cc.Label)], e.prototype, "powerLabel", void 0);

  __decorate([v(cc.Label)], e.prototype, "adCoinLabel", void 0);

  __decorate([v(cc.Node)], e.prototype, "headNode", void 0);

  __decorate([v(cc.Label)], e.prototype, "gradeLevel", void 0);

  return __decorate([k], e);
}(cc.Component);

exports["default"] = b;

cc._RF.pop();