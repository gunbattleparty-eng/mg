
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/CBC.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b9321ketlD64jB7IPQYDHM', 'CBC');
// game_script/scripts/CBC.js

"use strict";

var o;
exports.CBC = void 0;

var $blockCipherMode = require("./BlockCipherMode");

var $cBCEncryptor = require("./CBCEncryptor");

var $cBCDecryptor = require("./CBCDecryptor");

var l = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.Encryptor = $cBCEncryptor.CBCEncryptor;
  e.Decryptor = $cBCDecryptor.CBCDecryptor;
  return e;
}($blockCipherMode.BlockCipherMode);

exports.CBC = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXENCQy5qcyJdLCJuYW1lcyI6WyJvIiwiZXhwb3J0cyIsIkNCQyIsIiRibG9ja0NpcGhlck1vZGUiLCJyZXF1aXJlIiwiJGNCQ0VuY3J5cHRvciIsIiRjQkNEZWNyeXB0b3IiLCJsIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9fZXh0ZW5kcyIsIkVuY3J5cHRvciIsIkNCQ0VuY3J5cHRvciIsIkRlY3J5cHRvciIsIkNCQ0RlY3J5cHRvciIsIkJsb2NrQ2lwaGVyTW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixHQUFjLEtBQUssQ0FBbkI7O0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUdDLE9BQU8sQ0FBQyxtQkFBRCxDQUE5Qjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJRSxhQUFhLEdBQUdGLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJRyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsR0FBY1IsYUFBYSxDQUFDUyxZQUE1QjtFQUNBTCxDQUFDLENBQUNNLFNBQUYsR0FBY1QsYUFBYSxDQUFDVSxZQUE1QjtFQUNBLE9BQU9QLENBQVA7QUFDSCxDQVJPLENBUUxOLGdCQUFnQixDQUFDYyxlQVJaLENBQVI7O0FBU0FoQixPQUFPLENBQUNDLEdBQVIsR0FBY0ssQ0FBZCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbmV4cG9ydHMuQ0JDID0gdm9pZCAwO1xyXG52YXIgJGJsb2NrQ2lwaGVyTW9kZSA9IHJlcXVpcmUoXCIuL0Jsb2NrQ2lwaGVyTW9kZVwiKTtcclxudmFyICRjQkNFbmNyeXB0b3IgPSByZXF1aXJlKFwiLi9DQkNFbmNyeXB0b3JcIik7XHJcbnZhciAkY0JDRGVjcnlwdG9yID0gcmVxdWlyZShcIi4vQ0JDRGVjcnlwdG9yXCIpO1xyXG52YXIgbCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICByZXR1cm4gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5FbmNyeXB0b3IgPSAkY0JDRW5jcnlwdG9yLkNCQ0VuY3J5cHRvcjtcclxuICAgIGUuRGVjcnlwdG9yID0gJGNCQ0RlY3J5cHRvci5DQkNEZWNyeXB0b3I7XHJcbiAgICByZXR1cm4gZTtcclxufSkoJGJsb2NrQ2lwaGVyTW9kZS5CbG9ja0NpcGhlck1vZGUpO1xyXG5leHBvcnRzLkNCQyA9IGw7XHJcbiJdfQ==