
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/BlockCipherMode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd97bf0uVZMiKmpBg71N94t', 'BlockCipherMode');
// game_script/scripts/BlockCipherMode.js

"use strict";

exports.BlockCipherMode = void 0;

var $blockCipherModeAlgorithm = require("./BlockCipherModeAlgorithm");

var n = function () {
  function t() {}

  t.createEncryptor = function (t, e) {
    return new (0, this.Encryptor)(t, e);
  };

  t.createDecryptor = function (t, e) {
    return new (0, this.Decryptor)(t, e);
  };

  t.Encryptor = $blockCipherModeAlgorithm.BlockCipherModeAlgorithm;
  t.Decryptor = $blockCipherModeAlgorithm.BlockCipherModeAlgorithm;
  return t;
}();

exports.BlockCipherMode = n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJsb2NrQ2lwaGVyTW9kZS5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiQmxvY2tDaXBoZXJNb2RlIiwiJGJsb2NrQ2lwaGVyTW9kZUFsZ29yaXRobSIsInJlcXVpcmUiLCJuIiwidCIsImNyZWF0ZUVuY3J5cHRvciIsImUiLCJFbmNyeXB0b3IiLCJjcmVhdGVEZWNyeXB0b3IiLCJEZWNyeXB0b3IiLCJCbG9ja0NpcGhlck1vZGVBbGdvcml0aG0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsZUFBUixHQUEwQixLQUFLLENBQS9COztBQUNBLElBQUlDLHlCQUF5QixHQUFHQyxPQUFPLENBQUMsNEJBQUQsQ0FBdkM7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhLENBQUU7O0VBQ2ZBLENBQUMsQ0FBQ0MsZUFBRixHQUFvQixVQUFVRCxDQUFWLEVBQWFFLENBQWIsRUFBZ0I7SUFDaEMsT0FBTyxLQUFLLEdBQUcsS0FBS0MsU0FBYixFQUF3QkgsQ0FBeEIsRUFBMkJFLENBQTNCLENBQVA7RUFDSCxDQUZEOztFQUdBRixDQUFDLENBQUNJLGVBQUYsR0FBb0IsVUFBVUosQ0FBVixFQUFhRSxDQUFiLEVBQWdCO0lBQ2hDLE9BQU8sS0FBSyxHQUFHLEtBQUtHLFNBQWIsRUFBd0JMLENBQXhCLEVBQTJCRSxDQUEzQixDQUFQO0VBQ0gsQ0FGRDs7RUFHQUYsQ0FBQyxDQUFDRyxTQUFGLEdBQWNOLHlCQUF5QixDQUFDUyx3QkFBeEM7RUFDQU4sQ0FBQyxDQUFDSyxTQUFGLEdBQWNSLHlCQUF5QixDQUFDUyx3QkFBeEM7RUFDQSxPQUFPTixDQUFQO0FBQ0gsQ0FYTyxFQUFSOztBQVlBTCxPQUFPLENBQUNDLGVBQVIsR0FBMEJHLENBQTFCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLkJsb2NrQ2lwaGVyTW9kZSA9IHZvaWQgMDtcclxudmFyICRibG9ja0NpcGhlck1vZGVBbGdvcml0aG0gPSByZXF1aXJlKFwiLi9CbG9ja0NpcGhlck1vZGVBbGdvcml0aG1cIik7XHJcbnZhciBuID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7fVxyXG4gICAgdC5jcmVhdGVFbmNyeXB0b3IgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgKDAsIHRoaXMuRW5jcnlwdG9yKSh0LCBlKTtcclxuICAgIH07XHJcbiAgICB0LmNyZWF0ZURlY3J5cHRvciA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAoMCwgdGhpcy5EZWNyeXB0b3IpKHQsIGUpO1xyXG4gICAgfTtcclxuICAgIHQuRW5jcnlwdG9yID0gJGJsb2NrQ2lwaGVyTW9kZUFsZ29yaXRobS5CbG9ja0NpcGhlck1vZGVBbGdvcml0aG07XHJcbiAgICB0LkRlY3J5cHRvciA9ICRibG9ja0NpcGhlck1vZGVBbGdvcml0aG0uQmxvY2tDaXBoZXJNb2RlQWxnb3JpdGhtO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn0pKCk7XHJcbmV4cG9ydHMuQmxvY2tDaXBoZXJNb2RlID0gbjtcclxuIl19