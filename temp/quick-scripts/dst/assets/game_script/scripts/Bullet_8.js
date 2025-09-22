
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Bullet_8.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34261OgKr9I6aIhpb6jy3ji', 'Bullet_8');
// game_script/scripts/Bullet_8.js

"use strict";

var o;

var $object = require("./Object");

var $gameSkillInfo = require("./GameSkillInfo");

var $enemyStatus = require("./EnemyStatus");

var $baseBullet = require("./BaseBullet");

var u = cc._decorator;
var d = u.ccclass;
var p = (u.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.freeze_split;
    e.targetEnemy = null;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.atk = this.skillParam.freezeSplitAtk[$gameSkillInfo.Skill4Param.FINAL];
    this.speed = this.skillParam.freezeSpeed[$gameSkillInfo.Skill4Param.FINAL];
    this.velocity.set(e).multiplyScalar(this.speed);
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && e == $object.Trigger.enter) {
      if (cc.isValid(this.targetEnemy) && t.object === this.targetEnemy) {
        return;
      }

      this.isUse = !0;
      var i = t.object;
      i.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });

      if (this.skillParam.freezeSplitTime > 0) {
        var o = {
          type: $enemyStatus.EnemyDebuffType.FREEZE,
          timeLeft: this.skillParam.freezeSplitTime,
          value: 0
        };
        i.sufferDebuff(o);
      }

      this.removeSelf();
    }
  };

  return __decorate([d], e);
}($baseBullet["default"]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJ1bGxldF84LmpzIl0sIm5hbWVzIjpbIm8iLCIkb2JqZWN0IiwicmVxdWlyZSIsIiRnYW1lU2tpbGxJbmZvIiwiJGVuZW15U3RhdHVzIiwiJGJhc2VCdWxsZXQiLCJ1IiwiY2MiLCJfZGVjb3JhdG9yIiwiZCIsImNjY2xhc3MiLCJwIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnV0dGxlVHlwZSIsIkJ1bGxldFR5cGUiLCJmcmVlemVfc3BsaXQiLCJ0YXJnZXRFbmVteSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImluaXRCdXR0bGUiLCJpIiwiY2FsbCIsImF0ayIsInNraWxsUGFyYW0iLCJmcmVlemVTcGxpdEF0ayIsIlNraWxsNFBhcmFtIiwiRklOQUwiLCJzcGVlZCIsImZyZWV6ZVNwZWVkIiwidmVsb2NpdHkiLCJzZXQiLCJtdWx0aXBseVNjYWxhciIsIm9uVHJpZ2dlciIsImlzVXNlIiwiVHJpZ2dlciIsImVudGVyIiwiaXNWYWxpZCIsIm9iamVjdCIsInN1ZmZlckF0ayIsImlkIiwic2tpbGxJZCIsInNraWxsU3BlY2lhbGl0eXMiLCJmcmVlemVTcGxpdFRpbWUiLCJ0eXBlIiwiRW5lbXlEZWJ1ZmZUeXBlIiwiRlJFRVpFIiwidGltZUxlZnQiLCJ2YWx1ZSIsInN1ZmZlckRlYnVmZiIsInJlbW92ZVNlbGYiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsY0FBYyxHQUFHRCxPQUFPLENBQUMsaUJBQUQsQ0FBNUI7O0FBQ0EsSUFBSUUsWUFBWSxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlJLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csVUFBRixHQUFlWixXQUFXLENBQUNhLFVBQVosQ0FBdUJDLFlBQXRDO0lBQ0FMLENBQUMsQ0FBQ00sV0FBRixHQUFnQixJQUFoQjtJQUNBLE9BQU9OLENBQVA7RUFDSDs7RUFDRE8sU0FBUyxDQUFDUCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDUSxTQUFGLENBQVlDLFVBQVosR0FBeUIsVUFBVVQsQ0FBVixFQUFhVSxDQUFiLEVBQWdCO0lBQ3JDWCxDQUFDLENBQUNTLFNBQUYsQ0FBWUMsVUFBWixDQUF1QkUsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0NYLENBQWxDLEVBQXFDVSxDQUFyQztJQUNBLEtBQUtFLEdBQUwsR0FBVyxLQUFLQyxVQUFMLENBQWdCQyxjQUFoQixDQUErQnpCLGNBQWMsQ0FBQzBCLFdBQWYsQ0FBMkJDLEtBQTFELENBQVg7SUFDQSxLQUFLQyxLQUFMLEdBQWEsS0FBS0osVUFBTCxDQUFnQkssV0FBaEIsQ0FBNEI3QixjQUFjLENBQUMwQixXQUFmLENBQTJCQyxLQUF2RCxDQUFiO0lBQ0EsS0FBS0csUUFBTCxDQUFjQyxHQUFkLENBQWtCcEIsQ0FBbEIsRUFBcUJxQixjQUFyQixDQUFvQyxLQUFLSixLQUF6QztFQUNILENBTEQ7O0VBTUFqQixDQUFDLENBQUNRLFNBQUYsQ0FBWWMsU0FBWixHQUF3QixVQUFVdkIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQ3BDLElBQUksQ0FBQyxLQUFLdUIsS0FBTixJQUFldkIsQ0FBQyxJQUFJYixPQUFPLENBQUNxQyxPQUFSLENBQWdCQyxLQUF4QyxFQUErQztNQUMzQyxJQUFJaEMsRUFBRSxDQUFDaUMsT0FBSCxDQUFXLEtBQUtwQixXQUFoQixLQUFnQ1AsQ0FBQyxDQUFDNEIsTUFBRixLQUFhLEtBQUtyQixXQUF0RCxFQUFtRTtRQUMvRDtNQUNIOztNQUNELEtBQUtpQixLQUFMLEdBQWEsQ0FBQyxDQUFkO01BQ0EsSUFBSWIsQ0FBQyxHQUFHWCxDQUFDLENBQUM0QixNQUFWO01BQ0FqQixDQUFDLENBQUNrQixTQUFGLENBQVk7UUFDUkMsRUFBRSxFQUFFLEtBQUtDLE9BREQ7UUFFUkMsZ0JBQWdCLEVBQUUsS0FBS0EsZ0JBRmY7UUFHUm5CLEdBQUcsRUFBRSxLQUFLQTtNQUhGLENBQVo7O01BS0EsSUFBSSxLQUFLQyxVQUFMLENBQWdCbUIsZUFBaEIsR0FBa0MsQ0FBdEMsRUFBeUM7UUFDckMsSUFBSTlDLENBQUMsR0FBRztVQUNKK0MsSUFBSSxFQUFFM0MsWUFBWSxDQUFDNEMsZUFBYixDQUE2QkMsTUFEL0I7VUFFSkMsUUFBUSxFQUFFLEtBQUt2QixVQUFMLENBQWdCbUIsZUFGdEI7VUFHSkssS0FBSyxFQUFFO1FBSEgsQ0FBUjtRQUtBM0IsQ0FBQyxDQUFDNEIsWUFBRixDQUFlcEQsQ0FBZjtNQUNIOztNQUNELEtBQUtxRCxVQUFMO0lBQ0g7RUFDSixDQXRCRDs7RUF1QkEsT0FBT0MsVUFBVSxDQUFDLENBQUM3QyxDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBdENELENBc0NHVCxXQUFXLFdBdENkLENBRkMsQ0FBTDtBQXlDQWtELE9BQU8sV0FBUCxHQUFrQjVDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRvYmplY3QgPSByZXF1aXJlKFwiLi9PYmplY3RcIik7XHJcbnZhciAkZ2FtZVNraWxsSW5mbyA9IHJlcXVpcmUoXCIuL0dhbWVTa2lsbEluZm9cIik7XHJcbnZhciAkZW5lbXlTdGF0dXMgPSByZXF1aXJlKFwiLi9FbmVteVN0YXR1c1wiKTtcclxudmFyICRiYXNlQnVsbGV0ID0gcmVxdWlyZShcIi4vQmFzZUJ1bGxldFwiKTtcclxudmFyIHUgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgZCA9IHUuY2NjbGFzcztcclxudmFyIHAgPVxyXG4gICAgKHUucHJvcGVydHksXHJcbiAgICAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICAgICAgZS5idXR0bGVUeXBlID0gJGJhc2VCdWxsZXQuQnVsbGV0VHlwZS5mcmVlemVfc3BsaXQ7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0RW5lbXkgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgICAgIGUucHJvdG90eXBlLmluaXRCdXR0bGUgPSBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgICAgICB0LnByb3RvdHlwZS5pbml0QnV0dGxlLmNhbGwodGhpcywgZSwgaSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrID0gdGhpcy5za2lsbFBhcmFtLmZyZWV6ZVNwbGl0QXRrWyRnYW1lU2tpbGxJbmZvLlNraWxsNFBhcmFtLkZJTkFMXTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuc2tpbGxQYXJhbS5mcmVlemVTcGVlZFskZ2FtZVNraWxsSW5mby5Ta2lsbDRQYXJhbS5GSU5BTF07XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkuc2V0KGUpLm11bHRpcGx5U2NhbGFyKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUub25UcmlnZ2VyID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVXNlICYmIGUgPT0gJG9iamVjdC5UcmlnZ2VyLmVudGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnRhcmdldEVuZW15KSAmJiB0Lm9iamVjdCA9PT0gdGhpcy50YXJnZXRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNVc2UgPSAhMDtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gdC5vYmplY3Q7XHJcbiAgICAgICAgICAgICAgICBpLnN1ZmZlckF0ayh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2tpbGxJZCxcclxuICAgICAgICAgICAgICAgICAgICBza2lsbFNwZWNpYWxpdHlzOiB0aGlzLnNraWxsU3BlY2lhbGl0eXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYXRrOiB0aGlzLmF0a1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5za2lsbFBhcmFtLmZyZWV6ZVNwbGl0VGltZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5GUkVFWkUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVMZWZ0OiB0aGlzLnNraWxsUGFyYW0uZnJlZXplU3BsaXRUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgaS5zdWZmZXJEZWJ1ZmYobyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2RdLCBlKTtcclxuICAgIH0pKCRiYXNlQnVsbGV0LmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcDtcclxuIl19