"use strict";
cc._RF.push(module, 'dbb76raJ4JO2rlALSxeVVvW', 'ZGLabel');
// game_script/scripts/ZGLabel.js

"use strict";

var o;

var $switchContext = require("./SwitchContext");

var a = cc._decorator;
var l = a.ccclass;
var c = (a.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.getComponent(cc.Label).string = $switchContext.SwitchContext.zgStr;
  };

  return __decorate([l], e);
}(cc.Component));
exports["default"] = c;

cc._RF.pop();