
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Bullet_16.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83824nrLYdH5LsxY9Qv+u8+', 'Bullet_16');
// game_script/scripts/Bullet_16.js

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
    e.buttleType = $baseBullet.BulletType.enemy_boom;
    e.skillSpecialitys = [$baseBullet.BulletSpeciality.boom, $baseBullet.BulletSpeciality.fire];
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    t.prototype.initButtle.call(this, e, 23);
    var i = this.skillParam.thermobaricEnemyBoomRange;
    this.setScale(cc.v3(i, i));
    this.atk = this.skillParam.thermobaricEnemyBoomAtk[$gameSkillInfo.Skill4Param.BASIC];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJ1bGxldF8xNi5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkcmVtb3RlQXVkaW8iLCIkZ2FtZVNraWxsSW5mbyIsIiRiYXNlQnVsbGV0IiwidSIsImNjIiwiX2RlY29yYXRvciIsImQiLCJjY2NsYXNzIiwicCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJ1dHRsZVR5cGUiLCJCdWxsZXRUeXBlIiwiZW5lbXlfYm9vbSIsInNraWxsU3BlY2lhbGl0eXMiLCJCdWxsZXRTcGVjaWFsaXR5IiwiYm9vbSIsImZpcmUiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0QnV0dGxlIiwiY2FsbCIsImkiLCJza2lsbFBhcmFtIiwidGhlcm1vYmFyaWNFbmVteUJvb21SYW5nZSIsInNldFNjYWxlIiwidjMiLCJhdGsiLCJ0aGVybW9iYXJpY0VuZW15Qm9vbUF0ayIsIlNraWxsNFBhcmFtIiwiQkFTSUMiLCJzZXRBbmltYXRpb24iLCJub2RlIiwiY2hpbGRyZW4iLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJpbnN0YW5jZSIsInBsYXlFZmZlY3RNdXNpY1Jlc3RyaWN0IiwicGxheSIsIm9uY2UiLCJFdmVudFR5cGUiLCJGSU5JU0hFRCIsInJlbW92ZVNlbGYiLCJvblRyaWdnZXIiLCJpc1VzZSIsIlRyaWdnZXIiLCJlbnRlciIsIm9iamVjdCIsInN1ZmZlckF0ayIsInVwZGF0ZUZyYW1lIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlDLFlBQVksR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUUsY0FBYyxHQUFHRixPQUFPLENBQUMsaUJBQUQsQ0FBNUI7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ciBvO1xyXG52YXIgJG9iamVjdCA9IHJlcXVpcmUoXCIuL09iamVjdFwiKTtcclxudmFyICRyZW1vdGVBdWRpbyA9IHJlcXVpcmUoXCIuL1JlbW90ZUF1ZGlvXCIpO1xyXG52YXIgJGdhbWVTa2lsbEluZm8gPSByZXF1aXJlKFwiLi9HYW1lU2tpbGxJbmZvXCIpO1xyXG52YXIgJGJhc2VCdWxsZXQgPSByZXF1aXJlKFwiLi9CYXNlQnVsbGV0XCIpO1xyXG52YXIgdSA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBkID0gdS5jY2NsYXNzO1xyXG52YXIgcCA9XHJcbiAgICAodS5wcm9wZXJ0eSxcclxuICAgIChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICBlLmJ1dHRsZVR5cGUgPSAkYmFzZUJ1bGxldC5CdWxsZXRUeXBlLmVuZW15X2Jvb207XHJcbiAgICAgICAgICAgIGUuc2tpbGxTcGVjaWFsaXR5cyA9IFskYmFzZUJ1bGxldC5CdWxsZXRTcGVjaWFsaXR5LmJvb20sICRiYXNlQnVsbGV0LkJ1bGxldFNwZWNpYWxpdHkuZmlyZV07XHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICAgICAgZS5wcm90b3R5cGUuaW5pdEJ1dHRsZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHQucHJvdG90eXBlLmluaXRCdXR0bGUuY2FsbCh0aGlzLCBlLCAyMyk7XHJcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5za2lsbFBhcmFtLnRoZXJtb2JhcmljRW5lbXlCb29tUmFuZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoY2MudjMoaSwgaSkpO1xyXG4gICAgICAgICAgICB0aGlzLmF0ayA9IHRoaXMuc2tpbGxQYXJhbS50aGVybW9iYXJpY0VuZW15Qm9vbUF0a1skZ2FtZVNraWxsSW5mby5Ta2lsbDRQYXJhbS5CQVNJQ107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5zZXRBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICRyZW1vdGVBdWRpby5kZWZhdWx0Lmluc3RhbmNlLnBsYXlFZmZlY3RNdXNpY1Jlc3RyaWN0KFwiYm9vbVwiLCAwLjMpO1xyXG4gICAgICAgICAgICBlLnBsYXkoXCJidWxsZXRfMlwiKTtcclxuICAgICAgICAgICAgZS5vbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5vblRyaWdnZXIgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNVc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlID09ICRvYmplY3QuVHJpZ2dlci5lbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHQub2JqZWN0LnN1ZmZlckF0ayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsU3BlY2lhbGl0eXM6IHRoaXMuc2tpbGxTcGVjaWFsaXR5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXRrOiB0aGlzLmF0a1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGVGcmFtZSA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtkXSwgZSk7XHJcbiAgICB9KSgkYmFzZUJ1bGxldC5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHA7XHJcbiJdfQ==