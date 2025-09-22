
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/LoadingView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1e31mRC05IyIQJJW87746e', 'LoadingView');
// game_script/scripts/LoadingView.js

"use strict";

var o;

var $switchContext = require("./SwitchContext");

var $uIParam = require("./UIParam");

var $uIView = require("./UIView");

var c = cc._decorator;
var u = c.ccclass;
var d = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.uiType = $uIParam.LayerType.WAITING;
    e.progressBar = null;
    e.bgSp = null;
    e.bg2 = null;
    e.targetProgress = 0;
    e.completedCB = null;
    e.isCompleted = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    if ($switchContext.SwitchContext.currVersion === $switchContext.GameVersion.V2 && this.bg2) {
      this.bgSp.spriteFrame = this.bg2;
    }
  };

  e.prototype.registerCB = function (t, e) {
    this.completedCB = t.bind(e);
  };

  e.prototype.setProgress = function (t, e) {
    if (void 0 === e) {
      e = !1;
    }

    e ? (this.targetProgress = t, this.progressBar.progress = t) : this.targetProgress < t && (this.targetProgress = t);
  };

  e.prototype.removeToScreen = function () {
    this.targetProgress = 0;
    this.completedCB = null;
    this.isCompleted = !1;
    this.progressBar.progress = 0;
  };

  e.prototype.update = function (t) {
    this.progressBar.progress = cc.misc.lerp(this.progressBar.progress, this.targetProgress, 10 * t);

    if (this.progressBar.progress >= 0.98 && !this.isCompleted && this.completedCB) {
      this.isCompleted = !0;
      this.completedCB();
    }
  };

  __decorate([d(cc.ProgressBar)], e.prototype, "progressBar", void 0);

  __decorate([d(cc.Sprite)], e.prototype, "bgSp", void 0);

  __decorate([d(cc.SpriteFrame)], e.prototype, "bg2", void 0);

  return __decorate([u], e);
}($uIView.UIView);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXExvYWRpbmdWaWV3LmpzIl0sIm5hbWVzIjpbIm8iLCIkc3dpdGNoQ29udGV4dCIsInJlcXVpcmUiLCIkdUlQYXJhbSIsIiR1SVZpZXciLCJjIiwiY2MiLCJfZGVjb3JhdG9yIiwidSIsImNjY2xhc3MiLCJkIiwicHJvcGVydHkiLCJwIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInVpVHlwZSIsIkxheWVyVHlwZSIsIldBSVRJTkciLCJwcm9ncmVzc0JhciIsImJnU3AiLCJiZzIiLCJ0YXJnZXRQcm9ncmVzcyIsImNvbXBsZXRlZENCIiwiaXNDb21wbGV0ZWQiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvblJlc2V0VmlldyIsIlN3aXRjaENvbnRleHQiLCJjdXJyVmVyc2lvbiIsIkdhbWVWZXJzaW9uIiwiVjIiLCJzcHJpdGVGcmFtZSIsInJlZ2lzdGVyQ0IiLCJiaW5kIiwic2V0UHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInJlbW92ZVRvU2NyZWVuIiwidXBkYXRlIiwibWlzYyIsImxlcnAiLCJfX2RlY29yYXRlIiwiUHJvZ3Jlc3NCYXIiLCJTcHJpdGUiLCJTcHJpdGVGcmFtZSIsIlVJVmlldyIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxjQUFjLEdBQUdDLE9BQU8sQ0FBQyxpQkFBRCxDQUE1Qjs7QUFDQSxJQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxXQUFELENBQXRCOztBQUNBLElBQUlFLE9BQU8sR0FBR0YsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFW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c0MsTUFBSixDQUFGLENBQUQsRUFBaUI5QixDQUFDLENBQUNhLFNBQW5CLEVBQThCLE1BQTlCLEVBQXNDLEtBQUssQ0FBM0MsQ0FBVjs7RUFDQWUsVUFBVSxDQUFDLENBQUNoQyxDQUFDLENBQUNKLEVBQUUsQ0FBQ3VDLFdBQUosQ0FBRixDQUFELEVBQXNCL0IsQ0FBQyxDQUFDYSxTQUF4QixFQUFtQyxLQUFuQyxFQUEwQyxLQUFLLENBQS9DLENBQVY7O0VBQ0EsT0FBT2UsVUFBVSxDQUFDLENBQUNsQyxDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBOUNPLENBOENMVixPQUFPLENBQUMwQyxNQTlDSCxDQUFSOztBQStDQUMsT0FBTyxXQUFQLEdBQWtCbkMsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJHN3aXRjaENvbnRleHQgPSByZXF1aXJlKFwiLi9Td2l0Y2hDb250ZXh0XCIpO1xyXG52YXIgJHVJUGFyYW0gPSByZXF1aXJlKFwiLi9VSVBhcmFtXCIpO1xyXG52YXIgJHVJVmlldyA9IHJlcXVpcmUoXCIuL1VJVmlld1wiKTtcclxudmFyIGMgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgdSA9IGMuY2NjbGFzcztcclxudmFyIGQgPSBjLnByb3BlcnR5O1xyXG52YXIgcCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLnVpVHlwZSA9ICR1SVBhcmFtLkxheWVyVHlwZS5XQUlUSU5HO1xyXG4gICAgICAgIGUucHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgICAgIGUuYmdTcCA9IG51bGw7XHJcbiAgICAgICAgZS5iZzIgPSBudWxsO1xyXG4gICAgICAgIGUudGFyZ2V0UHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIGUuY29tcGxldGVkQ0IgPSBudWxsO1xyXG4gICAgICAgIGUuaXNDb21wbGV0ZWQgPSAhMTtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLm9uUmVzZXRWaWV3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkc3dpdGNoQ29udGV4dC5Td2l0Y2hDb250ZXh0LmN1cnJWZXJzaW9uID09PSAkc3dpdGNoQ29udGV4dC5HYW1lVmVyc2lvbi5WMiAmJiB0aGlzLmJnMikge1xyXG4gICAgICAgICAgICB0aGlzLmJnU3Auc3ByaXRlRnJhbWUgPSB0aGlzLmJnMjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUucmVnaXN0ZXJDQiA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRDQiA9IHQuYmluZChlKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zZXRQcm9ncmVzcyA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xyXG4gICAgICAgICAgICBlID0gITE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVcclxuICAgICAgICAgICAgPyAoKHRoaXMudGFyZ2V0UHJvZ3Jlc3MgPSB0KSwgKHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSB0KSlcclxuICAgICAgICAgICAgOiB0aGlzLnRhcmdldFByb2dyZXNzIDwgdCAmJiAodGhpcy50YXJnZXRQcm9ncmVzcyA9IHQpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnJlbW92ZVRvU2NyZWVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0UHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkQ0IgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSAhMTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gMDtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBjYy5taXNjLmxlcnAodGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcywgdGhpcy50YXJnZXRQcm9ncmVzcywgMTAgKiB0KTtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA+PSAwLjk4ICYmICF0aGlzLmlzQ29tcGxldGVkICYmIHRoaXMuY29tcGxldGVkQ0IpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9ICEwO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlZENCKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW2QoY2MuUHJvZ3Jlc3NCYXIpXSwgZS5wcm90b3R5cGUsIFwicHJvZ3Jlc3NCYXJcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW2QoY2MuU3ByaXRlKV0sIGUucHJvdG90eXBlLCBcImJnU3BcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW2QoY2MuU3ByaXRlRnJhbWUpXSwgZS5wcm90b3R5cGUsIFwiYmcyXCIsIHZvaWQgMCk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbdV0sIGUpO1xyXG59KSgkdUlWaWV3LlVJVmlldyk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHA7XHJcbiJdfQ==