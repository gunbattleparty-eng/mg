"use strict";
cc._RF.push(module, '92e5fIiridFzIGEHJTxIVBL', 'PlayerSkin');
// game_script/scripts/PlayerSkin.js

"use strict";

var o;
exports.PlayerSkin = void 0;

var $roleContext = require("./RoleContext");

var a = cc._decorator;
var l = a.ccclass;
var c = a.property;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.playerSkin = null;
    e.gunSkin = null;
    return e;
  }

  __extends(e, t);

  e.prototype.checkGun = function (t) {
    this.gunSkin.armatureName = "qiang_" + t;
    var e = this.playerSkin.armature().getSlot("shou");
    dragonBones.CCFactory.getInstance().replaceSlotDisplay(this.gunSkin.getArmatureKey(), "qiang_" + t, "shou", "q_" + t, e);
  };

  e.prototype.changePlayerSkin = function (t) {
    this.playerSkin.armatureName = "pf" + t;
    this.checkGun($roleContext["default"].ins.currSkinInfo.gun);
  };

  __decorate([c({
    type: dragonBones.ArmatureDisplay
  })], e.prototype, "playerSkin", void 0);

  __decorate([c({
    type: dragonBones.ArmatureDisplay
  })], e.prototype, "gunSkin", void 0);

  return __decorate([l], e);
}(cc.Component);

exports.PlayerSkin = u;

cc._RF.pop();