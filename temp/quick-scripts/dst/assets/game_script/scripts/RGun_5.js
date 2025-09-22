
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/RGun_5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f881R9fVtP+Kh0rta/UJcb', 'RGun_5');
// game_script/scripts/RGun_5.js

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
      return 6 === t.id;
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
    }, $gameContext["default"].ins.skillInfo.robotParam[5] + 0.3);
  };

  e.prototype.createButtle = function () {
    var t = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.r_bullet_5_1);

    if (!t) {
      var e = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_5_1);
      t = $resUtil.ResUtil.instantiate(e, $gameContext["default"].ins.robotFlyLayer.parent).getComponent($baseBullet["default"]);
    }

    t.setPosition(cc.v3(0, -350));
    t.pointNode = this.pointNode;
    t.initButtle(null);
    t.insert($gameContext["default"].ins.robotFlyLayer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJHdW5fNS5qcyJdLCJuYW1lcyI6WyJvIiwiJGFzc2V0c0xvYWRlciIsInJlcXVpcmUiLCIkYXNzZXRzTWFwIiwiJHJlc1V0aWwiLCIkY29uZmlnQ29udGV4dCIsIiRnbG9iYWxQYXJhbSIsIiRiYXNlQnVsbGV0IiwiJGdhbWVDb250ZXh0IiwicCIsInQiLCJlIiwiaSIsImNhbGwiLCJpbnMiLCJza2lsbEluZm8iLCJyb2JvdFBhcmFtIiwiaW5zdGFuY2UiLCJyb2JvdENvbmZpZ3MiLCJmaW5kIiwiaWQiLCJQZXRzc2tpbl9za2lsbF92YWx1ZSIsInRpbWVMZWZ0IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwidXBkYXRlRiIsImlzQXR0YWNraW5nIiwiaXNHYW1lUHVhc2UiLCJzdGFydEd1biIsImdldFJhbmdlUmFua0VuZW15IiwicG9pbnROb2RlIiwibm9kZSIsInBvc2l0aW9uIiwic3ViIiwiY2MiLCJ2MyIsIm5vcm1hbGl6ZSIsImNyZWF0ZUJ1dHRsZSIsInNjaGVkdWxlc09uY2UiLCJnZXRCdXR0bGVQb29sIiwiQnVsbGV0VHlwZSIsInJfYnVsbGV0XzVfMSIsImdldFJlcyIsIkJ1bmRsZU5hbWVzIiwiR2FtZSIsIkFzc2V0c01hcCIsIkdhbWVCdW5kbGVzIiwicHJlZmFicyIsImFzc2V0c0xpc3QiLCJSQnVsbGV0XzVfMSIsIlJlc1V0aWwiLCJpbnN0YW50aWF0ZSIsInJvYm90Rmx5TGF5ZXIiLCJwYXJlbnQiLCJnZXRDb21wb25lbnQiLCJzZXRQb3NpdGlvbiIsImluaXRCdXR0bGUiLCJpbnNlcnQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHQyxPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxRQUFRLEdB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QUEyQixZQUFZO0lBQ25DLElBQUkzQixDQUFDLEdBQUdGLFlBQVksV0FBWixDQUFxQk0sR0FBckIsQ0FBeUJ5QixhQUF6QixDQUF1Q2hDLFdBQVcsQ0FBQ2lDLFVBQVosQ0FBdUJDLFlBQTlELENBQVI7O0lBQ0EsSUFBSSxDQUFDL0IsQ0FBTCxFQUFRO01BQ0osSUFBSUMsQ0FBQyxHQUFHVixhQUFhLFdBQWIsQ0FBc0JnQixRQUF0QixDQUErQnlCLE1BQS9CLENBQ0p2QyxVQUFVLENBQUN3QyxXQUFYLENBQXVCQyxJQURuQixFQUVKekMsVUFBVSxDQUFDMEMsU0FBWCxDQUFxQkMsV0FBckIsQ0FBaUNDLE9BQWpDLENBQXlDQyxVQUF6QyxDQUFvREMsV0FGaEQsQ0FBUjtNQUlBdkMsQ0FBQyxHQUFHTixRQUFRLENBQUM4QyxPQUFULENBQWlCQyxXQUFqQixDQUE2QnhDLENBQTdCLEVBQWdDSCxZQUFZLFdBQVosQ0FBcUJNLEdBQXJCLENBQXlCc0MsYUFBekIsQ0FBdUNDLE1BQXZFLEVBQStFQyxZQUEvRSxDQUNBL0MsV0FBVyxXQURYLENBQUo7SUFHSDs7SUFDREcsQ0FBQyxDQUFDNkMsV0FBRixDQUFjckIsRUFBRSxDQUFDQyxFQUFILENBQU0sQ0FBTixFQUFTLENBQUMsR0FBVixDQUFkO0lBQ0F6QixDQUFDLENBQUNvQixTQUFGLEdBQWMsS0FBS0EsU0FBbkI7SUFDQXBCLENBQUMsQ0FBQzhDLFVBQUYsQ0FBYSxJQUFiO0lBQ0E5QyxDQUFDLENBQUMrQyxNQUFGLENBQVNqRCxZQUFZLFdBQVosQ0FBcUJNLEdBQXJCLENBQXlCc0MsYUFBbEM7RUFDSCxDQWZEOztFQWdCQSxPQUFPekMsQ0FBUDtBQUNILENBdERPLENBc0RMVCxPQUFPLENBQUMsV0FBRCxDQUFQLFdBdERLLENBQVI7O0FBdURBd0QsT0FBTyxXQUFQLEdBQWtCakQsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJGFzc2V0c0xvYWRlciA9IHJlcXVpcmUoXCIuL0Fzc2V0c0xvYWRlclwiKTtcclxudmFyICRhc3NldHNNYXAgPSByZXF1aXJlKFwiLi9Bc3NldHNNYXBcIik7XHJcbnZhciAkcmVzVXRpbCA9IHJlcXVpcmUoXCIuL1Jlc1V0aWxcIik7XHJcbnZhciAkY29uZmlnQ29udGV4dCA9IHJlcXVpcmUoXCIuL0NvbmZpZ0NvbnRleHRcIik7XHJcbnZhciAkZ2xvYmFsUGFyYW0gPSByZXF1aXJlKFwiLi9HbG9iYWxQYXJhbVwiKTtcclxudmFyICRiYXNlQnVsbGV0ID0gcmVxdWlyZShcIi4vQmFzZUJ1bGxldFwiKTtcclxudmFyICRnYW1lQ29udGV4dCA9IHJlcXVpcmUoXCIuL0dhbWVDb250ZXh0XCIpO1xyXG52YXIgcCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZShlKSB7XHJcbiAgICAgICAgdmFyIGkgPSB0LmNhbGwodGhpcywgZSkgfHwgdGhpcztcclxuICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW0gPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLnJvYm90Q29uZmlncy5maW5kKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA2ID09PSB0LmlkO1xyXG4gICAgICAgIH0pLlBldHNza2luX3NraWxsX3ZhbHVlO1xyXG4gICAgICAgIGkudGltZUxlZnQgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bMV07XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLnByb3RvdHlwZS51cGRhdGVGID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0LnByb3RvdHlwZS51cGRhdGVGLmNhbGwodGhpcywgZSk7XHJcbiAgICAgICAgaWYgKCEodGhpcy5pc0F0dGFja2luZyB8fCAkZ2xvYmFsUGFyYW0uZGVmYXVsdC5pc0dhbWVQdWFzZSkpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lTGVmdCAtPSBlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lTGVmdCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R3VuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuc3RhcnRHdW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBlID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmdldFJhbmdlUmFua0VuZW15KFxyXG4gICAgICAgICAgICB0aGlzLnBvaW50Tm9kZSxcclxuICAgICAgICAgICAgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnNraWxsSW5mby5yb2JvdFBhcmFtWzJdXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoIWUpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lTGVmdCA9IDE7XHJcbiAgICAgICAgICAgIHJldHVybiAhMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGkgPSBlLm5vZGUucG9zaXRpb24uc3ViKGNjLnYzKDAsIC0yMDApKS5ub3JtYWxpemUoKTtcclxuICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gITA7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCdXR0bGUoaSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZXNPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdC50aW1lTGVmdCA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbVsxXTtcclxuICAgICAgICAgICAgdC5pc0F0dGFja2luZyA9ICExO1xyXG4gICAgICAgIH0sICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbVs1XSArIDAuMyk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuY3JlYXRlQnV0dGxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmdldEJ1dHRsZVBvb2woJGJhc2VCdWxsZXQuQnVsbGV0VHlwZS5yX2J1bGxldF81XzEpO1xyXG4gICAgICAgIGlmICghdCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9ICRhc3NldHNMb2FkZXIuZGVmYXVsdC5pbnN0YW5jZS5nZXRSZXMoXHJcbiAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkJ1bmRsZU5hbWVzLkdhbWUsXHJcbiAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkFzc2V0c01hcC5HYW1lQnVuZGxlcy5wcmVmYWJzLmFzc2V0c0xpc3QuUkJ1bGxldF81XzFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdCA9ICRyZXNVdGlsLlJlc1V0aWwuaW5zdGFudGlhdGUoZSwgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnJvYm90Rmx5TGF5ZXIucGFyZW50KS5nZXRDb21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICAkYmFzZUJ1bGxldC5kZWZhdWx0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuc2V0UG9zaXRpb24oY2MudjMoMCwgLTM1MCkpO1xyXG4gICAgICAgIHQucG9pbnROb2RlID0gdGhpcy5wb2ludE5vZGU7XHJcbiAgICAgICAgdC5pbml0QnV0dGxlKG51bGwpO1xyXG4gICAgICAgIHQuaW5zZXJ0KCRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5yb2JvdEZseUxheWVyKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZTtcclxufSkocmVxdWlyZShcIi4vQmFzZUd1blwiKS5kZWZhdWx0KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcDtcclxuIl19