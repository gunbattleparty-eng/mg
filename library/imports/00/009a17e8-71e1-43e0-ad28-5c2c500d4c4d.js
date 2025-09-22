"use strict";
cc._RF.push(module, '009a1foceFD4K0oXCxQDUxN', 'ConfirmView');
// game_script/scripts/ConfirmView.js

"use strict";

var o;

var $uIParam = require("./UIParam");

var $popupView = require("./PopupView");

var l = cc._decorator;
var c = l.ccclass;
var u = l.property;

var d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.uiType = $uIParam.LayerType.DIALOG;
    e.btnSure = null;
    e.btnCancel = null;
    e.titleLabel = null;
    e.sureCb = null;
    e.cancelCb = null;
    return e;
  }

  __extends(e, t);

  e.prototype.registerCallback = function (t) {
    this.sureCb = t.sureCb;
    this.cancelCb = t.cancelCb;
    this.titleLabel.string = t.title;

    if (t.sureLabel) {
      this.btnSure.children[0].getComponent(cc.Label).string = t.sureLabel;
    }

    if (t.cancelLabel) {
      this.btnCancel.children[0].getComponent(cc.Label).string = t.cancelLabel;
    }

    this.btnCancel.active = t.isCancel;
  };

  e.prototype.addEvent = function () {
    this.btnSure.on("click", this.clickSure, this);
    this.btnCancel.on("click", this.clickCancelCb, this);
  };

  e.prototype.removeEvent = function () {
    this.btnSure.off("click", this.clickSure, this);
    this.btnCancel.off("click", this.clickCancelCb, this);
  };

  e.prototype.clickSure = function () {
    if (this.sureCb) {
      this.sureCb();
    }

    this.onClickClose();
  };

  e.prototype.clickCancelCb = function () {
    if (this.cancelCb) {
      this.cancelCb();
    }

    this.onClickClose();
  };

  __decorate([u(cc.Node)], e.prototype, "btnSure", void 0);

  __decorate([u(cc.Node)], e.prototype, "btnCancel", void 0);

  __decorate([u(cc.Label)], e.prototype, "titleLabel", void 0);

  return __decorate([c], e);
}($popupView.PopupView);

exports["default"] = d;

cc._RF.pop();