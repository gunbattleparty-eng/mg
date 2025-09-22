
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/RBullet_8_1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8baf9DkUmtAf4dE3uLN4Vlk', 'RBullet_8_1');
// game_script/scripts/RBullet_8_1.js

"use strict";

var o;

var $object = require("./Object");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var u = cc._decorator;
var d = u.ccclass;
var p = (u.property, new cc.Vec3(), function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.r_bullet_8_1;
    e.penetrationCount = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    this.speed = $gameContext["default"].ins.skillInfo.robotParam[6];
    t.prototype.initButtle.call(this, e, null);
    this.atk = Math.ceil($gameContext["default"].ins.skillInfo.robotParam[0] * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]);
    this.penetrationCount = $gameContext["default"].ins.skillInfo.robotParam[7];

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }
  };

  e.prototype.onTrigger = function (t, e) {
    if (!(this.penetrationCount <= 0)) {
      var i = t.object;
      return e === $object.Trigger.enter && (this.penetrationCount--, i.sufferAtk({
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      }), this.penetrationCount <= 0) ? this.removeSelf() : void 0;
    }
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJCdWxsZXRfOF8xLmpzIl0sIm5hbWVzIjpbIm8iLCIkb2JqZWN0IiwicmVxdWlyZSIsIiRnYW1lQ29udGV4dCIsIiRnYW1lU2tpbGxJbmZvIiwiJGJhc2VCdWxsZXQiLCJ1IiwiY2MiLCJfZGVjb3JhdG9yIiwiZCIsImNjY2xhc3MiLCJwIiwicHJvcGVydHkiLCJWZWMzIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJ1dHRsZVR5cGUiLCJCdWxsZXRUeXBlIiwicl9idWxsZXRfOF8xIiwicGVuZXRyYXRpb25Db3VudCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImluaXRCdXR0bGUiLCJzcGVlZCIsImlucyIsInNraWxsSW5mbyIsInJvYm90UGFyYW0iLCJjYWxsIiwiYXRrIiwiTWF0aCIsImNlaWwiLCJza2lsbFBhcmFtIiwic2tpbGxBdGsiLCJTa2lsbDRQYXJhbSIsIkZJTkFMIiwidmVsb2NpdHkiLCJzZXQiLCJtdWx0aXBseVNjYWxhciIsIm9uVHJpZ2dlciIsImkiLCJvYmplY3QiLCJUcmlnZ2VyIiwiZW50ZXIiLCJzdWZmZXJBdGsiLCJza2lsbFNwZWNpYWxpdHlzIiwicmVtb3ZlU2VsZiIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxZQUFZLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlFLGNBQWMsR0FBR0YsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUksQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0QsSUFBSUwsRUFBRSxDQUFDTSxJQUFQLEVBREMsRUFFQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLFVBQUYsR0FBZWIsV0FBVyxDQUFDYyxVQUFaLENBQXVCQyxZQUF0QztJQUNBTCxDQUFDLENBQUNNLGdCQUFGLEdBQXFCLENBQXJCO0lBQ0EsT0FBT04sQ0FBUDtFQUNIOztFQUNETyxTQUFTLENBQUNQLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNRLFNBQUYsQ0FBWUMsVUFBWixHQUF5QixVQUFVVCxDQUFWLEVBQWE7SUFDbEMsS0FBS1UsS0FBTCxHQUFhdEIsWUFBWSxXQUFaLENBQXFCdUIsR0FBckIsQ0FBeUJDLFNBQXpCLENBQW1DQyxVQUFuQyxDQUE4QyxDQUE5QyxDQUFiO0lBQ0FkLENBQUMsQ0FBQ1MsU0FBRixDQUFZQyxVQUFaLENBQXVCSyxJQUF2QixDQUE0QixJQUE1QixFQUFrQ2QsQ0FBbEMsRUFBcUMsSUFBckM7SUFDQSxLQUFLZSxHQUFMLEdBQVdDLElBQUksQ0FBQ0MsSUFBTCxDQUNQN0IsWUFBWSxXQUFaLENBQXFCdUIsR0FBckIsQ0FBeUJDLFNBQXpCLENBQW1DQyxVQUFuQyxDQUE4QyxDQUE5QyxJQUNJLEtBQUtLLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCOUIsY0FBYyxDQUFDK0IsV0FBZixDQUEyQkMsS0FBcEQsQ0FGRyxDQUFYO0lBSUEsS0FBS2YsZ0JBQUwsR0FBd0JsQixZQUFZLFdBQVosQ0FBcUJ1QixHQUFyQixDQUF5QkMsU0FBekIsQ0FBbUNDLFVBQW5DLENBQThDLENBQTlDLENBQXhCOztJQUNBLElBQUliLENBQUosRUFBTztNQUNILEtBQUtzQixRQUFMLENBQWNDLEdBQWQsQ0FBa0J2QixDQUFsQixFQUFxQndCLGNBQXJCLENBQW9DLEtBQUtkLEtBQXpDO0lBQ0g7RUFDSixDQVhEOztFQVlBVixDQUFDLENBQUNRLFNBQUYsQ0FBWWlCLFNBQVosR0FBd0IsVUFBVTFCLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtJQUNwQyxJQUFJLEVBQUUsS0FBS00sZ0JBQUwsSUFBeUIsQ0FBM0IsQ0FBSixFQUFtQztNQUMvQixJQUFJb0IsQ0FBQyxHQUFHM0IsQ0FBQyxDQUFDNEIsTUFBVjtNQUNBLE9BQU8zQixDQUFDLEtBQUtkLE9BQU8sQ0FBQzBDLE9BQVIsQ0FBZ0JDLEtBQXRCLEtBQ0YsS0FBS3ZCLGdCQUFMLElBQ0RvQixDQUFDLENBQUNJLFNBQUYsQ0FBWTtRQUNSQyxnQkFBZ0IsRUFBRSxLQUFLQSxnQkFEZjtRQUVSaEIsR0FBRyxFQUFFLEtBQUtBO01BRkYsQ0FBWixDQURDLEVBS0QsS0FBS1QsZ0JBQUwsSUFBeUIsQ0FOdEIsSUFPRCxLQUFLMEIsVUFBTCxFQVBDLEdBUUQsS0FBSyxDQVJYO0lBU0g7RUFDSixDQWJEOztFQWNBLE9BQU9DLFVBQVUsQ0FBQyxDQUFDdkMsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQW5DRCxDQW1DR1YsV0FBVyxXQW5DZCxDQUhDLENBQUw7QUF1Q0E0QyxPQUFPLFdBQVAsR0FBa0J0QyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkb2JqZWN0ID0gcmVxdWlyZShcIi4vT2JqZWN0XCIpO1xyXG52YXIgJGdhbWVDb250ZXh0ID0gcmVxdWlyZShcIi4vR2FtZUNvbnRleHRcIik7XHJcbnZhciAkZ2FtZVNraWxsSW5mbyA9IHJlcXVpcmUoXCIuL0dhbWVTa2lsbEluZm9cIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciB1ID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGQgPSB1LmNjY2xhc3M7XHJcbnZhciBwID1cclxuICAgICh1LnByb3BlcnR5LFxyXG4gICAgbmV3IGNjLlZlYzMoKSxcclxuICAgIChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICBlLmJ1dHRsZVR5cGUgPSAkYmFzZUJ1bGxldC5CdWxsZXRUeXBlLnJfYnVsbGV0XzhfMTtcclxuICAgICAgICAgICAgZS5wZW5ldHJhdGlvbkNvdW50ID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5pbml0QnV0dGxlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbVs2XTtcclxuICAgICAgICAgICAgdC5wcm90b3R5cGUuaW5pdEJ1dHRsZS5jYWxsKHRoaXMsIGUsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmF0ayA9IE1hdGguY2VpbChcclxuICAgICAgICAgICAgICAgICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbVswXSAqXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5za2lsbFBhcmFtLnNraWxsQXRrWyRnYW1lU2tpbGxJbmZvLlNraWxsNFBhcmFtLkZJTkFMXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnBlbmV0cmF0aW9uQ291bnQgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bN107XHJcbiAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnNldChlKS5tdWx0aXBseVNjYWxhcih0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUub25UcmlnZ2VyID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgaWYgKCEodGhpcy5wZW5ldHJhdGlvbkNvdW50IDw9IDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaSA9IHQub2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUgPT09ICRvYmplY3QuVHJpZ2dlci5lbnRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnBlbmV0cmF0aW9uQ291bnQtLSxcclxuICAgICAgICAgICAgICAgICAgICBpLnN1ZmZlckF0ayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsU3BlY2lhbGl0eXM6IHRoaXMuc2tpbGxTcGVjaWFsaXR5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXRrOiB0aGlzLmF0a1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZXRyYXRpb25Db3VudCA8PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5yZW1vdmVTZWxmKClcclxuICAgICAgICAgICAgICAgICAgICA6IHZvaWQgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2RdLCBlKTtcclxuICAgIH0pKCRiYXNlQnVsbGV0LmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcDtcclxuIl19