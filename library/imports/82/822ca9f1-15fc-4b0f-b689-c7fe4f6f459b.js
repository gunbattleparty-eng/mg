"use strict";
cc._RF.push(module, '822canxFfxLD7aJx/5Pb0Wb', 'GemStatsView');
// game_script/scripts/GemStatsView.js

"use strict";

var o;

var $list = require("./List");

var $popupView = require("./PopupView");

var $configContext = require("./ConfigContext");

var $gameGemInfo = require("./GameGemInfo");

var u = cc._decorator;
var d = u.ccclass;
var p = u.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.list = null;
    e.skillPoolIds = [];
    e.showTyps = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    var t = this;

    for (var e = 0; e < $configContext["default"].instance.gemSkillConfigs.length; e++) {
      var i = $configContext["default"].instance.gemSkillConfigs[e].id;

      if ($gameGemInfo.GameGemInfo.ins.hasGem(i)) {
        this.skillPoolIds.push(i);
        this.showTyps.push($configContext["default"].instance.gemSkillConfigs[e].show_type);
      }
    }

    this.scheduleOnce(function () {
      t.list.numItems = t.skillPoolIds.length;
    });
  };

  e.prototype.renderItem = function (t, e) {
    var i = t.getComponentInChildren(cc.Label);
    i.string = $gameGemInfo.GameGemInfo.ins.getGemDesc2(this.skillPoolIds[e], this.showTyps[e]);

    i._forceUpdateRenderData();

    t.getComponentInChildren(cc.Layout).updateLayout();
    t.height = t.children[0].height;
  };

  __decorate([p($list["default"])], e.prototype, "list", void 0);

  return __decorate([d], e);
}($popupView.PopupView);

exports["default"] = f;

cc._RF.pop();