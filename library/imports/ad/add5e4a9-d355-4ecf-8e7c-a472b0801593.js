"use strict";
cc._RF.push(module, 'add5eSp01VOz458pHKwgBWT', 'GemListItem');
// game_script/scripts/GemListItem.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $listItem = require("./ListItem");

var $popupManager = require("./PopupManager");

var $configContext = require("./ConfigContext");

var $equipmentContext = require("./EquipmentContext");

var $globalParam = require("./GlobalParam");

var h = cc._decorator;
var m = h.ccclass;
var y = h.property;

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.gemIcon = null;
    e.partIcon = null;
    e.countLable = null;
    e.maskNode = null;
    e.lockNode = null;
    e.id = -1;
    return e;
  }

  __extends(e, t);

  e.prototype.render = function (t) {
    var e = this;

    if (this.id !== t.id) {
      $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/g" + t.part + "_" + t.grade, "/textures/gem/zb" + t.part, "/textures/gem/k" + t.grade], cc.SpriteFrame, null, function (t, i) {
        var o = i[0];

        if (o && cc.isValid(e.gemIcon)) {
          e.gemIcon.spriteFrame = $resUtil.ResUtil.assignWith(o, e.node);
          e.partIcon.spriteFrame = $resUtil.ResUtil.assignWith(i[1], e.node);
          e.node.children[1].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(i[2], e.node);
        }
      });
    }

    this.id = t.id;
    this.countLable.string = t.num.toString();
    var i = $configContext["default"].instance.gemConfigs.find(function (e) {
      return e.id === t.id;
    });
    this.maskNode.active = $equipmentContext["default"].Ins.hasGemTypeByPart(t.part, i.SkillPool);
    this.lockNode.active = t.isLock;
  };

  e.prototype.start = function () {
    this.node.on(cc.Node.EventType.TOUCH_END, this.touchItem, this);
  };

  e.prototype.touchItem = function () {
    if (this.id !== $globalParam["default"].currGemIdInfo) {
      $globalParam["default"].currGemIdInfo = this.id;
      $popupManager.PopupManager.instance.closeAll();
      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.GemInfoView, {
        gemId: this.id
      });
    }
  };

  __decorate([y(cc.Sprite)], e.prototype, "gemIcon", void 0);

  __decorate([y(cc.Sprite)], e.prototype, "partIcon", void 0);

  __decorate([y(cc.Label)], e.prototype, "countLable", void 0);

  __decorate([y(cc.Node)], e.prototype, "maskNode", void 0);

  __decorate([y(cc.Node)], e.prototype, "lockNode", void 0);

  return __decorate([m], e);
}($listItem["default"]);

exports["default"] = g;

cc._RF.pop();