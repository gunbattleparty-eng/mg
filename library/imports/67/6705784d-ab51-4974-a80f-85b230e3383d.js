"use strict";
cc._RF.push(module, '67057hNq1FJdKgPhbIw4zg9', 'UIView');
// game_script/scripts/UIView.js

"use strict";

var o;
exports.UIView = void 0;

var $uIParam = require("./UIParam");

var a = cc._decorator;
var l = a.ccclass;
var c = (a.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.uiParam = null;
    e.uiType = $uIParam.LayerType.UI;
    e.isCache = !1;
    e.uiCallback = null;
    e.isCallOpen = !1;
    e.isCallClose = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.innerResetView();
    this.onResetView();
    this.addEvent();
  };

  e.prototype.reuse = function () {
    var t = this;
    this.scheduleOnce(function () {
      t.innerResetView();
      t.onResetView();
      t.addEvent();
    });
  };

  e.prototype.unuse = function () {
    this.removeEvent();
    this.isCallOpen = !0;
    this.isCallClose = !0;
  };

  e.prototype.innerResetView = function () {};

  e.prototype.innerAddToScreen = function () {
    this.addToScreen();

    if (this.uiCallback && this.uiCallback.openCallback) {
      if (this.isCallOpen) {
        return;
      }

      this.isCallOpen = !0;
      this.uiCallback.openCallback();
    }
  };

  e.prototype.innerRemoveToScreen = function () {
    this.removeEvent();
    this.removeToScreen();

    if (this.uiCallback && this.uiCallback.closeCallback) {
      if (this.isCallClose) {
        return;
      }

      this.isCallClose = !0;
      this.uiCallback.closeCallback();
    }
  };

  e.prototype.onResetView = function () {};

  e.prototype.addEvent = function () {};

  e.prototype.removeEvent = function () {};

  e.prototype.addToScreen = function () {};

  e.prototype.removeToScreen = function () {};

  return __decorate([l], e);
}(cc.Component));
exports.UIView = c;

cc._RF.pop();