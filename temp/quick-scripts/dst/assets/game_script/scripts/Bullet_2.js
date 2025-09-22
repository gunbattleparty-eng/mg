
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Bullet_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42af3pRXIRECaglwLWIkTgU', 'Bullet_2');
// game_script/scripts/Bullet_2.js

"use strict";

var o;

var $object = require("./Object");

var $remoteAudio = require("./RemoteAudio");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var u = cc._decorator;
var d = u.ccclass;
var p = (u.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.boom_bullet;
    e.skillSpecialitys = [$baseBullet.BulletSpeciality.boom];
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    var o = this.skillParam.bulletBoomRange;
    this.setScale(cc.v3(o, o));
    this.atk = this.skillParam.bulletBoomAtk[$gameSkillInfo.Skill4Param.FINAL];
  };

  e.prototype.setAnimation = function () {
    var t = this;
    var e = this.node.children[0].getComponent(cc.Animation);
    $remoteAudio["default"].instance.playEffectMusicRestrict("boom", 0.3);
    e.play("bullet_2");
    e.once(cc.Animation.EventType.FINISHED, function () {
      t.removeSelf();
    }, this);
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse) {
      if (e == $object.Trigger.enter) {
        t.object.sufferAtk({
          id: this.skillId,
          skillSpecialitys: this.skillSpecialitys,
          atk: this.atk
        });
      }
    }
  };

  e.prototype.updateFrame = function () {};

  return __decorate([d], e);
}($baseBullet["default"]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJ1bGxldF8yLmpzIl0sIm5hbWVzIjpbIm8iLCIkb2JqZWN0IiwicmVxdWlyZSIsIiRyZW1vdGVBdWRpbyIsIiRnYW1lU2tpbGxJbmZvIiwiJGJhc2VCdWxsZXQiLCJ1IiwiY2MiLCJfZGVjb3JhdG9yIiwiZCIsImNjY2xhc3MiLCJwIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnV0dGxlVHlwZSIsIkJ1bGxldFR5cGUiLCJib29tX2J1bGxldCIsInNraWxsU3BlY2lhbGl0eXMiLCJCdWxsZXRTcGVjaWFsaXR5IiwiYm9vbSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImluaXRCdXR0bGUiLCJpIiwiY2FsbCIsInNraWxsUGFyYW0iLCJidWxsZXRCb29tUmFuZ2UiLCJzZXRTY2FsZSIsInYzIiwiYXRrIiwiYnVsbGV0Qm9vbUF0ayIsIlNraWxsNFBhcmFtIiwiRklOQUwiLCJzZXRBbmltYXRpb24iLCJub2RlIiwiY2hpbGRyZW4iLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJpbnN0YW5jZSIsInBsYXlFZmZlY3RNdXNpY1Jlc3RyaWN0IiwicGxheSIsIm9uY2UiLCJFdmVudFR5cGUiLCJGSU5JU0hFRCIsInJlbW92ZVNlbGYiLCJvblRyaWdnZXIiLCJpc1VzZSIsIlRyaWdnZXIiLCJlbnRlciIsIm9iamVjdCIsInN1ZmZlckF0ayIsImlkIiwic2tpbGxJZCIsInVwZGF0ZUZyYW1lIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlDLFlBQVksR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUUsY0FBYyxHQUFHRixPQUFPLENBQUMsaUJBQUQsQ0FBNUI7O0FBQ0EsSUFBSUcs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YXIgJG9iamVjdCA9IHJlcXVpcmUoXCIuL09iamVjdFwiKTtcclxudmFyICRyZW1vdGVBdWRpbyA9IHJlcXVpcmUoXCIuL1JlbW90ZUF1ZGlvXCIpO1xyXG52YXIgJGdhbWVTa2lsbEluZm8gPSByZXF1aXJlKFwiLi9HYW1lU2tpbGxJbmZvXCIpO1xyXG52YXIgJGJhc2VCdWxsZXQgPSByZXF1aXJlKFwiLi9CYXNlQnVsbGV0XCIpO1xyXG52YXIgdSA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBkID0gdS5jY2NsYXNzO1xyXG52YXIgcCA9XHJcbiAgICAodS5wcm9wZXJ0eSxcclxuICAgIChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICBlLmJ1dHRsZVR5cGUgPSAkYmFzZUJ1bGxldC5CdWxsZXRUeXBlLmJvb21fYnVsbGV0O1xyXG4gICAgICAgICAgICBlLnNraWxsU3BlY2lhbGl0eXMgPSBbJGJhc2VCdWxsZXQuQnVsbGV0U3BlY2lhbGl0eS5ib29tXTtcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5pbml0QnV0dGxlID0gZnVuY3Rpb24gKGUsIGkpIHtcclxuICAgICAgICAgICAgdC5wcm90b3R5cGUuaW5pdEJ1dHRsZS5jYWxsKHRoaXMsIGUsIGkpO1xyXG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMuc2tpbGxQYXJhbS5idWxsZXRCb29tUmFuZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoY2MudjMobywgbykpO1xyXG4gICAgICAgICAgICB0aGlzLmF0ayA9IHRoaXMuc2tpbGxQYXJhbS5idWxsZXRCb29tQXRrWyRnYW1lU2tpbGxJbmZvLlNraWxsNFBhcmFtLkZJTkFMXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLnNldEFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgJHJlbW90ZUF1ZGlvLmRlZmF1bHQuaW5zdGFuY2UucGxheUVmZmVjdE11c2ljUmVzdHJpY3QoXCJib29tXCIsIDAuMyk7XHJcbiAgICAgICAgICAgIGUucGxheShcImJ1bGxldF8yXCIpO1xyXG4gICAgICAgICAgICBlLm9uY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5BbmltYXRpb24uRXZlbnRUeXBlLkZJTklTSEVELFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLm9uVHJpZ2dlciA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1VzZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUgPT0gJG9iamVjdC5UcmlnZ2VyLmVudGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5vYmplY3Quc3VmZmVyQXRrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2tpbGxJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxTcGVjaWFsaXR5czogdGhpcy5za2lsbFNwZWNpYWxpdHlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdGs6IHRoaXMuYXRrXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLnVwZGF0ZUZyYW1lID0gZnVuY3Rpb24gKCkge307XHJcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2RdLCBlKTtcclxuICAgIH0pKCRiYXNlQnVsbGV0LmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcDtcclxuIl19