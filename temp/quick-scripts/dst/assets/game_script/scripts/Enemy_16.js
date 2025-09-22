
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_16.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e724UtaDtBLLM63uZBCg/n', 'Enemy_16');
// game_script/scripts/Enemy_16.js

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
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.trajectory, this.config.value[0]);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.thunder, this.config.value[1]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzE2LmpzIl0sIm5hbWVzIjpbIm8iLCIkYmFzZUJ1bGxldCIsInJlcXVpcmUiLCIkYmFzZUVuZW15IiwiJGhlYWx0aEJhciIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJ1IiwiY2NjbGFzcyIsImQiLCJwcm9wZXJ0eSIsInAiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGVhbHRoQmFyIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEVuZW15IiwiaSIsImNhbGwiLCJzdGF0dXNNYW5hZ2VyIiwic3BlY2lhbGl0eUF0a0FkZCIsInNldCIsIkJ1bGxldFNwZWNpYWxpdHkiLCJ0cmFqZWN0b3J5IiwiY29uZmlnIiwidmFsdWUiLCJ0aHVuZGVyIiwiaW5pdCIsImhwIiwiaHBfbnVtIiwic3VmZmVyQXR0YWNrIiwiaXNEaWUiLCJyZW5kZXIiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxVQUFVLEdBQUdGLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlHLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csU0FBRixHQUFjLElBQWQ7SUFDQSxPQUFPSCxDQUFQO0VBQ0g7O0VBQ0RJLFNBQVMsQ0FBQ0osQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ssU0FBRixDQUFZQyxTQUFaLEdBQXdCLFVBQVVOLENBQVYsRUFBYU8sQ0FBYixFQUFnQnJCLENBQWhCLEVBQW1CO0lBQ3ZDLElBQUksS0FBSyxDQUFMLEtBQVdBLENBQWYsRUFBa0I7TUFDZEEsQ0FBQyxHQUFHLENBQUo7SUFDSDs7SUFDRGEsQ0FBQyxDQUFDTSxTQUFGLENBQVlDLFNBQVosQ0FBc0JFLElBQXRCLENBQTJCLElBQTNCLEVBQWlDUixDQUFqQyxFQUFvQ08sQ0FBcEMsRUFBdUNyQixDQUF2QztJQUNBLEtBQUt1QixhQUFMLENBQW1CQyxnQkFBbkIsQ0FBb0NDLEdBQXBDLENBQXdDeEIsV0FBVyxDQUFDeUIsZ0JBQVosQ0FBNkJDLFVBQXJFLEVBQWlGLEtBQUtDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixDQUFqRjtJQUNBLEtBQUtOLGFBQUwsQ0FBbUJDLGdCQUFuQixDQUFvQ0MsR0FBcEMsQ0FBd0N4QixXQUFXLENBQUN5QixnQkFBWixDQUE2QkksT0FBckUsRUFBOEUsS0FBS0YsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLENBQTlFOztJQUNBLElBQUksS0FBS1osU0FBVCxFQUFvQjtNQUNoQixLQUFLQSxTQUFMLENBQWVjLElBQWYsQ0FBb0IsS0FBS1IsYUFBTCxDQUFtQlMsRUFBdkMsRUFBMkNsQixDQUFDLENBQUNtQixNQUE3QztJQUNIO0VBQ0osQ0FWRDs7RUFXQW5CLENBQUMsQ0FBQ0ssU0FBRixDQUFZZSxZQUFaLEdBQTJCLFVBQVVwQixDQUFWLEVBQWFPLENBQWIsRUFBZ0I7SUFDdkMsSUFBSSxLQUFLRSxhQUFMLENBQW1CWSxLQUF2QixFQUE4QjtNQUMxQixPQUFPLENBQUMsQ0FBUjtJQUNIOztJQUNELElBQUluQyxDQUFDLEdBQUdhLENBQUMsQ0FBQ00sU0FBRixDQUFZZSxZQUFaLENBQXlCWixJQUF6QixDQUE4QixJQUE5QixFQUFvQ1IsQ0FBcEMsRUFBdUNPLENBQXZDLENBQVI7O0lBQ0EsSUFBSSxLQUFLSixTQUFULEVBQW9CO01BQ2hCLEtBQUtBLFNBQUwsQ0FBZW1CLE1BQWYsQ0FBc0IsS0FBS2IsYUFBTCxDQUFtQlMsRUFBekM7SUFDSDs7SUFDRCxPQUFPaEMsQ0FBUDtFQUNILENBVEQ7O0VBVUFxQyxVQUFVLENBQUMsQ0FBQzNCLENBQUMsQ0FBQ04sVUFBVSxXQUFYLENBQUYsQ0FBRCxFQUEwQlUsQ0FBQyxDQUFDSyxTQUE1QixFQUF1QyxXQUF2QyxFQUFvRCxLQUFLLENBQXpELENBQVY7O0VBQ0EsT0FBT2tCLFVBQVUsQ0FBQyxDQUFDN0IsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQTlCTyxDQThCTFgsVUFBVSxXQTlCTCxDQUFSOztBQStCQW1DLE9BQU8sV0FBUCxHQUFrQjFCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRiYXNlQnVsbGV0ID0gcmVxdWlyZShcIi4vQmFzZUJ1bGxldFwiKTtcclxudmFyICRiYXNlRW5lbXkgPSByZXF1aXJlKFwiLi9CYXNlRW5lbXlcIik7XHJcbnZhciAkaGVhbHRoQmFyID0gcmVxdWlyZShcIi4vSGVhbHRoQmFyXCIpO1xyXG52YXIgYyA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciB1ID0gYy5jY2NsYXNzO1xyXG52YXIgZCA9IGMucHJvcGVydHk7XHJcbnZhciBwID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUuaGVhbHRoQmFyID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLmluaXRFbmVteSA9IGZ1bmN0aW9uIChlLCBpLCBvKSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xyXG4gICAgICAgICAgICBvID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5wcm90b3R5cGUuaW5pdEVuZW15LmNhbGwodGhpcywgZSwgaSwgbyk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLnNwZWNpYWxpdHlBdGtBZGQuc2V0KCRiYXNlQnVsbGV0LkJ1bGxldFNwZWNpYWxpdHkudHJhamVjdG9yeSwgdGhpcy5jb25maWcudmFsdWVbMF0pO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5zcGVjaWFsaXR5QXRrQWRkLnNldCgkYmFzZUJ1bGxldC5CdWxsZXRTcGVjaWFsaXR5LnRodW5kZXIsIHRoaXMuY29uZmlnLnZhbHVlWzFdKTtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhCYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuaW5pdCh0aGlzLnN0YXR1c01hbmFnZXIuaHAsIGUuaHBfbnVtKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuc3VmZmVyQXR0YWNrID0gZnVuY3Rpb24gKGUsIGkpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0dXNNYW5hZ2VyLmlzRGllKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG8gPSB0LnByb3RvdHlwZS5zdWZmZXJBdHRhY2suY2FsbCh0aGlzLCBlLCBpKTtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhCYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIucmVuZGVyKHRoaXMuc3RhdHVzTWFuYWdlci5ocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW2QoJGhlYWx0aEJhci5kZWZhdWx0KV0sIGUucHJvdG90eXBlLCBcImhlYWx0aEJhclwiLCB2b2lkIDApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3VdLCBlKTtcclxufSkoJGJhc2VFbmVteS5kZWZhdWx0KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcDtcclxuIl19