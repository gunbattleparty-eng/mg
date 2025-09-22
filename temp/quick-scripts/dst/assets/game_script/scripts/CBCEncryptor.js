
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/CBCEncryptor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc775WEW8ZBD6jmL04UXJHu', 'CBCEncryptor');
// game_script/scripts/CBCEncryptor.js

"use strict";

var o;
exports.CBCEncryptor = void 0;

var s = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.processBlock = function (t, e) {
    if (void 0 === this._cipher.cfg.blockSize) {
      throw new Error("missing blockSize in cipher config");
    }

    this.xorBlock(t, e, this._cipher.cfg.blockSize);

    this._cipher.encryptBlock(t, e);

    this._prevBlock = t.slice(e, e + this._cipher.cfg.blockSize);
  };

  e.prototype.xorBlock = function (t, e, i) {
    var o;
    this._iv ? (o = this._iv, this._iv = void 0) : o = this._prevBlock;

    if (void 0 !== o) {
      for (var n = 0; n < i; n++) {
        t[e + n] ^= o[n];
      }
    }
  };

  return e;
}(require("./BlockCipherModeAlgorithm").BlockCipherModeAlgorithm);

exports.CBCEncryptor = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXENCQ0VuY3J5cHRvci5qcyJdLCJuYW1lcyI6WyJvIiwiZXhwb3J0cyIsIkNCQ0VuY3J5cHRvciIsInMiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwicHJvY2Vzc0Jsb2NrIiwiX2NpcGhlciIsImNmZyIsImJsb2NrU2l6ZSIsIkVycm9yIiwieG9yQmxvY2siLCJlbmNyeXB0QmxvY2siLCJfcHJldkJsb2NrIiwic2xpY2UiLCJpIiwiX2l2IiwibiIsInJlcXVpcmUiLCJCbG9ja0NpcGhlck1vZGVBbGdvcml0aG0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxPQUFPLENBQUNDLFlBQVIsR0FBdUIsS0FBSyxDQUE1Qjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsWUFBWixHQUEyQixVQUFVTixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDdkMsSUFBSSxLQUFLLENBQUwsS0FBVyxLQUFLTSxPQUFMLENBQWFDLEdBQWIsQ0FBaUJDLFNBQWhDLEVBQTJDO01BQ3ZDLE1BQU0sSUFBSUMsS0FBSixDQUFVLG9DQUFWLENBQU47SUFDSDs7SUFDRCxLQUFLQyxRQUFMLENBQWNYLENBQWQsRUFBaUJDLENBQWpCLEVBQW9CLEtBQUtNLE9BQUwsQ0FBYUMsR0FBYixDQUFpQkMsU0FBckM7O0lBQ0EsS0FBS0YsT0FBTCxDQUFhSyxZQUFiLENBQTBCWixDQUExQixFQUE2QkMsQ0FBN0I7O0lBQ0EsS0FBS1ksVUFBTCxHQUFrQmIsQ0FBQyxDQUFDYyxLQUFGLENBQVFiLENBQVIsRUFBV0EsQ0FBQyxHQUFHLEtBQUtNLE9BQUwsQ0FBYUMsR0FBYixDQUFpQkMsU0FBaEMsQ0FBbEI7RUFDSCxDQVBEOztFQVFBUixDQUFDLENBQUNJLFNBQUYsQ0FBWU0sUUFBWixHQUF1QixVQUFVWCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JjLENBQWhCLEVBQW1CO0lBQ3RDLElBQUluQixDQUFKO0lBQ0EsS0FBS29CLEdBQUwsSUFBYXBCLENBQUMsR0FBRyxLQUFLb0IsR0FBVixFQUFpQixLQUFLQSxHQUFMLEdBQVcsS0FBSyxDQUE3QyxJQUFvRHBCLENBQUMsR0FBRyxLQUFLaUIsVUFBN0Q7O0lBQ0EsSUFBSSxLQUFLLENBQUwsS0FBV2pCLENBQWYsRUFBa0I7TUFDZCxLQUFLLElBQUlxQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixDQUFwQixFQUF1QkUsQ0FBQyxFQUF4QixFQUE0QjtRQUN4QmpCLENBQUMsQ0FBQ0MsQ0FBQyxHQUFHZ0IsQ0FBTCxDQUFELElBQVlyQixDQUFDLENBQUNxQixDQUFELENBQWI7TUFDSDtJQUNKO0VBQ0osQ0FSRDs7RUFTQSxPQUFPaEIsQ0FBUDtBQUNILENBdkJPLENBdUJMaUIsT0FBTyxDQUFDLDRCQUFELENBQVAsQ0FBc0NDLHdCQXZCakMsQ0FBUjs7QUF3QkF0QixPQUFPLENBQUNDLFlBQVIsR0FBdUJDLENBQXZCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxuZXhwb3J0cy5DQkNFbmNyeXB0b3IgPSB2b2lkIDA7XHJcbnZhciBzID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHJldHVybiAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLnByb3RvdHlwZS5wcm9jZXNzQmxvY2sgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IHRoaXMuX2NpcGhlci5jZmcuYmxvY2tTaXplKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1pc3NpbmcgYmxvY2tTaXplIGluIGNpcGhlciBjb25maWdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMueG9yQmxvY2sodCwgZSwgdGhpcy5fY2lwaGVyLmNmZy5ibG9ja1NpemUpO1xyXG4gICAgICAgIHRoaXMuX2NpcGhlci5lbmNyeXB0QmxvY2sodCwgZSk7XHJcbiAgICAgICAgdGhpcy5fcHJldkJsb2NrID0gdC5zbGljZShlLCBlICsgdGhpcy5fY2lwaGVyLmNmZy5ibG9ja1NpemUpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnhvckJsb2NrID0gZnVuY3Rpb24gKHQsIGUsIGkpIHtcclxuICAgICAgICB2YXIgbztcclxuICAgICAgICB0aGlzLl9pdiA/ICgobyA9IHRoaXMuX2l2KSwgKHRoaXMuX2l2ID0gdm9pZCAwKSkgOiAobyA9IHRoaXMuX3ByZXZCbG9jayk7XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gbykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGk7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgdFtlICsgbl0gXj0gb1tuXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZTtcclxufSkocmVxdWlyZShcIi4vQmxvY2tDaXBoZXJNb2RlQWxnb3JpdGhtXCIpLkJsb2NrQ2lwaGVyTW9kZUFsZ29yaXRobSk7XHJcbmV4cG9ydHMuQ0JDRW5jcnlwdG9yID0gcztcclxuIl19