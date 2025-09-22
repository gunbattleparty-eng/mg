
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/RobotShopItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'abe18X938FMYauWJs5QRXh6', 'RobotShopItem');
// game_script/scripts/RobotShopItem.js

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
    e.skinId = -1;
    return e;
  }

  __extends(e, t);

  e.prototype.render = function (t) {
    this.skinId = t.id;
    var e = $roleContext["default"].ins.currSkinInfo;
    var i = $roleContext["default"].ins.getRobotSkinInfo(t.id);
    this.usedBox.active = t.id === e.robot;
    this.unlockBox.active = !i.isHave;
    this.skin.armatureName = "hl" + t.id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJvYm90U2hvcEl0ZW0uanMiXSwibmFtZXMiOlsibyIsIiRsaXN0SXRlbSIsInJlcXVpcmUiLCIkcm9sZUNvbnRleHQiLCJsIiwiY2MiLCJfZGVjb3JhdG9yIiwiYyIsImNjY2xhc3MiLCJ1IiwicHJvcGVydHkiLCJkIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInVzZWRCb3giLCJza2luIiwidW5sb2NrQm94IiwicmVkRG90Iiwic2tpbklkIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwicmVuZGVyIiwiaWQiLCJpbnMiLCJjdXJyU2tpbkluZm8iLCJpIiwiZ2V0Um9ib3RTa2luSW5mbyIsImFjdGl2ZSIsInJvYm90IiwiaXNIYXZlIiwiYXJtYXR1cmVOYW1lIiwic2hhcmQiLCJzaGFyZF9udW0iLCJfX2RlY29yYXRlIiwiTm9kZSIsImRyYWdvbkJvbmVzIiwiQXJtYXR1cmVEaXNwbGF5IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsWUFBWSxHQUFHRCxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJRSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLE9BQUYsR0FBWSxJQUFaO0lBQ0FILENBQUMsQ0FBQ0ksSUFBRixHQUFTLElBQVQ7SUFDQUosQ0FBQyxDQUFDSyxTQUFGLEdBQWMsSUFBZDtJQUNBTCxDQUFDLENBQUNNLE1BQUYsR0FBVyxJQUFYO0lBQ0FOLENBQUMsQ0FBQ08sTUFBRixHQUFXLENBQUMsQ0FBWjtJQUNBLE9BQU9QLENBQVA7RUFDSDs7RUFDRFEsU0FBUyxDQUFDUixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDUyxTQUFGLENBQVlDLE1BQVosR0FBcUIsVUFBVVgsQ0FBVixFQUFhO0lBQzlCLEtBQUtRLE1BQUwsR0FBY1IsQ0FBQyxDQUFDWSxFQUFoQjtJQUNBLElBQUlYLENBQUMsR0FBR1YsWUFBWSxXQUFaLENBQXFCc0IsR0FBckIsQ0FBeUJDLFlBQWpDO0lBQ0EsSUFBSUMsQ0FBQyxHQUFHeEIsWUFBWSxXQUFaLENBQXFCc0IsR0FBckIsQ0FBeUJHLGdCQUF6QixDQUEwQ2hCLENBQUMsQ0FBQ1ksRUFBNUMsQ0FBUjtJQUNBLEtBQUtSLE9BQUwsQ0FBYWEsTUFBYixHQUFzQmpCLENBQUMsQ0FBQ1ksRUFBRixLQUFTWCxDQUFDLENBQUNpQixLQUFqQztJQUNBLEtBQUtaLFNBQUwsQ0FBZVcsTUFBZixHQUF3QixDQUFDRixDQUFDLENBQUNJLE1BQTNCO0lBQ0EsS0FBS2QsSUFBTCxDQUFVZSxZQUFWLEdBQXlCLE9BQU9wQixDQUFDLENBQUNZLEVBQWxDO0lBQ0EsS0FBS0wsTUFBTCxDQUFZVSxNQUFaLEdBQXFCLENBQUNGLENBQUMsQ0FBQ0ksTUFBSCxJQUFhSixDQUFDLENBQUNNLEtBQUYsSUFBV3JCLENBQUMsQ0FBQ3NCLFNBQS9DO0VBQ0gsQ0FSRDs7RUFTQUMsVUFBVSxDQUFDLENBQUMxQixDQUFDLENBQUNKLEVBQUUsQ0FBQytCLElBQUosQ0FBRixDQUFELEVBQWV2QixDQUFDLENBQUNTLFNBQWpCLEVBQTRCLFNBQTVCLEVBQXVDLEtBQUssQ0FBNUMsQ0FBVjs7RUFDQWEsVUFBVSxDQUFDLENBQUMxQixDQUFDLENBQUM0QixXQUFXLENBQUNDLGVBQWIsQ0FBRixDQUFELEVBQW1DekIsQ0FBQyxDQUFDUyxTQUFyQyxFQUFnRCxNQUFoRCxFQUF3RCxLQUFLLENBQTdELENBQVY7O0VBQ0FhLFVBQVUsQ0FBQyxDQUFDMUIsQ0FBQyxDQUFDSixFQUFFLENBQUMrQixJQUFKLENBQUYsQ0FBRCxFQUFldkIsQ0FBQyxDQUFDUyxTQUFqQixFQUE0QixXQUE1QixFQUF5QyxLQUFLLENBQTlDLENBQVY7O0VBQ0FhLFVBQVUsQ0FBQyxDQUFDMUIsQ0FBQyxDQUFDSixFQUFFLENBQUMrQixJQUFKLENBQUYsQ0FBRCxFQUFldkIsQ0FBQyxDQUFDUyxTQUFqQixFQUE0QixRQUE1QixFQUFzQyxLQUFLLENBQTNDLENBQVY7O0VBQ0EsT0FBT2EsVUFBVSxDQUFDLENBQUM1QixDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBekJPLENBeUJMWixTQUFTLFdBekJKLENBQVI7O0FBMEJBc0MsT0FBTyxXQUFQLEdBQWtCNUIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJGxpc3RJdGVtID0gcmVxdWlyZShcIi4vTGlzdEl0ZW1cIik7XHJcbnZhciAkcm9sZUNvbnRleHQgPSByZXF1aXJlKFwiLi9Sb2xlQ29udGV4dFwiKTtcclxudmFyIGwgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgYyA9IGwuY2NjbGFzcztcclxudmFyIHUgPSBsLnByb3BlcnR5O1xyXG52YXIgZCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLnVzZWRCb3ggPSBudWxsO1xyXG4gICAgICAgIGUuc2tpbiA9IG51bGw7XHJcbiAgICAgICAgZS51bmxvY2tCb3ggPSBudWxsO1xyXG4gICAgICAgIGUucmVkRG90ID0gbnVsbDtcclxuICAgICAgICBlLnNraW5JZCA9IC0xO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLnNraW5JZCA9IHQuaWQ7XHJcbiAgICAgICAgdmFyIGUgPSAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuY3VyclNraW5JbmZvO1xyXG4gICAgICAgIHZhciBpID0gJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLmdldFJvYm90U2tpbkluZm8odC5pZCk7XHJcbiAgICAgICAgdGhpcy51c2VkQm94LmFjdGl2ZSA9IHQuaWQgPT09IGUucm9ib3Q7XHJcbiAgICAgICAgdGhpcy51bmxvY2tCb3guYWN0aXZlID0gIWkuaXNIYXZlO1xyXG4gICAgICAgIHRoaXMuc2tpbi5hcm1hdHVyZU5hbWUgPSBcImhsXCIgKyB0LmlkO1xyXG4gICAgICAgIHRoaXMucmVkRG90LmFjdGl2ZSA9ICFpLmlzSGF2ZSAmJiBpLnNoYXJkID49IHQuc2hhcmRfbnVtO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW3UoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJ1c2VkQm94XCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFt1KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSldLCBlLnByb3RvdHlwZSwgXCJza2luXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFt1KGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwidW5sb2NrQm94XCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFt1KGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwicmVkRG90XCIsIHZvaWQgMCk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbY10sIGUpO1xyXG59KSgkbGlzdEl0ZW0uZGVmYXVsdCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGQ7XHJcbiJdfQ==