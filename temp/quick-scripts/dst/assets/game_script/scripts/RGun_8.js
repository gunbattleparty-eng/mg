
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/RGun_8.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e0afN1D15GGZyi/4z32PLy', 'RGun_8');
// game_script/scripts/RGun_8.js

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
      return 9 === t.id;
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

    if (!$gameContext["default"].ins.getRangeRankEnemy(this.pointNode, $gameContext["default"].ins.skillInfo.robotParam[2], 1, !0)) {
      this.timeLeft = 1;
      return !1;
    }

    this.isAttacking = !0;
    this.createButtle();
    this.schedulesOnce(function () {
      t.timeLeft = $gameContext["default"].ins.skillInfo.robotParam[1];
      t.isAttacking = !1;
    }, $gameContext["default"].ins.skillInfo.robotParam[5]);
  };

  e.prototype.createButtle = function () {
    var t = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.r_bullet_8);

    if (!t) {
      var e = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_8);
      t = $resUtil.ResUtil.instantiate(e, $gameContext["default"].ins.robotFlyLayer.parent).getComponent($baseBullet["default"]);
    }

    t.setPosition(cc.v3(0, -300));
    t.pointNode = this.pointNode;
    t.initButtle(null, null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJHdW5fOC5qcyJdLCJuYW1lcyI6WyJvIiwiJGFzc2V0c0xvYWRlciIsInJlcXVpcmUiLCIkYXNzZXRzTWFwIiwiJHJlc1V0aWwiLCIkY29uZmlnQ29udGV4dCIsIiRnbG9iYWxQYXJhbSIsIiRiYXNlQnVsbGV0IiwiJGdhbWVDb250ZXh0IiwicCIsInQiLCJlIiwiaSIsImNhbGwiLCJpbnMiLCJza2lsbEluZm8iLCJyb2JvdFBhcmFtIiwiaW5zdGFuY2UiLCJyb2JvdENvbmZpZ3MiLCJmaW5kIiwiaWQiLCJQZXRzc2tpbl9za2lsbF92YWx1ZSIsInRpbWVMZWZ0IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwidXBkYXRlRiIsImlzQXR0YWNraW5nIiwiaXNHYW1lUHVhc2UiLCJzdGFydEd1biIsImdldFJhbmdlUmFua0VuZW15IiwicG9pbnROb2RlIiwiY3JlYXRlQnV0dGxlIiwic2NoZWR1bGVzT25jZSIsImdldEJ1dHRsZVBvb2wiLCJCdWxsZXRUeXBlIiwicl9idWxsZXRfOCIsImdldFJlcyIsIkJ1bmRsZU5hbWVzIiwiR2FtZSIsIkFzc2V0c01hcCIsIkdhbWVCdW5kbGVzIiwicHJlZmFicyIsImFzc2V0c0xpc3QiLCJSQnVsbGV0XzgiLCJSZXNVdGlsIiwiaW5zdGFudGlhdGUiLCJyb2JvdEZseUxheWVyIiwicGFyZW50IiwiZ2V0Q29tcG9uZW50Iiwic2V0UG9zaXRpb24iLCJjYyIsInYzIiwiaW5pdEJ1dHRsZSIsImluc2VydCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlFLFFBQVEsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdEI7O0FBQ0EsSUFBSUcsY0FB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L0IsQ0FDSmpDLFVBQVUsQ0FBQ2tDLFdBQVgsQ0FBdUJDLElBRG5CLEVBRUpuQyxVQUFVLENBQUNvQyxTQUFYLENBQXFCQyxXQUFyQixDQUFpQ0MsT0FBakMsQ0FBeUNDLFVBQXpDLENBQW9EQyxTQUZoRCxDQUFSO01BSUFqQyxDQUFDLEdBQUdOLFFBQVEsQ0FBQ3dDLE9BQVQsQ0FBaUJDLFdBQWpCLENBQTZCbEMsQ0FBN0IsRUFBZ0NILFlBQVksV0FBWixDQUFxQk0sR0FBckIsQ0FBeUJnQyxhQUF6QixDQUF1Q0MsTUFBdkUsRUFBK0VDLFlBQS9FLENBQ0F6QyxXQUFXLFdBRFgsQ0FBSjtJQUdIOztJQUNERyxDQUFDLENBQUN1QyxXQUFGLENBQWNDLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFDLEdBQVYsQ0FBZDtJQUNBekMsQ0FBQyxDQUFDb0IsU0FBRixHQUFjLEtBQUtBLFNBQW5CO0lBQ0FwQixDQUFDLENBQUMwQyxVQUFGLENBQWEsSUFBYixFQUFtQixJQUFuQjtJQUNBMUMsQ0FBQyxDQUFDMkMsTUFBRixDQUFTN0MsWUFBWSxXQUFaLENBQXFCTSxHQUFyQixDQUF5QmdDLGFBQWxDO0VBQ0gsQ0FmRDs7RUFnQkEsT0FBT25DLENBQVA7QUFDSCxDQXhETyxDQXdETFQsT0FBTyxDQUFDLFdBQUQsQ0FBUCxXQXhESyxDQUFSOztBQXlEQW9ELE9BQU8sV0FBUCxHQUFrQjdDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRhc3NldHNMb2FkZXIgPSByZXF1aXJlKFwiLi9Bc3NldHNMb2FkZXJcIik7XHJcbnZhciAkYXNzZXRzTWFwID0gcmVxdWlyZShcIi4vQXNzZXRzTWFwXCIpO1xyXG52YXIgJHJlc1V0aWwgPSByZXF1aXJlKFwiLi9SZXNVdGlsXCIpO1xyXG52YXIgJGNvbmZpZ0NvbnRleHQgPSByZXF1aXJlKFwiLi9Db25maWdDb250ZXh0XCIpO1xyXG52YXIgJGdsb2JhbFBhcmFtID0gcmVxdWlyZShcIi4vR2xvYmFsUGFyYW1cIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciAkZ2FtZUNvbnRleHQgPSByZXF1aXJlKFwiLi9HYW1lQ29udGV4dFwiKTtcclxudmFyIHAgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoZSkge1xyXG4gICAgICAgIHZhciBpID0gdC5jYWxsKHRoaXMsIGUpIHx8IHRoaXM7XHJcbiAgICAgICAgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnNraWxsSW5mby5yb2JvdFBhcmFtID0gJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5yb2JvdENvbmZpZ3MuZmluZChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gOSA9PT0gdC5pZDtcclxuICAgICAgICB9KS5QZXRzc2tpbl9za2lsbF92YWx1ZTtcclxuICAgICAgICBpLnRpbWVMZWZ0ID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnNraWxsSW5mby5yb2JvdFBhcmFtWzFdO1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUudXBkYXRlRiA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdC5wcm90b3R5cGUudXBkYXRlRi5jYWxsKHRoaXMsIGUpO1xyXG4gICAgICAgIGlmICghKHRoaXMuaXNBdHRhY2tpbmcgfHwgJGdsb2JhbFBhcmFtLmRlZmF1bHQuaXNHYW1lUHVhc2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUxlZnQgLT0gZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZUxlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEd1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnN0YXJ0R3VuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICEkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2V0UmFuZ2VSYW5rRW5lbXkoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50Tm9kZSxcclxuICAgICAgICAgICAgICAgICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8ucm9ib3RQYXJhbVsyXSxcclxuICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAhMFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUxlZnQgPSAxO1xyXG4gICAgICAgICAgICByZXR1cm4gITE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNBdHRhY2tpbmcgPSAhMDtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRsZSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVzT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHQudGltZUxlZnQgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bMV07XHJcbiAgICAgICAgICAgIHQuaXNBdHRhY2tpbmcgPSAhMTtcclxuICAgICAgICB9LCAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnJvYm90UGFyYW1bNV0pO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmNyZWF0ZUJ1dHRsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRCdXR0bGVQb29sKCRiYXNlQnVsbGV0LkJ1bGxldFR5cGUucl9idWxsZXRfOCk7XHJcbiAgICAgICAgaWYgKCF0KSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gJGFzc2V0c0xvYWRlci5kZWZhdWx0Lmluc3RhbmNlLmdldFJlcyhcclxuICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQnVuZGxlTmFtZXMuR2FtZSxcclxuICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQXNzZXRzTWFwLkdhbWVCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5SQnVsbGV0XzhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdCA9ICRyZXNVdGlsLlJlc1V0aWwuaW5zdGFudGlhdGUoZSwgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnJvYm90Rmx5TGF5ZXIucGFyZW50KS5nZXRDb21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICAkYmFzZUJ1bGxldC5kZWZhdWx0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuc2V0UG9zaXRpb24oY2MudjMoMCwgLTMwMCkpO1xyXG4gICAgICAgIHQucG9pbnROb2RlID0gdGhpcy5wb2ludE5vZGU7XHJcbiAgICAgICAgdC5pbml0QnV0dGxlKG51bGwsIG51bGwpO1xyXG4gICAgICAgIHQuaW5zZXJ0KCRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5yb2JvdEZseUxheWVyKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZTtcclxufSkocmVxdWlyZShcIi4vQmFzZUd1blwiKS5kZWZhdWx0KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcDtcclxuIl19