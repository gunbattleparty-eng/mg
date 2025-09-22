
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_23.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f9724mHyVFv48hkbfPRWAf', 'Enemy_23');
// game_script/scripts/Enemy_23.js

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
    e.atkCount = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.atkCount = 0;
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.thunder, this.config.value[0]);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.ice, this.config.value[1]);

    if (this.healthBar) {
      this.healthBar.init(this.statusManager.hp, e.hp_num);
    }
  };

  e.prototype.sufferDebuff = function (e) {
    if (e.type !== $enemyStatus.EnemyDebuffType.BURN && e.type !== $enemyStatus.EnemyDebuffType.STUN && e.type !== $enemyStatus.EnemyDebuffType.BACK) {
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

  e.prototype.attack = function () {
    var t = this;

    if (this.isCanAtk) {
      this.isAttacking = !0;
      this.skin.playAnimation("hit", 1);
      this.scheduleOnce(this.attackAnim, 0.066);
      this.skin.once(dragonBones.EventObject.COMPLETE, function () {
        t.atkCount++;
        t.atkCount >= t.config.value[2] ? (t.atkCount = 0, t.isAttacking = !1, t.skin.playAnimation("stand", 0)) : t.attack();
      }, this);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzIzLmpzIl0sIm5hbWVzIjpbIm8iLCIkYmFzZUJ1bGxldCIsInJlcXVpcmUiLCIkYmFzZUVuZW15IiwiJGVuZW15U3RhdHVzIiwiJGhlYWx0aEJhciIsInUiLCJjYyIsIl9kZWNvcmF0b3IiLCJkIiwiY2NjbGFzcyIsInAiLCJwcm9wZXJ0eSIsImYiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGVhbHRoQmFyIiwiYXRrQ291bnQiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0RW5lbXkiLCJpIiwiY2FsbCIsInN0YXR1c01hbmFnZXIiLCJzcGVjaWFsaXR5QXRrQWRkIiwic2V0IiwiQnVsbGV0U3BlY2lhbGl0eSIsInRodW5kZXIiLCJjb25maWciLCJ2YWx1ZSIsImljZSIsImluaXQiLCJocCIsImhwX251bSIsInN1ZmZlckRlYnVmZiIsInR5cGUiLCJFbmVteURlYnVmZlR5cGUiLCJCVVJOIiwiU1RVTiIsIkJBQ0siLCJzdWZmZXJBdHRhY2siLCJpc0RpZSIsInJlbmRlciIsImF0dGFjayIsImlzQ2FuQXRrIiwiaXNBdHRhY2tpbmciLCJza2luIiwicGxheUFuaW1hdGlvbiIsInNjaGVkdWxlT25jZSIsImF0dGFja0FuaW0iLCJvbmNlIiwiZHJhZ29uQm9uZXMiLCJFdmVudE9iamVjdCIsIkNPTVBMRVRFIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlDLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUUsWUFBWSxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJRyxVQUFVLEdBQUdILE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlJLENBQUMs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LEdBQUcsSUFBUjs7SUFDQSxJQUFJLEtBQUtnQyxRQUFULEVBQW1CO01BQ2YsS0FBS0MsV0FBTCxHQUFtQixDQUFDLENBQXBCO01BQ0EsS0FBS0MsSUFBTCxDQUFVQyxhQUFWLENBQXdCLEtBQXhCLEVBQStCLENBQS9CO01BQ0EsS0FBS0MsWUFBTCxDQUFrQixLQUFLQyxVQUF2QixFQUFtQyxLQUFuQztNQUNBLEtBQUtILElBQUwsQ0FBVUksSUFBVixDQUNJQyxXQUFXLENBQUNDLFdBQVosQ0FBd0JDLFFBRDVCLEVBRUksWUFBWTtRQUNSekMsQ0FBQyxDQUFDSyxRQUFGO1FBQ0FMLENBQUMsQ0FBQ0ssUUFBRixJQUFjTCxDQUFDLENBQUNnQixNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBQWQsSUFDUWpCLENBQUMsQ0FBQ0ssUUFBRixHQUFhLENBQWQsRUFBbUJMLENBQUMsQ0FBQ2lDLFdBQUYsR0FBZ0IsQ0FBQyxDQUFwQyxFQUF3Q2pDLENBQUMsQ0FBQ2tDLElBQUYsQ0FBT0MsYUFBUCxDQUFxQixPQUFyQixFQUE4QixDQUE5QixDQUQvQyxJQUVNbkMsQ0FBQyxDQUFDK0IsTUFBRixFQUZOO01BR0gsQ0FQTCxFQVFJLElBUko7SUFVSDtFQUNKLENBakJEOztFQWtCQVcsVUFBVSxDQUFDLENBQUM3QyxDQUFDLENBQUNOLFVBQVUsV0FBWCxDQUFGLENBQUQsRUFBMEJVLENBQUMsQ0FBQ00sU0FBNUIsRUFBdUMsV0FBdkMsRUFBb0QsS0FBSyxDQUF6RCxDQUFWOztFQUNBLE9BQU9tQyxVQUFVLENBQUMsQ0FBQy9DLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0EzRE8sQ0EyRExaLFVBQVUsV0EzREwsQ0FBUjs7QUE0REFzRCxPQUFPLFdBQVAsR0FBa0I1QyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciAkYmFzZUVuZW15ID0gcmVxdWlyZShcIi4vQmFzZUVuZW15XCIpO1xyXG52YXIgJGVuZW15U3RhdHVzID0gcmVxdWlyZShcIi4vRW5lbXlTdGF0dXNcIik7XHJcbnZhciAkaGVhbHRoQmFyID0gcmVxdWlyZShcIi4vSGVhbHRoQmFyXCIpO1xyXG52YXIgdSA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBkID0gdS5jY2NsYXNzO1xyXG52YXIgcCA9IHUucHJvcGVydHk7XHJcbnZhciBmID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUuaGVhbHRoQmFyID0gbnVsbDtcclxuICAgICAgICBlLmF0a0NvdW50ID0gMDtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLmluaXRFbmVteSA9IGZ1bmN0aW9uIChlLCBpLCBvKSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xyXG4gICAgICAgICAgICBvID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5wcm90b3R5cGUuaW5pdEVuZW15LmNhbGwodGhpcywgZSwgaSwgbyk7XHJcbiAgICAgICAgdGhpcy5hdGtDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLnNwZWNpYWxpdHlBdGtBZGQuc2V0KCRiYXNlQnVsbGV0LkJ1bGxldFNwZWNpYWxpdHkudGh1bmRlciwgdGhpcy5jb25maWcudmFsdWVbMF0pO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5zcGVjaWFsaXR5QXRrQWRkLnNldCgkYmFzZUJ1bGxldC5CdWxsZXRTcGVjaWFsaXR5LmljZSwgdGhpcy5jb25maWcudmFsdWVbMV0pO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5pbml0KHRoaXMuc3RhdHVzTWFuYWdlci5ocCwgZS5ocF9udW0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdWZmZXJEZWJ1ZmYgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZS50eXBlICE9PSAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLkJVUk4gJiZcclxuICAgICAgICAgICAgZS50eXBlICE9PSAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLlNUVU4gJiZcclxuICAgICAgICAgICAgZS50eXBlICE9PSAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLkJBQ0tcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdC5wcm90b3R5cGUuc3VmZmVyRGVidWZmLmNhbGwodGhpcywgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnN1ZmZlckF0dGFjayA9IGZ1bmN0aW9uIChlLCBpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzTWFuYWdlci5pc0RpZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gITE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvID0gdC5wcm90b3R5cGUuc3VmZmVyQXR0YWNrLmNhbGwodGhpcywgZSwgaSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLnJlbmRlcih0aGlzLnN0YXR1c01hbmFnZXIuaHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5hdHRhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2FuQXRrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBdHRhY2tpbmcgPSAhMDtcclxuICAgICAgICAgICAgdGhpcy5za2luLnBsYXlBbmltYXRpb24oXCJoaXRcIiwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuYXR0YWNrQW5pbSwgMC4wNjYpO1xyXG4gICAgICAgICAgICB0aGlzLnNraW4ub25jZShcclxuICAgICAgICAgICAgICAgIGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkNPTVBMRVRFLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuYXRrQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB0LmF0a0NvdW50ID49IHQuY29uZmlnLnZhbHVlWzJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKCh0LmF0a0NvdW50ID0gMCksICh0LmlzQXR0YWNraW5nID0gITEpLCB0LnNraW4ucGxheUFuaW1hdGlvbihcInN0YW5kXCIsIDApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHQuYXR0YWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtwKCRoZWFsdGhCYXIuZGVmYXVsdCldLCBlLnByb3RvdHlwZSwgXCJoZWFsdGhCYXJcIiwgdm9pZCAwKTtcclxuICAgIHJldHVybiBfX2RlY29yYXRlKFtkXSwgZSk7XHJcbn0pKCRiYXNlRW5lbXkuZGVmYXVsdCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGY7XHJcbiJdfQ==