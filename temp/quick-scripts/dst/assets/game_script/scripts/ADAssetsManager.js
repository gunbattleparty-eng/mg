
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ADAssetsManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9d66pLTURJBZ6W7IpQlyRF', 'ADAssetsManager');
// game_script/scripts/ADAssetsManager.js

"use strict";

exports.adAssetsMap = void 0;
exports.adAssetsMap = {
  prefabs: {
    NativeIcon: "/prefabs/NativeIcon",
    NativeInterstitial_HW: "/prefabs/NativeInterstitial_HW"
  }
};

var o = function () {
  function t() {
    this._adBundle = null;
    this._bundleName = "ad";
  }

  Object.defineProperty(t, "instance", {
    get: function get() {
      if (!t._instance) {
        t._instance = new t();
      }

      return t._instance;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.loadBund = function () {
    var t = this;
    return new Promise(function (e, i) {
      if (cc.isValid(t._adBundle)) {
        return e(t._adBundle);
      }

      cc.assetManager.loadBundle(t._bundleName, {
        onFileProgress: function onFileProgress() {}
      }, function (o, n) {
        return o ? (console.error("ad bundle load fail", o), i(o)) : (t._adBundle = n, e(t._adBundle));
      });
    });
  };

  t.prototype.loadRes = function (t, e) {
    var i = this;
    return new Promise(function (o, n) {
      i._adBundle.load(t, e, function () {}, function (t, e) {
        t ? n(t) : o(e);
      });
    });
  };

  t.prototype.createNodeByPreloading = function (t) {
    console.log(this._adBundle);

    if (!this._adBundle) {
      console.error("UIManager", "createNodeByPreloading error,bundle ad_assets unloaded");
      return null;
    }

    var e = this._adBundle.get(t, cc.Prefab);

    if (!e || null == e) {
      console.error("UIManager", "createNodeByPreloading error,url: " + t + "  unloaded");
      return null;
    }

    if (!(e instanceof cc.Prefab)) {
      console.error("UIManager", "createNodeByPreloading error,url: " + t + "  not prefab");
      return null;
    }

    var i = cc.instantiate(e);
    return i && null != i ? i : (console.error("UIManager", "createNodeByPreloading fail,url: " + t + "  create node is null"), null);
  };

  t._instance = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEFEQXNzZXRzTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiYWRBc3NldHNNYXAiLCJwcmVmYWJzIiwiTmF0aXZlSWNvbiIsIk5hdGl2ZUludGVyc3RpdGlhbF9IVyIsIm8iLCJ0IiwiX2FkQnVuZGxlIiwiX2J1bmRsZU5hbWUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9pbnN0YW5jZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJwcm90b3R5cGUiLCJsb2FkQnVuZCIsIlByb21pc2UiLCJlIiwiaSIsImNjIiwiaXNWYWxpZCIsImFzc2V0TWFuYWdlciIsImxvYWRCdW5kbGUiLCJvbkZpbGVQcm9ncmVzcyIsIm4iLCJjb25zb2xlIiwiZXJyb3IiLCJsb2FkUmVzIiwibG9hZCIsImNyZWF0ZU5vZGVCeVByZWxvYWRpbmciLCJsb2ciLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxXQUFSLEdBQXNCLEtBQUssQ0FBM0I7QUFDQUQsT0FBTyxDQUFDQyxXQUFSLEdBQXNCO0VBQ2xCQyxPQUFPLEVBQUU7SUFDTEMsVUFBVSxFQUFFLHFCQURQO0lBRUxDLHFCQUFxQixFQUFFO0VBRmxCO0FBRFMsQ0FBdEI7O0FBTUEsSUFBSUMsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsS0FBS0MsU0FBTCxHQUFpQixJQUFqQjtJQUNBLEtBQUtDLFdBQUwsR0FBbUIsSUFBbkI7RUFDSDs7RUFDREMsTUFBTSxDQUFDQyxjQUFQLENBQXNCSixDQUF0QixFQUF5QixVQUF6QixFQUFxQztJQUNqQ0ssR0FBRyxFQUFFLGVBQVk7TUFDYixJQUFJLENBQUNMLENBQUMsQ0FBQ00sU0FBUCxFQUFrQjtRQUNkTixDQUFDLENBQUNNLFNBQUYsR0FBYyxJQUFJTixDQUFKLEVBQWQ7TUFDSDs7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OztFQW9CQUEsQ0FBQyxDQUFDTSxTQUFGLEdBQWMsSUFBZDtFQUNBLE9BQU9OLENBQVA7QUFDSCxDQW5FTyxFQUFSOztBQW9FQU4sT0FBTyxXQUFQLEdBQWtCSyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5hZEFzc2V0c01hcCA9IHZvaWQgMDtcclxuZXhwb3J0cy5hZEFzc2V0c01hcCA9IHtcclxuICAgIHByZWZhYnM6IHtcclxuICAgICAgICBOYXRpdmVJY29uOiBcIi9wcmVmYWJzL05hdGl2ZUljb25cIixcclxuICAgICAgICBOYXRpdmVJbnRlcnN0aXRpYWxfSFc6IFwiL3ByZWZhYnMvTmF0aXZlSW50ZXJzdGl0aWFsX0hXXCJcclxuICAgIH1cclxufTtcclxudmFyIG8gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdCgpIHtcclxuICAgICAgICB0aGlzLl9hZEJ1bmRsZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fYnVuZGxlTmFtZSA9IFwiYWRcIjtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcImluc3RhbmNlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0Ll9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgdC5faW5zdGFuY2UgPSBuZXcgdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0Ll9pbnN0YW5jZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcclxuICAgIH0pO1xyXG4gICAgdC5wcm90b3R5cGUubG9hZEJ1bmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0Ll9hZEJ1bmRsZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlKHQuX2FkQnVuZGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShcclxuICAgICAgICAgICAgICAgIHQuX2J1bmRsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25GaWxlUHJvZ3Jlc3M6IGZ1bmN0aW9uICgpIHt9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKG8sIG4pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbyA/IChjb25zb2xlLmVycm9yKFwiYWQgYnVuZGxlIGxvYWQgZmFpbFwiLCBvKSwgaShvKSkgOiAoKHQuX2FkQnVuZGxlID0gbiksIGUodC5fYWRCdW5kbGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5sb2FkUmVzID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB2YXIgaSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICAgICAgICAgIGkuX2FkQnVuZGxlLmxvYWQoXHJcbiAgICAgICAgICAgICAgICB0LFxyXG4gICAgICAgICAgICAgICAgZSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ID8gbih0KSA6IG8oZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuY3JlYXRlTm9kZUJ5UHJlbG9hZGluZyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fYWRCdW5kbGUpO1xyXG4gICAgICAgIGlmICghdGhpcy5fYWRCdW5kbGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVJTWFuYWdlclwiLCBcImNyZWF0ZU5vZGVCeVByZWxvYWRpbmcgZXJyb3IsYnVuZGxlIGFkX2Fzc2V0cyB1bmxvYWRlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlID0gdGhpcy5fYWRCdW5kbGUuZ2V0KHQsIGNjLlByZWZhYik7XHJcbiAgICAgICAgaWYgKCFlIHx8IG51bGwgPT0gZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVUlNYW5hZ2VyXCIsIFwiY3JlYXRlTm9kZUJ5UHJlbG9hZGluZyBlcnJvcix1cmw6IFwiICsgdCArIFwiICB1bmxvYWRlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBjYy5QcmVmYWIpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVSU1hbmFnZXJcIiwgXCJjcmVhdGVOb2RlQnlQcmVsb2FkaW5nIGVycm9yLHVybDogXCIgKyB0ICsgXCIgIG5vdCBwcmVmYWJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaSA9IGNjLmluc3RhbnRpYXRlKGUpO1xyXG4gICAgICAgIHJldHVybiBpICYmIG51bGwgIT0gaVxyXG4gICAgICAgICAgICA/IGlcclxuICAgICAgICAgICAgOiAoY29uc29sZS5lcnJvcihcIlVJTWFuYWdlclwiLCBcImNyZWF0ZU5vZGVCeVByZWxvYWRpbmcgZmFpbCx1cmw6IFwiICsgdCArIFwiICBjcmVhdGUgbm9kZSBpcyBudWxsXCIpLCBudWxsKTtcclxuICAgIH07XHJcbiAgICB0Ll9pbnN0YW5jZSA9IG51bGw7XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gbztcclxuIl19