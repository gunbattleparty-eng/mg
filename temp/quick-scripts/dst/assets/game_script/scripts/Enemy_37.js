
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_37.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69901ITWr9OCYS40fs25MSV', 'Enemy_37');
// game_script/scripts/Enemy_37.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $baseEnemy = require("./BaseEnemy");

var $enemyStatus = require("./EnemyStatus");

var $healthBar = require("./HealthBar");

var u = cc._decorator;
var d = u.ccclass;
var p = u.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.healthBar = null;
    e.immunity = [$enemyStatus.EnemyDebuffType.BACK, $enemyStatus.EnemyDebuffType.FREEZE, $enemyStatus.EnemyDebuffType.PARALYSIS, $enemyStatus.EnemyDebuffType.SLOW,, $enemyStatus.EnemyDebuffType.STUN];
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.physics, this.config.value[0]);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.wind, this.config.value[1]);

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

  e.prototype.sufferDebuff = function (e) {
    if (!this.immunity.includes(e.type)) {
      t.prototype.sufferDebuff.call(this, e);
    }
  };

  e.prototype.addAdsorb = function () {};

  e.prototype.removeAdsorb = function () {};

  __decorate([p($healthBar["default"])], e.prototype, "healthBar", void 0);

  return __decorate([d], e);
}($baseEnemy["default"]);

exports["default"] = f;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzM3LmpzIl0sIm5hbWVzIjpbIm8iLCIkYmFzZUJ1bGxldCIsInJlcXVpcmUiLCIkYmFzZUVuZW15IiwiJGVuZW15U3RhdHVzIiwiJGhlYWx0aEJhciIsInUiLCJjYyIsIl9kZWNvcmF0b3IiLCJkIiwiY2NjbGFzcyIsInAiLCJwcm9wZXJ0eSIsImYiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGVhbHRoQmFyIiwiaW1tdW5pdHkiLCJFbmVteURlYnVmZlR5cGUiLCJCQUNLIiwiRlJFRVpFIiwiUEFSQUxZU0lTIiwiU0xPVyIsIlNUVU4iLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0RW5lbXkiLCJpIiwiY2FsbCIsInN0YXR1c01hbmFnZXIiLCJzcGVjaWFsaXR5QXRrQWRkIiwic2V0IiwiQnVsbGV0U3BlY2lhbGl0eSIsInBoeXNpY3MiLCJjb25maWciLCJ2YWx1ZSIsIndpbmQiLCJpbml0IiwiaHAiLCJocF9udW0iLCJzdWZmZXJBdHRhY2siLCJpc0RpZSIsInJlbmRlciIsInN1ZmZlckRlYnVmZiIsImluY2x1ZGVzIiwidHlwZSIsImFkZEFkc29yYiIsInJlbW92ZUFkc29yYiIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlFLFlBQVksR0FBR0YsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUcsVUFBVSxHQUFHSCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJSSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMs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QTJCLFlBQVksQ0FBRSxDQUF6Qzs7RUFDQUMsVUFBVSxDQUFDLENBQUN2QyxDQUFDLENBQUNOLFVBQVUsV0FBWCxDQUFGLENBQUQsRUFBMEJVLENBQUMsQ0FBQ1ksU0FBNUIsRUFBdUMsV0FBdkMsRUFBb0QsS0FBSyxDQUF6RCxDQUFWOztFQUNBLE9BQU91QixVQUFVLENBQUMsQ0FBQ3pDLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0E3Q08sQ0E2Q0xaLFVBQVUsV0E3Q0wsQ0FBUjs7QUE4Q0FnRCxPQUFPLFdBQVAsR0FBa0J0QyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciAkYmFzZUVuZW15ID0gcmVxdWlyZShcIi4vQmFzZUVuZW15XCIpO1xyXG52YXIgJGVuZW15U3RhdHVzID0gcmVxdWlyZShcIi4vRW5lbXlTdGF0dXNcIik7XHJcbnZhciAkaGVhbHRoQmFyID0gcmVxdWlyZShcIi4vSGVhbHRoQmFyXCIpO1xyXG52YXIgdSA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBkID0gdS5jY2NsYXNzO1xyXG52YXIgcCA9IHUucHJvcGVydHk7XHJcbnZhciBmID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUuaGVhbHRoQmFyID0gbnVsbDtcclxuICAgICAgICBlLmltbXVuaXR5ID0gW1xyXG4gICAgICAgICAgICAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLkJBQ0ssXHJcbiAgICAgICAgICAgICRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuRlJFRVpFLFxyXG4gICAgICAgICAgICAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLlBBUkFMWVNJUyxcclxuICAgICAgICAgICAgJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5TTE9XLFxyXG4gICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuU1RVTlxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLnByb3RvdHlwZS5pbml0RW5lbXkgPSBmdW5jdGlvbiAoZSwgaSwgbykge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IG8pIHtcclxuICAgICAgICAgICAgbyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQucHJvdG90eXBlLmluaXRFbmVteS5jYWxsKHRoaXMsIGUsIGksIG8pO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5zcGVjaWFsaXR5QXRrQWRkLnNldCgkYmFzZUJ1bGxldC5CdWxsZXRTcGVjaWFsaXR5LnBoeXNpY3MsIHRoaXMuY29uZmlnLnZhbHVlWzBdKTtcclxuICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuc3BlY2lhbGl0eUF0a0FkZC5zZXQoJGJhc2VCdWxsZXQuQnVsbGV0U3BlY2lhbGl0eS53aW5kLCB0aGlzLmNvbmZpZy52YWx1ZVsxXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmluaXQodGhpcy5zdGF0dXNNYW5hZ2VyLmhwLCBlLmhwX251bSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnN1ZmZlckF0dGFjayA9IGZ1bmN0aW9uIChlLCBpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzTWFuYWdlci5pc0RpZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gITE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvID0gdC5wcm90b3R5cGUuc3VmZmVyQXR0YWNrLmNhbGwodGhpcywgZSwgaSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLnJlbmRlcih0aGlzLnN0YXR1c01hbmFnZXIuaHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdWZmZXJEZWJ1ZmYgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbW11bml0eS5pbmNsdWRlcyhlLnR5cGUpKSB7XHJcbiAgICAgICAgICAgIHQucHJvdG90eXBlLnN1ZmZlckRlYnVmZi5jYWxsKHRoaXMsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5hZGRBZHNvcmIgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgIGUucHJvdG90eXBlLnJlbW92ZUFkc29yYiA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgX19kZWNvcmF0ZShbcCgkaGVhbHRoQmFyLmRlZmF1bHQpXSwgZS5wcm90b3R5cGUsIFwiaGVhbHRoQmFyXCIsIHZvaWQgMCk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbZF0sIGUpO1xyXG59KSgkYmFzZUVuZW15LmRlZmF1bHQpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBmO1xyXG4iXX0=