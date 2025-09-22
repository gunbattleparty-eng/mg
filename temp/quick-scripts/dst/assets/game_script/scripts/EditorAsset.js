
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/EditorAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ecaemYAbtLfIVKn++fTl3Q', 'EditorAsset');
// game_script/scripts/EditorAsset.js

"use strict";

var o = function () {
  function t() {}

  t.load = function () {
    return new Promise(function (t) {
      t(null);
      return void cc.warn("[EditorAsset]", "该函数只在编辑器环境内有效！");
    });
  };

  return t;
}();

exports["default"] = o;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVkaXRvckFzc2V0LmpzIl0sIm5hbWVzIjpbIm8iLCJ0IiwibG9hZCIsIlByb21pc2UiLCJjYyIsIndhcm4iLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLElBQUYsR0FBUyxZQUFZO0lBQ2pCLE9BQU8sSUFBSUMsT0FBSixDQUFZLFVBQVVGLENBQVYsRUFBYTtNQUM1QkEsQ0FBQyxDQUFDLElBQUQsQ0FBRDtNQUNBLE9BQU8sS0FBS0csRUFBRSxDQUFDQyxJQUFILENBQVEsZUFBUixFQUF5QixnQkFBekIsQ0FBWjtJQUNILENBSE0sQ0FBUDtFQUlILENBTEQ7O0VBTUEsT0FBT0osQ0FBUDtBQUNILENBVE8sRUFBUjs7QUFVQUssT0FBTyxXQUFQLEdBQWtCTixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG8gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdCgpIHt9XHJcbiAgICB0LmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHQobnVsbCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2b2lkIGNjLndhcm4oXCJbRWRpdG9yQXNzZXRdXCIsIFwi6K+l5Ye95pWw5Y+q5Zyo57yW6L6R5Zmo546v5aKD5YaF5pyJ5pWI77yBXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0O1xyXG59KSgpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBvO1xyXG4iXX0=