
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ConfirmView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXENvbmZpcm1WaWV3LmpzIl0sIm5hbWVzIjpbIm8iLCIkdUlQYXJhbSIsInJlcXVpcmUiLCIkcG9wdXBWaWV3IiwibCIsImNjIiwiX2RlY29yYXRvciIsImMiLCJjY2NsYXNzIiwidSIsInByb3BlcnR5IiwiZCIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ1aVR5cGUiLCJMYXllclR5cGUiLCJESUFMT0ciLCJidG5TdXJlIiwiYnRuQ2FuY2VsIiwidGl0bGVMYWJlbCIsInN1cmVDYiIsImNhbmNlbENiIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwicmVnaXN0ZXJDYWxsYmFjayIsInN0cmluZyIsInRpdGxlIiwic3VyZUxhYmVsIiwiY2hpbGRyZW4iLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsImNhbmNlbExhYmVsIiwiYWN0aXZlIiwiaXNDYW5jZWwiLCJhZGRFdmVudCIsIm9uIiwiY2xpY2tTdXJlIiwiY2xpY2tDYW5jZWxDYiIsInJlbW92ZUV2ZW50Iiwib2ZmIiwib25DbGlja0Nsb3NlIiwiX19kZWNvcmF0ZSIsIk5vZGUiLCJQb3B1cFZpZXciLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF0Qjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlFLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMs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LENBQUNsQyxDQUFDLENBQUNKLEVBQUUsQ0FBQzJCLEtBQUosQ0FBRixDQUFELEVBQWdCbkIsQ0FBQyxDQUFDWSxTQUFsQixFQUE2QixZQUE3QixFQUEyQyxLQUFLLENBQWhELENBQVY7O0VBQ0EsT0FBT2tCLFVBQVUsQ0FBQyxDQUFDcEMsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQWhETyxDQWdETFYsVUFBVSxDQUFDMEMsU0FoRE4sQ0FBUjs7QUFpREFDLE9BQU8sV0FBUCxHQUFrQm5DLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICR1SVBhcmFtID0gcmVxdWlyZShcIi4vVUlQYXJhbVwiKTtcclxudmFyICRwb3B1cFZpZXcgPSByZXF1aXJlKFwiLi9Qb3B1cFZpZXdcIik7XHJcbnZhciBsID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGMgPSBsLmNjY2xhc3M7XHJcbnZhciB1ID0gbC5wcm9wZXJ0eTtcclxudmFyIGQgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgZS51aVR5cGUgPSAkdUlQYXJhbS5MYXllclR5cGUuRElBTE9HO1xyXG4gICAgICAgIGUuYnRuU3VyZSA9IG51bGw7XHJcbiAgICAgICAgZS5idG5DYW5jZWwgPSBudWxsO1xyXG4gICAgICAgIGUudGl0bGVMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgZS5zdXJlQ2IgPSBudWxsO1xyXG4gICAgICAgIGUuY2FuY2VsQ2IgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUucmVnaXN0ZXJDYWxsYmFjayA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdGhpcy5zdXJlQ2IgPSB0LnN1cmVDYjtcclxuICAgICAgICB0aGlzLmNhbmNlbENiID0gdC5jYW5jZWxDYjtcclxuICAgICAgICB0aGlzLnRpdGxlTGFiZWwuc3RyaW5nID0gdC50aXRsZTtcclxuICAgICAgICBpZiAodC5zdXJlTGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5TdXJlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdC5zdXJlTGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0LmNhbmNlbExhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ2FuY2VsLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdC5jYW5jZWxMYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idG5DYW5jZWwuYWN0aXZlID0gdC5pc0NhbmNlbDtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJ0blN1cmUub24oXCJjbGlja1wiLCB0aGlzLmNsaWNrU3VyZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5idG5DYW5jZWwub24oXCJjbGlja1wiLCB0aGlzLmNsaWNrQ2FuY2VsQ2IsIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYnRuU3VyZS5vZmYoXCJjbGlja1wiLCB0aGlzLmNsaWNrU3VyZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5idG5DYW5jZWwub2ZmKFwiY2xpY2tcIiwgdGhpcy5jbGlja0NhbmNlbENiLCB0aGlzKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jbGlja1N1cmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3VyZUNiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VyZUNiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DbGlja0Nsb3NlKCk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuY2xpY2tDYW5jZWxDYiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW5jZWxDYikge1xyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbENiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DbGlja0Nsb3NlKCk7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbdShjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImJ0blN1cmVcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW3UoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJidG5DYW5jZWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW3UoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwidGl0bGVMYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2NdLCBlKTtcclxufSkoJHBvcHVwVmlldy5Qb3B1cFZpZXcpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBkO1xyXG4iXX0=