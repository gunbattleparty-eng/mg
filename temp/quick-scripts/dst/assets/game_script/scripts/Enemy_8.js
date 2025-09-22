
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_8.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2178cm1P5F1K9aa3xNRcOh', 'Enemy_8');
// game_script/scripts/Enemy_8.js

"use strict";

var o;

var $baseEnemy = require("./BaseEnemy");

var $healthBar = require("./HealthBar");

var l = cc._decorator;
var c = l.ccclass;
var u = l.property;
var d = new cc.Vec3();

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
    this.healthBar.init(this.statusManager.hp, e.hp_num);
  };

  e.prototype.sufferAttack = function (e, i) {
    if (this.statusManager.isDie) {
      return !1;
    }

    var o = t.prototype.sufferAttack.call(this, e, i);
    this.healthBar.render(this.statusManager.hp);
    return o;
  };

  e.prototype.getAnimPos = function () {
    d.y = this.skin.node.height / 2;
    return this.node.position.add(d);
  };

  __decorate([u($healthBar["default"])], e.prototype, "healthBar", void 0);

  return __decorate([c], e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzguanMiXSwibmFtZXMiOlsibyIsIiRiYXNlRW5lbXkiLCJyZXF1aXJlIiwiJGhlYWx0aEJhciIsImwiLCJjYyIsIl9kZWNvcmF0b3IiLCJjIiwiY2NjbGFzcyIsInUiLCJwcm9wZXJ0eSIsImQiLCJWZWMzIiwicCIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoZWFsdGhCYXIiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0RW5lbXkiLCJpIiwiY2FsbCIsImluaXQiLCJzdGF0dXNNYW5hZ2VyIiwiaHAiLCJocF9udW0iLCJzdWZmZXJBdHRhY2siLCJpc0RpZSIsInJlbmRlciIsImdldEFuaW1Qb3MiLCJ5Iiwic2tpbiIsIm5vZGUiLCJoZWlnaHQiLCJwb3NpdGlvbiIsImFkZCIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlFLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjtBQUNBLElBQUlDLENBQUMsR0FBRyxJQUFJTixFQUFFLENBQUNPLElBQVAsRUFBUjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csU0FBRixHQUFjLElBQWQ7SUFDQSxPQUFPSCxDQUFQO0VBQ0g7O0VBQ0RJLFNBQVMsQ0FBQ0osQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ssU0FBRixDQUFZQyxTQUFaLEdBQXdCLFVBQVVOLENBQVYsRUFBYU8sQ0FBYixFQUFnQnRCLENBQWhCLEVBQW1CO0lBQ3ZDLElBQUksS0FBSyxDQUFMLEtBQVdBLENBQWYsRUFBa0I7TUFDZEEsQ0FBQyxHQUFHLENBQUo7SUFDSDs7SUFDRGMsQ0FBQyxDQUFDTSxTQUFGLENBQVlDLFNBQVosQ0FBc0JFLElBQXRCLENBQTJCLElBQTNCLEVBQWlDUixDQUFqQyxFQUFvQ08sQ0FBcEMsRUFBdUN0QixDQUF2QztJQUNBLEtBQUtrQixTQUFMLENBQWVNLElBQWYsQ0FBb0IsS0FBS0MsYUFBTCxDQUFtQkMsRUFBdkMsRUFBMkNYLENBQUMsQ0FBQ1ksTUFBN0M7RUFDSCxDQU5EOztFQU9BWixDQUFDLENBQUNLLFNBQUYsQ0FBWVEsWUFBWixHQUEyQixVQUFVYixDQUFWLEVBQWFPLENBQWIsRUFBZ0I7SUFDdkMsSUFBSSxLQUFLRyxhQUFMLENBQW1CSSxLQUF2QixFQUE4QjtNQUMxQixPQUFPLENBQUMsQ0FBUjtJQUNIOztJQUNELElBQUk3QixDQUFDLEdBQUdjLENBQUMsQ0FBQ00sU0FBRixDQUFZUSxZQUFaLENBQXlCTCxJQUF6QixDQUE4QixJQUE5QixFQUFvQ1IsQ0FBcEMsRUFBdUNPLENBQXZDLENBQVI7SUFDQSxLQUFLSixTQUFMLENBQWVZLE1BQWYsQ0FBc0IsS0FBS0wsYUFBTCxDQUFtQkMsRUFBekM7SUFDQSxPQUFPMUIsQ0FBUDtFQUNILENBUEQ7O0VBUUFlLENBQUMsQ0FBQ0ssU0FBRixDQUFZVyxVQUFaLEdBQXlCLFlBQVk7SUFDakNwQixDQUFDLENBQUNxQixDQUFGLEdBQU0sS0FBS0MsSUFBTCxDQUFVQyxJQUFWLENBQWVDLE1BQWYsR0FBd0IsQ0FBOUI7SUFDQSxPQUFPLEtBQUtELElBQUwsQ0FBVUUsUUFBVixDQUFtQkMsR0FBbkIsQ0FBdUIxQixDQUF2QixDQUFQO0VBQ0gsQ0FIRDs7RUFJQTJCLFVBQVUsQ0FBQyxDQUFDN0IsQ0FBQyxDQUFDTixVQUFVLFdBQVgsQ0FBRixDQUFELEVBQTBCWSxDQUFDLENBQUNLLFNBQTVCLEVBQXVDLFdBQXZDLEVBQW9ELEtBQUssQ0FBekQsQ0FBVjs7RUFDQSxPQUFPa0IsVUFBVSxDQUFDLENBQUMvQixDQUFELENBQUQsRUFBTVEsQ0FBTixDQUFqQjtBQUNILENBNUJPLENBNEJMZCxVQUFVLFdBNUJMLENBQVI7O0FBNkJBc0MsT0FBTyxXQUFQLEdBQWtCMUIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJGJhc2VFbmVteSA9IHJlcXVpcmUoXCIuL0Jhc2VFbmVteVwiKTtcclxudmFyICRoZWFsdGhCYXIgPSByZXF1aXJlKFwiLi9IZWFsdGhCYXJcIik7XHJcbnZhciBsID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGMgPSBsLmNjY2xhc3M7XHJcbnZhciB1ID0gbC5wcm9wZXJ0eTtcclxudmFyIGQgPSBuZXcgY2MuVmVjMygpO1xyXG52YXIgcCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLmhlYWx0aEJhciA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLnByb3RvdHlwZS5pbml0RW5lbXkgPSBmdW5jdGlvbiAoZSwgaSwgbykge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IG8pIHtcclxuICAgICAgICAgICAgbyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQucHJvdG90eXBlLmluaXRFbmVteS5jYWxsKHRoaXMsIGUsIGksIG8pO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLmluaXQodGhpcy5zdGF0dXNNYW5hZ2VyLmhwLCBlLmhwX251bSk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuc3VmZmVyQXR0YWNrID0gZnVuY3Rpb24gKGUsIGkpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0dXNNYW5hZ2VyLmlzRGllKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG8gPSB0LnByb3RvdHlwZS5zdWZmZXJBdHRhY2suY2FsbCh0aGlzLCBlLCBpKTtcclxuICAgICAgICB0aGlzLmhlYWx0aEJhci5yZW5kZXIodGhpcy5zdGF0dXNNYW5hZ2VyLmhwKTtcclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5nZXRBbmltUG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGQueSA9IHRoaXMuc2tpbi5ub2RlLmhlaWdodCAvIDI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoZCk7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbdSgkaGVhbHRoQmFyLmRlZmF1bHQpXSwgZS5wcm90b3R5cGUsIFwiaGVhbHRoQmFyXCIsIHZvaWQgMCk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbY10sIGUpO1xyXG59KSgkYmFzZUVuZW15LmRlZmF1bHQpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBwO1xyXG4iXX0=