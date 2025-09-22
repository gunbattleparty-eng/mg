
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/RGun_6.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72b3aWYboxC5p/7srXbaXSO', 'RGun_6');
// game_script/scripts/RGun_6.js

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
      return 7 === t.id;
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

    var i = e.node.position.sub(cc.v3(150, -540)).normalize();
    this.isAttacking = !0;
    this.createButtle(i);
    this.schedulesOnce(function () {
      t.timeLeft = $gameContext["default"].ins.skillInfo.robotParam[1];
      t.isAttacking = !1;
    }, $gameContext["default"].ins.skillInfo.robotParam[4]);
  };

  e.prototype.createButtle = function (t) {
    var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.r_bullet_6);

    if (!e) {
      var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_6);
      e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.buttleLayer.parent).getComponent($baseBullet["default"]);
    }

    e.setPosition(cc.v3(150, -540));
    e.initButtle(t);
    e.insert($gameContext["default"].ins.buttleLayer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJHdW5fNi5qcyJdLCJuYW1lcyI6WyJvIiwiJGFzc2V0c0xvYWRlciIsInJlcXVpcmUiLCIkYXNzZXRzTWFwIiwiJHJlc1V0aWwiLCIkY29uZmlnQ29udGV4dCIsIiRnbG9iYWxQYXJhbSIsIiRiYXNlQnVsbGV0IiwiJGdhbWVDb250ZXh0IiwicCIsInQiLCJlIiwiaSIsImNhbGwiLCJpbnMiLCJza2lsbEluZm8iLCJyb2JvdFBhcmFtIiwiaW5zdGFuY2UiLCJyb2JvdENvbmZpZ3MiLCJmaW5kIiwiaWQiLCJQZXRzc2tpbl9za2lsbF92YWx1ZSIsInRpbWVMZWZ0IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwidXBkYXRlRiIsImlzQXR0YWNraW5nIiwiaXNHYW1lUHVhc2UiLCJzdGFydEd1biIsImdldFJhbmdlUmFua0VuZW15IiwicG9pbnROb2RlIiwibm9kZSIsInBvc2l0aW9uIiwic3ViIiwiY2MiLCJ2MyIsIm5vcm1hbGl6ZSIsImNyZWF0ZUJ1dHRsZSIsInNjaGVkdWxlc09uY2UiLCJnZXRCdXR0bGVQb29sIiwiQnVsbGV0VHlwZSIsInJfYnVsbGV0XzYiLCJnZXRSZXMiLCJCdW5kbGVOYW1lcyIsIkdhbWUiLCJBc3NldHNNYXAiLCJHYW1lQnVuZGxlcyIsInByZWZhYnMiLCJhc3NldHNMaXN0IiwiUkJ1bGxldF82IiwiUmVzVXRpbCIsImluc3RhbnRpYXRlIiwiYnV0dGxlTGF5ZXIiLCJwYXJlbnQiLCJnZXRDb21wb25lbnQiLCJzZXRQb3NpdGlvbiIsImluaXRCdXR0bGUiLCJpbnNlcnQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHQyxPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxRQUFRLEdBQUdGLE9B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QUFWLEVBQWE7SUFDcEMsSUFBSUMsQ0FBQyxHQUFHSCxZQUFZLFdBQVosQ0FBcUJNLEdBQXJCLENBQXlCeUIsYUFBekIsQ0FBdUNoQyxXQUFXLENBQUNpQyxVQUFaLENBQXVCQyxVQUE5RCxDQUFSOztJQUNBLElBQUksQ0FBQzlCLENBQUwsRUFBUTtNQUNKLElBQUlDLENBQUMsR0FBR1gsYUFBYSxXQUFiLENBQXNCZ0IsUUFBdEIsQ0FBK0J5QixNQUEvQixDQUNKdkMsVUFBVSxDQUFDd0MsV0FBWCxDQUF1QkMsSUFEbkIsRUFFSnpDLFVBQVUsQ0FBQzBDLFNBQVgsQ0FBcUJDLFdBQXJCLENBQWlDQyxPQUFqQyxDQUF5Q0MsVUFBekMsQ0FBb0RDLFNBRmhELENBQVI7TUFJQXRDLENBQUMsR0FBR1AsUUFBUSxDQUFDOEMsT0FBVCxDQUFpQkMsV0FBakIsQ0FBNkJ2QyxDQUE3QixFQUFnQ0osWUFBWSxXQUFaLENBQXFCTSxHQUFyQixDQUF5QnNDLFdBQXpCLENBQXFDQyxNQUFyRSxFQUE2RUMsWUFBN0UsQ0FDQS9DLFdBQVcsV0FEWCxDQUFKO0lBR0g7O0lBQ0RJLENBQUMsQ0FBQzRDLFdBQUYsQ0FBY3JCLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNLEdBQU4sRUFBVyxDQUFDLEdBQVosQ0FBZDtJQUNBeEIsQ0FBQyxDQUFDNkMsVUFBRixDQUFhOUMsQ0FBYjtJQUNBQyxDQUFDLENBQUM4QyxNQUFGLENBQVNqRCxZQUFZLFdBQVosQ0FBcUJNLEdBQXJCLENBQXlCc0MsV0FBbEM7RUFDSCxDQWREOztFQWVBLE9BQU96QyxDQUFQO0FBQ0gsQ0FyRE8sQ0FxRExULE9BQU8sQ0FBQyxXQUFELENBQVAsV0FyREssQ0FBUjs7QUFzREF3RCxPQUFPLFdBQVAsR0FBa0JqRCxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkYXNzZXRzTG9hZGVyID0gcmVxdWlyZShcIi4vQXNzZXRzTG9hZGVyXCIpO1xyXG52YXIgJGFzc2V0c01hcCA9IHJlcXVpcmUoXCIuL0Fzc2V0c01hcFwiKTtcclxudmFyICRyZXNVdGlsID0gcmVxdWlyZShcIi4vUmVzVXRpbFwiKTtcclxudmFyICRjb25maWdDb250ZXh0ID0gcmVxdWlyZShcIi4vQ29uZmlnQ29udGV4dFwiKTtcclxudmFyICRnbG9iYWxQYXJhbSA9IHJlcXVpcmUoXCIuL0dsb2JhbFBhcmFtXCIpO1xyXG52YXIgJGJhc2VCdWxsZXQgPSByZXF1aXJlKFwiLi9CYXNlQnVsbGV0XCIpO1xyXG52YXIgJGdhbWVDb250ZXh0ID0gcmVxdWlyZShcIi4vR2FtZUNvbnRleHRcIik7XHJcbnZhciBwID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKGUpIHtcclxuICAgICAgICB2YXIgaSA9IHQuY2FsbCh0aGlzLCBlKSB8fCB0aGlzO1xyXG4gICAgICAgICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbSA9ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2Uucm9ib3RDb25maWdzLmZpbmQoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDcgPT09IHQuaWQ7XHJcbiAgICAgICAgfSkuUGV0c3NraW5fc2tpbGxfdmFsdWU7XHJcbiAgICAgICAgaS50aW1lTGVmdCA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbVsxXTtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLnVwZGF0ZUYgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHQucHJvdG90eXBlLnVwZGF0ZUYuY2FsbCh0aGlzLCBlKTtcclxuICAgICAgICBpZiAoISh0aGlzLmlzQXR0YWNraW5nIHx8ICRnbG9iYWxQYXJhbS5kZWZhdWx0LmlzR2FtZVB1YXNlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVMZWZ0IC09IGU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVMZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHdW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdGFydEd1biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGUgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2V0UmFuZ2VSYW5rRW5lbXkoXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnROb2RlLFxyXG4gICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bMl1cclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVMZWZ0ID0gMTtcclxuICAgICAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaSA9IGUubm9kZS5wb3NpdGlvbi5zdWIoY2MudjMoMTUwLCAtNTQwKSkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy5pc0F0dGFja2luZyA9ICEwO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dGxlKGkpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVzT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHQudGltZUxlZnQgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bMV07XHJcbiAgICAgICAgICAgIHQuaXNBdHRhY2tpbmcgPSAhMTtcclxuICAgICAgICB9LCAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bNF0pO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmNyZWF0ZUJ1dHRsZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2V0QnV0dGxlUG9vbCgkYmFzZUJ1bGxldC5CdWxsZXRUeXBlLnJfYnVsbGV0XzYpO1xyXG4gICAgICAgIGlmICghZSkge1xyXG4gICAgICAgICAgICB2YXIgaSA9ICRhc3NldHNMb2FkZXIuZGVmYXVsdC5pbnN0YW5jZS5nZXRSZXMoXHJcbiAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkJ1bmRsZU5hbWVzLkdhbWUsXHJcbiAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkFzc2V0c01hcC5HYW1lQnVuZGxlcy5wcmVmYWJzLmFzc2V0c0xpc3QuUkJ1bGxldF82XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGUgPSAkcmVzVXRpbC5SZXNVdGlsLmluc3RhbnRpYXRlKGksICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5idXR0bGVMYXllci5wYXJlbnQpLmdldENvbXBvbmVudChcclxuICAgICAgICAgICAgICAgICRiYXNlQnVsbGV0LmRlZmF1bHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZS5zZXRQb3NpdGlvbihjYy52MygxNTAsIC01NDApKTtcclxuICAgICAgICBlLmluaXRCdXR0bGUodCk7XHJcbiAgICAgICAgZS5pbnNlcnQoJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmJ1dHRsZUxheWVyKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZTtcclxufSkocmVxdWlyZShcIi4vQmFzZUd1blwiKS5kZWZhdWx0KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcDtcclxuIl19