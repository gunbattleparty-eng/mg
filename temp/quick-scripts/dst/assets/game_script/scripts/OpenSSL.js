
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/OpenSSL.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71d41gWwxFILYLRI/LFsY1C', 'OpenSSL');
// game_script/scripts/OpenSSL.js

"use strict";

exports.OpenSSL = void 0;

var $cipherParams = require("./CipherParams");

var $wordArray = require("./WordArray");

var $base64 = require("./Base64");

var r = function () {
  function t() {}

  t.stringify = function (t) {
    if (!t.ciphertext) {
      throw new Error("missing ciphertext in params");
    }

    var e;
    var i = t.ciphertext;
    var o = t.salt;

    if (o) {
      if ("string" == typeof o) {
        throw new Error("salt is expected to be a WordArray");
      }

      e = new $wordArray.WordArray([1398893684, 1701076831]).concat(o).concat(i);
    } else {
      e = i;
    }

    return e.toString($base64.Base64);
  };

  t.parse = function (t) {
    var e;
    var i = $base64.Base64.parse(t);

    if (1398893684 === i.words[0] && 1701076831 === i.words[1]) {
      e = new $wordArray.WordArray(i.words.slice(2, 4));
      i.words.splice(0, 4);
      i.sigBytes -= 16;
    }

    return new $cipherParams.CipherParams({
      ciphertext: i,
      salt: e
    });
  };

  return t;
}();

exports.OpenSSL = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXE9wZW5TU0wuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIk9wZW5TU0wiLCIkY2lwaGVyUGFyYW1zIiwicmVxdWlyZSIsIiR3b3JkQXJyYXkiLCIkYmFzZTY0IiwiciIsInQiLCJzdHJpbmdpZnkiLCJjaXBoZXJ0ZXh0IiwiRXJyb3IiLCJlIiwiaSIsIm8iLCJzYWx0IiwiV29yZEFycmF5IiwiY29uY2F0IiwidG9TdHJpbmciLCJCYXNlNjQiLCJwYXJzZSIsIndvcmRzIiwic2xpY2UiLCJzcGxpY2UiLCJzaWdCeXRlcyIsIkNpcGhlclBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxPQUFSLEdBQWtCLEtBQUssQ0FBdkI7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHQyxPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxPQUFPLEdBQUdGLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlHLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLFNBQUYsR0FBYyxVQUFVRCxDQUFWLEVBQWE7SUFDdkIsSUFBSSxDQUFDQSxDQUFDLENBQUNFLFVBQVAsRUFBbUI7TUFDZixNQUFNLElBQUlDLEtBQUosQ0FBVSw4QkFBVixDQUFOO0lBQ0g7O0lBQ0QsSUFBSUMsQ0FBSjtJQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDRSxVQUFWO0lBQ0EsSUFBSUksQ0FBQyxHQUFHTixDQUFDLENBQUNPLElBQVY7O0lBQ0EsSUFBSUQsQ0FBSixFQUFPO01BQ0gsSUFBSSxZQUFZLE9BQU9BLENBQXZCLEVBQTBCO1FBQ3RCLE1BQU0sSUFBSUgsS0FBSixDQUFVLG9DQUFWLENBQU47TUFDSDs7TUFDREMsQ0FBQyxHQUFHLElBQUlQLFVBQVUsQ0FBQ1csU0FBZixDQUF5QixDQUFDLFVBQUQsRUFBYSxVQUFiLENBQXpCLEVBQW1EQyxNQUFuRCxDQUEwREgsQ0FBMUQsRUFBNkRHLE1BQTdELENBQW9FSixDQUFwRSxDQUFKO0lBQ0gsQ0FMRCxNQUtPO01BQ0hELENBQUMsR0FBR0MsQ0FBSjtJQUNIOztJQUNELE9BQU9ELENBQUMsQ0FBQ00sUUFBRixDQUFXWixPQUFPLENBQUNhLE1BQW5CLENBQVA7RUFDSCxDQWhCRDs7RUFpQkFYLENBQUMsQ0FBQ1ksS0FBRixHQUFVLFVBQVVaLENBQVYsRUFBYTtJQUNuQixJQUFJSSxDQUFKO0lBQ0EsSUFBSUMsQ0FBQyxHQUFHUCxPQUFPLENBQUNhLE1BQVIsQ0FBZUMsS0FBZixDQUFxQlosQ0FBckIsQ0FBUjs7SUFDQSxJQUFJLGVBQWVLLENBQUMsQ0FBQ1EsS0FBRixDQUFRLENBQVIsQ0FBZixJQUE2QixlQUFlUixDQUFDLENBQUNRLEtBQUYsQ0FBUSxDQUFSLENBQWhELEVBQTREO01BQ3hEVCxDQUFDLEdBQUcsSUFBSVAsVUFBVSxDQUFDVyxTQUFmLENBQXlCSCxDQUFDLENBQUNRLEtBQUYsQ0FBUUMsS0FBUixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBekIsQ0FBSjtNQUNBVCxDQUFDLENBQUNRLEtBQUYsQ0FBUUUsTUFBUixDQUFlLENBQWYsRUFBa0IsQ0FBbEI7TUFDQVYsQ0FBQyxDQUFDVyxRQUFGLElBQWMsRUFBZDtJQUNIOztJQUNELE9BQU8sSUFBSXJCLGFBQWEsQ0FBQ3NCLFlBQWxCLENBQStCO01BQ2xDZixVQUFVLEVBQUVHLENBRHNCO01BRWxDRSxJQUFJLEVBQUVIO0lBRjRCLENBQS9CLENBQVA7RUFJSCxDQVpEOztFQWFBLE9BQU9KLENBQVA7QUFDSCxDQWpDTyxFQUFSOztBQWtDQVAsT0FBTyxDQUFDQyxPQUFSLEdBQWtCSyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5PcGVuU1NMID0gdm9pZCAwO1xyXG52YXIgJGNpcGhlclBhcmFtcyA9IHJlcXVpcmUoXCIuL0NpcGhlclBhcmFtc1wiKTtcclxudmFyICR3b3JkQXJyYXkgPSByZXF1aXJlKFwiLi9Xb3JkQXJyYXlcIik7XHJcbnZhciAkYmFzZTY0ID0gcmVxdWlyZShcIi4vQmFzZTY0XCIpO1xyXG52YXIgciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KCkge31cclxuICAgIHQuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBpZiAoIXQuY2lwaGVydGV4dCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtaXNzaW5nIGNpcGhlcnRleHQgaW4gcGFyYW1zXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZTtcclxuICAgICAgICB2YXIgaSA9IHQuY2lwaGVydGV4dDtcclxuICAgICAgICB2YXIgbyA9IHQuc2FsdDtcclxuICAgICAgICBpZiAobykge1xyXG4gICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2Ygbykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2FsdCBpcyBleHBlY3RlZCB0byBiZSBhIFdvcmRBcnJheVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlID0gbmV3ICR3b3JkQXJyYXkuV29yZEFycmF5KFsxMzk4ODkzNjg0LCAxNzAxMDc2ODMxXSkuY29uY2F0KG8pLmNvbmNhdChpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGUudG9TdHJpbmcoJGJhc2U2NC5CYXNlNjQpO1xyXG4gICAgfTtcclxuICAgIHQucGFyc2UgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlO1xyXG4gICAgICAgIHZhciBpID0gJGJhc2U2NC5CYXNlNjQucGFyc2UodCk7XHJcbiAgICAgICAgaWYgKDEzOTg4OTM2ODQgPT09IGkud29yZHNbMF0gJiYgMTcwMTA3NjgzMSA9PT0gaS53b3Jkc1sxXSkge1xyXG4gICAgICAgICAgICBlID0gbmV3ICR3b3JkQXJyYXkuV29yZEFycmF5KGkud29yZHMuc2xpY2UoMiwgNCkpO1xyXG4gICAgICAgICAgICBpLndvcmRzLnNwbGljZSgwLCA0KTtcclxuICAgICAgICAgICAgaS5zaWdCeXRlcyAtPSAxNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkY2lwaGVyUGFyYW1zLkNpcGhlclBhcmFtcyh7XHJcbiAgICAgICAgICAgIGNpcGhlcnRleHQ6IGksXHJcbiAgICAgICAgICAgIHNhbHQ6IGVcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5PcGVuU1NMID0gcjtcclxuIl19