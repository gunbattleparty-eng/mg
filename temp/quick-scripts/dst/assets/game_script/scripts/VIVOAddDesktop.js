
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/VIVOAddDesktop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18b38zUMMlBF7180Q9rnB7T', 'VIVOAddDesktop');
// game_script/scripts/VIVOAddDesktop.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFZJVk9BZGREZXNrdG9wLmpzIl0sIm5hbWVzIjpbIm8iLCJ3aW5kb3ciLCJxZyIsIm4iLCJ0IiwicHJvdG90eXBlIiwiaGFzU2hvcnRjdXRJbnN0YWxsZWQiLCJzdWNjZXNzIiwiZSIsImZhaWwiLCJjb21wbGV0ZSIsImFkZERlc2t0b3AiLCJpbnN0YWxsU2hvcnRjdXQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsTUFBTSxDQUFDQyxFQUFmOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLFNBQUYsQ0FBWUMsb0JBQVosR0FBbUMsVUFBVUYsQ0FBVixFQUFhO0lBQzVDSixDQUFDLENBQUNNLG9CQUFGLENBQXVCO01BQ25CQyxPQUFPLEVBQUUsaUJBQVVDLENBQVYsRUFBYTtRQUNsQixJQUFJSixDQUFDLENBQUNHLE9BQU4sRUFBZTtVQUNYSCxDQUFDLENBQUNHLE9BQUYsQ0FBVUMsQ0FBVjtRQUNIO01BQ0osQ0FMa0I7TUFNbkJDLElBQUksRUFBRSxnQkFBWTtRQUNkLElBQUlMLENBQUMsQ0FBQ0ssSUFBTixFQUFZO1VBQ1JMLENBQUMsQ0FBQ0ssSUFBRjtRQUNIO01BQ0osQ0FWa0I7TUFXbkJDLFFBQVEsRUFBRSxvQkFBWTtRQUNsQixJQUFJTixDQUFDLENBQUNNLFFBQU4sRUFBZ0I7VUFDWk4sQ0FBQyxDQUFDTSxRQUFGO1FBQ0g7TUFDSjtJQWZrQixDQUF2QjtFQWlCSCxDQWxCRDs7RUFtQkFOLENBQUMsQ0FBQ0MsU0FBRixDQUFZTSxVQUFaLEdBQXlCLFVBQVVQLENBQVYsRUFBYTtJQUNsQ0osQ0FBQyxDQUFDTSxvQkFBRixDQUF1QjtNQUNuQkMsT0FBTyxFQUFFLGlCQUFVQyxDQUFWLEVBQWE7UUFDbEIsS0FBS0EsQ0FBTCxHQUNNUixDQUFDLENBQUNZLGVBQUYsQ0FBa0I7VUFDZEwsT0FBTyxFQUFFLG1CQUFZO1lBQ2pCLElBQUlILENBQUMsQ0FBQ0csT0FBTixFQUFlO2NBQ1hILENBQUMsQ0FBQ0csT0FBRjtZQUNIO1VBQ0osQ0FMYTtVQU1kRSxJQUFJLEVBQUUsZ0JBQVk7WUFDZCxJQUFJTCxDQUFDLENBQUNLLElBQU4sRUFBWTtjQUNSTCxDQUFDLENBQUNLLElBQUY7WUFDSDtVQUNKLENBVmE7VUFXZEMsUUFBUSxFQUFFLG9CQUFZO1lBQ2xCLElBQUlOLENBQUMsQ0FBQ00sUUFBTixFQUFnQjtjQUNaTixDQUFDLENBQUNNLFFBQUY7WUFDSDtVQUNKO1FBZmEsQ0FBbEIsQ0FETixHQWtCTU4sQ0FBQyxDQUFDRyxPQUFGLElBQWFILENBQUMsQ0FBQ0csT0FBRixFQWxCbkI7TUFtQkgsQ0FyQmtCO01Bc0JuQkUsSUFBSSxFQUFFLGdCQUFZO1FBQ2QsSUFBSUwsQ0FBQyxDQUFDSyxJQUFOLEVBQVk7VUFDUkwsQ0FBQyxDQUFDSyxJQUFGO1FBQ0g7TUFDSixDQTFCa0I7TUEyQm5CQyxRQUFRLEVBQUUsb0JBQVk7UUFDbEIsSUFBSU4sQ0FBQyxDQUFDTSxRQUFOLEVBQWdCO1VBQ1pOLENBQUMsQ0FBQ00sUUFBRjtRQUNIO01BQ0o7SUEvQmtCLENBQXZCO0VBaUNILENBbENEOztFQW1DQSxPQUFPTixDQUFQO0FBQ0gsQ0F6RE8sRUFBUjs7QUEwREFTLE9BQU8sV0FBUCxHQUFrQlYsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvID0gd2luZG93LnFnO1xyXG52YXIgbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KCkge31cclxuICAgIHQucHJvdG90eXBlLmhhc1Nob3J0Y3V0SW5zdGFsbGVkID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBvLmhhc1Nob3J0Y3V0SW5zdGFsbGVkKHtcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0LnN1Y2Nlc3MoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0LmZhaWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0LmZhaWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0LmNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuYWRkRGVza3RvcCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgby5oYXNTaG9ydGN1dEluc3RhbGxlZCh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAwID09IGVcclxuICAgICAgICAgICAgICAgICAgICA/IG8uaW5zdGFsbFNob3J0Y3V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuc3VjY2VzcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmZhaWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZmFpbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5jb21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICA6IHQuc3VjY2VzcyAmJiB0LnN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuZmFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuZmFpbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuY29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0LmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gbjtcclxuIl19