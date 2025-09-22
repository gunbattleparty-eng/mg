"use strict";
cc._RF.push(module, '10840jHuh5CbrL2TfkdyV64', 'OnlineListItem');
// game_script/scripts/OnlineListItem.js

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

var $onlineContext = require("./OnlineContext");

var $skillContext = require("./SkillContext");

var $userDataContext = require("./UserDataContext");

var $startView = require("./StartView");

var w = cc._decorator;
var A = w.ccclass;
var S = w.property;

var C = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.titleLaleb = null;
    e.btnGain = null;
    e.iconSp = null;
    e.countLable = null;
    e.timeLable = null;
    e.redDot = null;
    e.config = null;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.btnGain.on("click", this.clickGain, this);
  };

  e.prototype.init = function (t) {
    this.config = t;
    this.titleLaleb.string = t.name;
    this.countLable.string = t.num.toString();
    this.renderIcon();
    this.render();
    this.refresh();

    if (!($onlineContext["default"].Ins.getTime() >= this.config.time)) {
      this.schedule(this.refresh, 1);
    }
  };

  e.prototype.render = function () {
    if ($onlineContext["default"].Ins.hasGain(this.config.id)) {
      this.btnGain.active = !1;
    } else {
      {
        this.btnGain.active = !0;
        var t = $onlineContext["default"].Ins.getTime() >= this.config.time;
        $util["default"].updateMaterialState(this.btnGain, !t);
        this.btnGain.getComponent(cc.Button).interactable = t;
        this.btnGain.getComponentInChildren(cc.Label).string = t ? "领取" : "未达成";
        this.btnGain.children[1].active = 1 === this.config.receivetype && t;
      }
    }
  };

  e.prototype.renderIcon = function () {
    var t = this;
    var e = "";
    var i = "";
    1 === this.config.reward ? (e = $assetsMap.BundleNames.Public, i = "/textures/gem/zuanshi") : 2 === this.config.reward ? (e = $assetsMap.BundleNames.Public, i = "/textures/gem/jinbi") : 3 === this.config.reward ? (e = $assetsMap.BundleNames.Public_Res, i = "/skill_book/jn0") : 4 === this.config.reward ? (e = $assetsMap.BundleNames.Public_Res, i = "/equipment_icon/zb0") : 6 === this.config.reward ? (e = $assetsMap.BundleNames.Public, i = "/textures/gem/upgrade_sone") : 7 === this.config.reward && (e = $assetsMap.BundleNames.Public, i = "/textures/gem/tili");
    $assetsLoader["default"].instance.loadRes(e, [i], cc.SpriteFrame, null, function (e, i) {
      var o = i[0];

      if (o && cc.isValid(t.iconSp)) {
        t.iconSp.spriteFrame = $resUtil.ResUtil.assignWith(o, t.node);
      }
    });
  };

  e.prototype.clickGain = function () {
    var t = this;
    $remoteAudio["default"].instance.playEffectMusic("Click");
    1 !== this.config.receivetype ? this.gain() : $adService["default"].Ins.showRewardedVideo(function () {
      if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
        if (1200 === t.config.time) {
          $aD["default"].toutiao.report("Online_Rewards_1");
        }

        if (1800 === t.config.time) {
          $aD["default"].toutiao.report("Online_Rewards_2");
        }
      }

      t.gain();
    });
  };

  e.prototype.gain = function () {
    $onlineContext["default"].Ins.setRecrodGain(this.config.id);
    var t = [];

    if (1 === this.config.reward) {
      $userDataContext["default"].Ins.opearDiamond(this.config.num);
      t.push({
        type: 6,
        num: this.config.num
      });
    } else {
      if (2 === this.config.reward) {
        $userDataContext["default"].Ins.opearCoin(this.config.num);
        t.push({
          type: 1,
          num: this.config.num
        });
      } else {
        if (3 === this.config.reward) {
          var e = $skillContext["default"].Ins.getUseSkillIds();
          var i = e[$seedUtil["default"].randomFrom(0, e.length - 1)];
          t.push({
            type: 4,
            ext: i,
            num: this.config.num
          });
          $userDataContext["default"].Ins.opearSkillBook(i, this.config.num);
        } else {
          if (4 === this.config.reward) {
            var o = $seedUtil["default"].randomFrom(1, 6);
            t.push({
              type: 3,
              ext: o,
              num: this.config.num
            });
            $userDataContext["default"].Ins.opearEquipBook(o, this.config.num);
          } else {
            6 === this.config.reward ? (t.push({
              type: 7,
              num: this.config.num
            }), $userDataContext["default"].Ins.opearUpgradeStone(this.config.num)) : 7 === this.config.reward && (t.push({
              type: 8,
              num: this.config.num
            }), $userDataContext["default"].Ins.opearPower(this.config.num));
          }
        }
      }
    }

    $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.ALL);
    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
      infos: t
    });
    this.render();
    this.renderDot();
  };

  e.prototype.refresh = function () {
    this.renderDot();

    if (this.config.time <= $onlineContext["default"].Ins.getTime()) {
      this.unschedule(this.refresh);
      this.timeLable.node.active = !1;
      this.render();
    }

    var t = $util["default"].formatDate(this.config.time - $onlineContext["default"].Ins.getTime());
    this.timeLable.string = t[1] + ":" + t[2];
  };

  e.prototype.renderDot = function () {
    this.redDot.active = this.config.time <= $onlineContext["default"].Ins.getTime() && !$onlineContext["default"].Ins.hasGain(this.config.id);
  };

  __decorate([S(cc.Label)], e.prototype, "titleLaleb", void 0);

  __decorate([S(cc.Node)], e.prototype, "btnGain", void 0);

  __decorate([S(cc.Sprite)], e.prototype, "iconSp", void 0);

  __decorate([S(cc.Label)], e.prototype, "countLable", void 0);

  __decorate([S(cc.Label)], e.prototype, "timeLable", void 0);

  __decorate([S(cc.Node)], e.prototype, "redDot", void 0);

  return __decorate([A], e);
}(cc.Component);

exports["default"] = C;

cc._RF.pop();