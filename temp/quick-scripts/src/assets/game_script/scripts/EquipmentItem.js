"use strict";
cc._RF.push(module, '56dd7boZflL1b6hbmFBnqWs', 'EquipmentItem');
// game_script/scripts/EquipmentItem.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $popupManager = require("./PopupManager");

var $remoteAudio = require("./RemoteAudio");

var $configContext = require("./ConfigContext");

var $equipmentContext = require("./EquipmentContext");

var $localEventName = require("./LocalEventName");

var $gameGemInfo = require("./GameGemInfo");

var $startView = require("./StartView");

var g = cc._decorator;
var _ = g.ccclass;
var k = g.property;

var v = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.equipmentGem = null;
    e.equipmentIcon = null;
    e.equipmentLevel = null;
    e.equipmentDot = null;
    e.equipmentAnims = null;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.render();
    $eventManager["default"].on($localEventName["default"].RENDER_GEM, this.render, this);
    $eventManager["default"].on($localEventName["default"].RENDER_DOT, this.renderDot, this);
    $eventManager["default"].on($localEventName["default"].EQUIP_UPGRADE, this.upgradeAnim, this);

    for (var t = 0; t < 6; t++) {
      this.equipmentGem.children[t].on(cc.Node.EventType.TOUCH_END, this.touchItem, this);
    }
  };

  e.prototype.onDestroy = function () {
    $eventManager["default"].off($localEventName["default"].RENDER_GEM, this.render, this);
    $eventManager["default"].off($localEventName["default"].RENDER_DOT, this.renderDot, this);
    $eventManager["default"].off($localEventName["default"].EQUIP_UPGRADE, this.upgradeAnim, this);

    for (var t = 0; t < 6; t++) {
      if (cc.isValid(this.equipmentGem)) {
        this.equipmentGem.children[t].off(cc.Node.EventType.TOUCH_END, this.touchItem, this);
      }
    }
  };

  e.prototype.upgradeAnim = function (t) {
    var e = function e(_e) {
      var o = i.equipmentAnims.children[t[_e] - 1];
      var n = o.getComponent(dragonBones.ArmatureDisplay);
      o.active = !0;
      n.playAnimation("stand", 1);
      n.once(dragonBones.EventObject.COMPLETE, function () {
        o.active = !1;
      }, i);
    };

    var i = this;

    for (var o = 0; o < t.length; o++) {
      e(o);
    }
  };

  e.prototype.touchItem = function (t) {
    $remoteAudio["default"].instance.playEffectMusic("Click");
    var e = this.equipmentGem.children.indexOf(t.target);
    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.EquipmentInfoView, {
      part: e + 1
    });
  };

  e.prototype.renderDot = function (t) {
    if (t === $startView.MenuType.Role) {
      for (var e = 0; e < 6; e++) {
        this.equipmentDot.children[e].active = $equipmentContext["default"].Ins.checkPartEquipUpgrade(e + 1);
      }
    }
  };

  e.prototype.render = function () {
    var t = this;

    var e = function e(_e2) {
      var o = $equipmentContext["default"].Ins.getGrade(_e2);

      var n = i.equipmentIcon.children[_e2 - 1].getComponent(cc.Sprite);

      $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/e_" + _e2 + "_" + o, "/textures/gem/k" + o], cc.SpriteFrame, null, function (e, i) {
        if (i[0] && cc.isValid(n)) {
          n.spriteFrame = $resUtil.ResUtil.assignWith(i[1], t.node);
          n.node.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(i[0], t.node);
        }
      });
      var s = $equipmentContext["default"].Ins.equipmentMap.get(_e2);
      i.equipmentLevel.children[_e2 - 1].getComponent(cc.Label).string = "等级:" + s;

      for (var c = $equipmentContext["default"].Ins.getGemList(_e2), u = function u(t) {
        var o = i.equipmentGem.children[_e2 - 1].children[0].children[t];

        if (c[t] && 0 !== c[t]) {
          o.active = !0;
          var n = $configContext["default"].instance.gemConfigs.find(function (e) {
            return e.id === c[t];
          });
          o.color = $gameGemInfo.GameGemInfo.gemColor[n.Grade - 1];
        } else {
          o.active = !1;
        }
      }, d = 0; d < 5; d++) {
        u(d);
      }
    };

    var i = this;

    for (var o = 1; o <= 6; o++) {
      e(o);
    }
  };

  __decorate([k(cc.Node)], e.prototype, "equipmentGem", void 0);

  __decorate([k(cc.Node)], e.prototype, "equipmentIcon", void 0);

  __decorate([k(cc.Node)], e.prototype, "equipmentLevel", void 0);

  __decorate([k(cc.Node)], e.prototype, "equipmentDot", void 0);

  __decorate([k(cc.Node)], e.prototype, "equipmentAnims", void 0);

  return __decorate([_], e);
}(cc.Component);

exports["default"] = v;

cc._RF.pop();