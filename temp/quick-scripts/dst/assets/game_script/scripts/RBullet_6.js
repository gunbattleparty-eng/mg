
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/RBullet_6.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc3c4m+zT1D+I+mQxs7wacB', 'RBullet_6');
// game_script/scripts/RBullet_6.js

"use strict";

var o;

var $object = require("./Object");

var $remoteAudio = require("./RemoteAudio");

var $countDownUtil = require("./CountDownUtil");

var $util = require("./Util");

var $globalParam = require("./GlobalParam");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var h = cc._decorator;
var m = h.ccclass;
var y = (h.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.r_bullet_6;
    e.leftTime = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    t.prototype.initButtle.call(this, null, null);
    $remoteAudio["default"].instance.playLoopEffect("laser");
    this.leftTime = $gameContext["default"].ins.skillInfo.robotParam[4];
    this.atk = Math.ceil($gameContext["default"].ins.skillInfo.robotParam[0] * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]);
    this.setAngle($util["default"].dirConverAngle(e));
    t.prototype.initButtle.call(this, e, null);

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }
  };

  e.prototype.onTrigger = function (t, e) {
    var i = t.object;

    if (e === $object.Trigger.stay) {
      if ($countDownUtil.CountDownUtil.time - i.getLastAtkTime(5) <= $gameContext["default"].ins.skillInfo.robotParam[3] / $gameContext["default"].ins.gameRatio) {
        return;
      }

      i.setLastAtkTime(5, $countDownUtil.CountDownUtil.time);
      i.sufferAtk({
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });
    }
  };

  e.prototype.updateFrame = function (t) {
    if (!($globalParam["default"].isGamePuase || this.leftTime <= 0)) {
      this.leftTime -= t;

      if (this.leftTime <= 0) {
        $remoteAudio["default"].instance.stopLoopEffect("laser");
        this.removeSelf();
      }
    }
  };

  return __decorate([m], e);
}($baseBullet["default"]));
exports["default"] = y;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJCdWxsZXRfNi5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkcmVtb3RlQXVkaW8iLCIkY291bnREb3duVXRpbCIsIiR1dGlsIiwiJGdsb2JhbFBhcmFtIiwiJGdhbWVDb250ZXh0IiwiJGdhbWVTa2lsbEluZm8iLCIkYmFzZUJ1bGxldCIsImgiLCJjYyIsIl9kZWNvcmF0b3IiLCJtIiwiY2NjbGFzcyIsInkiLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJidXR0bGVUeXBlIiwiQnVsbGV0VHlwZSIsInJfYnVsbGV0XzYiLCJsZWZ0VGltZSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImluaXRCdXR0bGUiLCJjYWxsIiwiaW5zdGFuY2UiLCJwbGF5TG9vcEVmZmVjdCIsImlucyIsInNraWxsSW5mbyIsInJvYm90UGFyYW0iLCJhdGsiLCJNYXRoIiwiY2VpbCIsInNraWxsUGFyYW0iLCJza2lsbEF0ayIsIlNraWxsNFBhcmFtIiwiRklOQUwiLCJzZXRBbmdsZSIsImRpckNvbnZlckFuZ2xlIiwidmVsb2NpdHkiLCJzZXQiLCJtdWx0aXBseVNjYWxhciIsInNwZWVkIiwib25UcmlnZ2VyIiwiaSIsIm9iamVjdCIsIlRyaWdnZXIiLCJzdGF5IiwiQ291bnREb3duVXRpbCIsInRpbWUiLCJnZXRMYXN0QXRrVGltZSIsImdhbWVSYXRpbyIsInNldExhc3RBdGtUaW1lIiwic3VmZmVyQXRrIiwic2tpbGxTcGVjaWFsaXR5cyIsInVwZGF0ZUZyYW1lIiwiaXNHYW1lUHVhc2UiLCJzdG9wTG9vcEVmZmVjdCIsInJlbW92ZVNlbGYiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsWUFB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UUFDRTtNQUNIOztNQUNEUCxDQUFDLENBQUNRLGNBQUYsQ0FBaUIsQ0FBakIsRUFBb0JwRCxjQUFjLENBQUNnRCxhQUFmLENBQTZCQyxJQUFqRDtNQUNBTCxDQUFDLENBQUNTLFNBQUYsQ0FBWTtRQUNSQyxnQkFBZ0IsRUFBRSxLQUFLQSxnQkFEZjtRQUVSeEIsR0FBRyxFQUFFLEtBQUtBO01BRkYsQ0FBWjtJQUlIO0VBQ0osQ0FmRDs7RUFnQkFoQixDQUFDLENBQUNRLFNBQUYsQ0FBWWlDLFdBQVosR0FBMEIsVUFBVTFDLENBQVYsRUFBYTtJQUNuQyxJQUFJLEVBQUVYLFlBQVksV0FBWixDQUFxQnNELFdBQXJCLElBQW9DLEtBQUtwQyxRQUFMLElBQWlCLENBQXZELENBQUosRUFBK0Q7TUFDM0QsS0FBS0EsUUFBTCxJQUFpQlAsQ0FBakI7O01BQ0EsSUFBSSxLQUFLTyxRQUFMLElBQWlCLENBQXJCLEVBQXdCO1FBQ3BCckIsWUFBWSxXQUFaLENBQXFCMEIsUUFBckIsQ0FBOEJnQyxjQUE5QixDQUE2QyxPQUE3QztRQUNBLEtBQUtDLFVBQUw7TUFDSDtJQUNKO0VBQ0osQ0FSRDs7RUFTQSxPQUFPQyxVQUFVLENBQUMsQ0FBQ2xELENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0FoREQsQ0FnREdULFdBQVcsV0FoRGQsQ0FGQyxDQUFMO0FBbURBdUQsT0FBTyxXQUFQLEdBQWtCakQsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJG9iamVjdCA9IHJlcXVpcmUoXCIuL09iamVjdFwiKTtcclxudmFyICRyZW1vdGVBdWRpbyA9IHJlcXVpcmUoXCIuL1JlbW90ZUF1ZGlvXCIpO1xyXG52YXIgJGNvdW50RG93blV0aWwgPSByZXF1aXJlKFwiLi9Db3VudERvd25VdGlsXCIpO1xyXG52YXIgJHV0aWwgPSByZXF1aXJlKFwiLi9VdGlsXCIpO1xyXG52YXIgJGdsb2JhbFBhcmFtID0gcmVxdWlyZShcIi4vR2xvYmFsUGFyYW1cIik7XHJcbnZhciAkZ2FtZUNvbnRleHQgPSByZXF1aXJlKFwiLi9HYW1lQ29udGV4dFwiKTtcclxudmFyICRnYW1lU2tpbGxJbmZvID0gcmVxdWlyZShcIi4vR2FtZVNraWxsSW5mb1wiKTtcclxudmFyICRiYXNlQnVsbGV0ID0gcmVxdWlyZShcIi4vQmFzZUJ1bGxldFwiKTtcclxudmFyIGggPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgbSA9IGguY2NjbGFzcztcclxudmFyIHkgPVxyXG4gICAgKGgucHJvcGVydHksXHJcbiAgICAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICAgICAgZS5idXR0bGVUeXBlID0gJGJhc2VCdWxsZXQuQnVsbGV0VHlwZS5yX2J1bGxldF82O1xyXG4gICAgICAgICAgICBlLmxlZnRUaW1lID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5pbml0QnV0dGxlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdC5wcm90b3R5cGUuaW5pdEJ1dHRsZS5jYWxsKHRoaXMsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAkcmVtb3RlQXVkaW8uZGVmYXVsdC5pbnN0YW5jZS5wbGF5TG9vcEVmZmVjdChcImxhc2VyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRUaW1lID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnNraWxsSW5mby5yb2JvdFBhcmFtWzRdO1xyXG4gICAgICAgICAgICB0aGlzLmF0ayA9IE1hdGguY2VpbChcclxuICAgICAgICAgICAgICAgICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbVswXSAqXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5za2lsbFBhcmFtLnNraWxsQXRrWyRnYW1lU2tpbGxJbmZvLlNraWxsNFBhcmFtLkZJTkFMXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuZ2xlKCR1dGlsLmRlZmF1bHQuZGlyQ29udmVyQW5nbGUoZSkpO1xyXG4gICAgICAgICAgICB0LnByb3RvdHlwZS5pbml0QnV0dGxlLmNhbGwodGhpcywgZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnNldChlKS5tdWx0aXBseVNjYWxhcih0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUub25UcmlnZ2VyID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgdmFyIGkgPSB0Lm9iamVjdDtcclxuICAgICAgICAgICAgaWYgKGUgPT09ICRvYmplY3QuVHJpZ2dlci5zdGF5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgJGNvdW50RG93blV0aWwuQ291bnREb3duVXRpbC50aW1lIC0gaS5nZXRMYXN0QXRrVGltZSg1KSA8PVxyXG4gICAgICAgICAgICAgICAgICAgICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbVszXSAvICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5nYW1lUmF0aW9cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGkuc2V0TGFzdEF0a1RpbWUoNSwgJGNvdW50RG93blV0aWwuQ291bnREb3duVXRpbC50aW1lKTtcclxuICAgICAgICAgICAgICAgIGkuc3VmZmVyQXRrKHtcclxuICAgICAgICAgICAgICAgICAgICBza2lsbFNwZWNpYWxpdHlzOiB0aGlzLnNraWxsU3BlY2lhbGl0eXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYXRrOiB0aGlzLmF0a1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLnVwZGF0ZUZyYW1lID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgaWYgKCEoJGdsb2JhbFBhcmFtLmRlZmF1bHQuaXNHYW1lUHVhc2UgfHwgdGhpcy5sZWZ0VGltZSA8PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0VGltZSAtPSB0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRyZW1vdGVBdWRpby5kZWZhdWx0Lmluc3RhbmNlLnN0b3BMb29wRWZmZWN0KFwibGFzZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFttXSwgZSk7XHJcbiAgICB9KSgkYmFzZUJ1bGxldC5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHk7XHJcbiJdfQ==