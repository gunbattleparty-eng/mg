
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/StartButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd24cdl3U8tHpoesJ7g6CU6w', 'StartButton');
// game_script/scripts/StartButton.js

"use strict";

var o;
var r = cc._decorator;
var a = r.ccclass;
var l = (r.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.delay = 0;
    e.time = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this._material = this.node.getComponent(cc.Sprite).getMaterial(0);
  };

  e.prototype.update = function (t) {
    this.delay >= 0 ? this.delay -= t : this.node.active && this._material && (this.time += t, this.time >= 1.5 && (this.delay = 3, this.time = 0), this._setShaderTime(t));
  };

  e.prototype._setShaderTime = function () {
    this._material.setProperty("rtime", this.time);
  };

  return __decorate([a], e);
}(cc.Component));
exports["default"] = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFN0YXJ0QnV0dG9uLmpzIl0sIm5hbWVzIjpbIm8iLCJyIiwiY2MiLCJfZGVjb3JhdG9yIiwiYSIsImNjY2xhc3MiLCJsIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiZGVsYXkiLCJ0aW1lIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwic3RhcnQiLCJfbWF0ZXJpYWwiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiZ2V0TWF0ZXJpYWwiLCJ1cGRhdGUiLCJhY3RpdmUiLCJfc2V0U2hhZGVyVGltZSIsInNldFByb3BlcnR5IiwiX19kZWNvcmF0ZSIsIkNvbXBvbmVudCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csS0FBRixHQUFVLENBQVY7SUFDQUgsQ0FBQyxDQUFDSSxJQUFGLEdBQVMsQ0FBVDtJQUNBLE9BQU9KLENBQVA7RUFDSDs7RUFDREssU0FBUyxDQUFDTCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDTSxTQUFGLENBQVlDLEtBQVosR0FBb0IsWUFBWTtJQUM1QixLQUFLQyxTQUFMLEdBQWlCLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QmpCLEVBQUUsQ0FBQ2tCLE1BQTFCLEVBQWtDQyxXQUFsQyxDQUE4QyxDQUE5QyxDQUFqQjtFQUNILENBRkQ7O0VBR0FaLENBQUMsQ0FBQ00sU0FBRixDQUFZTyxNQUFaLEdBQXFCLFVBQVVkLENBQVYsRUFBYTtJQUM5QixLQUFLSSxLQUFMLElBQWMsQ0FBZCxHQUNPLEtBQUtBLEtBQUwsSUFBY0osQ0FEckIsR0FFTSxLQUFLVSxJQUFMLENBQVVLLE1BQVYsSUFDQSxLQUFLTixTQURMLEtBRUUsS0FBS0osSUFBTCxJQUFhTCxDQUFkLEVBQWtCLEtBQUtLLElBQUwsSUFBYSxHQUFiLEtBQXNCLEtBQUtELEtBQUwsR0FBYSxDQUFkLEVBQW1CLEtBQUtDLElBQUwsR0FBWSxDQUFwRCxDQUFsQixFQUEyRSxLQUFLVyxjQUFMLENBQW9CaEIsQ0FBcEIsQ0FGNUUsQ0FGTjtFQUtILENBTkQ7O0VBT0FDLENBQUMsQ0FBQ00sU0FBRixDQUFZUyxjQUFaLEdBQTZCLFlBQVk7SUFDckMsS0FBS1AsU0FBTCxDQUFlUSxXQUFmLENBQTJCLE9BQTNCLEVBQW9DLEtBQUtaLElBQXpDO0VBQ0gsQ0FGRDs7RUFHQSxPQUFPYSxVQUFVLENBQUMsQ0FBQ3RCLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0F0QkQsQ0FzQkdQLEVBQUUsQ0FBQ3lCLFNBdEJOLENBRkMsQ0FBTDtBQXlCQUMsT0FBTyxXQUFQLEdBQWtCdEIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgciA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBhID0gci5jY2NsYXNzO1xyXG52YXIgbCA9XHJcbiAgICAoci5wcm9wZXJ0eSxcclxuICAgIChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICBlLmRlbGF5ID0gMDtcclxuICAgICAgICAgICAgZS50aW1lID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZ2V0TWF0ZXJpYWwoMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGF5ID49IDBcclxuICAgICAgICAgICAgICAgID8gKHRoaXMuZGVsYXkgLT0gdClcclxuICAgICAgICAgICAgICAgIDogdGhpcy5ub2RlLmFjdGl2ZSAmJlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLl9tYXRlcmlhbCAmJlxyXG4gICAgICAgICAgICAgICAgICAoKHRoaXMudGltZSArPSB0KSwgdGhpcy50aW1lID49IDEuNSAmJiAoKHRoaXMuZGVsYXkgPSAzKSwgKHRoaXMudGltZSA9IDApKSwgdGhpcy5fc2V0U2hhZGVyVGltZSh0KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5fc2V0U2hhZGVyVGltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJydGltZVwiLCB0aGlzLnRpbWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2FdLCBlKTtcclxuICAgIH0pKGNjLkNvbXBvbmVudCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBsO1xyXG4iXX0=