
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/RBullet_5_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a190/vv5tKgKahZOeIgq3Y', 'RBullet_5_2');
// game_script/scripts/RBullet_5_2.js

"use strict";

var o;

var $object = require("./Object");

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $gameContext = require("./GameContext");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var f = cc._decorator;
var h = f.ccclass;
var m = (f.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.r_bullet_5_2;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    this.speed = $gameContext["default"].ins.skillInfo.robotParam[3];
    t.prototype.initButtle.call(this, e, null);
    this.atk = Math.ceil($gameContext["default"].ins.skillInfo.robotParam[0] * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]);

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && e == $object.Trigger.enter) {
      var i = t.object;
      i.sufferAtk({
        skillSpecialitys: [],
        atk: this.atk
      });
      this.createMatrix(i.getPosition());
      return this.removeSelf();
    }
  };

  e.prototype.createMatrix = function (t) {
    var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.r_bullet_5_3);

    if (!e) {
      var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_5_3);
      e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.floorLayer.parent).getComponent($baseBullet["default"]);
    }

    e.setPosition(t.add(cc.v3(0, -50)));
    e.initButtle(null, null);
    e.insert($gameContext["default"].ins.floorLayer);
  };

  return __decorate([h], e);
}($baseBullet["default"]));
exports["default"] = m;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJCdWxsZXRfNV8yLmpzIl0sIm5hbWVzIjpbIm8iLCIkb2JqZWN0IiwicmVxdWlyZSIsIiRhc3NldHNMb2FkZXIiLCIkYXNzZXRzTWFwIiwiJHJlc1V0aWwiLCIkZ2FtZUNvbnRleHQiLCIkZ2FtZVNraWxsSW5mbyIsIiRiYXNlQnVsbGV0IiwiZiIsImNjIiwiX2RlY29yYXRvciIsImgiLCJjY2NsYXNzIiwibSIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJ1dHRsZVR5cGUiLCJCdWxsZXRUeXBlIiwicl9idWxsZXRfNV8yIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEJ1dHRsZSIsInNwZWVkIiwiaW5zIiwic2tpbGxJbmZvIiwicm9ib3RQYXJhbSIsImNhbGwiLCJhdGsiLCJNYXRoIiwiY2VpbCIsInNraWxsUGFyYW0iLCJza2lsbEF0ayIsIlNraWxsNFBhcmFtIiwiRklOQUwiLCJ2ZWxvY2l0eSIsInNldCIsIm11bHRpcGx5U2NhbGFyIiwib25UcmlnZ2VyIiwiaXNVc2UiLCJUcmlnZ2VyIiwiZW50ZXIiLCJpIiwib2JqZWN0Iiwic3VmZmVyQXRrIiwic2tpbGxTcGVjaWFsaXR5cyIsImNyZWF0ZU1hdHJpeCIsImdldFBvc2l0aW9uIiwicmVtb3ZlU2VsZiIsImdldEJ1dHRsZVBvb2wiLCJyX2J1bGxldF81XzMiLCJpbnN0YW5jZSIsImdldFJlcyIsIkJ1bmRsZU5hbWVzIiwiR2FtZSIsIkFzc2V0c01hcCIsIkdhbWVCdW5kbGVzIiwicHJlZmFicyIsImFzc2V0c0xpc3QiLCJSQnVsbGV0XzVfMyIsIlJlc1V0aWwiLCJpbnN0YW50aWF0ZSIsImZsb29yTGF5ZXIiLCJwYXJlbnQiLCJnZXRDb21wb25lbnQiLCJzZXRQb3NpdGlvbiIsImFkZCIsInYzIiwiaW5zZXJ0IiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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QWEsV0FBYixDQUFzQm1ELFFBQXRCLENBQStCQyxNQUEvQixDQUNKbkQsVUFBVSxDQUFDb0QsV0FBWCxDQUF1QkMsSUFEbkIsRUFFSnJELFVBQVUsQ0FBQ3NELFNBQVgsQ0FBcUJDLFdBQXJCLENBQWlDQyxPQUFqQyxDQUF5Q0MsVUFBekMsQ0FBb0RDLFdBRmhELENBQVI7TUFJQTdDLENBQUMsR0FBR1osUUFBUSxDQUFDMEQsT0FBVCxDQUFpQkMsV0FBakIsQ0FBNkJuQixDQUE3QixFQUFnQ3ZDLFlBQVksV0FBWixDQUFxQnFCLEdBQXJCLENBQXlCc0MsVUFBekIsQ0FBb0NDLE1BQXBFLEVBQTRFQyxZQUE1RSxDQUNBM0QsV0FBVyxXQURYLENBQUo7SUFHSDs7SUFDRFMsQ0FBQyxDQUFDbUQsV0FBRixDQUFjcEQsQ0FBQyxDQUFDcUQsR0FBRixDQUFNM0QsRUFBRSxDQUFDNEQsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFDLEVBQVYsQ0FBTixDQUFkO0lBQ0FyRCxDQUFDLENBQUNRLFVBQUYsQ0FBYSxJQUFiLEVBQW1CLElBQW5CO0lBQ0FSLENBQUMsQ0FBQ3NELE1BQUYsQ0FBU2pFLFlBQVksV0FBWixDQUFxQnFCLEdBQXJCLENBQXlCc0MsVUFBbEM7RUFDSCxDQWREOztFQWVBLE9BQU9PLFVBQVUsQ0FBQyxDQUFDNUQsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQTdDRCxDQTZDR1QsV0FBVyxXQTdDZCxDQUZDLENBQUw7QUFnREFpRSxPQUFPLFdBQVAsR0FBa0IzRCxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkb2JqZWN0ID0gcmVxdWlyZShcIi4vT2JqZWN0XCIpO1xyXG52YXIgJGFzc2V0c0xvYWRlciA9IHJlcXVpcmUoXCIuL0Fzc2V0c0xvYWRlclwiKTtcclxudmFyICRhc3NldHNNYXAgPSByZXF1aXJlKFwiLi9Bc3NldHNNYXBcIik7XHJcbnZhciAkcmVzVXRpbCA9IHJlcXVpcmUoXCIuL1Jlc1V0aWxcIik7XHJcbnZhciAkZ2FtZUNvbnRleHQgPSByZXF1aXJlKFwiLi9HYW1lQ29udGV4dFwiKTtcclxudmFyICRnYW1lU2tpbGxJbmZvID0gcmVxdWlyZShcIi4vR2FtZVNraWxsSW5mb1wiKTtcclxudmFyICRiYXNlQnVsbGV0ID0gcmVxdWlyZShcIi4vQmFzZUJ1bGxldFwiKTtcclxudmFyIGYgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgaCA9IGYuY2NjbGFzcztcclxudmFyIG0gPVxyXG4gICAgKGYucHJvcGVydHksXHJcbiAgICAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICAgICAgZS5idXR0bGVUeXBlID0gJGJhc2VCdWxsZXQuQnVsbGV0VHlwZS5yX2J1bGxldF81XzI7XHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICAgICAgZS5wcm90b3R5cGUuaW5pdEJ1dHRsZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bM107XHJcbiAgICAgICAgICAgIHQucHJvdG90eXBlLmluaXRCdXR0bGUuY2FsbCh0aGlzLCBlLCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5hdGsgPSBNYXRoLmNlaWwoXHJcbiAgICAgICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bMF0gKlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2tpbGxQYXJhbS5za2lsbEF0a1skZ2FtZVNraWxsSW5mby5Ta2lsbDRQYXJhbS5GSU5BTF1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkuc2V0KGUpLm11bHRpcGx5U2NhbGFyKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5vblRyaWdnZXIgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNVc2UgJiYgZSA9PSAkb2JqZWN0LlRyaWdnZXIuZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gdC5vYmplY3Q7XHJcbiAgICAgICAgICAgICAgICBpLnN1ZmZlckF0ayh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxTcGVjaWFsaXR5czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgYXRrOiB0aGlzLmF0a1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1hdHJpeChpLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5jcmVhdGVNYXRyaXggPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRCdXR0bGVQb29sKCRiYXNlQnVsbGV0LkJ1bGxldFR5cGUucl9idWxsZXRfNV8zKTtcclxuICAgICAgICAgICAgaWYgKCFlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaSA9ICRhc3NldHNMb2FkZXIuZGVmYXVsdC5pbnN0YW5jZS5nZXRSZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgJGFzc2V0c01hcC5CdW5kbGVOYW1lcy5HYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQXNzZXRzTWFwLkdhbWVCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5SQnVsbGV0XzVfM1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGUgPSAkcmVzVXRpbC5SZXNVdGlsLmluc3RhbnRpYXRlKGksICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5mbG9vckxheWVyLnBhcmVudCkuZ2V0Q29tcG9uZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICRiYXNlQnVsbGV0LmRlZmF1bHRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZS5zZXRQb3NpdGlvbih0LmFkZChjYy52MygwLCAtNTApKSk7XHJcbiAgICAgICAgICAgIGUuaW5pdEJ1dHRsZShudWxsLCBudWxsKTtcclxuICAgICAgICAgICAgZS5pbnNlcnQoJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmZsb29yTGF5ZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2hdLCBlKTtcclxuICAgIH0pKCRiYXNlQnVsbGV0LmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gbTtcclxuIl19