
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ShopResItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '644b3T4osdPSoxOlW+yOxSi', 'ShopResItem');
// game_script/scripts/ShopResItem.js

"use strict";

var o;

var $list = require("./List");

var $configContext = require("./ConfigContext");

var $shopResLIstItem = require("./ShopResLIstItem");

var c = cc._decorator;
var u = c.ccclass;
var d = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.list = null;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    var t = this;
    var e = $configContext["default"].instance.shopResConfigs.length;

    if (!$configContext["default"].instance.getAdSwitch2("open_shop_diamond")) {
      e -= 2;
    }

    this.scheduleOnce(function () {
      t.list.numItems = e;
    });
  };

  e.prototype.renderItem = function (t, e) {
    t.getComponent($shopResLIstItem["default"]).init($configContext["default"].instance.shopResConfigs[e]);
  };

  __decorate([d($list["default"])], e.prototype, "list", void 0);

  return __decorate([u], e);
}(cc.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNob3BSZXNJdGVtLmpzIl0sIm5hbWVzIjpbIm8iLCIkbGlzdCIsInJlcXVpcmUiLCIkY29uZmlnQ29udGV4dCIsIiRzaG9wUmVzTElzdEl0ZW0iLCJjIiwiY2MiLCJfZGVjb3JhdG9yIiwidSIsImNjY2xhc3MiLCJkIiwicHJvcGVydHkiLCJwIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImxpc3QiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJzdGFydCIsImluc3RhbmNlIiwic2hvcFJlc0NvbmZpZ3MiLCJsZW5ndGgiLCJnZXRBZFN3aXRjaDIiLCJzY2hlZHVsZU9uY2UiLCJudW1JdGVtcyIsInJlbmRlckl0ZW0iLCJnZXRDb21wb25lbnQiLCJpbml0IiwiX19kZWNvcmF0ZSIsIkNvbXBvbmVudCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQW5COztBQUNBLElBQUlDLGNBQWMsR0FBR0QsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlFLGdCQUFnQixHQUFHRixPQUFPLENBQUMsbUJBQUQsQ0FBOUI7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxJQUFGLEdBQVMsSUFBVDtJQUNBLE9BQU9ILENBQVA7RUFDSDs7RUFDREksU0FBUyxDQUFDSixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSyxTQUFGLENBQVlDLEtBQVosR0FBb0IsWUFBWTtJQUM1QixJQUFJUCxDQUFDLEdBQUcsSUFBUjtJQUNBLElBQUlDLENBQUMsR0FBR1gsY0FBYyxXQUFkLENBQXVCa0IsUUFBdkIsQ0FBZ0NDLGNBQWhDLENBQStDQyxNQUF2RDs7SUFDQSxJQUFJLENBQUNwQixjQUFjLFdBQWQsQ0FBdUJrQixRQUF2QixDQUFnQ0csWUFBaEMsQ0FBNkMsbUJBQTdDLENBQUwsRUFBd0U7TUFDcEVWLENBQUMsSUFBSSxDQUFMO0lBQ0g7O0lBQ0QsS0FBS1csWUFBTCxDQUFrQixZQUFZO01BQzFCWixDQUFDLENBQUNJLElBQUYsQ0FBT1MsUUFBUCxHQUFrQlosQ0FBbEI7SUFDSCxDQUZEO0VBR0gsQ0FURDs7RUFVQUEsQ0FBQyxDQUFDSyxTQUFGLENBQVlRLFVBQVosR0FBeUIsVUFBVWQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQ3JDRCxDQUFDLENBQUNlLFlBQUYsQ0FBZXhCLGdCQUFnQixXQUEvQixFQUF5Q3lCLElBQXpDLENBQThDMUIsY0FBYyxXQUFkLENBQXVCa0IsUUFBdkIsQ0FBZ0NDLGNBQWhDLENBQStDUixDQUEvQyxDQUE5QztFQUNILENBRkQ7O0VBR0FnQixVQUFVLENBQUMsQ0FBQ3BCLENBQUMsQ0FBQ1QsS0FBSyxXQUFOLENBQUYsQ0FBRCxFQUFxQmEsQ0FBQyxDQUFDSyxTQUF2QixFQUFrQyxNQUFsQyxFQUEwQyxLQUFLLENBQS9DLENBQVY7O0VBQ0EsT0FBT1csVUFBVSxDQUFDLENBQUN0QixDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBdEJPLENBc0JMUixFQUFFLENBQUN5QixTQXRCRSxDQUFSOztBQXVCQUMsT0FBTyxXQUFQLEdBQWtCcEIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJGxpc3QgPSByZXF1aXJlKFwiLi9MaXN0XCIpO1xyXG52YXIgJGNvbmZpZ0NvbnRleHQgPSByZXF1aXJlKFwiLi9Db25maWdDb250ZXh0XCIpO1xyXG52YXIgJHNob3BSZXNMSXN0SXRlbSA9IHJlcXVpcmUoXCIuL1Nob3BSZXNMSXN0SXRlbVwiKTtcclxudmFyIGMgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgdSA9IGMuY2NjbGFzcztcclxudmFyIGQgPSBjLnByb3BlcnR5O1xyXG52YXIgcCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLmxpc3QgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBlID0gJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5zaG9wUmVzQ29uZmlncy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKCEkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdldEFkU3dpdGNoMihcIm9wZW5fc2hvcF9kaWFtb25kXCIpKSB7XHJcbiAgICAgICAgICAgIGUgLT0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0Lmxpc3QubnVtSXRlbXMgPSBlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnJlbmRlckl0ZW0gPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHQuZ2V0Q29tcG9uZW50KCRzaG9wUmVzTElzdEl0ZW0uZGVmYXVsdCkuaW5pdCgkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLnNob3BSZXNDb25maWdzW2VdKTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtkKCRsaXN0LmRlZmF1bHQpXSwgZS5wcm90b3R5cGUsIFwibGlzdFwiLCB2b2lkIDApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3VdLCBlKTtcclxufSkoY2MuQ29tcG9uZW50KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcDtcclxuIl19