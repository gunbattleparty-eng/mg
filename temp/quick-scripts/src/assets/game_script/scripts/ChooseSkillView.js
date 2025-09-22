"use strict";
cc._RF.push(module, 'a05746qtj9FbrLbiFZrBoke', 'ChooseSkillView');
// game_script/scripts/ChooseSkillView.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $uIManager = require("./UIManager");

var $popupView = require("./PopupView");

var $platform = require("./Platform");

var $remoteAudio = require("./RemoteAudio");

var $aD = require("./AD");

var $adService = require("./AdService");

var $configContext = require("./ConfigContext");

var $localEventName = require("./LocalEventName");

var $userDataContext = require("./UserDataContext");

var $gameContext = require("./GameContext");

var v = cc._decorator;
var b = v.ccclass;
var w = v.property;

var A = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.tempNode = null;
    e.contentLayer = null;
    e.btnAgin = null;
    e.tipLabel = null;
    e.btnRefresh = null;
    e.coinAdLable = null;
    e.chooseNode = [];
    e.isChoosed = !1;
    e.isChooseAgin = !1;
    e.count = 3;
    e.chooseCount = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    $remoteAudio["default"].instance.playEffectMusic("levelup");
    var t = this.uiParam.param.ids;
    this.createChooseItem(t);
    this.renderBtn();
    this.renderAdCoin();
  };

  e.prototype.createChooseItem = function (t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      var o = cc.instantiate(this.tempNode);
      o.skill_id = i;
      o.parent = this.contentLayer;
      o.active = !0;
      o.on("click", this.clickItem, this);
      this.chooseNode.push(o);
      this.renderItem(i, o);
    }

    this.renderAgin();
  };

  e.prototype.renderAgin = function () {
    this.isChooseAgin || $gameContext["default"].ins.aginChooseSkillCount >= this.count ? (this.btnAgin.active = !1, this.tipLabel.node.active = !1) : this.tipLabel.string = "当局剩余观看次数" + (this.count - $gameContext["default"].ins.aginChooseSkillCount) + "/" + this.count;
  };

  e.prototype.renderBtn = function () {
    var t = $userDataContext["default"].Ins.checkAdCoin(-1);
    this.btnRefresh.children[0].active = !t;
    this.btnAgin.children[0].active = !t;
    this.btnRefresh.children[1].active = t;
    this.btnAgin.children[1].active = t;
  };

  e.prototype.addEvent = function () {
    this.btnAgin.on("click", this.clickAgin, this);
    this.btnRefresh.on("click", this.clickRefresh, this);
  };

  e.prototype.removeEvent = function () {
    this.btnAgin.off("click", this.clickAgin, this);
    this.btnRefresh.off("click", this.clickRefresh, this);
  };

  e.prototype.clickRefresh = function () {
    var e = this;

    if ($userDataContext["default"].Ins.opearAdCoin(-1)) {
      var i = $gameContext["default"].ins.createNextSkills();

      if (0 === i.length) {
        $uIManager.UIManager.instance.showToast("没有技能可选了");
        return void t.prototype.onClickClose.call(this);
      }

      this.contentLayer.destroyAllChildren();
      this.createChooseItem(i);
      this.renderBtn();
      this.renderAdCoin();
    } else {
      $adService["default"].Ins.showRewardedVideo(function () {
        if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
          $aD["default"].toutiao.report("Skill_Refresh");
        }

        var i = $gameContext["default"].ins.createNextSkills();

        if (0 === i.length) {
          $uIManager.UIManager.instance.showToast("没有技能可选了");
          return void t.prototype.onClickClose.call(e);
        }

        e.contentLayer.destroyAllChildren();
        e.createChooseItem(i);
        e.renderBtn();
      });
    }
  };

  e.prototype.clickAgin = function () {
    var t = this;
    $userDataContext["default"].Ins.opearAdCoin(-1) ? ($gameContext["default"].ins.aginChooseSkillCount++, this.isChooseAgin = !0, this.renderAgin(), this.renderBtn(), this.renderAdCoin()) : $adService["default"].Ins.showRewardedVideo(function () {
      if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
        $aD["default"].toutiao.report("Skill_again");
      }

      $gameContext["default"].ins.aginChooseSkillCount++;
      t.isChooseAgin = !0;
      t.renderAgin();
      t.renderBtn();
    });
  };

  e.prototype.renderItem = function (t, e) {
    var i = this;
    var o = $configContext["default"].instance.skillConfigsMap.get(t);
    var n = e.children[0].getComponent(cc.Sprite);
    $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/skills/" + o.icon], cc.SpriteFrame, null, function (t, e) {
      var o = e[0];

      if (o && cc.isValid(n)) {
        n.spriteFrame = $resUtil.ResUtil.assignWith(o, i.node);
      }
    });
    var s = o.skill_text;

    if (o.skill_changetext.length > 0 && !$gameContext["default"].ins.chooseSkillRecord.has(o.skill_changetext[0])) {
      s = o.skill_text + o.skill_changetext[1];
    }

    e.children[1].getComponent(cc.Label).string = o.name;
    e.children[2].getComponent(cc.Label).string = s;
  };

  e.prototype.clickItem = function (e) {
    if (!this.isChoosed) {
      $remoteAudio["default"].instance.playEffectMusic("Click");
      $gameContext["default"].ins.skillInfo.skillCount++;
      this.isChoosed = !0;
      var i = e.node.skill_id;
      $eventManager["default"].send($localEventName["default"].CHOOSE_SKILL, i);

      if (this.isChooseAgin && 0 === this.chooseCount) {
        var o = $gameContext["default"].ins.createNextSkills();

        if (0 === o.length) {
          $uIManager.UIManager.instance.showToast("没有技能可选了");
          return void t.prototype.onClickClose.call(this);
        }

        this.contentLayer.destroyAllChildren();
        this.createChooseItem(o);
        this.isChoosed = !1;
        this.renderAgin();
      }

      this.chooseCount++;

      if (1 === this.chooseCount && !this.isChooseAgin || 2 === this.chooseCount) {
        t.prototype.onClickClose.call(this);
      }
    }
  };

  e.prototype.renderAdCoin = function () {
    this.coinAdLable.string = $userDataContext["default"].Ins.adCoin.toString();
  };

  __decorate([w(cc.Node)], e.prototype, "tempNode", void 0);

  __decorate([w(cc.Node)], e.prototype, "contentLayer", void 0);

  __decorate([w(cc.Node)], e.prototype, "btnAgin", void 0);

  __decorate([w(cc.Label)], e.prototype, "tipLabel", void 0);

  __decorate([w(cc.Node)], e.prototype, "btnRefresh", void 0);

  __decorate([w(cc.Label)], e.prototype, "coinAdLable", void 0);

  return __decorate([b], e);
}($popupView.PopupView);

exports["default"] = A;

cc._RF.pop();