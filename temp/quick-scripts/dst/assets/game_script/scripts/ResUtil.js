
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ResUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e75bbHDKtDRq+NMeAWmkES', 'ResUtil');
// game_script/scripts/ResUtil.js

"use strict";

exports.ResUtil = void 0;

var $resKeeper = require("./ResKeeper");

var n = function () {
  function t() {}

  t.getResKeeper = function (e, i) {
    return e ? e.getComponent($resKeeper.ResKeeper) || (i ? e.addComponent($resKeeper.ResKeeper) : t.getResKeeper(e.parent, i)) : null;
  };

  t.assignWith = function (e, i, o) {
    var n = t.getResKeeper(i, o);
    return n && e instanceof cc.Asset ? (n.cacheAsset(e), e) : (console.error("assignWith " + e.name + " to " + i + " faile"), null);
  };

  t.instantiate = function (e, i) {
    var o = cc.instantiate(e);

    if (i) {
      var n = t.getResKeeper(i);

      if (n) {
        n.cacheAsset(e);
      }

      return o;
    }

    var s = t.getResKeeper(o, !0);

    if (s) {
      s.cacheAsset(e);
    }

    return o;
  };

  return t;
}();

exports.ResUtil = n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJlc1V0aWwuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIlJlc1V0aWwiLCIkcmVzS2VlcGVyIiwicmVxdWlyZSIsIm4iLCJ0IiwiZ2V0UmVzS2VlcGVyIiwiZSIsImkiLCJnZXRDb21wb25lbnQiLCJSZXNLZWVwZXIiLCJhZGRDb21wb25lbnQiLCJwYXJlbnQiLCJhc3NpZ25XaXRoIiwibyIsImNjIiwiQXNzZXQiLCJjYWNoZUFzc2V0IiwiY29uc29sZSIsImVycm9yIiwibmFtZSIsImluc3RhbnRpYXRlIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxPQUFSLEdBQWtCLEtBQUssQ0FBdkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWEsQ0FBRTs7RUFDZkEsQ0FBQyxDQUFDQyxZQUFGLEdBQWlCLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtJQUM3QixPQUFPRCxDQUFDLEdBQ0ZBLENBQUMsQ0FBQ0UsWUFBRixDQUFlUCxVQUFVLENBQUNRLFNBQTFCLE1BQ0tGLENBQUMsR0FBR0QsQ0FBQyxDQUFDSSxZQUFGLENBQWVULFVBQVUsQ0FBQ1EsU0FBMUIsQ0FBSCxHQUEwQ0wsQ0FBQyxDQUFDQyxZQUFGLENBQWVDLENBQUMsQ0FBQ0ssTUFBakIsRUFBeUJKLENBQXpCLENBRGhELENBREUsR0FHRixJQUhOO0VBSUgsQ0FMRDs7RUFNQUgsQ0FBQyxDQUFDUSxVQUFGLEdBQWUsVUFBVU4sQ0FBVixFQUFhQyxDQUFiLEVBQWdCTSxDQUFoQixFQUFtQjtJQUM5QixJQUFJVixDQUFDLEdBQUdDLENBQUMsQ0FBQ0MsWUFBRixDQUFlRSxDQUFmLEVBQWtCTSxDQUFsQixDQUFSO0lBQ0EsT0FBT1YsQ0FBQyxJQUFJRyxDQUFDLFlBQVlRLEVBQUUsQ0FBQ0MsS0FBckIsSUFDQVosQ0FBQyxDQUFDYSxVQUFGLENBQWFWLENBQWIsR0FBaUJBLENBRGpCLEtBRUFXLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLGdCQUFnQlosQ0FBQyxDQUFDYSxJQUFsQixHQUF5QixNQUF6QixHQUFrQ1osQ0FBbEMsR0FBc0MsUUFBcEQsR0FBK0QsSUFGL0QsQ0FBUDtFQUdILENBTEQ7O0VBTUFILENBQUMsQ0FBQ2dCLFdBQUYsR0FBZ0IsVUFBVWQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQzVCLElBQUlNLENBQUMsR0FBR0MsRUFBRSxDQUFDTSxXQUFILENBQWVkLENBQWYsQ0FBUjs7SUFDQSxJQUFJQyxDQUFKLEVBQU87TUFDSCxJQUFJSixDQUFDLEdBQUdDLENBQUMsQ0FBQ0MsWUFBRixDQUFlRSxDQUFmLENBQVI7O01BQ0EsSUFBSUosQ0FBSixFQUFPO1FBQ0hBLENBQUMsQ0FBQ2EsVUFBRixDQUFhVixDQUFiO01BQ0g7O01BQ0QsT0FBT08sQ0FBUDtJQUNIOztJQUNELElBQUlRLENBQUMsR0FBR2pCLENBQUMsQ0FBQ0MsWUFBRixDQUFlUSxDQUFmLEVBQWtCLENBQUMsQ0FBbkIsQ0FBUjs7SUFDQSxJQUFJUSxDQUFKLEVBQU87TUFDSEEsQ0FBQyxDQUFDTCxVQUFGLENBQWFWLENBQWI7SUFDSDs7SUFDRCxPQUFPTyxDQUFQO0VBQ0gsQ0FkRDs7RUFlQSxPQUFPVCxDQUFQO0FBQ0gsQ0E5Qk8sRUFBUjs7QUErQkFMLE9BQU8sQ0FBQ0MsT0FBUixHQUFrQkcsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuUmVzVXRpbCA9IHZvaWQgMDtcclxudmFyICRyZXNLZWVwZXIgPSByZXF1aXJlKFwiLi9SZXNLZWVwZXJcIik7XHJcbnZhciBuID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7fVxyXG4gICAgdC5nZXRSZXNLZWVwZXIgPSBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgIHJldHVybiBlXHJcbiAgICAgICAgICAgID8gZS5nZXRDb21wb25lbnQoJHJlc0tlZXBlci5SZXNLZWVwZXIpIHx8XHJcbiAgICAgICAgICAgICAgICAgIChpID8gZS5hZGRDb21wb25lbnQoJHJlc0tlZXBlci5SZXNLZWVwZXIpIDogdC5nZXRSZXNLZWVwZXIoZS5wYXJlbnQsIGkpKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9O1xyXG4gICAgdC5hc3NpZ25XaXRoID0gZnVuY3Rpb24gKGUsIGksIG8pIHtcclxuICAgICAgICB2YXIgbiA9IHQuZ2V0UmVzS2VlcGVyKGksIG8pO1xyXG4gICAgICAgIHJldHVybiBuICYmIGUgaW5zdGFuY2VvZiBjYy5Bc3NldFxyXG4gICAgICAgICAgICA/IChuLmNhY2hlQXNzZXQoZSksIGUpXHJcbiAgICAgICAgICAgIDogKGNvbnNvbGUuZXJyb3IoXCJhc3NpZ25XaXRoIFwiICsgZS5uYW1lICsgXCIgdG8gXCIgKyBpICsgXCIgZmFpbGVcIiksIG51bGwpO1xyXG4gICAgfTtcclxuICAgIHQuaW5zdGFudGlhdGUgPSBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgIHZhciBvID0gY2MuaW5zdGFudGlhdGUoZSk7XHJcbiAgICAgICAgaWYgKGkpIHtcclxuICAgICAgICAgICAgdmFyIG4gPSB0LmdldFJlc0tlZXBlcihpKTtcclxuICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgIG4uY2FjaGVBc3NldChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHMgPSB0LmdldFJlc0tlZXBlcihvLCAhMCk7XHJcbiAgICAgICAgaWYgKHMpIHtcclxuICAgICAgICAgICAgcy5jYWNoZUFzc2V0KGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5SZXNVdGlsID0gbjtcclxuIl19