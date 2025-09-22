
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/BaseGun.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dee6eYSEyVNtL7HfYbXDRM8', 'BaseGun');
// game_script/scripts/BaseGun.js

"use strict";

var o = function () {
  function t(t) {
    this.pointNode = null;
    this.timeLeft = 0;
    this.isAttacking = !1;
    this.count = 0;
    this.skillId = 1;
    this.releaseing = !1;
    this.schedules = [];
    this.pointNode = t;
  }

  t.prototype.schedulesOnce = function (t, e) {
    this.schedules.push({
      cb: t,
      sec: e
    });
  };

  t.prototype.updateF = function (t) {
    this.count = this.schedules.length;

    for (var e = 0; e < this.count; e++) {
      var i = this.schedules.shift();
      i.sec = i.sec - t;
      i.sec <= 0 ? i.cb() : this.schedules.push(i);
    }
  };

  return t;
}();

exports["default"] = o;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJhc2VHdW4uanMiXSwibmFtZXMiOlsibyIsInQiLCJwb2ludE5vZGUiLCJ0aW1lTGVmdCIsImlzQXR0YWNraW5nIiwiY291bnQiLCJza2lsbElkIiwicmVsZWFzZWluZyIsInNjaGVkdWxlcyIsInByb3RvdHlwZSIsInNjaGVkdWxlc09uY2UiLCJlIiwicHVzaCIsImNiIiwic2VjIiwidXBkYXRlRiIsImxlbmd0aCIsImkiLCJzaGlmdCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxDQUFXQSxDQUFYLEVBQWM7SUFDVixLQUFLQyxTQUFMLEdBQWlCLElBQWpCO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQixDQUFoQjtJQUNBLEtBQUtDLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQjtJQUNBLEtBQUtDLEtBQUwsR0FBYSxDQUFiO0lBQ0EsS0FBS0MsT0FBTCxHQUFlLENBQWY7SUFDQSxLQUFLQyxVQUFMLEdBQWtCLENBQUMsQ0FBbkI7SUFDQSxLQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0lBQ0EsS0FBS04sU0FBTCxHQUFpQkQsQ0FBakI7RUFDSDs7RUFDREEsQ0FBQyxDQUFDUSxTQUFGLENBQVlDLGFBQVosR0FBNEIsVUFBVVQsQ0FBVixFQUFhVSxDQUFiLEVBQWdCO0lBQ3hDLEtBQUtILFNBQUwsQ0FBZUksSUFBZixDQUFvQjtNQUNoQkMsRUFBRSxFQUFFWixDQURZO01BRWhCYSxHQUFHLEVBQUVIO0lBRlcsQ0FBcEI7RUFJSCxDQUxEOztFQU1BVixDQUFDLENBQUNRLFNBQUYsQ0FBWU0sT0FBWixHQUFzQixVQUFVZCxDQUFWLEVBQWE7SUFDL0IsS0FBS0ksS0FBTCxHQUFhLEtBQUtHLFNBQUwsQ0FBZVEsTUFBNUI7O0lBQ0EsS0FBSyxJQUFJTCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtOLEtBQXpCLEVBQWdDTSxDQUFDLEVBQWpDLEVBQXFDO01BQ2pDLElBQUlNLENBQUMsR0FBRyxLQUFLVCxTQUFMLENBQWVVLEtBQWYsRUFBUjtNQUNBRCxDQUFDLENBQUNILEdBQUYsR0FBUUcsQ0FBQyxDQUFDSCxHQUFGLEdBQVFiLENBQWhCO01BQ0FnQixDQUFDLENBQUNILEdBQUYsSUFBUyxDQUFULEdBQWFHLENBQUMsQ0FBQ0osRUFBRixFQUFiLEdBQXNCLEtBQUtMLFNBQUwsQ0FBZUksSUFBZixDQUFvQkssQ0FBcEIsQ0FBdEI7SUFDSDtFQUNKLENBUEQ7O0VBUUEsT0FBT2hCLENBQVA7QUFDSCxDQTFCTyxFQUFSOztBQTJCQWtCLE9BQU8sV0FBUCxHQUFrQm5CLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KHQpIHtcclxuICAgICAgICB0aGlzLnBvaW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50aW1lTGVmdCA9IDA7XHJcbiAgICAgICAgdGhpcy5pc0F0dGFja2luZyA9ICExO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2tpbGxJZCA9IDE7XHJcbiAgICAgICAgdGhpcy5yZWxlYXNlaW5nID0gITE7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnBvaW50Tm9kZSA9IHQ7XHJcbiAgICB9XHJcbiAgICB0LnByb3RvdHlwZS5zY2hlZHVsZXNPbmNlID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlcy5wdXNoKHtcclxuICAgICAgICAgICAgY2I6IHQsXHJcbiAgICAgICAgICAgIHNlYzogZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLnVwZGF0ZUYgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSB0aGlzLnNjaGVkdWxlcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLmNvdW50OyBlKyspIHtcclxuICAgICAgICAgICAgdmFyIGkgPSB0aGlzLnNjaGVkdWxlcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICBpLnNlYyA9IGkuc2VjIC0gdDtcclxuICAgICAgICAgICAgaS5zZWMgPD0gMCA/IGkuY2IoKSA6IHRoaXMuc2NoZWR1bGVzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0O1xyXG59KSgpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBvO1xyXG4iXX0=