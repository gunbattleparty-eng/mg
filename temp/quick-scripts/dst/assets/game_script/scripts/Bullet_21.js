
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Bullet_21.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b20cKOKZJLBJFErydNIsrM', 'Bullet_21');
// game_script/scripts/Bullet_21.js

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
    e.buttleType = $baseBullet.BulletType.ice_boom_split;
    e.targetEnemy = null;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.atk = this.skillParam.iceBoomSplitAtk[$gameSkillInfo.Skill4Param.FINAL];
    this.speed = 800;

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }
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

      if (this.skillParam.iceBoomSplitFreezeTime > 0) {
        var o = {
          type: $enemyStatus.EnemyDebuffType.FREEZE,
          timeLeft: this.skillParam.iceBoomSplitFreezeTime,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJ1bGxldF8yMS5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkZ2FtZVNraWxsSW5mbyIsIiRlbmVteVN0YXR1cyIsIiRiYXNlQnVsbGV0IiwidSIsImNjIiwiX2RlY29yYXRvciIsImQiLCJjY2NsYXNzIiwicCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJ1dHRsZVR5cGUiLCJCdWxsZXRUeXBlIiwiaWNlX2Jvb21fc3BsaXQiLCJ0YXJnZXRFbmVteSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImluaXRCdXR0bGUiLCJpIiwiY2FsbCIsImF0ayIsInNraWxsUGFyYW0iLCJpY2VCb29tU3BsaXRBdGsiLCJTa2lsbDRQYXJhbSIsIkZJTkFMIiwic3BlZWQiLCJ2ZWxvY2l0eSIsInNldCIsIm11bHRpcGx5U2NhbGFyIiwib25UcmlnZ2VyIiwiaXNVc2UiLCJUcmlnZ2VyIiwiZW50ZXIiLCJpc1ZhbGlkIiwib2JqZWN0Iiwic3VmZmVyQXRrIiwiaWQiLCJza2lsbElkIiwic2tpbGxTcGVjaWFsaXR5cyIsImljZUJvb21TcGxpdEZyZWV6ZVRpbWUiLCJ0eXBlIiwiRW5lbXlEZWJ1ZmZUeXBlIiwiRlJFRVpFIiwidGltZUxlZnQiLCJ2YWx1ZSIsInN1ZmZlckRlYnVmZiIsInJlbW92ZVNlbGYiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsY0FBYyxHQUFHRCxPQUFPLENBQUMsaUJBQUQsQ0FBNUI7O0FBQ0EsSUFBSUUsWUFBWSxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlJLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csVUFBRixHQUFlWixXQUFXLENBQUNhLFVBQVosQ0FBdUJDLGNBQXRDO0lBQ0FMLENBQUMsQ0FBQ00sV0FBRixHQUFnQixJQUFoQjtJQUNBLE9BQU9OLENBQVA7RUFDSDs7RUFDRE8sU0FBUyxDQUFDUCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDUSxTQUFGLENBQVlDLFVBQVosR0FBeUIsVUFBVVQsQ0FBVixFQUFhVSxDQUFiLEVBQWdCO0lBQ3JDWCxDQUFDLENBQUNTLFNBQUYsQ0FBWUMsVUFBWixDQUF1QkUsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0NYLENBQWxDLEVBQXFDVSxDQUFyQztJQUNBLEtBQUtFLEdBQUwsR0FBVyxLQUFLQyxVQUFMLENBQWdCQyxlQUFoQixDQUFnQ3pCLGNBQWMsQ0FBQzBCLFdBQWYsQ0FBMkJDLEtBQTNELENBQVg7SUFDQSxLQUFLQyxLQUFMLEdBQWEsR0FBYjs7SUFDQSxJQUFJakIsQ0FBSixFQUFPO01BQ0gsS0FBS2tCLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQm5CLENBQWxCLEVBQXFCb0IsY0FBckIsQ0FBb0MsS0FBS0gsS0FBekM7SUFDSDtFQUNKLENBUEQ7O0VBUUFqQixDQUFDLENBQUNRLFNBQUYsQ0FBWWEsU0FBWixHQUF3QixVQUFVdEIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQ3BDLElBQUksQ0FBQyxLQUFLc0IsS0FBTixJQUFldEIsQ0FBQyxJQUFJYixPQUFPLENBQUNvQyxPQUFSLENBQWdCQyxLQUF4QyxFQUErQztNQUMzQyxJQUFJL0IsRUFBRSxDQUFDZ0MsT0FBSCxDQUFXLEtBQUtuQixXQUFoQixLQUFnQ1AsQ0FBQyxDQUFDMkIsTUFBRixLQUFhLEtBQUtwQixXQUF0RCxFQUFtRTtRQUMvRDtNQUNIOztNQUNELEtBQUtnQixLQUFMLEdBQWEsQ0FBQyxDQUFkO01BQ0EsSUFBSVosQ0FBQyxHQUFHWCxDQUFDLENBQUMyQixNQUFWO01BQ0FoQixDQUFDLENBQUNpQixTQUFGLENBQVk7UUFDUkMsRUFBRSxFQUFFLEtBQUtDLE9BREQ7UUFFUkMsZ0JBQWdCLEVBQUUsS0FBS0EsZ0JBRmY7UUFHUmxCLEdBQUcsRUFBRSxLQUFLQTtNQUhGLENBQVo7O01BS0EsSUFBSSxLQUFLQyxVQUFMLENBQWdCa0Isc0JBQWhCLEdBQXlDLENBQTdDLEVBQWdEO1FBQzVDLElBQUk3QyxDQUFDLEdBQUc7VUFDSjhDLElBQUksRUFBRTFDLFlBQVksQ0FBQzJDLGVBQWIsQ0FBNkJDLE1BRC9CO1VBRUpDLFFBQVEsRUFBRSxLQUFLdEIsVUFBTCxDQUFnQmtCLHNCQUZ0QjtVQUdKSyxLQUFLLEVBQUU7UUFISCxDQUFSO1FBS0ExQixDQUFDLENBQUMyQixZQUFGLENBQWVuRCxDQUFmO01BQ0g7O01BQ0QsS0FBS29ELFVBQUw7SUFDSDtFQUNKLENBdEJEOztFQXVCQSxPQUFPQyxVQUFVLENBQUMsQ0FBQzVDLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0F4Q0QsQ0F3Q0dULFdBQVcsV0F4Q2QsQ0FGQyxDQUFMO0FBMkNBaUQsT0FBTyxXQUFQLEdBQWtCM0MsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJG9iamVjdCA9IHJlcXVpcmUoXCIuL09iamVjdFwiKTtcclxudmFyICRnYW1lU2tpbGxJbmZvID0gcmVxdWlyZShcIi4vR2FtZVNraWxsSW5mb1wiKTtcclxudmFyICRlbmVteVN0YXR1cyA9IHJlcXVpcmUoXCIuL0VuZW15U3RhdHVzXCIpO1xyXG52YXIgJGJhc2VCdWxsZXQgPSByZXF1aXJlKFwiLi9CYXNlQnVsbGV0XCIpO1xyXG52YXIgdSA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBkID0gdS5jY2NsYXNzO1xyXG52YXIgcCA9XHJcbiAgICAodS5wcm9wZXJ0eSxcclxuICAgIChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICBlLmJ1dHRsZVR5cGUgPSAkYmFzZUJ1bGxldC5CdWxsZXRUeXBlLmljZV9ib29tX3NwbGl0O1xyXG4gICAgICAgICAgICBlLnRhcmdldEVuZW15ID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5pbml0QnV0dGxlID0gZnVuY3Rpb24gKGUsIGkpIHtcclxuICAgICAgICAgICAgdC5wcm90b3R5cGUuaW5pdEJ1dHRsZS5jYWxsKHRoaXMsIGUsIGkpO1xyXG4gICAgICAgICAgICB0aGlzLmF0ayA9IHRoaXMuc2tpbGxQYXJhbS5pY2VCb29tU3BsaXRBdGtbJGdhbWVTa2lsbEluZm8uU2tpbGw0UGFyYW0uRklOQUxdO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gODAwO1xyXG4gICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5zZXQoZSkubXVsdGlwbHlTY2FsYXIodGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLm9uVHJpZ2dlciA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1VzZSAmJiBlID09ICRvYmplY3QuVHJpZ2dlci5lbnRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy50YXJnZXRFbmVteSkgJiYgdC5vYmplY3QgPT09IHRoaXMudGFyZ2V0RW5lbXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVXNlID0gITA7XHJcbiAgICAgICAgICAgICAgICB2YXIgaSA9IHQub2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgaS5zdWZmZXJBdGsoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnNraWxsSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxTcGVjaWFsaXR5czogdGhpcy5za2lsbFNwZWNpYWxpdHlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0azogdGhpcy5hdGtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2tpbGxQYXJhbS5pY2VCb29tU3BsaXRGcmVlemVUaW1lID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLkZSRUVaRSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUxlZnQ6IHRoaXMuc2tpbGxQYXJhbS5pY2VCb29tU3BsaXRGcmVlemVUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgaS5zdWZmZXJEZWJ1ZmYobyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2RdLCBlKTtcclxuICAgIH0pKCRiYXNlQnVsbGV0LmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcDtcclxuIl19