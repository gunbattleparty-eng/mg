
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/BlockCipherModeAlgorithm.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec599axLwNLRaxOVL6cMbMZ', 'BlockCipherModeAlgorithm');
// game_script/scripts/BlockCipherModeAlgorithm.js

"use strict";

exports.BlockCipherModeAlgorithm = void 0;

var o = function () {
  function t(t, e) {
    this.init(t, e);
  }

  t.prototype.init = function (t, e) {
    this._cipher = t;
    this._iv = e;
  };

  return t;
}();

exports.BlockCipherModeAlgorithm = o;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJsb2NrQ2lwaGVyTW9kZUFsZ29yaXRobS5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiQmxvY2tDaXBoZXJNb2RlQWxnb3JpdGhtIiwibyIsInQiLCJlIiwiaW5pdCIsInByb3RvdHlwZSIsIl9jaXBoZXIiLCJfaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0Msd0JBQVIsR0FBbUMsS0FBSyxDQUF4Qzs7QUFDQSxJQUFJQyxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULENBQVdBLENBQVgsRUFBY0MsQ0FBZCxFQUFpQjtJQUNiLEtBQUtDLElBQUwsQ0FBVUYsQ0FBVixFQUFhQyxDQUFiO0VBQ0g7O0VBQ0RELENBQUMsQ0FBQ0csU0FBRixDQUFZRCxJQUFaLEdBQW1CLFVBQVVGLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtJQUMvQixLQUFLRyxPQUFMLEdBQWVKLENBQWY7SUFDQSxLQUFLSyxHQUFMLEdBQVdKLENBQVg7RUFDSCxDQUhEOztFQUlBLE9BQU9ELENBQVA7QUFDSCxDQVRPLEVBQVI7O0FBVUFILE9BQU8sQ0FBQ0Msd0JBQVIsR0FBbUNDLENBQW5DIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLkJsb2NrQ2lwaGVyTW9kZUFsZ29yaXRobSA9IHZvaWQgMDtcclxudmFyIG8gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdCh0LCBlKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KHQsIGUpO1xyXG4gICAgfVxyXG4gICAgdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgdGhpcy5fY2lwaGVyID0gdDtcclxuICAgICAgICB0aGlzLl9pdiA9IGU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHQ7XHJcbn0pKCk7XHJcbmV4cG9ydHMuQmxvY2tDaXBoZXJNb2RlQWxnb3JpdGhtID0gbztcclxuIl19