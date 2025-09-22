
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/SkillHurtItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49e38smZ+xJAKQp6sAxEyrU', 'SkillHurtItem');
// game_script/scripts/SkillHurtItem.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var c = cc._decorator;
var u = c.ccclass;
var d = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.icon = null;
    e.skillCountLabel = null;
    e.skillNameLabel = null;
    e.skillHurtLable = null;
    e.skillHurtSecLable = null;
    e.skillHurtInfo = null;
    return e;
  }

  __extends(e, t);

  e.prototype.render = function (t) {
    var e = this;

    if (!(this.skillHurtInfo && this.skillHurtInfo.icon === t.icon)) {
      $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/cd_icon/" + t.icon], cc.SpriteFrame, null, function (t, i) {
        var o = i[0];

        if (o && cc.isValid(e.icon)) {
          e.icon.spriteFrame = $resUtil.ResUtil.assignWith(o, e.node);
        }
      });
    }

    this.skillHurtInfo = t;
    this.skillCountLabel.string = t.skillCount.toString();
    this.skillNameLabel.string = t.skillName;
    this.skillHurtLable.string = t.skillHurt.toString();
    this.skillHurtSecLable.string = t.skillHurtSec.toString();
  };

  __decorate([d(cc.Sprite)], e.prototype, "icon", void 0);

  __decorate([d(cc.Label)], e.prototype, "skillCountLabel", void 0);

  __decorate([d(cc.Label)], e.prototype, "skillNameLabel", void 0);

  __decorate([d(cc.Label)], e.prototype, "skillHurtLable", void 0);

  __decorate([d(cc.Label)], e.prototype, "skillHurtSecLable", void 0);

  return __decorate([u], e);
}(cc.Component);

exports["default"] = p;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNraWxsSHVydEl0ZW0uanMiXSwibmFtZXMiOlsibyIsIiRhc3NldHNMb2FkZXIiLCJyZXF1aXJlIiwiJGFzc2V0c01hcCIsIiRyZXNVdGlsIiwiYyIsImNjIiwiX2RlY29yYXRvciIsInUiLCJjY2NsYXNzIiwiZCIsInByb3BlcnR5IiwicCIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJpY29uIiwic2tpbGxDb3VudExhYmVsIiwic2tpbGxOYW1lTGFiZWwiLCJza2lsbEh1cnRMYWJsZSIsInNraWxsSHVydFNlY0xhYmxlIiwic2tpbGxIdXJ0SW5mbyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsInJlbmRlciIsImluc3RhbmNlIiwibG9hZFJlcyIsIkJ1bmRsZU5hbWVzIiwiUHVibGljX1JlcyIsIlNwcml0ZUZyYW1lIiwiaSIsImlzVmFsaWQiLCJzcHJpdGVGcmFtZSIsIlJlc1V0aWwiLCJhc3NpZ25XaXRoIiwibm9kZSIsInN0cmluZyIsInNraWxsQ291bnQiLCJ0b1N0cmluZyIsInNraWxsTmFtZSIsInNraWxsSHVydCIsInNraWxsSHVydFNlYyIsIl9fZGVjb3JhdGUiLCJTcHJpdGUiLCJMYWJlbCIsIkNvbXBvbmVudCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlFLFFBQVEsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdEI7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENB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LGdCQUE3QixFQUErQyxLQUFLLENBQXBELENBQVY7O0VBQ0FtQixVQUFVLENBQUMsQ0FBQ2pDLENBQUMsQ0FBQ0osRUFBRSxDQUFDdUMsS0FBSixDQUFGLENBQUQsRUFBZ0IvQixDQUFDLENBQUNVLFNBQWxCLEVBQTZCLG1CQUE3QixFQUFrRCxLQUFLLENBQXZELENBQVY7O0VBQ0EsT0FBT21CLFVBQVUsQ0FBQyxDQUFDbkMsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQXhDTyxDQXdDTFIsRUFBRSxDQUFDd0MsU0F4Q0UsQ0FBUjs7QUF5Q0FDLE9BQU8sV0FBUCxHQUFrQm5DLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRhc3NldHNMb2FkZXIgPSByZXF1aXJlKFwiLi9Bc3NldHNMb2FkZXJcIik7XHJcbnZhciAkYXNzZXRzTWFwID0gcmVxdWlyZShcIi4vQXNzZXRzTWFwXCIpO1xyXG52YXIgJHJlc1V0aWwgPSByZXF1aXJlKFwiLi9SZXNVdGlsXCIpO1xyXG52YXIgYyA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciB1ID0gYy5jY2NsYXNzO1xyXG52YXIgZCA9IGMucHJvcGVydHk7XHJcbnZhciBwID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUuaWNvbiA9IG51bGw7XHJcbiAgICAgICAgZS5za2lsbENvdW50TGFiZWwgPSBudWxsO1xyXG4gICAgICAgIGUuc2tpbGxOYW1lTGFiZWwgPSBudWxsO1xyXG4gICAgICAgIGUuc2tpbGxIdXJ0TGFibGUgPSBudWxsO1xyXG4gICAgICAgIGUuc2tpbGxIdXJ0U2VjTGFibGUgPSBudWxsO1xyXG4gICAgICAgIGUuc2tpbGxIdXJ0SW5mbyA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlID0gdGhpcztcclxuICAgICAgICBpZiAoISh0aGlzLnNraWxsSHVydEluZm8gJiYgdGhpcy5za2lsbEh1cnRJbmZvLmljb24gPT09IHQuaWNvbikpIHtcclxuICAgICAgICAgICAgJGFzc2V0c0xvYWRlci5kZWZhdWx0Lmluc3RhbmNlLmxvYWRSZXMoXHJcbiAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkJ1bmRsZU5hbWVzLlB1YmxpY19SZXMsXHJcbiAgICAgICAgICAgICAgICBbXCIvY2RfaWNvbi9cIiArIHQuaWNvbl0sXHJcbiAgICAgICAgICAgICAgICBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAodCwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gaVswXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobyAmJiBjYy5pc1ZhbGlkKGUuaWNvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5pY29uLnNwcml0ZUZyYW1lID0gJHJlc1V0aWwuUmVzVXRpbC5hc3NpZ25XaXRoKG8sIGUubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNraWxsSHVydEluZm8gPSB0O1xyXG4gICAgICAgIHRoaXMuc2tpbGxDb3VudExhYmVsLnN0cmluZyA9IHQuc2tpbGxDb3VudC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc2tpbGxOYW1lTGFiZWwuc3RyaW5nID0gdC5za2lsbE5hbWU7XHJcbiAgICAgICAgdGhpcy5za2lsbEh1cnRMYWJsZS5zdHJpbmcgPSB0LnNraWxsSHVydC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc2tpbGxIdXJ0U2VjTGFibGUuc3RyaW5nID0gdC5za2lsbEh1cnRTZWMudG9TdHJpbmcoKTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtkKGNjLlNwcml0ZSldLCBlLnByb3RvdHlwZSwgXCJpY29uXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtkKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcInNraWxsQ291bnRMYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbZChjYy5MYWJlbCldLCBlLnByb3RvdHlwZSwgXCJza2lsbE5hbWVMYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbZChjYy5MYWJlbCldLCBlLnByb3RvdHlwZSwgXCJza2lsbEh1cnRMYWJsZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbZChjYy5MYWJlbCldLCBlLnByb3RvdHlwZSwgXCJza2lsbEh1cnRTZWNMYWJsZVwiLCB2b2lkIDApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3VdLCBlKTtcclxufSkoY2MuQ29tcG9uZW50KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcDtcclxuIl19