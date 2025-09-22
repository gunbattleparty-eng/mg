
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/WaitingView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFdhaXRpbmdWaWV3LmpzIl0sIm5hbWVzIjpbIm8iLCIkdUlQYXJhbSIsInJlcXVpcmUiLCIkd2FpdGluZ01hbmFnZXIiLCIkdUlWaWV3IiwiYyIsImNjIiwiX2RlY29yYXRvciIsInUiLCJjY2NsYXNzIiwiZCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInVpVHlwZSIsIkxheWVyVHlwZSIsIldBSVRJTkciLCJpc0NhY2hlIiwicmVzaWR1ZVRpbWUiLCJzdWNjZXNzQ2FsbGJhY2siLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJyZW1vdmVFdmVudCIsInJlZ2lzdGVyQ2FsbGJhY2siLCJ1cGRhdGUiLCJXYWl0aW5nTWFuYWdlciIsImluc3RhbmNlIiwiY2xvc2UiLCJfX2RlY29yYXRlIiwiVUlWaWV3IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBdEI7O0FBQ0EsSUFBSUMsZUFBZSxHQUFHRCxPQUFPLENBQUMsa0JBQUQsQ0FBN0I7O0FBQ0EsSUFBSUUsT0FBTyxHQUFHRixPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJRyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLE1BQUYsR0FBV2YsUUFBUSxDQUFDZ0IsU0FBVCxDQUFtQkMsT0FBOUI7SUFDQUwsQ0FBQyxDQUFDTSxPQUFGLEdBQVksQ0FBQyxDQUFiO0lBQ0FOLENBQUMsQ0FBQ08sV0FBRixHQUFnQixDQUFoQjtJQUNBUCxDQUFDLENBQUNRLGVBQUYsR0FBb0IsSUFBcEI7SUFDQSxPQUFPUixDQUFQO0VBQ0g7O0VBQ0RTLFNBQVMsQ0FBQ1QsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ1UsU0FBRixDQUFZQyxXQUFaLEdBQTBCLFlBQVk7SUFDbEMsS0FBS0gsZUFBTCxHQUF1QixJQUF2QjtJQUNBLEtBQUtELFdBQUwsR0FBbUIsQ0FBbkI7RUFDSCxDQUhEOztFQUlBUCxDQUFDLENBQUNVLFNBQUYsQ0FBWUUsZ0JBQVosR0FBK0IsVUFBVWIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQzNDLEtBQUtRLGVBQUwsR0FBdUJULENBQXZCO0lBQ0EsS0FBS1EsV0FBTCxHQUFtQlAsQ0FBbkI7RUFDSCxDQUhEOztFQUlBQSxDQUFDLENBQUNVLFNBQUYsQ0FBWUcsTUFBWixHQUFxQixVQUFVZCxDQUFWLEVBQWE7SUFDOUIsSUFBSSxFQUFFLEtBQUtRLFdBQUwsSUFBb0IsQ0FBdEIsQ0FBSixFQUE4QjtNQUMxQixLQUFLQSxXQUFMLElBQW9CUixDQUFwQjs7TUFDQSxJQUFJLEtBQUtRLFdBQUwsSUFBb0IsQ0FBeEIsRUFBMkI7UUFDdkIsSUFBSSxLQUFLQyxlQUFULEVBQTBCO1VBQ3RCLEtBQUtBLGVBQUw7UUFDSDs7UUFDRGxCLGVBQWUsQ0FBQ3dCLGNBQWhCLENBQStCQyxRQUEvQixDQUF3Q0MsS0FBeEMsQ0FBOEMsSUFBOUM7TUFDSDtJQUNKO0VBQ0osQ0FWRDs7RUFXQSxPQUFPQyxVQUFVLENBQUMsQ0FBQ3RCLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0E5QkQsQ0E4QkdULE9BQU8sQ0FBQzJCLE1BOUJYLENBRkMsQ0FBTDtBQWlDQUMsT0FBTyxXQUFQLEdBQWtCdEIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJHVJUGFyYW0gPSByZXF1aXJlKFwiLi9VSVBhcmFtXCIpO1xyXG52YXIgJHdhaXRpbmdNYW5hZ2VyID0gcmVxdWlyZShcIi4vV2FpdGluZ01hbmFnZXJcIik7XHJcbnZhciAkdUlWaWV3ID0gcmVxdWlyZShcIi4vVUlWaWV3XCIpO1xyXG52YXIgYyA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciB1ID0gYy5jY2NsYXNzO1xyXG52YXIgZCA9XHJcbiAgICAoYy5wcm9wZXJ0eSxcclxuICAgIChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICBlLnVpVHlwZSA9ICR1SVBhcmFtLkxheWVyVHlwZS5XQUlUSU5HO1xyXG4gICAgICAgICAgICBlLmlzQ2FjaGUgPSAhMDtcclxuICAgICAgICAgICAgZS5yZXNpZHVlVGltZSA9IDA7XHJcbiAgICAgICAgICAgIGUuc3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWNjZXNzQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2lkdWVUaW1lID0gMDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLnJlZ2lzdGVyQ2FsbGJhY2sgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3NDYWxsYmFjayA9IHQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVzaWR1ZVRpbWUgPSBlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgaWYgKCEodGhpcy5yZXNpZHVlVGltZSA8PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpZHVlVGltZSAtPSB0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzaWR1ZVRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkd2FpdGluZ01hbmFnZXIuV2FpdGluZ01hbmFnZXIuaW5zdGFuY2UuY2xvc2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFt1XSwgZSk7XHJcbiAgICB9KSgkdUlWaWV3LlVJVmlldykpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBkO1xyXG4iXX0=