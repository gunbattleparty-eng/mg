
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_19.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '328fc/DqK1I4olAnxPPTKt/', 'Enemy_19');
// game_script/scripts/Enemy_19.js

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
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.thunder, this.config.value[0]);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.fire, this.config.value[2]);

    if (this.healthBar) {
      this.healthBar.init(this.statusManager.hp, e.hp_num);
    }
  };

  e.prototype.sufferDebuff = function (e) {
    if (!(e.type === $enemyStatus.EnemyDebuffType.PARALYSIS && (e.timeLeft *= 1 + this.config.value[1], e.timeLeft <= 0.016))) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzE5LmpzIl0sIm5hbWVzIjpbIm8iLCIkYmFzZUJ1bGxldCIsInJlcXVpcmUiLCIkYmFzZUVuZW15IiwiJGVuZW15U3RhdHVzIiwiJGhlYWx0aEJhciIsInUiLCJjYyIsIl9kZWNvcmF0b3IiLCJkIiwiY2NjbGFzcyIsInAiLCJwcm9wZXJ0eSIsImYiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGVhbHRoQmFyIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEVuZW15IiwiaSIsImNhbGwiLCJzdGF0dXNNYW5hZ2VyIiwic3BlY2lhbGl0eUF0a0FkZCIsInNldCIsIkJ1bGxldFNwZWNpYWxpdHkiLCJ0aHVuZGVyIiwiY29uZmlnIiwidmFsdWUiLCJmaXJlIiwiaW5pdCIsImhwIiwiaHBfbnVtIiwic3VmZmVyRGVidWZmIiwidHlwZSIsIkVuZW15RGVidWZmVHlwZSIsIlBBUkFMWVNJUyIsInRpbWVMZWZ0Iiwic3VmZmVyQXR0YWNrIiwiaXNEaWUiLCJyZW5kZXIiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlHLFVBQVUsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUksQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFD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cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciAkYmFzZUVuZW15ID0gcmVxdWlyZShcIi4vQmFzZUVuZW15XCIpO1xyXG52YXIgJGVuZW15U3RhdHVzID0gcmVxdWlyZShcIi4vRW5lbXlTdGF0dXNcIik7XHJcbnZhciAkaGVhbHRoQmFyID0gcmVxdWlyZShcIi4vSGVhbHRoQmFyXCIpO1xyXG52YXIgdSA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBkID0gdS5jY2NsYXNzO1xyXG52YXIgcCA9IHUucHJvcGVydHk7XHJcbnZhciBmID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUuaGVhbHRoQmFyID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLmluaXRFbmVteSA9IGZ1bmN0aW9uIChlLCBpLCBvKSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xyXG4gICAgICAgICAgICBvID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5wcm90b3R5cGUuaW5pdEVuZW15LmNhbGwodGhpcywgZSwgaSwgbyk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLnNwZWNpYWxpdHlBdGtBZGQuc2V0KCRiYXNlQnVsbGV0LkJ1bGxldFNwZWNpYWxpdHkudGh1bmRlciwgdGhpcy5jb25maWcudmFsdWVbMF0pO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5zcGVjaWFsaXR5QXRrQWRkLnNldCgkYmFzZUJ1bGxldC5CdWxsZXRTcGVjaWFsaXR5LmZpcmUsIHRoaXMuY29uZmlnLnZhbHVlWzJdKTtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhCYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuaW5pdCh0aGlzLnN0YXR1c01hbmFnZXIuaHAsIGUuaHBfbnVtKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuc3VmZmVyRGVidWZmID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICEoXHJcbiAgICAgICAgICAgICAgICBlLnR5cGUgPT09ICRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuUEFSQUxZU0lTICYmXHJcbiAgICAgICAgICAgICAgICAoKGUudGltZUxlZnQgKj0gMSArIHRoaXMuY29uZmlnLnZhbHVlWzFdKSwgZS50aW1lTGVmdCA8PSAwLjAxNilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0LnByb3RvdHlwZS5zdWZmZXJEZWJ1ZmYuY2FsbCh0aGlzLCBlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuc3VmZmVyQXR0YWNrID0gZnVuY3Rpb24gKGUsIGkpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0dXNNYW5hZ2VyLmlzRGllKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG8gPSB0LnByb3RvdHlwZS5zdWZmZXJBdHRhY2suY2FsbCh0aGlzLCBlLCBpKTtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhCYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIucmVuZGVyKHRoaXMuc3RhdHVzTWFuYWdlci5ocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW3AoJGhlYWx0aEJhci5kZWZhdWx0KV0sIGUucHJvdG90eXBlLCBcImhlYWx0aEJhclwiLCB2b2lkIDApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2RdLCBlKTtcclxufSkoJGJhc2VFbmVteS5kZWZhdWx0KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gZjtcclxuIl19