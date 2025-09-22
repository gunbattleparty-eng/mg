
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_36.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21383igwWZJRYa0D1G01nut', 'Enemy_36');
// game_script/scripts/Enemy_36.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $baseEnemy = require("./BaseEnemy");

var $healthBar = require("./HealthBar");

var c = cc._decorator;
var u = c.ccclass;
var d = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.healthBar = null;
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.physics, this.config.value[0]);

    if (this.healthBar) {
      this.healthBar.init(this.statusManager.hp, e.hp_num);
    }
  };

  e.prototype.sufferAttack = function (e, i) {
    if (this.statusManager.isDie) {
      return !1;
    }

    var o = t.prototype.sufferAttack.call(this, e, i);

    if (this.healthBar) {
      this.healthBar.render(this.statusManager.hp);
    }

    return o;
  };

  __decorate([d($healthBar["default"])], e.prototype, "healthBar", void 0);

  return __decorate([u], e);
}($baseEnemy["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzM2LmpzIl0sIm5hbWVzIjpbIm8iLCIkYmFzZUJ1bGxldCIsInJlcXVpcmUiLCIkYmFzZUVuZW15IiwiJGhlYWx0aEJhciIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJ1IiwiY2NjbGFzcyIsImQiLCJwcm9wZXJ0eSIsInAiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGVhbHRoQmFyIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEVuZW15IiwiaSIsImNhbGwiLCJzdGF0dXNNYW5hZ2VyIiwic3BlY2lhbGl0eUF0a0FkZCIsInNldCIsIkJ1bGxldFNwZWNpYWxpdHkiLCJwaHlzaWNzIiwiY29uZmlnIiwidmFsdWUiLCJpbml0IiwiaHAiLCJocF9udW0iLCJzdWZmZXJBdHRhY2siLCJpc0RpZSIsInJlbmRlciIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlFLFVBQVUsR0FBR0YsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxTQUFGLEdBQWMsSUFBZDtJQUNBLE9BQU9ILENBQVA7RUFDSDs7RUFDREksU0FBUyxDQUFDSixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSyxTQUFGLENBQVlDLFNBQVosR0FBd0IsVUFBVU4sQ0FBVixFQUFhTyxDQUFiLEVBQWdCckIsQ0FBaEIsRUFBbUI7SUFDdkMsSUFBSSxLQUFLLENBQUwsS0FBV0EsQ0FBZixFQUFrQjtNQUNkQSxDQUFDLEdBQUcsQ0FBSjtJQUNIOztJQUNEYSxDQUFDLENBQUNNLFNBQUYsQ0FBWUMsU0FBWixDQUFzQkUsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUNSLENBQWpDLEVBQW9DTyxDQUFwQyxFQUF1Q3JCLENBQXZDO0lBQ0EsS0FBS3VCLGFBQUwsQ0FBbUJDLGdCQUFuQixDQUFvQ0MsR0FBcEMsQ0FBd0N4QixXQUFXLENBQUN5QixnQkFBWixDQUE2QkMsT0FBckUsRUFBOEUsS0FBS0MsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLENBQTlFOztJQUNBLElBQUksS0FBS1osU0FBVCxFQUFvQjtNQUNoQixLQUFLQSxTQUFMLENBQWVhLElBQWYsQ0FBb0IsS0FBS1AsYUFBTCxDQUFtQlEsRUFBdkMsRUFBMkNqQixDQUFDLENBQUNrQixNQUE3QztJQUNIO0VBQ0osQ0FURDs7RUFVQWxCLENBQUMsQ0FBQ0ssU0FBRixDQUFZYyxZQUFaLEdBQTJCLFVBQVVuQixDQUFWLEVBQWFPLENBQWIsRUFBZ0I7SUFDdkMsSUFBSSxLQUFLRSxhQUFMLENBQW1CVyxLQUF2QixFQUE4QjtNQUMxQixPQUFPLENBQUMsQ0FBUjtJQUNIOztJQUNELElBQUlsQyxDQUFDLEdBQUdhLENBQUMsQ0FBQ00sU0FBRixDQUFZYyxZQUFaLENBQXlCWCxJQUF6QixDQUE4QixJQUE5QixFQUFvQ1IsQ0FBcEMsRUFBdUNPLENBQXZDLENBQVI7O0lBQ0EsSUFBSSxLQUFLSixTQUFULEVBQW9CO01BQ2hCLEtBQUtBLFNBQUwsQ0FBZWtCLE1BQWYsQ0FBc0IsS0FBS1osYUFBTCxDQUFtQlEsRUFBekM7SUFDSDs7SUFDRCxPQUFPL0IsQ0FBUDtFQUNILENBVEQ7O0VBVUFvQyxVQUFVLENBQUMsQ0FBQzFCLENBQUMsQ0FBQ04sVUFBVSxXQUFYLENBQUYsQ0FBRCxFQUEwQlUsQ0FBQyxDQUFDSyxTQUE1QixFQUF1QyxXQUF2QyxFQUFvRCxLQUFLLENBQXpELENBQVY7O0VBQ0EsT0FBT2lCLFVBQVUsQ0FBQyxDQUFDNUIsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQTdCTyxDQTZCTFgsVUFBVSxXQTdCTCxDQUFSOztBQThCQWtDLE9BQU8sV0FBUCxHQUFrQnpCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRiYXNlQnVsbGV0ID0gcmVxdWlyZShcIi4vQmFzZUJ1bGxldFwiKTtcclxudmFyICRiYXNlRW5lbXkgPSByZXF1aXJlKFwiLi9CYXNlRW5lbXlcIik7XHJcbnZhciAkaGVhbHRoQmFyID0gcmVxdWlyZShcIi4vSGVhbHRoQmFyXCIpO1xyXG52YXIgYyA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciB1ID0gYy5jY2NsYXNzO1xyXG52YXIgZCA9IGMucHJvcGVydHk7XHJcbnZhciBwID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUuaGVhbHRoQmFyID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLmluaXRFbmVteSA9IGZ1bmN0aW9uIChlLCBpLCBvKSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xyXG4gICAgICAgICAgICBvID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5wcm90b3R5cGUuaW5pdEVuZW15LmNhbGwodGhpcywgZSwgaSwgbyk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLnNwZWNpYWxpdHlBdGtBZGQuc2V0KCRiYXNlQnVsbGV0LkJ1bGxldFNwZWNpYWxpdHkucGh5c2ljcywgdGhpcy5jb25maWcudmFsdWVbMF0pO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5pbml0KHRoaXMuc3RhdHVzTWFuYWdlci5ocCwgZS5ocF9udW0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdWZmZXJBdHRhY2sgPSBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1c01hbmFnZXIuaXNEaWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbyA9IHQucHJvdG90eXBlLnN1ZmZlckF0dGFjay5jYWxsKHRoaXMsIGUsIGkpO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5yZW5kZXIodGhpcy5zdGF0dXNNYW5hZ2VyLmhwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbZCgkaGVhbHRoQmFyLmRlZmF1bHQpXSwgZS5wcm90b3R5cGUsIFwiaGVhbHRoQmFyXCIsIHZvaWQgMCk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbdV0sIGUpO1xyXG59KSgkYmFzZUVuZW15LmRlZmF1bHQpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBwO1xyXG4iXX0=