
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ShopDiamondItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04b072GEzlKdZzpk6+DRIph', 'ShopDiamondItem');
// game_script/scripts/ShopDiamondItem.js

"use strict";

var o;

var $list = require("./List");

var $configContext = require("./ConfigContext");

var $shopDiamondListItem = require("./ShopDiamondListItem");

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
    this.scheduleOnce(function () {
      t.list.numItems = $configContext["default"].instance.shopDiamondConfigs.length;
    });
  };

  e.prototype.renderItem = function (t, e) {
    t.getComponent($shopDiamondListItem["default"]).init($configContext["default"].instance.shopDiamondConfigs[e]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNob3BEaWFtb25kSXRlbS5qcyJdLCJuYW1lcyI6WyJvIiwiJGxpc3QiLCJyZXF1aXJlIiwiJGNvbmZpZ0NvbnRleHQiLCIkc2hvcERpYW1vbmRMaXN0SXRlbSIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJ1IiwiY2NjbGFzcyIsImQiLCJwcm9wZXJ0eSIsInAiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibGlzdCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsInN0YXJ0Iiwic2NoZWR1bGVPbmNlIiwibnVtSXRlbXMiLCJpbnN0YW5jZSIsInNob3BEaWFtb25kQ29uZmlncyIsImxlbmd0aCIsInJlbmRlckl0ZW0iLCJnZXRDb21wb25lbnQiLCJpbml0IiwiX19kZWNvcmF0ZSIsIkNvbXBvbmVudCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQW5COztBQUNBLElBQUlDLGNBQWMsR0FBR0QsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlFLG9CQUFvQixHQUFHRixPQUFPLENBQUMsdUJBQUQsQ0FBbEM7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxJQUFGLEdBQVMsSUFBVDtJQUNBLE9BQU9ILENBQVA7RUFDSDs7RUFDREksU0FBUyxDQUFDSixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSyxTQUFGLENBQVlDLEtBQVosR0FBb0IsWUFBWTtJQUM1QixJQUFJUCxDQUFDLEdBQUcsSUFBUjtJQUNBLEtBQUtRLFlBQUwsQ0FBa0IsWUFBWTtNQUMxQlIsQ0FBQyxDQUFDSSxJQUFGLENBQU9LLFFBQVAsR0FBa0JuQixjQUFjLFdBQWQsQ0FBdUJvQixRQUF2QixDQUFnQ0Msa0JBQWhDLENBQW1EQyxNQUFyRTtJQUNILENBRkQ7RUFHSCxDQUxEOztFQU1BWCxDQUFDLENBQUNLLFNBQUYsQ0FBWU8sVUFBWixHQUF5QixVQUFVYixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDckNELENBQUMsQ0FBQ2MsWUFBRixDQUFldkIsb0JBQW9CLFdBQW5DLEVBQTZDd0IsSUFBN0MsQ0FBa0R6QixjQUFjLFdBQWQsQ0FBdUJvQixRQUF2QixDQUFnQ0Msa0JBQWhDLENBQW1EVixDQUFuRCxDQUFsRDtFQUNILENBRkQ7O0VBR0FlLFVBQVUsQ0FBQyxDQUFDbkIsQ0FBQyxDQUFDVCxLQUFLLFdBQU4sQ0FBRixDQUFELEVBQXFCYSxDQUFDLENBQUNLLFNBQXZCLEVBQWtDLE1BQWxDLEVBQTBDLEtBQUssQ0FBL0MsQ0FBVjs7RUFDQSxPQUFPVSxVQUFVLENBQUMsQ0FBQ3JCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0FsQk8sQ0FrQkxSLEVBQUUsQ0FBQ3dCLFNBbEJFLENBQVI7O0FBbUJBQyxPQUFPLFdBQVAsR0FBa0JuQixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkbGlzdCA9IHJlcXVpcmUoXCIuL0xpc3RcIik7XHJcbnZhciAkY29uZmlnQ29udGV4dCA9IHJlcXVpcmUoXCIuL0NvbmZpZ0NvbnRleHRcIik7XHJcbnZhciAkc2hvcERpYW1vbmRMaXN0SXRlbSA9IHJlcXVpcmUoXCIuL1Nob3BEaWFtb25kTGlzdEl0ZW1cIik7XHJcbnZhciBjID0gY2MuX2RlY29yYXRvcjtcclxudmFyIHUgPSBjLmNjY2xhc3M7XHJcbnZhciBkID0gYy5wcm9wZXJ0eTtcclxudmFyIHAgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgZS5saXN0ID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHQubGlzdC5udW1JdGVtcyA9ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2Uuc2hvcERpYW1vbmRDb25maWdzLmxlbmd0aDtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5yZW5kZXJJdGVtID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB0LmdldENvbXBvbmVudCgkc2hvcERpYW1vbmRMaXN0SXRlbS5kZWZhdWx0KS5pbml0KCRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2Uuc2hvcERpYW1vbmRDb25maWdzW2VdKTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtkKCRsaXN0LmRlZmF1bHQpXSwgZS5wcm90b3R5cGUsIFwibGlzdFwiLCB2b2lkIDApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3VdLCBlKTtcclxufSkoY2MuQ29tcG9uZW50KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcDtcclxuIl19