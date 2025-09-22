
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/RoleShopItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '511f9UUQ+tDPJVr/kKvVrGF', 'RoleShopItem');
// game_script/scripts/RoleShopItem.js

"use strict";

var o;

var $listItem = require("./ListItem");

var $roleContext = require("./RoleContext");

var l = cc._decorator;
var c = l.ccclass;
var u = l.property;

var d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.usedBox = null;
    e.skin = null;
    e.unlockBox = null;
    e.redDot = null;
    e.playerSKinId = -1;
    return e;
  }

  __extends(e, t);

  e.prototype.render = function (t) {
    this.playerSKinId = t.id;
    var e = $roleContext["default"].ins.currSkinInfo;
    var i = $roleContext["default"].ins.getPlayerSkinInfo(t.id);
    this.usedBox.active = t.id === e.skin;
    this.unlockBox.active = !i.isHave;
    this.skin.armatureName = "pf" + t.id;
    this.redDot.active = !i.isHave && i.shard >= t.shard_num;
  };

  __decorate([u(cc.Node)], e.prototype, "usedBox", void 0);

  __decorate([u(dragonBones.ArmatureDisplay)], e.prototype, "skin", void 0);

  __decorate([u(cc.Node)], e.prototype, "unlockBox", void 0);

  __decorate([u(cc.Node)], e.prototype, "redDot", void 0);

  return __decorate([c], e);
}($listItem["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJvbGVTaG9wSXRlbS5qcyJdLCJuYW1lcyI6WyJvIiwiJGxpc3RJdGVtIiwicmVxdWlyZSIsIiRyb2xlQ29udGV4dCIsImwiLCJjYyIsIl9kZWNvcmF0b3IiLCJjIiwiY2NjbGFzcyIsInUiLCJwcm9wZXJ0eSIsImQiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwidXNlZEJveCIsInNraW4iLCJ1bmxvY2tCb3giLCJyZWREb3QiLCJwbGF5ZXJTS2luSWQiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJyZW5kZXIiLCJpZCIsImlucyIsImN1cnJTa2luSW5mbyIsImkiLCJnZXRQbGF5ZXJTa2luSW5mbyIsImFjdGl2ZSIsImlzSGF2ZSIsImFybWF0dXJlTmFtZSIsInNoYXJkIiwic2hhcmRfbnVtIiwiX19kZWNvcmF0ZSIsIk5vZGUiLCJkcmFnb25Cb25lcyIsIkFybWF0dXJlRGlzcGxheSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXZCOztBQUNBLElBQUlDLFlBQVksR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUUsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxPQUFGLEdBQVksSUFBWjtJQUNBSCxDQUFDLENBQUNJLElBQUYsR0FBUyxJQUFUO0lBQ0FKLENBQUMsQ0FBQ0ssU0FBRixHQUFjLElBQWQ7SUFDQUwsQ0FBQyxDQUFDTSxNQUFGLEdBQVcsSUFBWDtJQUNBTixDQUFDLENBQUNPLFlBQUYsR0FBaUIsQ0FBQyxDQUFsQjtJQUNBLE9BQU9QLENBQVA7RUFDSDs7RUFDRFEsU0FBUyxDQUFDUixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDUyxTQUFGLENBQVlDLE1BQVosR0FBcUIsVUFBVVgsQ0FBVixFQUFhO0lBQzlCLEtBQUtRLFlBQUwsR0FBb0JSLENBQUMsQ0FBQ1ksRUFBdEI7SUFDQSxJQUFJWCxDQUFDLEdBQUdWLFlBQVksV0FBWixDQUFxQnNCLEdBQXJCLENBQXlCQyxZQUFqQztJQUNBLElBQUlDLENBQUMsR0FBR3hCLFlBQVksV0FBWixDQUFxQnNCLEdBQXJCLENBQXlCRyxpQkFBekIsQ0FBMkNoQixDQUFDLENBQUNZLEVBQTdDLENBQVI7SUFDQSxLQUFLUixPQUFMLENBQWFhLE1BQWIsR0FBc0JqQixDQUFDLENBQUNZLEVBQUYsS0FBU1gsQ0FBQyxDQUFDSSxJQUFqQztJQUNBLEtBQUtDLFNBQUwsQ0FBZVcsTUFBZixHQUF3QixDQUFDRixDQUFDLENBQUNHLE1BQTNCO0lBQ0EsS0FBS2IsSUFBTCxDQUFVYyxZQUFWLEdBQXlCLE9BQU9uQixDQUFDLENBQUNZLEVBQWxDO0lBQ0EsS0FBS0wsTUFBTCxDQUFZVSxNQUFaLEdBQXFCLENBQUNGLENBQUMsQ0FBQ0csTUFBSCxJQUFhSCxDQUFDLENBQUNLLEtBQUYsSUFBV3BCLENBQUMsQ0FBQ3FCLFNBQS9DO0VBQ0gsQ0FSRDs7RUFTQUMsVUFBVSxDQUFDLENBQUN6QixDQUFDLENBQUNKLEVBQUUsQ0FBQzhCLElBQUosQ0FBRixDQUFELEVBQWV0QixDQUFDLENBQUNTLFNBQWpCLEVBQTRCLFNBQTVCLEVBQXVDLEtBQUssQ0FBNUMsQ0FBVjs7RUFDQVksVUFBVSxDQUFDLENBQUN6QixDQUFDLENBQUMyQixXQUFXLENBQUNDLGVBQWIsQ0FBRixDQUFELEVBQW1DeEIsQ0FBQyxDQUFDUyxTQUFyQyxFQUFnRCxNQUFoRCxFQUF3RCxLQUFLLENBQTdELENBQVY7O0VBQ0FZLFVBQVUsQ0FBQyxDQUFDekIsQ0FBQyxDQUFDSixFQUFFLENBQUM4QixJQUFKLENBQUYsQ0FBRCxFQUFldEIsQ0FBQyxDQUFDUyxTQUFqQixFQUE0QixXQUE1QixFQUF5QyxLQUFLLENBQTlDLENBQVY7O0VBQ0FZLFVBQVUsQ0FBQyxDQUFDekIsQ0FBQyxDQUFDSixFQUFFLENBQUM4QixJQUFKLENBQUYsQ0FBRCxFQUFldEIsQ0FBQyxDQUFDUyxTQUFqQixFQUE0QixRQUE1QixFQUFzQyxLQUFLLENBQTNDLENBQVY7O0VBQ0EsT0FBT1ksVUFBVSxDQUFDLENBQUMzQixDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBekJPLENBeUJMWixTQUFTLFdBekJKLENBQVI7O0FBMEJBcUMsT0FBTyxXQUFQLEdBQWtCM0IsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJGxpc3RJdGVtID0gcmVxdWlyZShcIi4vTGlzdEl0ZW1cIik7XHJcbnZhciAkcm9sZUNvbnRleHQgPSByZXF1aXJlKFwiLi9Sb2xlQ29udGV4dFwiKTtcclxudmFyIGwgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgYyA9IGwuY2NjbGFzcztcclxudmFyIHUgPSBsLnByb3BlcnR5O1xyXG52YXIgZCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLnVzZWRCb3ggPSBudWxsO1xyXG4gICAgICAgIGUuc2tpbiA9IG51bGw7XHJcbiAgICAgICAgZS51bmxvY2tCb3ggPSBudWxsO1xyXG4gICAgICAgIGUucmVkRG90ID0gbnVsbDtcclxuICAgICAgICBlLnBsYXllclNLaW5JZCA9IC0xO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLnBsYXllclNLaW5JZCA9IHQuaWQ7XHJcbiAgICAgICAgdmFyIGUgPSAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuY3VyclNraW5JbmZvO1xyXG4gICAgICAgIHZhciBpID0gJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLmdldFBsYXllclNraW5JbmZvKHQuaWQpO1xyXG4gICAgICAgIHRoaXMudXNlZEJveC5hY3RpdmUgPSB0LmlkID09PSBlLnNraW47XHJcbiAgICAgICAgdGhpcy51bmxvY2tCb3guYWN0aXZlID0gIWkuaXNIYXZlO1xyXG4gICAgICAgIHRoaXMuc2tpbi5hcm1hdHVyZU5hbWUgPSBcInBmXCIgKyB0LmlkO1xyXG4gICAgICAgIHRoaXMucmVkRG90LmFjdGl2ZSA9ICFpLmlzSGF2ZSAmJiBpLnNoYXJkID49IHQuc2hhcmRfbnVtO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW3UoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJ1c2VkQm94XCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFt1KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSldLCBlLnByb3RvdHlwZSwgXCJza2luXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFt1KGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwidW5sb2NrQm94XCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFt1KGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwicmVkRG90XCIsIHZvaWQgMCk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbY10sIGUpO1xyXG59KSgkbGlzdEl0ZW0uZGVmYXVsdCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGQ7XHJcbiJdfQ==