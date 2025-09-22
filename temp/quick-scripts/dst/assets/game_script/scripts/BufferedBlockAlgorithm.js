
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/BufferedBlockAlgorithm.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74527kjQSdPmJY5Y7IBjsZ9', 'BufferedBlockAlgorithm');
// game_script/scripts/BufferedBlockAlgorithm.js

"use strict";

exports.BufferedBlockAlgorithm = void 0;

var $wordArray = require("./WordArray");

var $utf8 = require("./Utf8");

var s = function () {
  function t(t) {
    this._minBufferSize = 0;
    this.cfg = Object.assign({
      blockSize: 1
    }, t);
    this._data = new $wordArray.WordArray();
    this._nDataBytes = 0;
  }

  t.prototype.reset = function () {
    this._data = new $wordArray.WordArray();
    this._nDataBytes = 0;
  };

  t.prototype._append = function (t) {
    if ("string" == typeof t) {
      t = $utf8.Utf8.parse(t);
    }

    this._data.concat(t);

    this._nDataBytes += t.sigBytes;
  };

  t.prototype._process = function (t) {
    if (!this.cfg.blockSize) {
      throw new Error("missing blockSize in config");
    }

    var e;
    var i = 4 * this.cfg.blockSize;
    var n = this._data.sigBytes / i;
    var s = (n = t ? Math.ceil(n) : Math.max((0 | n) - this._minBufferSize, 0)) * this.cfg.blockSize;
    var r = Math.min(4 * s, this._data.sigBytes);

    if (s) {
      for (var a = 0; a < s; a += this.cfg.blockSize) {
        this._doProcessBlock(this._data.words, a);
      }

      e = this._data.words.splice(0, s);
      this._data.sigBytes -= r;
    }

    return new $wordArray.WordArray(e, r);
  };

  t.prototype.clone = function () {
    var t = this.constructor();

    for (var e in this) {
      if (this.hasOwnProperty(e)) {
        t[e] = this[e];
      }
    }

    t._data = this._data.clone();
    return t;
  };

  return t;
}();

exports.BufferedBlockAlgorithm = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0iLCIkd29yZEFycmF5IiwicmVxdWlyZSIsIiR1dGY4IiwicyIsInQiLCJfbWluQnVmZmVyU2l6ZSIsImNmZyIsIk9iamVjdCIsImFzc2lnbiIsImJsb2NrU2l6ZSIsIl9kYXRhIiwiV29yZEFycmF5IiwiX25EYXRhQnl0ZXMiLCJwcm90b3R5cGUiLCJyZXNldCIsIl9hcHBlbmQiLCJVdGY4IiwicGFyc2UiLCJjb25jYXQiLCJzaWdCeXRlcyIsIl9wcm9jZXNzIiwiRXJyb3IiLCJlIiwiaSIsIm4iLCJNYXRoIiwiY2VpbCIsIm1heCIsInIiLCJtaW4iLCJhIiwiX2RvUHJvY2Vzc0Jsb2NrIiwid29yZHMiLCJzcGxpY2UiLCJjbG9uZSIsImNvbnN0cnVjdG9yIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0Msc0JBQVIsR0FBaUMsS0FBSyxDQUF0Qzs7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlDLEtBQUssR0FBR0QsT0FBTyxDQUFDLFFBQUQsQ0FBbkI7O0FBQ0EsSUFBSUUsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxDQUFXQSxDQUFYLEVBQWM7SUFDVixLQUFLQyxjQUFMLEdBQXNCLENBQXRCO0lBQ0EsS0FBS0MsR0FBTCxHQUFXQyxNQUFNLENBQUNDLE1BQVAsQ0FDUDtNQUNJQyxTQUFTLEVBQUU7SUFEZixDQURPLEVBSVBMLENBSk8sQ0FBWDtJQU1BLEtBQUtNLEtBQUwsR0FBYSxJQUFJVixVQUFVLENBQUNXLFNBQWYsRUFBYjtJQUNBLEtBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7RUFDSDs7RUFDRFIsQ0FBQyxDQUFDUyxTQUFGLENBQVlDLEtBQVosR0FBb0IsWUFBWTtJQUM1QixLQUFLSixLQUFMLEdBQWEsSUFBSVYsVUFBVSxDQUFDVyxTQUFmLEVBQWI7SUFDQSxLQUFLQyxXQUFMLEdBQW1CLENBQW5CO0VBQ0gsQ0FIRDs7RUFJQVIsQ0FBQyxDQUFDUyxTQUFGLENBQVlFLE9BQVosR0FBc0IsVUFBVVgsQ0FBVixFQUFhO0lBQy9CLElBQUksWUFBWSxPQUFPQSxDQUF2QixFQUEwQjtNQUN0QkEsQ0FBQyxHQUFHRixLQUFLLENBQUNjLElBQU4sQ0FBV0MsS0FBWCxDQUFpQmIsQ0FBakIsQ0FBSjtJQUNIOztJQUNELEtBQUtNLEtBQUwsQ0FBV1EsTUFBWCxDQUFrQmQsQ0FBbEI7O0lBQ0EsS0FBS1EsV0FBTCxJQUFvQlIsQ0FBQyxDQUFDZSxRQUF0QjtFQUNILENBTkQ7O0VBT0FmLENBQUMsQ0FBQ1MsU0FBRixDQUFZTyxRQUFaLEdBQXVCLFVBQVVoQixDQUFWLEVBQWE7SUFDaEMsSUFBSSxDQUFDLEtBQUtFLEdBQUwsQ0FBU0csU0FBZCxFQUF5QjtNQUNyQixNQUFNLElBQUlZLEtBQUosQ0FBVSw2QkFBVixDQUFOO0lBQ0g7O0lBQ0QsSUFBSUMsQ0FBSjtJQUNBLElBQUlDLENBQUMsR0FBRyxJQUFJLEtBQUtqQixHQUFMLENBQVNHLFNBQXJCO0lBQ0EsSUFBSWUsQ0FBQyxHQUFHLEtBQUtkLEtBQUwsQ0FBV1MsUUFBWCxHQUFzQkksQ0FBOUI7SUFDQSxJQUFJcEIsQ0FBQyxHQUFHLENBQUNxQixDQUFDLEdBQUdwQixDQUFDLEdBQUdxQixJQUFJLENBQUNDLElBQUwsQ0FBVUYsQ0FBVixDQUFILEdBQWtCQyxJQUFJLENBQUNFLEdBQUwsQ0FBUyxDQUFDLElBQUlILENBQUwsSUFBVSxLQUFLbkIsY0FBeEIsRUFBd0MsQ0FBeEMsQ0FBeEIsSUFBc0UsS0FBS0MsR0FBTCxDQUFTRyxTQUF2RjtJQUNBLElBQUltQixDQUFDLEdBQUdILElBQUksQ0FBQ0ksR0FBTCxDQUFTLElBQUkxQixDQUFiLEVBQWdCLEtBQUtPLEtBQUwsQ0FBV1MsUUFBM0IsQ0FBUjs7SUFDQSxJQUFJaEIsQ0FBSixFQUFPO01BQ0gsS0FBSyxJQUFJMkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzNCLENBQXBCLEVBQXVCMkIsQ0FBQyxJQUFJLEtBQUt4QixHQUFMLENBQVNHLFNBQXJDLEVBQWdEO1FBQzVDLEtBQUtzQixlQUFMLENBQXFCLEtBQUtyQixLQUFMLENBQVdzQixLQUFoQyxFQUF1Q0YsQ0FBdkM7TUFDSDs7TUFDRFIsQ0FBQyxHQUFHLEtBQUtaLEtBQUwsQ0FBV3NCLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCLENBQXhCLEVBQTJCOUIsQ0FBM0IsQ0FBSjtNQUNBLEtBQUtPLEtBQUwsQ0FBV1MsUUFBWCxJQUF1QlMsQ0FBdkI7SUFDSDs7SUFDRCxPQUFPLElBQUk1QixVQUFVLENBQUNXLFNBQWYsQ0FBeUJXLENBQXpCLEVBQTRCTSxDQUE1QixDQUFQO0VBQ0gsQ0FqQkQ7O0VBa0JBeEIsQ0FBQyxDQUFDUyxTQUFGLENBQVlxQixLQUFaLEdBQW9CLFlBQVk7SUFDNUIsSUFBSTlCLENBQUMsR0FBRyxLQUFLK0IsV0FBTCxFQUFSOztJQUNBLEtBQUssSUFBSWIsQ0FBVCxJQUFjLElBQWQ7TUFDSSxJQUFJLEtBQUtjLGNBQUwsQ0FBb0JkLENBQXBCLENBQUosRUFBNEI7UUFDeEJsQixDQUFDLENBQUNrQixDQUFELENBQUQsR0FBTyxLQUFLQSxDQUFMLENBQVA7TUFDSDtJQUhMOztJQUlBbEIsQ0FBQyxDQUFDTSxLQUFGLEdBQVUsS0FBS0EsS0FBTCxDQUFXd0IsS0FBWCxFQUFWO0lBQ0EsT0FBTzlCLENBQVA7RUFDSCxDQVJEOztFQVNBLE9BQU9BLENBQVA7QUFDSCxDQW5ETyxFQUFSOztBQW9EQU4sT0FBTyxDQUFDQyxzQkFBUixHQUFpQ0ksQ0FBakMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IHZvaWQgMDtcclxudmFyICR3b3JkQXJyYXkgPSByZXF1aXJlKFwiLi9Xb3JkQXJyYXlcIik7XHJcbnZhciAkdXRmOCA9IHJlcXVpcmUoXCIuL1V0ZjhcIik7XHJcbnZhciBzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQodCkge1xyXG4gICAgICAgIHRoaXMuX21pbkJ1ZmZlclNpemUgPSAwO1xyXG4gICAgICAgIHRoaXMuY2ZnID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tTaXplOiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgJHdvcmRBcnJheS5Xb3JkQXJyYXkoKTtcclxuICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzID0gMDtcclxuICAgIH1cclxuICAgIHQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgJHdvcmRBcnJheS5Xb3JkQXJyYXkoKTtcclxuICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzID0gMDtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5fYXBwZW5kID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCkge1xyXG4gICAgICAgICAgICB0ID0gJHV0ZjguVXRmOC5wYXJzZSh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGF0YS5jb25jYXQodCk7XHJcbiAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyArPSB0LnNpZ0J5dGVzO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLl9wcm9jZXNzID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2ZnLmJsb2NrU2l6ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtaXNzaW5nIGJsb2NrU2l6ZSBpbiBjb25maWdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlO1xyXG4gICAgICAgIHZhciBpID0gNCAqIHRoaXMuY2ZnLmJsb2NrU2l6ZTtcclxuICAgICAgICB2YXIgbiA9IHRoaXMuX2RhdGEuc2lnQnl0ZXMgLyBpO1xyXG4gICAgICAgIHZhciBzID0gKG4gPSB0ID8gTWF0aC5jZWlsKG4pIDogTWF0aC5tYXgoKDAgfCBuKSAtIHRoaXMuX21pbkJ1ZmZlclNpemUsIDApKSAqIHRoaXMuY2ZnLmJsb2NrU2l6ZTtcclxuICAgICAgICB2YXIgciA9IE1hdGgubWluKDQgKiBzLCB0aGlzLl9kYXRhLnNpZ0J5dGVzKTtcclxuICAgICAgICBpZiAocykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHM7IGEgKz0gdGhpcy5jZmcuYmxvY2tTaXplKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kb1Byb2Nlc3NCbG9jayh0aGlzLl9kYXRhLndvcmRzLCBhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlID0gdGhpcy5fZGF0YS53b3Jkcy5zcGxpY2UoMCwgcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGEuc2lnQnl0ZXMgLT0gcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkd29yZEFycmF5LldvcmRBcnJheShlLCByKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXMuY29uc3RydWN0b3IoKTtcclxuICAgICAgICBmb3IgKHZhciBlIGluIHRoaXMpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0W2VdID0gdGhpc1tlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHQuX2RhdGEgPSB0aGlzLl9kYXRhLmNsb25lKCk7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHQ7XHJcbn0pKCk7XHJcbmV4cG9ydHMuQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IHM7XHJcbiJdfQ==