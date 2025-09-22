
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2167ZhV1JFkayPznBYzrNv', 'Enemy_5');
// game_script/scripts/Enemy_5.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var $baseEnemy = require("./BaseEnemy");

var $healthBar = require("./HealthBar");

var u = cc._decorator;
var d = u.ccclass;
var p = u.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.e_bullet_5;
    e.atkPoint = null;
    e.healthBar = null;
    e.bulletPrefab = null;
    e.atkSpeed = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.fire, this.config.value[0]);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.thunder, this.config.value[1]);
    this.atkRange = this.config.value[2];
    this.atkSpeed = this.config.value[3];

    if (this.healthBar) {
      this.healthBar.init(this.statusManager.hp, e.hp_num);
    }
  };

  e.prototype.sufferAttack = function (e, i) {
    if (this.statusManager.isDie) {
      return !1;
    }

    var o = t.prototype.sufferAttack.call(this, e, i);

    if (this.healthBar) {
      this.healthBar.render(this.statusManager.hp);
    }

    return o;
  };

  e.prototype.attackAnim = function () {
    var t = $gameContext["default"].ins.getButtlePool(this.buttleType);

    if (!t) {
      t = cc.instantiate(this.bulletPrefab).getComponent($baseBullet["default"]);
    }

    var e = $gameContext["default"].ins.enemyBulletLayer.convertToNodeSpaceAR(this.atkPoint.convertToWorldSpaceAR(cc.Vec3.ZERO));
    t.setPosition(e);
    t.initEButtle(this.statusManager.atk, this.atkSpeed);
    t.insert($gameContext["default"].ins.enemyBulletLayer);
  };

  __decorate([p(cc.Node)], e.prototype, "atkPoint", void 0);

  __decorate([p($healthBar["default"])], e.prototype, "healthBar", void 0);

  __decorate([p(cc.Prefab)], e.prototype, "bulletPrefab", void 0);

  return __decorate([d], e);
}($baseEnemy["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzUuanMiXSwibmFtZXMiOlsibyIsIiRiYXNlQnVsbGV0IiwicmVxdWlyZSIsIiRnYW1lQ29udGV4dCIsIiRiYXNlRW5lbXkiLCIkaGVhbHRoQmFyIiwidSIsImNjIiwiX2RlY29yYXRvciIsImQiLCJjY2NsYXNzIiwicCIsInByb3BlcnR5IiwiZiIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJidXR0bGVUeXBlIiwiQnVsbGV0VHlwZSIsImVfYnVsbGV0XzUiLCJhdGtQb2ludCIsImhlYWx0aEJhciIsImJ1bGxldFByZWZhYiIsImF0a1NwZWVkIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEVuZW15IiwiaSIsImNhbGwiLCJzdGF0dXNNYW5hZ2VyIiwic3BlY2lhbGl0eUF0a0FkZCIsInNldCIsIkJ1bGxldFNwZWNpYWxpdHkiLCJmaXJlIiwiY29uZmlnIiwidmFsdWUiLCJ0aHVuZGVyIiwiYXRrUmFuZ2UiLCJpbml0IiwiaHAiLCJocF9udW0iLCJzdWZmZXJBdHRhY2siLCJpc0RpZSIsInJlbmRlciIsImF0dGFja0FuaW0iLCJpbnMiLCJnZXRCdXR0bGVQb29sIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJlbmVteUJ1bGxldExheWVyIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJWZWMzIiwiWkVSTyIsInNldFBvc2l0aW9uIiwiaW5pdEVCdXR0bGUiLCJhdGsiLCJpbnNlcnQiLCJfX2RlY29yYXRlIiwiTm9kZSIsIlByZWZhYiIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlDLFlBQVksR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUUsVUFBVSxHQUFHRixPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRyxVQUFVLEdBQUdILE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlJLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csVUFBRixHQUFlakIsV0FBVyxDQUFDa0IsVUFBWixDQUF1QkMsVUFBdEM7SUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEdBQWEsSUFBYjtJQUNBTixDQUFDLENBQUNPLFNBQUYsR0FBYyxJQUFkO0lBQ0FQLENBQUMsQ0FBQ1EsWUFBRixHQUFpQixJQUFqQjtJQUNBUixDQUFDLENBQUNTLFFBQUYsR0FBYSxDQUFiO0lBQ0EsT0FBT1QsQ0FBUDtFQUNIOztFQUNEVSxTQUFTLENBQUNWLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNXLFNBQUYsQ0FBWUMsU0FBWixHQUF3QixVQUFVWixDQUFWLEVBQWFhLENBQWIsRUFBZ0I1QixDQUFoQixFQUFtQjtJQUN2QyxJQUFJLEtBQUssQ0FBTCxLQUFXQSxDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRyxDQUFKO0lBQ0g7O0lBQ0RjLENBQUMsQ0FBQ1ksU0FBRixDQUFZQyxTQUFaLENBQXNCRSxJQUF0QixDQUEyQixJQUEzQixFQUFpQ2QsQ0FBakMsRUFBb0NhLENBQXBDLEVBQXVDNUIsQ0FBdkM7SUFDQSxLQUFLOEIsYUFBTCxDQUFtQkMsZ0JBQW5CLENBQW9DQyxHQUFwQyxDQUF3Qy9CLFdBQVcsQ0FBQ2dDLGdCQUFaLENBQTZCQyxJQUFyRSxFQUEyRSxLQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsQ0FBM0U7SUFDQSxLQUFLTixhQUFMLENBQW1CQyxnQkFBbkIsQ0FBb0NDLEdBQXBDLENBQXdDL0IsV0FBVyxDQUFDZ0MsZ0JBQVosQ0FBNkJJLE9BQXJFLEVBQThFLEtBQUtGLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixDQUE5RTtJQUNBLEtBQUtFLFFBQUwsR0FBZ0IsS0FBS0gsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLENBQWhCO0lBQ0EsS0FBS1osUUFBTCxHQUFnQixLQUFLVyxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsQ0FBaEI7O0lBQ0EsSUFBSSxLQUFLZCxTQUFULEVBQW9CO01BQ2hCLEtBQUtBLFNBQUwsQ0FBZWlCLElBQWYsQ0FBb0IsS0FBS1QsYUFBTCxDQUFtQlUsRUFBdkMsRUFBMkN6QixDQUFDLENBQUMwQixNQUE3QztJQUNIO0VBQ0osQ0FaRDs7RUFhQTFCLENBQUMsQ0FBQ1csU0FBRixDQUFZZ0IsWUFBWixHQUEyQixVQUFVM0IsQ0FBVixFQUFhYSxDQUFiLEVBQWdCO0lBQ3ZDLElBQUksS0FBS0UsYUFBTCxDQUFtQmEsS0FBdkIsRUFBOEI7TUFDMUIsT0FBTyxDQUFDLENBQVI7SUFDSDs7SUFDRCxJQUFJM0MsQ0FBQyxHQUFHYyxDQUFDLENBQUNZLFNBQUYsQ0FBWWdCLFlBQVosQ0FBeUJiLElBQXpCLENBQThCLElBQTlCLEVBQW9DZCxDQUFwQyxFQUF1Q2EsQ0FBdkMsQ0FBUjs7SUFDQSxJQUFJLEtBQUtOLFNBQVQsRUFBb0I7TUFDaEIsS0FBS0EsU0FBTCxDQUFlc0IsTUFBZixDQUFzQixLQUFLZCxhQUFMLENBQW1CVSxFQUF6QztJQUNIOztJQUNELE9BQU94QyxDQUFQO0VBQ0gsQ0FURDs7RUFVQWUsQ0FBQyxDQUFDVyxTQUFGLENBQVltQixVQUFaLEdBQXlCLFlBQVk7SUFDakMsSUFBSS9CLENBQUMsR0FBR1gsWUFBWSxXQUFaLENBQXFCMkMsR0FBckIsQ0FBeUJDLGFBQXpCLENBQXVDLEtBQUs3QixVQUE1QyxDQUFSOztJQUNBLElBQUksQ0FBQ0osQ0FBTCxFQUFRO01BQ0pBLENBQUMsR0FBR1AsRUFBRSxDQUFDeUMsV0FBSCxDQUFlLEtBQUt6QixZQUFwQixFQUFrQzBCLFlBQWxDLENBQStDaEQsV0FBVyxXQUExRCxDQUFKO0lBQ0g7O0lBQ0QsSUFBSWMsQ0FBQyxHQUFHWixZQUFZLFdBQVosQ0FBcUIyQyxHQUFyQixDQUF5QkksZ0JBQXpCLENBQTBDQyxvQkFBMUMsQ0FDSixLQUFLOUIsUUFBTCxDQUFjK0IscUJBQWQsQ0FBb0M3QyxFQUFFLENBQUM4QyxJQUFILENBQVFDLElBQTVDLENBREksQ0FBUjtJQUdBeEMsQ0FBQyxDQUFDeUMsV0FBRixDQUFjeEMsQ0FBZDtJQUNBRCxDQUFDLENBQUMwQyxXQUFGLENBQWMsS0FBSzFCLGFBQUwsQ0FBbUIyQixHQUFqQyxFQUFzQyxLQUFLakMsUUFBM0M7SUFDQVYsQ0FBQyxDQUFDNEMsTUFBRixDQUFTdkQsWUFBWSxXQUFaLENBQXFCMkMsR0FBckIsQ0FBeUJJLGdCQUFsQztFQUNILENBWEQ7O0VBWUFTLFVBQVUsQ0FBQyxDQUFDaEQsQ0FBQyxDQUFDSixFQUFFLENBQUNxRCxJQUFKLENBQUYsQ0FBRCxFQUFlN0MsQ0FBQyxDQUFDVyxTQUFqQixFQUE0QixVQUE1QixFQUF3QyxLQUFLLENBQTdDLENBQVY7O0VBQ0FpQyxVQUFVLENBQUMsQ0FBQ2hELENBQUMsQ0FBQ04sVUFBVSxXQUFYLENBQUYsQ0FBRCxFQUEwQlUsQ0FBQyxDQUFDVyxTQUE1QixFQUF1QyxXQUF2QyxFQUFvRCxLQUFLLENBQXpELENBQVY7O0VBQ0FpQyxVQUFVLENBQUMsQ0FBQ2hELENBQUMsQ0FBQ0osRUFBRSxDQUFDc0QsTUFBSixDQUFGLENBQUQsRUFBaUI5QyxDQUFDLENBQUNXLFNBQW5CLEVBQThCLGNBQTlCLEVBQThDLEtBQUssQ0FBbkQsQ0FBVjs7RUFDQSxPQUFPaUMsVUFBVSxDQUFDLENBQUNsRCxDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBbERPLENBa0RMWCxVQUFVLFdBbERMLENBQVI7O0FBbURBMEQsT0FBTyxXQUFQLEdBQWtCakQsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJGJhc2VCdWxsZXQgPSByZXF1aXJlKFwiLi9CYXNlQnVsbGV0XCIpO1xyXG52YXIgJGdhbWVDb250ZXh0ID0gcmVxdWlyZShcIi4vR2FtZUNvbnRleHRcIik7XHJcbnZhciAkYmFzZUVuZW15ID0gcmVxdWlyZShcIi4vQmFzZUVuZW15XCIpO1xyXG52YXIgJGhlYWx0aEJhciA9IHJlcXVpcmUoXCIuL0hlYWx0aEJhclwiKTtcclxudmFyIHUgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgZCA9IHUuY2NjbGFzcztcclxudmFyIHAgPSB1LnByb3BlcnR5O1xyXG52YXIgZiA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLmJ1dHRsZVR5cGUgPSAkYmFzZUJ1bGxldC5CdWxsZXRUeXBlLmVfYnVsbGV0XzU7XHJcbiAgICAgICAgZS5hdGtQb2ludCA9IG51bGw7XHJcbiAgICAgICAgZS5oZWFsdGhCYXIgPSBudWxsO1xyXG4gICAgICAgIGUuYnVsbGV0UHJlZmFiID0gbnVsbDtcclxuICAgICAgICBlLmF0a1NwZWVkID0gMDtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLmluaXRFbmVteSA9IGZ1bmN0aW9uIChlLCBpLCBvKSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xyXG4gICAgICAgICAgICBvID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5wcm90b3R5cGUuaW5pdEVuZW15LmNhbGwodGhpcywgZSwgaSwgbyk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLnNwZWNpYWxpdHlBdGtBZGQuc2V0KCRiYXNlQnVsbGV0LkJ1bGxldFNwZWNpYWxpdHkuZmlyZSwgdGhpcy5jb25maWcudmFsdWVbMF0pO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5zcGVjaWFsaXR5QXRrQWRkLnNldCgkYmFzZUJ1bGxldC5CdWxsZXRTcGVjaWFsaXR5LnRodW5kZXIsIHRoaXMuY29uZmlnLnZhbHVlWzFdKTtcclxuICAgICAgICB0aGlzLmF0a1JhbmdlID0gdGhpcy5jb25maWcudmFsdWVbMl07XHJcbiAgICAgICAgdGhpcy5hdGtTcGVlZCA9IHRoaXMuY29uZmlnLnZhbHVlWzNdO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5pbml0KHRoaXMuc3RhdHVzTWFuYWdlci5ocCwgZS5ocF9udW0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdWZmZXJBdHRhY2sgPSBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1c01hbmFnZXIuaXNEaWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbyA9IHQucHJvdG90eXBlLnN1ZmZlckF0dGFjay5jYWxsKHRoaXMsIGUsIGkpO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5yZW5kZXIodGhpcy5zdGF0dXNNYW5hZ2VyLmhwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuYXR0YWNrQW5pbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRCdXR0bGVQb29sKHRoaXMuYnV0dGxlVHlwZSk7XHJcbiAgICAgICAgaWYgKCF0KSB7XHJcbiAgICAgICAgICAgIHQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYikuZ2V0Q29tcG9uZW50KCRiYXNlQnVsbGV0LmRlZmF1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZSA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5lbmVteUJ1bGxldExheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICB0aGlzLmF0a1BvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMzLlpFUk8pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0LnNldFBvc2l0aW9uKGUpO1xyXG4gICAgICAgIHQuaW5pdEVCdXR0bGUodGhpcy5zdGF0dXNNYW5hZ2VyLmF0aywgdGhpcy5hdGtTcGVlZCk7XHJcbiAgICAgICAgdC5pbnNlcnQoJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmVuZW15QnVsbGV0TGF5ZXIpO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW3AoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJhdGtQb2ludFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbcCgkaGVhbHRoQmFyLmRlZmF1bHQpXSwgZS5wcm90b3R5cGUsIFwiaGVhbHRoQmFyXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtwKGNjLlByZWZhYildLCBlLnByb3RvdHlwZSwgXCJidWxsZXRQcmVmYWJcIiwgdm9pZCAwKTtcclxuICAgIHJldHVybiBfX2RlY29yYXRlKFtkXSwgZSk7XHJcbn0pKCRiYXNlRW5lbXkuZGVmYXVsdCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGY7XHJcbiJdfQ==