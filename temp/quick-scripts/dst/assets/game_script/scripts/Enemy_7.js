
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77a572A6x5LvpBtdvUjSqty', 'Enemy_7');
// game_script/scripts/Enemy_7.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $baseEnemy = require("./BaseEnemy");

var $enemyStatus = require("./EnemyStatus");

var c = cc._decorator;
var u = c.ccclass;
var d = (c.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.fire, this.config.value[1]);
  };

  e.prototype.sufferDebuff = function (t) {
    if (!this.statusManager.isDie || t.type !== $enemyStatus.EnemyDebuffType.BACK) {
      if (t.type === $enemyStatus.EnemyDebuffType.BACK) {
        t.timeLeft = t.timeLeft * (1 - this.config.value[0]);

        if (t.timeLeft <= 0.016) {
          return;
        }
      } else {
        if (t.type === $enemyStatus.EnemyDebuffType.BURN) {
          t.timeLeft *= 2;
        }
      }

      this.statusManager.addDebuff(t);
    }
  };

  return __decorate([u], e);
}($baseEnemy["default"]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzcuanMiXSwibmFtZXMiOlsibyIsIiRiYXNlQnVsbGV0IiwicmVxdWlyZSIsIiRiYXNlRW5lbXkiLCIkZW5lbXlTdGF0dXMiLCJjIiwiY2MiLCJfZGVjb3JhdG9yIiwidSIsImNjY2xhc3MiLCJkIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEVuZW15IiwiaSIsImNhbGwiLCJzdGF0dXNNYW5hZ2VyIiwic3BlY2lhbGl0eUF0a0FkZCIsInNldCIsIkJ1bGxldFNwZWNpYWxpdHkiLCJmaXJlIiwiY29uZmlnIiwidmFsdWUiLCJzdWZmZXJEZWJ1ZmYiLCJpc0RpZSIsInR5cGUiLCJFbmVteURlYnVmZlR5cGUiLCJCQUNLIiwidGltZUxlZnQiLCJCVVJOIiwiYWRkRGVidWZmIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlDLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUUsWUFBWSxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJRyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxPQUFRLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBbkQ7RUFDSDs7RUFDREMsU0FBUyxDQUFDSCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSSxTQUFGLENBQVlDLFNBQVosR0FBd0IsVUFBVUwsQ0FBVixFQUFhTSxDQUFiLEVBQWdCbkIsQ0FBaEIsRUFBbUI7SUFDdkMsSUFBSSxLQUFLLENBQUwsS0FBV0EsQ0FBZixFQUFrQjtNQUNkQSxDQUFDLEdBQUcsQ0FBSjtJQUNIOztJQUNEWSxDQUFDLENBQUNLLFNBQUYsQ0FBWUMsU0FBWixDQUFzQkUsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUNQLENBQWpDLEVBQW9DTSxDQUFwQyxFQUF1Q25CLENBQXZDO0lBQ0EsS0FBS3FCLGFBQUwsQ0FBbUJDLGdCQUFuQixDQUFvQ0MsR0FBcEMsQ0FBd0N0QixXQUFXLENBQUN1QixnQkFBWixDQUE2QkMsSUFBckUsRUFBMkUsS0FBS0MsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLENBQTNFO0VBQ0gsQ0FORDs7RUFPQWQsQ0FBQyxDQUFDSSxTQUFGLENBQVlXLFlBQVosR0FBMkIsVUFBVWhCLENBQVYsRUFBYTtJQUNwQyxJQUFJLENBQUMsS0FBS1MsYUFBTCxDQUFtQlEsS0FBcEIsSUFBNkJqQixDQUFDLENBQUNrQixJQUFGLEtBQVcxQixZQUFZLENBQUMyQixlQUFiLENBQTZCQyxJQUF6RSxFQUErRTtNQUMzRSxJQUFJcEIsQ0FBQyxDQUFDa0IsSUFBRixLQUFXMUIsWUFBWSxDQUFDMkIsZUFBYixDQUE2QkMsSUFBNUMsRUFBa0Q7UUFDOUNwQixDQUFDLENBQUNxQixRQUFGLEdBQWFyQixDQUFDLENBQUNxQixRQUFGLElBQWMsSUFBSSxLQUFLUCxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsQ0FBbEIsQ0FBYjs7UUFDQSxJQUFJZixDQUFDLENBQUNxQixRQUFGLElBQWMsS0FBbEIsRUFBeUI7VUFDckI7UUFDSDtNQUNKLENBTEQsTUFLTztRQUNILElBQUlyQixDQUFDLENBQUNrQixJQUFGLEtBQVcxQixZQUFZLENBQUMyQixlQUFiLENBQTZCRyxJQUE1QyxFQUFrRDtVQUM5Q3RCLENBQUMsQ0FBQ3FCLFFBQUYsSUFBYyxDQUFkO1FBQ0g7TUFDSjs7TUFDRCxLQUFLWixhQUFMLENBQW1CYyxTQUFuQixDQUE2QnZCLENBQTdCO0lBQ0g7RUFDSixDQWREOztFQWVBLE9BQU93QixVQUFVLENBQUMsQ0FBQzVCLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0E1QkQsQ0E0QkdWLFVBQVUsV0E1QmIsQ0FGQyxDQUFMO0FBK0JBa0MsT0FBTyxXQUFQLEdBQWtCM0IsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJGJhc2VCdWxsZXQgPSByZXF1aXJlKFwiLi9CYXNlQnVsbGV0XCIpO1xyXG52YXIgJGJhc2VFbmVteSA9IHJlcXVpcmUoXCIuL0Jhc2VFbmVteVwiKTtcclxudmFyICRlbmVteVN0YXR1cyA9IHJlcXVpcmUoXCIuL0VuZW15U3RhdHVzXCIpO1xyXG52YXIgYyA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciB1ID0gYy5jY2NsYXNzO1xyXG52YXIgZCA9XHJcbiAgICAoYy5wcm9wZXJ0eSxcclxuICAgIChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5pbml0RW5lbXkgPSBmdW5jdGlvbiAoZSwgaSwgbykge1xyXG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSBvKSB7XHJcbiAgICAgICAgICAgICAgICBvID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0LnByb3RvdHlwZS5pbml0RW5lbXkuY2FsbCh0aGlzLCBlLCBpLCBvKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLnNwZWNpYWxpdHlBdGtBZGQuc2V0KCRiYXNlQnVsbGV0LkJ1bGxldFNwZWNpYWxpdHkuZmlyZSwgdGhpcy5jb25maWcudmFsdWVbMV0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUuc3VmZmVyRGVidWZmID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXR1c01hbmFnZXIuaXNEaWUgfHwgdC50eXBlICE9PSAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLkJBQ0spIHtcclxuICAgICAgICAgICAgICAgIGlmICh0LnR5cGUgPT09ICRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuQkFDSykge1xyXG4gICAgICAgICAgICAgICAgICAgIHQudGltZUxlZnQgPSB0LnRpbWVMZWZ0ICogKDEgLSB0aGlzLmNvbmZpZy52YWx1ZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQudGltZUxlZnQgPD0gMC4wMTYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQudHlwZSA9PT0gJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5CVVJOKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQudGltZUxlZnQgKj0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuYWRkRGVidWZmKHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbdV0sIGUpO1xyXG4gICAgfSkoJGJhc2VFbmVteS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGQ7XHJcbiJdfQ==