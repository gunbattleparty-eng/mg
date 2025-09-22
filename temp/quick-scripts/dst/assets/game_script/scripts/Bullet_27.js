
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Bullet_27.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cf48KgN6ZLPbgJkxkxXVbJ', 'Bullet_27');
// game_script/scripts/Bullet_27.js

"use strict";

var o;

var $object = require("./Object");

var $remoteAudio = require("./RemoteAudio");

var $baseBullet = require("./BaseBullet");

var c = cc._decorator;
var u = c.ccclass;
var d = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.oil_burn_area_boom;
    e.attackedEnemy = new Set();
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    var o = this.skillParam.oilBurnAreaBoomRange;
    this.setScale(cc.v3(o, o));
    this.atk = this.skillParam.oilBurnAreaBoomAtk;
  };

  e.prototype.setAnimation = function () {
    var t = this;
    var e = this.node.children[0].getComponent(cc.Animation);
    $remoteAudio["default"].instance.playEffectMusicRestrict("boom", 0.3);
    e.play("buttle_5");
    e.once(cc.Animation.EventType.FINISHED, function () {
      t.removeSelf();
    }, this);
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && (e == $object.Trigger.enter || e == $object.Trigger.stay)) {
      var i = t.object;

      if (this.attackedEnemy.has(i)) {
        return;
      }

      this.attackedEnemy.add(i);
      i.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });
    }
  };

  e.prototype.updateFrame = function () {};

  return __decorate([u], e);
}($baseBullet["default"]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJ1bGxldF8yNy5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkcmVtb3RlQXVkaW8iLCIkYmFzZUJ1bGxldCIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJ1IiwiY2NjbGFzcyIsImQiLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJidXR0bGVUeXBlIiwiQnVsbGV0VHlwZSIsIm9pbF9idXJuX2FyZWFfYm9vbSIsImF0dGFja2VkRW5lbXkiLCJTZXQiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0QnV0dGxlIiwiaSIsImNhbGwiLCJza2lsbFBhcmFtIiwib2lsQnVybkFyZWFCb29tUmFuZ2UiLCJzZXRTY2FsZSIsInYzIiwiYXRrIiwib2lsQnVybkFyZWFCb29tQXRrIiwic2V0QW5pbWF0aW9uIiwibm9kZSIsImNoaWxkcmVuIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwiaW5zdGFuY2UiLCJwbGF5RWZmZWN0TXVzaWNSZXN0cmljdCIsInBsYXkiLCJvbmNlIiwiRXZlbnRUeXBlIiwiRklOSVNIRUQiLCJyZW1vdmVTZWxmIiwib25UcmlnZ2VyIiwiaXNVc2UiLCJUcmlnZ2VyIiwiZW50ZXIiLCJzdGF5Iiwib2JqZWN0IiwiaGFzIiwiYWRkIiwic3VmZmVyQXRrIiwiaWQiLCJza2lsbElkIiwic2tpbGxTcGVjaWFsaXR5cyIsInVwZGF0ZUZyYW1lIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlDLFlBQVksR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJRyxDQUFDLEdB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QVAsR0FBa0JoRCxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkb2JqZWN0ID0gcmVxdWlyZShcIi4vT2JqZWN0XCIpO1xyXG52YXIgJHJlbW90ZUF1ZGlvID0gcmVxdWlyZShcIi4vUmVtb3RlQXVkaW9cIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciBjID0gY2MuX2RlY29yYXRvcjtcclxudmFyIHUgPSBjLmNjY2xhc3M7XHJcbnZhciBkID1cclxuICAgIChjLnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUuYnV0dGxlVHlwZSA9ICRiYXNlQnVsbGV0LkJ1bGxldFR5cGUub2lsX2J1cm5fYXJlYV9ib29tO1xyXG4gICAgICAgICAgICBlLmF0dGFja2VkRW5lbXkgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICAgICAgZS5wcm90b3R5cGUuaW5pdEJ1dHRsZSA9IGZ1bmN0aW9uIChlLCBpKSB7XHJcbiAgICAgICAgICAgIHQucHJvdG90eXBlLmluaXRCdXR0bGUuY2FsbCh0aGlzLCBlLCBpKTtcclxuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnNraWxsUGFyYW0ub2lsQnVybkFyZWFCb29tUmFuZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoY2MudjMobywgbykpO1xyXG4gICAgICAgICAgICB0aGlzLmF0ayA9IHRoaXMuc2tpbGxQYXJhbS5vaWxCdXJuQXJlYUJvb21BdGs7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5zZXRBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICRyZW1vdGVBdWRpby5kZWZhdWx0Lmluc3RhbmNlLnBsYXlFZmZlY3RNdXNpY1Jlc3RyaWN0KFwiYm9vbVwiLCAwLjMpO1xyXG4gICAgICAgICAgICBlLnBsYXkoXCJidXR0bGVfNVwiKTtcclxuICAgICAgICAgICAgZS5vbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5vblRyaWdnZXIgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNVc2UgJiYgKGUgPT0gJG9iamVjdC5UcmlnZ2VyLmVudGVyIHx8IGUgPT0gJG9iamVjdC5UcmlnZ2VyLnN0YXkpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaSA9IHQub2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0YWNrZWRFbmVteS5oYXMoaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja2VkRW5lbXkuYWRkKGkpO1xyXG4gICAgICAgICAgICAgICAgaS5zdWZmZXJBdGsoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnNraWxsSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxTcGVjaWFsaXR5czogdGhpcy5za2lsbFNwZWNpYWxpdHlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0azogdGhpcy5hdGtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGVGcmFtZSA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFt1XSwgZSk7XHJcbiAgICB9KSgkYmFzZUJ1bGxldC5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGQ7XHJcbiJdfQ==