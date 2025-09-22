
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/SBullet_2_1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de53cjQRCJJc7xcwkYIOzDL', 'SBullet_2_1');
// game_script/scripts/SBullet_2_1.js

"use strict";

var o;

var $object = require("./Object");

var $remoteAudio = require("./RemoteAudio");

var $gameContext = require("./GameContext");

var $baseBullet = require("./BaseBullet");

var u = cc._decorator;
var d = u.ccclass;
var p = (u.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.s_bullet_2_1;
    return e;
  }

  __extends(e, t);

  e.prototype.initSBullet = function () {
    this.initButtle(null, 23);
    this.atk = $gameContext["default"].ins.skillInfo.skinAtk;
    var t = this.skillParam.thermobaricBoomRange;
    this.setScale(cc.v3(t, t));
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
    if (!this.isUse) {
      if (e == $object.Trigger.enter) {
        t.object.sufferAtk({
          skillSpecialitys: [],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNCdWxsZXRfMl8xLmpzIl0sIm5hbWVzIjpbIm8iLCIkb2JqZWN0IiwicmVxdWlyZSIsIiRyZW1vdGVBdWRpbyIsIiRnYW1lQ29udGV4dCIsIiRiYXNlQnVsbGV0IiwidSIsImNjIiwiX2RlY29yYXRvciIsImQiLCJjY2NsYXNzIiwicCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJ1dHRsZVR5cGUiLCJCdWxsZXRUeXBlIiwic19idWxsZXRfMl8xIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdFNCdWxsZXQiLCJpbml0QnV0dGxlIiwiYXRrIiwiaW5zIiwic2tpbGxJbmZvIiwic2tpbkF0ayIsInNraWxsUGFyYW0iLCJ0aGVybW9iYXJpY0Jvb21SYW5nZSIsInNldFNjYWxlIiwidjMiLCJzZXRBbmltYXRpb24iLCJub2RlIiwiY2hpbGRyZW4iLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJpbnN0YW5jZSIsInBsYXlFZmZlY3RNdXNpY1Jlc3RyaWN0IiwicGxheSIsIm9uY2UiLCJFdmVudFR5cGUiLCJGSU5JU0hFRCIsInJlbW92ZVNlbGYiLCJvblRyaWdnZXIiLCJpc1VzZSIsIlRyaWdnZXIiLCJlbnRlciIsIm9iamVjdCIsInN1ZmZlckF0ayIsInNraWxsU3BlY2lhbGl0eXMiLCJ1cGRhdGVGcmFtZSIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxZQUFZLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlFLFlBQVksR0FBR0YsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJSSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLFVBQUYsR0FBZVosV0FBVyxDQUFDYSxVQUFaLENBQXVCQyxZQUF0QztJQUNBLE9BQU9MLENBQVA7RUFDSDs7RUFDRE0sU0FBUyxDQUFDTixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDTyxTQUFGLENBQVlDLFdBQVosR0FBMEIsWUFBWTtJQUNsQyxLQUFLQyxVQUFMLENBQWdCLElBQWhCLEVBQXNCLEVBQXRCO0lBQ0EsS0FBS0MsR0FBTCxHQUFXcEIsWUFBWSxXQUFaLENBQXFCcUIsR0FBckIsQ0FBeUJDLFNBQXpCLENBQW1DQyxPQUE5QztJQUNBLElBQUlkLENBQUMsR0FBRyxLQUFLZSxVQUFMLENBQWdCQyxvQkFBeEI7SUFDQSxLQUFLQyxRQUFMLENBQWN2QixFQUFFLENBQUN3QixFQUFILENBQU1sQixDQUFOLEVBQVNBLENBQVQsQ0FBZDtFQUNILENBTEQ7O0VBTUFDLENBQUMsQ0FBQ08sU0FBRixDQUFZVyxZQUFaLEdBQTJCLFlBQVk7SUFDbkMsSUFBSW5CLENBQUMsR0FBRyxJQUFSO0lBQ0EsSUFBSUMsQ0FBQyxHQUFHLEtBQUttQixJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLFlBQXRCLENBQW1DNUIsRUFBRSxDQUFDNkIsU0FBdEMsQ0FBUjtJQUNBakMsWUFBWSxXQUFaLENBQXFCa0MsUUFBckIsQ0FBOEJDLHVCQUE5QixDQUFzRCxNQUF0RCxFQUE4RCxHQUE5RDtJQUNBeEIsQ0FBQyxDQUFDeUIsSUFBRixDQUFPLFVBQVA7SUFDQXpCLENBQUMsQ0FBQzBCLElBQUYsQ0FDSWpDLEVBQUUsQ0FBQzZCLFNBQUgsQ0FBYUssU0FBYixDQUF1QkMsUUFEM0IsRUFFSSxZQUFZO01BQ1I3QixDQUFDLENBQUM4QixVQUFGO0lBQ0gsQ0FKTCxFQUtJLElBTEo7RUFPSCxDQVpEOztFQWFBN0IsQ0FBQyxDQUFDTyxTQUFGLENBQVl1QixTQUFaLEdBQXdCLFVBQVUvQixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDcEMsSUFBSSxDQUFDLEtBQUsrQixLQUFWLEVBQWlCO01BQ2IsSUFBSS9CLENBQUMsSUFBSWIsT0FBTyxDQUFDNkMsT0FBUixDQUFnQkMsS0FBekIsRUFBZ0M7UUFDNUJsQyxDQUFDLENBQUNtQyxNQUFGLENBQVNDLFNBQVQsQ0FBbUI7VUFDZkMsZ0JBQWdCLEVBQUUsRUFESDtVQUVmMUIsR0FBRyxFQUFFLEtBQUtBO1FBRkssQ0FBbkI7TUFJSDtJQUNKO0VBQ0osQ0FURDs7RUFVQVYsQ0FBQyxDQUFDTyxTQUFGLENBQVk4QixXQUFaLEdBQTBCLFlBQVksQ0FBRSxDQUF4Qzs7RUFDQSxPQUFPQyxVQUFVLENBQUMsQ0FBQzNDLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0F0Q0QsQ0FzQ0dULFdBQVcsV0F0Q2QsQ0FGQyxDQUFMO0FBeUNBZ0QsT0FBTyxXQUFQLEdBQWtCMUMsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJG9iamVjdCA9IHJlcXVpcmUoXCIuL09iamVjdFwiKTtcclxudmFyICRyZW1vdGVBdWRpbyA9IHJlcXVpcmUoXCIuL1JlbW90ZUF1ZGlvXCIpO1xyXG52YXIgJGdhbWVDb250ZXh0ID0gcmVxdWlyZShcIi4vR2FtZUNvbnRleHRcIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciB1ID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGQgPSB1LmNjY2xhc3M7XHJcbnZhciBwID1cclxuICAgICh1LnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUuYnV0dGxlVHlwZSA9ICRiYXNlQnVsbGV0LkJ1bGxldFR5cGUuc19idWxsZXRfMl8xO1xyXG4gICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgICAgIGUucHJvdG90eXBlLmluaXRTQnVsbGV0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRCdXR0bGUobnVsbCwgMjMpO1xyXG4gICAgICAgICAgICB0aGlzLmF0ayA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8uc2tpbkF0aztcclxuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLnNraWxsUGFyYW0udGhlcm1vYmFyaWNCb29tUmFuZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoY2MudjModCwgdCkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUuc2V0QW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICAkcmVtb3RlQXVkaW8uZGVmYXVsdC5pbnN0YW5jZS5wbGF5RWZmZWN0TXVzaWNSZXN0cmljdChcImJvb21cIiwgMC4zKTtcclxuICAgICAgICAgICAgZS5wbGF5KFwiYnV0dGxlXzVcIik7XHJcbiAgICAgICAgICAgIGUub25jZShcclxuICAgICAgICAgICAgICAgIGNjLkFuaW1hdGlvbi5FdmVudFR5cGUuRklOSVNIRUQsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUub25UcmlnZ2VyID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVXNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSA9PSAkb2JqZWN0LlRyaWdnZXIuZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0Lm9iamVjdC5zdWZmZXJBdGsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lsbFNwZWNpYWxpdHlzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXRrOiB0aGlzLmF0a1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGVGcmFtZSA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtkXSwgZSk7XHJcbiAgICB9KSgkYmFzZUJ1bGxldC5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHA7XHJcbiJdfQ==