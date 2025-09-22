
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/CBCDecryptor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b6f01YN29FnIRezKYS77w1', 'CBCDecryptor');
// game_script/scripts/CBCDecryptor.js

"use strict";

var o;
exports.CBCDecryptor = void 0;

var s = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.processBlock = function (t, e) {
    if (void 0 === this._cipher.cfg.blockSize) {
      throw new Error("missing blockSize in cipher config");
    }

    var i = t.slice(e, e + this._cipher.cfg.blockSize);

    this._cipher.decryptBlock(t, e);

    this.xorBlock(t, e, this._cipher.cfg.blockSize);
    this._prevBlock = i;
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

exports.CBCDecryptor = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXENCQ0RlY3J5cHRvci5qcyJdLCJuYW1lcyI6WyJvIiwiZXhwb3J0cyIsIkNCQ0RlY3J5cHRvciIsInMiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwicHJvY2Vzc0Jsb2NrIiwiX2NpcGhlciIsImNmZyIsImJsb2NrU2l6ZSIsIkVycm9yIiwiaSIsInNsaWNlIiwiZGVjcnlwdEJsb2NrIiwieG9yQmxvY2siLCJfcHJldkJsb2NrIiwiX2l2IiwibiIsInJlcXVpcmUiLCJCbG9ja0NpcGhlck1vZGVBbGdvcml0aG0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxPQUFPLENBQUNDLFlBQVIsR0FBdUIsS0FBSyxDQUE1Qjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsWUFBWixHQUEyQixVQUFVTixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDdkMsSUFBSSxLQUFLLENBQUwsS0FBVyxLQUFLTSxPQUFMLENBQWFDLEdBQWIsQ0FBaUJDLFNBQWhDLEVBQTJDO01BQ3ZDLE1BQU0sSUFBSUMsS0FBSixDQUFVLG9DQUFWLENBQU47SUFDSDs7SUFDRCxJQUFJQyxDQUFDLEdBQUdYLENBQUMsQ0FBQ1ksS0FBRixDQUFRWCxDQUFSLEVBQVdBLENBQUMsR0FBRyxLQUFLTSxPQUFMLENBQWFDLEdBQWIsQ0FBaUJDLFNBQWhDLENBQVI7O0lBQ0EsS0FBS0YsT0FBTCxDQUFhTSxZQUFiLENBQTBCYixDQUExQixFQUE2QkMsQ0FBN0I7O0lBQ0EsS0FBS2EsUUFBTCxDQUFjZCxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQixLQUFLTSxPQUFMLENBQWFDLEdBQWIsQ0FBaUJDLFNBQXJDO0lBQ0EsS0FBS00sVUFBTCxHQUFrQkosQ0FBbEI7RUFDSCxDQVJEOztFQVNBVixDQUFDLENBQUNJLFNBQUYsQ0FBWVMsUUFBWixHQUF1QixVQUFVZCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JVLENBQWhCLEVBQW1CO0lBQ3RDLElBQUlmLENBQUo7SUFDQSxLQUFLb0IsR0FBTCxJQUFhcEIsQ0FBQyxHQUFHLEtBQUtvQixHQUFWLEVBQWlCLEtBQUtBLEdBQUwsR0FBVyxLQUFLLENBQTdDLElBQW9EcEIsQ0FBQyxHQUFHLEtBQUttQixVQUE3RDs7SUFDQSxJQUFJLEtBQUssQ0FBTCxLQUFXbkIsQ0FBZixFQUFrQjtNQUNkLEtBQUssSUFBSXFCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdOLENBQXBCLEVBQXVCTSxDQUFDLEVBQXhCLEVBQTRCO1FBQ3hCakIsQ0FBQyxDQUFDQyxDQUFDLEdBQUdnQixDQUFMLENBQUQsSUFBWXJCLENBQUMsQ0FBQ3FCLENBQUQsQ0FBYjtNQUNIO0lBQ0o7RUFDSixDQVJEOztFQVNBLE9BQU9oQixDQUFQO0FBQ0gsQ0F4Qk8sQ0F3QkxpQixPQUFPLENBQUMsNEJBQUQsQ0FBUCxDQUFzQ0Msd0JBeEJqQyxDQUFSOztBQXlCQXRCLE9BQU8sQ0FBQ0MsWUFBUixHQUF1QkMsQ0FBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG5leHBvcnRzLkNCQ0RlY3J5cHRvciA9IHZvaWQgMDtcclxudmFyIHMgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLnByb2Nlc3NCbG9jayA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdGhpcy5fY2lwaGVyLmNmZy5ibG9ja1NpemUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWlzc2luZyBibG9ja1NpemUgaW4gY2lwaGVyIGNvbmZpZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGkgPSB0LnNsaWNlKGUsIGUgKyB0aGlzLl9jaXBoZXIuY2ZnLmJsb2NrU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5fY2lwaGVyLmRlY3J5cHRCbG9jayh0LCBlKTtcclxuICAgICAgICB0aGlzLnhvckJsb2NrKHQsIGUsIHRoaXMuX2NpcGhlci5jZmcuYmxvY2tTaXplKTtcclxuICAgICAgICB0aGlzLl9wcmV2QmxvY2sgPSBpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnhvckJsb2NrID0gZnVuY3Rpb24gKHQsIGUsIGkpIHtcclxuICAgICAgICB2YXIgbztcclxuICAgICAgICB0aGlzLl9pdiA/ICgobyA9IHRoaXMuX2l2KSwgKHRoaXMuX2l2ID0gdm9pZCAwKSkgOiAobyA9IHRoaXMuX3ByZXZCbG9jayk7XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gbykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGk7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgdFtlICsgbl0gXj0gb1tuXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZTtcclxufSkocmVxdWlyZShcIi4vQmxvY2tDaXBoZXJNb2RlQWxnb3JpdGhtXCIpLkJsb2NrQ2lwaGVyTW9kZUFsZ29yaXRobSk7XHJcbmV4cG9ydHMuQ0JDRGVjcnlwdG9yID0gcztcclxuIl19