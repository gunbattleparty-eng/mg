
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/TTNativeToScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93c75J0t/NDYoc0RLbxyNyR', 'TTNativeToScene');
// game_script/scripts/TTNativeToScene.js

"use strict";

exports.TTNativeToScene = void 0;

var $storageUtil = require("./StorageUtil");

var $util = require("./Util");

var s = window.tt;

var r = function () {
  function t() {
    this.isGain = 0;
    this.refreshCb = null;
    this.isGain = $storageUtil.StorageUtil.getItem("tt_isGains", 0, !1);
  }

  Object.defineProperty(t.prototype, "sidebarCome", {
    get: function get() {
      return window.isSidebarComeIn;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.closeScene = function () {
    this.isGain = $util["default"].startDayTimestamp();
    $storageUtil.StorageUtil.setItem("tt_isGains", this.isGain, !1);
  };

  t.prototype.checkScene = function (t, e) {
    var i = $util["default"].startDayTimestamp();

    if (this.isGain >= i) {
      return e && e();
    }

    s.checkScene({
      scene: "sidebar",
      success: function success(e) {
        console.log("check scene success: ", e);
        console.log("check scene success: ", e.isExist);

        if (t) {
          t(e.isExist);
        }
      },
      fail: function fail(t) {
        console.log("check scene fail:", t);

        if (e) {
          e();
        }
      }
    });
  };

  t.prototype.navigateToScene = function (t, e) {
    s.navigateToScene({
      scene: "sidebar",
      success: function success(e) {
        console.log("navigate to scene success");

        if (t) {
          t(e);
        }
      },
      fail: function fail(t) {
        console.log("navigate to scene fail: ", t);

        if (e) {
          e();
        }
      }
    });
  };

  t.prototype.bindOnShow = function (t, e) {
    this.refreshCb = t;
    this.refreshCb.bind(e);
  };

  return t;
}();

exports.TTNativeToScene = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFRUTmF0aXZlVG9TY2VuZS5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiVFROYXRpdmVUb1NjZW5lIiwiJHN0b3JhZ2VVdGlsIiwicmVxdWlyZSIsIiR1dGlsIiwicyIsIndpbmRvdyIsInR0IiwiciIsInQiLCJpc0dhaW4iLCJyZWZyZXNoQ2IiLCJTdG9yYWdlVXRpbCIsImdldEl0ZW0iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3RvdHlwZSIsImdldCIsImlzU2lkZWJhckNvbWVJbiIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJjbG9zZVNjZW5lIiwic3RhcnREYXlUaW1lc3RhbXAiLCJzZXRJdGVtIiwiY2hlY2tTY2VuZSIsImUiLCJpIiwic2NlbmUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImlzRXhpc3QiLCJmYWlsIiwibmF2aWdhdGVUb1NjZW5lIiwiYmluZE9uU2hvdyIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsZUFBUixHQUEwQixLQUFLLENBQS9COztBQUNBLElBQUlDLFlBQVksR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUMsS0FBSyxHQUFHRCxPQUFPLENBQUMsUUFBRCxDQUFuQjs7QUFDQSxJQUFJRSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsRUFBZjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWE7SUFDVCxLQUFLQyxNQUFMLEdBQWMsQ0FBZDtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsSUFBakI7SUFDQSxLQUFLRCxNQUFMLEdBQWNSLFlBQVksQ0FBQ1UsV0FBYixDQUF5QkMsT0FBekIsQ0FBaUMsWUFBakMsRUFBK0MsQ0FBL0MsRUFBa0QsQ0FBQyxDQUFuRCxDQUFkO0VBQ0g7O0VBQ0RDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQk4sQ0FBQyxDQUFDTyxTQUF4QixFQUFtQyxhQUFuQyxFQUFrRDtJQUM5Q0MsR0FBRyxFQUFFLGVBQVk7TUFDYixPQUFPWCxNQUFNLENBQUNZLGVBQWQ7SUFDSCxDQUg2QztJQUk5Q0MsVUFBVSxFQUFFLENBQUMsQ0FKaUM7SUFLOUNDLFlBQVksRUFBRSxDQUFDO0VBTCtCLENBQWxEOztFQU9BWCxDQUFDLENBQUNPLFNBQUYsQ0FBWUssVUFBWixHQUF5QixZQUFZO0lBQ2pDLEtBQUtYLE1BQUwsR0FBY04sS0FBSyxXQUFMLENBQWNrQixpQkFBZCxFQUFkO0lBQ0FwQixZQUFZLENBQUNVLFdBQWIsQ0FBeUJXLE9BQXpCLENBQWlDLFlBQWpDLEVBQStDLEtBQUtiLE1BQXBELEVBQTRELENBQUMsQ0FBN0Q7RUFDSCxDQUhEOztFQUlBRCxDQUFDLENBQUNPLFNBQUYsQ0FBWVEsVUFBWixHQUF5QixVQUFVZixDQUFWLEVBQWFnQixDQUFiLEVBQWdCO0lBQ3JDLElBQUlDLENBQUMsR0FBR3RCLEtBQUssV0FBTCxDQUFja0IsaUJBQWQsRUFBUjs7SUFDQSxJQUFJLEtBQUtaLE1BQUwsSUFBZWdCLENBQW5CLEVBQXNCO01BQ2xCLE9BQU9ELENBQUMsSUFBSUEsQ0FBQyxFQUFiO0lBQ0g7O0lBQ0RwQixDQUFDLENBQUNtQixVQUFGLENBQWE7TUFDVEcsS0FBSyxFQUFFLFNBREU7TUFFVEMsT0FBTyxFQUFFLGlCQUFVSCxDQUFWLEVBQWE7UUFDbEJJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDTCxDQUFyQztRQUNBSSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ0wsQ0FBQyxDQUFDTSxPQUF2Qzs7UUFDQSxJQUFJdEIsQ0FBSixFQUFPO1VBQ0hBLENBQUMsQ0FBQ2dCLENBQUMsQ0FBQ00sT0FBSCxDQUFEO1FBQ0g7TUFDSixDQVJRO01BU1RDLElBQUksRUFBRSxjQUFVdkIsQ0FBVixFQUFhO1FBQ2ZvQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ3JCLENBQWpDOztRQUNBLElBQUlnQixDQUFKLEVBQU87VUFDSEEsQ0FBQztRQUNKO01BQ0o7SUFkUSxDQUFiO0VBZ0JILENBckJEOztFQXNCQWhCLENBQUMsQ0FBQ08sU0FBRixDQUFZaUIsZUFBWixHQUE4QixVQUFVeEIsQ0FBVixFQUFhZ0IsQ0FBYixFQUFnQjtJQUMxQ3BCLENBQUMsQ0FBQzRCLGVBQUYsQ0FBa0I7TUFDZE4sS0FBSyxFQUFFLFNBRE87TUFFZEMsT0FBTyxFQUFFLGlCQUFVSCxDQUFWLEVBQWE7UUFDbEJJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaOztRQUNBLElBQUlyQixDQUFKLEVBQU87VUFDSEEsQ0FBQyxDQUFDZ0IsQ0FBRCxDQUFEO1FBQ0g7TUFDSixDQVBhO01BUWRPLElBQUksRUFBRSxjQUFVdkIsQ0FBVixFQUFhO1FBQ2ZvQixPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUF3Q3JCLENBQXhDOztRQUNBLElBQUlnQixDQUFKLEVBQU87VUFDSEEsQ0FBQztRQUNKO01BQ0o7SUFiYSxDQUFsQjtFQWVILENBaEJEOztFQWlCQWhCLENBQUMsQ0FBQ08sU0FBRixDQUFZa0IsVUFBWixHQUF5QixVQUFVekIsQ0FBVixFQUFhZ0IsQ0FBYixFQUFnQjtJQUNyQyxLQUFLZCxTQUFMLEdBQWlCRixDQUFqQjtJQUNBLEtBQUtFLFNBQUwsQ0FBZXdCLElBQWYsQ0FBb0JWLENBQXBCO0VBQ0gsQ0FIRDs7RUFJQSxPQUFPaEIsQ0FBUDtBQUNILENBN0RPLEVBQVI7O0FBOERBVCxPQUFPLENBQUNDLGVBQVIsR0FBMEJPLENBQTFCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLlRUTmF0aXZlVG9TY2VuZSA9IHZvaWQgMDtcclxudmFyICRzdG9yYWdlVXRpbCA9IHJlcXVpcmUoXCIuL1N0b3JhZ2VVdGlsXCIpO1xyXG52YXIgJHV0aWwgPSByZXF1aXJlKFwiLi9VdGlsXCIpO1xyXG52YXIgcyA9IHdpbmRvdy50dDtcclxudmFyIHIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdCgpIHtcclxuICAgICAgICB0aGlzLmlzR2FpbiA9IDA7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2IgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNHYWluID0gJHN0b3JhZ2VVdGlsLlN0b3JhZ2VVdGlsLmdldEl0ZW0oXCJ0dF9pc0dhaW5zXCIsIDAsICExKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSwgXCJzaWRlYmFyQ29tZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaXNTaWRlYmFyQ29tZUluO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogITEsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMFxyXG4gICAgfSk7XHJcbiAgICB0LnByb3RvdHlwZS5jbG9zZVNjZW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNHYWluID0gJHV0aWwuZGVmYXVsdC5zdGFydERheVRpbWVzdGFtcCgpO1xyXG4gICAgICAgICRzdG9yYWdlVXRpbC5TdG9yYWdlVXRpbC5zZXRJdGVtKFwidHRfaXNHYWluc1wiLCB0aGlzLmlzR2FpbiwgITEpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmNoZWNrU2NlbmUgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHZhciBpID0gJHV0aWwuZGVmYXVsdC5zdGFydERheVRpbWVzdGFtcCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2FpbiA+PSBpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlICYmIGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcy5jaGVja1NjZW5lKHtcclxuICAgICAgICAgICAgc2NlbmU6IFwic2lkZWJhclwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBzY2VuZSBzdWNjZXNzOiBcIiwgZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIHNjZW5lIHN1Y2Nlc3M6IFwiLCBlLmlzRXhpc3QpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0KGUuaXNFeGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIHNjZW5lIGZhaWw6XCIsIHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5uYXZpZ2F0ZVRvU2NlbmUgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHMubmF2aWdhdGVUb1NjZW5lKHtcclxuICAgICAgICAgICAgc2NlbmU6IFwic2lkZWJhclwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuYXZpZ2F0ZSB0byBzY2VuZSBzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuYXZpZ2F0ZSB0byBzY2VuZSBmYWlsOiBcIiwgdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmJpbmRPblNob3cgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaENiID0gdDtcclxuICAgICAgICB0aGlzLnJlZnJlc2hDYi5iaW5kKGUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0O1xyXG59KSgpO1xyXG5leHBvcnRzLlRUTmF0aXZlVG9TY2VuZSA9IHI7XHJcbiJdfQ==