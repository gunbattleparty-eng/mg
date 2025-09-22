
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Latin1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6040HO8B1MZbdriSIbTK0v', 'Latin1');
// game_script/scripts/Latin1.js

"use strict";

exports.Latin1 = void 0;

var $wordArray = require("./WordArray");

var n = function () {
  function t() {}

  t.stringify = function (t) {
    var e = [];

    for (var i = 0; i < t.sigBytes; i++) {
      var o = t.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      e.push(String.fromCharCode(o));
    }

    return e.join("");
  };

  t.parse = function (t) {
    var e = t.length;
    var i = [];

    for (var n = 0; n < e; n++) {
      i[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
    }

    return new $wordArray.WordArray(i, e);
  };

  return t;
}();

exports.Latin1 = n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXExhdGluMS5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiTGF0aW4xIiwiJHdvcmRBcnJheSIsInJlcXVpcmUiLCJuIiwidCIsInN0cmluZ2lmeSIsImUiLCJpIiwic2lnQnl0ZXMiLCJvIiwid29yZHMiLCJwdXNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiam9pbiIsInBhcnNlIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsIldvcmRBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxNQUFSLEdBQWlCLEtBQUssQ0FBdEI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWEsQ0FBRTs7RUFDZkEsQ0FBQyxDQUFDQyxTQUFGLEdBQWMsVUFBVUQsQ0FBVixFQUFhO0lBQ3ZCLElBQUlFLENBQUMsR0FBRyxFQUFSOztJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxRQUF0QixFQUFnQ0QsQ0FBQyxFQUFqQyxFQUFxQztNQUNqQyxJQUFJRSxDQUFDLEdBQUlMLENBQUMsQ0FBQ00sS0FBRixDQUFRSCxDQUFDLEtBQUssQ0FBZCxNQUFzQixLQUFNQSxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQXRDLEdBQTRDLEdBQXBEO01BQ0FELENBQUMsQ0FBQ0ssSUFBRixDQUFPQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JKLENBQXBCLENBQVA7SUFDSDs7SUFDRCxPQUFPSCxDQUFDLENBQUNRLElBQUYsQ0FBTyxFQUFQLENBQVA7RUFDSCxDQVBEOztFQVFBVixDQUFDLENBQUNXLEtBQUYsR0FBVSxVQUFVWCxDQUFWLEVBQWE7SUFDbkIsSUFBSUUsQ0FBQyxHQUFHRixDQUFDLENBQUNZLE1BQVY7SUFDQSxJQUFJVCxDQUFDLEdBQUcsRUFBUjs7SUFDQSxLQUFLLElBQUlKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdHLENBQXBCLEVBQXVCSCxDQUFDLEVBQXhCLEVBQTRCO01BQ3hCSSxDQUFDLENBQUNKLENBQUMsS0FBSyxDQUFQLENBQUQsSUFBYyxDQUFDLE1BQU1DLENBQUMsQ0FBQ2EsVUFBRixDQUFhZCxDQUFiLENBQVAsS0FBNEIsS0FBTUEsQ0FBQyxHQUFHLENBQUwsR0FBVSxDQUF6RDtJQUNIOztJQUNELE9BQU8sSUFBSUYsVUFBVSxDQUFDaUIsU0FBZixDQUF5QlgsQ0FBekIsRUFBNEJELENBQTVCLENBQVA7RUFDSCxDQVBEOztFQVFBLE9BQU9GLENBQVA7QUFDSCxDQW5CTyxFQUFSOztBQW9CQUwsT0FBTyxDQUFDQyxNQUFSLEdBQWlCRyxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5MYXRpbjEgPSB2b2lkIDA7XHJcbnZhciAkd29yZEFycmF5ID0gcmVxdWlyZShcIi4vV29yZEFycmF5XCIpO1xyXG52YXIgbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KCkge31cclxuICAgIHQuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5zaWdCeXRlczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvID0gKHQud29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAyNTU7XHJcbiAgICAgICAgICAgIGUucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKG8pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGUuam9pbihcIlwiKTtcclxuICAgIH07XHJcbiAgICB0LnBhcnNlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9IHQubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlOyBuKyspIHtcclxuICAgICAgICAgICAgaVtuID4+PiAyXSB8PSAoMjU1ICYgdC5jaGFyQ29kZUF0KG4pKSA8PCAoMjQgLSAobiAlIDQpICogOCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJHdvcmRBcnJheS5Xb3JkQXJyYXkoaSwgZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHQ7XHJcbn0pKCk7XHJcbmV4cG9ydHMuTGF0aW4xID0gbjtcclxuIl19