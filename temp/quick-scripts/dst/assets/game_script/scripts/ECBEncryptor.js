
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ECBEncryptor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '119e1YatxJFmbo3p6Ss2nbq', 'ECBEncryptor');
// game_script/scripts/ECBEncryptor.js

"use strict";

var o;
exports.ECBEncryptor = void 0;

var s = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.processBlock = function (t, e) {
    this._cipher.encryptBlock(t, e);
  };

  return e;
}(require("./BlockCipherModeAlgorithm").BlockCipherModeAlgorithm);

exports.ECBEncryptor = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVDQkVuY3J5cHRvci5qcyJdLCJuYW1lcyI6WyJvIiwiZXhwb3J0cyIsIkVDQkVuY3J5cHRvciIsInMiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwicHJvY2Vzc0Jsb2NrIiwiX2NpcGhlciIsImVuY3J5cHRCbG9jayIsInJlcXVpcmUiLCJCbG9ja0NpcGhlck1vZGVBbGdvcml0aG0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxPQUFPLENBQUNDLFlBQVIsR0FBdUIsS0FBSyxDQUE1Qjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsWUFBWixHQUEyQixVQUFVTixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDdkMsS0FBS00sT0FBTCxDQUFhQyxZQUFiLENBQTBCUixDQUExQixFQUE2QkMsQ0FBN0I7RUFDSCxDQUZEOztFQUdBLE9BQU9BLENBQVA7QUFDSCxDQVRPLENBU0xRLE9BQU8sQ0FBQyw0QkFBRCxDQUFQLENBQXNDQyx3QkFUakMsQ0FBUjs7QUFVQWIsT0FBTyxDQUFDQyxZQUFSLEdBQXVCQyxDQUF2QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbmV4cG9ydHMuRUNCRW5jcnlwdG9yID0gdm9pZCAwO1xyXG52YXIgcyA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICByZXR1cm4gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUucHJvY2Vzc0Jsb2NrID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB0aGlzLl9jaXBoZXIuZW5jcnlwdEJsb2NrKHQsIGUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBlO1xyXG59KShyZXF1aXJlKFwiLi9CbG9ja0NpcGhlck1vZGVBbGdvcml0aG1cIikuQmxvY2tDaXBoZXJNb2RlQWxnb3JpdGhtKTtcclxuZXhwb3J0cy5FQ0JFbmNyeXB0b3IgPSBzO1xyXG4iXX0=