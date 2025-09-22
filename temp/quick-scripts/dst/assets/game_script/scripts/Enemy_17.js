
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_17.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2dcaIbbpZKXYRlWDz/8l5f', 'Enemy_17');
// game_script/scripts/Enemy_17.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $baseEnemy = require("./BaseEnemy");

var $enemyStatus = require("./EnemyStatus");

var $healthBar = require("./HealthBar");

var u = cc._decorator;
var d = u.ccclass;
var p = u.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.healthBar = null;
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.ice, this.config.value[0]);
    this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.fire, this.config.value[2]);

    if (this.healthBar) {
      this.healthBar.init(this.statusManager.hp, e.hp_num);
    }
  };

  e.prototype.sufferDebuff = function (e) {
    if (e.type === $enemyStatus.EnemyDebuffType.FREEZE) {
      e.timeLeft *= 1 + this.config.value[1];

      if (e.timeLeft <= 0.016) {
        return;
      }
    } else {
      if (e.type === $enemyStatus.EnemyDebuffType.BURN && (e.timeLeft *= 1 + this.config.value[1], e.timeLeft <= 0.016)) {
        return;
      }
    }

    t.prototype.sufferDebuff.call(this, e);
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

  __decorate([p($healthBar["default"])], e.prototype, "healthBar", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzE3LmpzIl0sIm5hbWVzIjpbIm8iLCIkYmFzZUJ1bGxldCIsInJlcXVpcmUiLCIkYmFzZUVuZW15IiwiJGVuZW15U3RhdHVzIiwiJGhlYWx0aEJhciIsInUiLCJjYyIsIl9kZWNvcmF0b3IiLCJkIiwiY2NjbGFzcyIsInAiLCJwcm9wZXJ0eSIsImYiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGVhbHRoQmFyIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEVuZW15IiwiaSIsImNhbGwiLCJzdGF0dXNNYW5hZ2VyIiwic3BlY2lhbGl0eUF0a0FkZCIsInNldCIsIkJ1bGxldFNwZWNpYWxpdHkiLCJpY2UiLCJjb25maWciLCJ2YWx1ZSIsImZpcmUiLCJpbml0IiwiaHAiLCJocF9udW0iLCJzdWZmZXJEZWJ1ZmYiLCJ0eXBlIiwiRW5lbXlEZWJ1ZmZUeXBlIiwiRlJFRVpFIiwidGltZUxlZnQiLCJCVVJOIiwic3VmZmVyQXR0YWNrIiwiaXNEaWUiLCJyZW5kZXIiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlHLFVBQVUsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUksQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFD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VSxXQUFYLENBQUYsQ0FBRCxFQUEwQlUsQ0FBQyxDQUFDSyxTQUE1QixFQUF1QyxXQUF2QyxFQUFvRCxLQUFLLENBQXpELENBQVY7O0VBQ0EsT0FBT3dCLFVBQVUsQ0FBQyxDQUFDbkMsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQTlDTyxDQThDTFosVUFBVSxXQTlDTCxDQUFSOztBQStDQTBDLE9BQU8sV0FBUCxHQUFrQmhDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRiYXNlQnVsbGV0ID0gcmVxdWlyZShcIi4vQmFzZUJ1bGxldFwiKTtcclxudmFyICRiYXNlRW5lbXkgPSByZXF1aXJlKFwiLi9CYXNlRW5lbXlcIik7XHJcbnZhciAkZW5lbXlTdGF0dXMgPSByZXF1aXJlKFwiLi9FbmVteVN0YXR1c1wiKTtcclxudmFyICRoZWFsdGhCYXIgPSByZXF1aXJlKFwiLi9IZWFsdGhCYXJcIik7XHJcbnZhciB1ID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGQgPSB1LmNjY2xhc3M7XHJcbnZhciBwID0gdS5wcm9wZXJ0eTtcclxudmFyIGYgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgZS5oZWFsdGhCYXIgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUuaW5pdEVuZW15ID0gZnVuY3Rpb24gKGUsIGksIG8pIHtcclxuICAgICAgICBpZiAodm9pZCAwID09PSBvKSB7XHJcbiAgICAgICAgICAgIG8gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0LnByb3RvdHlwZS5pbml0RW5lbXkuY2FsbCh0aGlzLCBlLCBpLCBvKTtcclxuICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuc3BlY2lhbGl0eUF0a0FkZC5zZXQoJGJhc2VCdWxsZXQuQnVsbGV0U3BlY2lhbGl0eS5pY2UsIHRoaXMuY29uZmlnLnZhbHVlWzBdKTtcclxuICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuc3BlY2lhbGl0eUF0a0FkZC5zZXQoJGJhc2VCdWxsZXQuQnVsbGV0U3BlY2lhbGl0eS5maXJlLCB0aGlzLmNvbmZpZy52YWx1ZVsyXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmluaXQodGhpcy5zdGF0dXNNYW5hZ2VyLmhwLCBlLmhwX251bSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnN1ZmZlckRlYnVmZiA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudHlwZSA9PT0gJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5GUkVFWkUpIHtcclxuICAgICAgICAgICAgZS50aW1lTGVmdCAqPSAxICsgdGhpcy5jb25maWcudmFsdWVbMV07XHJcbiAgICAgICAgICAgIGlmIChlLnRpbWVMZWZ0IDw9IDAuMDE2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBlLnR5cGUgPT09ICRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuQlVSTiAmJlxyXG4gICAgICAgICAgICAgICAgKChlLnRpbWVMZWZ0ICo9IDEgKyB0aGlzLmNvbmZpZy52YWx1ZVsxXSksIGUudGltZUxlZnQgPD0gMC4wMTYpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQucHJvdG90eXBlLnN1ZmZlckRlYnVmZi5jYWxsKHRoaXMsIGUpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnN1ZmZlckF0dGFjayA9IGZ1bmN0aW9uIChlLCBpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzTWFuYWdlci5pc0RpZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gITE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvID0gdC5wcm90b3R5cGUuc3VmZmVyQXR0YWNrLmNhbGwodGhpcywgZSwgaSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLnJlbmRlcih0aGlzLnN0YXR1c01hbmFnZXIuaHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtwKCRoZWFsdGhCYXIuZGVmYXVsdCldLCBlLnByb3RvdHlwZSwgXCJoZWFsdGhCYXJcIiwgdm9pZCAwKTtcclxuICAgIHJldHVybiBfX2RlY29yYXRlKFtkXSwgZSk7XHJcbn0pKCRiYXNlRW5lbXkuZGVmYXVsdCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGY7XHJcbiJdfQ==