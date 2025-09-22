
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/RGun_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72137U1naFF5ac6XFMujP/L', 'RGun_4');
// game_script/scripts/RGun_4.js

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
      return 5 === t.id;
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
    var e = $gameContext["default"].ins.getRangeRankEnemy(this.pointNode, $gameContext["default"].ins.skillInfo.robotParam[2]);

    if (!e) {
      this.timeLeft = 1;
      return !1;
    }

    var i = e.node.position.sub(cc.v3(0, -200)).normalize();
    this.isAttacking = !0;
    this.createButtle(i);
    this.schedulesOnce(function () {
      t.timeLeft = $gameContext["default"].ins.skillInfo.robotParam[1];
      t.isAttacking = !1;
    }, $gameContext["default"].ins.skillInfo.robotParam[5]);
  };

  e.prototype.createButtle = function (t) {
    var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.r_bullet_4);

    if (!e) {
      var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_4);
      e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.robotFlyLayer.parent).getComponent($baseBullet["default"]);
    }

    e.setPosition(cc.v3(0, -200));
    e.initButtle(t);
    e.insert($gameContext["default"].ins.robotFlyLayer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJHdW5fNC5qcyJdLCJuYW1lcyI6WyJvIiwiJGFzc2V0c0xvYWRlciIsInJlcXVpcmUiLCIkYXNzZXRzTWFwIiwiJHJlc1V0aWwiLCIkY29uZmlnQ29udGV4dCIsIiRnbG9iYWxQYXJhbSIsIiRiYXNlQnVsbGV0IiwiJGdhbWVDb250ZXh0IiwicCIsInQiLCJlIiwiaSIsImNhbGwiLCJpbnMiLCJza2lsbEluZm8iLCJyb2JvdFBhcmFtIiwiaW5zdGFuY2UiLCJyb2JvdENvbmZpZ3MiLCJmaW5kIiwiaWQiLCJQZXRzc2tpbl9za2lsbF92YWx1ZSIsInRpbWVMZWZ0IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwidXBkYXRlRiIsImlzQXR0YWNraW5nIiwiaXNHYW1lUHVhc2UiLCJzdGFydEd1biIsImdldFJhbmdlUmFua0VuZW15IiwicG9pbnROb2RlIiwibm9kZSIsInBvc2l0aW9uIiwic3ViIiwiY2MiLCJ2MyIsIm5vcm1hbGl6ZSIsImNyZWF0ZUJ1dHRsZSIsInNjaGVkdWxlc09uY2UiLCJnZXRCdXR0bGVQb29sIiwiQnVsbGV0VHlwZSIsInJfYnVsbGV0XzQiLCJnZXRSZXMiLCJCdW5kbGVOYW1lcyIsIkdhbWUiLCJBc3NldHNNYXAiLCJHYW1lQnVuZGxlcyIsInByZWZhYnMiLCJhc3NldHNMaXN0IiwiUkJ1bGxldF80IiwiUmVzVXRpbCIsImluc3RhbnRpYXRlIiwicm9ib3RGbHlMYXllciIsInBhcmVudCIsImdldENvbXBvbmVudCIsInNldFBvc2l0aW9uIiwiaW5pdEJ1dHRsZSIsImluc2VydCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlFLFFBQVEsR0FBR0Ys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LENBQVYsRUFBYTtJQUNwQyxJQUFJQyxDQUFDLEdBQUdILFlBQVksV0FBWixDQUFxQk0sR0FBckIsQ0FBeUJ5QixhQUF6QixDQUF1Q2hDLFdBQVcsQ0FBQ2lDLFVBQVosQ0FBdUJDLFVBQTlELENBQVI7O0lBQ0EsSUFBSSxDQUFDOUIsQ0FBTCxFQUFRO01BQ0osSUFBSUMsQ0FBQyxHQUFHWCxhQUFhLFdBQWIsQ0FBc0JnQixRQUF0QixDQUErQnlCLE1BQS9CLENBQ0p2QyxVQUFVLENBQUN3QyxXQUFYLENBQXVCQyxJQURuQixFQUVKekMsVUFBVSxDQUFDMEMsU0FBWCxDQUFxQkMsV0FBckIsQ0FBaUNDLE9BQWpDLENBQXlDQyxVQUF6QyxDQUFvREMsU0FGaEQsQ0FBUjtNQUlBdEMsQ0FBQyxHQUFHUCxRQUFRLENBQUM4QyxPQUFULENBQWlCQyxXQUFqQixDQUE2QnZDLENBQTdCLEVBQWdDSixZQUFZLFdBQVosQ0FBcUJNLEdBQXJCLENBQXlCc0MsYUFBekIsQ0FBdUNDLE1BQXZFLEVBQStFQyxZQUEvRSxDQUNBL0MsV0FBVyxXQURYLENBQUo7SUFHSDs7SUFDREksQ0FBQyxDQUFDNEMsV0FBRixDQUFjckIsRUFBRSxDQUFDQyxFQUFILENBQU0sQ0FBTixFQUFTLENBQUMsR0FBVixDQUFkO0lBQ0F4QixDQUFDLENBQUM2QyxVQUFGLENBQWE5QyxDQUFiO0lBQ0FDLENBQUMsQ0FBQzhDLE1BQUYsQ0FBU2pELFlBQVksV0FBWixDQUFxQk0sR0FBckIsQ0FBeUJzQyxhQUFsQztFQUNILENBZEQ7O0VBZUEsT0FBT3pDLENBQVA7QUFDSCxDQXJETyxDQXFETFQsT0FBTyxDQUFDLFdBQUQsQ0FBUCxXQXJESyxDQUFSOztBQXNEQXdELE9BQU8sV0FBUCxHQUFrQmpELENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRhc3NldHNMb2FkZXIgPSByZXF1aXJlKFwiLi9Bc3NldHNMb2FkZXJcIik7XHJcbnZhciAkYXNzZXRzTWFwID0gcmVxdWlyZShcIi4vQXNzZXRzTWFwXCIpO1xyXG52YXIgJHJlc1V0aWwgPSByZXF1aXJlKFwiLi9SZXNVdGlsXCIpO1xyXG52YXIgJGNvbmZpZ0NvbnRleHQgPSByZXF1aXJlKFwiLi9Db25maWdDb250ZXh0XCIpO1xyXG52YXIgJGdsb2JhbFBhcmFtID0gcmVxdWlyZShcIi4vR2xvYmFsUGFyYW1cIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciAkZ2FtZUNvbnRleHQgPSByZXF1aXJlKFwiLi9HYW1lQ29udGV4dFwiKTtcclxudmFyIHAgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoZSkge1xyXG4gICAgICAgIHZhciBpID0gdC5jYWxsKHRoaXMsIGUpIHx8IHRoaXM7XHJcbiAgICAgICAgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnNraWxsSW5mby5yb2JvdFBhcmFtID0gJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5yb2JvdENvbmZpZ3MuZmluZChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gNSA9PT0gdC5pZDtcclxuICAgICAgICB9KS5QZXRzc2tpbl9za2lsbF92YWx1ZTtcclxuICAgICAgICBpLnRpbWVMZWZ0ID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnNraWxsSW5mby5yb2JvdFBhcmFtWzFdO1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUudXBkYXRlRiA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdC5wcm90b3R5cGUudXBkYXRlRi5jYWxsKHRoaXMsIGUpO1xyXG4gICAgICAgIGlmICghKHRoaXMuaXNBdHRhY2tpbmcgfHwgJGdsb2JhbFBhcmFtLmRlZmF1bHQuaXNHYW1lUHVhc2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUxlZnQgLT0gZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZUxlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEd1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnN0YXJ0R3VuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICB2YXIgZSA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRSYW5nZVJhbmtFbmVteShcclxuICAgICAgICAgICAgdGhpcy5wb2ludE5vZGUsXHJcbiAgICAgICAgICAgICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbVsyXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKCFlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUxlZnQgPSAxO1xyXG4gICAgICAgICAgICByZXR1cm4gITE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpID0gZS5ub2RlLnBvc2l0aW9uLnN1YihjYy52MygwLCAtMjAwKSkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy5pc0F0dGFja2luZyA9ICEwO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dGxlKGkpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVzT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHQudGltZUxlZnQgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bMV07XHJcbiAgICAgICAgICAgIHQuaXNBdHRhY2tpbmcgPSAhMTtcclxuICAgICAgICB9LCAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bNV0pO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmNyZWF0ZUJ1dHRsZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2V0QnV0dGxlUG9vbCgkYmFzZUJ1bGxldC5CdWxsZXRUeXBlLnJfYnVsbGV0XzQpO1xyXG4gICAgICAgIGlmICghZSkge1xyXG4gICAgICAgICAgICB2YXIgaSA9ICRhc3NldHNMb2FkZXIuZGVmYXVsdC5pbnN0YW5jZS5nZXRSZXMoXHJcbiAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkJ1bmRsZU5hbWVzLkdhbWUsXHJcbiAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkFzc2V0c01hcC5HYW1lQnVuZGxlcy5wcmVmYWJzLmFzc2V0c0xpc3QuUkJ1bGxldF80XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGUgPSAkcmVzVXRpbC5SZXNVdGlsLmluc3RhbnRpYXRlKGksICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5yb2JvdEZseUxheWVyLnBhcmVudCkuZ2V0Q29tcG9uZW50KFxyXG4gICAgICAgICAgICAgICAgJGJhc2VCdWxsZXQuZGVmYXVsdFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnNldFBvc2l0aW9uKGNjLnYzKDAsIC0yMDApKTtcclxuICAgICAgICBlLmluaXRCdXR0bGUodCk7XHJcbiAgICAgICAgZS5pbnNlcnQoJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnJvYm90Rmx5TGF5ZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBlO1xyXG59KShyZXF1aXJlKFwiLi9CYXNlR3VuXCIpLmRlZmF1bHQpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBwO1xyXG4iXX0=