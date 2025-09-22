
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/OpenSSLKdf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c27bQNu2xOlYYwbZjVhMUH', 'OpenSSLKdf');
// game_script/scripts/OpenSSLKdf.js

"use strict";

exports.OpenSSLKdf = void 0;

var $wordArray = require("./WordArray");

var $cipherParams = require("./CipherParams");

var $evpKDF = require("./EvpKDF");

var r = function () {
  function t() {}

  t.execute = function (t, e, i, r) {
    if (!r) {
      r = $wordArray.WordArray.random(8);
    }

    var a = new $evpKDF.EvpKDF({
      keySize: e + i
    }).compute(t, r);
    var l = new $wordArray.WordArray(a.words.slice(e), 4 * i);
    a.sigBytes = 4 * e;
    return new $cipherParams.CipherParams({
      key: a,
      iv: l,
      salt: r
    });
  };

  return t;
}();

exports.OpenSSLKdf = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXE9wZW5TU0xLZGYuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIk9wZW5TU0xLZGYiLCIkd29yZEFycmF5IiwicmVxdWlyZSIsIiRjaXBoZXJQYXJhbXMiLCIkZXZwS0RGIiwiciIsInQiLCJleGVjdXRlIiwiZSIsImkiLCJXb3JkQXJyYXkiLCJyYW5kb20iLCJhIiwiRXZwS0RGIiwia2V5U2l6ZSIsImNvbXB1dGUiLCJsIiwid29yZHMiLCJzbGljZSIsInNpZ0J5dGVzIiwiQ2lwaGVyUGFyYW1zIiwia2V5IiwiaXYiLCJzYWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLFVBQVIsR0FBcUIsS0FBSyxDQUExQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlFLE9BQU8sR0FBR0YsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhLENBQUU7O0VBQ2ZBLENBQUMsQ0FBQ0MsT0FBRixHQUFZLFVBQVVELENBQVYsRUFBYUUsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJKLENBQW5CLEVBQXNCO0lBQzlCLElBQUksQ0FBQ0EsQ0FBTCxFQUFRO01BQ0pBLENBQUMsR0FBR0osVUFBVSxDQUFDUyxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixDQUE1QixDQUFKO0lBQ0g7O0lBQ0QsSUFBSUMsQ0FBQyxHQUFHLElBQUlSLE9BQU8sQ0FBQ1MsTUFBWixDQUFtQjtNQUN2QkMsT0FBTyxFQUFFTixDQUFDLEdBQUdDO0lBRFUsQ0FBbkIsRUFFTE0sT0FGSyxDQUVHVCxDQUZILEVBRU1ELENBRk4sQ0FBUjtJQUdBLElBQUlXLENBQUMsR0FBRyxJQUFJZixVQUFVLENBQUNTLFNBQWYsQ0FBeUJFLENBQUMsQ0FBQ0ssS0FBRixDQUFRQyxLQUFSLENBQWNWLENBQWQsQ0FBekIsRUFBMkMsSUFBSUMsQ0FBL0MsQ0FBUjtJQUNBRyxDQUFDLENBQUNPLFFBQUYsR0FBYSxJQUFJWCxDQUFqQjtJQUNBLE9BQU8sSUFBSUwsYUFBYSxDQUFDaUIsWUFBbEIsQ0FBK0I7TUFDbENDLEdBQUcsRUFBRVQsQ0FENkI7TUFFbENVLEVBQUUsRUFBRU4sQ0FGOEI7TUFHbENPLElBQUksRUFBRWxCO0lBSDRCLENBQS9CLENBQVA7RUFLSCxDQWREOztFQWVBLE9BQU9DLENBQVA7QUFDSCxDQWxCTyxFQUFSOztBQW1CQVAsT0FBTyxDQUFDQyxVQUFSLEdBQXFCSyxDQUFyQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5PcGVuU1NMS2RmID0gdm9pZCAwO1xyXG52YXIgJHdvcmRBcnJheSA9IHJlcXVpcmUoXCIuL1dvcmRBcnJheVwiKTtcclxudmFyICRjaXBoZXJQYXJhbXMgPSByZXF1aXJlKFwiLi9DaXBoZXJQYXJhbXNcIik7XHJcbnZhciAkZXZwS0RGID0gcmVxdWlyZShcIi4vRXZwS0RGXCIpO1xyXG52YXIgciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KCkge31cclxuICAgIHQuZXhlY3V0ZSA9IGZ1bmN0aW9uICh0LCBlLCBpLCByKSB7XHJcbiAgICAgICAgaWYgKCFyKSB7XHJcbiAgICAgICAgICAgIHIgPSAkd29yZEFycmF5LldvcmRBcnJheS5yYW5kb20oOCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gbmV3ICRldnBLREYuRXZwS0RGKHtcclxuICAgICAgICAgICAga2V5U2l6ZTogZSArIGlcclxuICAgICAgICB9KS5jb21wdXRlKHQsIHIpO1xyXG4gICAgICAgIHZhciBsID0gbmV3ICR3b3JkQXJyYXkuV29yZEFycmF5KGEud29yZHMuc2xpY2UoZSksIDQgKiBpKTtcclxuICAgICAgICBhLnNpZ0J5dGVzID0gNCAqIGU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkY2lwaGVyUGFyYW1zLkNpcGhlclBhcmFtcyh7XHJcbiAgICAgICAgICAgIGtleTogYSxcclxuICAgICAgICAgICAgaXY6IGwsXHJcbiAgICAgICAgICAgIHNhbHQ6IHJcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5PcGVuU1NMS2RmID0gcjtcclxuIl19