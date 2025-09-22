
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/CipherParams.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46dc8BMa5RHu6EZrxJYP0lL', 'CipherParams');
// game_script/scripts/CipherParams.js

"use strict";

var o;
exports.CipherParams = void 0;

var s = function (t) {
  function e(e) {
    var i = t.call(this) || this;
    i.ciphertext = e.ciphertext;
    i.key = e.key;
    i.iv = e.iv;
    i.salt = e.salt;
    i.algorithm = e.algorithm;
    i.mode = e.mode;
    i.padding = e.padding;
    i.blockSize = e.blockSize;
    i.formatter = e.formatter;
    return i;
  }

  __extends(e, t);

  e.prototype.extend = function (t) {
    if (void 0 !== t.ciphertext) {
      this.ciphertext = t.ciphertext;
    }

    if (void 0 !== t.key) {
      this.key = t.key;
    }

    if (void 0 !== t.iv) {
      this.iv = t.iv;
    }

    if (void 0 !== t.salt) {
      this.salt = t.salt;
    }

    if (void 0 !== t.algorithm) {
      this.algorithm = t.algorithm;
    }

    if (void 0 !== t.mode) {
      this.mode = t.mode;
    }

    if (void 0 !== t.padding) {
      this.padding = t.padding;
    }

    if (void 0 !== t.blockSize) {
      this.blockSize = t.blockSize;
    }

    if (void 0 !== t.formatter) {
      this.formatter = t.formatter;
    }

    return this;
  };

  e.prototype.toString = function (t) {
    if (t) {
      return t.stringify(this);
    }

    if (this.formatter) {
      return this.formatter.stringify(this);
    }

    throw new Error("cipher needs a formatter to be able to convert the result into a string");
  };

  return e;
}(require("./Base").Base);

exports.CipherParams = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXENpcGhlclBhcmFtcy5qcyJdLCJuYW1lcyI6WyJvIiwiZXhwb3J0cyIsIkNpcGhlclBhcmFtcyIsInMiLCJ0IiwiZSIsImkiLCJjYWxsIiwiY2lwaGVydGV4dCIsImtleSIsIml2Iiwic2FsdCIsImFsZ29yaXRobSIsIm1vZGUiLCJwYWRkaW5nIiwiYmxvY2tTaXplIiwiZm9ybWF0dGVyIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiZXh0ZW5kIiwidG9TdHJpbmciLCJzdHJpbmdpZnkiLCJFcnJvciIsInJlcXVpcmUiLCJCYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsT0FBTyxDQUFDQyxZQUFSLEdBQXVCLEtBQUssQ0FBNUI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULENBQVdBLENBQVgsRUFBYztJQUNWLElBQUlDLENBQUMsR0FBR0YsQ0FBQyxDQUFDRyxJQUFGLENBQU8sSUFBUCxLQUFnQixJQUF4QjtJQUNBRCxDQUFDLENBQUNFLFVBQUYsR0FBZUgsQ0FBQyxDQUFDRyxVQUFqQjtJQUNBRixDQUFDLENBQUNHLEdBQUYsR0FBUUosQ0FBQyxDQUFDSSxHQUFWO0lBQ0FILENBQUMsQ0FBQ0ksRUFBRixHQUFPTCxDQUFDLENBQUNLLEVBQVQ7SUFDQUosQ0FBQyxDQUFDSyxJQUFGLEdBQVNOLENBQUMsQ0FBQ00sSUFBWDtJQUNBTCxDQUFDLENBQUNNLFNBQUYsR0FBY1AsQ0FBQyxDQUFDTyxTQUFoQjtJQUNBTixDQUFDLENBQUNPLElBQUYsR0FBU1IsQ0FBQyxDQUFDUSxJQUFYO0lBQ0FQLENBQUMsQ0FBQ1EsT0FBRixHQUFZVCxDQUFDLENBQUNTLE9BQWQ7SUFDQVIsQ0FBQyxDQUFDUyxTQUFGLEdBQWNWLENBQUMsQ0FBQ1UsU0FBaEI7SUFDQVQsQ0FBQyxDQUFDVSxTQUFGLEdBQWNYLENBQUMsQ0FBQ1csU0FBaEI7SUFDQSxPQUFPVixDQUFQO0VBQ0g7O0VBQ0RXLFNBQVMsQ0FBQ1osQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ2EsU0FBRixDQUFZQyxNQUFaLEdBQXFCLFVBQVVmLENBQVYsRUFBYTtJQUM5QixJQUFJLEtBQUssQ0FBTCxLQUFXQSxDQUFDLENBQUNJLFVBQWpCLEVBQTZCO01BQ3pCLEtBQUtBLFVBQUwsR0FBa0JKLENBQUMsQ0FBQ0ksVUFBcEI7SUFDSDs7SUFDRCxJQUFJLEtBQUssQ0FBTCxLQUFXSixDQUFDLENBQUNLLEdBQWpCLEVBQXNCO01BQ2xCLEtBQUtBLEdBQUwsR0FBV0wsQ0FBQyxDQUFDSyxHQUFiO0lBQ0g7O0lBQ0QsSUFBSSxLQUFLLENBQUwsS0FBV0wsQ0FBQyxDQUFDTSxFQUFqQixFQUFxQjtNQUNqQixLQUFLQSxFQUFMLEdBQVVOLENBQUMsQ0FBQ00sRUFBWjtJQUNIOztJQUNELElBQUksS0FBSyxDQUFMLEtBQVdOLENBQUMsQ0FBQ08sSUFBakIsRUFBdUI7TUFDbkIsS0FBS0EsSUFBTCxHQUFZUCxDQUFDLENBQUNPLElBQWQ7SUFDSDs7SUFDRCxJQUFJLEtBQUssQ0FBTCxLQUFXUCxDQUFDLENBQUNRLFNBQWpCLEVBQTRCO01BQ3hCLEtBQUtBLFNBQUwsR0FBaUJSLENBQUMsQ0FBQ1EsU0FBbkI7SUFDSDs7SUFDRCxJQUFJLEtBQUssQ0FBTCxLQUFXUixDQUFDLENBQUNTLElBQWpCLEVBQXVCO01BQ25CLEtBQUtBLElBQUwsR0FBWVQsQ0FBQyxDQUFDUyxJQUFkO0lBQ0g7O0lBQ0QsSUFBSSxLQUFLLENBQUwsS0FBV1QsQ0FBQyxDQUFDVSxPQUFqQixFQUEwQjtNQUN0QixLQUFLQSxPQUFMLEdBQWVWLENBQUMsQ0FBQ1UsT0FBakI7SUFDSDs7SUFDRCxJQUFJLEtBQUssQ0FBTCxLQUFXVixDQUFDLENBQUNXLFNBQWpCLEVBQTRCO01BQ3hCLEtBQUtBLFNBQUwsR0FBaUJYLENBQUMsQ0FBQ1csU0FBbkI7SUFDSDs7SUFDRCxJQUFJLEtBQUssQ0FBTCxLQUFXWCxDQUFDLENBQUNZLFNBQWpCLEVBQTRCO01BQ3hCLEtBQUtBLFNBQUwsR0FBaUJaLENBQUMsQ0FBQ1ksU0FBbkI7SUFDSDs7SUFDRCxPQUFPLElBQVA7RUFDSCxDQTdCRDs7RUE4QkFYLENBQUMsQ0FBQ2EsU0FBRixDQUFZRSxRQUFaLEdBQXVCLFVBQVVoQixDQUFWLEVBQWE7SUFDaEMsSUFBSUEsQ0FBSixFQUFPO01BQ0gsT0FBT0EsQ0FBQyxDQUFDaUIsU0FBRixDQUFZLElBQVosQ0FBUDtJQUNIOztJQUNELElBQUksS0FBS0wsU0FBVCxFQUFvQjtNQUNoQixPQUFPLEtBQUtBLFNBQUwsQ0FBZUssU0FBZixDQUF5QixJQUF6QixDQUFQO0lBQ0g7O0lBQ0QsTUFBTSxJQUFJQyxLQUFKLENBQVUseUVBQVYsQ0FBTjtFQUNILENBUkQ7O0VBU0EsT0FBT2pCLENBQVA7QUFDSCxDQXZETyxDQXVETGtCLE9BQU8sQ0FBQyxRQUFELENBQVAsQ0FBa0JDLElBdkRiLENBQVI7O0FBd0RBdkIsT0FBTyxDQUFDQyxZQUFSLEdBQXVCQyxDQUF2QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbmV4cG9ydHMuQ2lwaGVyUGFyYW1zID0gdm9pZCAwO1xyXG52YXIgcyA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZShlKSB7XHJcbiAgICAgICAgdmFyIGkgPSB0LmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBpLmNpcGhlcnRleHQgPSBlLmNpcGhlcnRleHQ7XHJcbiAgICAgICAgaS5rZXkgPSBlLmtleTtcclxuICAgICAgICBpLml2ID0gZS5pdjtcclxuICAgICAgICBpLnNhbHQgPSBlLnNhbHQ7XHJcbiAgICAgICAgaS5hbGdvcml0aG0gPSBlLmFsZ29yaXRobTtcclxuICAgICAgICBpLm1vZGUgPSBlLm1vZGU7XHJcbiAgICAgICAgaS5wYWRkaW5nID0gZS5wYWRkaW5nO1xyXG4gICAgICAgIGkuYmxvY2tTaXplID0gZS5ibG9ja1NpemU7XHJcbiAgICAgICAgaS5mb3JtYXR0ZXIgPSBlLmZvcm1hdHRlcjtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gdC5jaXBoZXJ0ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2lwaGVydGV4dCA9IHQuY2lwaGVydGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gdC5rZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXkgPSB0LmtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gdC5pdikge1xyXG4gICAgICAgICAgICB0aGlzLml2ID0gdC5pdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gdC5zYWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2FsdCA9IHQuc2FsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gdC5hbGdvcml0aG0pIHtcclxuICAgICAgICAgICAgdGhpcy5hbGdvcml0aG0gPSB0LmFsZ29yaXRobTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gdC5tb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9IHQubW9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gdC5wYWRkaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFkZGluZyA9IHQucGFkZGluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gdC5ibG9ja1NpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja1NpemUgPSB0LmJsb2NrU2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gdC5mb3JtYXR0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0ZXIgPSB0LmZvcm1hdHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0LnN0cmluZ2lmeSh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0dGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlci5zdHJpbmdpZnkodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNpcGhlciBuZWVkcyBhIGZvcm1hdHRlciB0byBiZSBhYmxlIHRvIGNvbnZlcnQgdGhlIHJlc3VsdCBpbnRvIGEgc3RyaW5nXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBlO1xyXG59KShyZXF1aXJlKFwiLi9CYXNlXCIpLkJhc2UpO1xyXG5leHBvcnRzLkNpcGhlclBhcmFtcyA9IHM7XHJcbiJdfQ==