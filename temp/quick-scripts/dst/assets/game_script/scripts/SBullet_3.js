
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/SBullet_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33d6eNYquFHYqwumgZlybMx', 'SBullet_3');
// game_script/scripts/SBullet_3.js

"use strict";

var o;

var $object = require("./Object");

var $gameContext = require("./GameContext");

var $baseBullet = require("./BaseBullet");

var c = cc._decorator;
var u = c.ccclass;
var d = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.s_bullet_3;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    t.prototype.initButtle.call(this, e, null);
    this.atk = $gameContext["default"].ins.skillInfo.skinAtk;
    this.speed = $gameContext["default"].ins.skillInfo.skinParam[4];

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse) {
      if (e == $object.Trigger.enter) {
        t.object.sufferAtk({
          skillSpecialitys: this.skillSpecialitys,
          atk: this.atk
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNCdWxsZXRfMy5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkZ2FtZUNvbnRleHQiLCIkYmFzZUJ1bGxldCIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJ1IiwiY2NjbGFzcyIsImQiLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJidXR0bGVUeXBlIiwiQnVsbGV0VHlwZSIsInNfYnVsbGV0XzMiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJpbml0QnV0dGxlIiwiY2FsbCIsImF0ayIsImlucyIsInNraWxsSW5mbyIsInNraW5BdGsiLCJzcGVlZCIsInNraW5QYXJhbSIsInZlbG9jaXR5Iiwic2V0IiwibXVsdGlwbHlTY2FsYXIiLCJvblRyaWdnZXIiLCJpc1VzZSIsIlRyaWdnZXIiLCJlbnRlciIsIm9iamVjdCIsInN1ZmZlckF0ayIsInNraWxsU3BlY2lhbGl0eXMiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsWUFBWSxHQUFHRCxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlHLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csVUFBRixHQUFlWixXQUFXLENBQUNhLFVBQVosQ0FBdUJDLFVBQXRDO0lBQ0EsT0FBT0wsQ0FBUDtFQUNIOztFQUNETSxTQUFTLENBQUNOLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNPLFNBQUYsQ0FBWUMsVUFBWixHQUF5QixVQUFVUixDQUFWLEVBQWE7SUFDbENELENBQUMsQ0FBQ1EsU0FBRixDQUFZQyxVQUFaLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixFQUFrQ1QsQ0FBbEMsRUFBcUMsSUFBckM7SUFDQSxLQUFLVSxHQUFMLEdBQVdwQixZQUFZLFdBQVosQ0FBcUJxQixHQUFyQixDQUF5QkMsU0FBekIsQ0FBbUNDLE9BQTlDO0lBQ0EsS0FBS0MsS0FBTCxHQUFheEIsWUFBWSxXQUFaLENBQXFCcUIsR0FBckIsQ0FBeUJDLFNBQXpCLENBQW1DRyxTQUFuQyxDQUE2QyxDQUE3QyxDQUFiOztJQUNBLElBQUlmLENBQUosRUFBTztNQUNILEtBQUtnQixRQUFMLENBQWNDLEdBQWQsQ0FBa0JqQixDQUFsQixFQUFxQmtCLGNBQXJCLENBQW9DLEtBQUtKLEtBQXpDO0lBQ0g7RUFDSixDQVBEOztFQVFBZCxDQUFDLENBQUNPLFNBQUYsQ0FBWVksU0FBWixHQUF3QixVQUFVcEIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQ3BDLElBQUksQ0FBQyxLQUFLb0IsS0FBVixFQUFpQjtNQUNiLElBQUlwQixDQUFDLElBQUlaLE9BQU8sQ0FBQ2lDLE9BQVIsQ0FBZ0JDLEtBQXpCLEVBQWdDO1FBQzVCdkIsQ0FBQyxDQUFDd0IsTUFBRixDQUFTQyxTQUFULENBQW1CO1VBQ2ZDLGdCQUFnQixFQUFFLEtBQUtBLGdCQURSO1VBRWZmLEdBQUcsRUFBRSxLQUFLQTtRQUZLLENBQW5CO01BSUg7SUFDSjtFQUNKLENBVEQ7O0VBVUEsT0FBT2dCLFVBQVUsQ0FBQyxDQUFDL0IsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQTFCRCxDQTBCR1QsV0FBVyxXQTFCZCxDQUZDLENBQUw7QUE2QkFvQyxPQUFPLFdBQVAsR0FBa0I5QixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkb2JqZWN0ID0gcmVxdWlyZShcIi4vT2JqZWN0XCIpO1xyXG52YXIgJGdhbWVDb250ZXh0ID0gcmVxdWlyZShcIi4vR2FtZUNvbnRleHRcIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciBjID0gY2MuX2RlY29yYXRvcjtcclxudmFyIHUgPSBjLmNjY2xhc3M7XHJcbnZhciBkID1cclxuICAgIChjLnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUuYnV0dGxlVHlwZSA9ICRiYXNlQnVsbGV0LkJ1bGxldFR5cGUuc19idWxsZXRfMztcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5pbml0QnV0dGxlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdC5wcm90b3R5cGUuaW5pdEJ1dHRsZS5jYWxsKHRoaXMsIGUsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmF0ayA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8uc2tpbkF0aztcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5za2lsbEluZm8uc2tpblBhcmFtWzRdO1xyXG4gICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5zZXQoZSkubXVsdGlwbHlTY2FsYXIodGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLm9uVHJpZ2dlciA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1VzZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUgPT0gJG9iamVjdC5UcmlnZ2VyLmVudGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5vYmplY3Quc3VmZmVyQXRrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxTcGVjaWFsaXR5czogdGhpcy5za2lsbFNwZWNpYWxpdHlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdGs6IHRoaXMuYXRrXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFt1XSwgZSk7XHJcbiAgICB9KSgkYmFzZUJ1bGxldC5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGQ7XHJcbiJdfQ==