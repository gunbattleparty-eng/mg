
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/GunShopItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a922MickFIp6PXwA464r9F', 'GunShopItem');
// game_script/scripts/GunShopItem.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $listItem = require("./ListItem");

var $roleContext = require("./RoleContext");

var d = cc._decorator;
var p = d.ccclass;
var f = d.property;

var h = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.usedBox = null;
    e.skin = null;
    e.unlockBox = null;
    e.redDot = null;
    e.gunSKinId = -1;
    return e;
  }

  __extends(e, t);

  e.prototype.render = function (t) {
    var e = this;
    this.gunSKinId = t.id;
    var i = $roleContext["default"].ins.currSkinInfo;
    var o = $roleContext["default"].ins.getGunSkinInfo(t.id);
    this.usedBox.active = t.id === i.gun;
    this.unlockBox.active = !o.isHave;
    $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/gun_icon/q" + t.id], cc.SpriteFrame, null, function (t, i) {
      var o = i[0];

      if (o && cc.isValid(e.skin)) {
        e.skin.spriteFrame = $resUtil.ResUtil.assignWith(o, e.node);
      }
    });
    this.redDot.active = !o.isHave && o.shard >= t.shard_num;
  };

  __decorate([f(cc.Node)], e.prototype, "usedBox", void 0);

  __decorate([f(cc.Sprite)], e.prototype, "skin", void 0);

  __decorate([f(cc.Node)], e.prototype, "unlockBox", void 0);

  __decorate([f(cc.Node)], e.prototype, "redDot", void 0);

  return __decorate([p], e);
}($listItem["default"]);

exports["default"] = h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEd1blNob3BJdGVtLmpzIl0sIm5hbWVzIjpbIm8iLCIkYXNzZXRzTG9hZGVyIiwicmVxdWlyZSIsIiRhc3NldHNNYXAiLCIkcmVzVXRpbCIsIiRsaXN0SXRlbSIsIiRyb2xlQ29udGV4dCIsImQiLCJjYyIsIl9kZWNvcmF0b3IiLCJwIiwiY2NjbGFzcyIsImYiLCJwcm9wZXJ0eSIsImgiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwidXNlZEJveCIsInNraW4iLCJ1bmxvY2tCb3giLCJyZWREb3QiLCJndW5TS2luSWQiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJyZW5kZXIiLCJpZCIsImkiLCJpbnMiLCJjdXJyU2tpbkluZm8iLCJnZXRHdW5Ta2luSW5mbyIsImFjdGl2ZSIsImd1biIsImlzSGF2ZSIsImluc3RhbmNlIiwibG9hZFJlcyIsIkJ1bmRsZU5hbWVzIiwiUHVibGljX1JlcyIsIlNwcml0ZUZyYW1lIiwiaXNWYWxpZCIsInNwcml0ZUZyYW1lIiwiUmVzVXRpbCIsImFzc2lnbldpdGgiLCJub2RlIiwic2hhcmQiLCJzaGFyZF9udW0iLCJfX2RlY29yYXRlIiwiTm9kZSIsIlNwcml0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlFLFFBQVEsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdEI7O0FBQ0EsSUFBSUcsU0FBUyxHQUFHSCxPQUFPLENBQUMsWUFBRCxDQUF2Qjs7QUFDQSxJQUFJSSxZQUFZLEdBQUdKLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlLLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFH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QUFFLENBQUN3QyxJQUFKLENBQUYsQ0FBRCxFQUFlaEMsQ0FBQyxDQUFDUyxTQUFqQixFQUE0QixRQUE1QixFQUFzQyxLQUFLLENBQTNDLENBQVY7O0VBQ0EsT0FBT3NCLFVBQVUsQ0FBQyxDQUFDckMsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQXJDTyxDQXFDTFgsU0FBUyxXQXJDSixDQUFSOztBQXNDQTZDLE9BQU8sV0FBUCxHQUFrQnBDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRhc3NldHNMb2FkZXIgPSByZXF1aXJlKFwiLi9Bc3NldHNMb2FkZXJcIik7XHJcbnZhciAkYXNzZXRzTWFwID0gcmVxdWlyZShcIi4vQXNzZXRzTWFwXCIpO1xyXG52YXIgJHJlc1V0aWwgPSByZXF1aXJlKFwiLi9SZXNVdGlsXCIpO1xyXG52YXIgJGxpc3RJdGVtID0gcmVxdWlyZShcIi4vTGlzdEl0ZW1cIik7XHJcbnZhciAkcm9sZUNvbnRleHQgPSByZXF1aXJlKFwiLi9Sb2xlQ29udGV4dFwiKTtcclxudmFyIGQgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgcCA9IGQuY2NjbGFzcztcclxudmFyIGYgPSBkLnByb3BlcnR5O1xyXG52YXIgaCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLnVzZWRCb3ggPSBudWxsO1xyXG4gICAgICAgIGUuc2tpbiA9IG51bGw7XHJcbiAgICAgICAgZS51bmxvY2tCb3ggPSBudWxsO1xyXG4gICAgICAgIGUucmVkRG90ID0gbnVsbDtcclxuICAgICAgICBlLmd1blNLaW5JZCA9IC0xO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ndW5TS2luSWQgPSB0LmlkO1xyXG4gICAgICAgIHZhciBpID0gJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLmN1cnJTa2luSW5mbztcclxuICAgICAgICB2YXIgbyA9ICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRHdW5Ta2luSW5mbyh0LmlkKTtcclxuICAgICAgICB0aGlzLnVzZWRCb3guYWN0aXZlID0gdC5pZCA9PT0gaS5ndW47XHJcbiAgICAgICAgdGhpcy51bmxvY2tCb3guYWN0aXZlID0gIW8uaXNIYXZlO1xyXG4gICAgICAgICRhc3NldHNMb2FkZXIuZGVmYXVsdC5pbnN0YW5jZS5sb2FkUmVzKFxyXG4gICAgICAgICAgICAkYXNzZXRzTWFwLkJ1bmRsZU5hbWVzLlB1YmxpY19SZXMsXHJcbiAgICAgICAgICAgIFtcIi9ndW5faWNvbi9xXCIgKyB0LmlkXSxcclxuICAgICAgICAgICAgY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICh0LCBpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbyA9IGlbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAobyAmJiBjYy5pc1ZhbGlkKGUuc2tpbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNraW4uc3ByaXRlRnJhbWUgPSAkcmVzVXRpbC5SZXNVdGlsLmFzc2lnbldpdGgobywgZS5ub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yZWREb3QuYWN0aXZlID0gIW8uaXNIYXZlICYmIG8uc2hhcmQgPj0gdC5zaGFyZF9udW07XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbZihjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcInVzZWRCb3hcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW2YoY2MuU3ByaXRlKV0sIGUucHJvdG90eXBlLCBcInNraW5cIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW2YoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJ1bmxvY2tCb3hcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW2YoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJyZWREb3RcIiwgdm9pZCAwKTtcclxuICAgIHJldHVybiBfX2RlY29yYXRlKFtwXSwgZSk7XHJcbn0pKCRsaXN0SXRlbS5kZWZhdWx0KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gaDtcclxuIl19