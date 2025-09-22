
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/PasswordBasedCipher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a89bf2t86tDR6wW5I7PbY9Q', 'PasswordBasedCipher');
// game_script/scripts/PasswordBasedCipher.js

"use strict";

exports.PasswordBasedCipher = void 0;

var $serializableCipher = require("./SerializableCipher");

var $wordArray = require("./WordArray");

var $openSSL = require("./OpenSSL");

var $openSSLKdf = require("./OpenSSLKdf");

var a = function () {
  function t() {}

  t.encrypt = function (t, e, i, n) {
    var s = Object.assign({}, this.cfg, n);

    if (void 0 === s.kdf) {
      throw new Error("missing kdf in config");
    }

    var r = s.kdf.execute(i, t.keySize, t.ivSize);

    if (void 0 !== r.iv) {
      s.iv = r.iv;
    }

    return $serializableCipher.SerializableCipher.encrypt.call(this, t, e, r.key, s).extend(r);
  };

  t.decrypt = function (t, e, i, n) {
    var s = Object.assign({}, this.cfg, n);

    if (void 0 === s.format) {
      throw new Error("missing format in config");
    }

    e = this._parse(e, s.format);

    if (void 0 === s.kdf) {
      throw new Error("the key derivation function must be set");
    }

    var r = s.kdf.execute(i, t.keySize, t.ivSize, e.salt);

    if (void 0 !== r.iv) {
      s.iv = r.iv;
    }

    return $serializableCipher.SerializableCipher.decrypt.call(this, t, e, r.key, s);
  };

  t._parse = function (t, e) {
    return "string" == typeof t ? e.parse(t) : t;
  };

  t.cfg = {
    blockSize: 4,
    iv: new $wordArray.WordArray([]),
    format: $openSSL.OpenSSL,
    kdf: $openSSLKdf.OpenSSLKdf
  };
  return t;
}();

exports.PasswordBasedCipher = a;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFBhc3N3b3JkQmFzZWRDaXBoZXIuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIlBhc3N3b3JkQmFzZWRDaXBoZXIiLCIkc2VyaWFsaXphYmxlQ2lwaGVyIiwicmVxdWlyZSIsIiR3b3JkQXJyYXkiLCIkb3BlblNTTCIsIiRvcGVuU1NMS2RmIiwiYSIsInQiLCJlbmNyeXB0IiwiZSIsImkiLCJuIiwicyIsIk9iamVjdCIsImFzc2lnbiIsImNmZyIsImtkZiIsIkVycm9yIiwiciIsImV4ZWN1dGUiLCJrZXlTaXplIiwiaXZTaXplIiwiaXYiLCJTZXJpYWxpemFibGVDaXBoZXIiLCJjYWxsIiwia2V5IiwiZXh0ZW5kIiwiZGVjcnlwdCIsImZvcm1hdCIsIl9wYXJzZSIsInNhbHQiLCJwYXJzZSIsImJsb2NrU2l6ZSIsIldvcmRBcnJheSIsIk9wZW5TU0wiLCJPcGVuU1NMS2RmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLG1CQUFSLEdBQThCLEtBQUssQ0FBbkM7O0FBQ0EsSUFBSUMsbUJBQW1CLEdBQUdDLE9BQU8sQ0FBQyxzQkFBRCxDQUFqQzs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlFLFFBQVEsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdEI7O0FBQ0EsSUFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJSSxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWEsQ0FBRTs7RUFDZkEsQ0FBQyxDQUFDQyxPQUFGLEdBQVksVUFBVUQsQ0FBVixFQUFhRSxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0I7SUFDOUIsSUFBSUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtDLEdBQXZCLEVBQTRCSixDQUE1QixDQUFSOztJQUNBLElBQUksS0FBSyxDQUFMLEtBQVdDLENBQUMsQ0FBQ0ksR0FBakIsRUFBc0I7TUFDbEIsTUFBTSxJQUFJQyxLQUFKLENBQVUsdUJBQVYsQ0FBTjtJQUNIOztJQUNELElBQUlDLENBQUMsR0FBR04sQ0FBQyxDQUFDSSxHQUFGLENBQU1HLE9BQU4sQ0FBY1QsQ0FBZCxFQUFpQkgsQ0FBQyxDQUFDYSxPQUFuQixFQUE0QmIsQ0FBQyxDQUFDYyxNQUE5QixDQUFSOztJQUNBLElBQUksS0FBSyxDQUFMLEtBQVdILENBQUMsQ0FBQ0ksRUFBakIsRUFBcUI7TUFDakJWLENBQUMsQ0FBQ1UsRUFBRixHQUFPSixDQUFDLENBQUNJLEVBQVQ7SUFDSDs7SUFDRCxPQUFPckIsbUJBQW1CLENBQUNzQixrQkFBcEIsQ0FBdUNmLE9BQXZDLENBQStDZ0IsSUFBL0MsQ0FBb0QsSUFBcEQsRUFBMERqQixDQUExRCxFQUE2REUsQ0FBN0QsRUFBZ0VTLENBQUMsQ0FBQ08sR0FBbEUsRUFBdUViLENBQXZFLEVBQTBFYyxNQUExRSxDQUFpRlIsQ0FBakYsQ0FBUDtFQUNILENBVkQ7O0VBV0FYLENBQUMsQ0FBQ29CLE9BQUYsR0FBWSxVQUFVcEIsQ0FBVixFQUFhRSxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0I7SUFDOUIsSUFBSUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtDLEdBQXZCLEVBQTRCSixDQUE1QixDQUFSOztJQUNBLElBQUksS0FBSyxDQUFMLEtBQVdDLENBQUMsQ0FBQ2dCLE1BQWpCLEVBQXlCO01BQ3JCLE1BQU0sSUFBSVgsS0FBSixDQUFVLDBCQUFWLENBQU47SUFDSDs7SUFDRFIsQ0FBQyxHQUFHLEtBQUtvQixNQUFMLENBQVlwQixDQUFaLEVBQWVHLENBQUMsQ0FBQ2dCLE1BQWpCLENBQUo7O0lBQ0EsSUFBSSxLQUFLLENBQUwsS0FBV2hCLENBQUMsQ0FBQ0ksR0FBakIsRUFBc0I7TUFDbEIsTUFBTSxJQUFJQyxLQUFKLENBQVUseUNBQVYsQ0FBTjtJQUNIOztJQUNELElBQUlDLENBQUMsR0FBR04sQ0FBQyxDQUFDSSxHQUFGLENBQU1HLE9BQU4sQ0FBY1QsQ0FBZCxFQUFpQkgsQ0FBQyxDQUFDYSxPQUFuQixFQUE0QmIsQ0FBQyxDQUFDYyxNQUE5QixFQUFzQ1osQ0FBQyxDQUFDcUIsSUFBeEMsQ0FBUjs7SUFDQSxJQUFJLEtBQUssQ0FBTCxLQUFXWixDQUFDLENBQUNJLEVBQWpCLEVBQXFCO01BQ2pCVixDQUFDLENBQUNVLEVBQUYsR0FBT0osQ0FBQyxDQUFDSSxFQUFUO0lBQ0g7O0lBQ0QsT0FBT3JCLG1CQUFtQixDQUFDc0Isa0JBQXBCLENBQXVDSSxPQUF2QyxDQUErQ0gsSUFBL0MsQ0FBb0QsSUFBcEQsRUFBMERqQixDQUExRCxFQUE2REUsQ0FBN0QsRUFBZ0VTLENBQUMsQ0FBQ08sR0FBbEUsRUFBdUViLENBQXZFLENBQVA7RUFDSCxDQWREOztFQWVBTCxDQUFDLENBQUNzQixNQUFGLEdBQVcsVUFBVXRCLENBQVYsRUFBYUUsQ0FBYixFQUFnQjtJQUN2QixPQUFPLFlBQVksT0FBT0YsQ0FBbkIsR0FBdUJFLENBQUMsQ0FBQ3NCLEtBQUYsQ0FBUXhCLENBQVIsQ0FBdkIsR0FBb0NBLENBQTNDO0VBQ0gsQ0FGRDs7RUFHQUEsQ0FBQyxDQUFDUSxHQUFGLEdBQVE7SUFDSmlCLFNBQVMsRUFBRSxDQURQO0lBRUpWLEVBQUUsRUFBRSxJQUFJbkIsVUFBVSxDQUFDOEIsU0FBZixDQUF5QixFQUF6QixDQUZBO0lBR0pMLE1BQU0sRUFBRXhCLFFBQVEsQ0FBQzhCLE9BSGI7SUFJSmxCLEdBQUcsRUFBRVgsV0FBVyxDQUFDOEI7RUFKYixDQUFSO0VBTUEsT0FBTzVCLENBQVA7QUFDSCxDQXRDTyxFQUFSOztBQXVDQVIsT0FBTyxDQUFDQyxtQkFBUixHQUE4Qk0sQ0FBOUIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuUGFzc3dvcmRCYXNlZENpcGhlciA9IHZvaWQgMDtcclxudmFyICRzZXJpYWxpemFibGVDaXBoZXIgPSByZXF1aXJlKFwiLi9TZXJpYWxpemFibGVDaXBoZXJcIik7XHJcbnZhciAkd29yZEFycmF5ID0gcmVxdWlyZShcIi4vV29yZEFycmF5XCIpO1xyXG52YXIgJG9wZW5TU0wgPSByZXF1aXJlKFwiLi9PcGVuU1NMXCIpO1xyXG52YXIgJG9wZW5TU0xLZGYgPSByZXF1aXJlKFwiLi9PcGVuU1NMS2RmXCIpO1xyXG52YXIgYSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KCkge31cclxuICAgIHQuZW5jcnlwdCA9IGZ1bmN0aW9uICh0LCBlLCBpLCBuKSB7XHJcbiAgICAgICAgdmFyIHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNmZywgbik7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gcy5rZGYpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWlzc2luZyBrZGYgaW4gY29uZmlnXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgciA9IHMua2RmLmV4ZWN1dGUoaSwgdC5rZXlTaXplLCB0Lml2U2l6ZSk7XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gci5pdikge1xyXG4gICAgICAgICAgICBzLml2ID0gci5pdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICRzZXJpYWxpemFibGVDaXBoZXIuU2VyaWFsaXphYmxlQ2lwaGVyLmVuY3J5cHQuY2FsbCh0aGlzLCB0LCBlLCByLmtleSwgcykuZXh0ZW5kKHIpO1xyXG4gICAgfTtcclxuICAgIHQuZGVjcnlwdCA9IGZ1bmN0aW9uICh0LCBlLCBpLCBuKSB7XHJcbiAgICAgICAgdmFyIHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNmZywgbik7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gcy5mb3JtYXQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWlzc2luZyBmb3JtYXQgaW4gY29uZmlnXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlID0gdGhpcy5fcGFyc2UoZSwgcy5mb3JtYXQpO1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IHMua2RmKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRoZSBrZXkgZGVyaXZhdGlvbiBmdW5jdGlvbiBtdXN0IGJlIHNldFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHIgPSBzLmtkZi5leGVjdXRlKGksIHQua2V5U2l6ZSwgdC5pdlNpemUsIGUuc2FsdCk7XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gci5pdikge1xyXG4gICAgICAgICAgICBzLml2ID0gci5pdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICRzZXJpYWxpemFibGVDaXBoZXIuU2VyaWFsaXphYmxlQ2lwaGVyLmRlY3J5cHQuY2FsbCh0aGlzLCB0LCBlLCByLmtleSwgcyk7XHJcbiAgICB9O1xyXG4gICAgdC5fcGFyc2UgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiB0ID8gZS5wYXJzZSh0KSA6IHQ7XHJcbiAgICB9O1xyXG4gICAgdC5jZmcgPSB7XHJcbiAgICAgICAgYmxvY2tTaXplOiA0LFxyXG4gICAgICAgIGl2OiBuZXcgJHdvcmRBcnJheS5Xb3JkQXJyYXkoW10pLFxyXG4gICAgICAgIGZvcm1hdDogJG9wZW5TU0wuT3BlblNTTCxcclxuICAgICAgICBrZGY6ICRvcGVuU1NMS2RmLk9wZW5TU0xLZGZcclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5QYXNzd29yZEJhc2VkQ2lwaGVyID0gYTtcclxuIl19