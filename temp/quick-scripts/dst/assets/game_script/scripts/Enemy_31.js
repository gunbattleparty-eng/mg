
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_31.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16688ThtNpHgruLe/D6/NTQ', 'Enemy_31');
// game_script/scripts/Enemy_31.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var $baseEnemy = require("./BaseEnemy");

var $healthBar = require("./HealthBar");

var u = cc._decorator;
var d = u.ccclass;
var p = u.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.healthBar = null;
    e.bulletPrefab = null;
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.clear();
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.ice, this.config.value[0]);

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

  e.prototype.dieAnim = function () {
    this.createSelfBoom();
    return t.prototype.dieAnim.call(this);
  };

  e.prototype.createSelfBoom = function () {
    var t = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.e_bullet_31);

    if (!t) {
      t = cc.instantiate(this.bulletPrefab).getComponent($baseBullet["default"]);
    }

    t.value = this.config.value;
    t.setPosition(this.getPosition());
    t.initButtle(null, null);
    t.insert($gameContext["default"].ins.lowBulletLayer);
    t.setAnimation(null);
  };

  __decorate([p($healthBar["default"])], e.prototype, "healthBar", void 0);

  __decorate([p(cc.Prefab)], e.prototype, "bulletPrefab", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzMxLmpzIl0sIm5hbWVzIjpbIm8iLCIkYmFzZUJ1bGxldCIsInJlcXVpcmUiLCIkZ2FtZUNvbnRleHQiLCIkYmFzZUVuZW15IiwiJGhlYWx0aEJhciIsInUiLCJjYyIsIl9kZWNvcmF0b3IiLCJkIiwiY2NjbGFzcyIsInAiLCJwcm9wZXJ0eSIsImYiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGVhbHRoQmFyIiwiYnVsbGV0UHJlZmFiIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEVuZW15IiwiaSIsImNhbGwiLCJzdGF0dXNNYW5hZ2VyIiwiY2xlYXIiLCJzcGVjaWFsaXR5QXRrQWRkIiwic2V0IiwiQnVsbGV0U3BlY2lhbGl0eSIsImljZSIsImNvbmZpZyIsInZhbHVlIiwiaW5pdCIsImhwIiwiaHBfbnVtIiwic3VmZmVyQXR0YWNrIiwiaXNEaWUiLCJyZW5kZXIiLCJkaWVBbmltIiwiY3JlYXRlU2VsZkJvb20iLCJpbnMiLCJnZXRCdXR0bGVQb29sIiwiQnVsbGV0VHlwZSIsImVfYnVsbGV0XzMxIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJzZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiaW5pdEJ1dHRsZSIsImluc2VydCIsImxvd0J1bGxldExheWVyIiwic2V0QW5pbWF0aW9uIiwiX19kZWNvcmF0ZSIsIlByZWZhYiIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlDLFlBQVksR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUUsVUFBVSxHQUFHRixPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRyxVQUFVLEdBQUdILE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlJ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LENBQUNtQyxVQUFGLENBQWEsSUFBYixFQUFtQixJQUFuQjtJQUNBbkMsQ0FBQyxDQUFDb0MsTUFBRixDQUFTL0MsWUFBWSxXQUFaLENBQXFCc0MsR0FBckIsQ0FBeUJVLGNBQWxDO0lBQ0FyQyxDQUFDLENBQUNzQyxZQUFGLENBQWUsSUFBZjtFQUNILENBVkQ7O0VBV0FDLFVBQVUsQ0FBQyxDQUFDMUMsQ0FBQyxDQUFDTixVQUFVLFdBQVgsQ0FBRixDQUFELEVBQTBCVSxDQUFDLENBQUNNLFNBQTVCLEVBQXVDLFdBQXZDLEVBQW9ELEtBQUssQ0FBekQsQ0FBVjs7RUFDQWdDLFVBQVUsQ0FBQyxDQUFDMUMsQ0FBQyxDQUFDSixFQUFFLENBQUMrQyxNQUFKLENBQUYsQ0FBRCxFQUFpQnZDLENBQUMsQ0FBQ00sU0FBbkIsRUFBOEIsY0FBOUIsRUFBOEMsS0FBSyxDQUFuRCxDQUFWOztFQUNBLE9BQU9nQyxVQUFVLENBQUMsQ0FBQzVDLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0EvQ08sQ0ErQ0xYLFVBQVUsV0EvQ0wsQ0FBUjs7QUFnREFtRCxPQUFPLFdBQVAsR0FBa0IxQyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciAkZ2FtZUNvbnRleHQgPSByZXF1aXJlKFwiLi9HYW1lQ29udGV4dFwiKTtcclxudmFyICRiYXNlRW5lbXkgPSByZXF1aXJlKFwiLi9CYXNlRW5lbXlcIik7XHJcbnZhciAkaGVhbHRoQmFyID0gcmVxdWlyZShcIi4vSGVhbHRoQmFyXCIpO1xyXG52YXIgdSA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBkID0gdS5jY2NsYXNzO1xyXG52YXIgcCA9IHUucHJvcGVydHk7XHJcbnZhciBmID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUuaGVhbHRoQmFyID0gbnVsbDtcclxuICAgICAgICBlLmJ1bGxldFByZWZhYiA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLnByb3RvdHlwZS5pbml0RW5lbXkgPSBmdW5jdGlvbiAoZSwgaSwgbykge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IG8pIHtcclxuICAgICAgICAgICAgbyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQucHJvdG90eXBlLmluaXRFbmVteS5jYWxsKHRoaXMsIGUsIGksIG8pO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5zcGVjaWFsaXR5QXRrQWRkLnNldCgkYmFzZUJ1bGxldC5CdWxsZXRTcGVjaWFsaXR5LmljZSwgdGhpcy5jb25maWcudmFsdWVbMF0pO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5pbml0KHRoaXMuc3RhdHVzTWFuYWdlci5ocCwgZS5ocF9udW0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdWZmZXJBdHRhY2sgPSBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1c01hbmFnZXIuaXNEaWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbyA9IHQucHJvdG90eXBlLnN1ZmZlckF0dGFjay5jYWxsKHRoaXMsIGUsIGkpO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5yZW5kZXIodGhpcy5zdGF0dXNNYW5hZ2VyLmhwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuZGllQW5pbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNlbGZCb29tKCk7XHJcbiAgICAgICAgcmV0dXJuIHQucHJvdG90eXBlLmRpZUFuaW0uY2FsbCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVTZWxmQm9vbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRCdXR0bGVQb29sKCRiYXNlQnVsbGV0LkJ1bGxldFR5cGUuZV9idWxsZXRfMzEpO1xyXG4gICAgICAgIGlmICghdCkge1xyXG4gICAgICAgICAgICB0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmVmYWIpLmdldENvbXBvbmVudCgkYmFzZUJ1bGxldC5kZWZhdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC52YWx1ZSA9IHRoaXMuY29uZmlnLnZhbHVlO1xyXG4gICAgICAgIHQuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICB0LmluaXRCdXR0bGUobnVsbCwgbnVsbCk7XHJcbiAgICAgICAgdC5pbnNlcnQoJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmxvd0J1bGxldExheWVyKTtcclxuICAgICAgICB0LnNldEFuaW1hdGlvbihudWxsKTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtwKCRoZWFsdGhCYXIuZGVmYXVsdCldLCBlLnByb3RvdHlwZSwgXCJoZWFsdGhCYXJcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW3AoY2MuUHJlZmFiKV0sIGUucHJvdG90eXBlLCBcImJ1bGxldFByZWZhYlwiLCB2b2lkIDApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2RdLCBlKTtcclxufSkoJGJhc2VFbmVteS5kZWZhdWx0KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gZjtcclxuIl19