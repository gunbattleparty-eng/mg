
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_24.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9463328pOxMC6ztzccoMVl5', 'Enemy_24');
// game_script/scripts/Enemy_24.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $enemy_23 = require("./Enemy_23");

var l = cc._decorator;
var c = l.ccclass;
var u = (l.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.initSpeed = 0;
    e.speedTime = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.sufferAtk = function (e) {
    return !!t.prototype.sufferAtk.call(this, e) || (e.skillSpecialitys.includes($baseBullet.BulletSpeciality.thunder) && (this.speedTime <= 0 && (this.initSpeed = this.statusManager.initSpeed, this.statusManager.initSpeed = Math.floor(this.statusManager.initSpeed * (1 + this.config.value[3])), this.statusManager.tryRecoverSpeed()), this.speedTime = 3), !1);
  };

  e.prototype.move = function (e) {
    if (this.speedTime > 0) {
      this.speedTime -= e;

      if (this.speedTime <= 0) {
        this.closeSpeed();
      }
    }

    t.prototype.move.call(this, e);
  };

  e.prototype.closeSpeed = function () {
    this.statusManager.initSpeed = this.initSpeed;
    this.statusManager.tryRecoverSpeed();
  };

  return __decorate([c], e);
}($enemy_23["default"]));
exports["default"] = u;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzI0LmpzIl0sIm5hbWVzIjpbIm8iLCIkYmFzZUJ1bGxldCIsInJlcXVpcmUiLCIkZW5lbXlfMjMiLCJsIiwiY2MiLCJfZGVjb3JhdG9yIiwiYyIsImNjY2xhc3MiLCJ1IiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaW5pdFNwZWVkIiwic3BlZWRUaW1lIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwic3VmZmVyQXRrIiwiY2FsbCIsInNraWxsU3BlY2lhbGl0eXMiLCJpbmNsdWRlcyIsIkJ1bGxldFNwZWNpYWxpdHkiLCJ0aHVuZGVyIiwic3RhdHVzTWFuYWdlciIsIk1hdGgiLCJmbG9vciIsImNvbmZpZyIsInZhbHVlIiwidHJ5UmVjb3ZlclNwZWVkIiwibW92ZSIsImNsb3NlU3BlZWQiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsWUFBRCxDQUF2Qjs7QUFDQSxJQUFJRSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLFNBQUYsR0FBYyxDQUFkO0lBQ0FILENBQUMsQ0FBQ0ksU0FBRixHQUFjLENBQWQ7SUFDQSxPQUFPSixDQUFQO0VBQ0g7O0VBQ0RLLFNBQVMsQ0FBQ0wsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ00sU0FBRixDQUFZQyxTQUFaLEdBQXdCLFVBQVVQLENBQVYsRUFBYTtJQUNqQyxPQUNJLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDTyxTQUFGLENBQVlDLFNBQVosQ0FBc0JDLElBQXRCLENBQTJCLElBQTNCLEVBQWlDUixDQUFqQyxDQUFGLEtBQ0NBLENBQUMsQ0FBQ1MsZ0JBQUYsQ0FBbUJDLFFBQW5CLENBQTRCckIsV0FBVyxDQUFDc0IsZ0JBQVosQ0FBNkJDLE9BQXpELE1BQ0ksS0FBS1IsU0FBTCxJQUFrQixDQUFsQixLQUNLLEtBQUtELFNBQUwsR0FBaUIsS0FBS1UsYUFBTCxDQUFtQlYsU0FBckMsRUFDQSxLQUFLVSxhQUFMLENBQW1CVixTQUFuQixHQUErQlcsSUFBSSxDQUFDQyxLQUFMLENBQzVCLEtBQUtGLGFBQUwsQ0FBbUJWLFNBQW5CLElBQWdDLElBQUksS0FBS2EsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLENBQXBDLENBRDRCLENBRC9CLEVBSUQsS0FBS0osYUFBTCxDQUFtQkssZUFBbkIsRUFMSCxHQU1BLEtBQUtkLFNBQUwsR0FBaUIsQ0FQckIsR0FRRCxDQUFDLENBVEQsQ0FESjtFQVlILENBYkQ7O0VBY0FKLENBQUMsQ0FBQ00sU0FBRixDQUFZYSxJQUFaLEdBQW1CLFVBQVVuQixDQUFWLEVBQWE7SUFDNUIsSUFBSSxLQUFLSSxTQUFMLEdBQWlCLENBQXJCLEVBQXdCO01BQ3BCLEtBQUtBLFNBQUwsSUFBa0JKLENBQWxCOztNQUNBLElBQUksS0FBS0ksU0FBTCxJQUFrQixDQUF0QixFQUF5QjtRQUNyQixLQUFLZ0IsVUFBTDtNQUNIO0lBQ0o7O0lBQ0RyQixDQUFDLENBQUNPLFNBQUYsQ0FBWWEsSUFBWixDQUFpQlgsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJSLENBQTVCO0VBQ0gsQ0FSRDs7RUFTQUEsQ0FBQyxDQUFDTSxTQUFGLENBQVljLFVBQVosR0FBeUIsWUFBWTtJQUNqQyxLQUFLUCxhQUFMLENBQW1CVixTQUFuQixHQUErQixLQUFLQSxTQUFwQztJQUNBLEtBQUtVLGFBQUwsQ0FBbUJLLGVBQW5CO0VBQ0gsQ0FIRDs7RUFJQSxPQUFPRyxVQUFVLENBQUMsQ0FBQzFCLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0FwQ0QsQ0FvQ0dULFNBQVMsV0FwQ1osQ0FGQyxDQUFMO0FBdUNBK0IsT0FBTyxXQUFQLEdBQWtCekIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJGJhc2VCdWxsZXQgPSByZXF1aXJlKFwiLi9CYXNlQnVsbGV0XCIpO1xyXG52YXIgJGVuZW15XzIzID0gcmVxdWlyZShcIi4vRW5lbXlfMjNcIik7XHJcbnZhciBsID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGMgPSBsLmNjY2xhc3M7XHJcbnZhciB1ID1cclxuICAgIChsLnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUuaW5pdFNwZWVkID0gMDtcclxuICAgICAgICAgICAgZS5zcGVlZFRpbWUgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgICAgIGUucHJvdG90eXBlLnN1ZmZlckF0ayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAhIXQucHJvdG90eXBlLnN1ZmZlckF0ay5jYWxsKHRoaXMsIGUpIHx8XHJcbiAgICAgICAgICAgICAgICAoZS5za2lsbFNwZWNpYWxpdHlzLmluY2x1ZGVzKCRiYXNlQnVsbGV0LkJ1bGxldFNwZWNpYWxpdHkudGh1bmRlcikgJiZcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zcGVlZFRpbWUgPD0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMuaW5pdFNwZWVkID0gdGhpcy5zdGF0dXNNYW5hZ2VyLmluaXRTcGVlZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXR1c01hbmFnZXIuaW5pdFNwZWVkID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5pbml0U3BlZWQgKiAoMSArIHRoaXMuY29uZmlnLnZhbHVlWzNdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLnRyeVJlY292ZXJTcGVlZCgpKSxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zcGVlZFRpbWUgPSAzKSksXHJcbiAgICAgICAgICAgICAgICAhMSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGVlZFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkVGltZSAtPSBlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWRUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU3BlZWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0LnByb3RvdHlwZS5tb3ZlLmNhbGwodGhpcywgZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5jbG9zZVNwZWVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuaW5pdFNwZWVkID0gdGhpcy5pbml0U3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci50cnlSZWNvdmVyU3BlZWQoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtjXSwgZSk7XHJcbiAgICB9KSgkZW5lbXlfMjMuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB1O1xyXG4iXX0=