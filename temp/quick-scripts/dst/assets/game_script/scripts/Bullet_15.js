
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Bullet_15.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc455lGkQNJiZNifn8y1FcO', 'Bullet_15');
// game_script/scripts/Bullet_15.js

"use strict";

var o;

var $object = require("./Object");

var $countDownUtil = require("./CountDownUtil");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $enemyStatus = require("./EnemyStatus");

var $baseBullet = require("./BaseBullet");

var p = cc._decorator;
var f = p.ccclass;
var h = (p.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.thunder_matrix;
    e.leftTime = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.atk = this.skillParam.thunderMatrixAtk[$gameSkillInfo.Skill4Param.FINAL];
    this.leftTime = this.skillParam.thunderMatrixTime;
    var o = this.skillParam.thunderMatrixRange;
    this.setScale(cc.v3(o, o));
  };

  e.prototype.onTrigger = function (t, e) {
    var i = t.object;

    if (e === $object.Trigger.stay) {
      if ($countDownUtil.CountDownUtil.time - i.getLastAtkTime(2) <= this.skillParam.thunderMatrixAtkInterval / $gameContext["default"].ins.gameRatio) {
        return;
      }

      i.setLastAtkTime(2, $countDownUtil.CountDownUtil.time);
      i.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });
      var o = {
        type: $enemyStatus.EnemyDebuffType.SLOW,
        timeLeft: this.skillParam.thunderMatrixSpeedSlowTime,
        value: this.skillParam.thunderMatrixSpeedSlow
      };
      i.sufferDebuff(o);
    }
  };

  e.prototype.updateFrame = function (t) {
    this.leftTime -= t;

    if (this.leftTime <= 0) {
      this.removeSelf();
    }
  };

  return __decorate([f], e);
}($baseBullet["default"]));
exports["default"] = h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJ1bGxldF8xNS5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkY291bnREb3duVXRpbCIsIiRnYW1lQ29udGV4dCIsIiRnYW1lU2tpbGxJbmZvIiwiJGVuZW15U3RhdHVzIiwiJGJhc2VCdWxsZXQiLCJwIiwiY2MiLCJfZGVjb3JhdG9yIiwiZiIsImNjY2xhc3MiLCJoIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnV0dGxlVHlwZSIsIkJ1bGxldFR5cGUiLCJ0aHVuZGVyX21hdHJpeCIsImxlZnRUaW1lIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEJ1dHRsZSIsImkiLCJjYWxsIiwiYXRrIiwic2tpbGxQYXJhbSIsInRodW5kZXJNYXRyaXhBdGsiLCJTa2lsbDRQYXJhbSIsIkZJTkFMIiwidGh1bmRlck1hdHJpeFRpbWUiLCJ0aHVuZGVyTWF0cml4UmFuZ2UiLCJzZXRTY2FsZSIsInYzIiwib25UcmlnZ2VyIiwib2JqZWN0IiwiVHJpZ2dlciIsInN0YXkiLCJDb3VudERvd25VdGlsIiwidGltZSIsImdldExhc3RBdGtUaW1lIiwidGh1bmRlck1hdHJpeEF0a0ludGVydmFsIiwiaW5zIiwiZ2FtZVJhdGlvIiwic2V0TGFzdEF0a1RpbWUiLCJzdWZmZXJBdGsiLCJpZCIsInNraWxsSWQiLCJza2lsbFNwZWNpYWxpdHlzIiwidHlwZSIsIkVuZW15RGVidWZmVHlwZSIsIlNMT1ciLCJ0aW1lTGVmdCIsInRodW5kZXJNYXRyaXhTcGVlZFNsb3dUaW1lIiwidmFsdWUiLCJ0aHVuZGVyTWF0cml4U3BlZWRTbG93Iiwic3VmZmVyRGVidWZmIiwidXBkYXRlRnJhbWUiLCJyZW1vdmVTZWxmIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxPQUFPLEdB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SDtFQUNKLENBdEJEOztFQXVCQWdCLENBQUMsQ0FBQ1EsU0FBRixDQUFZb0MsV0FBWixHQUEwQixVQUFVN0MsQ0FBVixFQUFhO0lBQ25DLEtBQUtPLFFBQUwsSUFBaUJQLENBQWpCOztJQUNBLElBQUksS0FBS08sUUFBTCxJQUFpQixDQUFyQixFQUF3QjtNQUNwQixLQUFLdUMsVUFBTDtJQUNIO0VBQ0osQ0FMRDs7RUFNQSxPQUFPQyxVQUFVLENBQUMsQ0FBQ25ELENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0E3Q0QsQ0E2Q0dULFdBQVcsV0E3Q2QsQ0FGQyxDQUFMO0FBZ0RBd0QsT0FBTyxXQUFQLEdBQWtCbEQsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJG9iamVjdCA9IHJlcXVpcmUoXCIuL09iamVjdFwiKTtcclxudmFyICRjb3VudERvd25VdGlsID0gcmVxdWlyZShcIi4vQ291bnREb3duVXRpbFwiKTtcclxudmFyICRnYW1lQ29udGV4dCA9IHJlcXVpcmUoXCIuL0dhbWVDb250ZXh0XCIpO1xyXG52YXIgJGdhbWVTa2lsbEluZm8gPSByZXF1aXJlKFwiLi9HYW1lU2tpbGxJbmZvXCIpO1xyXG52YXIgJGVuZW15U3RhdHVzID0gcmVxdWlyZShcIi4vRW5lbXlTdGF0dXNcIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciBwID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGYgPSBwLmNjY2xhc3M7XHJcbnZhciBoID1cclxuICAgIChwLnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUuYnV0dGxlVHlwZSA9ICRiYXNlQnVsbGV0LkJ1bGxldFR5cGUudGh1bmRlcl9tYXRyaXg7XHJcbiAgICAgICAgICAgIGUubGVmdFRpbWUgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgICAgIGUucHJvdG90eXBlLmluaXRCdXR0bGUgPSBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgICAgICB0LnByb3RvdHlwZS5pbml0QnV0dGxlLmNhbGwodGhpcywgZSwgaSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrID0gdGhpcy5za2lsbFBhcmFtLnRodW5kZXJNYXRyaXhBdGtbJGdhbWVTa2lsbEluZm8uU2tpbGw0UGFyYW0uRklOQUxdO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRUaW1lID0gdGhpcy5za2lsbFBhcmFtLnRodW5kZXJNYXRyaXhUaW1lO1xyXG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMuc2tpbGxQYXJhbS50aHVuZGVyTWF0cml4UmFuZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoY2MudjMobywgbykpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUub25UcmlnZ2VyID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgdmFyIGkgPSB0Lm9iamVjdDtcclxuICAgICAgICAgICAgaWYgKGUgPT09ICRvYmplY3QuVHJpZ2dlci5zdGF5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgJGNvdW50RG93blV0aWwuQ291bnREb3duVXRpbC50aW1lIC0gaS5nZXRMYXN0QXRrVGltZSgyKSA8PVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2tpbGxQYXJhbS50aHVuZGVyTWF0cml4QXRrSW50ZXJ2YWwgLyAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2FtZVJhdGlvXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpLnNldExhc3RBdGtUaW1lKDIsICRjb3VudERvd25VdGlsLkNvdW50RG93blV0aWwudGltZSk7XHJcbiAgICAgICAgICAgICAgICBpLnN1ZmZlckF0ayh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2tpbGxJZCxcclxuICAgICAgICAgICAgICAgICAgICBza2lsbFNwZWNpYWxpdHlzOiB0aGlzLnNraWxsU3BlY2lhbGl0eXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYXRrOiB0aGlzLmF0a1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLlNMT1csXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZUxlZnQ6IHRoaXMuc2tpbGxQYXJhbS50aHVuZGVyTWF0cml4U3BlZWRTbG93VGltZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5za2lsbFBhcmFtLnRodW5kZXJNYXRyaXhTcGVlZFNsb3dcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpLnN1ZmZlckRlYnVmZihvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUudXBkYXRlRnJhbWUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRUaW1lIC09IHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZnRUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbZl0sIGUpO1xyXG4gICAgfSkoJGJhc2VCdWxsZXQuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBoO1xyXG4iXX0=