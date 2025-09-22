"use strict";
cc._RF.push(module, '885895CSeJNBLlPa99oe8qq', 'StartView');
// game_script/scripts/StartView.js

"use strict";

var o;
exports.MenuType = void 0;
var r;
var a;

var $assetsMap = require("./AssetsMap");

var $resManager = require("./ResManager");

var $eventManager = require("./EventManager");

var $popupManager = require("./PopupManager");

var $uIManager = require("./UIManager");

var $uIView = require("./UIView");

var $guide = require("./Guide");

var $remoteAudio = require("./RemoteAudio");

var $configContext = require("./ConfigContext");

var $equipmentContext = require("./EquipmentContext");

var $globalParam = require("./GlobalParam");

var $localEventName = require("./LocalEventName");

var $onlineContext = require("./OnlineContext");

var $roleContext = require("./RoleContext");

var $shopContext = require("./ShopContext");

var $skillContext = require("./SkillContext");

var $taskContext = require("./TaskContext");

var $userDataContext = require("./UserDataContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $rankService = require("./RankService");

var $itemView = require("./ItemView");

var $shopView = require("./ShopView");

var x = cc._decorator;
var O = x.ccclass;
var L = x.property;
(a = r = exports.MenuType || (exports.MenuType = {}))[a.Shop = 0] = "Shop";
a[a.Role = 1] = "Role";
a[a.Battle = 2] = "Battle";
a[a.Skill = 3] = "Skill";
a[a.ALL = 4] = "ALL";

var E = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btnLayers = null;
    e.content = null;
    e.nodePool = [];
    e.currType = r.Battle;
    e.skillInfo = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    var t;
    var e;
    var i;

    if (!$globalParam["default"].isChangeLoding) {
      $globalParam["default"].isChangeLoding = !0;
      $uIManager.UIManager.instance.changeLoadingView($assetsMap.AssetsMap.ResourcesBundle.prefabs.assetsList.GameLoadingView);
    }

    var o = null === (t = this.uiParam.param) || void 0 === t ? void 0 : t.type;

    if (void 0 !== o) {
      (null === (e = this.uiParam.param) || void 0 === e ? void 0 : e.ext) ? this.skip(o, this.uiParam.param.ext) : this.skip(o);
    }

    if (null === (i = this.uiParam.param) || void 0 === i ? void 0 : i.isUpgrade) {
      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.UpgradeView, {
        count: 1
      });
    }

    for (var n = 0; n < 4; n++) {
      this.renderDot(n);
    }

    $userDataContext["default"].Ins.isEndGuide ? $globalParam["default"].isFirstComeStart || ($rankService["default"].instance.reportRankData($rankService.RankTypeEnum.Level), $globalParam["default"].isFirstComeStart = !0, !$userDataContext["default"].Ins.isSign() && $configContext["default"].instance.getAdSwitch2("open_shop_diamond") && $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.NewPackView)) : 0 === $roleContext["default"].ins.packList.length ? $userDataContext["default"].Ins.guideEnd() : $guide["default"].self.startGuideTest(this.btnLayers.children[1], "点击角色");
  };

  e.prototype.addEvent = function () {
    $eventManager["default"].on($localEventName["default"].CHOOSE_SKILL, this.testChooseSKill, this);
    $eventManager["default"].on($localEventName["default"].MENU, this.skip, this);
    $eventManager["default"].on($localEventName["default"].RENDER_DOT, this.renderDot, this);

    for (var t = 0; t < this.btnLayers.children.length; t++) {
      this.btnLayers.children[t].on("click", this.clickItem, this);
    }
  };

  e.prototype.removeEvent = function () {
    $eventManager["default"].off($localEventName["default"].CHOOSE_SKILL, this.testChooseSKill, this);
    $eventManager["default"].off($localEventName["default"].MENU, this.skip, this);
    $eventManager["default"].off($localEventName["default"].RENDER_DOT, this.renderDot, this);

    for (var t = 0; t < this.btnLayers.children.length; t++) {
      this.btnLayers.children[t].off("click", this.clickItem, this);
    }
  };

  e.prototype.skip = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    this.renderDot(t);

    if (t !== this.currType) {
      $remoteAudio["default"].instance.playEffectMusic("Click");
      this.btnLayers.children[this.currType].children[0].getComponent(dragonBones.ArmatureDisplay).playAnimation("stand", 0);
      this.btnLayers.children[t].children[0].getComponent(dragonBones.ArmatureDisplay).playAnimation("on", 0);
      var i = this.getItem(t);

      if (i.node) {
        this.nodePool[this.currType] = this.content.children[0];
        this.content.children[0].getComponent($itemView["default"]).unuse();
        this.content.children[0].parent = null;
        i.node.parent = this.content;
        this.currType = t;
      }

      if (-1 !== e) {
        i.node.getComponent($shopView["default"]).currItemIndex = e - 1;
      }

      if (!i.isNew) {
        i.node.getComponent($itemView["default"]).reuse();
      }
    } else {
      if (-1 !== e) {
        var o = this.content.children[0].getComponent($shopView["default"]);
        o.currItemIndex = e - 1;
        o.renderItems();
      }
    }
  };

  e.prototype.addToScreen = function () {
    $remoteAudio["default"].instance.playBGM();
    $globalParam["default"].isStartView = !0;
  };

  e.prototype.removeToScreen = function () {
    $globalParam["default"].isStartView = !1;

    for (var t = 0; t < this.nodePool.length; t++) {
      if (this.nodePool[t]) {
        this.nodePool[t].destroy();
      }
    }

    this.nodePool.length = 0;
  };

  e.prototype.clickItem = function (t) {
    var e = this.btnLayers.children.indexOf(t.node);

    if (4 === e) {
      return $uIManager.UIManager.instance.showToast("敬请期待");
    }

    this.skip(e);
  };

  e.prototype.getItem = function (t) {
    var e = {
      node: null,
      isNew: !1
    };
    e.isNew = !0;

    if (this.nodePool[t]) {
      e.node = this.nodePool[t];
      this.nodePool[t] = null;
      e.isNew = !1;
    } else {
      if (t === r.Role) {
        var i = $resManager.ResManager.instance.get($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.RoleView);
        e.node = cc.instantiate(i);
      } else {
        t === r.Battle ? (i = $resManager.ResManager.instance.get($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.BattleView), e.node = cc.instantiate(i)) : t === r.Skill ? (i = $resManager.ResManager.instance.get($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.SkillView), e.node = cc.instantiate(i)) : t === r.Shop && (i = $resManager.ResManager.instance.get($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.ShopView), e.node = cc.instantiate(i));
      }
    }

    return e;
  };

  e.prototype.renderDot = function (t) {
    var e;
    var i = !1;

    if (!(t !== r.ALL && t !== r.Role)) {
      i = $equipmentContext["default"].Ins.checkEquipUpgrade() || $roleContext["default"].ins.isCanComposeGem() || $roleContext["default"].ins.hasGunSkinDot() || $roleContext["default"].ins.hasPlayerSkinDot();
      (e = this.btnLayers.children[r.Role]).children[e.children.length - 1].active = i;
    }

    if (!(t !== r.ALL && t !== r.Skill)) {
      i = $roleContext["default"].ins.hasRobotSkinDot() || $skillContext["default"].Ins.checkAllSKillUpgrade();
      (e = this.btnLayers.children[r.Skill]).children[e.children.length - 1].active = i;
    }

    if (!(t !== r.ALL && t !== r.Battle)) {
      i = $onlineContext["default"].Ins.hasRedDot() || $taskContext["default"].Ins.hasRedDot() || !$userDataContext["default"].Ins.isSign() || $userDataContext["default"].Ins.getSweepTime() >= 8 || -1 === $userDataContext["default"].Ins.getCurrConfigIndex();
      (e = this.btnLayers.children[r.Battle]).children[e.children.length - 1].active = i;
    }

    if (!(t !== r.ALL && t !== r.Shop)) {
      i = $shopContext["default"].Ins.hasResRedDot() || $shopContext["default"].Ins.hasDiamondRedDot();
      (e = this.btnLayers.children[r.Shop]).children[e.children.length - 1].active = i;
    }
  };

  e.prototype.testChooseSKill = function (t) {
    if (!this.skillInfo) {
      this.skillInfo = new $gameSkillInfo.GameSkillInfo();
    }

    this.skillInfo.chooseSkill(t);
  };

  __decorate([L(cc.Node)], e.prototype, "btnLayers", void 0);

  __decorate([L(cc.Node)], e.prototype, "content", void 0);

  return __decorate([O], e);
}($uIView.UIView);

exports["default"] = E;

cc._RF.pop();