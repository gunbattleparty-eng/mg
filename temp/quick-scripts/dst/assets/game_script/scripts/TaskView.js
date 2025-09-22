
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/TaskView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0117MJDi9HYqvtTtD2AQ+P', 'TaskView');
// game_script/scripts/TaskView.js

"use strict";

var o;

var $list = require("./List");

var $popupView = require("./PopupView");

var $configContext = require("./ConfigContext");

var $taskListItem = require("./TaskListItem");

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
    this.list.numItems = $configContext["default"].instance.taskConfigs.length;
  };

  e.prototype.renderItem = function (t, e) {
    var i = $configContext["default"].instance.taskConfigs[e];
    t.getComponent($taskListItem["default"]).init(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFRhc2tWaWV3LmpzIl0sIm5hbWVzIjpbIm8iLCIkbGlzdCIsInJlcXVpcmUiLCIkcG9wdXBWaWV3IiwiJGNvbmZpZ0NvbnRleHQiLCIkdGFza0xpc3RJdGVtIiwidSIsImNjIiwiX2RlY29yYXRvciIsImQiLCJjY2NsYXNzIiwicCIsInByb3BlcnR5IiwiZiIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJsaXN0IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25SZXNldFZpZXciLCJudW1JdGVtcyIsImluc3RhbmNlIiwidGFza0NvbmZpZ3MiLCJsZW5ndGgiLCJyZW5kZXJJdGVtIiwiaSIsImdldENvbXBvbmVudCIsImluaXQiLCJfX2RlY29yYXRlIiwiUG9wdXBWaWV3IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLEtBQUssR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBbkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxjQUFjLEdBQUdGLE9BQU8sQ0FBQyxpQkFBRCxDQUE1Qjs7QUFDQSxJQUFJRyxhQUFhLEdBQUdILE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJSSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLElBQUYsR0FBUyxJQUFUO0lBQ0EsT0FBT0gsQ0FBUDtFQUNIOztFQUNESSxTQUFTLENBQUNKLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNLLFNBQUYsQ0FBWUMsV0FBWixHQUEwQixZQUFZO0lBQ2xDLEtBQUtILElBQUwsQ0FBVUksUUFBVixHQUFxQmxCLGNBQWMsV0FBZCxDQUF1Qm1CLFFBQXZCLENBQWdDQyxXQUFoQyxDQUE0Q0MsTUFBakU7RUFDSCxDQUZEOztFQUdBVixDQUFDLENBQUNLLFNBQUYsQ0FBWU0sVUFBWixHQUF5QixVQUFVWixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDckMsSUFBSVksQ0FBQyxHQUFHdkIsY0FBYyxXQUFkLENBQXVCbUIsUUFBdkIsQ0FBZ0NDLFdBQWhDLENBQTRDVCxDQUE1QyxDQUFSO0lBQ0FELENBQUMsQ0FBQ2MsWUFBRixDQUFldkIsYUFBYSxXQUE1QixFQUFzQ3dCLElBQXRDLENBQTJDRixDQUEzQztFQUNILENBSEQ7O0VBSUFHLFVBQVUsQ0FBQyxDQUFDbkIsQ0FBQyxDQUFDVixLQUFLLFdBQU4sQ0FBRixDQUFELEVBQXFCYyxDQUFDLENBQUNLLFNBQXZCLEVBQWtDLE1BQWxDLEVBQTBDLEtBQUssQ0FBL0MsQ0FBVjs7RUFDQSxPQUFPVSxVQUFVLENBQUMsQ0FBQ3JCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0FoQk8sQ0FnQkxaLFVBQVUsQ0FBQzRCLFNBaEJOLENBQVI7O0FBaUJBQyxPQUFPLFdBQVAsR0FBa0JuQixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkbGlzdCA9IHJlcXVpcmUoXCIuL0xpc3RcIik7XHJcbnZhciAkcG9wdXBWaWV3ID0gcmVxdWlyZShcIi4vUG9wdXBWaWV3XCIpO1xyXG52YXIgJGNvbmZpZ0NvbnRleHQgPSByZXF1aXJlKFwiLi9Db25maWdDb250ZXh0XCIpO1xyXG52YXIgJHRhc2tMaXN0SXRlbSA9IHJlcXVpcmUoXCIuL1Rhc2tMaXN0SXRlbVwiKTtcclxudmFyIHUgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgZCA9IHUuY2NjbGFzcztcclxudmFyIHAgPSB1LnByb3BlcnR5O1xyXG52YXIgZiA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLmxpc3QgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUub25SZXNldFZpZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lm51bUl0ZW1zID0gJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS50YXNrQ29uZmlncy5sZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUucmVuZGVySXRlbSA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgdmFyIGkgPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLnRhc2tDb25maWdzW2VdO1xyXG4gICAgICAgIHQuZ2V0Q29tcG9uZW50KCR0YXNrTGlzdEl0ZW0uZGVmYXVsdCkuaW5pdChpKTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtwKCRsaXN0LmRlZmF1bHQpXSwgZS5wcm90b3R5cGUsIFwibGlzdFwiLCB2b2lkIDApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2RdLCBlKTtcclxufSkoJHBvcHVwVmlldy5Qb3B1cFZpZXcpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBmO1xyXG4iXX0=