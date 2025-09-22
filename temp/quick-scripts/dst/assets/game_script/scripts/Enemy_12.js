
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_12.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7b46V4ildBX4eoIEsz5P2j', 'Enemy_12');
// game_script/scripts/Enemy_12.js

"use strict";

var o;

var $enemy_11 = require("./Enemy_11");

var $healthBar = require("./HealthBar");

var l = cc._decorator;
var c = l.ccclass;
var u = l.property;

var d = function (t) {
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

  __decorate([u($healthBar["default"])], e.prototype, "healthBar", void 0);

  return __decorate([c], e);
}($enemy_11["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzEyLmpzIl0sIm5hbWVzIjpbIm8iLCIkZW5lbXlfMTEiLCJyZXF1aXJlIiwiJGhlYWx0aEJhciIsImwiLCJjYyIsIl9kZWNvcmF0b3IiLCJjIiwiY2NjbGFzcyIsInUiLCJwcm9wZXJ0eSIsImQiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGVhbHRoQmFyIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEVuZW15IiwiaSIsImNhbGwiLCJpbml0Iiwic3RhdHVzTWFuYWdlciIsImhwIiwiaHBfbnVtIiwic3VmZmVyQXR0YWNrIiwiaXNEaWUiLCJyZW5kZXIiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLFNBQUYsR0FBYyxJQUFkO0lBQ0EsT0FBT0gsQ0FBUDtFQUNIOztFQUNESSxTQUFTLENBQUNKLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNLLFNBQUYsQ0FBWUMsU0FBWixHQUF3QixVQUFVTixDQUFWLEVBQWFPLENBQWIsRUFBZ0JwQixDQUFoQixFQUFtQjtJQUN2QyxJQUFJLEtBQUssQ0FBTCxLQUFXQSxDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRyxDQUFKO0lBQ0g7O0lBQ0RZLENBQUMsQ0FBQ00sU0FBRixDQUFZQyxTQUFaLENBQXNCRSxJQUF0QixDQUEyQixJQUEzQixFQUFpQ1IsQ0FBakMsRUFBb0NPLENBQXBDLEVBQXVDcEIsQ0FBdkM7O0lBQ0EsSUFBSSxLQUFLZ0IsU0FBVCxFQUFvQjtNQUNoQixLQUFLQSxTQUFMLENBQWVNLElBQWYsQ0FBb0IsS0FBS0MsYUFBTCxDQUFtQkMsRUFBdkMsRUFBMkNYLENBQUMsQ0FBQ1ksTUFBN0M7SUFDSDtFQUNKLENBUkQ7O0VBU0FaLENBQUMsQ0FBQ0ssU0FBRixDQUFZUSxZQUFaLEdBQTJCLFVBQVViLENBQVYsRUFBYU8sQ0FBYixFQUFnQjtJQUN2QyxJQUFJLEtBQUtHLGFBQUwsQ0FBbUJJLEtBQXZCLEVBQThCO01BQzFCLE9BQU8sQ0FBQyxDQUFSO0lBQ0g7O0lBQ0QsSUFBSTNCLENBQUMsR0FBR1ksQ0FBQyxDQUFDTSxTQUFGLENBQVlRLFlBQVosQ0FBeUJMLElBQXpCLENBQThCLElBQTlCLEVBQW9DUixDQUFwQyxFQUF1Q08sQ0FBdkMsQ0FBUjs7SUFDQSxJQUFJLEtBQUtKLFNBQVQsRUFBb0I7TUFDaEIsS0FBS0EsU0FBTCxDQUFlWSxNQUFmLENBQXNCLEtBQUtMLGFBQUwsQ0FBbUJDLEVBQXpDO0lBQ0g7O0lBQ0QsT0FBT3hCLENBQVA7RUFDSCxDQVREOztFQVVBNkIsVUFBVSxDQUFDLENBQUNwQixDQUFDLENBQUNOLFVBQVUsV0FBWCxDQUFGLENBQUQsRUFBMEJVLENBQUMsQ0FBQ0ssU0FBNUIsRUFBdUMsV0FBdkMsRUFBb0QsS0FBSyxDQUF6RCxDQUFWOztFQUNBLE9BQU9XLFVBQVUsQ0FBQyxDQUFDdEIsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQTVCTyxDQTRCTFosU0FBUyxXQTVCSixDQUFSOztBQTZCQTZCLE9BQU8sV0FBUCxHQUFrQm5CLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRlbmVteV8xMSA9IHJlcXVpcmUoXCIuL0VuZW15XzExXCIpO1xyXG52YXIgJGhlYWx0aEJhciA9IHJlcXVpcmUoXCIuL0hlYWx0aEJhclwiKTtcclxudmFyIGwgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgYyA9IGwuY2NjbGFzcztcclxudmFyIHUgPSBsLnByb3BlcnR5O1xyXG52YXIgZCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLmhlYWx0aEJhciA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLnByb3RvdHlwZS5pbml0RW5lbXkgPSBmdW5jdGlvbiAoZSwgaSwgbykge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IG8pIHtcclxuICAgICAgICAgICAgbyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQucHJvdG90eXBlLmluaXRFbmVteS5jYWxsKHRoaXMsIGUsIGksIG8pO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5pbml0KHRoaXMuc3RhdHVzTWFuYWdlci5ocCwgZS5ocF9udW0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdWZmZXJBdHRhY2sgPSBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1c01hbmFnZXIuaXNEaWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbyA9IHQucHJvdG90eXBlLnN1ZmZlckF0dGFjay5jYWxsKHRoaXMsIGUsIGkpO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5yZW5kZXIodGhpcy5zdGF0dXNNYW5hZ2VyLmhwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbdSgkaGVhbHRoQmFyLmRlZmF1bHQpXSwgZS5wcm90b3R5cGUsIFwiaGVhbHRoQmFyXCIsIHZvaWQgMCk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbY10sIGUpO1xyXG59KSgkZW5lbXlfMTEuZGVmYXVsdCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGQ7XHJcbiJdfQ==