"use strict";
cc._RF.push(module, '35a53xKNR1JmI9jiH+tR+Gh', 'ShopResLIstItem');
// game_script/scripts/ShopResLIstItem.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $popupManager = require("./PopupManager");

var $platform = require("./Platform");

var $remoteAudio = require("./RemoteAudio");

var $seedUtil = require("./SeedUtil");

var $util = require("./Util");

var $aD = require("./AD");

var $adService = require("./AdService");

var $localEventName = require("./LocalEventName");

var $roleContext = require("./RoleContext");

var $shopContext = require("./ShopContext");

var $skillContext = require("./SkillContext");

var $userDataContext = require("./UserDataContext");

var $coinDiamondView = require("./CoinDiamondView");

var $startView = require("./StartView");

var S = cc._decorator;
var C = S.ccclass;
var I = S.property;

var P = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.icon = null;
    e.titleLable = null;
    e.limitLabel = null;
    e.numLabel = null;
    e.btnBuy = null;
    e.coinLable = null;
    e.adLimitLable = null;
    e.config = null;
    e.buyType = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.btnBuy.on("click", this.clickBuy, this);
  };

  e.prototype.init = function (t) {
    var e = this;
    this.config = t;
    $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Start, ["/textures/shop/icon_" + t.type], cc.SpriteFrame, null, function (t, i) {
      var o = i[0];

      if (o && cc.isValid(e.icon)) {
        e.icon.spriteFrame = $resUtil.ResUtil.assignWith(o, e.node);
      }
    });
    this.render();
  };

  e.prototype.render = function () {
    this.titleLable.string = this.config.name;
    var t = $shopContext["default"].Ins.getShopResRecordById(this.config.id);
    this.limitLabel.string = "每日限购" + t.buyCount + "/" + this.config.buy_num;
    this.limitLabel.node.active = -1 !== this.config.buy_num;
    $util["default"].updateMaterialState(this.btnBuy, t.buyCount >= this.config.buy_num);
    this.btnBuy.getComponent(cc.Button).interactable = t.buyCount < this.config.buy_num;
    this.coinLable.string = "" + this.config.coin_num;
    this.numLabel.string = "X" + this.config.reward_num;
    this.coinLable.node.parent.children[0].active = !0;
    this.coinLable.node.parent.children[1].active = !1;
    this.adLimitLable.node.active = !1;
    this.buyType = 0;
    this.btnBuy.children[1].active = !1;
    2 === this.config.coin_type ? (this.coinLable.node.parent.children[0].active = !1, this.coinLable.string = "免费", this.btnBuy.children[1].active = !0, this.buyType = 2, t.buyCount > 0 && (this.coinLable.string = "免费", this.btnBuy.children[1].active = !1, this.buyType = 1, this.coinLable.node.parent.children[1].active = !0)) : 3 === this.config.coin_type ? (this.coinLable.string = "免费", this.coinLable.node.parent.children[0].active = !1, this.coinLable.node.parent.children[1].active = !0, this.buyType = 1, this.config.coin_num > 1 && (this.adLimitLable.node.active = !0, this.adLimitLable.string = "(" + t.video_count + "/" + this.config.coin_num + ")")) : 4 === this.config.coin_type && (this.coinLable.node.parent.children[0].active = !1, this.coinLable.string = "免费", this.buyType = 2);
  };

  e.prototype.clickBuy = function () {
    var t = this;
    $remoteAudio["default"].instance.playEffectMusic("Click");
    var e = $shopContext["default"].Ins.getShopResRecordById(this.config.id);

    if (!(0 !== this.config.buy_num && e.buyCount >= this.config.buy_num)) {
      0 !== this.buyType || $userDataContext["default"].Ins.opearDiamond(-this.config.coin_num) ? 1 !== this.buyType ? (this.buy(), $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Shop)) : $adService["default"].Ins.showRewardedVideo(function () {
        if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
          if (4 === t.config.type) {
            $aD["default"].toutiao.report("Free_Coins");
          }

          if (7 === t.config.type) {
            $aD["default"].toutiao.report("Dog_Skin");
          }

          8 === t.config.type ? $aD["default"].toutiao.report("plane_skin") : 9 === t.config.type && $aD["default"].toutiao.report("adfree");
        }

        if (3 === t.config.coin_type) {
          var e = $shopContext["default"].Ins.getShopResRecordById(t.config.id);
          e.video_count++;
          e.video_count >= t.config.coin_num ? (e.video_count = 0, t.buy()) : ($shopContext["default"].Ins.addShopResRecordVideo(e.id, e.video_count), t.render());
        } else {
          t.buy();
        }
      }) : $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
        type: $coinDiamondView.AstType.DIAMON
      });
    }
  };

  e.prototype.buy = function () {
    var t = this;

    if (10 !== this.config.type) {
      $shopContext["default"].Ins.addShopResRecord(this.config.id);
    }

    var e = [];

    if (1 === this.config.type) {
      var i = $seedUtil["default"].randomCount(1, 6, $seedUtil["default"].randomFrom(1, 4));
      var o = $seedUtil["default"].splitNumber(this.config.reward_num, i.length);
      console.log(i, o);

      for (var n = 0; n < o.length; n++) {
        var s = o[n];
        $userDataContext["default"].Ins.opearEquipBook(i[n], s);
        e.push({
          type: 3,
          ext: i[n],
          num: s
        });
      }

      $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Role);
    } else {
      if (2 === this.config.type) {
        var r = $seedUtil["default"].randomFrom(1, 4);
        var l = $skillContext["default"].Ins.getUseSkillIds();
        r = Math.min(l.length, r);
        l = $seedUtil["default"].randomArr(l, r);
        var d = $seedUtil["default"].splitNumber(this.config.reward_num, r);

        for (n = 0; n < r; n++) {
          $userDataContext["default"].Ins.opearSkillBook(l[n], d[n]);
          e.push({
            type: 4,
            ext: l[n],
            num: d[n]
          });
        }

        $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Skill);
      } else {
        if (3 === this.config.type) {
          $userDataContext["default"].Ins.opearUpgradeStone(this.config.reward_num);
          e.push({
            type: 7,
            num: this.config.reward_num
          });
          $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Role);
        } else {
          if (4 === this.config.type) {
            $userDataContext["default"].Ins.opearCoin(this.config.reward_num);
            e.push({
              type: 1,
              num: this.config.reward_num
            });
            $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.ALL);
          } else {
            if (5 === this.config.type) {
              $userDataContext["default"].Ins.opearPower(this.config.reward_num);
              e.push({
                type: 8,
                num: this.config.reward_num
              });
            } else {
              if (7 === this.config.type) {
                (p = $roleContext["default"].ins.getRobotSkinInfo(2)).shard += 1;
                $roleContext["default"].ins.setRobotSkinInfo(p);
                e.push({
                  type: 11,
                  num: this.config.reward_num,
                  ext: 2
                });
              } else {
                if (8 === this.config.type) {
                  var p;
                  (p = $roleContext["default"].ins.getRobotSkinInfo(3)).shard += 1;
                  $roleContext["default"].ins.setRobotSkinInfo(p);
                  e.push({
                    type: 11,
                    num: this.config.reward_num,
                    ext: 3
                  });
                } else {
                  if (9 === this.config.type) {
                    $userDataContext["default"].Ins.opearAdCoin(this.config.reward_num);
                    e.push({
                      type: 12,
                      num: this.config.reward_num
                    });
                  } else {
                    if (10 === this.config.type) {
                      return void $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.AdCoinView, null, {
                        closeCallback: function closeCallback() {
                          t.render();
                        }
                      });
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
      infos: e
    });
    this.render();
  };

  __decorate([I(cc.Sprite)], e.prototype, "icon", void 0);

  __decorate([I(cc.Label)], e.prototype, "titleLable", void 0);

  __decorate([I(cc.Label)], e.prototype, "limitLabel", void 0);

  __decorate([I(cc.Label)], e.prototype, "numLabel", void 0);

  __decorate([I(cc.Node)], e.prototype, "btnBuy", void 0);

  __decorate([I(cc.Label)], e.prototype, "coinLable", void 0);

  __decorate([I(cc.Label)], e.prototype, "adLimitLable", void 0);

  return __decorate([C], e);
}(cc.Component);

exports["default"] = P;

cc._RF.pop();