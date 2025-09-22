
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/RGun_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b923aCTvYxDZ6k9eJp+udA4', 'RGun_3');
// game_script/scripts/RGun_3.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $configContext = require("./ConfigContext");

var $globalParam = require("./GlobalParam");

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var p = function (t) {
  function e(e) {
    var i = t.call(this, e) || this;
    $gameContext["default"].ins.skillInfo.robotParam = $configContext["default"].instance.robotConfigs.find(function (t) {
      return 4 === t.id;
    }).Petsskin_skill_value;
    i.timeLeft = $gameContext["default"].ins.skillInfo.robotParam[1];
    return i;
  }

  __extends(e, t);

  e.prototype.updateF = function (e) {
    t.prototype.updateF.call(this, e);

    if (!(this.isAttacking || $globalParam["default"].isGamePuase)) {
      this.timeLeft -= e;

      if (this.timeLeft <= 0) {
        this.startGun();
      }
    }
  };

  e.prototype.startGun = function () {
    var t = this;
    this.isAttacking = !0;
    this.createButtle();
    this.schedulesOnce(function () {
      t.timeLeft = $gameContext["default"].ins.skillInfo.robotParam[1];
      t.isAttacking = !1;
    }, $gameContext["default"].ins.skillInfo.robotParam[5]);
  };

  e.prototype.createButtle = function () {
    var t = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.r_bullet_3);

    if (!t) {
      var e = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_3);
      t = $resUtil.ResUtil.instantiate(e, $gameContext["default"].ins.floorLayer.parent).getComponent($baseBullet["default"]);
    }

    t.setPosition(cc.v3(0, this.pointNode.y + $gameContext["default"].ins.skillInfo.robotParam[2]));
    t.initButtle(null);
    t.insert($gameContext["default"].ins.floorLayer);
  };

  return e;
}(require("./BaseGun")["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJHdW5fMy5qcyJdLCJuYW1lcyI6WyJvIiwiJGFzc2V0c0xvYWRlciIsInJlcXVpcmUiLCIkYXNzZXRzTWFwIiwiJHJlc1V0aWwiLCIkY29uZmlnQ29udGV4dCIsIiRnbG9iYWxQYXJhbSIsIiRiYXNlQnVsbGV0IiwiJGdhbWVDb250ZXh0IiwicCIsInQiLCJlIiwiaSIsImNhbGwiLCJpbnMiLCJza2lsbEluZm8iLCJyb2JvdFBhcmFtIiwiaW5zdGFuY2UiLCJyb2JvdENvbmZpZ3MiLCJmaW5kIiwiaWQiLCJQZXRzc2tpbl9za2lsbF92YWx1ZSIsInRpbWVMZWZ0IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwidXBkYXRlRiIsImlzQXR0YWNraW5nIiwiaXNHYW1lUHVhc2UiLCJzdGFydEd1biIsImNyZWF0ZUJ1dHRsZSIsInNjaGVkdWxlc09uY2UiLCJnZXRCdXR0bGVQb29sIiwiQnVsbGV0VHlwZSIsInJfYnVsbGV0XzMiLCJnZXRSZXMiLCJCdW5kbGVOYW1lcyIsIkdhbWUiLCJBc3NldHNNYXAiLCJHYW1lQnVuZGxlcyIsInByZWZhYnMiLCJhc3NldHNMaXN0IiwiUkJ1bGxldF8zIiwiUmVzVXRpbCIsImluc3RhbnRpYXRlIiwiZmxvb3JMYXllciIsInBhcmVudCIsImdldENvbXBvbmVudCIsInNldFBvc2l0aW9uIiwiY2MiLCJ2MyIsInBvaW50Tm9kZSIsInkiLCJpbml0QnV0dGxlIiwiaW5zZXJ0IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLGFBQWEsR0FBR0MsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlDLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHRixPQUFPLENBQUMsV0FBRCxDQUF0Qjs7QUFDQSxJQUFJRyxjQUFjLEdBQUdILE9BQU8sQ0FBQyxp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LENBQ0F2QyxXQUFXLFdBRFgsQ0FBSjtJQUdIOztJQUNERyxDQUFDLENBQUNxQyxXQUFGLENBQWNDLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNLENBQU4sRUFBUyxLQUFLQyxTQUFMLENBQWVDLENBQWYsR0FBbUIzQyxZQUFZLFdBQVosQ0FBcUJNLEdBQXJCLENBQXlCQyxTQUF6QixDQUFtQ0MsVUFBbkMsQ0FBOEMsQ0FBOUMsQ0FBNUIsQ0FBZDtJQUNBTixDQUFDLENBQUMwQyxVQUFGLENBQWEsSUFBYjtJQUNBMUMsQ0FBQyxDQUFDMkMsTUFBRixDQUFTN0MsWUFBWSxXQUFaLENBQXFCTSxHQUFyQixDQUF5QjhCLFVBQWxDO0VBQ0gsQ0FkRDs7RUFlQSxPQUFPakMsQ0FBUDtBQUNILENBNUNPLENBNENMVCxPQUFPLENBQUMsV0FBRCxDQUFQLFdBNUNLLENBQVI7O0FBNkNBb0QsT0FBTyxXQUFQLEdBQWtCN0MsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJGFzc2V0c0xvYWRlciA9IHJlcXVpcmUoXCIuL0Fzc2V0c0xvYWRlclwiKTtcclxudmFyICRhc3NldHNNYXAgPSByZXF1aXJlKFwiLi9Bc3NldHNNYXBcIik7XHJcbnZhciAkcmVzVXRpbCA9IHJlcXVpcmUoXCIuL1Jlc1V0aWxcIik7XHJcbnZhciAkY29uZmlnQ29udGV4dCA9IHJlcXVpcmUoXCIuL0NvbmZpZ0NvbnRleHRcIik7XHJcbnZhciAkZ2xvYmFsUGFyYW0gPSByZXF1aXJlKFwiLi9HbG9iYWxQYXJhbVwiKTtcclxudmFyICRiYXNlQnVsbGV0ID0gcmVxdWlyZShcIi4vQmFzZUJ1bGxldFwiKTtcclxudmFyICRnYW1lQ29udGV4dCA9IHJlcXVpcmUoXCIuL0dhbWVDb250ZXh0XCIpO1xyXG52YXIgcCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZShlKSB7XHJcbiAgICAgICAgdmFyIGkgPSB0LmNhbGwodGhpcywgZSkgfHwgdGhpcztcclxuICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW0gPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLnJvYm90Q29uZmlncy5maW5kKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA0ID09PSB0LmlkO1xyXG4gICAgICAgIH0pLlBldHNza2luX3NraWxsX3ZhbHVlO1xyXG4gICAgICAgIGkudGltZUxlZnQgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bMV07XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLnByb3RvdHlwZS51cGRhdGVGID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0LnByb3RvdHlwZS51cGRhdGVGLmNhbGwodGhpcywgZSk7XHJcbiAgICAgICAgaWYgKCEodGhpcy5pc0F0dGFja2luZyB8fCAkZ2xvYmFsUGFyYW0uZGVmYXVsdC5pc0dhbWVQdWFzZSkpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lTGVmdCAtPSBlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lTGVmdCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R3VuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuc3RhcnRHdW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaXNBdHRhY2tpbmcgPSAhMDtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRsZSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVzT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHQudGltZUxlZnQgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bMV07XHJcbiAgICAgICAgICAgIHQuaXNBdHRhY2tpbmcgPSAhMTtcclxuICAgICAgICB9LCAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bNV0pO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmNyZWF0ZUJ1dHRsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRCdXR0bGVQb29sKCRiYXNlQnVsbGV0LkJ1bGxldFR5cGUucl9idWxsZXRfMyk7XHJcbiAgICAgICAgaWYgKCF0KSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gJGFzc2V0c0xvYWRlci5kZWZhdWx0Lmluc3RhbmNlLmdldFJlcyhcclxuICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQnVuZGxlTmFtZXMuR2FtZSxcclxuICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQXNzZXRzTWFwLkdhbWVCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5SQnVsbGV0XzNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdCA9ICRyZXNVdGlsLlJlc1V0aWwuaW5zdGFudGlhdGUoZSwgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmZsb29yTGF5ZXIucGFyZW50KS5nZXRDb21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICAkYmFzZUJ1bGxldC5kZWZhdWx0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuc2V0UG9zaXRpb24oY2MudjMoMCwgdGhpcy5wb2ludE5vZGUueSArICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbVsyXSkpO1xyXG4gICAgICAgIHQuaW5pdEJ1dHRsZShudWxsKTtcclxuICAgICAgICB0Lmluc2VydCgkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZmxvb3JMYXllcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGU7XHJcbn0pKHJlcXVpcmUoXCIuL0Jhc2VHdW5cIikuZGVmYXVsdCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHA7XHJcbiJdfQ==