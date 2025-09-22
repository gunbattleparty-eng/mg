
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ComponentProxy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88f76EYOWVIM7J6tOSRhcva', 'ComponentProxy');
// game_script/scripts/ComponentProxy.js

"use strict";

var o = function () {
  function t() {
    this.objList = [];
  }

  t.prototype.pushObj = function (t) {
    this.objList.push(t);
  };

  t.prototype.removeObj = function (t) {
    var e = this.objList.indexOf(t);

    if (-1 !== e) {
      this.objList.splice(e, 1);
    }
  };

  t.prototype.clear = function () {
    this.objList.length = 0;
  };

  t.prototype.gameLoop = function (t) {
    for (var e = 0; e < this.objList.length; e++) {
      this.objList[e].updateFrame(t);
    }
  };

  t.Ins = new t();
  return t;
}();

exports["default"] = o;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXENvbXBvbmVudFByb3h5LmpzIl0sIm5hbWVzIjpbIm8iLCJ0Iiwib2JqTGlzdCIsInByb3RvdHlwZSIsInB1c2hPYmoiLCJwdXNoIiwicmVtb3ZlT2JqIiwiZSIsImluZGV4T2YiLCJzcGxpY2UiLCJjbGVhciIsImxlbmd0aCIsImdhbWVMb29wIiwidXBkYXRlRnJhbWUiLCJJbnMiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYTtJQUNULEtBQUtDLE9BQUwsR0FBZSxFQUFmO0VBQ0g7O0VBQ0RELENBQUMsQ0FBQ0UsU0FBRixDQUFZQyxPQUFaLEdBQXNCLFVBQVVILENBQVYsRUFBYTtJQUMvQixLQUFLQyxPQUFMLENBQWFHLElBQWIsQ0FBa0JKLENBQWxCO0VBQ0gsQ0FGRDs7RUFHQUEsQ0FBQyxDQUFDRSxTQUFGLENBQVlHLFNBQVosR0FBd0IsVUFBVUwsQ0FBVixFQUFhO0lBQ2pDLElBQUlNLENBQUMsR0FBRyxLQUFLTCxPQUFMLENBQWFNLE9BQWIsQ0FBcUJQLENBQXJCLENBQVI7O0lBQ0EsSUFBSSxDQUFDLENBQUQsS0FBT00sQ0FBWCxFQUFjO01BQ1YsS0FBS0wsT0FBTCxDQUFhTyxNQUFiLENBQW9CRixDQUFwQixFQUF1QixDQUF2QjtJQUNIO0VBQ0osQ0FMRDs7RUFNQU4sQ0FBQyxDQUFDRSxTQUFGLENBQVlPLEtBQVosR0FBb0IsWUFBWTtJQUM1QixLQUFLUixPQUFMLENBQWFTLE1BQWIsR0FBc0IsQ0FBdEI7RUFDSCxDQUZEOztFQUdBVixDQUFDLENBQUNFLFNBQUYsQ0FBWVMsUUFBWixHQUF1QixVQUFVWCxDQUFWLEVBQWE7SUFDaEMsS0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtMLE9BQUwsQ0FBYVMsTUFBakMsRUFBeUNKLENBQUMsRUFBMUMsRUFBOEM7TUFDMUMsS0FBS0wsT0FBTCxDQUFhSyxDQUFiLEVBQWdCTSxXQUFoQixDQUE0QlosQ0FBNUI7SUFDSDtFQUNKLENBSkQ7O0VBS0FBLENBQUMsQ0FBQ2EsR0FBRixHQUFRLElBQUliLENBQUosRUFBUjtFQUNBLE9BQU9BLENBQVA7QUFDSCxDQXZCTyxFQUFSOztBQXdCQWMsT0FBTyxXQUFQLEdBQWtCZixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG8gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdCgpIHtcclxuICAgICAgICB0aGlzLm9iakxpc3QgPSBbXTtcclxuICAgIH1cclxuICAgIHQucHJvdG90eXBlLnB1c2hPYmogPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMub2JqTGlzdC5wdXNoKHQpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLnJlbW92ZU9iaiA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLm9iakxpc3QuaW5kZXhPZih0KTtcclxuICAgICAgICBpZiAoLTEgIT09IGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmpMaXN0LnNwbGljZShlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5vYmpMaXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuZ2FtZUxvb3AgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5vYmpMaXN0Lmxlbmd0aDsgZSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqTGlzdFtlXS51cGRhdGVGcmFtZSh0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdC5JbnMgPSBuZXcgdCgpO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn0pKCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IG87XHJcbiJdfQ==