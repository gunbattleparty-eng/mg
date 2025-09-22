
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_13.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9104dbZUVVBlaW0RKs8MhCg', 'Enemy_13');
// game_script/scripts/Enemy_13.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $enemyStatus = require("./EnemyStatus");

var $enemy_5 = require("./Enemy_5");

var c = cc._decorator;
var u = c.ccclass;
var d = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.e_bullet_13;
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.specialityAtkAdd.clear();
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.thunder, this.config.value[0]);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.trajectory, this.config.value[2]);
    this.atkRange = this.config.value[3];
    this.atkSpeed = this.config.value[4];
  };

  e.prototype.sufferDebuff = function (e) {
    if (!(e.type === $enemyStatus.EnemyDebuffType.PARALYSIS && (e.timeLeft *= 1 + this.config.value[1], e.timeLeft <= 0.016))) {
      t.prototype.sufferDebuff.call(this, e);
    }
  };

  return __decorate([u], e);
}($enemy_5["default"]));
exports["default"] = d;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzEzLmpzIl0sIm5hbWVzIjpbIm8iLCIkYmFzZUJ1bGxldCIsInJlcXVpcmUiLCIkZW5lbXlTdGF0dXMiLCIkZW5lbXlfNSIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJ1IiwiY2NjbGFzcyIsImQiLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJidXR0bGVUeXBlIiwiQnVsbGV0VHlwZSIsImVfYnVsbGV0XzEzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEVuZW15IiwiaSIsImNhbGwiLCJzdGF0dXNNYW5hZ2VyIiwic3BlY2lhbGl0eUF0a0FkZCIsImNsZWFyIiwic2V0IiwiQnVsbGV0U3BlY2lhbGl0eSIsInRodW5kZXIiLCJjb25maWciLCJ2YWx1ZSIsInRyYWplY3RvcnkiLCJhdGtSYW5nZSIsImF0a1NwZWVkIiwic3VmZmVyRGVidWZmIiwidHlwZSIsIkVuZW15RGVidWZmVHlwZSIsIlBBUkFMWVNJUyIsInRpbWVMZWZ0IiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlDLFlBQVksR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHRixPQUFPLENBQUMsV0FBRCxDQUF0Qjs7QUFDQSxJQUFJRyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLFVBQUYsR0FBZWYsV0FBVyxDQUFDZ0IsVUFBWixDQUF1QkMsV0FBdEM7SUFDQSxPQUFPTCxDQUFQO0VBQ0g7O0VBQ0RNLFNBQVMsQ0FBQ04sQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ08sU0FBRixDQUFZQyxTQUFaLEdBQXdCLFVBQVVSLENBQVYsRUFBYVMsQ0FBYixFQUFnQnRCLENBQWhCLEVBQW1CO0lBQ3ZDLElBQUksS0FBSyxDQUFMLEtBQVdBLENBQWYsRUFBa0I7TUFDZEEsQ0FBQyxHQUFHLENBQUo7SUFDSDs7SUFDRFksQ0FBQyxDQUFDUSxTQUFGLENBQVlDLFNBQVosQ0FBc0JFLElBQXRCLENBQTJCLElBQTNCLEVBQWlDVixDQUFqQyxFQUFvQ1MsQ0FBcEMsRUFBdUN0QixDQUF2QztJQUNBLEtBQUt3QixhQUFMLENBQW1CQyxnQkFBbkIsQ0FBb0NDLEtBQXBDO0lBQ0EsS0FBS0YsYUFBTCxDQUFtQkMsZ0JBQW5CLENBQW9DRSxHQUFwQyxDQUF3QzFCLFdBQVcsQ0FBQzJCLGdCQUFaLENBQTZCQyxPQUFyRSxFQUE4RSxLQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsQ0FBOUU7SUFDQSxLQUFLUCxhQUFMLENBQW1CQyxnQkFBbkIsQ0FBb0NFLEdBQXBDLENBQXdDMUIsV0FBVyxDQUFDMkIsZ0JBQVosQ0FBNkJJLFVBQXJFLEVBQWlGLEtBQUtGLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixDQUFqRjtJQUNBLEtBQUtFLFFBQUwsR0FBZ0IsS0FBS0gsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLENBQWhCO0lBQ0EsS0FBS0csUUFBTCxHQUFnQixLQUFLSixNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsQ0FBaEI7RUFDSCxDQVZEOztFQVdBbEIsQ0FBQyxDQUFDTyxTQUFGLENBQVllLFlBQVosR0FBMkIsVUFBVXRCLENBQVYsRUFBYTtJQUNwQyxJQUNJLEVBQ0lBLENBQUMsQ0FBQ3VCLElBQUYsS0FBV2pDLFlBQVksQ0FBQ2tDLGVBQWIsQ0FBNkJDLFNBQXhDLEtBQ0V6QixDQUFDLENBQUMwQixRQUFGLElBQWMsSUFBSSxLQUFLVCxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsQ0FBbkIsRUFBMENsQixDQUFDLENBQUMwQixRQUFGLElBQWMsS0FEekQsQ0FESixDQURKLEVBS0U7TUFDRTNCLENBQUMsQ0FBQ1EsU0FBRixDQUFZZSxZQUFaLENBQXlCWixJQUF6QixDQUE4QixJQUE5QixFQUFvQ1YsQ0FBcEM7SUFDSDtFQUNKLENBVEQ7O0VBVUEsT0FBTzJCLFVBQVUsQ0FBQyxDQUFDaEMsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQTdCRCxDQTZCR1QsUUFBUSxXQTdCWCxDQUZDLENBQUw7QUFnQ0FxQyxPQUFPLFdBQVAsR0FBa0IvQixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciAkZW5lbXlTdGF0dXMgPSByZXF1aXJlKFwiLi9FbmVteVN0YXR1c1wiKTtcclxudmFyICRlbmVteV81ID0gcmVxdWlyZShcIi4vRW5lbXlfNVwiKTtcclxudmFyIGMgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgdSA9IGMuY2NjbGFzcztcclxudmFyIGQgPVxyXG4gICAgKGMucHJvcGVydHksXHJcbiAgICAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICAgICAgZS5idXR0bGVUeXBlID0gJGJhc2VCdWxsZXQuQnVsbGV0VHlwZS5lX2J1bGxldF8xMztcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5pbml0RW5lbXkgPSBmdW5jdGlvbiAoZSwgaSwgbykge1xyXG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSBvKSB7XHJcbiAgICAgICAgICAgICAgICBvID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0LnByb3RvdHlwZS5pbml0RW5lbXkuY2FsbCh0aGlzLCBlLCBpLCBvKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLnNwZWNpYWxpdHlBdGtBZGQuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLnNwZWNpYWxpdHlBdGtBZGQuc2V0KCRiYXNlQnVsbGV0LkJ1bGxldFNwZWNpYWxpdHkudGh1bmRlciwgdGhpcy5jb25maWcudmFsdWVbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuc3BlY2lhbGl0eUF0a0FkZC5zZXQoJGJhc2VCdWxsZXQuQnVsbGV0U3BlY2lhbGl0eS50cmFqZWN0b3J5LCB0aGlzLmNvbmZpZy52YWx1ZVsyXSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrUmFuZ2UgPSB0aGlzLmNvbmZpZy52YWx1ZVszXTtcclxuICAgICAgICAgICAgdGhpcy5hdGtTcGVlZCA9IHRoaXMuY29uZmlnLnZhbHVlWzRdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUuc3VmZmVyRGVidWZmID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgIShcclxuICAgICAgICAgICAgICAgICAgICBlLnR5cGUgPT09ICRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuUEFSQUxZU0lTICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKChlLnRpbWVMZWZ0ICo9IDEgKyB0aGlzLmNvbmZpZy52YWx1ZVsxXSksIGUudGltZUxlZnQgPD0gMC4wMTYpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdC5wcm90b3R5cGUuc3VmZmVyRGVidWZmLmNhbGwodGhpcywgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFt1XSwgZSk7XHJcbiAgICB9KSgkZW5lbXlfNS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGQ7XHJcbiJdfQ==