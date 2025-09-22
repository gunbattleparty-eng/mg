
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/TTReport.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77e82R8nvxGGoNx8W4sbXVN', 'TTReport');
// game_script/scripts/TTReport.js

"use strict";

var o = window.tt;

var n = function () {
  function t() {}

  t.prototype.report = function (t, e) {
    e ? o.reportAnalytics(t, e) : o.reportAnalytics(t, {});
  };

  return t;
}();

exports["default"] = n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFRUUmVwb3J0LmpzIl0sIm5hbWVzIjpbIm8iLCJ3aW5kb3ciLCJ0dCIsIm4iLCJ0IiwicHJvdG90eXBlIiwicmVwb3J0IiwiZSIsInJlcG9ydEFuYWx5dGljcyIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLEVBQWY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhLENBQUU7O0VBQ2ZBLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxNQUFaLEdBQXFCLFVBQVVGLENBQVYsRUFBYUcsQ0FBYixFQUFnQjtJQUNqQ0EsQ0FBQyxHQUFHUCxDQUFDLENBQUNRLGVBQUYsQ0FBa0JKLENBQWxCLEVBQXFCRyxDQUFyQixDQUFILEdBQTZCUCxDQUFDLENBQUNRLGVBQUYsQ0FBa0JKLENBQWxCLEVBQXFCLEVBQXJCLENBQTlCO0VBQ0gsQ0FGRDs7RUFHQSxPQUFPQSxDQUFQO0FBQ0gsQ0FOTyxFQUFSOztBQU9BSyxPQUFPLFdBQVAsR0FBa0JOLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbyA9IHdpbmRvdy50dDtcclxudmFyIG4gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdCgpIHt9XHJcbiAgICB0LnByb3RvdHlwZS5yZXBvcnQgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIGUgPyBvLnJlcG9ydEFuYWx5dGljcyh0LCBlKSA6IG8ucmVwb3J0QW5hbHl0aWNzKHQsIHt9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gbjtcclxuIl19