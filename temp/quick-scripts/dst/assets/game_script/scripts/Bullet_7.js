
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Bullet_7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1f1bPq2uhF34bxpok2+LAa', 'Bullet_7');
// game_script/scripts/Bullet_7.js

"use strict";

var o;

var $object = require("./Object");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var c = cc._decorator;
var u = c.ccclass;
var d = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.thermobaric_split;
    e.targetEnemy = null;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    this.speed = this.skillParam.thermobaricSpeed[$gameSkillInfo.Skill4Param.FINAL];
    this.velocity.set(e).multiplyScalar(this.speed);
    this.atk = this.skillParam.thermobaricSplitAtk[$gameSkillInfo.Skill4Param.FINAL];
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse && e == $object.Trigger.enter) {
      if (cc.isValid(this.targetEnemy) && t.object === this.targetEnemy) {
        return;
      }

      this.isUse = !0;
      t.object.sufferAtk({
        id: this.skillId,
        skillSpecialitys: this.skillSpecialitys,
        atk: this.atk
      });
      this.removeSelf();
    }
  };

  return __decorate([u], e);
}($baseBullet["default"]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJ1bGxldF83LmpzIl0sIm5hbWVzIjpbIm8iLCIkb2JqZWN0IiwicmVxdWlyZSIsIiRnYW1lU2tpbGxJbmZvIiwiJGJhc2VCdWxsZXQiLCJjIiwiY2MiLCJfZGVjb3JhdG9yIiwidSIsImNjY2xhc3MiLCJkIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnV0dGxlVHlwZSIsIkJ1bGxldFR5cGUiLCJ0aGVybW9iYXJpY19zcGxpdCIsInRhcmdldEVuZW15IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEJ1dHRsZSIsImkiLCJjYWxsIiwic3BlZWQiLCJza2lsbFBhcmFtIiwidGhlcm1vYmFyaWNTcGVlZCIsIlNraWxsNFBhcmFtIiwiRklOQUwiLCJ2ZWxvY2l0eSIsInNldCIsIm11bHRpcGx5U2NhbGFyIiwiYXRrIiwidGhlcm1vYmFyaWNTcGxpdEF0ayIsIm9uVHJpZ2dlciIsImlzVXNlIiwiVHJpZ2dlciIsImVudGVyIiwiaXNWYWxpZCIsIm9iamVjdCIsInN1ZmZlckF0ayIsImlkIiwic2tpbGxJZCIsInNraWxsU3BlY2lhbGl0eXMiLCJyZW1vdmVTZWxmIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlDLGNBQWMsR0FBR0QsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlFLFdBQVcsR0FBR0YsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxVQUFGLEdBQWVaLFdBQVcsQ0FBQ2EsVUFBWixDQUF1QkMsaUJBQXRDO0lBQ0FMLENBQUMsQ0FBQ00sV0FBRixHQUFnQixJQUFoQjtJQUNBLE9BQU9OLENBQVA7RUFDSDs7RUFDRE8sU0FBUyxDQUFDUCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDUSxTQUFGLENBQVlDLFVBQVosR0FBeUIsVUFBVVQsQ0FBVixFQUFhVSxDQUFiLEVBQWdCO0lBQ3JDWCxDQUFDLENBQUNTLFNBQUYsQ0FBWUMsVUFBWixDQUF1QkUsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0NYLENBQWxDLEVBQXFDVSxDQUFyQztJQUNBLEtBQUtFLEtBQUwsR0FBYSxLQUFLQyxVQUFMLENBQWdCQyxnQkFBaEIsQ0FBaUN4QixjQUFjLENBQUN5QixXQUFmLENBQTJCQyxLQUE1RCxDQUFiO0lBQ0EsS0FBS0MsUUFBTCxDQUFjQyxHQUFkLENBQWtCbEIsQ0FBbEIsRUFBcUJtQixjQUFyQixDQUFvQyxLQUFLUCxLQUF6QztJQUNBLEtBQUtRLEdBQUwsR0FBVyxLQUFLUCxVQUFMLENBQWdCUSxtQkFBaEIsQ0FBb0MvQixjQUFjLENBQUN5QixXQUFmLENBQTJCQyxLQUEvRCxDQUFYO0VBQ0gsQ0FMRDs7RUFNQWhCLENBQUMsQ0FBQ1EsU0FBRixDQUFZYyxTQUFaLEdBQXdCLFVBQVV2QixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDcEMsSUFBSSxDQUFDLEtBQUt1QixLQUFOLElBQWV2QixDQUFDLElBQUlaLE9BQU8sQ0FBQ29DLE9BQVIsQ0FBZ0JDLEtBQXhDLEVBQStDO01BQzNDLElBQUloQyxFQUFFLENBQUNpQyxPQUFILENBQVcsS0FBS3BCLFdBQWhCLEtBQWdDUCxDQUFDLENBQUM0QixNQUFGLEtBQWEsS0FBS3JCLFdBQXRELEVBQW1FO1FBQy9EO01BQ0g7O01BQ0QsS0FBS2lCLEtBQUwsR0FBYSxDQUFDLENBQWQ7TUFDQXhCLENBQUMsQ0FBQzRCLE1BQUYsQ0FBU0MsU0FBVCxDQUFtQjtRQUNmQyxFQUFFLEVBQUUsS0FBS0MsT0FETTtRQUVmQyxnQkFBZ0IsRUFBRSxLQUFLQSxnQkFGUjtRQUdmWCxHQUFHLEVBQUUsS0FBS0E7TUFISyxDQUFuQjtNQUtBLEtBQUtZLFVBQUw7SUFDSDtFQUNKLENBYkQ7O0VBY0EsT0FBT0MsVUFBVSxDQUFDLENBQUN0QyxDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBN0JELENBNkJHVCxXQUFXLFdBN0JkLENBRkMsQ0FBTDtBQWdDQTJDLE9BQU8sV0FBUCxHQUFrQnJDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRvYmplY3QgPSByZXF1aXJlKFwiLi9PYmplY3RcIik7XHJcbnZhciAkZ2FtZVNraWxsSW5mbyA9IHJlcXVpcmUoXCIuL0dhbWVTa2lsbEluZm9cIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciBjID0gY2MuX2RlY29yYXRvcjtcclxudmFyIHUgPSBjLmNjY2xhc3M7XHJcbnZhciBkID1cclxuICAgIChjLnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUuYnV0dGxlVHlwZSA9ICRiYXNlQnVsbGV0LkJ1bGxldFR5cGUudGhlcm1vYmFyaWNfc3BsaXQ7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0RW5lbXkgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgICAgIGUucHJvdG90eXBlLmluaXRCdXR0bGUgPSBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgICAgICB0LnByb3RvdHlwZS5pbml0QnV0dGxlLmNhbGwodGhpcywgZSwgaSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnNraWxsUGFyYW0udGhlcm1vYmFyaWNTcGVlZFskZ2FtZVNraWxsSW5mby5Ta2lsbDRQYXJhbS5GSU5BTF07XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkuc2V0KGUpLm11bHRpcGx5U2NhbGFyKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmF0ayA9IHRoaXMuc2tpbGxQYXJhbS50aGVybW9iYXJpY1NwbGl0QXRrWyRnYW1lU2tpbGxJbmZvLlNraWxsNFBhcmFtLkZJTkFMXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLm9uVHJpZ2dlciA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1VzZSAmJiBlID09ICRvYmplY3QuVHJpZ2dlci5lbnRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy50YXJnZXRFbmVteSkgJiYgdC5vYmplY3QgPT09IHRoaXMudGFyZ2V0RW5lbXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVXNlID0gITA7XHJcbiAgICAgICAgICAgICAgICB0Lm9iamVjdC5zdWZmZXJBdGsoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnNraWxsSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2tpbGxTcGVjaWFsaXR5czogdGhpcy5za2lsbFNwZWNpYWxpdHlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0azogdGhpcy5hdGtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFt1XSwgZSk7XHJcbiAgICB9KSgkYmFzZUJ1bGxldC5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGQ7XHJcbiJdfQ==