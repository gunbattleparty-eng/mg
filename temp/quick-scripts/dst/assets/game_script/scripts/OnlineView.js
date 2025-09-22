
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/OnlineView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3f2dg+wy9L/aQWSc0nGHzR', 'OnlineView');
// game_script/scripts/OnlineView.js

"use strict";

var o;

var $list = require("./List");

var $popupView = require("./PopupView");

var $configContext = require("./ConfigContext");

var $onlineListItem = require("./OnlineListItem");

var u = cc._decorator;
var d = u.ccclass;
var p = u.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.list = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    this.list.numItems = $configContext["default"].instance.onlineConfigs.length;
  };

  e.prototype.renderItem = function (t, e) {
    var i = $configContext["default"].instance.onlineConfigs[e];
    t.getComponent($onlineListItem["default"]).init(i);
  };

  __decorate([p($list["default"])], e.prototype, "list", void 0);

  return __decorate([d], e);
}($popupView.PopupView);

exports["default"] = f;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXE9ubGluZVZpZXcuanMiXSwibmFtZXMiOlsibyIsIiRsaXN0IiwicmVxdWlyZSIsIiRwb3B1cFZpZXciLCIkY29uZmlnQ29udGV4dCIsIiRvbmxpbmVMaXN0SXRlbSIsInUiLCJjYyIsIl9kZWNvcmF0b3IiLCJkIiwiY2NjbGFzcyIsInAiLCJwcm9wZXJ0eSIsImYiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibGlzdCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uUmVzZXRWaWV3IiwibnVtSXRlbXMiLCJpbnN0YW5jZSIsIm9ubGluZUNvbmZpZ3MiLCJsZW5ndGgiLCJyZW5kZXJJdGVtIiwiaSIsImdldENvbXBvbmVudCIsImluaXQiLCJfX2RlY29yYXRlIiwiUG9wdXBWaWV3IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLEtBQUssR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBbkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxjQUFjLEdBQUdGLE9BQU8sQ0FBQyxpQkFBRCxDQUE1Qjs7QUFDQSxJQUFJRyxlQUFlLEdBQUdILE9BQU8sQ0FBQyxrQkFBRCxDQUE3Qjs7QUFDQSxJQUFJSSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLElBQUYsR0FBUyxJQUFUO0lBQ0EsT0FBT0gsQ0FBUDtFQUNIOztFQUNESSxTQUFTLENBQUNKLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNLLFNBQUYsQ0FBWUMsV0FBWixHQUEwQixZQUFZO0lBQ2xDLEtBQUtILElBQUwsQ0FBVUksUUFBVixHQUFxQmxCLGNBQWMsV0FBZCxDQUF1Qm1CLFFBQXZCLENBQWdDQyxhQUFoQyxDQUE4Q0MsTUFBbkU7RUFDSCxDQUZEOztFQUdBVixDQUFDLENBQUNLLFNBQUYsQ0FBWU0sVUFBWixHQUF5QixVQUFVWixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDckMsSUFBSVksQ0FBQyxHQUFHdkIsY0FBYyxXQUFkLENBQXVCbUIsUUFBdkIsQ0FBZ0NDLGFBQWhDLENBQThDVCxDQUE5QyxDQUFSO0lBQ0FELENBQUMsQ0FBQ2MsWUFBRixDQUFldkIsZUFBZSxXQUE5QixFQUF3Q3dCLElBQXhDLENBQTZDRixDQUE3QztFQUNILENBSEQ7O0VBSUFHLFVBQVUsQ0FBQyxDQUFDbkIsQ0FBQyxDQUFDVixLQUFLLFdBQU4sQ0FBRixDQUFELEVBQXFCYyxDQUFDLENBQUNLLFNBQXZCLEVBQWtDLE1BQWxDLEVBQTBDLEtBQUssQ0FBL0MsQ0FBVjs7RUFDQSxPQUFPVSxVQUFVLENBQUMsQ0FBQ3JCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0FoQk8sQ0FnQkxaLFVBQVUsQ0FBQzRCLFNBaEJOLENBQVI7O0FBaUJBQyxPQUFPLFdBQVAsR0FBa0JuQixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkbGlzdCA9IHJlcXVpcmUoXCIuL0xpc3RcIik7XHJcbnZhciAkcG9wdXBWaWV3ID0gcmVxdWlyZShcIi4vUG9wdXBWaWV3XCIpO1xyXG52YXIgJGNvbmZpZ0NvbnRleHQgPSByZXF1aXJlKFwiLi9Db25maWdDb250ZXh0XCIpO1xyXG52YXIgJG9ubGluZUxpc3RJdGVtID0gcmVxdWlyZShcIi4vT25saW5lTGlzdEl0ZW1cIik7XHJcbnZhciB1ID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGQgPSB1LmNjY2xhc3M7XHJcbnZhciBwID0gdS5wcm9wZXJ0eTtcclxudmFyIGYgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgZS5saXN0ID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLm9uUmVzZXRWaWV3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5udW1JdGVtcyA9ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2Uub25saW5lQ29uZmlncy5sZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUucmVuZGVySXRlbSA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgdmFyIGkgPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLm9ubGluZUNvbmZpZ3NbZV07XHJcbiAgICAgICAgdC5nZXRDb21wb25lbnQoJG9ubGluZUxpc3RJdGVtLmRlZmF1bHQpLmluaXQoaSk7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbcCgkbGlzdC5kZWZhdWx0KV0sIGUucHJvdG90eXBlLCBcImxpc3RcIiwgdm9pZCAwKTtcclxuICAgIHJldHVybiBfX2RlY29yYXRlKFtkXSwgZSk7XHJcbn0pKCRwb3B1cFZpZXcuUG9wdXBWaWV3KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gZjtcclxuIl19