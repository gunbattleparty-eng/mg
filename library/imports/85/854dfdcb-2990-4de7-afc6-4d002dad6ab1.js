"use strict";
cc._RF.push(module, '854df3LKZBN56/GTQAtrWqx', 'WeeklyPassItem');
// game_script/scripts/WeeklyPassItem.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $popupManager = require("./PopupManager");

var $platform = require("./Platform");

var $seedUtil = require("./SeedUtil");

var $util = require("./Util");

var $aD = require("./AD");

var $adService = require("./AdService");

var $configContext = require("./ConfigContext");

var $roleContext = require("./RoleContext");

var $skillContext = require("./SkillContext");

var $userDataContext = require("./UserDataContext");

var $weekCardService = require("./WeekCardService");

var v = cc._decorator;
var b = v.ccclass;
var w = v.property;

var A = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.tipLabel = null;
    e.items = [];
    e.btnGain = null;
    e.config = null;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.btnGain.on("click", this.clickAd, this);
  };

  e.prototype.render = function (t) {
    this.config = t;
    this.tipLabel.string = t.tips;

    for (var e = 0; e < this.config.rewardtpye.length; e++) {
      this.renderIcon(this.items[e], this.config.rewardtpye[e], this.config.num[e]);
    }

    this.refreshBtn();
  };

  e.prototype.refreshBtn = function () {
    var t = !1;
    var e = $weekCardService["default"].Ins.weekCardInfo.day;

    if ($weekCardService["default"].Ins.isSign()) {
      e -= 1;
    }

    this.config.id < e || $weekCardService["default"].Ins.isSign() && this.config.id === e ? (this.btnGain.getComponentInChildren(cc.Label).string = "已领取", $util["default"].updateMaterialState(this.btnGain, !0), this.btnGain.getComponent(cc.Button).interactable = !1) : this.config.id === e ? (t = !0, this.btnGain.getComponentInChildren(cc.Label).string = "领取", $util["default"].updateMaterialState(this.btnGain, !1), this.btnGain.getComponent(cc.Button).interactable = !0) : this.config.id > e && (this.btnGain.getComponentInChildren(cc.Label).string = "暂不可领", $util["default"].updateMaterialState(this.btnGain, !0), this.btnGain.getComponent(cc.Button).interactable = !1);
    this.btnGain.children[1].active = t && 1 === this.config.gittype;
  };

  e.prototype.clickAd = function () {
    var t = this;
    0 === this.config.gittype ? this.gain() : $adService["default"].Ins.showRewardedVideo(function () {
      t.gain();
    });
  };

  e.prototype.gain = function () {
    var t = this;

    if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
      $aD["default"].toutiao.report("days_7", {
        day: this.config.id,
        type: this.config.gittype
      });
    }

    var e = [];

    for (var i = 0; i < this.config.rewardtpye.length; i++) {
      var o = this.config.rewardtpye[i];
      var n = this.config.num[i];

      if (1 === o) {
        var s = $seedUtil["default"].randomFrom(1, 2);
        s = Math.min(s, n);
        var r = $seedUtil["default"].randomCount(1, 6, s);
        var l = $seedUtil["default"].splitNumber(n, s);

        for (var p = 0; p < s; p++) {
          e.push({
            type: 3,
            ext: r[p],
            num: l[p]
          });
          $userDataContext["default"].Ins.opearEquipBook(r[p], l[p]);
        }
      } else {
        if (2 === o) {
          var h = $seedUtil["default"].randomFrom(1, 4);
          var v = $skillContext["default"].Ins.getUseSkillIds();
          h = Math.min(v.length, h);
          v = $seedUtil["default"].randomArr(v, h);
          var b = $seedUtil["default"].splitNumber(n, h);

          for (var w = 0; w < h; w++) {
            e.push({
              type: 4,
              ext: v[w],
              num: b[w]
            });
            $userDataContext["default"].Ins.opearSkillBook(v[w], b[w]);
          }
        } else {
          if (3 === o) {
            e.push({
              type: 7,
              ext: 0,
              num: n
            });
            $userDataContext["default"].Ins.opearUpgradeStone(n);
          } else {
            if (4 === o) {
              e.push({
                type: 1,
                ext: 0,
                num: n
              });
              $userDataContext["default"].Ins.opearCoin(n);
            } else {
              if (5 === o) {
                e.push({
                  type: 8,
                  ext: 0,
                  num: n
                });
                $userDataContext["default"].Ins.opearPower(n);
              } else {
                if (6 === o) {
                  e.push({
                    type: 9,
                    ext: this.config.ext,
                    num: n
                  });
                  (A = $roleContext["default"].ins.getPlayerSkinInfo(this.config.ext)).shard += n;
                  $roleContext["default"].ins.setPlayerSKinInfo(A);
                } else {
                  if (7 === o) {
                    e.push({
                      type: 11,
                      ext: this.config.ext,
                      num: n
                    });
                    (A = $roleContext["default"].ins.getRobotSkinInfo(this.config.ext)).shard += n;
                    $roleContext["default"].ins.setRobotSkinInfo(A);
                  } else {
                    if (8 === o) {
                      var A;
                      e.push({
                        type: 10,
                        ext: this.config.ext,
                        num: n
                      });
                      (A = $roleContext["default"].ins.getGunSkinInfo(this.config.ext)).shard += n;
                      $roleContext["default"].ins.setGunSkinInfo(A);
                    } else {
                      if (9 === o) {
                        e.push({
                          type: 12,
                          ext: 0,
                          num: n
                        });
                        $userDataContext["default"].Ins.opearAdCoin(n);
                      } else {
                        if (10 === o) {
                          var S = $configContext["default"].instance.gemConfigs.filter(function (e) {
                            return e.Grade === t.config.ext;
                          });
                          var C = S[$seedUtil["default"].randomFrom(0, S.length - 1)];
                          $roleContext["default"].ins.addPackItem(C, n);
                          e.push({
                            type: 5,
                            ext: C.id,
                            num: n
                          });
                        } else {
                          if (11 === o) {
                            $userDataContext["default"].Ins.opearDiamond(n);
                            e.push({
                              type: 6,
                              ext: 0,
                              num: n
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
        }
      }
    }

    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
      infos: e
    });
    $weekCardService["default"].Ins.sign();
    this.refreshBtn();
  };

  e.prototype.renderIcon = function (t, e, i) {
    var o = this;
    t.children[1].getComponent(cc.Label).string = i.toString();
    1 === e ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/equipment_icon/zb0"], cc.SpriteFrame, null, function (e, i) {
      var n = i[0];

      if (n && cc.isValid(t)) {
        t.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(n, o.node);
      }
    }) : 2 === e ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/skill_book/jn0"], cc.SpriteFrame, null, function (e, i) {
      var n = i[0];

      if (n && cc.isValid(t)) {
        t.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(n, o.node);
      }
    }) : 3 === e ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/upgrade_sone"], cc.SpriteFrame, null, function (e, i) {
      var n = i[0];

      if (n && cc.isValid(t)) {
        t.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(n, o.node);
      }
    }) : 4 === e ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/jinbi"], cc.SpriteFrame, null, function (e, i) {
      var n = i[0];

      if (n && cc.isValid(t)) {
        t.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(n, o.node);
      }
    }) : 5 === e ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/tili"], cc.SpriteFrame, null, function (e, i) {
      var n = i[0];

      if (n && cc.isValid(t)) {
        t.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(n, o.node);
      }
    }) : 6 === e ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/role_shard/sp1"], cc.SpriteFrame, null, function (e, i) {
      var n = i[0];

      if (n && cc.isValid(t)) {
        t.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(n, o.node);
      }
    }) : 7 === e ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/robot_shard/sp1"], cc.SpriteFrame, null, function (e, i) {
      var n = i[0];

      if (n && cc.isValid(t)) {
        t.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(n, o.node);
      }
    }) : 8 === e ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/gun_shard/sp1"], cc.SpriteFrame, null, function (e, i) {
      var n = i[0];

      if (n && cc.isValid(t)) {
        t.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(n, o.node);
      }
    }) : 9 === e ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/quan"], cc.SpriteFrame, null, function (e, i) {
      var n = i[0];

      if (n && cc.isValid(t)) {
        t.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(n, o.node);
      }
    }) : 10 === e ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/wenhao2"], cc.SpriteFrame, null, function (e, i) {
      var n = i[0];

      if (n && cc.isValid(t)) {
        t.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(n, o.node);
      }
    }) : 11 === e && $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/zuanshi"], cc.SpriteFrame, null, function (e, i) {
      var n = i[0];

      if (n && cc.isValid(t)) {
        t.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(n, o.node);
      }
    });
  };

  __decorate([w(cc.Label)], e.prototype, "tipLabel", void 0);

  __decorate([w([cc.Node])], e.prototype, "items", void 0);

  __decorate([w(cc.Node)], e.prototype, "btnGain", void 0);

  return __decorate([b], e);
}(cc.Component);

exports["default"] = A;

cc._RF.pop();