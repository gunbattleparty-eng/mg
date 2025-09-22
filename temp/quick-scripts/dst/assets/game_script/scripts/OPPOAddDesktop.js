
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/OPPOAddDesktop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58430+n8cBM8b4tUUjdXPQY', 'OPPOAddDesktop');
// game_script/scripts/OPPOAddDesktop.js

"use strict";

var o = window.qg;

var n = function () {
  function t() {}

  t.prototype.hasShortcutInstalled = function (t) {
    o.hasShortcutInstalled({
      success: function success(e) {
        if (t.success) {
          t.success(e);
        }
      },
      fail: function fail() {
        if (t.fail) {
          t.fail();
        }
      },
      complete: function complete() {
        if (t.complete) {
          t.complete();
        }
      }
    });
  };

  t.prototype.addDesktop = function (t) {
    o.hasShortcutInstalled({
      success: function success(e) {
        0 == e ? o.installShortcut({
          success: function success() {
            if (t.success) {
              t.success();
            }
          },
          fail: function fail(e) {
            console.log("添加桌面失败", e);

            if (t.fail) {
              t.fail();
            }
          },
          complete: function complete() {
            if (t.complete) {
              t.complete();
            }
          }
        }) : t.success && t.success();
      },
      fail: function fail() {
        if (t.fail) {
          t.fail();
        }
      },
      complete: function complete() {
        if (t.complete) {
          t.complete();
        }
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXE9QUE9BZGREZXNrdG9wLmpzIl0sIm5hbWVzIjpbIm8iLCJ3aW5kb3ciLCJxZyIsIm4iLCJ0IiwicHJvdG90eXBlIiwiaGFzU2hvcnRjdXRJbnN0YWxsZWQiLCJzdWNjZXNzIiwiZSIsImZhaWwiLCJjb21wbGV0ZSIsImFkZERlc2t0b3AiLCJpbnN0YWxsU2hvcnRjdXQiLCJjb25zb2xlIiwibG9nIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsRUFBZjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWEsQ0FBRTs7RUFDZkEsQ0FBQyxDQUFDQyxTQUFGLENBQVlDLG9CQUFaLEdBQW1DLFVBQVVGLENBQVYsRUFBYTtJQUM1Q0osQ0FBQyxDQUFDTSxvQkFBRixDQUF1QjtNQUNuQkMsT0FBTyxFQUFFLGlCQUFVQyxDQUFWLEVBQWE7UUFDbEIsSUFBSUosQ0FBQyxDQUFDRyxPQUFOLEVBQWU7VUFDWEgsQ0FBQyxDQUFDRyxPQUFGLENBQVVDLENBQVY7UUFDSDtNQUNKLENBTGtCO01BTW5CQyxJQUFJLEVBQUUsZ0JBQVk7UUFDZCxJQUFJTCxDQUFDLENBQUNLLElBQU4sRUFBWTtVQUNSTCxDQUFDLENBQUNLLElBQUY7UUFDSDtNQUNKLENBVmtCO01BV25CQyxRQUFRLEVBQUUsb0JBQVk7UUFDbEIsSUFBSU4sQ0FBQyxDQUFDTSxRQUFOLEVBQWdCO1VBQ1pOLENBQUMsQ0FBQ00sUUFBRjtRQUNIO01BQ0o7SUFma0IsQ0FBdkI7RUFpQkgsQ0FsQkQ7O0VBbUJBTixDQUFDLENBQUNDLFNBQUYsQ0FBWU0sVUFBWixHQUF5QixVQUFVUCxDQUFWLEVBQWE7SUFDbENKLENBQUMsQ0FBQ00sb0JBQUYsQ0FBdUI7TUFDbkJDLE9BQU8sRUFBRSxpQkFBVUMsQ0FBVixFQUFhO1FBQ2xCLEtBQUtBLENBQUwsR0FDTVIsQ0FBQyxDQUFDWSxlQUFGLENBQWtCO1VBQ2RMLE9BQU8sRUFBRSxtQkFBWTtZQUNqQixJQUFJSCxDQUFDLENBQUNHLE9BQU4sRUFBZTtjQUNYSCxDQUFDLENBQUNHLE9BQUY7WUFDSDtVQUNKLENBTGE7VUFNZEUsSUFBSSxFQUFFLGNBQVVELENBQVYsRUFBYTtZQUNmSyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCTixDQUF0Qjs7WUFDQSxJQUFJSixDQUFDLENBQUNLLElBQU4sRUFBWTtjQUNSTCxDQUFDLENBQUNLLElBQUY7WUFDSDtVQUNKLENBWGE7VUFZZEMsUUFBUSxFQUFFLG9CQUFZO1lBQ2xCLElBQUlOLENBQUMsQ0FBQ00sUUFBTixFQUFnQjtjQUNaTixDQUFDLENBQUNNLFFBQUY7WUFDSDtVQUNKO1FBaEJhLENBQWxCLENBRE4sR0FtQk1OLENBQUMsQ0FBQ0csT0FBRixJQUFhSCxDQUFDLENBQUNHLE9BQUYsRUFuQm5CO01Bb0JILENBdEJrQjtNQXVCbkJFLElBQUksRUFBRSxnQkFBWTtRQUNkLElBQUlMLENBQUMsQ0FBQ0ssSUFBTixFQUFZO1VBQ1JMLENBQUMsQ0FBQ0ssSUFBRjtRQUNIO01BQ0osQ0EzQmtCO01BNEJuQkMsUUFBUSxFQUFFLG9CQUFZO1FBQ2xCLElBQUlOLENBQUMsQ0FBQ00sUUFBTixFQUFnQjtVQUNaTixDQUFDLENBQUNNLFFBQUY7UUFDSDtNQUNKO0lBaENrQixDQUF2QjtFQWtDSCxDQW5DRDs7RUFvQ0EsT0FBT04sQ0FBUDtBQUNILENBMURPLEVBQVI7O0FBMkRBVyxPQUFPLFdBQVAsR0FBa0JaLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbyA9IHdpbmRvdy5xZztcclxudmFyIG4gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdCgpIHt9XHJcbiAgICB0LnByb3RvdHlwZS5oYXNTaG9ydGN1dEluc3RhbGxlZCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgby5oYXNTaG9ydGN1dEluc3RhbGxlZCh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5zdWNjZXNzKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodC5mYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5mYWlsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodC5jb21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmFkZERlc2t0b3AgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIG8uaGFzU2hvcnRjdXRJbnN0YWxsZWQoe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgMCA9PSBlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBvLmluc3RhbGxTaG9ydGN1dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmt7vliqDmoYzpnaLlpLHotKVcIiwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmZhaWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZmFpbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5jb21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICA6IHQuc3VjY2VzcyAmJiB0LnN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuZmFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuZmFpbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuY29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0LmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gbjtcclxuIl19