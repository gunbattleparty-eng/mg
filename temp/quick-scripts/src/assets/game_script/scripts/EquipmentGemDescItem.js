"use strict";
cc._RF.push(module, '6e405l4bAxGW5LE3ItK8fdW', 'EquipmentGemDescItem');
// game_script/scripts/EquipmentGemDescItem.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $equipmentContext = require("./EquipmentContext");

var $localEventName = require("./LocalEventName");

var $gameGemInfo = require("./GameGemInfo");

var f = cc._decorator;
var h = f.ccclass;
var m = f.property;

var y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.gemIconSp = null;
    e.gemName = null;
    e.gemDesc = null;
    e.btnUnload = null;
    e.names = ["普通", "精良", "稀有", "史诗", "传奇", "绝世", "神话"];
    e.partNames = ["帽子", "上衣", "鞋子", "护臂", "裤子", "手套"];
    e.config = null;
    e.index = -1;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.btnUnload.on("click", this.clickUnload, this);
    this.node.on(cc.Node.EventType.TOUCH_START, this.clickClose, this);
  };

  e.prototype.onDestroy = function () {
    this.btnUnload.off("click", this.clickUnload, this);
    this.node.off(cc.Node.EventType.TOUCH_START, this.clickClose, this);
  };

  e.prototype.clickUnload = function () {
    $equipmentContext["default"].Ins.removeGem(this.config.part, this.index);
    $eventManager["default"].send($localEventName["default"].RENDER_GEM);
    this.clickClose();
  };

  e.prototype.clickClose = function () {
    this.node.active = !1;
  };

  e.prototype.render = function (t, e) {
    var i = this;
    this.index = e;
    this.config = t;
    $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public, ["/textures/gem/g" + this.config.part + "_" + this.config.Grade], cc.SpriteFrame, null, function (t, e) {
      var o = e[0];

      if (o && cc.isValid(i.gemIconSp)) {
        i.gemIconSp.spriteFrame = $resUtil.ResUtil.assignWith(o, i.node);
      }
    });
    this.gemName.string = this.partNames[this.config.part - 1] + "·" + this.names[this.config.Grade - 1] + "宝石";
    this.gemName.node.color = $gameGemInfo.GameGemInfo.gemColor[this.config.Grade - 1];
    this.gemDesc.string = $gameGemInfo.GameGemInfo.ins.getGemDesc(t);
  };

  __decorate([m(cc.Sprite)], e.prototype, "gemIconSp", void 0);

  __decorate([m(cc.Label)], e.prototype, "gemName", void 0);

  __decorate([m(cc.Label)], e.prototype, "gemDesc", void 0);

  __decorate([m(cc.Node)], e.prototype, "btnUnload", void 0);

  return __decorate([h], e);
}(cc.Component);

exports["default"] = y;

cc._RF.pop();