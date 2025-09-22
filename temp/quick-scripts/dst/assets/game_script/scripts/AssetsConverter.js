
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/AssetsConverter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14292pWlbxHqrb130KiNfoi', 'AssetsConverter');
// game_script/scripts/AssetsConverter.js

"use strict";

exports.AssetsConverter = void 0;

var $resManager = require("./ResManager");

var $assetsMap = require("./AssetsMap");

var s = function () {
  function t() {
    this.isInit = !1;
  }

  t.prototype.execute = function () {
    if (this.isInit) {
      console.warn("资源初始化已执行过，请勿重复执行");
    } else {
      var t = Object.keys($assetsMap.AssetsMap.bundleAssetsMap);

      for (var e = 0; e < t.length; e++) {
        var i = $assetsMap.AssetsMap.bundleAssetsMap[t[e]];

        for (var o in i) {
          var s = i[o];
          this.assetsLists(t[e], s.assetsType, s.assetsList);
        }
      }
    }
  };

  t.prototype.assetsLists = function (t, e, i) {
    for (var n in i) {
      $resManager.ResManager.instance.putAssets(t, e, i[n]);
    }
  };

  t.instance = new t();
  return t;
}();

exports.AssetsConverter = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEFzc2V0c0NvbnZlcnRlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiQXNzZXRzQ29udmVydGVyIiwiJHJlc01hbmFnZXIiLCJyZXF1aXJlIiwiJGFzc2V0c01hcCIsInMiLCJ0IiwiaXNJbml0IiwicHJvdG90eXBlIiwiZXhlY3V0ZSIsImNvbnNvbGUiLCJ3YXJuIiwiT2JqZWN0Iiwia2V5cyIsIkFzc2V0c01hcCIsImJ1bmRsZUFzc2V0c01hcCIsImUiLCJsZW5ndGgiLCJpIiwibyIsImFzc2V0c0xpc3RzIiwiYXNzZXRzVHlwZSIsImFzc2V0c0xpc3QiLCJuIiwiUmVzTWFuYWdlciIsImluc3RhbmNlIiwicHV0QXNzZXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLGVBQVIsR0FBMEIsS0FBSyxDQUEvQjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlDLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUUsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsS0FBS0MsTUFBTCxHQUFjLENBQUMsQ0FBZjtFQUNIOztFQUNERCxDQUFDLENBQUNFLFNBQUYsQ0FBWUMsT0FBWixHQUFzQixZQUFZO0lBQzlCLElBQUksS0FBS0YsTUFBVCxFQUFpQjtNQUNiRyxPQUFPLENBQUNDLElBQVIsQ0FBYSxrQkFBYjtJQUNILENBRkQsTUFFTztNQUNILElBQUlMLENBQUMsR0FBR00sTUFBTSxDQUFDQyxJQUFQLENBQVlULFVBQVUsQ0FBQ1UsU0FBWCxDQUFxQkMsZUFBakMsQ0FBUjs7TUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdWLENBQUMsQ0FBQ1csTUFBdEIsRUFBOEJELENBQUMsRUFBL0IsRUFBbUM7UUFDL0IsSUFBSUUsQ0FBQyxHQUFHZCxVQUFVLENBQUNVLFNBQVgsQ0FBcUJDLGVBQXJCLENBQXFDVCxDQUFDLENBQUNVLENBQUQsQ0FBdEMsQ0FBUjs7UUFDQSxLQUFLLElBQUlHLENBQVQsSUFBY0QsQ0FBZCxFQUFpQjtVQUNiLElBQUliLENBQUMsR0FBR2EsQ0FBQyxDQUFDQyxDQUFELENBQVQ7VUFDQSxLQUFLQyxXQUFMLENBQWlCZCxDQUFDLENBQUNVLENBQUQsQ0FBbEIsRUFBdUJYLENBQUMsQ0FBQ2dCLFVBQXpCLEVBQXFDaEIsQ0FBQyxDQUFDaUIsVUFBdkM7UUFDSDtNQUNKO0lBQ0o7RUFDSixDQWJEOztFQWNBaEIsQ0FBQyxDQUFDRSxTQUFGLENBQVlZLFdBQVosR0FBMEIsVUFBVWQsQ0FBVixFQUFhVSxDQUFiLEVBQWdCRSxDQUFoQixFQUFtQjtJQUN6QyxLQUFLLElBQUlLLENBQVQsSUFBY0wsQ0FBZDtNQUFpQmhCLFdBQVcsQ0FBQ3NCLFVBQVosQ0FBdUJDLFFBQXZCLENBQWdDQyxTQUFoQyxDQUEwQ3BCLENBQTFDLEVBQTZDVSxDQUE3QyxFQUFnREUsQ0FBQyxDQUFDSyxDQUFELENBQWpEO0lBQWpCO0VBQ0gsQ0FGRDs7RUFHQWpCLENBQUMsQ0FBQ21CLFFBQUYsR0FBYSxJQUFJbkIsQ0FBSixFQUFiO0VBQ0EsT0FBT0EsQ0FBUDtBQUNILENBdkJPLEVBQVI7O0FBd0JBTixPQUFPLENBQUNDLGVBQVIsR0FBMEJJLENBQTFCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLkFzc2V0c0NvbnZlcnRlciA9IHZvaWQgMDtcclxudmFyICRyZXNNYW5hZ2VyID0gcmVxdWlyZShcIi4vUmVzTWFuYWdlclwiKTtcclxudmFyICRhc3NldHNNYXAgPSByZXF1aXJlKFwiLi9Bc3NldHNNYXBcIik7XHJcbnZhciBzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0luaXQgPSAhMTtcclxuICAgIH1cclxuICAgIHQucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIui1hOa6kOWIneWni+WMluW3suaJp+ihjOi/h++8jOivt+WLv+mHjeWkjeaJp+ihjFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdCA9IE9iamVjdC5rZXlzKCRhc3NldHNNYXAuQXNzZXRzTWFwLmJ1bmRsZUFzc2V0c01hcCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdC5sZW5ndGg7IGUrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGkgPSAkYXNzZXRzTWFwLkFzc2V0c01hcC5idW5kbGVBc3NldHNNYXBbdFtlXV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvIGluIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGlbb107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldHNMaXN0cyh0W2VdLCBzLmFzc2V0c1R5cGUsIHMuYXNzZXRzTGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuYXNzZXRzTGlzdHMgPSBmdW5jdGlvbiAodCwgZSwgaSkge1xyXG4gICAgICAgIGZvciAodmFyIG4gaW4gaSkgJHJlc01hbmFnZXIuUmVzTWFuYWdlci5pbnN0YW5jZS5wdXRBc3NldHModCwgZSwgaVtuXSk7XHJcbiAgICB9O1xyXG4gICAgdC5pbnN0YW5jZSA9IG5ldyB0KCk7XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5Bc3NldHNDb252ZXJ0ZXIgPSBzO1xyXG4iXX0=