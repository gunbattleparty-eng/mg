
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ShopBoxItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'afa064WRaFN8qoBDRDWsq61', 'ShopBoxItem');
// game_script/scripts/ShopBoxItem.js

"use strict";

var o;

var $assetsMap = require("./AssetsMap");

var $eventManager = require("./EventManager");

var $popupManager = require("./PopupManager");

var $uIManager = require("./UIManager");

var $platform = require("./Platform");

var $remoteAudio = require("./RemoteAudio");

var $seedUtil = require("./SeedUtil");

var $aD = require("./AD");

var $adService = require("./AdService");

var $configContext = require("./ConfigContext");

var $localEventName = require("./LocalEventName");

var $roleContext = require("./RoleContext");

var $shopContext = require("./ShopContext");

var $taskContext = require("./TaskContext");

var $userDataContext = require("./UserDataContext");

var $coinDiamondView = require("./CoinDiamondView");

var $startView = require("./StartView");

var A = cc._decorator;
var S = A.ccclass;
var C = A.property;

var I = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btnLayer = null;
    e.normalOPen1Btn = null;
    e.normalOPen10Btn = null;
    e.normalAdBtn = null;
    e.normalCount = null;
    e.normalProgressNode = null;
    e.advancedOPen1Btn = null;
    e.advancedOPen10Btn = null;
    e.advancedAdBtn = null;
    e.advancedCount = null;
    e.advancedProgressNode = null;
    e.excellentOPen1Btn = null;
    e.excellentOPen10Btn = null;
    e.excellentAdBtn = null;
    e.excellentCount = null;
    e.excellentProgressNode = null;
    e.boxAnimNode = null;
    e.dir = 1;
    e.count = 0;
    e.isSheep = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    var t = "";
    $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO ? t = "tt_open_shop_diamond" : $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT && (t = "wx_open_shop_diamond");

    if (!("" === t || $configContext["default"].instance.getAdSwitch(t))) {
      $configContext["default"].instance.gemBoxConfigs[0].video_num = 1;
      $configContext["default"].instance.gemBoxConfigs[0].VLottery_num = 1;
      $configContext["default"].instance.gemBoxConfigs[1].video_num = 1;
      $configContext["default"].instance.gemBoxConfigs[1].VLottery_num = 1;
      $configContext["default"].instance.gemBoxConfigs[2].video_num = 1;
      $configContext["default"].instance.gemBoxConfigs[2].VLottery_num = 1;
    }

    this.renderBtn(!1);
    this.renderBtn(!0);
    this.renderSkinBtn();
    this.renderCount(!1);
    this.renderCount(!0);
    this.renderSkinCount();
    this.isSheep = 1 === $userDataContext["default"].Ins.getEgg(2);

    if (this.isSheep) {
      this.boxAnimNode.getComponentInChildren(dragonBones.ArmatureDisplay).playAnimation("biyan", 0);
    }

    this.normalAdBtn.getComponentInChildren(cc.Label).string = "抽" + $configContext["default"].instance.gemBoxConfigs[0].VLottery_num + "次";
    this.advancedAdBtn.getComponentInChildren(cc.Label).string = "抽" + $configContext["default"].instance.gemBoxConfigs[1].VLottery_num + "次";
    this.excellentAdBtn.getComponentInChildren(cc.Label).string = "抽" + $configContext["default"].instance.gemBoxConfigs[2].VLottery_num + "次";
    this.normalOPen1Btn.on("click", this.clickNormalOPen1, this);
    this.normalOPen10Btn.on("click", this.clickNormalOPen10, this);
    this.normalAdBtn.on("click", this.clickNormalAd, this);
    this.advancedOPen1Btn.on("click", this.clickAdvancedOPen1, this);
    this.advancedOPen10Btn.on("click", this.clickAdvancedOPen10, this);
    this.advancedAdBtn.on("click", this.clickAdvancedAd, this);
    this.excellentOPen1Btn.on("click", this.clickSkinBox1, this);
    this.excellentOPen10Btn.on("click", this.clickSkinBox10, this);
    this.excellentAdBtn.on("click", this.clickSkinBoxAd, this);

    for (var e = 0; e < this.btnLayer.children.length; e++) {
      this.btnLayer.children[e].on("click", this.clickTip, this);
    }

    if ($userDataContext["default"].Ins.getEgg(2) < 2) {
      this.boxAnimNode.on(cc.Node.EventType.TOUCH_END, this.touchBoxAnim, this);
      this.boxAnimNode.on(cc.Node.EventType.TOUCH_MOVE, this.moveBoxAnim, this);
    }
  };

  e.prototype.clickTip = function (t) {
    var e = this.btnLayer.children.indexOf(t.node) + 1;
    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.ChanceView, {
      id: e
    });
  };

  e.prototype.onDestroy = function () {
    this.normalOPen1Btn.off("click", this.clickNormalOPen1, this);
    this.normalOPen10Btn.off("click", this.clickNormalOPen10, this);
    this.normalAdBtn.off("click", this.clickNormalAd, this);
    this.advancedOPen1Btn.off("click", this.clickAdvancedOPen1, this);
    this.advancedOPen10Btn.off("click", this.clickAdvancedOPen10, this);
    this.advancedAdBtn.off("click", this.clickAdvancedAd, this);
    this.excellentOPen1Btn.off("click", this.clickSkinBox1, this);
    this.excellentOPen10Btn.off("click", this.clickSkinBox10, this);
    this.excellentAdBtn.off("click", this.clickSkinBoxAd, this);
  };

  e.prototype.touchBoxAnim = function () {
    if ($userDataContext["default"].Ins.getEgg(1) < 1) {
      if (this.isSheep) {
        $uIManager.UIManager.instance.showToast("缺少钥匙");
      } else {
        {
          var t = this.boxAnimNode.getComponentInChildren(dragonBones.ArmatureDisplay);
          t.playAnimation("yao", 1);
          t.once(dragonBones.EventObject.COMPLETE, function () {
            t.playAnimation("stand", 0);
          }, this);
        }
      }
    } else {
      if (1 === $userDataContext["default"].Ins.getEgg(1)) {
        if (this.isSheep) {
          $userDataContext["default"].Ins.setEgg(1, 2);
          $userDataContext["default"].Ins.setEgg(2, 2);
          this.boxAnimNode.getComponentInChildren(dragonBones.ArmatureDisplay).playAnimation("stand", 0);
          var e = $configContext["default"].instance.gemConfigs.filter(function (t) {
            return 7 === t.Grade;
          });
          e = [e[$seedUtil["default"].randomFrom(0, e.length - 1)]];
          $roleContext["default"].ins.addPackItem(e[0], 1);
          $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
            infos: this.createInfo(e)
          });
          $eventManager["default"].send($localEventName["default"].RENDER_GEM, $startView.MenuType.ALL);
        } else {
          var i = this.boxAnimNode.getComponentInChildren(dragonBones.ArmatureDisplay);
          i.playAnimation("yao", 1);
          i.once(dragonBones.EventObject.COMPLETE, function () {
            i.playAnimation("stand", 0);
          }, this);
        }
      }
    }
  };

  e.prototype.moveBoxAnim = function (t) {
    var e = this;

    if (!(this.count >= 3)) {
      -1 === this.dir ? t.getStartLocation().x - t.getLocation().x >= 100 && (this.count++, this.dir = 1) : t.getLocation().x - t.getStartLocation().x >= 100 && (this.count++, this.dir = -1);

      if (this.count >= 3) {
        t.stopPropagationImmediate();
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.EggKeyView, {
          type: 2
        }, {
          closeCallback: function closeCallback() {
            1 === $userDataContext["default"].Ins.getEgg(2) ? (e.boxAnimNode.getComponentInChildren(dragonBones.ArmatureDisplay).playAnimation("biyan", 0), e.isSheep = !0) : (e.count = 0, e.dir = -1);
          }
        });
      }
    }
  };

  e.prototype.clickNormalOPen1 = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");

    if ($userDataContext["default"].Ins.opearDiamond(-$configContext["default"].instance.gemBoxConfigs[0].spend)) {
      var t = $shopContext["default"].Ins.getNormalBoxRecord(1);
      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
        infos: this.createInfo(t)
      });
      return void this.renderCount(!0);
    }

    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
      type: $coinDiamondView.AstType.DIAMON
    });
  };

  e.prototype.clickAdvancedOPen1 = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");

    if ($userDataContext["default"].Ins.opearDiamond(-$configContext["default"].instance.gemBoxConfigs[1].spend)) {
      var t = $shopContext["default"].Ins.getRobotBox(1);
      var e = this.createInfo(t.gems);

      for (var i = 0; i < t.robots.length; i++) {
        e.push({
          type: 11,
          num: 1,
          ext: t.robots[i]
        });
      }

      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
        infos: e
      });
      return void this.renderCount(!1);
    }

    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
      type: $coinDiamondView.AstType.DIAMON
    });
  };

  e.prototype.clickSkinBox1 = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");

    if ($userDataContext["default"].Ins.opearDiamond(-$configContext["default"].instance.gemBoxConfigs[2].spend)) {
      var t = $shopContext["default"].Ins.getSkinBoxRecord(1);
      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
        infos: t
      });
      return void this.renderSkinCount();
    }

    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
      type: $coinDiamondView.AstType.DIAMON
    });
  };

  e.prototype.clickSkinBox10 = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");

    if ($userDataContext["default"].Ins.opearDiamond(10 * -$configContext["default"].instance.gemBoxConfigs[2].spend)) {
      var t = $shopContext["default"].Ins.getSkinBoxRecord(10);
      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
        infos: t
      });
      return void this.renderSkinCount();
    }

    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
      type: $coinDiamondView.AstType.DIAMON
    });
  };

  e.prototype.clickSkinBoxAd = function () {
    var t = this;
    $remoteAudio["default"].instance.playEffectMusic("Click");
    $adService["default"].Ins.showRewardedVideo(function () {
      if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
        $aD["default"].toutiao.report("JP_box");
      }

      var e = $shopContext["default"].Ins.getSkinBoxVideoRecord();

      if (++e >= $configContext["default"].instance.gemBoxConfigs[2].video_num) {
        e = 0;
        var i = $shopContext["default"].Ins.getSkinBoxRecord($configContext["default"].instance.gemBoxConfigs[0].VLottery_num);
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
          infos: i
        });
        t.renderSkinCount();
        $shopContext["default"].Ins.setSkinBoxVideoRecord(e);
        t.renderSkinBtn();
      } else {
        $shopContext["default"].Ins.setSkinBoxVideoRecord(e);
        t.renderSkinBtn();
      }
    });
  };

  e.prototype.clickNormalOPen10 = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");

    if ($userDataContext["default"].Ins.opearDiamond(10 * -$configContext["default"].instance.gemBoxConfigs[0].spend)) {
      var t = $shopContext["default"].Ins.getNormalBoxRecord(10);
      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
        infos: this.createInfo(t)
      });
      return void this.renderCount(!0);
    }

    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
      type: $coinDiamondView.AstType.DIAMON
    });
  };

  e.prototype.clickAdvancedOPen10 = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");

    if ($userDataContext["default"].Ins.opearDiamond(10 * -$configContext["default"].instance.gemBoxConfigs[1].spend)) {
      var t = $shopContext["default"].Ins.getRobotBox(10);
      var e = this.createInfo(t.gems);

      for (var i = 0; i < t.robots.length; i++) {
        e.push({
          type: 11,
          num: 1,
          ext: t.robots[i]
        });
      }

      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
        infos: e
      });
      return void this.renderCount(!1);
    }

    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
      type: $coinDiamondView.AstType.DIAMON
    });
  };

  e.prototype.clickNormalAd = function () {
    var t = this;
    $remoteAudio["default"].instance.playEffectMusic("Click");
    $adService["default"].Ins.showRewardedVideo(function () {
      if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
        $aD["default"].toutiao.report("normal_box");
      }

      var e = $shopContext["default"].Ins.getBoxVideoRecord(!0);

      if (++e >= $configContext["default"].instance.gemBoxConfigs[0].video_num) {
        e = 0;
        var i = $shopContext["default"].Ins.getNormalBoxRecord($configContext["default"].instance.gemBoxConfigs[0].VLottery_num);
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
          infos: t.createInfo(i)
        });
        t.renderCount(!0);
        $shopContext["default"].Ins.setBoxVideoRecord(!0, e);
        t.renderBtn(!0);
      } else {
        $shopContext["default"].Ins.setBoxVideoRecord(!0, e);
        t.renderBtn(!0);
      }
    });
  };

  e.prototype.clickAdvancedAd = function () {
    var t = this;
    $remoteAudio["default"].instance.playEffectMusic("Click");
    $adService["default"].Ins.showRewardedVideo(function () {
      if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
        $aD["default"].toutiao.report("NB_box");
      }

      var e = $shopContext["default"].Ins.getBoxVideoRecord(!1);

      if (++e >= $configContext["default"].instance.gemBoxConfigs[1].video_num) {
        e = 0;
        var i = $shopContext["default"].Ins.getAdvancedBoxRecord($configContext["default"].instance.gemBoxConfigs[1].VLottery_num);
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
          infos: t.createInfo(i)
        });
        t.renderCount(!1);
        $shopContext["default"].Ins.setBoxVideoRecord(!1, e);
        t.renderBtn(!1);
      } else {
        $shopContext["default"].Ins.setBoxVideoRecord(!1, e);
        t.renderBtn(!1);
      }
    });
  };

  e.prototype.createInfo = function (t) {
    var e = [];

    for (var i = 0; i < t.length; i++) {
      var o = t[i];
      e.push({
        type: 5,
        ext: o.id,
        num: 1
      });
    }

    $taskContext["default"].Ins.setTaskRecord(4, t.length);
    return e;
  };

  e.prototype.renderBtn = function (t) {
    var e = t ? $configContext["default"].instance.gemBoxConfigs[0].spend : $configContext["default"].instance.gemBoxConfigs[1].spend;
    var i = t ? $configContext["default"].instance.gemBoxConfigs[0].video_num : $configContext["default"].instance.gemBoxConfigs[1].video_num;
    (t ? this.normalOPen1Btn : this.advancedOPen1Btn).children[2].getComponent(cc.Label).string = e.toString();
    (t ? this.normalOPen10Btn : this.advancedOPen10Btn).children[2].getComponent(cc.Label).string = (10 * e).toString();
    var o = t ? this.normalAdBtn : this.advancedAdBtn;
    o.children[2].active = 1 !== i;
    o.children[2].getComponent(cc.Label).string = "(" + $shopContext["default"].Ins.getBoxVideoRecord(t) + "/" + i + ")";
  };

  e.prototype.renderSkinBtn = function () {
    var t = $configContext["default"].instance.gemBoxConfigs[2].spend;
    var e = $configContext["default"].instance.gemBoxConfigs[2].video_num;
    this.excellentOPen1Btn.children[2].getComponent(cc.Label).string = t.toString();
    this.excellentOPen10Btn.children[2].getComponent(cc.Label).string = (10 * t).toString();
    var i = this.excellentAdBtn;
    i.children[2].active = 1 !== e;
    i.children[2].getComponent(cc.Label).string = "(" + $shopContext["default"].Ins.getSkinBoxVideoRecord() + "/" + e + ")";
  };

  e.prototype.renderCount = function (t) {
    var e = t ? this.normalCount : this.advancedCount;
    var i = t ? $shopContext["default"].Ins.boxRewardRecord.normal : $shopContext["default"].Ins.boxRewardRecord.advanced;
    e.string = i.toString();
    this.renderProgress();
  };

  e.prototype.renderSkinCount = function () {
    this.excellentCount.string = $shopContext["default"].Ins.boxRewardRecord.skin.toString();
    this.renderProgress();
  };

  e.prototype.renderProgress = function () {
    var t = 10 - $shopContext["default"].Ins.boxRewardRecord.normal;
    var e = t / 10 * 218;
    this.normalProgressNode.setContentSize(cc.size(e, this.normalProgressNode.height));
    e = (t = 10 - $shopContext["default"].Ins.boxRewardRecord.advanced) / 10 * 218;
    this.advancedProgressNode.setContentSize(cc.size(e, this.advancedProgressNode.height));
    e = (t = 10 - $shopContext["default"].Ins.boxRewardRecord.skin) / 10 * 218;
    this.excellentProgressNode.setContentSize(cc.size(e, this.excellentProgressNode.height));
  };

  __decorate([C(cc.Node)], e.prototype, "btnLayer", void 0);

  __decorate([C(cc.Node)], e.prototype, "normalOPen1Btn", void 0);

  __decorate([C(cc.Node)], e.prototype, "normalOPen10Btn", void 0);

  __decorate([C(cc.Node)], e.prototype, "normalAdBtn", void 0);

  __decorate([C(cc.Label)], e.prototype, "normalCount", void 0);

  __decorate([C(cc.Node)], e.prototype, "normalProgressNode", void 0);

  __decorate([C(cc.Node)], e.prototype, "advancedOPen1Btn", void 0);

  __decorate([C(cc.Node)], e.prototype, "advancedOPen10Btn", void 0);

  __decorate([C(cc.Node)], e.prototype, "advancedAdBtn", void 0);

  __decorate([C(cc.Label)], e.prototype, "advancedCount", void 0);

  __decorate([C(cc.Node)], e.prototype, "advancedProgressNode", void 0);

  __decorate([C(cc.Node)], e.prototype, "excellentOPen1Btn", void 0);

  __decorate([C(cc.Node)], e.prototype, "excellentOPen10Btn", void 0);

  __decorate([C(cc.Node)], e.prototype, "excellentAdBtn", void 0);

  __decorate([C(cc.Label)], e.prototype, "excellentCount", void 0);

  __decorate([C(cc.Node)], e.prototype, "excellentProgressNode", void 0);

  __decorate([C(cc.Node)], e.prototype, "boxAnimNode", void 0);

  return __decorate([S], e);
}(cc.Component);

exports["default"] = I;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNob3BCb3hJdGVtLmpzIl0sIm5hbWVzIjpbIm8iLCIkYXNzZXRzTWFwIiwicmVxdWlyZSIsIiRldmVudE1hbmFnZXIiLCIkcG9wdXBNYW5hZ2VyIiwiJHVJTWFuYWdlciIsIiRwbGF0Zm9ybSIsIiRyZW1vdGVBdWRpbyIsIiRzZWVkVXRpbCIsIiRhRCIsIiRhZFNlcnZpY2UiLCIkY29uZmlnQ29udGV4dCIsIiRsb2NhbEV2ZW50TmFtZSIsIiRyb2xlQ29udGV4dCIsIiRzaG9wQ29udGV4dCIsIiR0YXNrQ29udGV4dCIsIiR1c2VyRGF0YUNvbnRleHQiLCIkY29pbkRpYW1vbmRWaWV3IiwiJHN0YXJ0VmlldyIsIkEiLCJjYyIsIl9kZWNvcmF0b3IiLCJTIiwiY2NjbGFzcyIsIkMiLCJwcm9wZXJ0eSIsIkkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnRuTGF5ZXIiLCJub3JtYWxPUGVuMUJ0biIsIm5vcm1hbE9QZW4xMEJ0biIsIm5vcm1hbEFkQnRuIiwibm9ybWFsQ291bnQiLCJub3JtYWxQcm9ncmVzc05vZGUiLCJhZHZhbmNlZE9QZW4xQnRuIiwiYWR2YW5jZWRPUGVuMTBCdG4iLCJhZHZhbmNlZEFkQnRuIiwiYWR2YW5jZWRDb3VudCIsImFkdmFuY2VkUHJvZ3Jlc3NOb2RlIiwiZXhjZWxsZW50T1BlbjFCdG4iLCJleGNlbGxlbnRPUGVuMTBCdG4iLCJleGNlbGxlbnRBZEJ0biIsImV4Y2VsbGVudENvdW50IiwiZXhjZWxsZW50UHJvZ3Jlc3NOb2RlIiwiYm94QW5pbU5vZGUiLCJkaXIiLCJjb3VudCIsImlzU2hlZXAiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJzdGFydCIsIlBsYXRmb3JtIiwiY3VyclBsYXRGb3JtIiwiUGxhdGZvcm1FbnVtIiwiVE9VX1RJQU8iLCJXRUNIQVQiLCJpbnN0YW5jZSIsImdldEFkU3dpdGNoIiwiZ2VtQm94Q29uZmlncyIsInZpZGVvX251bSIsIlZMb3R0ZXJ5X251bSIsInJlbmRlckJ0biIsInJlbmRlclNraW5CdG4iLCJyZW5kZXJDb3VudCIsInJlbmRlclNraW5Db3VudCIsIklucyIsImdldEVnZyIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJkcmFnb25Cb25lcyIsIkFybWF0dXJlRGlzcGxheSIsInBsYXlBbmltYXRpb24iLCJMYWJlbCIsInN0cmluZyIsIm9uIiwiY2xpY2tOb3JtYWxPUGVuMSIsImNsaWNrTm9ybWFsT1BlbjEwIiwiY2xpY2tOb3JtYWxBZCIsImNsaWNrQWR2YW5jZWRPUGVuMSIsImNsaWNrQWR2YW5jZWRPUGVuMTAiLCJjbGlja0FkdmFuY2VkQWQiLCJjbGlja1NraW5Cb3gxIiwiY2xpY2tTa2luQm94MTAiLCJjbGlja1NraW5Cb3hBZCIsImNoaWxkcmVuIiwibGVuZ3RoIiwiY2xpY2tUaXAiLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwidG91Y2hCb3hBbmltIiwiVE9VQ0hfTU9WRSIsIm1vdmVCb3hBbmltIiwiaW5kZXhPZiIsIm5vZGUiLCJQb3B1cE1hbmFnZXIiLCJvcGVuIiwiQXNzZXRzTWFwIiwiUG9wVXBCdW5kbGVzIiwicHJlZmFicyIsImFzc2V0c0xpc3QiLCJDaGFuY2VWaWV3IiwiaWQiLCJvbkRlc3Ryb3kiLCJvZmYiLCJVSU1hbmFnZXIiLCJzaG93VG9hc3QiLCJvbmNlIiwiRXZlbnRPYmplY3QiLCJDT01QTEVURSIsInNldEVnZyIsImdlbUNvbmZpZ3MiLCJmaWx0ZXIiLCJHcmFkZSIsInJhbmRvbUZyb20iLCJpbnMiLCJhZGRQYWNrSXRlbSIsIlJld2FyZFZpZXciLCJpbmZvcyIsImNyZWF0ZUluZm8iLCJzZW5kIiwiUkVOREVSX0dFTSIsIk1lbnVUeXBlIiwiQUxMIiwiaSIsImdldFN0YXJ0TG9jYXRpb24iLCJ4IiwiZ2V0TG9jYXRpb24iLCJzdG9wUHJvcGFnYXRpb25JbW1lZGlhdGUiLCJFZ2dLZXlWaWV3IiwidHlwZSIsImNsb3NlQ2FsbGJhY2siLCJwbGF5RWZmZWN0TXVzaWMiLCJvcGVhckRpYW1vbmQiLCJzcGVuZCIsImdldE5vcm1hbEJveFJlY29yZCIsIkNvaW5EaWFtb25kVmlldyIsIkFzdFR5cGUiLCJESUFNT04iLCJnZXRSb2JvdEJveCIsImdlbXMiLCJyb2JvdHMiLCJwdXNoIiwibnVtIiwiZXh0IiwiZ2V0U2tpbkJveFJlY29yZCIsInNob3dSZXdhcmRlZFZpZGVvIiwidG91dGlhbyIsInJlcG9ydCIsImdldFNraW5Cb3hWaWRlb1JlY29yZCIsInNldFNraW5Cb3hWaWRlb1JlY29yZCIsImdldEJveFZpZGVvUmVjb3JkIiwic2V0Qm94VmlkZW9SZWNvcmQiLCJnZXRBZHZhbmNlZEJveFJlY29yZCIsInNldFRhc2tSZWNvcmQiLCJnZXRDb21wb25lbnQiLCJ0b1N0cmluZyIsImFjdGl2ZSIsImJveFJld2FyZFJlY29yZCIsIm5vcm1hbCIsImFkdmFuY2VkIiwicmVuZGVyUHJvZ3Jlc3MiLCJza2luIiwic2V0Q29udGVudFNpemUiLCJzaXplIiwiaGVpZ2h0IiwiX19kZWNvcmF0ZSIsIkNvbXBvbmVudCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlFLGFBQWEsR0FBR0YsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlHLFVBQVUsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUksU0FBUyxHQUFHSixPQUFPLENBQUMsWUFBRCxDQUF2Qjs7QUFDQSxJQUFJSyxZQUFZLEdBQUdMLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlNLFNBQVMsR0FBR04sT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0FBQ0EsSUFBSU8sR0FBRyxHQUFHUCxPQUFPLENBQUMsTUFBRCxDQUFqQjs7QUFDQSxJQUFJUSxVQUFVLEdBQUdS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QUNsSixDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBbmFPLENBbWFMUixFQUFFLENBQUNxSixTQW5hRSxDQUFSOztBQW9hQUMsT0FBTyxXQUFQLEdBQWtCaEosQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJGFzc2V0c01hcCA9IHJlcXVpcmUoXCIuL0Fzc2V0c01hcFwiKTtcclxudmFyICRldmVudE1hbmFnZXIgPSByZXF1aXJlKFwiLi9FdmVudE1hbmFnZXJcIik7XHJcbnZhciAkcG9wdXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vUG9wdXBNYW5hZ2VyXCIpO1xyXG52YXIgJHVJTWFuYWdlciA9IHJlcXVpcmUoXCIuL1VJTWFuYWdlclwiKTtcclxudmFyICRwbGF0Zm9ybSA9IHJlcXVpcmUoXCIuL1BsYXRmb3JtXCIpO1xyXG52YXIgJHJlbW90ZUF1ZGlvID0gcmVxdWlyZShcIi4vUmVtb3RlQXVkaW9cIik7XHJcbnZhciAkc2VlZFV0aWwgPSByZXF1aXJlKFwiLi9TZWVkVXRpbFwiKTtcclxudmFyICRhRCA9IHJlcXVpcmUoXCIuL0FEXCIpO1xyXG52YXIgJGFkU2VydmljZSA9IHJlcXVpcmUoXCIuL0FkU2VydmljZVwiKTtcclxudmFyICRjb25maWdDb250ZXh0ID0gcmVxdWlyZShcIi4vQ29uZmlnQ29udGV4dFwiKTtcclxudmFyICRsb2NhbEV2ZW50TmFtZSA9IHJlcXVpcmUoXCIuL0xvY2FsRXZlbnROYW1lXCIpO1xyXG52YXIgJHJvbGVDb250ZXh0ID0gcmVxdWlyZShcIi4vUm9sZUNvbnRleHRcIik7XHJcbnZhciAkc2hvcENvbnRleHQgPSByZXF1aXJlKFwiLi9TaG9wQ29udGV4dFwiKTtcclxudmFyICR0YXNrQ29udGV4dCA9IHJlcXVpcmUoXCIuL1Rhc2tDb250ZXh0XCIpO1xyXG52YXIgJHVzZXJEYXRhQ29udGV4dCA9IHJlcXVpcmUoXCIuL1VzZXJEYXRhQ29udGV4dFwiKTtcclxudmFyICRjb2luRGlhbW9uZFZpZXcgPSByZXF1aXJlKFwiLi9Db2luRGlhbW9uZFZpZXdcIik7XHJcbnZhciAkc3RhcnRWaWV3ID0gcmVxdWlyZShcIi4vU3RhcnRWaWV3XCIpO1xyXG52YXIgQSA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBTID0gQS5jY2NsYXNzO1xyXG52YXIgQyA9IEEucHJvcGVydHk7XHJcbnZhciBJID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUuYnRuTGF5ZXIgPSBudWxsO1xyXG4gICAgICAgIGUubm9ybWFsT1BlbjFCdG4gPSBudWxsO1xyXG4gICAgICAgIGUubm9ybWFsT1BlbjEwQnRuID0gbnVsbDtcclxuICAgICAgICBlLm5vcm1hbEFkQnRuID0gbnVsbDtcclxuICAgICAgICBlLm5vcm1hbENvdW50ID0gbnVsbDtcclxuICAgICAgICBlLm5vcm1hbFByb2dyZXNzTm9kZSA9IG51bGw7XHJcbiAgICAgICAgZS5hZHZhbmNlZE9QZW4xQnRuID0gbnVsbDtcclxuICAgICAgICBlLmFkdmFuY2VkT1BlbjEwQnRuID0gbnVsbDtcclxuICAgICAgICBlLmFkdmFuY2VkQWRCdG4gPSBudWxsO1xyXG4gICAgICAgIGUuYWR2YW5jZWRDb3VudCA9IG51bGw7XHJcbiAgICAgICAgZS5hZHZhbmNlZFByb2dyZXNzTm9kZSA9IG51bGw7XHJcbiAgICAgICAgZS5leGNlbGxlbnRPUGVuMUJ0biA9IG51bGw7XHJcbiAgICAgICAgZS5leGNlbGxlbnRPUGVuMTBCdG4gPSBudWxsO1xyXG4gICAgICAgIGUuZXhjZWxsZW50QWRCdG4gPSBudWxsO1xyXG4gICAgICAgIGUuZXhjZWxsZW50Q291bnQgPSBudWxsO1xyXG4gICAgICAgIGUuZXhjZWxsZW50UHJvZ3Jlc3NOb2RlID0gbnVsbDtcclxuICAgICAgICBlLmJveEFuaW1Ob2RlID0gbnVsbDtcclxuICAgICAgICBlLmRpciA9IDE7XHJcbiAgICAgICAgZS5jb3VudCA9IDA7XHJcbiAgICAgICAgZS5pc1NoZWVwID0gITE7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IFwiXCI7XHJcbiAgICAgICAgJHBsYXRmb3JtLlBsYXRmb3JtLmN1cnJQbGF0Rm9ybSA9PT0gJHBsYXRmb3JtLlBsYXRmb3JtRW51bS5UT1VfVElBT1xyXG4gICAgICAgICAgICA/ICh0ID0gXCJ0dF9vcGVuX3Nob3BfZGlhbW9uZFwiKVxyXG4gICAgICAgICAgICA6ICRwbGF0Zm9ybS5QbGF0Zm9ybS5jdXJyUGxhdEZvcm0gPT09ICRwbGF0Zm9ybS5QbGF0Zm9ybUVudW0uV0VDSEFUICYmICh0ID0gXCJ3eF9vcGVuX3Nob3BfZGlhbW9uZFwiKTtcclxuICAgICAgICBpZiAoIShcIlwiID09PSB0IHx8ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuZ2V0QWRTd2l0Y2godCkpKSB7XHJcbiAgICAgICAgICAgICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuZ2VtQm94Q29uZmlnc1swXS52aWRlb19udW0gPSAxO1xyXG4gICAgICAgICAgICAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbUJveENvbmZpZ3NbMF0uVkxvdHRlcnlfbnVtID0gMTtcclxuICAgICAgICAgICAgJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Cb3hDb25maWdzWzFdLnZpZGVvX251bSA9IDE7XHJcbiAgICAgICAgICAgICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuZ2VtQm94Q29uZmlnc1sxXS5WTG90dGVyeV9udW0gPSAxO1xyXG4gICAgICAgICAgICAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbUJveENvbmZpZ3NbMl0udmlkZW9fbnVtID0gMTtcclxuICAgICAgICAgICAgJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Cb3hDb25maWdzWzJdLlZMb3R0ZXJ5X251bSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyQnRuKCExKTtcclxuICAgICAgICB0aGlzLnJlbmRlckJ0bighMCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTa2luQnRuKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb3VudCghMSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb3VudCghMCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTa2luQ291bnQoKTtcclxuICAgICAgICB0aGlzLmlzU2hlZXAgPSAxID09PSAkdXNlckRhdGFDb250ZXh0LmRlZmF1bHQuSW5zLmdldEVnZygyKTtcclxuICAgICAgICBpZiAodGhpcy5pc1NoZWVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm94QW5pbU5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpLnBsYXlBbmltYXRpb24oXCJiaXlhblwiLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub3JtYWxBZEJ0bi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPVxyXG4gICAgICAgICAgICBcIuaKvVwiICsgJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Cb3hDb25maWdzWzBdLlZMb3R0ZXJ5X251bSArIFwi5qyhXCI7XHJcbiAgICAgICAgdGhpcy5hZHZhbmNlZEFkQnRuLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgICAgIFwi5oq9XCIgKyAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbUJveENvbmZpZ3NbMV0uVkxvdHRlcnlfbnVtICsgXCLmrKFcIjtcclxuICAgICAgICB0aGlzLmV4Y2VsbGVudEFkQnRuLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgICAgIFwi5oq9XCIgKyAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbUJveENvbmZpZ3NbMl0uVkxvdHRlcnlfbnVtICsgXCLmrKFcIjtcclxuICAgICAgICB0aGlzLm5vcm1hbE9QZW4xQnRuLm9uKFwiY2xpY2tcIiwgdGhpcy5jbGlja05vcm1hbE9QZW4xLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vcm1hbE9QZW4xMEJ0bi5vbihcImNsaWNrXCIsIHRoaXMuY2xpY2tOb3JtYWxPUGVuMTAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9ybWFsQWRCdG4ub24oXCJjbGlja1wiLCB0aGlzLmNsaWNrTm9ybWFsQWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWR2YW5jZWRPUGVuMUJ0bi5vbihcImNsaWNrXCIsIHRoaXMuY2xpY2tBZHZhbmNlZE9QZW4xLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmFkdmFuY2VkT1BlbjEwQnRuLm9uKFwiY2xpY2tcIiwgdGhpcy5jbGlja0FkdmFuY2VkT1BlbjEwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmFkdmFuY2VkQWRCdG4ub24oXCJjbGlja1wiLCB0aGlzLmNsaWNrQWR2YW5jZWRBZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5leGNlbGxlbnRPUGVuMUJ0bi5vbihcImNsaWNrXCIsIHRoaXMuY2xpY2tTa2luQm94MSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5leGNlbGxlbnRPUGVuMTBCdG4ub24oXCJjbGlja1wiLCB0aGlzLmNsaWNrU2tpbkJveDEwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmV4Y2VsbGVudEFkQnRuLm9uKFwiY2xpY2tcIiwgdGhpcy5jbGlja1NraW5Cb3hBZCwgdGhpcyk7XHJcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLmJ0bkxheWVyLmNoaWxkcmVuLmxlbmd0aDsgZSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTGF5ZXIuY2hpbGRyZW5bZV0ub24oXCJjbGlja1wiLCB0aGlzLmNsaWNrVGlwLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCR1c2VyRGF0YUNvbnRleHQuZGVmYXVsdC5JbnMuZ2V0RWdnKDIpIDwgMikge1xyXG4gICAgICAgICAgICB0aGlzLmJveEFuaW1Ob2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEJveEFuaW0sIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmJveEFuaW1Ob2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMubW92ZUJveEFuaW0sIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jbGlja1RpcCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLmJ0bkxheWVyLmNoaWxkcmVuLmluZGV4T2YodC5ub2RlKSArIDE7XHJcbiAgICAgICAgJHBvcHVwTWFuYWdlci5Qb3B1cE1hbmFnZXIuaW5zdGFuY2Uub3BlbigkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LkNoYW5jZVZpZXcsIHtcclxuICAgICAgICAgICAgaWQ6IGVcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub3JtYWxPUGVuMUJ0bi5vZmYoXCJjbGlja1wiLCB0aGlzLmNsaWNrTm9ybWFsT1BlbjEsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9ybWFsT1BlbjEwQnRuLm9mZihcImNsaWNrXCIsIHRoaXMuY2xpY2tOb3JtYWxPUGVuMTAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9ybWFsQWRCdG4ub2ZmKFwiY2xpY2tcIiwgdGhpcy5jbGlja05vcm1hbEFkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmFkdmFuY2VkT1BlbjFCdG4ub2ZmKFwiY2xpY2tcIiwgdGhpcy5jbGlja0FkdmFuY2VkT1BlbjEsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWR2YW5jZWRPUGVuMTBCdG4ub2ZmKFwiY2xpY2tcIiwgdGhpcy5jbGlja0FkdmFuY2VkT1BlbjEwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmFkdmFuY2VkQWRCdG4ub2ZmKFwiY2xpY2tcIiwgdGhpcy5jbGlja0FkdmFuY2VkQWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZXhjZWxsZW50T1BlbjFCdG4ub2ZmKFwiY2xpY2tcIiwgdGhpcy5jbGlja1NraW5Cb3gxLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmV4Y2VsbGVudE9QZW4xMEJ0bi5vZmYoXCJjbGlja1wiLCB0aGlzLmNsaWNrU2tpbkJveDEwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmV4Y2VsbGVudEFkQnRuLm9mZihcImNsaWNrXCIsIHRoaXMuY2xpY2tTa2luQm94QWQsIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnRvdWNoQm94QW5pbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJHVzZXJEYXRhQ29udGV4dC5kZWZhdWx0Lklucy5nZXRFZ2coMSkgPCAxKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2hlZXApIHtcclxuICAgICAgICAgICAgICAgICR1SU1hbmFnZXIuVUlNYW5hZ2VyLmluc3RhbmNlLnNob3dUb2FzdChcIue8uuWwkemSpeWMmVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuYm94QW5pbU5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHQucGxheUFuaW1hdGlvbihcInlhb1wiLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0Lm9uY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkNPTVBMRVRFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnBsYXlBbmltYXRpb24oXCJzdGFuZFwiLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoMSA9PT0gJHVzZXJEYXRhQ29udGV4dC5kZWZhdWx0Lklucy5nZXRFZ2coMSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2hlZXApIHtcclxuICAgICAgICAgICAgICAgICAgICAkdXNlckRhdGFDb250ZXh0LmRlZmF1bHQuSW5zLnNldEVnZygxLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICAkdXNlckRhdGFDb250ZXh0LmRlZmF1bHQuSW5zLnNldEVnZygyLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveEFuaW1Ob2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KS5wbGF5QW5pbWF0aW9uKFwic3RhbmRcIiwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbUNvbmZpZ3MuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA3ID09PSB0LkdyYWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGUgPSBbZVskc2VlZFV0aWwuZGVmYXVsdC5yYW5kb21Gcm9tKDAsIGUubGVuZ3RoIC0gMSldXTtcclxuICAgICAgICAgICAgICAgICAgICAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuYWRkUGFja0l0ZW0oZVswXSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5Qb3B1cE1hbmFnZXIuaW5zdGFuY2Uub3BlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGFzc2V0c01hcC5Bc3NldHNNYXAuUG9wVXBCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5SZXdhcmRWaWV3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvczogdGhpcy5jcmVhdGVJbmZvKGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICRldmVudE1hbmFnZXIuZGVmYXVsdC5zZW5kKCRsb2NhbEV2ZW50TmFtZS5kZWZhdWx0LlJFTkRFUl9HRU0sICRzdGFydFZpZXcuTWVudVR5cGUuQUxMKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLmJveEFuaW1Ob2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICBpLnBsYXlBbmltYXRpb24oXCJ5YW9cIiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaS5vbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5wbGF5QW5pbWF0aW9uKFwic3RhbmRcIiwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLm1vdmVCb3hBbmltID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCEodGhpcy5jb3VudCA+PSAzKSkge1xyXG4gICAgICAgICAgICAtMSA9PT0gdGhpcy5kaXJcclxuICAgICAgICAgICAgICAgID8gdC5nZXRTdGFydExvY2F0aW9uKCkueCAtIHQuZ2V0TG9jYXRpb24oKS54ID49IDEwMCAmJiAodGhpcy5jb3VudCsrLCAodGhpcy5kaXIgPSAxKSlcclxuICAgICAgICAgICAgICAgIDogdC5nZXRMb2NhdGlvbigpLnggLSB0LmdldFN0YXJ0TG9jYXRpb24oKS54ID49IDEwMCAmJiAodGhpcy5jb3VudCsrLCAodGhpcy5kaXIgPSAtMSkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudCA+PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0LnN0b3BQcm9wYWdhdGlvbkltbWVkaWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5Qb3B1cE1hbmFnZXIuaW5zdGFuY2Uub3BlbihcclxuICAgICAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LkVnZ0tleVZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQ2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgPT09ICR1c2VyRGF0YUNvbnRleHQuZGVmYXVsdC5JbnMuZ2V0RWdnKDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoZS5ib3hBbmltTm9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGxheUFuaW1hdGlvbihcImJpeWFuXCIsIDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUuaXNTaGVlcCA9ICEwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICgoZS5jb3VudCA9IDApLCAoZS5kaXIgPSAtMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jbGlja05vcm1hbE9QZW4xID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRyZW1vdGVBdWRpby5kZWZhdWx0Lmluc3RhbmNlLnBsYXlFZmZlY3RNdXNpYyhcIkNsaWNrXCIpO1xyXG4gICAgICAgIGlmICgkdXNlckRhdGFDb250ZXh0LmRlZmF1bHQuSW5zLm9wZWFyRGlhbW9uZCgtJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Cb3hDb25maWdzWzBdLnNwZW5kKSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9ICRzaG9wQ29udGV4dC5kZWZhdWx0Lklucy5nZXROb3JtYWxCb3hSZWNvcmQoMSk7XHJcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuUG9wdXBNYW5hZ2VyLmluc3RhbmNlLm9wZW4oJGFzc2V0c01hcC5Bc3NldHNNYXAuUG9wVXBCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5SZXdhcmRWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBpbmZvczogdGhpcy5jcmVhdGVJbmZvKHQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLnJlbmRlckNvdW50KCEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHBvcHVwTWFuYWdlci5Qb3B1cE1hbmFnZXIuaW5zdGFuY2Uub3BlbigkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LkNvaW5EaWFtb25kVmlldywge1xyXG4gICAgICAgICAgICB0eXBlOiAkY29pbkRpYW1vbmRWaWV3LkFzdFR5cGUuRElBTU9OXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuY2xpY2tBZHZhbmNlZE9QZW4xID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRyZW1vdGVBdWRpby5kZWZhdWx0Lmluc3RhbmNlLnBsYXlFZmZlY3RNdXNpYyhcIkNsaWNrXCIpO1xyXG4gICAgICAgIGlmICgkdXNlckRhdGFDb250ZXh0LmRlZmF1bHQuSW5zLm9wZWFyRGlhbW9uZCgtJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Cb3hDb25maWdzWzFdLnNwZW5kKSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9ICRzaG9wQ29udGV4dC5kZWZhdWx0Lklucy5nZXRSb2JvdEJveCgxKTtcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNyZWF0ZUluZm8odC5nZW1zKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0LnJvYm90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAxMSxcclxuICAgICAgICAgICAgICAgICAgICBudW06IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0OiB0LnJvYm90c1tpXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5Qb3B1cE1hbmFnZXIuaW5zdGFuY2Uub3BlbigkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LlJld2FyZFZpZXcsIHtcclxuICAgICAgICAgICAgICAgIGluZm9zOiBlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLnJlbmRlckNvdW50KCExKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHBvcHVwTWFuYWdlci5Qb3B1cE1hbmFnZXIuaW5zdGFuY2Uub3BlbigkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LkNvaW5EaWFtb25kVmlldywge1xyXG4gICAgICAgICAgICB0eXBlOiAkY29pbkRpYW1vbmRWaWV3LkFzdFR5cGUuRElBTU9OXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuY2xpY2tTa2luQm94MSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkcmVtb3RlQXVkaW8uZGVmYXVsdC5pbnN0YW5jZS5wbGF5RWZmZWN0TXVzaWMoXCJDbGlja1wiKTtcclxuICAgICAgICBpZiAoJHVzZXJEYXRhQ29udGV4dC5kZWZhdWx0Lklucy5vcGVhckRpYW1vbmQoLSRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuZ2VtQm94Q29uZmlnc1syXS5zcGVuZCkpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSAkc2hvcENvbnRleHQuZGVmYXVsdC5JbnMuZ2V0U2tpbkJveFJlY29yZCgxKTtcclxuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5Qb3B1cE1hbmFnZXIuaW5zdGFuY2Uub3BlbigkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LlJld2FyZFZpZXcsIHtcclxuICAgICAgICAgICAgICAgIGluZm9zOiB0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLnJlbmRlclNraW5Db3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkcG9wdXBNYW5hZ2VyLlBvcHVwTWFuYWdlci5pbnN0YW5jZS5vcGVuKCRhc3NldHNNYXAuQXNzZXRzTWFwLlBvcFVwQnVuZGxlcy5wcmVmYWJzLmFzc2V0c0xpc3QuQ29pbkRpYW1vbmRWaWV3LCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICRjb2luRGlhbW9uZFZpZXcuQXN0VHlwZS5ESUFNT05cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jbGlja1NraW5Cb3gxMCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkcmVtb3RlQXVkaW8uZGVmYXVsdC5pbnN0YW5jZS5wbGF5RWZmZWN0TXVzaWMoXCJDbGlja1wiKTtcclxuICAgICAgICBpZiAoJHVzZXJEYXRhQ29udGV4dC5kZWZhdWx0Lklucy5vcGVhckRpYW1vbmQoMTAgKiAtJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Cb3hDb25maWdzWzJdLnNwZW5kKSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9ICRzaG9wQ29udGV4dC5kZWZhdWx0Lklucy5nZXRTa2luQm94UmVjb3JkKDEwKTtcclxuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5Qb3B1cE1hbmFnZXIuaW5zdGFuY2Uub3BlbigkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LlJld2FyZFZpZXcsIHtcclxuICAgICAgICAgICAgICAgIGluZm9zOiB0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLnJlbmRlclNraW5Db3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkcG9wdXBNYW5hZ2VyLlBvcHVwTWFuYWdlci5pbnN0YW5jZS5vcGVuKCRhc3NldHNNYXAuQXNzZXRzTWFwLlBvcFVwQnVuZGxlcy5wcmVmYWJzLmFzc2V0c0xpc3QuQ29pbkRpYW1vbmRWaWV3LCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICRjb2luRGlhbW9uZFZpZXcuQXN0VHlwZS5ESUFNT05cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jbGlja1NraW5Cb3hBZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgJHJlbW90ZUF1ZGlvLmRlZmF1bHQuaW5zdGFuY2UucGxheUVmZmVjdE11c2ljKFwiQ2xpY2tcIik7XHJcbiAgICAgICAgJGFkU2VydmljZS5kZWZhdWx0Lklucy5zaG93UmV3YXJkZWRWaWRlbyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkcGxhdGZvcm0uUGxhdGZvcm0uY3VyclBsYXRGb3JtID09PSAkcGxhdGZvcm0uUGxhdGZvcm1FbnVtLlRPVV9USUFPKSB7XHJcbiAgICAgICAgICAgICAgICAkYUQuZGVmYXVsdC50b3V0aWFvLnJlcG9ydChcIkpQX2JveFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZSA9ICRzaG9wQ29udGV4dC5kZWZhdWx0Lklucy5nZXRTa2luQm94VmlkZW9SZWNvcmQoKTtcclxuICAgICAgICAgICAgaWYgKCsrZSA+PSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbUJveENvbmZpZ3NbMl0udmlkZW9fbnVtKSB7XHJcbiAgICAgICAgICAgICAgICBlID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gJHNob3BDb250ZXh0LmRlZmF1bHQuSW5zLmdldFNraW5Cb3hSZWNvcmQoXHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Cb3hDb25maWdzWzBdLlZMb3R0ZXJ5X251bVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuUG9wdXBNYW5hZ2VyLmluc3RhbmNlLm9wZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgJGFzc2V0c01hcC5Bc3NldHNNYXAuUG9wVXBCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5SZXdhcmRWaWV3LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3M6IGlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdC5yZW5kZXJTa2luQ291bnQoKTtcclxuICAgICAgICAgICAgICAgICRzaG9wQ29udGV4dC5kZWZhdWx0Lklucy5zZXRTa2luQm94VmlkZW9SZWNvcmQoZSk7XHJcbiAgICAgICAgICAgICAgICB0LnJlbmRlclNraW5CdG4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRzaG9wQ29udGV4dC5kZWZhdWx0Lklucy5zZXRTa2luQm94VmlkZW9SZWNvcmQoZSk7XHJcbiAgICAgICAgICAgICAgICB0LnJlbmRlclNraW5CdG4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmNsaWNrTm9ybWFsT1BlbjEwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRyZW1vdGVBdWRpby5kZWZhdWx0Lmluc3RhbmNlLnBsYXlFZmZlY3RNdXNpYyhcIkNsaWNrXCIpO1xyXG4gICAgICAgIGlmICgkdXNlckRhdGFDb250ZXh0LmRlZmF1bHQuSW5zLm9wZWFyRGlhbW9uZCgxMCAqIC0kY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbUJveENvbmZpZ3NbMF0uc3BlbmQpKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gJHNob3BDb250ZXh0LmRlZmF1bHQuSW5zLmdldE5vcm1hbEJveFJlY29yZCgxMCk7XHJcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuUG9wdXBNYW5hZ2VyLmluc3RhbmNlLm9wZW4oJGFzc2V0c01hcC5Bc3NldHNNYXAuUG9wVXBCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5SZXdhcmRWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBpbmZvczogdGhpcy5jcmVhdGVJbmZvKHQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLnJlbmRlckNvdW50KCEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHBvcHVwTWFuYWdlci5Qb3B1cE1hbmFnZXIuaW5zdGFuY2Uub3BlbigkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LkNvaW5EaWFtb25kVmlldywge1xyXG4gICAgICAgICAgICB0eXBlOiAkY29pbkRpYW1vbmRWaWV3LkFzdFR5cGUuRElBTU9OXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuY2xpY2tBZHZhbmNlZE9QZW4xMCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkcmVtb3RlQXVkaW8uZGVmYXVsdC5pbnN0YW5jZS5wbGF5RWZmZWN0TXVzaWMoXCJDbGlja1wiKTtcclxuICAgICAgICBpZiAoJHVzZXJEYXRhQ29udGV4dC5kZWZhdWx0Lklucy5vcGVhckRpYW1vbmQoMTAgKiAtJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Cb3hDb25maWdzWzFdLnNwZW5kKSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9ICRzaG9wQ29udGV4dC5kZWZhdWx0Lklucy5nZXRSb2JvdEJveCgxMCk7XHJcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5jcmVhdGVJbmZvKHQuZ2Vtcyk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5yb2JvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogMTEsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4dDogdC5yb2JvdHNbaV1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuUG9wdXBNYW5hZ2VyLmluc3RhbmNlLm9wZW4oJGFzc2V0c01hcC5Bc3NldHNNYXAuUG9wVXBCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5SZXdhcmRWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBpbmZvczogZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5yZW5kZXJDb3VudCghMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRwb3B1cE1hbmFnZXIuUG9wdXBNYW5hZ2VyLmluc3RhbmNlLm9wZW4oJGFzc2V0c01hcC5Bc3NldHNNYXAuUG9wVXBCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5Db2luRGlhbW9uZFZpZXcsIHtcclxuICAgICAgICAgICAgdHlwZTogJGNvaW5EaWFtb25kVmlldy5Bc3RUeXBlLkRJQU1PTlxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmNsaWNrTm9ybWFsQWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgICRyZW1vdGVBdWRpby5kZWZhdWx0Lmluc3RhbmNlLnBsYXlFZmZlY3RNdXNpYyhcIkNsaWNrXCIpO1xyXG4gICAgICAgICRhZFNlcnZpY2UuZGVmYXVsdC5JbnMuc2hvd1Jld2FyZGVkVmlkZW8oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJHBsYXRmb3JtLlBsYXRmb3JtLmN1cnJQbGF0Rm9ybSA9PT0gJHBsYXRmb3JtLlBsYXRmb3JtRW51bS5UT1VfVElBTykge1xyXG4gICAgICAgICAgICAgICAgJGFELmRlZmF1bHQudG91dGlhby5yZXBvcnQoXCJub3JtYWxfYm94XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBlID0gJHNob3BDb250ZXh0LmRlZmF1bHQuSW5zLmdldEJveFZpZGVvUmVjb3JkKCEwKTtcclxuICAgICAgICAgICAgaWYgKCsrZSA+PSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbUJveENvbmZpZ3NbMF0udmlkZW9fbnVtKSB7XHJcbiAgICAgICAgICAgICAgICBlID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gJHNob3BDb250ZXh0LmRlZmF1bHQuSW5zLmdldE5vcm1hbEJveFJlY29yZChcclxuICAgICAgICAgICAgICAgICAgICAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbUJveENvbmZpZ3NbMF0uVkxvdHRlcnlfbnVtXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5Qb3B1cE1hbmFnZXIuaW5zdGFuY2Uub3BlbihcclxuICAgICAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LlJld2FyZFZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvczogdC5jcmVhdGVJbmZvKGkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHQucmVuZGVyQ291bnQoITApO1xyXG4gICAgICAgICAgICAgICAgJHNob3BDb250ZXh0LmRlZmF1bHQuSW5zLnNldEJveFZpZGVvUmVjb3JkKCEwLCBlKTtcclxuICAgICAgICAgICAgICAgIHQucmVuZGVyQnRuKCEwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRzaG9wQ29udGV4dC5kZWZhdWx0Lklucy5zZXRCb3hWaWRlb1JlY29yZCghMCwgZSk7XHJcbiAgICAgICAgICAgICAgICB0LnJlbmRlckJ0bighMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jbGlja0FkdmFuY2VkQWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgICRyZW1vdGVBdWRpby5kZWZhdWx0Lmluc3RhbmNlLnBsYXlFZmZlY3RNdXNpYyhcIkNsaWNrXCIpO1xyXG4gICAgICAgICRhZFNlcnZpY2UuZGVmYXVsdC5JbnMuc2hvd1Jld2FyZGVkVmlkZW8oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJHBsYXRmb3JtLlBsYXRmb3JtLmN1cnJQbGF0Rm9ybSA9PT0gJHBsYXRmb3JtLlBsYXRmb3JtRW51bS5UT1VfVElBTykge1xyXG4gICAgICAgICAgICAgICAgJGFELmRlZmF1bHQudG91dGlhby5yZXBvcnQoXCJOQl9ib3hcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGUgPSAkc2hvcENvbnRleHQuZGVmYXVsdC5JbnMuZ2V0Qm94VmlkZW9SZWNvcmQoITEpO1xyXG4gICAgICAgICAgICBpZiAoKytlID49ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuZ2VtQm94Q29uZmlnc1sxXS52aWRlb19udW0pIHtcclxuICAgICAgICAgICAgICAgIGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIGkgPSAkc2hvcENvbnRleHQuZGVmYXVsdC5JbnMuZ2V0QWR2YW5jZWRCb3hSZWNvcmQoXHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Cb3hDb25maWdzWzFdLlZMb3R0ZXJ5X251bVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuUG9wdXBNYW5hZ2VyLmluc3RhbmNlLm9wZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgJGFzc2V0c01hcC5Bc3NldHNNYXAuUG9wVXBCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5SZXdhcmRWaWV3LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3M6IHQuY3JlYXRlSW5mbyhpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0LnJlbmRlckNvdW50KCExKTtcclxuICAgICAgICAgICAgICAgICRzaG9wQ29udGV4dC5kZWZhdWx0Lklucy5zZXRCb3hWaWRlb1JlY29yZCghMSwgZSk7XHJcbiAgICAgICAgICAgICAgICB0LnJlbmRlckJ0bighMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkc2hvcENvbnRleHQuZGVmYXVsdC5JbnMuc2V0Qm94VmlkZW9SZWNvcmQoITEsIGUpO1xyXG4gICAgICAgICAgICAgICAgdC5yZW5kZXJCdG4oITEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuY3JlYXRlSW5mbyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG8gPSB0W2ldO1xyXG4gICAgICAgICAgICBlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogNSxcclxuICAgICAgICAgICAgICAgIGV4dDogby5pZCxcclxuICAgICAgICAgICAgICAgIG51bTogMVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHRhc2tDb250ZXh0LmRlZmF1bHQuSW5zLnNldFRhc2tSZWNvcmQoNCwgdC5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnJlbmRlckJ0biA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0XHJcbiAgICAgICAgICAgID8gJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Cb3hDb25maWdzWzBdLnNwZW5kXHJcbiAgICAgICAgICAgIDogJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Cb3hDb25maWdzWzFdLnNwZW5kO1xyXG4gICAgICAgIHZhciBpID0gdFxyXG4gICAgICAgICAgICA/ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuZ2VtQm94Q29uZmlnc1swXS52aWRlb19udW1cclxuICAgICAgICAgICAgOiAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbUJveENvbmZpZ3NbMV0udmlkZW9fbnVtO1xyXG4gICAgICAgICh0ID8gdGhpcy5ub3JtYWxPUGVuMUJ0biA6IHRoaXMuYWR2YW5jZWRPUGVuMUJ0bikuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgKHQgPyB0aGlzLm5vcm1hbE9QZW4xMEJ0biA6IHRoaXMuYWR2YW5jZWRPUGVuMTBCdG4pLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKFxyXG4gICAgICAgICAgICAxMCAqIGVcclxuICAgICAgICApLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdmFyIG8gPSB0ID8gdGhpcy5ub3JtYWxBZEJ0biA6IHRoaXMuYWR2YW5jZWRBZEJ0bjtcclxuICAgICAgICBvLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IDEgIT09IGk7XHJcbiAgICAgICAgby5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgICAgIFwiKFwiICsgJHNob3BDb250ZXh0LmRlZmF1bHQuSW5zLmdldEJveFZpZGVvUmVjb3JkKHQpICsgXCIvXCIgKyBpICsgXCIpXCI7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUucmVuZGVyU2tpbkJ0biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuZ2VtQm94Q29uZmlnc1syXS5zcGVuZDtcclxuICAgICAgICB2YXIgZSA9ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuZ2VtQm94Q29uZmlnc1syXS52aWRlb19udW07XHJcbiAgICAgICAgdGhpcy5leGNlbGxlbnRPUGVuMUJ0bi5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHQudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmV4Y2VsbGVudE9QZW4xMEJ0bi5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICgxMCAqIHQpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLmV4Y2VsbGVudEFkQnRuO1xyXG4gICAgICAgIGkuY2hpbGRyZW5bMl0uYWN0aXZlID0gMSAhPT0gZTtcclxuICAgICAgICBpLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuICAgICAgICAgICAgXCIoXCIgKyAkc2hvcENvbnRleHQuZGVmYXVsdC5JbnMuZ2V0U2tpbkJveFZpZGVvUmVjb3JkKCkgKyBcIi9cIiArIGUgKyBcIilcIjtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5yZW5kZXJDb3VudCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0ID8gdGhpcy5ub3JtYWxDb3VudCA6IHRoaXMuYWR2YW5jZWRDb3VudDtcclxuICAgICAgICB2YXIgaSA9IHQgPyAkc2hvcENvbnRleHQuZGVmYXVsdC5JbnMuYm94UmV3YXJkUmVjb3JkLm5vcm1hbCA6ICRzaG9wQ29udGV4dC5kZWZhdWx0Lklucy5ib3hSZXdhcmRSZWNvcmQuYWR2YW5jZWQ7XHJcbiAgICAgICAgZS5zdHJpbmcgPSBpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9ncmVzcygpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnJlbmRlclNraW5Db3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmV4Y2VsbGVudENvdW50LnN0cmluZyA9ICRzaG9wQ29udGV4dC5kZWZhdWx0Lklucy5ib3hSZXdhcmRSZWNvcmQuc2tpbi50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUHJvZ3Jlc3MoKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5yZW5kZXJQcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IDEwIC0gJHNob3BDb250ZXh0LmRlZmF1bHQuSW5zLmJveFJld2FyZFJlY29yZC5ub3JtYWw7XHJcbiAgICAgICAgdmFyIGUgPSAodCAvIDEwKSAqIDIxODtcclxuICAgICAgICB0aGlzLm5vcm1hbFByb2dyZXNzTm9kZS5zZXRDb250ZW50U2l6ZShjYy5zaXplKGUsIHRoaXMubm9ybWFsUHJvZ3Jlc3NOb2RlLmhlaWdodCkpO1xyXG4gICAgICAgIGUgPSAoKHQgPSAxMCAtICRzaG9wQ29udGV4dC5kZWZhdWx0Lklucy5ib3hSZXdhcmRSZWNvcmQuYWR2YW5jZWQpIC8gMTApICogMjE4O1xyXG4gICAgICAgIHRoaXMuYWR2YW5jZWRQcm9ncmVzc05vZGUuc2V0Q29udGVudFNpemUoY2Muc2l6ZShlLCB0aGlzLmFkdmFuY2VkUHJvZ3Jlc3NOb2RlLmhlaWdodCkpO1xyXG4gICAgICAgIGUgPSAoKHQgPSAxMCAtICRzaG9wQ29udGV4dC5kZWZhdWx0Lklucy5ib3hSZXdhcmRSZWNvcmQuc2tpbikgLyAxMCkgKiAyMTg7XHJcbiAgICAgICAgdGhpcy5leGNlbGxlbnRQcm9ncmVzc05vZGUuc2V0Q29udGVudFNpemUoY2Muc2l6ZShlLCB0aGlzLmV4Y2VsbGVudFByb2dyZXNzTm9kZS5oZWlnaHQpKTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtDKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiYnRuTGF5ZXJcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW0MoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJub3JtYWxPUGVuMUJ0blwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbQyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcIm5vcm1hbE9QZW4xMEJ0blwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbQyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcIm5vcm1hbEFkQnRuXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtDKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcIm5vcm1hbENvdW50XCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtDKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwibm9ybWFsUHJvZ3Jlc3NOb2RlXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtDKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiYWR2YW5jZWRPUGVuMUJ0blwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbQyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImFkdmFuY2VkT1BlbjEwQnRuXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtDKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiYWR2YW5jZWRBZEJ0blwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbQyhjYy5MYWJlbCldLCBlLnByb3RvdHlwZSwgXCJhZHZhbmNlZENvdW50XCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtDKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiYWR2YW5jZWRQcm9ncmVzc05vZGVcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW0MoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJleGNlbGxlbnRPUGVuMUJ0blwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbQyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImV4Y2VsbGVudE9QZW4xMEJ0blwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbQyhjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImV4Y2VsbGVudEFkQnRuXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtDKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcImV4Y2VsbGVudENvdW50XCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtDKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiZXhjZWxsZW50UHJvZ3Jlc3NOb2RlXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtDKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiYm94QW5pbU5vZGVcIiwgdm9pZCAwKTtcclxuICAgIHJldHVybiBfX2RlY29yYXRlKFtTXSwgZSk7XHJcbn0pKGNjLkNvbXBvbmVudCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEk7XHJcbiJdfQ==