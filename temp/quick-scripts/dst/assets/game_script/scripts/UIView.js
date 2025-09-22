
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/UIView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFVJVmlldy5qcyJdLCJuYW1lcyI6WyJvIiwiZXhwb3J0cyIsIlVJVmlldyIsIiR1SVBhcmFtIiwicmVxdWlyZSIsImEiLCJjYyIsIl9kZWNvcmF0b3IiLCJsIiwiY2NjbGFzcyIsImMiLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ1aVBhcmFtIiwidWlUeXBlIiwiTGF5ZXJUeXBlIiwiVUkiLCJpc0NhY2hlIiwidWlDYWxsYmFjayIsImlzQ2FsbE9wZW4iLCJpc0NhbGxDbG9zZSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsInN0YXJ0IiwiaW5uZXJSZXNldFZpZXciLCJvblJlc2V0VmlldyIsImFkZEV2ZW50IiwicmV1c2UiLCJzY2hlZHVsZU9uY2UiLCJ1bnVzZSIsInJlbW92ZUV2ZW50IiwiaW5uZXJBZGRUb1NjcmVlbiIsImFkZFRvU2NyZWVuIiwib3BlbkNhbGxiYWNrIiwiaW5uZXJSZW1vdmVUb1NjcmVlbiIsInJlbW92ZVRvU2NyZWVuIiwiY2xvc2VDYWxsYmFjayIsIl9fZGVjb3JhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxPQUFPLENBQUNDLE1BQVIsR0FBaUIsS0FBSyxDQUF0Qjs7QUFDQSxJQUFJQyxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXRCOztBQUNBLElBQUlDLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csT0FBRixHQUFZLElBQVo7SUFDQUgsQ0FBQyxDQUFDSSxNQUFGLEdBQVdkLFFBQVEsQ0FBQ2UsU0FBVCxDQUFtQkMsRUFBOUI7SUFDQU4sQ0FBQyxDQUFDTyxPQUFGLEdBQVksQ0FBQyxDQUFiO0lBQ0FQLENBQUMsQ0FBQ1EsVUFBRixHQUFlLElBQWY7SUFDQVIsQ0FBQyxDQUFDUyxVQUFGLEdBQWUsQ0FBQyxDQUFoQjtJQUNBVCxDQUFDLENBQUNVLFdBQUYsR0FBZ0IsQ0FBQyxDQUFqQjtJQUNBLE9BQU9WLENBQVA7RUFDSDs7RUFDRFcsU0FBUyxDQUFDWCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDWSxTQUFGLENBQVlDLEtBQVosR0FBb0IsWUFBWTtJQUM1QixLQUFLQyxjQUFMO0lBQ0EsS0FBS0MsV0FBTDtJQUNBLEtBQUtDLFFBQUw7RUFDSCxDQUpEOztFQUtBaEIsQ0FBQyxDQUFDWSxTQUFGLENBQVlLLEtBQVosR0FBb0IsWUFBWTtJQUM1QixJQUFJbEIsQ0FBQyxHQUFHLElBQVI7SUFDQSxLQUFLbUIsWUFBTCxDQUFrQixZQUFZO01BQzFCbkIsQ0FBQyxDQUFDZSxjQUFGO01BQ0FmLENBQUMsQ0FBQ2dCLFdBQUY7TUFDQWhCLENBQUMsQ0FBQ2lCLFFBQUY7SUFDSCxDQUpEO0VBS0gsQ0FQRDs7RUFRQWhCLENBQUMsQ0FBQ1ksU0FBRixDQUFZTyxLQUFaLEdBQW9CLFlBQVk7SUFDNUIsS0FBS0MsV0FBTDtJQUNBLEtBQUtYLFVBQUwsR0FBa0IsQ0FBQyxDQUFuQjtJQUNBLEtBQUtDLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQjtFQUNILENBSkQ7O0VBS0FWLENBQUMsQ0FBQ1ksU0FBRixDQUFZRSxjQUFaLEdBQTZCLFlBQVksQ0FBRSxDQUEzQzs7RUFDQWQsQ0FBQyxDQUFDWSxTQUFGLENBQVlTLGdCQUFaLEdBQStCLFlBQVk7SUFDdkMsS0FBS0MsV0FBTDs7SUFDQSxJQUFJLEtBQUtkLFVBQUwsSUFBbUIsS0FBS0EsVUFBTCxDQUFnQmUsWUFBdkMsRUFBcUQ7TUFDakQsSUFBSSxLQUFLZCxVQUFULEVBQXFCO1FBQ2pCO01BQ0g7O01BQ0QsS0FBS0EsVUFBTCxHQUFrQixDQUFDLENBQW5CO01BQ0EsS0FBS0QsVUFBTCxDQUFnQmUsWUFBaEI7SUFDSDtFQUNKLENBVEQ7O0VBVUF2QixDQUFDLENBQUNZLFNBQUYsQ0FBWVksbUJBQVosR0FBa0MsWUFBWTtJQUMxQyxLQUFLSixXQUFMO0lBQ0EsS0FBS0ssY0FBTDs7SUFDQSxJQUFJLEtBQUtqQixVQUFMLElBQW1CLEtBQUtBLFVBQUwsQ0FBZ0JrQixhQUF2QyxFQUFzRDtNQUNsRCxJQUFJLEtBQUtoQixXQUFULEVBQXNCO1FBQ2xCO01BQ0g7O01BQ0QsS0FBS0EsV0FBTCxHQUFtQixDQUFDLENBQXBCO01BQ0EsS0FBS0YsVUFBTCxDQUFnQmtCLGFBQWhCO0lBQ0g7RUFDSixDQVZEOztFQVdBMUIsQ0FBQyxDQUFDWSxTQUFGLENBQVlHLFdBQVosR0FBMEIsWUFBWSxDQUFFLENBQXhDOztFQUNBZixDQUFDLENBQUNZLFNBQUYsQ0FBWUksUUFBWixHQUF1QixZQUFZLENBQUUsQ0FBckM7O0VBQ0FoQixDQUFDLENBQUNZLFNBQUYsQ0FBWVEsV0FBWixHQUEwQixZQUFZLENBQUUsQ0FBeEM7O0VBQ0FwQixDQUFDLENBQUNZLFNBQUYsQ0FBWVUsV0FBWixHQUEwQixZQUFZLENBQUUsQ0FBeEM7O0VBQ0F0QixDQUFDLENBQUNZLFNBQUYsQ0FBWWEsY0FBWixHQUE2QixZQUFZLENBQUUsQ0FBM0M7O0VBQ0EsT0FBT0UsVUFBVSxDQUFDLENBQUNoQyxDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBMURELENBMERHUCxFQUFFLENBQUNtQyxTQTFETixDQUZDLENBQUw7QUE2REF4QyxPQUFPLENBQUNDLE1BQVIsR0FBaUJRLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxuZXhwb3J0cy5VSVZpZXcgPSB2b2lkIDA7XHJcbnZhciAkdUlQYXJhbSA9IHJlcXVpcmUoXCIuL1VJUGFyYW1cIik7XHJcbnZhciBhID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGwgPSBhLmNjY2xhc3M7XHJcbnZhciBjID1cclxuICAgIChhLnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUudWlQYXJhbSA9IG51bGw7XHJcbiAgICAgICAgICAgIGUudWlUeXBlID0gJHVJUGFyYW0uTGF5ZXJUeXBlLlVJO1xyXG4gICAgICAgICAgICBlLmlzQ2FjaGUgPSAhMTtcclxuICAgICAgICAgICAgZS51aUNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgZS5pc0NhbGxPcGVuID0gITE7XHJcbiAgICAgICAgICAgIGUuaXNDYWxsQ2xvc2UgPSAhMTtcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lclJlc2V0VmlldygpO1xyXG4gICAgICAgICAgICB0aGlzLm9uUmVzZXRWaWV3KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLnJldXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHQuaW5uZXJSZXNldFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIHQub25SZXNldFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIHQuYWRkRXZlbnQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS51bnVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2FsbE9wZW4gPSAhMDtcclxuICAgICAgICAgICAgdGhpcy5pc0NhbGxDbG9zZSA9ICEwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUuaW5uZXJSZXNldFZpZXcgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgICAgICBlLnByb3RvdHlwZS5pbm5lckFkZFRvU2NyZWVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRvU2NyZWVuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpQ2FsbGJhY2sgJiYgdGhpcy51aUNhbGxiYWNrLm9wZW5DYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDYWxsT3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDYWxsT3BlbiA9ICEwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aUNhbGxiYWNrLm9wZW5DYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5pbm5lclJlbW92ZVRvU2NyZWVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVG9TY3JlZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudWlDYWxsYmFjayAmJiB0aGlzLnVpQ2FsbGJhY2suY2xvc2VDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDYWxsQ2xvc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FsbENsb3NlID0gITA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ2FsbGJhY2suY2xvc2VDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5vblJlc2V0VmlldyA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKCkge307XHJcbiAgICAgICAgZS5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgICAgICBlLnByb3RvdHlwZS5hZGRUb1NjcmVlbiA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLnJlbW92ZVRvU2NyZWVuID0gZnVuY3Rpb24gKCkge307XHJcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2xdLCBlKTtcclxuICAgIH0pKGNjLkNvbXBvbmVudCkpO1xyXG5leHBvcnRzLlVJVmlldyA9IGM7XHJcbiJdfQ==