"use strict";
cc._RF.push(module, 'cda6frfGU1KA6EefSFA7f15', 'BossWarnView');
// game_script/scripts/BossWarnView.js

"use strict";

var o;

var $popupView = require("./PopupView");

var $remoteAudio = require("./RemoteAudio");

var $gameContext = require("./GameContext");

var c = cc._decorator;
var u = c.ccclass;
var d = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.skin = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    var e = this;
    this.uiParam.param.isBoss ? ($remoteAudio["default"].instance.playEffectMusic("bosscome"), this.skin.armatureName = "boss") : this.skin.armatureName = "jingying";
    this.skin.playAnimation("stand", 1);
    this.skin.timeScale = $gameContext["default"].ins.gameRatio;
    this.skin.on(dragonBones.EventObject.COMPLETE, function () {
      t.prototype.onClickClose.call(e);
    }, this);
  };

  __decorate([d(dragonBones.ArmatureDisplay)], e.prototype, "skin", void 0);

  return __decorate([u], e);
}($popupView.PopupView);

exports["default"] = p;

cc._RF.pop();