"use strict";
cc._RF.push(module, '56b49a9H/pMmpdSblb2Wx0/', 'SettleView');
// game_script/scripts/SettleView.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $list = require("./List");

var $popupManager = require("./PopupManager");

var $uIManager = require("./UIManager");

var $popupView = require("./PopupView");

var $platform = require("./Platform");

var $remoteAudio = require("./RemoteAudio");

var $seedUtil = require("./SeedUtil");

var $aD = require("./AD");

var $adService = require("./AdService");

var $battleContext = require("./BattleContext");

var $configContext = require("./ConfigContext");

var $globalParam = require("./GlobalParam");

var $roleContext = require("./RoleContext");

var $taskContext = require("./TaskContext");

var $userDataContext = require("./UserDataContext");

var $gameContext = require("./GameContext");

var $rankService = require("./RankService");

var $skillHurtItem = require("./SkillHurtItem");

var P = cc._decorator;
var R = P.ccclass;
var B = P.property;

var x = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.list = null;
    e.successTitle = null;
    e.failTitle = null;
    e.rewardNode = null;
    e.btnAd = null;
    e.skillIds = [];
    e.rewardInfos = [];
    e.isUpgrade = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = this;
    $gameContext["default"].ins.hurtRecord.forEach(function (e, i) {
      t.skillIds.push(i);
    });

    if (0 !== this.skillIds.length) {
      this.list.numItems = this.skillIds.length;
    }
  };

  e.prototype.onResetView = function () {
    var t;
    var e = this.uiParam.param.isSuccess;
    this.successTitle.active = e;
    this.failTitle.active = !e;
    var i = 0;
    var o = 0;
    var n = 0;
    var s = 0;
    var r = 0;

    if (null === (t = this.uiParam.param) || void 0 === t ? void 0 : t.isPause) {
      r = 1;
    }

    if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
      var a = $gameContext["default"].ins.hpProccess();

      if (!e) {
        a = 0;
      }

      n = e ? 0 : 1;
      s = a >= 1 ? 1 : 0;
      i = a < 0.5 && a > 0 ? 1 : 0;
      o = a >= 0.5 && a < 1 ? 1 : 0;
      $aD["default"].toutiao.report("Challenge", {
        level: $battleContext["default"].Ins.currLevel,
        lessthan50: i,
        morethan50: o,
        fall: n,
        pass: s,
        pause: r
      });
    }

    if (e) {
      $remoteAudio["default"].instance.playEffectMusic("win");
      var l = $battleContext["default"].Ins.getLastRecord();

      if ($gameContext["default"].ins.hpProccess() >= 1) {
        $taskContext["default"].Ins.setTaskRecord(8, 1);
      }

      $battleContext["default"].Ins.setRecord($battleContext["default"].Ins.currLevel, $gameContext["default"].ins.hpProccess(), Math.floor($gameContext["default"].ins.gameStartTime));

      if (l.level < $battleContext["default"].Ins.currLevel) {
        $battleContext["default"].Ins.currLevel++;
        $battleContext["default"].Ins.currLevel = Math.min($globalParam["default"].countLevel, $battleContext["default"].Ins.currLevel);
        $rankService["default"].instance.reportRankData($rankService.RankTypeEnum.Level);
      }
    } else {
      $remoteAudio["default"].instance.playEffectMusic("fail");
      var c = $battleContext["default"].Ins.getRecord($battleContext["default"].Ins.currLevel);

      if (-1 === c.resBlood && c.time < Math.floor($gameContext["default"].ins.gameStartTime)) {
        $battleContext["default"].Ins.setRecord($battleContext["default"].Ins.currLevel, -1, Math.floor($gameContext["default"].ins.gameStartTime));
      }
    }

    this.rewardInfos = $gameContext["default"].ins.settleReward(e);
    this.renderReward();
  };

  e.prototype.addEvent = function () {
    this.btnAd.on("click", this.clickAd, this);
  };

  e.prototype.removeEvent = function () {
    this.btnAd.off("click", this.clickAd, this);
  };

  e.prototype.renderReward = function () {
    var t = this;
    this.rewardNode.children.forEach(function (t) {
      return t.active = !1;
    });

    var e = function e(_e) {
      var o = i.rewardNode.children[_e];
      o.active = !0;
      var n = i.rewardInfos[_e];

      if (1 === n.type) {
        $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/jinbi"], cc.SpriteFrame, null, function (e, i) {
          var s = i[0];

          if (s && cc.isValid(o)) {
            o.children[0].getComponent(cc.Sprite).spriteFrame = null;
            o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
            o.children[2].getComponent(cc.Label).string = n.num.toString();
          }
        });
        $userDataContext["default"].Ins.opearCoin(n.num);
      } else {
        if (2 === n.type) {
          $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/exp"], cc.SpriteFrame, null, function (e, i) {
            var s = i[0];

            if (s && cc.isValid(o)) {
              o.children[0].getComponent(cc.Sprite).spriteFrame = null;
              o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
              o.children[2].getComponent(cc.Label).string = n.num.toString();
            }
          });
          $userDataContext["default"].Ins.addExp(n.num) && (i.isUpgrade = !0);
        } else {
          if (3 === n.type) {
            $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/equipment_icon/zb" + n.ext], cc.SpriteFrame, null, function (e, i) {
              var s = i[0];

              if (s && cc.isValid(o)) {
                o.children[0].getComponent(cc.Sprite).spriteFrame = null;
                o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                o.children[2].getComponent(cc.Label).string = n.num.toString();
              }
            });
            $userDataContext["default"].Ins.opearEquipBook(n.ext, n.num);
          } else {
            if (4 === n.type) {
              var s = $configContext["default"].instance.skillConfigs.find(function (t) {
                return t.id === n.ext;
              });
              $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/skill_book/" + s.icon], cc.SpriteFrame, null, function (e, i) {
                var s = i[0];

                if (s && cc.isValid(o)) {
                  o.children[0].getComponent(cc.Sprite).spriteFrame = null;
                  o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                  o.children[2].getComponent(cc.Label).string = n.num.toString();
                }
              });
              $userDataContext["default"].Ins.opearSkillBook(n.ext, n.num);
            } else {
              if (5 === n.type) {
                var c = $configContext["default"].instance.gemConfigs.find(function (t) {
                  return t.id === n.ext;
                });
                $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/g" + c.part + "_" + c.Grade, "/textures/gem/k" + c.Grade], cc.SpriteFrame, null, function (e, i) {
                  var s = i[0];

                  if (s && cc.isValid(o)) {
                    o.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(i[1], t.node);
                    o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                    o.children[2].getComponent(cc.Label).string = n.num.toString();
                  }
                });
                $roleContext["default"].ins.addPackItem(c, n.num);
              } else {
                if (9 === n.type) {
                  $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/role_shard/sp" + n.ext], cc.SpriteFrame, null, function (e, i) {
                    var s = i[0];

                    if (s && cc.isValid(o)) {
                      o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                      o.children[2].getComponent(cc.Label).string = n.num.toString();
                    }
                  });
                  var u = $roleContext["default"].ins.getPlayerSkinInfo(2);
                  u.shard += 1;
                  $roleContext["default"].ins.setPlayerSKinInfo(u);
                }
              }
            }
          }
        }
      }
    };

    var i = this;

    for (var o = 0; o < this.rewardInfos.length; o++) {
      e(o);
    }
  };

  e.prototype.onClickClose = function () {
    $uIManager.UIManager.instance.replaceView($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.StartView, {
      isUpgrade: this.isUpgrade
    });
  };

  e.prototype.clickAd = function () {
    var t = this;
    $adService["default"].Ins.showRewardedVideo(function () {
      if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
        $aD["default"].toutiao.report("Ending_double");
      }

      t.btnAd.active = !1;
      var e = $seedUtil["default"].randomFrom(2, 3);
      var i = -1;

      var o = function o(_o) {
        t.rewardInfos[_o].num *= e;
        var n = t.rewardInfos[_o];

        if (9 === n.type) {
          i = _o;
        } else {
          if (1 === t.rewardInfos[_o].type) {
            $userDataContext["default"].Ins.opearCoin(t.rewardInfos[_o].num);
          } else {
            if (2 === t.rewardInfos[_o].type) {
              if ($userDataContext["default"].Ins.addExp(n.num)) {
                t.isUpgrade = !0;
              }
            } else {
              if (3 === t.rewardInfos[_o].type) {
                $userDataContext["default"].Ins.opearEquipBook(n.ext, n.num);
              } else {
                if (4 === t.rewardInfos[_o].type) {
                  $userDataContext["default"].Ins.opearSkillBook(n.ext, n.num);
                } else {
                  if (5 === t.rewardInfos[_o].type) {
                    var s = $configContext["default"].instance.gemConfigs.find(function (t) {
                      return t.id === n.ext;
                    });
                    $roleContext["default"].ins.addPackItem(s, n.num);
                  }
                }
              }
            }
          }
        }
      };

      for (var n = 0; n < t.rewardInfos.length; n++) {
        o(n);
      }

      if (-1 !== i) {
        t.rewardInfos.splice(i, 1);
      }

      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
        infos: t.rewardInfos
      });
    });
  };

  e.prototype.renderItem = function (t, e) {
    var i = this.skillIds[e];
    var o = $gameContext["default"].ins.gameStartTime - $gameContext["default"].ins.skillInfo.chooseParentTime.get(i);
    var n = {
      icon: 1 === i ? "jn1_1" : $configContext["default"].instance.skillConfigsMap.get(i).icon,
      skillCount: $gameContext["default"].ins.skillInfo.getChooseParendCount(i),
      skillName: $configContext["default"].instance.basicSkillConfigs.find(function (t) {
        return t.skillmaster_id === i;
      }).name,
      skillHurt: $gameContext["default"].ins.hurtRecord.get(i),
      skillHurtSec: Math.floor($gameContext["default"].ins.hurtRecord.get(i) / o)
    };
    t.getComponent($skillHurtItem["default"]).render(n);
  };

  __decorate([B($list["default"])], e.prototype, "list", void 0);

  __decorate([B(cc.Node)], e.prototype, "successTitle", void 0);

  __decorate([B(cc.Node)], e.prototype, "failTitle", void 0);

  __decorate([B(cc.Node)], e.prototype, "rewardNode", void 0);

  __decorate([B(cc.Node)], e.prototype, "btnAd", void 0);

  return __decorate([R], e);
}($popupView.PopupView);

exports["default"] = x;

cc._RF.pop();