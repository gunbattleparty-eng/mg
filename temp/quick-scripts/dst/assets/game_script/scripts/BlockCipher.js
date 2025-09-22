
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/BlockCipher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7700aAs1wNARbCFt9v1ElRp', 'BlockCipher');
// game_script/scripts/BlockCipher.js

"use strict";

var o;
exports.BlockCipher = void 0;

var $cipher = require("./Cipher");

var $cBC = require("./CBC");

var $pKCS7 = require("./PKCS7");

var l = function (t) {
  function e(e, i, o) {
    return t.call(this, e, i, Object.assign({
      blockSize: 4,
      mode: $cBC.CBC,
      padding: $pKCS7.PKCS7
    }, o)) || this;
  }

  __extends(e, t);

  e.prototype.reset = function () {
    t.prototype.reset.call(this);

    if (void 0 === this.cfg.mode) {
      throw new Error("missing mode in config");
    }

    var e;
    this._xformMode === this.constructor._ENC_XFORM_MODE ? e = this.cfg.mode.createEncryptor : (e = this.cfg.mode.createDecryptor, this._minBufferSize = 1);
    this._mode && this._mode.__creator === e ? this._mode.init(this, this.cfg.iv && this.cfg.iv.words) : (this._mode = e.call(this.cfg.mode, this, this.cfg.iv && this.cfg.iv.words), this._mode.__creator = e);
  };

  e.prototype._doProcessBlock = function (t, e) {
    this._mode.processBlock(t, e);
  };

  e.prototype._doFinalize = function () {
    if (void 0 === this.cfg.padding) {
      throw new Error("missing padding in config");
    }

    var t;

    if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
      if (void 0 === this.cfg.blockSize) {
        throw new Error("missing blockSize in config");
      }

      this.cfg.padding.pad(this._data, this.cfg.blockSize);
      t = this._process(!0);
    } else {
      t = this._process(!0);
      this.cfg.padding.unpad(t);
    }

    return t;
  };

  return e;
}($cipher.Cipher);

exports.BlockCipher = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJsb2NrQ2lwaGVyLmpzIl0sIm5hbWVzIjpbIm8iLCJleHBvcnRzIiwiQmxvY2tDaXBoZXIiLCIkY2lwaGVyIiwicmVxdWlyZSIsIiRjQkMiLCIkcEtDUzciLCJsIiwidCIsImUiLCJpIiwiY2FsbCIsIk9iamVjdCIsImFzc2lnbiIsImJsb2NrU2l6ZSIsIm1vZGUiLCJDQkMiLCJwYWRkaW5nIiwiUEtDUzciLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJyZXNldCIsImNmZyIsIkVycm9yIiwiX3hmb3JtTW9kZSIsImNvbnN0cnVjdG9yIiwiX0VOQ19YRk9STV9NT0RFIiwiY3JlYXRlRW5jcnlwdG9yIiwiY3JlYXRlRGVjcnlwdG9yIiwiX21pbkJ1ZmZlclNpemUiLCJfbW9kZSIsIl9fY3JlYXRvciIsImluaXQiLCJpdiIsIndvcmRzIiwiX2RvUHJvY2Vzc0Jsb2NrIiwicHJvY2Vzc0Jsb2NrIiwiX2RvRmluYWxpemUiLCJwYWQiLCJfZGF0YSIsIl9wcm9jZXNzIiwidW5wYWQiLCJDaXBoZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxPQUFPLENBQUNDLFdBQVIsR0FBc0IsS0FBSyxDQUEzQjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlDLElBQUksR0FBR0QsT0FBTyxDQUFDLE9BQUQsQ0FBbEI7O0FBQ0EsSUFBSUUsTUFBTSxHQUFHRixPQUFPLENBQUMsU0FBRCxDQUFwQjs7QUFDQSxJQUFJRyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsQ0FBV0EsQ0FBWCxFQUFjQyxDQUFkLEVBQWlCVixDQUFqQixFQUFvQjtJQUNoQixPQUNJUSxDQUFDLENBQUNHLElBQUYsQ0FDSSxJQURKLEVBRUlGLENBRkosRUFHSUMsQ0FISixFQUlJRSxNQUFNLENBQUNDLE1BQVAsQ0FD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c0NvbnRlbnQiOlsidmFyIG87XHJcbmV4cG9ydHMuQmxvY2tDaXBoZXIgPSB2b2lkIDA7XHJcbnZhciAkY2lwaGVyID0gcmVxdWlyZShcIi4vQ2lwaGVyXCIpO1xyXG52YXIgJGNCQyA9IHJlcXVpcmUoXCIuL0NCQ1wiKTtcclxudmFyICRwS0NTNyA9IHJlcXVpcmUoXCIuL1BLQ1M3XCIpO1xyXG52YXIgbCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZShlLCBpLCBvKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdC5jYWxsKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIGUsXHJcbiAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrU2l6ZTogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJGNCQy5DQkMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICRwS0NTNy5QS0NTN1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHx8IHRoaXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdC5wcm90b3R5cGUucmVzZXQuY2FsbCh0aGlzKTtcclxuICAgICAgICBpZiAodm9pZCAwID09PSB0aGlzLmNmZy5tb2RlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1pc3NpbmcgbW9kZSBpbiBjb25maWdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlO1xyXG4gICAgICAgIHRoaXMuX3hmb3JtTW9kZSA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5fRU5DX1hGT1JNX01PREVcclxuICAgICAgICAgICAgPyAoZSA9IHRoaXMuY2ZnLm1vZGUuY3JlYXRlRW5jcnlwdG9yKVxyXG4gICAgICAgICAgICA6ICgoZSA9IHRoaXMuY2ZnLm1vZGUuY3JlYXRlRGVjcnlwdG9yKSwgKHRoaXMuX21pbkJ1ZmZlclNpemUgPSAxKSk7XHJcbiAgICAgICAgdGhpcy5fbW9kZSAmJiB0aGlzLl9tb2RlLl9fY3JlYXRvciA9PT0gZVxyXG4gICAgICAgICAgICA/IHRoaXMuX21vZGUuaW5pdCh0aGlzLCB0aGlzLmNmZy5pdiAmJiB0aGlzLmNmZy5pdi53b3JkcylcclxuICAgICAgICAgICAgOiAoKHRoaXMuX21vZGUgPSBlLmNhbGwodGhpcy5jZmcubW9kZSwgdGhpcywgdGhpcy5jZmcuaXYgJiYgdGhpcy5jZmcuaXYud29yZHMpKSxcclxuICAgICAgICAgICAgICAodGhpcy5fbW9kZS5fX2NyZWF0b3IgPSBlKSk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuX2RvUHJvY2Vzc0Jsb2NrID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB0aGlzLl9tb2RlLnByb2Nlc3NCbG9jayh0LCBlKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5fZG9GaW5hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodm9pZCAwID09PSB0aGlzLmNmZy5wYWRkaW5nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1pc3NpbmcgcGFkZGluZyBpbiBjb25maWdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0O1xyXG4gICAgICAgIGlmICh0aGlzLl94Zm9ybU1vZGUgPT09IHRoaXMuY29uc3RydWN0b3IuX0VOQ19YRk9STV9NT0RFKSB7XHJcbiAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHRoaXMuY2ZnLmJsb2NrU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWlzc2luZyBibG9ja1NpemUgaW4gY29uZmlnXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2ZnLnBhZGRpbmcucGFkKHRoaXMuX2RhdGEsIHRoaXMuY2ZnLmJsb2NrU2l6ZSk7XHJcbiAgICAgICAgICAgIHQgPSB0aGlzLl9wcm9jZXNzKCEwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ID0gdGhpcy5fcHJvY2VzcyghMCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2ZnLnBhZGRpbmcudW5wYWQodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBlO1xyXG59KSgkY2lwaGVyLkNpcGhlcik7XHJcbmV4cG9ydHMuQmxvY2tDaXBoZXIgPSBsO1xyXG4iXX0=