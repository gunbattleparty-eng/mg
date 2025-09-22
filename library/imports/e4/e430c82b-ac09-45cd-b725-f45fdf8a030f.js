"use strict";
cc._RF.push(module, 'e430cgrrAlFzbcl9F/figMP', 'WaitingView');
// game_script/scripts/WaitingView.js

"use strict";

var o;

var $uIParam = require("./UIParam");

var $waitingManager = require("./WaitingManager");

var $uIView = require("./UIView");

var c = cc._decorator;
var u = c.ccclass;
var d = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.uiType = $uIParam.LayerType.WAITING;
    e.isCache = !0;
    e.residueTime = 0;
    e.successCallback = null;
    return e;
  }

  __extends(e, t);

  e.prototype.removeEvent = function () {
    this.successCallback = null;
    this.residueTime = 0;
  };

  e.prototype.registerCallback = function (t, e) {
    this.successCallback = t;
    this.residueTime = e;
  };

  e.prototype.update = function (t) {
    if (!(this.residueTime <= 0)) {
      this.residueTime -= t;

      if (this.residueTime <= 0) {
        if (this.successCallback) {
          this.successCallback();
        }

        $waitingManager.WaitingManager.instance.close(this);
      }
    }
  };

  return __decorate([u], e);
}($uIView.UIView));
exports["default"] = d;

cc._RF.pop();