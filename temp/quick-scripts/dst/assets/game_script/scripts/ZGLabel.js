
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ZGLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbb76raJ4JO2rlALSxeVVvW', 'ZGLabel');
// game_script/scripts/ZGLabel.js

"use strict";

var o;

var $switchContext = require("./SwitchContext");

var a = cc._decorator;
var l = a.ccclass;
var c = (a.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.getComponent(cc.Label).string = $switchContext.SwitchContext.zgStr;
  };

  return __decorate([l], e);
}(cc.Component));
exports["default"] = c;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFpHTGFiZWwuanMiXSwibmFtZXMiOlsibyIsIiRzd2l0Y2hDb250ZXh0IiwicmVxdWlyZSIsImEiLCJjYyIsIl9kZWNvcmF0b3IiLCJsIiwiY2NjbGFzcyIsImMiLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsIlN3aXRjaENvbnRleHQiLCJ6Z1N0ciIsIl9fZGVjb3JhdGUiLCJDb21wb25lbnQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsY0FBYyxHQUFHQyxPQUFPLENBQUMsaUJBQUQsQ0FBNUI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsT0FBUSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQW5EO0VBQ0g7O0VBQ0RDLFNBQVMsQ0FBQ0gsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ksU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVk7SUFDN0IsS0FBS0MsWUFBTCxDQUFrQmIsRUFBRSxDQUFDYyxLQUFyQixFQUE0QkMsTUFBNUIsR0FBcUNsQixjQUFjLENBQUNtQixhQUFmLENBQTZCQyxLQUFsRTtFQUNILENBRkQ7O0VBR0EsT0FBT0MsVUFBVSxDQUFDLENBQUNoQixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBVEQsQ0FTR1AsRUFBRSxDQUFDbUIsU0FUTixDQUZDLENBQUw7QUFZQUMsT0FBTyxXQUFQLEdBQWtCaEIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJHN3aXRjaENvbnRleHQgPSByZXF1aXJlKFwiLi9Td2l0Y2hDb250ZXh0XCIpO1xyXG52YXIgYSA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBsID0gYS5jY2NsYXNzO1xyXG52YXIgYyA9XHJcbiAgICAoYS5wcm9wZXJ0eSxcclxuICAgIChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAkc3dpdGNoQ29udGV4dC5Td2l0Y2hDb250ZXh0LnpnU3RyO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2xdLCBlKTtcclxuICAgIH0pKGNjLkNvbXBvbmVudCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBjO1xyXG4iXX0=