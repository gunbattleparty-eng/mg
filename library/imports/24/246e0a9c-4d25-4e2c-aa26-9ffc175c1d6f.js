"use strict";
cc._RF.push(module, '246e0qcTSVOLKomn/wXXB1v', 'PopupView');
// game_script/scripts/PopupView.js

"use strict";

var o;
exports.PopupView = void 0;

var $popupManager = require("./PopupManager");

var $uIParam = require("./UIParam");

var $uIView = require("./UIView");

var c = cc._decorator;
var u = c.ccclass;
var d = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.uiType = $uIParam.LayerType.POPUP;
    e.content = null;
    e.isMaskBg = !0;
    e.btnClose = null;
    e.maskNode = null;
    return e;
  }

  __extends(e, t);

  e.prototype.innerResetView = function () {
    var t = this.openAnim();

    if (t) {
      t.target(this.content).start();
    }

    if (this.btnClose) {
      this.btnClose.on("click", this.onClickClose, this);
    }
  };

  e.prototype.innerAddToScreen = function () {
    t.prototype.innerAddToScreen.call(this);
    this.content = this.node.getChildByName("content");
    this.content.setSiblingIndex(1);

    if (this.isMaskBg) {
      this.maskNode.parent = this.node;
      this.maskNode.setSiblingIndex(0);
    }
  };

  e.prototype.innerRemoveToScreen = function () {
    if (this.btnClose) {
      this.btnClose.off("click", this.onClickClose, this);
    }

    cc.Tween.stopAllByTarget(this.content);
    this.content.scale = 1;
    t.prototype.innerRemoveToScreen.call(this);
  };

  e.prototype.openAnim = function () {
    return cc.tween().to(0.15, {
      scale: 1.2
    }).to(0.15, {
      scale: 1
    });
  };

  e.prototype.closeAnim = function () {
    return cc.tween().to(0.15, {
      scale: 1.2
    }).to(0.15, {
      scale: 0.5
    });
  };

  e.prototype.playCloseAnim = function (t) {
    var e = this.closeAnim();
    e ? e.target(this.content).call(function () {
      if (t) {
        t();
      }
    }).start() : t && t();
  };

  e.prototype.onClickClose = function () {
    $popupManager.PopupManager.instance.close(this);
  };

  __decorate([d(cc.Boolean)], e.prototype, "isMaskBg", void 0);

  __decorate([d(cc.Node)], e.prototype, "btnClose", void 0);

  return __decorate([u], e);
}($uIView.UIView);

exports.PopupView = p;

cc._RF.pop();