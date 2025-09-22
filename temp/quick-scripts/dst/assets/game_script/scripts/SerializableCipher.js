
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/SerializableCipher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4593dJfvgFJ9onj9EIMkVbs', 'SerializableCipher');
// game_script/scripts/SerializableCipher.js

"use strict";

exports.SerializableCipher = void 0;

var $wordArray = require("./WordArray");

var $openSSL = require("./OpenSSL");

var $cipherParams = require("./CipherParams");

var r = function () {
  function t() {}

  t.encrypt = function (t, e, i, o) {
    var n = Object.assign({}, this.cfg, o);
    var r = t.createEncryptor(i, n);
    var a = r.finalize(e);
    return new $cipherParams.CipherParams({
      ciphertext: a,
      key: i,
      iv: r.cfg.iv,
      algorithm: t,
      mode: r.cfg.mode,
      padding: r.cfg.padding,
      blockSize: r.cfg.blockSize,
      formatter: n.format
    });
  };

  t.decrypt = function (t, e, i, o) {
    var n = Object.assign({}, this.cfg, o);

    if (!n.format) {
      throw new Error("could not determine format");
    }

    if (!(e = this._parse(e, n.format)).ciphertext) {
      throw new Error("could not determine ciphertext");
    }

    return t.createDecryptor(i, n).finalize(e.ciphertext);
  };

  t._parse = function (t, e) {
    return "string" == typeof t ? e.parse(t) : t;
  };

  t.cfg = {
    blockSize: 4,
    iv: new $wordArray.WordArray([]),
    format: $openSSL.OpenSSL
  };
  return t;
}();

exports.SerializableCipher = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNlcmlhbGl6YWJsZUNpcGhlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiU2VyaWFsaXphYmxlQ2lwaGVyIiwiJHdvcmRBcnJheSIsInJlcXVpcmUiLCIkb3BlblNTTCIsIiRjaXBoZXJQYXJhbXMiLCJyIiwidCIsImVuY3J5cHQiLCJlIiwiaSIsIm8iLCJuIiwiT2JqZWN0IiwiYXNzaWduIiwiY2ZnIiwiY3JlYXRlRW5jcnlwdG9yIiwiYSIsImZpbmFsaXplIiwiQ2lwaGVyUGFyYW1zIiwiY2lwaGVydGV4dCIsImtleSIsIml2IiwiYWxnb3JpdGhtIiwibW9kZSIsInBhZGRpbmciLCJibG9ja1NpemUiLCJmb3JtYXR0ZXIiLCJmb3JtYXQiLCJkZWNyeXB0IiwiRXJyb3IiLCJfcGFyc2UiLCJjcmVhdGVEZWNyeXB0b3IiLCJwYXJzZSIsIldvcmRBcnJheSIsIk9wZW5TU0wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0Msa0JBQVIsR0FBNkIsS0FBSyxDQUFsQzs7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlDLFFBQVEsR0FBR0QsT0FBTyxDQUFDLFdBQUQsQ0FBdEI7O0FBQ0EsSUFBSUUsYUFBYSxHQUFHRixPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhLENBQUU7O0VBQ2ZBLENBQUMsQ0FBQ0MsT0FBRixHQUFZLFVBQVVELENBQVYsRUFBYUUsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0lBQzlCLElBQUlDLENBQUMsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLQyxHQUF2QixFQUE0QkosQ0FBNUIsQ0FBUjtJQUNBLElBQUlMLENBQUMsR0FBR0MsQ0FBQyxDQUFDUyxlQUFGLENBQWtCTixDQUFsQixFQUFxQkUsQ0FBckIsQ0FBUjtJQUNBLElBQUlLLENBQUMsR0FBR1gsQ0FBQyxDQUFDWSxRQUFGLENBQVdULENBQVgsQ0FBUjtJQUNBLE9BQU8sSUFBSUosYUFBYSxDQUFDYyxZQUFsQixDQUErQjtNQUNsQ0MsVUFBVSxFQUFFSCxDQURzQjtNQUVsQ0ksR0FBRyxFQUFFWCxDQUY2QjtNQUdsQ1ksRUFBRSxFQUFFaEIsQ0FBQyxDQUFDUyxHQUFGLENBQU1PLEVBSHdCO01BSWxDQyxTQUFTLEVBQUVoQixDQUp1QjtNQUtsQ2lCLElBQUksRUFBRWxCLENBQUMsQ0FBQ1MsR0FBRixDQUFNUyxJQUxzQjtNQU1sQ0MsT0FBTyxFQUFFbkIsQ0FBQyxDQUFDUyxHQUFGLENBQU1VLE9BTm1CO01BT2xDQyxTQUFTLEVBQUVwQixDQUFDLENBQUNTLEdBQUYsQ0FBTVcsU0FQaUI7TUFRbENDLFNBQVMsRUFBRWYsQ0FBQyxDQUFDZ0I7SUFScUIsQ0FBL0IsQ0FBUDtFQVVILENBZEQ7O0VBZUFyQixDQUFDLENBQUNzQixPQUFGLEdBQVksVUFBVXRCLENBQVYsRUFBYUUsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0lBQzlCLElBQUlDLENBQUMsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLQyxHQUF2QixFQUE0QkosQ0FBNUIsQ0FBUjs7SUFDQSxJQUFJLENBQUNDLENBQUMsQ0FBQ2dCLE1BQVAsRUFBZTtNQUNYLE1BQU0sSUFBSUUsS0FBSixDQUFVLDRCQUFWLENBQU47SUFDSDs7SUFDRCxJQUFJLENBQUMsQ0FBQ3JCLENBQUMsR0FBRyxLQUFLc0IsTUFBTCxDQUFZdEIsQ0FBWixFQUFlRyxDQUFDLENBQUNnQixNQUFqQixDQUFMLEVBQStCUixVQUFwQyxFQUFnRDtNQUM1QyxNQUFNLElBQUlVLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0lBQ0g7O0lBQ0QsT0FBT3ZCLENBQUMsQ0FBQ3lCLGVBQUYsQ0FBa0J0QixDQUFsQixFQUFxQkUsQ0FBckIsRUFBd0JNLFFBQXhCLENBQWlDVCxDQUFDLENBQUNXLFVBQW5DLENBQVA7RUFDSCxDQVREOztFQVVBYixDQUFDLENBQUN3QixNQUFGLEdBQVcsVUFBVXhCLENBQVYsRUFBYUUsQ0FBYixFQUFnQjtJQUN2QixPQUFPLFlBQVksT0FBT0YsQ0FBbkIsR0FBdUJFLENBQUMsQ0FBQ3dCLEtBQUYsQ0FBUTFCLENBQVIsQ0FBdkIsR0FBb0NBLENBQTNDO0VBQ0gsQ0FGRDs7RUFHQUEsQ0FBQyxDQUFDUSxHQUFGLEdBQVE7SUFDSlcsU0FBUyxFQUFFLENBRFA7SUFFSkosRUFBRSxFQUFFLElBQUlwQixVQUFVLENBQUNnQyxTQUFmLENBQXlCLEVBQXpCLENBRkE7SUFHSk4sTUFBTSxFQUFFeEIsUUFBUSxDQUFDK0I7RUFIYixDQUFSO0VBS0EsT0FBTzVCLENBQVA7QUFDSCxDQXBDTyxFQUFSOztBQXFDQVAsT0FBTyxDQUFDQyxrQkFBUixHQUE2QkssQ0FBN0IiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuU2VyaWFsaXphYmxlQ2lwaGVyID0gdm9pZCAwO1xyXG52YXIgJHdvcmRBcnJheSA9IHJlcXVpcmUoXCIuL1dvcmRBcnJheVwiKTtcclxudmFyICRvcGVuU1NMID0gcmVxdWlyZShcIi4vT3BlblNTTFwiKTtcclxudmFyICRjaXBoZXJQYXJhbXMgPSByZXF1aXJlKFwiLi9DaXBoZXJQYXJhbXNcIik7XHJcbnZhciByID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7fVxyXG4gICAgdC5lbmNyeXB0ID0gZnVuY3Rpb24gKHQsIGUsIGksIG8pIHtcclxuICAgICAgICB2YXIgbiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY2ZnLCBvKTtcclxuICAgICAgICB2YXIgciA9IHQuY3JlYXRlRW5jcnlwdG9yKGksIG4pO1xyXG4gICAgICAgIHZhciBhID0gci5maW5hbGl6ZShlKTtcclxuICAgICAgICByZXR1cm4gbmV3ICRjaXBoZXJQYXJhbXMuQ2lwaGVyUGFyYW1zKHtcclxuICAgICAgICAgICAgY2lwaGVydGV4dDogYSxcclxuICAgICAgICAgICAga2V5OiBpLFxyXG4gICAgICAgICAgICBpdjogci5jZmcuaXYsXHJcbiAgICAgICAgICAgIGFsZ29yaXRobTogdCxcclxuICAgICAgICAgICAgbW9kZTogci5jZmcubW9kZSxcclxuICAgICAgICAgICAgcGFkZGluZzogci5jZmcucGFkZGluZyxcclxuICAgICAgICAgICAgYmxvY2tTaXplOiByLmNmZy5ibG9ja1NpemUsXHJcbiAgICAgICAgICAgIGZvcm1hdHRlcjogbi5mb3JtYXRcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0LmRlY3J5cHQgPSBmdW5jdGlvbiAodCwgZSwgaSwgbykge1xyXG4gICAgICAgIHZhciBuID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jZmcsIG8pO1xyXG4gICAgICAgIGlmICghbi5mb3JtYXQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGRldGVybWluZSBmb3JtYXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKGUgPSB0aGlzLl9wYXJzZShlLCBuLmZvcm1hdCkpLmNpcGhlcnRleHQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGRldGVybWluZSBjaXBoZXJ0ZXh0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdC5jcmVhdGVEZWNyeXB0b3IoaSwgbikuZmluYWxpemUoZS5jaXBoZXJ0ZXh0KTtcclxuICAgIH07XHJcbiAgICB0Ll9wYXJzZSA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgPyBlLnBhcnNlKHQpIDogdDtcclxuICAgIH07XHJcbiAgICB0LmNmZyA9IHtcclxuICAgICAgICBibG9ja1NpemU6IDQsXHJcbiAgICAgICAgaXY6IG5ldyAkd29yZEFycmF5LldvcmRBcnJheShbXSksXHJcbiAgICAgICAgZm9ybWF0OiAkb3BlblNTTC5PcGVuU1NMXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHQ7XHJcbn0pKCk7XHJcbmV4cG9ydHMuU2VyaWFsaXphYmxlQ2lwaGVyID0gcjtcclxuIl19