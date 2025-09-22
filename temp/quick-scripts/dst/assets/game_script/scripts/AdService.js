
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/AdService.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b3e6n0+alPyrZVFsZxRXo2', 'AdService');
// game_script/scripts/AdService.js

"use strict";

var $aD = require("./AD");

var $taskContext = require("./TaskContext");

var s = function () {
  function t() {}

  Object.defineProperty(t, "Ins", {
    get: function get() {
      if (!t.instance) {
        t.instance = new t();
      }

      return t.instance;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.showRewardedVideo = function (t) {
    $aD["default"].auto.showRewardedVideo(null, null, function () {
      $taskContext["default"].Ins.setTaskRecord(7);

      if (t) {
        t();
      }
    });
  };

  return t;
}();

exports["default"] = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEFkU2VydmljZS5qcyJdLCJuYW1lcyI6WyIkYUQiLCJyZXF1aXJlIiwiJHRhc2tDb250ZXh0IiwicyIsInQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImluc3RhbmNlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInByb3RvdHlwZSIsInNob3dSZXdhcmRlZFZpZGVvIiwiYXV0byIsIklucyIsInNldFRhc2tSZWNvcmQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEdBQUcsR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBakI7O0FBQ0EsSUFBSUMsWUFBWSxHQUFHRCxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJRSxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWEsQ0FBRTs7RUFDZkMsTUFBTSxDQUFDQyxjQUFQLENBQXNCRixDQUF0QixFQUF5QixLQUF6QixFQUFnQztJQUM1QkcsR0FBRyxFQUFFLGVBQVk7TUFDYixJQUFJLENBQUNILENBQUMsQ0FBQ0ksUUFBUCxFQUFpQjtRQUNiSixDQUFDLENBQUNJLFFBQUYsR0FBYSxJQUFJSixDQUFKLEVBQWI7TUFDSDs7TUFDRCxPQUFPQSxDQUFDLENBQUNJLFFBQVQ7SUFDSCxDQU4yQjtJQU81QkMsVUFBVSxFQUFFLENBQUMsQ0FQZTtJQVE1QkMsWUFBWSxFQUFFLENBQUM7RUFSYSxDQUFoQzs7RUFVQU4sQ0FBQyxDQUFDTyxTQUFGLENBQVlDLGlCQUFaLEdBQWdDLFVBQVVSLENBQVYsRUFBYTtJQUN6Q0osR0FBRyxXQUFILENBQVlhLElBQVosQ0FBaUJELGlCQUFqQixDQUFtQyxJQUFuQyxFQUF5QyxJQUF6QyxFQUErQyxZQUFZO01BQ3ZEVixZQUFZLFdBQVosQ0FBcUJZLEdBQXJCLENBQXlCQyxhQUF6QixDQUF1QyxDQUF2Qzs7TUFDQSxJQUFJWCxDQUFKLEVBQU87UUFDSEEsQ0FBQztNQUNKO0lBQ0osQ0FMRDtFQU1ILENBUEQ7O0VBUUEsT0FBT0EsQ0FBUDtBQUNILENBckJPLEVBQVI7O0FBc0JBWSxPQUFPLFdBQVAsR0FBa0JiLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJGFEID0gcmVxdWlyZShcIi4vQURcIik7XHJcbnZhciAkdGFza0NvbnRleHQgPSByZXF1aXJlKFwiLi9UYXNrQ29udGV4dFwiKTtcclxudmFyIHMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdCgpIHt9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJJbnNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXQuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHQuaW5zdGFuY2UgPSBuZXcgdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0Lmluc3RhbmNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogITEsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMFxyXG4gICAgfSk7XHJcbiAgICB0LnByb3RvdHlwZS5zaG93UmV3YXJkZWRWaWRlbyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgJGFELmRlZmF1bHQuYXV0by5zaG93UmV3YXJkZWRWaWRlbyhudWxsLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICR0YXNrQ29udGV4dC5kZWZhdWx0Lklucy5zZXRUYXNrUmVjb3JkKDcpO1xyXG4gICAgICAgICAgICBpZiAodCkge1xyXG4gICAgICAgICAgICAgICAgdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHQ7XHJcbn0pKCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHM7XHJcbiJdfQ==