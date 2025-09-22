
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_35.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77454+c0TRHg7MASxB6TNBN', 'Enemy_35');
// game_script/scripts/Enemy_35.js

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
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.thunder, this.config.value[0]);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.energy, this.config.value[1]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzM1LmpzIl0sIm5hbWVzIjpbIm8iLCIkYmFzZUJ1bGxldCIsInJlcXVpcmUiLCIkYmFzZUVuZW15IiwiJGVuZW15U3RhdHVzIiwiJGhlYWx0aEJhciIsInUiLCJjYyIsIl9kZWNvcmF0b3IiLCJkIiwiY2NjbGFzcyIsInAiLCJwcm9wZXJ0eSIsImYiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGVhbHRoQmFyIiwiaW1tdW5pdHkiLCJFbmVteURlYnVmZlR5cGUiLCJCQUNLIiwiRlJFRVpFIiwiUEFSQUxZU0lTIiwiU0xPVyIsIlNUVU4iLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0RW5lbXkiLCJpIiwiY2FsbCIsInN0YXR1c01hbmFnZXIiLCJzcGVjaWFsaXR5QXRrQWRkIiwic2V0IiwiQnVsbGV0U3BlY2lhbGl0eSIsInRodW5kZXIiLCJjb25maWciLCJ2YWx1ZSIsImVuZXJneSIsImluaXQiLCJocCIsImhwX251bSIsInN1ZmZlckF0dGFjayIsImlzRGllIiwicmVuZGVyIiwic3VmZmVyRGVidWZmIiwiaW5jbHVkZXMiLCJ0eXBlIiwiYWRkQWRzb3JiIiwicmVtb3ZlQWRzb3JiIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlDLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUUsWUFBWSxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJRyxVQUFVLEdBQUdILE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlJLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJ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R0FBMkIsWUFBWSxDQUFFLENBQXpDOztFQUNBQyxVQUFVLENBQUMsQ0FBQ3ZDLENBQUMsQ0FBQ04sVUFBVSxXQUFYLENBQUYsQ0FBRCxFQUEwQlUsQ0FBQyxDQUFDWSxTQUE1QixFQUF1QyxXQUF2QyxFQUFvRCxLQUFLLENBQXpELENBQVY7O0VBQ0EsT0FBT3VCLFVBQVUsQ0FBQyxDQUFDekMsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQTdDTyxDQTZDTFosVUFBVSxXQTdDTCxDQUFSOztBQThDQWdELE9BQU8sV0FBUCxHQUFrQnRDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRiYXNlQnVsbGV0ID0gcmVxdWlyZShcIi4vQmFzZUJ1bGxldFwiKTtcclxudmFyICRiYXNlRW5lbXkgPSByZXF1aXJlKFwiLi9CYXNlRW5lbXlcIik7XHJcbnZhciAkZW5lbXlTdGF0dXMgPSByZXF1aXJlKFwiLi9FbmVteVN0YXR1c1wiKTtcclxudmFyICRoZWFsdGhCYXIgPSByZXF1aXJlKFwiLi9IZWFsdGhCYXJcIik7XHJcbnZhciB1ID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGQgPSB1LmNjY2xhc3M7XHJcbnZhciBwID0gdS5wcm9wZXJ0eTtcclxudmFyIGYgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgZS5oZWFsdGhCYXIgPSBudWxsO1xyXG4gICAgICAgIGUuaW1tdW5pdHkgPSBbXHJcbiAgICAgICAgICAgICRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuQkFDSyxcclxuICAgICAgICAgICAgJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5GUkVFWkUsXHJcbiAgICAgICAgICAgICRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuUEFSQUxZU0lTLFxyXG4gICAgICAgICAgICAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLlNMT1csXHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgICAgJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5TVFVOXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLmluaXRFbmVteSA9IGZ1bmN0aW9uIChlLCBpLCBvKSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xyXG4gICAgICAgICAgICBvID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5wcm90b3R5cGUuaW5pdEVuZW15LmNhbGwodGhpcywgZSwgaSwgbyk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLnNwZWNpYWxpdHlBdGtBZGQuc2V0KCRiYXNlQnVsbGV0LkJ1bGxldFNwZWNpYWxpdHkudGh1bmRlciwgdGhpcy5jb25maWcudmFsdWVbMF0pO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5zcGVjaWFsaXR5QXRrQWRkLnNldCgkYmFzZUJ1bGxldC5CdWxsZXRTcGVjaWFsaXR5LmVuZXJneSwgdGhpcy5jb25maWcudmFsdWVbMV0pO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5pbml0KHRoaXMuc3RhdHVzTWFuYWdlci5ocCwgZS5ocF9udW0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdWZmZXJBdHRhY2sgPSBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1c01hbmFnZXIuaXNEaWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbyA9IHQucHJvdG90eXBlLnN1ZmZlckF0dGFjay5jYWxsKHRoaXMsIGUsIGkpO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5yZW5kZXIodGhpcy5zdGF0dXNNYW5hZ2VyLmhwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuc3VmZmVyRGVidWZmID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW1tdW5pdHkuaW5jbHVkZXMoZS50eXBlKSkge1xyXG4gICAgICAgICAgICB0LnByb3RvdHlwZS5zdWZmZXJEZWJ1ZmYuY2FsbCh0aGlzLCBlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuYWRkQWRzb3JiID0gZnVuY3Rpb24gKCkge307XHJcbiAgICBlLnByb3RvdHlwZS5yZW1vdmVBZHNvcmIgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgIF9fZGVjb3JhdGUoW3AoJGhlYWx0aEJhci5kZWZhdWx0KV0sIGUucHJvdG90eXBlLCBcImhlYWx0aEJhclwiLCB2b2lkIDApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2RdLCBlKTtcclxufSkoJGJhc2VFbmVteS5kZWZhdWx0KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gZjtcclxuIl19