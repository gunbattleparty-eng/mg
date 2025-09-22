
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/SBullet_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02504ehncZOnIvYzCQYubE+', 'SBullet_2');
// game_script/scripts/SBullet_2.js

"use strict";

var o;

var $object = require("./Object");

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $gameContext = require("./GameContext");

var $baseBullet = require("./BaseBullet");

var p = cc._decorator;
var f = p.ccclass;
var h = (p.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.s_bullet_2;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    t.prototype.initButtle.call(this, e, null);
    this.atk = $gameContext["default"].ins.skillInfo.skinAtk;
    this.speed = $gameContext["default"].ins.skillInfo.skinParam[3];

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && e == $object.Trigger.enter) {
      var i = t.object;
      i.sufferAtk({
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });
      this.createButtleBoom(i);
      this.removeSelf();
    }
  };

  e.prototype.createButtleBoom = function (t) {
    var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.s_bullet_2_1);

    if (!e) {
      var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.SBullet_2_1);
      e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.lowBulletLayer.parent).getComponent($baseBullet["default"]);
    }

    e.setPosition(cc.v3(t.node.position.x, this.node.position.y));
    e.initSBullet();
    e.insert($gameContext["default"].ins.lowBulletLayer);
    e.setAnimation(null);
  };

  return __decorate([f], e);
}($baseBullet["default"]));
exports["default"] = h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNCdWxsZXRfMi5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkYXNzZXRzTG9hZGVyIiwiJGFzc2V0c01hcCIsIiRyZXNVdGlsIiwiJGdhbWVDb250ZXh0IiwiJGJhc2VCdWxsZXQiLCJwIiwiY2MiLCJfZGVjb3JhdG9yIiwiZiIsImNjY2xhc3MiLCJoIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnV0dGxlVHlwZSIsIkJ1bGxldFR5cGUiLCJzX2J1bGxldF8yIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEJ1dHRsZSIsImNhbGwiLCJhdGsiLCJpbnMiLCJza2lsbEluZm8iLCJza2luQXRrIiwic3BlZWQiLCJza2luUGFyYW0iLCJ2ZWxvY2l0eSIsInNldCIsIm11bHRpcGx5U2NhbGFyIiwib25UcmlnZ2VyIiwiaXNVc2UiLCJUcmlnZ2VyIiwiZW50ZXIiLCJpIiwib2JqZWN0Iiwic3VmZmVyQXRrIiwic2tpbGxTcGVjaWFsaXR5cyIsImNyZWF0ZUJ1dHRsZUJvb20iLCJyZW1vdmVTZWxmIiwiZ2V0QnV0dGxlUG9vbCIsInNfYnVsbGV0XzJfMSIsImluc3RhbmNlIiwiZ2V0UmVzIiwiQnVuZGxlTmFtZXMiLCJHYW1lIiwiQXNzZXRzTWFwIiwiR2FtZUJ1bmRsZXMiLCJwcmVmYWJzIiwiYXNzZXRzTGlzdCIsIlNCdWxsZXRfMl8xIiwiUmVzVXRpbCIsImluc3RhbnRpYXRlIiwibG93QnVsbGV0TGF5ZXIiLCJwYXJlbnQiLCJnZXRDb21wb25lbnQiLCJzZXRQb3NpdGlvbiIsInYzIiwibm9kZSIsInBvc2l0aW9uIiwieCIsInkiLCJpbml0U0J1bGxldCIsImluc2VydCIsInNldEFuaW1hdGlvbiIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJRSxVQUFVLEdBQUdGLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlHLFFBQVEsR0FBR0gsT0FBTyxDQUFDLFdBQUQsQ0FBdEI7O0FBQ0EsSUFBSUksWUFBWSxHQUFHSixPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJSyxXQUFXLEdBQUdMLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlNLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csVUFBRixHQUFlWixXQUFXLENBQUNhLFVBQVosQ0FBdUJDLFVBQXRDO0lBQ0EsT0FBT0wsQ0FBUDtFQUNIOztFQUNETSxTQUFTLENBQUNOLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNPLFNBQUYsQ0FBWUMsVUFBWixHQUF5QixVQUFVUixDQUFWLEVBQWE7SUFDbENELENBQUMsQ0FBQ1EsU0FBRixDQUFZQyxVQUFaLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixFQUFrQ1QsQ0FBbEMsRUFBcUMsSUFBckM7SUFDQSxLQUFLVSxHQUFMLEdBQVdwQixZQUFZLFdBQVosQ0FBcUJxQixHQUFyQixDQUF5QkMsU0FBekIsQ0FBbUNDLE9BQTlDO0lBQ0EsS0FBS0MsS0FBTCxHQUFheEIsWUFBWSxXQUFaLENBQXFCcUIsR0FBckIsQ0FBeUJDLFNBQXpCLENBQW1DRyxTQUFuQyxDQUE2QyxDQUE3QyxDQUFiOztJQUNBLElBQUlmLENBQUosRUFBTztNQUNILEtBQUtnQixRQUFMLENBQWNDLEdBQWQsQ0FBa0JqQixDQUFsQixFQUFxQmtCLGNBQXJCLENBQW9DLEtBQUtKLEtBQXpDO0lBQ0g7RUFDSixDQVBEOztFQVFBZCxDQUFDLENBQUNPLFNBQUYsQ0FBWVksU0FBWixHQUF3QixVQUFVcEIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQ3BDLElBQUksQ0FBQyxLQUFLb0IsS0FBTixJQUFlcEIsQ0FBQyxJQUFJZixPQUFPLENBQUNvQyxPQUFSLENBQWdCQyxLQUF4QyxFQUErQztNQUMzQyxJQUFJQyxDQUFDLEdBQUd4QixDQUFDLENBQUN5QixNQUFWO01BQ0FELENBQUMsQ0FBQ0UsU0FBRixDQUFZO1FBQ1JDLGdCQUFnQixFQUFFLEtBQUtBLGdCQURmO1FBRVJoQixHQUFHLEVBQUUsS0FBS0E7TUFGRixDQUFaO01BSUEsS0FBS2lCLGdCQUFMLENBQXNCSixDQUF0QjtNQUNBLEtBQUtLLFVBQUw7SUFDSDtFQUNKLENBVkQ7O0VBV0E1QixDQUFDLENBQUNPLFNBQUYsQ0FBWW9CLGdCQUFaLEdBQStCLFVBQVU1QixDQUFWLEVBQWE7SUFDeEMsSUFBSUMsQ0FBQyxHQUFHVixZQUFZLFdBQVosQ0FBcUJxQixHQUFyQixDQUF5QmtCLGFBQXpCLENBQXVDdEMsV0FBVyxDQUFDYSxVQUFaLENBQXVCMEIsWUFBOUQsQ0FBUjs7SUFDQSxJQUFJLENBQUM5QixDQUFMLEVBQVE7TUFDSixJQUFJdUIsQ0FBQyxHQUFHcEMsYUFBYSxXQUFiLENBQXNCNEMsUUFBdEIsQ0FBK0JDLE1BQS9CLENBQ0o1QyxVQUFVLENBQUM2QyxXQUFYLENBQXVCQyxJQURuQixFQUVKOUMsVUFBVSxDQUFDK0MsU0FBWCxDQUFxQkMsV0FBckIsQ0FBaUNDLE9BQWpDLENBQXlDQyxVQUF6QyxDQUFvREMsV0FGaEQsQ0FBUjtNQUlBdkMsQ0FBQyxHQUFHWCxRQUFRLENBQUNtRCxPQUFULENBQWlCQyxXQUFqQixDQUE2QmxCLENBQTdCLEVBQWdDakMsWUFBWSxXQUFaLENBQXFCcUIsR0FBckIsQ0FBeUIrQixjQUF6QixDQUF3Q0MsTUFBeEUsRUFBZ0ZDLFlBQWhGLENBQ0FyRCxXQUFXLFdBRFgsQ0FBSjtJQUdIOztJQUNEUyxDQUFDLENBQUM2QyxXQUFGLENBQWNwRCxFQUFFLENBQUNxRCxFQUFILENBQU0vQyxDQUFDLENBQUNnRCxJQUFGLENBQU9DLFFBQVAsQ0FBZ0JDLENBQXRCLEVBQXlCLEtBQUtGLElBQUwsQ0FBVUMsUUFBVixDQUFtQkUsQ0FBNUMsQ0FBZDtJQUNBbEQsQ0FBQyxDQUFDbUQsV0FBRjtJQUNBbkQsQ0FBQyxDQUFDb0QsTUFBRixDQUFTOUQsWUFBWSxXQUFaLENBQXFCcUIsR0FBckIsQ0FBeUIrQixjQUFsQztJQUNBMUMsQ0FBQyxDQUFDcUQsWUFBRixDQUFlLElBQWY7RUFDSCxDQWZEOztFQWdCQSxPQUFPQyxVQUFVLENBQUMsQ0FBQzNELENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0EzQ0QsQ0EyQ0dULFdBQVcsV0EzQ2QsQ0FGQyxDQUFMO0FBOENBZ0UsT0FBTyxXQUFQLEdBQWtCMUQsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJG9iamVjdCA9IHJlcXVpcmUoXCIuL09iamVjdFwiKTtcclxudmFyICRhc3NldHNMb2FkZXIgPSByZXF1aXJlKFwiLi9Bc3NldHNMb2FkZXJcIik7XHJcbnZhciAkYXNzZXRzTWFwID0gcmVxdWlyZShcIi4vQXNzZXRzTWFwXCIpO1xyXG52YXIgJHJlc1V0aWwgPSByZXF1aXJlKFwiLi9SZXNVdGlsXCIpO1xyXG52YXIgJGdhbWVDb250ZXh0ID0gcmVxdWlyZShcIi4vR2FtZUNvbnRleHRcIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciBwID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGYgPSBwLmNjY2xhc3M7XHJcbnZhciBoID1cclxuICAgIChwLnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUuYnV0dGxlVHlwZSA9ICRiYXNlQnVsbGV0LkJ1bGxldFR5cGUuc19idWxsZXRfMjtcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5pbml0QnV0dGxlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdC5wcm90b3R5cGUuaW5pdEJ1dHRsZS5jYWxsKHRoaXMsIGUsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmF0ayA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8uc2tpbkF0aztcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8uc2tpblBhcmFtWzNdO1xyXG4gICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5zZXQoZSkubXVsdGlwbHlTY2FsYXIodGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLm9uVHJpZ2dlciA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1VzZSAmJiBlID09ICRvYmplY3QuVHJpZ2dlci5lbnRlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGkgPSB0Lm9iamVjdDtcclxuICAgICAgICAgICAgICAgIGkuc3VmZmVyQXRrKHtcclxuICAgICAgICAgICAgICAgICAgICBza2lsbFNwZWNpYWxpdHlzOiB0aGlzLnNraWxsU3BlY2lhbGl0eXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYXRrOiB0aGlzLmF0a1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRsZUJvb20oaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUuY3JlYXRlQnV0dGxlQm9vbSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmdldEJ1dHRsZVBvb2woJGJhc2VCdWxsZXQuQnVsbGV0VHlwZS5zX2J1bGxldF8yXzEpO1xyXG4gICAgICAgICAgICBpZiAoIWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gJGFzc2V0c0xvYWRlci5kZWZhdWx0Lmluc3RhbmNlLmdldFJlcyhcclxuICAgICAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkJ1bmRsZU5hbWVzLkdhbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJGFzc2V0c01hcC5Bc3NldHNNYXAuR2FtZUJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LlNCdWxsZXRfMl8xXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZSA9ICRyZXNVdGlsLlJlc1V0aWwuaW5zdGFudGlhdGUoaSwgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmxvd0J1bGxldExheWVyLnBhcmVudCkuZ2V0Q29tcG9uZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICRiYXNlQnVsbGV0LmRlZmF1bHRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZS5zZXRQb3NpdGlvbihjYy52Myh0Lm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpKTtcclxuICAgICAgICAgICAgZS5pbml0U0J1bGxldCgpO1xyXG4gICAgICAgICAgICBlLmluc2VydCgkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMubG93QnVsbGV0TGF5ZXIpO1xyXG4gICAgICAgICAgICBlLnNldEFuaW1hdGlvbihudWxsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtmXSwgZSk7XHJcbiAgICB9KSgkYmFzZUJ1bGxldC5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGg7XHJcbiJdfQ==