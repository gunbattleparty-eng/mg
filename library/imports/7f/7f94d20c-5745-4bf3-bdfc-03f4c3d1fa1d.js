"use strict";
cc._RF.push(module, '7f94dIMV0VL8738A/TD0fod', 'RoleView');
// game_script/scripts/RoleView.js

"use strict";

var o;

var $list = require("./List");

var $gemListItem = require("./GemListItem");

var $roleContext = require("./RoleContext");

var $eventManager = require("./EventManager");

var $localEventName = require("./LocalEventName");

var $gameGemInfo = require("./GameGemInfo");

var $equipmentContext = require("./EquipmentContext");

var $uIManager = require("./UIManager");

var $popupManager = require("./PopupManager");

var $assetsMap = require("./AssetsMap");

var $playerSkin = require("./PlayerSkin");

var $itemView = require("./ItemView");

var $startView = require("./StartView");

var $equipmentItem = require("./EquipmentItem");

var $remoteAudio = require("./RemoteAudio");

var $userDataContext = require("./UserDataContext");

var $guide = require("./Guide");

var A = cc._decorator;
var S = A.ccclass;
var C = A.property;

var I = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.gemList = null;
    e.atk = null;
    e.btnCraft = null;
    e.btnProps = null;
    e.btnAutoUpgrade = null;
    e.btnSkin = null;
    e.playerSkin = null;
    e.btnGunSKin = null;
    e.changeGemBtns = null;
    e.equipNode = null;
    e.packList = [];
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    var t = this;
    this.packList = $roleContext["default"].ins.showPackInfoList();
    this.scheduleOnce(function () {
      t.gemList.numItems = t.packList.length;
    }, 0.1);
    $eventManager["default"].on($localEventName["default"].RENDER_GEM, this.updateList, this);
    $eventManager["default"].on($localEventName["default"].RENDER_DOT, this.renderDot, this);
    this.renderAtk();
    this.btnCraft.on("click", this.clickCraft, this);
    this.btnProps.on("click", this.clickProps, this);
    this.btnAutoUpgrade.on("click", this.clickAutoUpgrade, this);
    this.btnSkin.on("click", this.clickSkin, this);
    this.btnGunSKin.on("click", this.clickGunSkin, this);
    var e = $roleContext["default"].ins.currSkinInfo;
    this.playerSkin.changePlayerSkin(e.skin);

    for (var i = 0; i < this.changeGemBtns.children.length; i++) {
      this.changeGemBtns.children[i].on("click", this.changeGemItem, this);
    }

    this.refreshBtn();
    this.renderDot($startView.MenuType.Role);
    this.node.getComponent($equipmentItem["default"]).renderDot($startView.MenuType.Role);
  };

  e.prototype.reuse = function () {
    this.refreshBtn();
    this.renderDot($startView.MenuType.Role);
    this.node.getComponent($equipmentItem["default"]).renderDot($startView.MenuType.Role);
    this.updateList();
    $eventManager["default"].on($localEventName["default"].RENDER_GEM, this.updateList, this);
    $eventManager["default"].on($localEventName["default"].RENDER_DOT, this.renderDot, this);
  };

  e.prototype.unuse = function () {
    $eventManager["default"].off($localEventName["default"].RENDER_GEM, this.updateList, this);
    $eventManager["default"].off($localEventName["default"].RENDER_DOT, this.renderDot, this);
  };

  e.prototype.changeGemItem = function (t) {
    var e = this.changeGemBtns.children.indexOf(t.node);

    if ($equipmentContext["default"].Ins.order !== e) {
      $remoteAudio["default"].instance.playEffectMusic("Click");
      $equipmentContext["default"].Ins.changeGemItem(e);
      this.renderAtk();
      this.refreshBtn();
      $eventManager["default"].send($localEventName["default"].RENDER_GEM);
    }
  };

  e.prototype.refreshBtn = function () {
    this.changeGemBtns.children.forEach(function (t, e) {
      t.children[0].active = $equipmentContext["default"].Ins.order === e;
    });
    this.btnSkin.children[0].active = $roleContext["default"].ins.hasPlayerSkinDot();
    this.btnGunSKin.children[0].active = $roleContext["default"].ins.hasGunSkinDot();
  };

  e.prototype.onDestroy = function () {
    $eventManager["default"].off($localEventName["default"].RENDER_GEM, this.updateList, this);
    $eventManager["default"].off($localEventName["default"].RENDER_DOT, this.renderDot, this);
    this.btnCraft.off("click", this.clickCraft, this);
    this.btnProps.off("click", this.clickProps, this);
    this.btnAutoUpgrade.off("click", this.clickAutoUpgrade, this);
    this.btnSkin.off("click", this.clickSkin, this);
    this.btnGunSKin.off("click", this.clickGunSkin, this);
  };

  e.prototype.renderDot = function (t) {
    if (t === $startView.MenuType.Role) {
      this.btnAutoUpgrade.children[0].active = $equipmentContext["default"].Ins.checkEquipUpgrade();
      this.btnCraft.children[0].active = $roleContext["default"].ins.isCanComposeGem();
    }
  };

  e.prototype.clickSkin = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");
    $uIManager.UIManager.instance.replaceView($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.RoleShopView);
  };

  e.prototype.clickGunSkin = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");
    $uIManager.UIManager.instance.replaceView($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.GunShopView);
  };

  e.prototype.renderItem = function (t, e) {
    if (!(0 !== e || $userDataContext["default"].Ins.isEndGuide)) {
      1 === $userDataContext["default"].Ins.guideStep ? $guide["default"].self.startGuideTest(t, "点击宝石") : 2 === $userDataContext["default"].Ins.guideStep && $guide["default"].self.startGuideTest(this.btnAutoUpgrade, "点击装备或一键升级");
    }

    t.getComponent($gemListItem["default"]).render(this.packList[e]);
  };

  e.prototype.updateList = function () {
    this.renderAtk();
    this.gemList.selectedId = -1;
    this.packList = $roleContext["default"].ins.showPackInfoList();
    this.gemList.numItems = this.packList.length;
    this.gemList.updateAll();
  };

  e.prototype.renderAtk = function () {
    var t = 0;

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.Attack)) {
      t = $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.Attack);
    }

    t += $equipmentContext["default"].Ins.getEquipmentAtk() + $equipmentContext["default"].Ins.getAtk();
    this.atk.string = "" + t;
  };

  e.prototype.clickCraft = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");
    var t = $roleContext["default"].ins.getCanComposeGemList();
    t.length <= 0 ? $uIManager.UIManager.instance.showToast("暂无合成宝石") : $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardGemView, {
      gemIds: t
    });
  };

  e.prototype.clickProps = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");
    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.GemStatsView);
  };

  e.prototype.clickAutoUpgrade = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");

    if (!$userDataContext["default"].Ins.isEndGuide) {
      $guide["default"].self.stopGuide();
      $userDataContext["default"].Ins.guideEnd();
    }

    if ($equipmentContext["default"].Ins.checkEquipUpgrade()) {
      var t = $equipmentContext["default"].Ins.autoUpgrade();
      $eventManager["default"].send($localEventName["default"].EQUIP_UPGRADE, t);
      $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Role);
    } else {
      $uIManager.UIManager.instance.showToast("暂无升级装备");
    }
  };

  __decorate([C($list["default"])], e.prototype, "gemList", void 0);

  __decorate([C(cc.Label)], e.prototype, "atk", void 0);

  __decorate([C(cc.Node)], e.prototype, "btnCraft", void 0);

  __decorate([C(cc.Node)], e.prototype, "btnProps", void 0);

  __decorate([C(cc.Node)], e.prototype, "btnAutoUpgrade", void 0);

  __decorate([C(cc.Node)], e.prototype, "btnSkin", void 0);

  __decorate([C($playerSkin.PlayerSkin)], e.prototype, "playerSkin", void 0);

  __decorate([C(cc.Node)], e.prototype, "btnGunSKin", void 0);

  __decorate([C(cc.Node)], e.prototype, "changeGemBtns", void 0);

  __decorate([C(cc.Node)], e.prototype, "equipNode", void 0);

  return __decorate([S], e);
}($itemView["default"]);

exports["default"] = I;

cc._RF.pop();