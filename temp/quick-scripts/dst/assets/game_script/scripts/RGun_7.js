
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/RGun_7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be22deWdZNMno/HHIEkQIgV', 'RGun_7');
// game_script/scripts/RGun_7.js

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
      return 8 === t.id;
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

    var i = e.node.position.sub(cc.v3(0, -300)).normalize();
    this.isAttacking = !0;
    this.createButtle(i);
    this.schedulesOnce(function () {
      t.timeLeft = $gameContext["default"].ins.skillInfo.robotParam[1];
      t.isAttacking = !1;
    }, $gameContext["default"].ins.skillInfo.robotParam[5]);
  };

  e.prototype.createButtle = function (t) {
    var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.r_bullet_7);

    if (!e) {
      var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_7);
      e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.robotFlyLayer.parent).getComponent($baseBullet["default"]);
    }

    e.setPosition(cc.v3(0, -300));
    e.setAngle(90);
    e.pointNode = this.pointNode;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJHdW5fNy5qcyJdLCJuYW1lcyI6WyJvIiwiJGFzc2V0c0xvYWRlciIsInJlcXVpcmUiLCIkYXNzZXRzTWFwIiwiJHJlc1V0aWwiLCIkY29uZmlnQ29udGV4dCIsIiRnbG9iYWxQYXJhbSIsIiRiYXNlQnVsbGV0IiwiJGdhbWVDb250ZXh0IiwicCIsInQiLCJlIiwiaSIsImNhbGwiLCJpbnMiLCJza2lsbEluZm8iLCJyb2JvdFBhcmFtIiwiaW5zdGFuY2UiLCJyb2JvdENvbmZpZ3MiLCJmaW5kIiwiaWQiLCJQZXRzc2tpbl9za2lsbF92YWx1ZSIsInRpbWVMZWZ0IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwidXBkYXRlRiIsImlzQXR0YWNraW5nIiwiaXNHYW1lUHVhc2UiLCJzdGFydEd1biIsImdldFJhbmdlUmFua0VuZW15IiwicG9pbnROb2RlIiwibm9kZSIsInBvc2l0aW9uIiwic3ViIiwiY2MiLCJ2MyIsIm5vcm1hbGl6ZSIsImNyZWF0ZUJ1dHRsZSIsInNjaGVkdWxlc09uY2UiLCJnZXRCdXR0bGVQb29sIiwiQnVsbGV0VHlwZSIsInJfYnVsbGV0XzciLCJnZXRSZXMiLCJCdW5kbGVOYW1lcyIsIkdhbWUiLCJBc3NldHNNYXAiLCJHYW1lQnVuZGxlcyIsInByZWZhYnMiLCJhc3NldHNMaXN0IiwiUkJ1bGxldF83IiwiUmVzVXRpbCIsImluc3RhbnRpYXRlIiwicm9ib3RGbHlMYXllciIsInBhcmVudCIsImdldENvbXBvbmVudCIsInNldFBvc2l0aW9uIiwic2V0QW5nbGUiLCJpbml0QnV0dGxlIiwiaW5zZXJ0IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLGFBQWEsR0FBR0MsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlDLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUUs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XHJcbnZhciAkYXNzZXRzTG9hZGVyID0gcmVxdWlyZShcIi4vQXNzZXRzTG9hZGVyXCIpO1xyXG52YXIgJGFzc2V0c01hcCA9IHJlcXVpcmUoXCIuL0Fzc2V0c01hcFwiKTtcclxudmFyICRyZXNVdGlsID0gcmVxdWlyZShcIi4vUmVzVXRpbFwiKTtcclxudmFyICRjb25maWdDb250ZXh0ID0gcmVxdWlyZShcIi4vQ29uZmlnQ29udGV4dFwiKTtcclxudmFyICRnbG9iYWxQYXJhbSA9IHJlcXVpcmUoXCIuL0dsb2JhbFBhcmFtXCIpO1xyXG52YXIgJGJhc2VCdWxsZXQgPSByZXF1aXJlKFwiLi9CYXNlQnVsbGV0XCIpO1xyXG52YXIgJGdhbWVDb250ZXh0ID0gcmVxdWlyZShcIi4vR2FtZUNvbnRleHRcIik7XHJcbnZhciBwID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKGUpIHtcclxuICAgICAgICB2YXIgaSA9IHQuY2FsbCh0aGlzLCBlKSB8fCB0aGlzO1xyXG4gICAgICAgICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbSA9ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2Uucm9ib3RDb25maWdzLmZpbmQoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDggPT09IHQuaWQ7XHJcbiAgICAgICAgfSkuUGV0c3NraW5fc2tpbGxfdmFsdWU7XHJcbiAgICAgICAgaS50aW1lTGVmdCA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbVsxXTtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLnVwZGF0ZUYgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHQucHJvdG90eXBlLnVwZGF0ZUYuY2FsbCh0aGlzLCBlKTtcclxuICAgICAgICBpZiAoISh0aGlzLmlzQXR0YWNraW5nIHx8ICRnbG9iYWxQYXJhbS5kZWZhdWx0LmlzR2FtZVB1YXNlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVMZWZ0IC09IGU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVMZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHdW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdGFydEd1biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGUgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2V0UmFuZ2VSYW5rRW5lbXkoXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnROb2RlLFxyXG4gICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bMl1cclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVMZWZ0ID0gMTtcclxuICAgICAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaSA9IGUubm9kZS5wb3NpdGlvbi5zdWIoY2MudjMoMCwgLTMwMCkpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMuaXNBdHRhY2tpbmcgPSAhMDtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRsZShpKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlc09uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0LnRpbWVMZWZ0ID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnNraWxsSW5mby5yb2JvdFBhcmFtWzFdO1xyXG4gICAgICAgICAgICB0LmlzQXR0YWNraW5nID0gITE7XHJcbiAgICAgICAgfSwgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnNraWxsSW5mby5yb2JvdFBhcmFtWzVdKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVCdXR0bGUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmdldEJ1dHRsZVBvb2woJGJhc2VCdWxsZXQuQnVsbGV0VHlwZS5yX2J1bGxldF83KTtcclxuICAgICAgICBpZiAoIWUpIHtcclxuICAgICAgICAgICAgdmFyIGkgPSAkYXNzZXRzTG9hZGVyLmRlZmF1bHQuaW5zdGFuY2UuZ2V0UmVzKFxyXG4gICAgICAgICAgICAgICAgJGFzc2V0c01hcC5CdW5kbGVOYW1lcy5HYW1lLFxyXG4gICAgICAgICAgICAgICAgJGFzc2V0c01hcC5Bc3NldHNNYXAuR2FtZUJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LlJCdWxsZXRfN1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlID0gJHJlc1V0aWwuUmVzVXRpbC5pbnN0YW50aWF0ZShpLCAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMucm9ib3RGbHlMYXllci5wYXJlbnQpLmdldENvbXBvbmVudChcclxuICAgICAgICAgICAgICAgICRiYXNlQnVsbGV0LmRlZmF1bHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZS5zZXRQb3NpdGlvbihjYy52MygwLCAtMzAwKSk7XHJcbiAgICAgICAgZS5zZXRBbmdsZSg5MCk7XHJcbiAgICAgICAgZS5wb2ludE5vZGUgPSB0aGlzLnBvaW50Tm9kZTtcclxuICAgICAgICBlLmluaXRCdXR0bGUodCk7XHJcbiAgICAgICAgZS5pbnNlcnQoJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnJvYm90Rmx5TGF5ZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBlO1xyXG59KShyZXF1aXJlKFwiLi9CYXNlR3VuXCIpLmRlZmF1bHQpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBwO1xyXG4iXX0=