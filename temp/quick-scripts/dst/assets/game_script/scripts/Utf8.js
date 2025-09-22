
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Utf8.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13ebeUwT75Hvbyy9EXduUFI', 'Utf8');
// game_script/scripts/Utf8.js

"use strict";

exports.Utf8 = void 0;

var $latin1 = require("./Latin1");

var n = function () {
  function t() {}

  t.stringify = function (t) {
    try {
      return decodeURIComponent(escape($latin1.Latin1.stringify(t)));
    } catch (t) {
      throw new Error("Malformed UTF-8 data");
    }
  };

  t.parse = function (t) {
    return $latin1.Latin1.parse(unescape(encodeURIComponent(t)));
  };

  return t;
}();

exports.Utf8 = n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFV0ZjguanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIlV0ZjgiLCIkbGF0aW4xIiwicmVxdWlyZSIsIm4iLCJ0Iiwic3RyaW5naWZ5IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXNjYXBlIiwiTGF0aW4xIiwiRXJyb3IiLCJwYXJzZSIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLElBQVIsR0FBZSxLQUFLLENBQXBCOztBQUNBLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhLENBQUU7O0VBQ2ZBLENBQUMsQ0FBQ0MsU0FBRixHQUFjLFVBQVVELENBQVYsRUFBYTtJQUN2QixJQUFJO01BQ0EsT0FBT0Usa0JBQWtCLENBQUNDLE1BQU0sQ0FBQ04sT0FBTyxDQUFDTyxNQUFSLENBQWVILFNBQWYsQ0FBeUJELENBQXpCLENBQUQsQ0FBUCxDQUF6QjtJQUNILENBRkQsQ0FFRSxPQUFPQSxDQUFQLEVBQVU7TUFDUixNQUFNLElBQUlLLEtBQUosQ0FBVSxzQkFBVixDQUFOO0lBQ0g7RUFDSixDQU5EOztFQU9BTCxDQUFDLENBQUNNLEtBQUYsR0FBVSxVQUFVTixDQUFWLEVBQWE7SUFDbkIsT0FBT0gsT0FBTyxDQUFDTyxNQUFSLENBQWVFLEtBQWYsQ0FBcUJDLFFBQVEsQ0FBQ0Msa0JBQWtCLENBQUNSLENBQUQsQ0FBbkIsQ0FBN0IsQ0FBUDtFQUNILENBRkQ7O0VBR0EsT0FBT0EsQ0FBUDtBQUNILENBYk8sRUFBUjs7QUFjQUwsT0FBTyxDQUFDQyxJQUFSLEdBQWVHLENBQWYiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuVXRmOCA9IHZvaWQgMDtcclxudmFyICRsYXRpbjEgPSByZXF1aXJlKFwiLi9MYXRpbjFcIik7XHJcbnZhciBuID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7fVxyXG4gICAgdC5zdHJpbmdpZnkgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKCRsYXRpbjEuTGF0aW4xLnN0cmluZ2lmeSh0KSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWFsZm9ybWVkIFVURi04IGRhdGFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHQucGFyc2UgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiAkbGF0aW4xLkxhdGluMS5wYXJzZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQodCkpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5VdGY4ID0gbjtcclxuIl19