"use strict";
cc._RF.push(module, '32825PjkmVG/54PnF3A7VWE', 'RewardView');
// game_script/scripts/RewardView.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $popupView = require("./PopupView");

var $remoteAudio = require("./RemoteAudio");

var $configContext = require("./ConfigContext");

var p = cc._decorator;
var f = p.ccclass;
var h = p.property;

var m = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.itemNode = null;
    e.anim = null;
    e.itemContent = null;
    e.rewardInfos = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    $remoteAudio["default"].instance.playEffectMusic("reward");
    this.rewardInfos = this.uiParam.param.infos;
    this.renderReward();
    this.anim.playAnimation("kai", 1);
    cc.tween(this.itemContent).to(0.71, {
      opacity: 255
    }).start();
  };

  e.prototype.renderReward = function () {
    var t = this;

    var e = function e(_e) {
      var o = cc.instantiate(i.itemNode);
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
              } else {
                6 === n.type ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/zuanshi"], cc.SpriteFrame, null, function (e, i) {
                  var s = i[0];

                  if (s && cc.isValid(o)) {
                    o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                    o.children[2].getComponent(cc.Label).string = n.num.toString();
                  }
                }) : 7 === n.type ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/upgrade_sone"], cc.SpriteFrame, null, function (e, i) {
                  var s = i[0];

                  if (s && cc.isValid(o)) {
                    o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                    o.children[2].getComponent(cc.Label).string = n.num.toString();
                  }
                }) : 8 === n.type ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/tili"], cc.SpriteFrame, null, function (e, i) {
                  var s = i[0];

                  if (s && cc.isValid(o)) {
                    o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                    o.children[2].getComponent(cc.Label).string = n.num.toString();
                  }
                }) : 9 === n.type ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/role_shard/sp" + n.ext], cc.SpriteFrame, null, function (e, i) {
                  var s = i[0];

                  if (s && cc.isValid(o)) {
                    o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                    o.children[2].getComponent(cc.Label).string = n.num.toString();
                  }
                }) : 10 === n.type ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/gun_shard/sp" + n.ext], cc.SpriteFrame, null, function (e, i) {
                  var s = i[0];

                  if (s && cc.isValid(o)) {
                    o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                    o.children[1].setContentSize(cc.size(80, 80));
                    o.children[2].getComponent(cc.Label).string = n.num.toString();
                  }
                }) : 11 === n.type ? $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/robot_shard/sp" + n.ext], cc.SpriteFrame, null, function (e, i) {
                  var s = i[0];

                  if (s && cc.isValid(o)) {
                    o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                    o.children[2].getComponent(cc.Label).string = n.num.toString();
                  }
                }) : 12 === n.type && $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/quan"], cc.SpriteFrame, null, function (e, i) {
                  var s = i[0];

                  if (s && cc.isValid(o)) {
                    o.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                    o.children[2].getComponent(cc.Label).string = n.num.toString();
                  }
                });
              }
            }
          }
        }
      }

      i.itemContent.addChild(o);
    };

    var i = this;

    for (var o = 0; o < this.rewardInfos.length; o++) {
      e(o);
    }
  };

  __decorate([h(cc.Node)], e.prototype, "itemNode", void 0);

  __decorate([h(dragonBones.ArmatureDisplay)], e.prototype, "anim", void 0);

  __decorate([h(cc.Node)], e.prototype, "itemContent", void 0);

  return __decorate([f], e);
}($popupView.PopupView);

exports["default"] = m;

cc._RF.pop();