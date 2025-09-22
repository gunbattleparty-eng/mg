
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Bullet_23.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b07460iV8lE579/Hm+1gfDl', 'Bullet_23');
// game_script/scripts/Bullet_23.js

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
    e.buttleType = $baseBullet.BulletType.wind_blade_boom;
    e.skillSpecialitys = [$baseBullet.BulletSpeciality.boom, $baseBullet.BulletSpeciality.wind];
    e.atkedEnemy = new Set();
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.setScale(cc.v3(1, 1));
    this.atk = this.skillParam.windBladeWaveAtk[$gameSkillInfo.Skill4Param.FINAL];
    this.atkedEnemy.clear();
  };

  e.prototype.setAnimation = function () {
    var t = this;
    var e = this.node.children[0].getComponent(cc.Animation);
    e.play("bullet_23");
    e.once(cc.Animation.EventType.FINISHED, function () {
      t.removeSelf();
    }, this);
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && (e == $object.Trigger.enter || e == $object.Trigger.stay)) {
      var i = t.object;

      if (this.atkedEnemy.has(i)) {
        return;
      }

      this.atkedEnemy.add(i);
      i.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });

      if (this.skillParam.windBladeWaveFreezeTime > 0) {
        i.sufferDebuff({
          id: this.skillId,
          type: $enemyStatus.EnemyDebuffType.FREEZE,
          timeLeft: this.skillParam.windBladeWaveFreezeTime,
          value: 0
        });
      }
    }
  };

  e.prototype.updateFrame = function () {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJ1bGxldF8yMy5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkZ2FtZVNraWxsSW5mbyIsIiRlbmVteVN0YXR1cyIsIiRiYXNlQnVsbGV0IiwidSIsImNjIiwiX2RlY29yYXRvciIsImQiLCJjY2NsYXNzIiwicCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJ1dHRsZVR5cGUiLCJCdWxsZXRUeXBlIiwid2luZF9ibGFkZV9ib29tIiwic2tpbGxTcGVjaWFsaXR5cyIsIkJ1bGxldFNwZWNpYWxpdHkiLCJib29tIiwid2luZCIsImF0a2VkRW5lbXkiLCJTZXQiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0QnV0dGxlIiwiaSIsImNhbGwiLCJzZXRTY2FsZSIsInYzIiwiYXRrIiwic2tpbGxQYXJhbSIsIndpbmRCbGFkZVdhdmVBdGsiLCJTa2lsbDRQYXJhbSIsIkZJTkFMIiwiY2xlYXIiLCJzZXRBbmltYXRpb24iLCJub2RlIiwiY2hpbGRyZW4iLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJwbGF5Iiwib25jZSIsIkV2ZW50VHlwZSIsIkZJTklTSEVEIiwicmVtb3ZlU2VsZiIsIm9uVHJpZ2dlciIsImlzVXNlIiwiVHJpZ2dlciIsImVudGVyIiwic3RheSIsIm9iamVjdCIsImhhcyIsImFkZCIsInN1ZmZlckF0ayIsImlkIiwic2tpbGxJZCIsIndpbmRCbGFkZVdhdmVGcmVlemVUaW1lIiwic3VmZmVyRGVidWZmIiwidHlwZSIsIkVuZW15RGVidWZmVHlwZSIsIkZSRUVaRSIsInRpbWVMZWZ0IiwidmFsdWUiLCJ1cGRhdGVGcmFtZSIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7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R1JhLEdBQUcsRUFBRSxLQUFLQTtNQUhGLENBQVo7O01BS0EsSUFBSSxLQUFLQyxVQUFMLENBQWdCMEIsdUJBQWhCLEdBQTBDLENBQTlDLEVBQWlEO1FBQzdDL0IsQ0FBQyxDQUFDZ0MsWUFBRixDQUFlO1VBQ1hILEVBQUUsRUFBRSxLQUFLQyxPQURFO1VBRVhHLElBQUksRUFBRTFELFlBQVksQ0FBQzJELGVBQWIsQ0FBNkJDLE1BRnhCO1VBR1hDLFFBQVEsRUFBRSxLQUFLL0IsVUFBTCxDQUFnQjBCLHVCQUhmO1VBSVhNLEtBQUssRUFBRTtRQUpJLENBQWY7TUFNSDtJQUNKO0VBQ0osQ0FyQkQ7O0VBc0JBcEQsQ0FBQyxDQUFDYSxTQUFGLENBQVl3QyxXQUFaLEdBQTBCLFlBQVksQ0FBRSxDQUF4Qzs7RUFDQSxPQUFPQyxVQUFVLENBQUMsQ0FBQzNELENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0FuREQsQ0FtREdULFdBQVcsV0FuRGQsQ0FGQyxDQUFMO0FBc0RBZ0UsT0FBTyxXQUFQLEdBQWtCMUQsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJG9iamVjdCA9IHJlcXVpcmUoXCIuL09iamVjdFwiKTtcclxudmFyICRnYW1lU2tpbGxJbmZvID0gcmVxdWlyZShcIi4vR2FtZVNraWxsSW5mb1wiKTtcclxudmFyICRlbmVteVN0YXR1cyA9IHJlcXVpcmUoXCIuL0VuZW15U3RhdHVzXCIpO1xyXG52YXIgJGJhc2VCdWxsZXQgPSByZXF1aXJlKFwiLi9CYXNlQnVsbGV0XCIpO1xyXG52YXIgdSA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBkID0gdS5jY2NsYXNzO1xyXG52YXIgcCA9XHJcbiAgICAodS5wcm9wZXJ0eSxcclxuICAgIChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICBlLmJ1dHRsZVR5cGUgPSAkYmFzZUJ1bGxldC5CdWxsZXRUeXBlLndpbmRfYmxhZGVfYm9vbTtcclxuICAgICAgICAgICAgZS5za2lsbFNwZWNpYWxpdHlzID0gWyRiYXNlQnVsbGV0LkJ1bGxldFNwZWNpYWxpdHkuYm9vbSwgJGJhc2VCdWxsZXQuQnVsbGV0U3BlY2lhbGl0eS53aW5kXTtcclxuICAgICAgICAgICAgZS5hdGtlZEVuZW15ID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgICAgIGUucHJvdG90eXBlLmluaXRCdXR0bGUgPSBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgICAgICB0LnByb3RvdHlwZS5pbml0QnV0dGxlLmNhbGwodGhpcywgZSwgaSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoY2MudjMoMSwgMSkpO1xyXG4gICAgICAgICAgICB0aGlzLmF0ayA9IHRoaXMuc2tpbGxQYXJhbS53aW5kQmxhZGVXYXZlQXRrWyRnYW1lU2tpbGxJbmZvLlNraWxsNFBhcmFtLkZJTkFMXTtcclxuICAgICAgICAgICAgdGhpcy5hdGtlZEVuZW15LmNsZWFyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5zZXRBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGUucGxheShcImJ1bGxldF8yM1wiKTtcclxuICAgICAgICAgICAgZS5vbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5vblRyaWdnZXIgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNVc2UgJiYgKGUgPT0gJG9iamVjdC5UcmlnZ2VyLmVudGVyIHx8IGUgPT0gJG9iamVjdC5UcmlnZ2VyLnN0YXkpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaSA9IHQub2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXRrZWRFbmVteS5oYXMoaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0a2VkRW5lbXkuYWRkKGkpO1xyXG4gICAgICAgICAgICAgICAgaS5zdWZmZXJBdGsoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnNraWxsSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxTcGVjaWFsaXR5czogdGhpcy5za2lsbFNwZWNpYWxpdHlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0azogdGhpcy5hdGtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2tpbGxQYXJhbS53aW5kQmxhZGVXYXZlRnJlZXplVGltZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpLnN1ZmZlckRlYnVmZih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnNraWxsSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuRlJFRVpFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lTGVmdDogdGhpcy5za2lsbFBhcmFtLndpbmRCbGFkZVdhdmVGcmVlemVUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGVGcmFtZSA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtkXSwgZSk7XHJcbiAgICB9KSgkYmFzZUJ1bGxldC5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHA7XHJcbiJdfQ==