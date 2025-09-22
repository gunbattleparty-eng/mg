
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Bullet_10.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0741EETfZGL445MtJ4gCHa', 'Bullet_10');
// game_script/scripts/Bullet_10.js

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
    e.buttleType = $baseBullet.BulletType.thunder_split;
    e.targetEnemy = null;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.atk = this.skillParam.thunderSplitAtk[$gameSkillInfo.Skill4Param.FINAL];
    this.speed = this.skillParam.thunderSplitSpeed[$gameSkillInfo.Skill4Param.FINAL];
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

      if (this.skillParam.thunderSplitParalysisTime > 0) {
        var o = {
          type: $enemyStatus.EnemyDebuffType.PARALYSIS,
          timeLeft: this.skillParam.thunderSplitParalysisTime,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJ1bGxldF8xMC5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkZ2FtZVNraWxsSW5mbyIsIiRlbmVteVN0YXR1cyIsIiRiYXNlQnVsbGV0IiwidSIsImNjIiwiX2RlY29yYXRvciIsImQiLCJjY2NsYXNzIiwicCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJ1dHRsZVR5cGUiLCJCdWxsZXRUeXBlIiwidGh1bmRlcl9zcGxpdCIsInRhcmdldEVuZW15IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEJ1dHRsZSIsImkiLCJjYWxsIiwiYXRrIiwic2tpbGxQYXJhbSIsInRodW5kZXJTcGxpdEF0ayIsIlNraWxsNFBhcmFtIiwiRklOQUwiLCJzcGVlZCIsInRodW5kZXJTcGxpdFNwZWVkIiwidmVsb2NpdHkiLCJzZXQiLCJtdWx0aXBseVNjYWxhciIsIm9uVHJpZ2dlciIsImlzVXNlIiwiVHJpZ2dlciIsImVudGVyIiwiaXNWYWxpZCIsIm9iamVjdCIsInN1ZmZlckF0ayIsImlkIiwic2tpbGxJZCIsInNraWxsU3BlY2lhbGl0eXMiLCJ0aHVuZGVyU3BsaXRQYXJhbHlzaXNUaW1lIiwidHlwZSIsIkVuZW15RGVidWZmVHlwZSIsIlBBUkFMWVNJUyIsInRpbWVMZWZ0IiwidmFsdWUiLCJzdWZmZXJEZWJ1ZmYiLCJyZW1vdmVTZWxmIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlDLGNBQWMsR0FBR0QsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlFLFlBQVksR0FBR0YsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJSSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLFVBQUYsR0FBZVosV0FBVyxDQUFDYSxVQUFaLENBQXVCQyxhQUF0QztJQUNBTCxDQUFDLENBQUNNLFdBQUYsR0FBZ0IsSUFBaEI7SUFDQSxPQUFPTixDQUFQO0VBQ0g7O0VBQ0RPLFNBQVMsQ0FBQ1AsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ1EsU0FBRixDQUFZQyxVQUFaLEdBQXlCLFVBQVVULENBQVYsRUFBYVUsQ0FBYixFQUFnQjtJQUNyQ1gsQ0FBQyxDQUFDUyxTQUFGLENBQVlDLFVBQVosQ0FBdUJFLElBQXZCLENBQTRCLElBQTVCLEVBQWtDWCxDQUFsQyxFQUFxQ1UsQ0FBckM7SUFDQSxLQUFLRSxHQUFMLEdBQVcsS0FBS0MsVUFBTCxDQUFnQkMsZUFBaEIsQ0FBZ0N6QixjQUFjLENBQUMwQixXQUFmLENBQTJCQyxLQUEzRCxDQUFYO0lBQ0EsS0FBS0MsS0FBTCxHQUFhLEtBQUtKLFVBQUwsQ0FBZ0JLLGlCQUFoQixDQUFrQzdCLGNBQWMsQ0FBQzBCLFdBQWYsQ0FBMkJDLEtBQTdELENBQWI7SUFDQSxLQUFLRyxRQUFMLENBQWNDLEdBQWQsQ0FBa0JwQixDQUFsQixFQUFxQnFCLGNBQXJCLENBQW9DLEtBQUtKLEtBQXpDO0VBQ0gsQ0FMRDs7RUFNQWpCLENBQUMsQ0FBQ1EsU0FBRixDQUFZYyxTQUFaLEdBQXdCLFVBQVV2QixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDcEMsSUFBSSxDQUFDLEtBQUt1QixLQUFOLElBQWV2QixDQUFDLElBQUliLE9BQU8sQ0FBQ3FDLE9BQVIsQ0FBZ0JDLEtBQXhDLEVBQStDO01BQzNDLElBQUloQyxFQUFFLENBQUNpQyxPQUFILENBQVcsS0FBS3BCLFdBQWhCLEtBQWdDUCxDQUFDLENBQUM0QixNQUFGLEtBQWEsS0FBS3JCLFdBQXRELEVBQW1FO1FBQy9EO01BQ0g7O01BQ0QsS0FBS2lCLEtBQUwsR0FBYSxDQUFDLENBQWQ7TUFDQSxJQUFJYixDQUFDLEdBQUdYLENBQUMsQ0FBQzRCLE1BQVY7TUFDQWpCLENBQUMsQ0FBQ2tCLFNBQUYsQ0FBWTtRQUNSQyxFQUFFLEVBQUUsS0FBS0MsT0FERDtRQUVSQyxnQkFBZ0IsRUFBRSxLQUFLQSxnQkFGZjtRQUdSbkIsR0FBRyxFQUFFLEtBQUtBO01BSEYsQ0FBWjs7TUFLQSxJQUFJLEtBQUtDLFVBQUwsQ0FBZ0JtQix5QkFBaEIsR0FBNEMsQ0FBaEQsRUFBbUQ7UUFDL0MsSUFBSTlDLENBQUMsR0FBRztVQUNKK0MsSUFBSSxFQUFFM0MsWUFBWSxDQUFDNEMsZUFBYixDQUE2QkMsU0FEL0I7VUFFSkMsUUFBUSxFQUFFLEtBQUt2QixVQUFMLENBQWdCbUIseUJBRnRCO1VBR0pLLEtBQUssRUFBRTtRQUhILENBQVI7UUFLQTNCLENBQUMsQ0FBQzRCLFlBQUYsQ0FBZXBELENBQWY7TUFDSDs7TUFDRCxLQUFLcUQsVUFBTDtJQUNIO0VBQ0osQ0F0QkQ7O0VBdUJBLE9BQU9DLFVBQVUsQ0FBQyxDQUFDN0MsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQXRDRCxDQXNDR1QsV0FBVyxXQXRDZCxDQUZDLENBQUw7QUF5Q0FrRCxPQUFPLFdBQVAsR0FBa0I1QyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkb2JqZWN0ID0gcmVxdWlyZShcIi4vT2JqZWN0XCIpO1xyXG52YXIgJGdhbWVTa2lsbEluZm8gPSByZXF1aXJlKFwiLi9HYW1lU2tpbGxJbmZvXCIpO1xyXG52YXIgJGVuZW15U3RhdHVzID0gcmVxdWlyZShcIi4vRW5lbXlTdGF0dXNcIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciB1ID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGQgPSB1LmNjY2xhc3M7XHJcbnZhciBwID1cclxuICAgICh1LnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUuYnV0dGxlVHlwZSA9ICRiYXNlQnVsbGV0LkJ1bGxldFR5cGUudGh1bmRlcl9zcGxpdDtcclxuICAgICAgICAgICAgZS50YXJnZXRFbmVteSA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICAgICAgZS5wcm90b3R5cGUuaW5pdEJ1dHRsZSA9IGZ1bmN0aW9uIChlLCBpKSB7XHJcbiAgICAgICAgICAgIHQucHJvdG90eXBlLmluaXRCdXR0bGUuY2FsbCh0aGlzLCBlLCBpKTtcclxuICAgICAgICAgICAgdGhpcy5hdGsgPSB0aGlzLnNraWxsUGFyYW0udGh1bmRlclNwbGl0QXRrWyRnYW1lU2tpbGxJbmZvLlNraWxsNFBhcmFtLkZJTkFMXTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuc2tpbGxQYXJhbS50aHVuZGVyU3BsaXRTcGVlZFskZ2FtZVNraWxsSW5mby5Ta2lsbDRQYXJhbS5GSU5BTF07XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkuc2V0KGUpLm11bHRpcGx5U2NhbGFyKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUub25UcmlnZ2VyID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVXNlICYmIGUgPT0gJG9iamVjdC5UcmlnZ2VyLmVudGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnRhcmdldEVuZW15KSAmJiB0Lm9iamVjdCA9PT0gdGhpcy50YXJnZXRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNVc2UgPSAhMDtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gdC5vYmplY3Q7XHJcbiAgICAgICAgICAgICAgICBpLnN1ZmZlckF0ayh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2tpbGxJZCxcclxuICAgICAgICAgICAgICAgICAgICBza2lsbFNwZWNpYWxpdHlzOiB0aGlzLnNraWxsU3BlY2lhbGl0eXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYXRrOiB0aGlzLmF0a1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5za2lsbFBhcmFtLnRodW5kZXJTcGxpdFBhcmFseXNpc1RpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuUEFSQUxZU0lTLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lTGVmdDogdGhpcy5za2lsbFBhcmFtLnRodW5kZXJTcGxpdFBhcmFseXNpc1RpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpLnN1ZmZlckRlYnVmZihvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbZF0sIGUpO1xyXG4gICAgfSkoJGJhc2VCdWxsZXQuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBwO1xyXG4iXX0=