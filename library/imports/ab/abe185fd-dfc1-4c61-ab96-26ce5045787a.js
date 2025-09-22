"use strict";
cc._RF.push(module, 'abe18X938FMYauWJs5QRXh6', 'RobotShopItem');
// game_script/scripts/RobotShopItem.js

"use strict";

var o;

var $listItem = require("./ListItem");

var $roleContext = require("./RoleContext");

var l = cc._decorator;
var c = l.ccclass;
var u = l.property;

var d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.usedBox = null;
    e.skin = null;
    e.unlockBox = null;
    e.redDot = null;
    e.skinId = -1;
    return e;
  }

  __extends(e, t);

  e.prototype.render = function (t) {
    this.skinId = t.id;
    var e = $roleContext["default"].ins.currSkinInfo;
    var i = $roleContext["default"].ins.getRobotSkinInfo(t.id);
    this.usedBox.active = t.id === e.robot;
    this.unlockBox.active = !i.isHave;
    this.skin.armatureName = "hl" + t.id;
    this.redDot.active = !i.isHave && i.shard >= t.shard_num;
  };

  __decorate([u(cc.Node)], e.prototype, "usedBox", void 0);

  __decorate([u(dragonBones.ArmatureDisplay)], e.prototype, "skin", void 0);

  __decorate([u(cc.Node)], e.prototype, "unlockBox", void 0);

  __decorate([u(cc.Node)], e.prototype, "redDot", void 0);

  return __decorate([c], e);
}($listItem["default"]);

exports["default"] = d;

cc._RF.pop();