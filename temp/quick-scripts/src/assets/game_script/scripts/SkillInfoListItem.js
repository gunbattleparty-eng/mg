"use strict";
cc._RF.push(module, '37117fhdMtAZroRPjUfUYZy', 'SkillInfoListItem');
// game_script/scripts/SkillInfoListItem.js

"use strict";

var o;

var $skillContext = require("./SkillContext");

var a = cc._decorator;
var l = a.ccclass;
var c = a.property;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.levelLabel = null;
    e.levelDesc = null;
    e.lockNode = null;
    e.skillConfig = null;
    e.unlockLevel = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.render = function (t, e) {
    this.unlockLevel = e;
    this.skillConfig = t;
    this.levelLabel.string = "等级" + this.unlockLevel;
    this.levelDesc.string = this.skillConfig.skill_text;
    this.lockNode.active = $skillContext["default"].Ins.getSKillLevel(t.skill_id) < this.unlockLevel;
  };

  e.prototype.start = function () {};

  e.prototype.touchItem = function () {};

  __decorate([c(cc.Label)], e.prototype, "levelLabel", void 0);

  __decorate([c(cc.Label)], e.prototype, "levelDesc", void 0);

  __decorate([c(cc.Node)], e.prototype, "lockNode", void 0);

  return __decorate([l], e);
}(cc.Component);

exports["default"] = u;

cc._RF.pop();