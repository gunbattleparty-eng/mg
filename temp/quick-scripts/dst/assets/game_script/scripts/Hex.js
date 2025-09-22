
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Hex.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bfd9aAj/dVDDpBJLmWiVu+y', 'Hex');
// game_script/scripts/Hex.js

"use strict";

exports.Hex = void 0;

var $wordArray = require("./WordArray");

var n = function () {
  function t() {}

  t.stringify = function (t) {
    var e = [];

    for (var i = 0; i < t.sigBytes; i++) {
      var o = t.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      e.push((o >>> 4).toString(16));
      e.push((15 & o).toString(16));
    }

    return e.join("");
  };

  t.parse = function (t) {
    var e = t.length;
    var i = [];

    for (var n = 0; n < e; n += 2) {
      i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
    }

    return new $wordArray.WordArray(i, e / 2);
  };

  return t;
}();

exports.Hex = n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEhleC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiSGV4IiwiJHdvcmRBcnJheSIsInJlcXVpcmUiLCJuIiwidCIsInN0cmluZ2lmeSIsImUiLCJpIiwic2lnQnl0ZXMiLCJvIiwid29yZHMiLCJwdXNoIiwidG9TdHJpbmciLCJqb2luIiwicGFyc2UiLCJsZW5ndGgiLCJwYXJzZUludCIsInN1YnN0ciIsIldvcmRBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFSLEdBQWMsS0FBSyxDQUFuQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLFNBQUYsR0FBYyxVQUFVRCxDQUFWLEVBQWE7SUFDdkIsSUFBSUUsQ0FBQyxHQUFHLEVBQVI7O0lBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLFFBQXRCLEVBQWdDRCxDQUFDLEVBQWpDLEVBQXFDO01BQ2pDLElBQUlFLENBQUMsR0FBSUwsQ0FBQyxDQUFDTSxLQUFGLENBQVFILENBQUMsS0FBSyxDQUFkLE1BQXNCLEtBQU1BLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBdEMsR0FBNEMsR0FBcEQ7TUFDQUQsQ0FBQyxDQUFDSyxJQUFGLENBQU8sQ0FBQ0YsQ0FBQyxLQUFLLENBQVAsRUFBVUcsUUFBVixDQUFtQixFQUFuQixDQUFQO01BQ0FOLENBQUMsQ0FBQ0ssSUFBRixDQUFPLENBQUMsS0FBS0YsQ0FBTixFQUFTRyxRQUFULENBQWtCLEVBQWxCLENBQVA7SUFDSDs7SUFDRCxPQUFPTixDQUFDLENBQUNPLElBQUYsQ0FBTyxFQUFQLENBQVA7RUFDSCxDQVJEOztFQVNBVCxDQUFDLENBQUNVLEtBQUYsR0FBVSxVQUFVVixDQUFWLEVBQWE7SUFDbkIsSUFBSUUsQ0FBQyxHQUFHRixDQUFDLENBQUNXLE1BQVY7SUFDQSxJQUFJUixDQUFDLEdBQUcsRUFBUjs7SUFDQSxLQUFLLElBQUlKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdHLENBQXBCLEVBQXVCSCxDQUFDLElBQUksQ0FBNUIsRUFBK0I7TUFDM0JJLENBQUMsQ0FBQ0osQ0FBQyxLQUFLLENBQVAsQ0FBRCxJQUFjYSxRQUFRLENBQUNaLENBQUMsQ0FBQ2EsTUFBRixDQUFTZCxDQUFULEVBQVksQ0FBWixDQUFELEVBQWlCLEVBQWpCLENBQVIsSUFBaUMsS0FBTUEsQ0FBQyxHQUFHLENBQUwsR0FBVSxDQUE5RDtJQUNIOztJQUNELE9BQU8sSUFBSUYsVUFBVSxDQUFDaUIsU0FBZixDQUF5QlgsQ0FBekIsRUFBNEJELENBQUMsR0FBRyxDQUFoQyxDQUFQO0VBQ0gsQ0FQRDs7RUFRQSxPQUFPRixDQUFQO0FBQ0gsQ0FwQk8sRUFBUjs7QUFxQkFMLE9BQU8sQ0FBQ0MsR0FBUixHQUFjRyxDQUFkIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLkhleCA9IHZvaWQgMDtcclxudmFyICR3b3JkQXJyYXkgPSByZXF1aXJlKFwiLi9Xb3JkQXJyYXlcIik7XHJcbnZhciBuID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7fVxyXG4gICAgdC5zdHJpbmdpZnkgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0LnNpZ0J5dGVzOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG8gPSAodC53b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDI1NTtcclxuICAgICAgICAgICAgZS5wdXNoKChvID4+PiA0KS50b1N0cmluZygxNikpO1xyXG4gICAgICAgICAgICBlLnB1c2goKDE1ICYgbykudG9TdHJpbmcoMTYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGUuam9pbihcIlwiKTtcclxuICAgIH07XHJcbiAgICB0LnBhcnNlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9IHQubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlOyBuICs9IDIpIHtcclxuICAgICAgICAgICAgaVtuID4+PiAzXSB8PSBwYXJzZUludCh0LnN1YnN0cihuLCAyKSwgMTYpIDw8ICgyNCAtIChuICUgOCkgKiA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkd29yZEFycmF5LldvcmRBcnJheShpLCBlIC8gMik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHQ7XHJcbn0pKCk7XHJcbmV4cG9ydHMuSGV4ID0gbjtcclxuIl19