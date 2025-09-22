
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/PKCS7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '986dc9MCbhDQY+gbwTM8RRf', 'PKCS7');
// game_script/scripts/PKCS7.js

"use strict";

exports.PKCS7 = void 0;

var $wordArray = require("./WordArray");

var n = function () {
  function t() {}

  t.pad = function (t, e) {
    var i = 4 * e;
    var n = i - t.sigBytes % i;
    var s = n << 24 | n << 16 | n << 8 | n;
    var r = [];

    for (var a = 0; a < n; a += 4) {
      r.push(s);
    }

    var l = new $wordArray.WordArray(r, n);
    t.concat(l);
  };

  t.unpad = function (t) {
    var e = 255 & t.words[t.sigBytes - 1 >>> 2];
    t.sigBytes -= e;
  };

  return t;
}();

exports.PKCS7 = n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFBLQ1M3LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJQS0NTNyIsIiR3b3JkQXJyYXkiLCJyZXF1aXJlIiwibiIsInQiLCJwYWQiLCJlIiwiaSIsInNpZ0J5dGVzIiwicyIsInIiLCJhIiwicHVzaCIsImwiLCJXb3JkQXJyYXkiLCJjb25jYXQiLCJ1bnBhZCIsIndvcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLEtBQVIsR0FBZ0IsS0FBSyxDQUFyQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLEdBQUYsR0FBUSxVQUFVRCxDQUFWLEVBQWFFLENBQWIsRUFBZ0I7SUFDcEIsSUFBSUMsQ0FBQyxHQUFHLElBQUlELENBQVo7SUFDQSxJQUFJSCxDQUFDLEdBQUdJLENBQUMsR0FBSUgsQ0FBQyxDQUFDSSxRQUFGLEdBQWFELENBQTFCO0lBQ0EsSUFBSUUsQ0FBQyxHQUFJTixDQUFDLElBQUksRUFBTixHQUFhQSxDQUFDLElBQUksRUFBbEIsR0FBeUJBLENBQUMsSUFBSSxDQUE5QixHQUFtQ0EsQ0FBM0M7SUFDQSxJQUFJTyxDQUFDLEdBQUcsRUFBUjs7SUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdSLENBQXBCLEVBQXVCUSxDQUFDLElBQUksQ0FBNUIsRUFBK0I7TUFDM0JELENBQUMsQ0FBQ0UsSUFBRixDQUFPSCxDQUFQO0lBQ0g7O0lBQ0QsSUFBSUksQ0FBQyxHQUFHLElBQUlaLFVBQVUsQ0FBQ2EsU0FBZixDQUF5QkosQ0FBekIsRUFBNEJQLENBQTVCLENBQVI7SUFDQUMsQ0FBQyxDQUFDVyxNQUFGLENBQVNGLENBQVQ7RUFDSCxDQVZEOztFQVdBVCxDQUFDLENBQUNZLEtBQUYsR0FBVSxVQUFVWixDQUFWLEVBQWE7SUFDbkIsSUFBSUUsQ0FBQyxHQUFHLE1BQU1GLENBQUMsQ0FBQ2EsS0FBRixDQUFTYixDQUFDLENBQUNJLFFBQUYsR0FBYSxDQUFkLEtBQXFCLENBQTdCLENBQWQ7SUFDQUosQ0FBQyxDQUFDSSxRQUFGLElBQWNGLENBQWQ7RUFDSCxDQUhEOztFQUlBLE9BQU9GLENBQVA7QUFDSCxDQWxCTyxFQUFSOztBQW1CQUwsT0FBTyxDQUFDQyxLQUFSLEdBQWdCRyxDQUFoQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5QS0NTNyA9IHZvaWQgMDtcclxudmFyICR3b3JkQXJyYXkgPSByZXF1aXJlKFwiLi9Xb3JkQXJyYXlcIik7XHJcbnZhciBuID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7fVxyXG4gICAgdC5wYWQgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHZhciBpID0gNCAqIGU7XHJcbiAgICAgICAgdmFyIG4gPSBpIC0gKHQuc2lnQnl0ZXMgJSBpKTtcclxuICAgICAgICB2YXIgcyA9IChuIDw8IDI0KSB8IChuIDw8IDE2KSB8IChuIDw8IDgpIHwgbjtcclxuICAgICAgICB2YXIgciA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgbjsgYSArPSA0KSB7XHJcbiAgICAgICAgICAgIHIucHVzaChzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGwgPSBuZXcgJHdvcmRBcnJheS5Xb3JkQXJyYXkociwgbik7XHJcbiAgICAgICAgdC5jb25jYXQobCk7XHJcbiAgICB9O1xyXG4gICAgdC51bnBhZCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSAyNTUgJiB0LndvcmRzWyh0LnNpZ0J5dGVzIC0gMSkgPj4+IDJdO1xyXG4gICAgICAgIHQuc2lnQnl0ZXMgLT0gZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5QS0NTNyA9IG47XHJcbiJdfQ==