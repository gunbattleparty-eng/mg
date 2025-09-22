
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_25.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fabf0+A8xNJuq5Neqm8JQto', 'Enemy_25');
// game_script/scripts/Enemy_25.js

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
    e.immunity = [$enemyStatus.EnemyDebuffType.BURN, $enemyStatus.EnemyDebuffType.STUN, $enemyStatus.EnemyDebuffType.BACK];
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

  e.prototype.sufferDebuff = function (e) {
    if (!this.immunity.includes(e.type)) {
      t.prototype.sufferDebuff.call(this, e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzI1LmpzIl0sIm5hbWVzIjpbIm8iLCIkYmFzZUJ1bGxldCIsInJlcXVpcmUiLCIkYmFzZUVuZW15IiwiJGVuZW15U3RhdHVzIiwiJGhlYWx0aEJhciIsInUiLCJjYyIsIl9kZWNvcmF0b3IiLCJkIiwiY2NjbGFzcyIsInAiLCJwcm9wZXJ0eSIsImYiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGVhbHRoQmFyIiwiaW1tdW5pdHkiLCJFbmVteURlYnVmZlR5cGUiLCJCVVJOIiwiU1RVTiIsIkJBQ0siLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0RW5lbXkiLCJpIiwiY2FsbCIsInN0YXR1c01hbmFnZXIiLCJzcGVjaWFsaXR5QXRrQWRkIiwic2V0IiwiQnVsbGV0U3BlY2lhbGl0eSIsInRyYWplY3RvcnkiLCJjb25maWciLCJ2YWx1ZSIsInRodW5kZXIiLCJpbml0IiwiaHAiLCJocF9udW0iLCJzdWZmZXJEZWJ1ZmYiLCJpbmNsdWRlcyIsInR5cGUiLCJzdWZmZXJBdHRhY2siLCJpc0RpZSIsInJlbmRlciIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlFLFlBQVksR0FBR0YsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUcsVUFBVSxHQUFHSCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJSSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FB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QTRDLE9BQU8sV0FBUCxHQUFrQmxDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRiYXNlQnVsbGV0ID0gcmVxdWlyZShcIi4vQmFzZUJ1bGxldFwiKTtcclxudmFyICRiYXNlRW5lbXkgPSByZXF1aXJlKFwiLi9CYXNlRW5lbXlcIik7XHJcbnZhciAkZW5lbXlTdGF0dXMgPSByZXF1aXJlKFwiLi9FbmVteVN0YXR1c1wiKTtcclxudmFyICRoZWFsdGhCYXIgPSByZXF1aXJlKFwiLi9IZWFsdGhCYXJcIik7XHJcbnZhciB1ID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGQgPSB1LmNjY2xhc3M7XHJcbnZhciBwID0gdS5wcm9wZXJ0eTtcclxudmFyIGYgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgZS5oZWFsdGhCYXIgPSBudWxsO1xyXG4gICAgICAgIGUuaW1tdW5pdHkgPSBbXHJcbiAgICAgICAgICAgICRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuQlVSTixcclxuICAgICAgICAgICAgJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5TVFVOLFxyXG4gICAgICAgICAgICAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLkJBQ0tcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUuaW5pdEVuZW15ID0gZnVuY3Rpb24gKGUsIGksIG8pIHtcclxuICAgICAgICBpZiAodm9pZCAwID09PSBvKSB7XHJcbiAgICAgICAgICAgIG8gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0LnByb3RvdHlwZS5pbml0RW5lbXkuY2FsbCh0aGlzLCBlLCBpLCBvKTtcclxuICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuc3BlY2lhbGl0eUF0a0FkZC5zZXQoJGJhc2VCdWxsZXQuQnVsbGV0U3BlY2lhbGl0eS50cmFqZWN0b3J5LCB0aGlzLmNvbmZpZy52YWx1ZVswXSk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLnNwZWNpYWxpdHlBdGtBZGQuc2V0KCRiYXNlQnVsbGV0LkJ1bGxldFNwZWNpYWxpdHkudGh1bmRlciwgdGhpcy5jb25maWcudmFsdWVbMV0pO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5pbml0KHRoaXMuc3RhdHVzTWFuYWdlci5ocCwgZS5ocF9udW0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdWZmZXJEZWJ1ZmYgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbW11bml0eS5pbmNsdWRlcyhlLnR5cGUpKSB7XHJcbiAgICAgICAgICAgIHQucHJvdG90eXBlLnN1ZmZlckRlYnVmZi5jYWxsKHRoaXMsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdWZmZXJBdHRhY2sgPSBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1c01hbmFnZXIuaXNEaWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbyA9IHQucHJvdG90eXBlLnN1ZmZlckF0dGFjay5jYWxsKHRoaXMsIGUsIGkpO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5yZW5kZXIodGhpcy5zdGF0dXNNYW5hZ2VyLmhwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbcCgkaGVhbHRoQmFyLmRlZmF1bHQpXSwgZS5wcm90b3R5cGUsIFwiaGVhbHRoQmFyXCIsIHZvaWQgMCk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbZF0sIGUpO1xyXG59KSgkYmFzZUVuZW15LmRlZmF1bHQpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBmO1xyXG4iXX0=