"use strict";
cc._RF.push(module, '8aa5dIh83xGi71dhUZirQA5', 'SettingView');
// game_script/scripts/SettingView.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $popupManager = require("./PopupManager");

var $uIManager = require("./UIManager");

var $popupView = require("./PopupView");

var $audioPlayer = require("./AudioPlayer");

var $platform = require("./Platform");

var $remoteAudio = require("./RemoteAudio");

var $seedUtil = require("./SeedUtil");

var $battleContext = require("./BattleContext");

var $configContext = require("./ConfigContext");

var $equipmentContext = require("./EquipmentContext");

var $localEventName = require("./LocalEventName");

var $roleContext = require("./RoleContext");

var $skillContext = require("./SkillContext");

var $userDataContext = require("./UserDataContext");

var $gameGemInfo = require("./GameGemInfo");

var C = cc._decorator;
var I = C.ccclass;
var P = C.property;

var R = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.headLayer = null;
    e.gradeLayer = null;
    e.roleLayer = null;
    e.musicBtn = null;
    e.btnEffect = null;
    e.editBox = null;
    e.btnExchange = null;
    e.effectSlider = null;
    e.musicSlider = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    var t = this;

    var e = function e(_e) {
      var o = i.headLayer.children[_e].getComponent(cc.Sprite);

      $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/head_icon/tx" + (_e + 1)], cc.SpriteFrame, null, function (e, i) {
        var n = i[0];

        if (n && cc.isValid(o)) {
          o.spriteFrame = $resUtil.ResUtil.assignWith(n, t.node);
        }
      });
    };

    var i = this;

    for (var o = 0; o < 4; o++) {
      e(o);
    }

    this.renderTx();
    var n = 150 + 35 * ($userDataContext["default"].Ins.gradeInfo.grade - 1);
    this.gradeLayer.children[0].getComponent(cc.Label).string = $userDataContext["default"].Ins.gradeInfo.grade.toString();
    this.gradeLayer.children[1].getComponent(cc.Sprite).fillRange = $userDataContext["default"].Ins.gradeInfo.exp / n;
    this.gradeLayer.children[2].getComponent(cc.Label).string = $userDataContext["default"].Ins.gradeInfo.exp + "/" + n;
    this.renderAtk();
    var s = $battleContext["default"].Ins.getLastRecord();
    var c = this.roleLayer.children[1].getComponent(cc.Label);
    0 === s.level ? c.string = "-" : c.string = "第" + s.level + "关";
    this.render(1);
    this.render(2);
  };

  e.prototype.render = function (t) {
    var e = 1 === t ? this.musicBtn : this.btnEffect;
    var i = 1 === t ? this.musicSlider : this.effectSlider;
    var o = $userDataContext["default"].Ins.getMedias(t);
    e.children[0].active = !o;
    var n = $userDataContext["default"].Ins.getMediaVol(t);

    if (!o) {
      n = 0;
    }

    i.progress = n;
    i.node.children[1].width = i.node.width * n;
    1 === t ? $audioPlayer["default"].setMusicVolume(n) : $audioPlayer["default"].setEffectVolume(n);
  };

  e.prototype.renderAtk = function () {
    var t = this.roleLayer.children[0].getComponent(cc.Label);
    var e = 0;

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.Attack)) {
      e = $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.Attack);
    }

    e += $equipmentContext["default"].Ins.getEquipmentAtk() + $equipmentContext["default"].Ins.getAtk();
    t.string = "" + e;
  };

  e.prototype.renderTx = function () {
    this.headLayer.children[4].position = this.headLayer.children[$userDataContext["default"].Ins.headIndex].position.clone();
  };

  e.prototype.addEvent = function () {
    for (var t = 0; t < 4; t++) {
      this.headLayer.children[t].on(cc.Node.EventType.TOUCH_START, this.touchItem, this);
    }

    this.musicBtn.on("click", this.clickMusic, this);
    this.btnEffect.on("click", this.clickEffect, this);
    this.btnExchange.on("click", this.clickExchange, this);
  };

  e.prototype.removeEvent = function () {
    for (var t = 0; t < 4; t++) {
      this.headLayer.children[t].off(cc.Node.EventType.TOUCH_START, this.touchItem, this);
    }

    this.musicBtn.off("click", this.clickMusic, this);
    this.btnEffect.off("click", this.clickEffect, this);
    this.btnExchange.off("click", this.clickExchange, this);
  };

  e.prototype.touchItem = function (t) {
    var e = this.headLayer.children.indexOf(t.target);

    if (e !== $userDataContext["default"].Ins.headIndex) {
      $remoteAudio["default"].instance.playEffectMusic("Click");
      $userDataContext["default"].Ins.setHeadIndex(e);
      this.renderTx();
      $eventManager["default"].send($localEventName["default"].RENDER_HEAD);
    }
  };

  e.prototype.clickMusic = function () {
    var t = $userDataContext["default"].Ins.getMedias(1);
    var e = $userDataContext["default"].Ins.getMediaVol(1);
    t = !t;
    $userDataContext["default"].Ins.setMedias(1, t);
    t ? (0 === e && (e = 1, $userDataContext["default"].Ins.setMediaVol(1, 1)), $audioPlayer["default"].setMusicVolume(e)) : $audioPlayer["default"].setMusicVolume(0);
    this.render(1);
  };

  e.prototype.clickEffect = function () {
    var t = $userDataContext["default"].Ins.getMedias(2);
    var e = $userDataContext["default"].Ins.getMediaVol(2);
    t = !t;
    $userDataContext["default"].Ins.setMedias(2, t);
    t ? (0 === e && (e = 1, $userDataContext["default"].Ins.setMediaVol(2, 1)), $audioPlayer["default"].setEffectVolume(e)) : $audioPlayer["default"].setEffectVolume(0);
    this.render(2);
  };

  e.prototype.sliderEffect = function (t) {
    this.caculate(2, t.progress);
    this.render(2);
  };

  e.prototype.sliderMusic = function (t) {
    this.caculate(1, t.progress);
    this.render(1);
  };

  e.prototype.caculate = function (t, e) {
    e <= 0 ? $userDataContext["default"].Ins.setMediaAndVolCache(t, e, !1) : $userDataContext["default"].Ins.setMediaAndVolCache(t, e, !0);
  };

  e.prototype.onClickClose = function () {
    t.prototype.onClickClose.call(this);
    $userDataContext["default"].Ins.setMediaVol(2, $userDataContext["default"].Ins.getMediaVol(2));
    $userDataContext["default"].Ins.setMedias(2, $userDataContext["default"].Ins.getMedias(2));
    $userDataContext["default"].Ins.setMediaVol(1, $userDataContext["default"].Ins.getMediaVol(1));
    $userDataContext["default"].Ins.setMedias(1, $userDataContext["default"].Ins.getMedias(1));
  };

  e.prototype.clickExchange = function () {
    var t = this.editBox.string;

    if ("输入兑换码" !== t && 0 !== t.length) {
      var e = $configContext["default"].instance.exchangeConfigs.find(function (e) {
        return e.name === t;
      });

      if (!e || !e.channel.includes($platform.Platform.currPlatForm)) {
        this.editBox.string = "";
        return $uIManager.UIManager.instance.showToast("兑换码不存在");
      }

      $userDataContext["default"].Ins.addExchange(e.id) ? (this.editBox.string = "", this.reward(e)) : (this.editBox.string = "", $uIManager.UIManager.instance.showToast("兑换码已使用过"));
    }
  };

  e.prototype.reward = function (t) {
    var e = [];

    for (var i = 0; i < t.tipsimg.length; i++) {
      var o = t.tipsimg[i];

      if (1 === o) {
        $userDataContext["default"].Ins.opearCoin(t.num[i]);
        e.push({
          type: 1,
          num: t.num[i]
        });
      } else {
        if (2 === o) {
          $userDataContext["default"].Ins.addExp(t.num[i]);
          e.push({
            type: 2,
            num: t.num[i]
          });
        } else {
          if (3 === o) {
            var n = $seedUtil["default"].randomFrom(1, 6);
            n = Math.min(n, t.num[i]);
            var s = $seedUtil["default"].randomCount(1, 6, n);
            var r = $seedUtil["default"].splitNumber(t.num[i], n);

            for (var l = 0; l < n; l++) {
              e.push({
                type: 3,
                ext: s[l],
                num: r[l]
              });
              $userDataContext["default"].Ins.opearEquipBook(s[l], r[l]);
            }
          } else {
            if (4 === o) {
              var c = $seedUtil["default"].randomFrom(1, 4);
              var d = $skillContext["default"].Ins.getUseSkillIds();
              c = Math.min(d.length, c);
              d = $seedUtil["default"].randomArr(d, c);
              var p = $seedUtil["default"].splitNumber(t.num[i], c);

              for (var f = 0; f < c; f++) {
                e.push({
                  type: 4,
                  ext: d[f],
                  num: p[f]
                });
                $userDataContext["default"].Ins.opearSkillBook(d[f], p[f]);
              }
            } else {
              if (5 === o) {
                var h = this.getGem(t.num[i]);

                for (var m = 0; m < h.length; m++) {
                  e.push({
                    type: 5,
                    ext: h[m].id,
                    num: 1
                  });
                  $roleContext["default"].ins.addPackItem(h[m], 1);
                }
              } else {
                6 === o ? ($userDataContext["default"].Ins.opearDiamond(t.num[i]), e.push({
                  type: 6,
                  num: t.num[i]
                })) : 7 === o ? ($userDataContext["default"].Ins.opearAdCoin(t.num[i]), e.push({
                  type: 12,
                  num: t.num[i]
                })) : 8 === o && ($userDataContext["default"].Ins.opearUpgradeStone(t.num[i]), e.push({
                  type: 7,
                  num: t.num[i]
                }));
              }
            }
          }
        }
      }

      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
        infos: e
      });
    }
  };

  e.prototype.getGem = function (t) {
    var e = $configContext["default"].instance.gemBoxConfigs[0];
    var i = $seedUtil["default"].weightRandomCount(e.weight, t, !0);
    var o = [];

    var n = function n(t) {
      var e = i[t] + 1;
      var n = $configContext["default"].instance.gemConfigs.filter(function (t) {
        return t.Grade === e;
      });
      o[t] = n[$seedUtil["default"].randomFrom(0, n.length - 1)];
    };

    for (var s = 0; s < i.length; s++) {
      n(s);
    }

    return o;
  };

  __decorate([P(cc.Node)], e.prototype, "headLayer", void 0);

  __decorate([P(cc.Node)], e.prototype, "gradeLayer", void 0);

  __decorate([P(cc.Node)], e.prototype, "roleLayer", void 0);

  __decorate([P(cc.Node)], e.prototype, "musicBtn", void 0);

  __decorate([P(cc.Node)], e.prototype, "btnEffect", void 0);

  __decorate([P(cc.EditBox)], e.prototype, "editBox", void 0);

  __decorate([P(cc.Node)], e.prototype, "btnExchange", void 0);

  __decorate([P(cc.Slider)], e.prototype, "effectSlider", void 0);

  __decorate([P(cc.Slider)], e.prototype, "musicSlider", void 0);

  return __decorate([I], e);
}($popupView.PopupView);

exports["default"] = R;

cc._RF.pop();