"use strict";
cc._RF.push(module, '191efcSl7VDzpWf2KyEHoVZ', 'ToastView');
// game_script/scripts/ToastView.js

"use strict";

var o;

var $uIManager = require("./UIManager");

var $uIParam = require("./UIParam");

var $uIView = require("./UIView");

var c = cc._decorator;
var u = c.ccclass;
var d = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.uiType = $uIParam.LayerType.TOAST;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    var t = this;
    var e = this.node;
    e.getChildByName("toast_bg").getChildByName("txt").getComponent(cc.Label).string = this.uiParam.param.msg;
    e.setPosition(this.uiParam.param.pos);
    e.opacity = 255;
    this.scheduleOnce(function () {
      e.active = !0;
    });
    e.stopAllActions();
    cc.tween(this.node).to(this.uiParam.param.time / 2, {
      y: this.node.position.y + 100
    }).start();
    this.scheduleOnce(function () {
      cc.tween(t.node).to(t.uiParam.param.time / 2, {
        opacity: 0
      }).start();
    }, this.uiParam.param.time / 2);
    this.scheduleOnce(function () {
      $uIManager.UIManager.instance.hideToast(t);
    }, this.uiParam.param.time);
  };

  return __decorate([u], e);
}($uIView.UIView));
exports["default"] = d;

cc._RF.pop();