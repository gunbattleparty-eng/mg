
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Bullet_11.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a1a80DL+hCUL4cy64eKtTD', 'Bullet_11');
// game_script/scripts/Bullet_11.js

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
    e.buttleType = $baseBullet.BulletType.thunder_boom;
    e.skillSpecialitys = [$baseBullet.BulletSpeciality.boom, $baseBullet.BulletSpeciality.thunder];
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    var o = this.skillParam.thunderBoomRangeAdd;
    this.setScale(cc.v3(o, o));
    this.atk = this.skillParam.thunderBoomAtk[$gameSkillInfo.Skill4Param.FINAL];
  };

  e.prototype.setAnimation = function () {
    var t = this;
    var e = this.node.children[0].getComponent(cc.Animation);
    $remoteAudio["default"].instance.playEffectMusicRestrict("boom", 0.3);
    e.play("bullet_11");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJ1bGxldF8xMS5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkcmVtb3RlQXVkaW8iLCIkZ2FtZVNraWxsSW5mbyIsIiRiYXNlQnVsbGV0IiwidSIsImNjIiwiX2RlY29yYXRvciIsImQiLCJjY2NsYXNzIiwicCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJ1dHRsZVR5cGUiLCJCdWxsZXRUeXBlIiwidGh1bmRlcl9ib29tIiwic2tpbGxTcGVjaWFsaXR5cyIsIkJ1bGxldFNwZWNpYWxpdHkiLCJib29tIiwidGh1bmRlciIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImluaXRCdXR0bGUiLCJpIiwiY2FsbCIsInNraWxsUGFyYW0iLCJ0aHVuZGVyQm9vbVJhbmdlQWRkIiwic2V0U2NhbGUiLCJ2MyIsImF0ayIsInRodW5kZXJCb29tQXRrIiwiU2tpbGw0UGFyYW0iLCJGSU5BTCIsInNldEFuaW1hdGlvbiIsIm5vZGUiLCJjaGlsZHJlbiIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsImluc3RhbmNlIiwicGxheUVmZmVjdE11c2ljUmVzdHJpY3QiLCJwbGF5Iiwib25jZSIsIkV2ZW50VHlwZSIsIkZJTklTSEVEIiwicmVtb3ZlU2VsZiIsIm9uVHJpZ2dlciIsImlzVXNlIiwiVHJpZ2dlciIsImVudGVyIiwib2JqZWN0Iiwic3VmZmVyQXRrIiwiaWQiLCJza2lsbElkIiwidXBkYXRlRnJhbWUiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsWUFBWSxHQUFHRCxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJRSxjQUFjLEdBQUdGLE9BQU8sQ0FBQyxpQkFBRCxD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aEQsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJG9iamVjdCA9IHJlcXVpcmUoXCIuL09iamVjdFwiKTtcclxudmFyICRyZW1vdGVBdWRpbyA9IHJlcXVpcmUoXCIuL1JlbW90ZUF1ZGlvXCIpO1xyXG52YXIgJGdhbWVTa2lsbEluZm8gPSByZXF1aXJlKFwiLi9HYW1lU2tpbGxJbmZvXCIpO1xyXG52YXIgJGJhc2VCdWxsZXQgPSByZXF1aXJlKFwiLi9CYXNlQnVsbGV0XCIpO1xyXG52YXIgdSA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBkID0gdS5jY2NsYXNzO1xyXG52YXIgcCA9XHJcbiAgICAodS5wcm9wZXJ0eSxcclxuICAgIChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICBlLmJ1dHRsZVR5cGUgPSAkYmFzZUJ1bGxldC5CdWxsZXRUeXBlLnRodW5kZXJfYm9vbTtcclxuICAgICAgICAgICAgZS5za2lsbFNwZWNpYWxpdHlzID0gWyRiYXNlQnVsbGV0LkJ1bGxldFNwZWNpYWxpdHkuYm9vbSwgJGJhc2VCdWxsZXQuQnVsbGV0U3BlY2lhbGl0eS50aHVuZGVyXTtcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5pbml0QnV0dGxlID0gZnVuY3Rpb24gKGUsIGkpIHtcclxuICAgICAgICAgICAgdC5wcm90b3R5cGUuaW5pdEJ1dHRsZS5jYWxsKHRoaXMsIGUsIGkpO1xyXG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMuc2tpbGxQYXJhbS50aHVuZGVyQm9vbVJhbmdlQWRkO1xyXG4gICAgICAgICAgICB0aGlzLnNldFNjYWxlKGNjLnYzKG8sIG8pKTtcclxuICAgICAgICAgICAgdGhpcy5hdGsgPSB0aGlzLnNraWxsUGFyYW0udGh1bmRlckJvb21BdGtbJGdhbWVTa2lsbEluZm8uU2tpbGw0UGFyYW0uRklOQUxdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUuc2V0QW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICAkcmVtb3RlQXVkaW8uZGVmYXVsdC5pbnN0YW5jZS5wbGF5RWZmZWN0TXVzaWNSZXN0cmljdChcImJvb21cIiwgMC4zKTtcclxuICAgICAgICAgICAgZS5wbGF5KFwiYnVsbGV0XzExXCIpO1xyXG4gICAgICAgICAgICBlLm9uY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5BbmltYXRpb24uRXZlbnRUeXBlLkZJTklTSEVELFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLm9uVHJpZ2dlciA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1VzZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUgPT0gJG9iamVjdC5UcmlnZ2VyLmVudGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5vYmplY3Quc3VmZmVyQXRrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2tpbGxJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxTcGVjaWFsaXR5czogdGhpcy5za2lsbFNwZWNpYWxpdHlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdGs6IHRoaXMuYXRrXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLnVwZGF0ZUZyYW1lID0gZnVuY3Rpb24gKCkge307XHJcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2RdLCBlKTtcclxuICAgIH0pKCRiYXNlQnVsbGV0LmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcDtcclxuIl19