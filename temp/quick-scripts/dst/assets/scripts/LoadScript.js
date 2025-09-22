
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LoadScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c178dg+letAA7Vdgv0k/N0A', 'LoadScript');
// scripts/LoadScript.js

"use strict";

var o;
var i = cc._decorator;
var u = i.ccclass;
var f = (i.property, function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this;
    t.isLoaded = !1;
    return t;
  }

  __extends(t, e);

  t.prototype.onLoad = function () {
    var e = this;
    setTimeout(function () {
      e.isLoaded ? cc.director.loadScene("Main") : e.isLoaded = !0;
    }, 1e3);
    cc.assetManager.loadBundle("game_script", function () {
      console.log("脚本加载完成");
      e.isLoaded ? cc.director.loadScene("Main") : e.isLoaded = !0;
    });
  };

  return __decorate([u], t);
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTG9hZFNjcmlwdC5qcyJdLCJuYW1lcyI6WyJvIiwiaSIsImNjIiwiX2RlY29yYXRvciIsInUiLCJjY2NsYXNzIiwiZiIsInByb3BlcnR5IiwiZSIsInQiLCJhcHBseSIsImFyZ3VtZW50cyIsImlzTG9hZGVkIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwic2V0VGltZW91dCIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiYXNzZXRNYW5hZ2VyIiwibG9hZEJ1bmRsZSIsImNvbnNvbGUiLCJsb2ciLCJfX2RlY29yYXRlIiwiQ29tcG9uZW50IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxRQUFGLEdBQWEsQ0FBQyxDQUFkO0lBQ0EsT0FBT0gsQ0FBUDtFQUNIOztFQUNESSxTQUFTLENBQUNKLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNLLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCLElBQUlQLENBQUMsR0FBRyxJQUFSO0lBQ0FRLFVBQVUsQ0FBQyxZQUFZO01BQ25CUixDQUFDLENBQUNJLFFBQUYsR0FBYVYsRUFBRSxDQUFDZSxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEIsQ0FBYixHQUE4Q1YsQ0FBQyxDQUFDSSxRQUFGLEdBQWEsQ0FBQyxDQUE1RDtJQUNILENBRlMsRUFFUCxHQUZPLENBQVY7SUFHQVYsRUFBRSxDQUFDaUIsWUFBSCxDQUFnQkMsVUFBaEIsQ0FBMkIsYUFBM0IsRUFBMEMsWUFBWTtNQUNsREMsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtNQUNBZCxDQUFDLENBQUNJLFFBQUYsR0FBYVYsRUFBRSxDQUFDZSxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEIsQ0FBYixHQUE4Q1YsQ0FBQyxDQUFDSSxRQUFGLEdBQWEsQ0FBQyxDQUE1RDtJQUNILENBSEQ7RUFJSCxDQVREOztFQVVBLE9BQU9XLFVBQVUsQ0FBQyxDQUFDbkIsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQWxCRCxDQWtCR1AsRUFBRSxDQUFDc0IsU0FsQk4sQ0FGQyxDQUFMO0FBcUJBQyxPQUFPLFdBQVAsR0FBa0JuQixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciBpID0gY2MuX2RlY29yYXRvcjtcclxudmFyIHUgPSBpLmNjY2xhc3M7XHJcbnZhciBmID1cclxuICAgIChpLnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdCgpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSAobnVsbCAhPT0gZSAmJiBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIHQuaXNMb2FkZWQgPSAhMTtcclxuICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyh0LCBlKTtcclxuICAgICAgICB0LnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gdGhpcztcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBlLmlzTG9hZGVkID8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblwiKSA6IChlLmlzTG9hZGVkID0gITApO1xyXG4gICAgICAgICAgICB9LCAxZTMpO1xyXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShcImdhbWVfc2NyaXB0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ISa5pys5Yqg6L295a6M5oiQXCIpO1xyXG4gICAgICAgICAgICAgICAgZS5pc0xvYWRlZCA/IGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5cIikgOiAoZS5pc0xvYWRlZCA9ICEwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbdV0sIHQpO1xyXG4gICAgfSkoY2MuQ29tcG9uZW50KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGY7XHJcbiJdfQ==