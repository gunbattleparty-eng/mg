"use strict";
cc._RF.push(module, '39c89qMWllE8JKmjJd7mmjs', 'ChanceView');
// game_script/scripts/ChanceView.js

"use strict";

var o;

var $popupView = require("./PopupView");

var $configContext = require("./ConfigContext");

var l = cc._decorator;
var c = l.ccclass;
var u = l.property;

var d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.contentLable = null;
    e.btnLayer = null;
    e.currId = 1;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    this.currId = this.uiParam.param.id;
    this.render(this.currId);
  };

  e.prototype.addEvent = function () {
    for (var t = 0; t < this.btnLayer.children.length; t++) {
      this.btnLayer.children[t].on("click", this.clickBtn, this);
    }
  };

  e.prototype.clickBtn = function (t) {
    var e = this.btnLayer.children.indexOf(t.node) + 1;

    if (this.currId !== e) {
      this.currId = e;
      this.render(e);
    }
  };

  e.prototype.render = function (t) {
    for (var e = 0; e < $configContext["default"].instance.chanceConfig.length; e++) {
      var i = $configContext["default"].instance.chanceConfig[e];

      if (t === i.id) {
        this.contentLable.string = i.text;
      }

      this.btnLayer.children[e].children[0].active = t === i.id;
    }
  };

  __decorate([u(cc.Label)], e.prototype, "contentLable", void 0);

  __decorate([u(cc.Node)], e.prototype, "btnLayer", void 0);

  return __decorate([c], e);
}($popupView.PopupView);

exports["default"] = d;

cc._RF.pop();