
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Hasher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '425b56euKxPzrMt9qI9qaan', 'Hasher');
// game_script/scripts/Hasher.js

"use strict";

var o;
exports.Hasher = void 0;

var s = function (t) {
  function e(e) {
    var i = t.call(this, Object.assign({
      blockSize: 16
    }, e)) || this;
    i.reset();
    return i;
  }

  __extends(e, t);

  e._createHelper = function (t) {
    return function (e, i) {
      return new t(i).finalize(e);
    };
  };

  e.prototype.update = function (t) {
    this._append(t);

    this._process();

    return this;
  };

  e.prototype.finalize = function (t) {
    if (t) {
      this._append(t);
    }

    return this._doFinalize();
  };

  return e;
}(require("./BufferedBlockAlgorithm").BufferedBlockAlgorithm);

exports.Hasher = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEhhc2hlci5qcyJdLCJuYW1lcyI6WyJvIiwiZXhwb3J0cyIsIkhhc2hlciIsInMiLCJ0IiwiZSIsImkiLCJjYWxsIiwiT2JqZWN0IiwiYXNzaWduIiwiYmxvY2tTaXplIiwicmVzZXQiLCJfX2V4dGVuZHMiLCJfY3JlYXRlSGVscGVyIiwiZmluYWxpemUiLCJwcm90b3R5cGUiLCJ1cGRhdGUiLCJfYXBwZW5kIiwiX3Byb2Nlc3MiLCJfZG9GaW5hbGl6ZSIsInJlcXVpcmUiLCJCdWZmZXJlZEJsb2NrQWxnb3JpdGhtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsT0FBTyxDQUFDQyxNQUFSLEdBQWlCLEtBQUssQ0FBdEI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULENBQVdBLENBQVgsRUFBYztJQUNWLElBQUlDLENBQUMsR0FDREYsQ0FBQyxDQUFDRyxJQUFGLENBQ0ksSUFESixFQUVJQyxNQUFNLENBQUNDLE1BQVAsQ0FDSTtNQUNJQyxTQUFTLEVBQUU7SUFEZixDQURKLEVBSUlMLENBSkosQ0FGSixLQVFLLElBVFQ7SUFVQUMsQ0FBQyxDQUFDSyxLQUFGO0lBQ0EsT0FBT0wsQ0FBUDtFQUNIOztFQUNETSxTQUFTLENBQUNQLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNRLGFBQUYsR0FBa0IsVUFBVVQsQ0FBVixFQUFhO0lBQzNCLE9BQU8sVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO01BQ25CLE9BQU8sSUFBSUYsQ0FBSixDQUFNRSxDQUFOLEVBQVNRLFFBQVQsQ0FBa0JULENBQWxCLENBQVA7SUFDSCxDQUZEO0VBR0gsQ0FKRDs7RUFLQUEsQ0FBQyxDQUFDVSxTQUFGLENBQVlDLE1BQVosR0FBcUIsVUFBVVosQ0FBVixFQUFhO0lBQzlCLEtBQUthLE9BQUwsQ0FBYWIsQ0FBYjs7SUFDQSxLQUFLYyxRQUFMOztJQUNBLE9BQU8sSUFBUDtFQUNILENBSkQ7O0VBS0FiLENBQUMsQ0FBQ1UsU0FBRixDQUFZRCxRQUFaLEdBQXVCLFVBQVVWLENBQVYsRUFBYTtJQUNoQyxJQUFJQSxDQUFKLEVBQU87TUFDSCxLQUFLYSxPQUFMLENBQWFiLENBQWI7SUFDSDs7SUFDRCxPQUFPLEtBQUtlLFdBQUwsRUFBUDtFQUNILENBTEQ7O0VBTUEsT0FBT2QsQ0FBUDtBQUNILENBakNPLENBaUNMZSxPQUFPLENBQUMsMEJBQUQsQ0FBUCxDQUFvQ0Msc0JBakMvQixDQUFSOztBQWtDQXBCLE9BQU8sQ0FBQ0MsTUFBUixHQUFpQkMsQ0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG5leHBvcnRzLkhhc2hlciA9IHZvaWQgMDtcclxudmFyIHMgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoZSkge1xyXG4gICAgICAgIHZhciBpID1cclxuICAgICAgICAgICAgdC5jYWxsKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja1NpemU6IDE2XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkgfHwgdGhpcztcclxuICAgICAgICBpLnJlc2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLl9jcmVhdGVIZWxwZXIgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHQoaSkuZmluYWxpemUoZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMuX2FwcGVuZCh0KTtcclxuICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuZmluYWxpemUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FwcGVuZCh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvRmluYWxpemUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZTtcclxufSkocmVxdWlyZShcIi4vQnVmZmVyZWRCbG9ja0FsZ29yaXRobVwiKS5CdWZmZXJlZEJsb2NrQWxnb3JpdGhtKTtcclxuZXhwb3J0cy5IYXNoZXIgPSBzO1xyXG4iXX0=