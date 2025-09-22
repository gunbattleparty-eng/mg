
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ECB.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6a4btTVSJGp40ffXiz+76x', 'ECB');
// game_script/scripts/ECB.js

"use strict";

var o;
exports.ECB = void 0;

var $blockCipherMode = require("./BlockCipherMode");

var $eCBEncryptor = require("./ECBEncryptor");

var $eCBDecryptor = require("./ECBDecryptor");

var l = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.Encryptor = $eCBEncryptor.ECBEncryptor;
  e.Decryptor = $eCBDecryptor.ECBDecryptor;
  return e;
}($blockCipherMode.BlockCipherMode);

exports.ECB = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVDQi5qcyJdLCJuYW1lcyI6WyJvIiwiZXhwb3J0cyIsIkVDQiIsIiRibG9ja0NpcGhlck1vZGUiLCJyZXF1aXJlIiwiJGVDQkVuY3J5cHRvciIsIiRlQ0JEZWNyeXB0b3IiLCJsIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9fZXh0ZW5kcyIsIkVuY3J5cHRvciIsIkVDQkVuY3J5cHRvciIsIkRlY3J5cHRvciIsIkVDQkRlY3J5cHRvciIsIkJsb2NrQ2lwaGVyTW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixHQUFjLEtBQUssQ0FBbkI7O0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUdDLE9BQU8sQ0FBQyxtQkFBRCxDQUE5Qjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJRSxhQUFhLEdBQUdGLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJRyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsR0FBY1IsYUFBYSxDQUFDUyxZQUE1QjtFQUNBTCxDQUFDLENBQUNNLFNBQUYsR0FBY1QsYUFBYSxDQUFDVSxZQUE1QjtFQUNBLE9BQU9QLENBQVA7QUFDSCxDQVJPLENBUUxOLGdCQUFnQixDQUFDYyxlQVJaLENBQVI7O0FBU0FoQixPQUFPLENBQUNDLEdBQVIsR0FBY0ssQ0FBZCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbmV4cG9ydHMuRUNCID0gdm9pZCAwO1xyXG52YXIgJGJsb2NrQ2lwaGVyTW9kZSA9IHJlcXVpcmUoXCIuL0Jsb2NrQ2lwaGVyTW9kZVwiKTtcclxudmFyICRlQ0JFbmNyeXB0b3IgPSByZXF1aXJlKFwiLi9FQ0JFbmNyeXB0b3JcIik7XHJcbnZhciAkZUNCRGVjcnlwdG9yID0gcmVxdWlyZShcIi4vRUNCRGVjcnlwdG9yXCIpO1xyXG52YXIgbCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICByZXR1cm4gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5FbmNyeXB0b3IgPSAkZUNCRW5jcnlwdG9yLkVDQkVuY3J5cHRvcjtcclxuICAgIGUuRGVjcnlwdG9yID0gJGVDQkRlY3J5cHRvci5FQ0JEZWNyeXB0b3I7XHJcbiAgICByZXR1cm4gZTtcclxufSkoJGJsb2NrQ2lwaGVyTW9kZS5CbG9ja0NpcGhlck1vZGUpO1xyXG5leHBvcnRzLkVDQiA9IGw7XHJcbiJdfQ==