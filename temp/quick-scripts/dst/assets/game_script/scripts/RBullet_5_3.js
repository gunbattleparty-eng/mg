
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/RBullet_5_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7222dqcdVRL7JLrAOwzQbRD', 'RBullet_5_3');
// game_script/scripts/RBullet_5_3.js

"use strict";

var o;

var $object = require("./Object");

var $countDownUtil = require("./CountDownUtil");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var d = cc._decorator;
var p = d.ccclass;
var f = (d.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.r_bullet_5_3;
    e.timeLeft = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    t.prototype.initButtle.call(this, e, null);
    this.atk = Math.ceil($gameContext["default"].ins.skillInfo.robotParam[6] * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]);
    var i = $gameContext["default"].ins.skillInfo.robotParam[9];
    this.setScale(cc.v3(i, i));
    this.timeLeft = $gameContext["default"].ins.skillInfo.robotParam[8];
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && e == $object.Trigger.stay) {
      var i = t.object;

      if ($countDownUtil.CountDownUtil.time - i.getLastAtkTime(5) <= $gameContext["default"].ins.skillInfo.robotParam[7] / $gameContext["default"].ins.gameRatio) {
        return;
      }

      i.setLastAtkTime(5, $countDownUtil.CountDownUtil.time);
      i.sufferAtk({
        skillSpecialitys: [],
        atk: this.atk
      });
    }
  };

  e.prototype.updateFrame = function (t) {
    if (!(this.timeLeft <= 0)) {
      this.timeLeft -= t;

      if (this.timeLeft <= 0) {
        this.removeSelf();
      }
    }
  };

  return __decorate([p], e);
}($baseBullet["default"]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJCdWxsZXRfNV8zLmpzIl0sIm5hbWVzIjpbIm8iLCIkb2JqZWN0IiwicmVxdWlyZSIsIiRjb3VudERvd25VdGlsIiwiJGdhbWVDb250ZXh0IiwiJGdhbWVTa2lsbEluZm8iLCIkYmFzZUJ1bGxldCIsImQiLCJjYyIsIl9kZWNvcmF0b3IiLCJwIiwiY2NjbGFzcyIsImYiLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJidXR0bGVUeXBlIiwiQnVsbGV0VHlwZSIsInJfYnVsbGV0XzVfMyIsInRpbWVMZWZ0IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEJ1dHRsZSIsImNhbGwiLCJhdGsiLCJNYXRoIiwiY2VpbCIsImlucyIsInNraWxsSW5mbyIsInJvYm90UGFyYW0iLCJza2lsbFBhcmFtIiwic2tpbGxBdGsiLCJTa2lsbDRQYXJhbSIsIkZJTkFMIiwiaSIsInNldFNjYWxlIiwidjMiLCJvblRyaWdnZXIiLCJpc1VzZSIsIlRyaWdnZXIiLCJzdGF5Iiwib2JqZWN0IiwiQ291bnREb3duVXRpbCIsInRpbWUiLCJnZXRMYXN0QXRrVGltZSIsImdhbWVSYXRpbyIsInNldExhc3RBdGtUaW1lIiwic3VmZmVyQXRrIiwic2tpbGxTcGVjaWFsaXR5cyIsInVwZGF0ZUZyYW1lIiwicmVtb3ZlU2VsZiIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxjQUFjLEdBQUdELE9BQU8sQ0FBQyxpQkFBRCxDQUE1Qjs7QUFDQSxJQUFJRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlHLGNBQWMsR0FBR0gsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlJLFdBQVcsR0FB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OztFQVFBLE9BQU9DLFVBQVUsQ0FBQyxDQUFDM0MsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQTNDRCxDQTJDR1QsV0FBVyxXQTNDZCxDQUZDLENBQUw7QUE4Q0FnRCxPQUFPLFdBQVAsR0FBa0IxQyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkb2JqZWN0ID0gcmVxdWlyZShcIi4vT2JqZWN0XCIpO1xyXG52YXIgJGNvdW50RG93blV0aWwgPSByZXF1aXJlKFwiLi9Db3VudERvd25VdGlsXCIpO1xyXG52YXIgJGdhbWVDb250ZXh0ID0gcmVxdWlyZShcIi4vR2FtZUNvbnRleHRcIik7XHJcbnZhciAkZ2FtZVNraWxsSW5mbyA9IHJlcXVpcmUoXCIuL0dhbWVTa2lsbEluZm9cIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciBkID0gY2MuX2RlY29yYXRvcjtcclxudmFyIHAgPSBkLmNjY2xhc3M7XHJcbnZhciBmID1cclxuICAgIChkLnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUuYnV0dGxlVHlwZSA9ICRiYXNlQnVsbGV0LkJ1bGxldFR5cGUucl9idWxsZXRfNV8zO1xyXG4gICAgICAgICAgICBlLnRpbWVMZWZ0ID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5pbml0QnV0dGxlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdC5wcm90b3R5cGUuaW5pdEJ1dHRsZS5jYWxsKHRoaXMsIGUsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmF0ayA9IE1hdGguY2VpbChcclxuICAgICAgICAgICAgICAgICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbVs2XSAqXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5za2lsbFBhcmFtLnNraWxsQXRrWyRnYW1lU2tpbGxJbmZvLlNraWxsNFBhcmFtLkZJTkFMXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgaSA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbVs5XTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTY2FsZShjYy52MyhpLCBpKSk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUxlZnQgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bOF07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5vblRyaWdnZXIgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNVc2UgJiYgZSA9PSAkb2JqZWN0LlRyaWdnZXIuc3RheSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGkgPSB0Lm9iamVjdDtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAkY291bnREb3duVXRpbC5Db3VudERvd25VdGlsLnRpbWUgLSBpLmdldExhc3RBdGtUaW1lKDUpIDw9XHJcbiAgICAgICAgICAgICAgICAgICAgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnNraWxsSW5mby5yb2JvdFBhcmFtWzddIC8gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmdhbWVSYXRpb1xyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaS5zZXRMYXN0QXRrVGltZSg1LCAkY291bnREb3duVXRpbC5Db3VudERvd25VdGlsLnRpbWUpO1xyXG4gICAgICAgICAgICAgICAgaS5zdWZmZXJBdGsoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNraWxsU3BlY2lhbGl0eXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0azogdGhpcy5hdGtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGVGcmFtZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIGlmICghKHRoaXMudGltZUxlZnQgPD0gMCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUxlZnQgLT0gdDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVMZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW3BdLCBlKTtcclxuICAgIH0pKCRiYXNlQnVsbGV0LmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gZjtcclxuIl19