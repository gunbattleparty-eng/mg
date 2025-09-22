
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Bullet_28.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70b6ex4n5lOKbn18XVK3EhH', 'Bullet_28');
// game_script/scripts/Bullet_28.js

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
    e.buttleType = $baseBullet.BulletType.oil_burn_area_no;
    e.leftTime = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    var o = this.skillParam.oilBurnAreaRange[$gameSkillInfo.Skill4Param.BASIC];
    this.setScale(cc.v3(o, o));
    this.atk = this.skillParam.oilBurnAreaAtk[$gameSkillInfo.Skill4Param.BASIC];
    this.leftTime = this.skillParam.oilBurnAreaTime;
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && (e == $object.Trigger.enter || e == $object.Trigger.stay)) {
      var i = t.object;

      if ($countDownUtil.CountDownUtil.time - i.getLastAtkTime(7) <= this.skillParam.oilBurnAreaInterval / $gameContext["default"].ins.gameRatio) {
        return;
      }

      i.setLastAtkTime(7, $countDownUtil.CountDownUtil.time);
      i.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });
    }
  };

  e.prototype.updateFrame = function (t) {
    if (!this.isUse) {
      this.leftTime -= t;

      if (this.leftTime <= 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJ1bGxldF8yOC5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkY291bnREb3duVXRpbCIsIiRnYW1lQ29udGV4dCIsIiRnYW1lU2tpbGxJbmZvIiwiJGJhc2VCdWxsZXQiLCJkIiwiY2MiLCJfZGVjb3JhdG9yIiwicCIsImNjY2xhc3MiLCJmIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnV0dGxlVHlwZSIsIkJ1bGxldFR5cGUiLCJvaWxfYnVybl9hcmVhX25vIiwibGVmdFRpbWUiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0QnV0dGxlIiwiaSIsImNhbGwiLCJza2lsbFBhcmFtIiwib2lsQnVybkFyZWFSYW5nZSIsIlNraWxsNFBhcmFtIiwiQkFTSUMiLCJzZXRTY2FsZSIsInYzIiwiYXRrIiwib2lsQnVybkFyZWFBdGsiLCJvaWxCdXJuQXJlYVRpbWUiLCJvblRyaWdnZXIiLCJpc1VzZSIsIlRyaWdnZXIiLCJlbnRlciIsInN0YXkiLCJvYmplY3QiLCJDb3VudERvd25VdGlsIiwidGltZSIsImdldExhc3RBdGtUaW1lIiwib2lsQnVybkFyZWFJbnRlcnZhbCIsImlucyIsImdhbWVSYXRpbyIsInNldExhc3RBdGtUaW1lIiwic3VmZmVyQXRrIiwiaWQiLCJza2lsbElkIiwic2tpbGxTcGVjaWFsaXR5cyIsInVwZGF0ZUZyYW1lIiwicmVtb3ZlU2VsZiIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxjQUFjLEdBQUdELE9BQU8sQ0FBQyxpQkFBRCxDQUE1Qjs7QUFDQSxJQUFJRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlHLGNB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RCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQXpDRCxDQXlDR1QsV0FBVyxXQXpDZCxDQUZDLENBQUw7QUE0Q0FrRCxPQUFPLFdBQVAsR0FBa0I1QyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkb2JqZWN0ID0gcmVxdWlyZShcIi4vT2JqZWN0XCIpO1xyXG52YXIgJGNvdW50RG93blV0aWwgPSByZXF1aXJlKFwiLi9Db3VudERvd25VdGlsXCIpO1xyXG52YXIgJGdhbWVDb250ZXh0ID0gcmVxdWlyZShcIi4vR2FtZUNvbnRleHRcIik7XHJcbnZhciAkZ2FtZVNraWxsSW5mbyA9IHJlcXVpcmUoXCIuL0dhbWVTa2lsbEluZm9cIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciBkID0gY2MuX2RlY29yYXRvcjtcclxudmFyIHAgPSBkLmNjY2xhc3M7XHJcbnZhciBmID1cclxuICAgIChkLnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUuYnV0dGxlVHlwZSA9ICRiYXNlQnVsbGV0LkJ1bGxldFR5cGUub2lsX2J1cm5fYXJlYV9ubztcclxuICAgICAgICAgICAgZS5sZWZ0VGltZSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICAgICAgZS5wcm90b3R5cGUuaW5pdEJ1dHRsZSA9IGZ1bmN0aW9uIChlLCBpKSB7XHJcbiAgICAgICAgICAgIHQucHJvdG90eXBlLmluaXRCdXR0bGUuY2FsbCh0aGlzLCBlLCBpKTtcclxuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnNraWxsUGFyYW0ub2lsQnVybkFyZWFSYW5nZVskZ2FtZVNraWxsSW5mby5Ta2lsbDRQYXJhbS5CQVNJQ107XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoY2MudjMobywgbykpO1xyXG4gICAgICAgICAgICB0aGlzLmF0ayA9IHRoaXMuc2tpbGxQYXJhbS5vaWxCdXJuQXJlYUF0a1skZ2FtZVNraWxsSW5mby5Ta2lsbDRQYXJhbS5CQVNJQ107XHJcbiAgICAgICAgICAgIHRoaXMubGVmdFRpbWUgPSB0aGlzLnNraWxsUGFyYW0ub2lsQnVybkFyZWFUaW1lO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUub25UcmlnZ2VyID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVXNlICYmIChlID09ICRvYmplY3QuVHJpZ2dlci5lbnRlciB8fCBlID09ICRvYmplY3QuVHJpZ2dlci5zdGF5KSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGkgPSB0Lm9iamVjdDtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAkY291bnREb3duVXRpbC5Db3VudERvd25VdGlsLnRpbWUgLSBpLmdldExhc3RBdGtUaW1lKDcpIDw9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5za2lsbFBhcmFtLm9pbEJ1cm5BcmVhSW50ZXJ2YWwgLyAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2FtZVJhdGlvXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpLnNldExhc3RBdGtUaW1lKDcsICRjb3VudERvd25VdGlsLkNvdW50RG93blV0aWwudGltZSk7XHJcbiAgICAgICAgICAgICAgICBpLnN1ZmZlckF0ayh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2tpbGxJZCxcclxuICAgICAgICAgICAgICAgICAgICBza2lsbFNwZWNpYWxpdHlzOiB0aGlzLnNraWxsU3BlY2lhbGl0eXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYXRrOiB0aGlzLmF0a1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLnVwZGF0ZUZyYW1lID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVXNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRUaW1lIC09IHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWZ0VGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtwXSwgZSk7XHJcbiAgICB9KSgkYmFzZUJ1bGxldC5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGY7XHJcbiJdfQ==