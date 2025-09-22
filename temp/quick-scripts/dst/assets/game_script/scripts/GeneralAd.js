
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/GeneralAd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2cd4f3XwopP5agdcqWyAx8/', 'GeneralAd');
// game_script/scripts/GeneralAd.js

"use strict";

exports.GeneralAd = void 0;

var o = function () {
  function t() {}

  t.prototype.showRewardedVideo = function (t, e, i) {
    setTimeout(function () {
      if (i) {
        i();
      }
    }, 300);
    console.warn("当前渠道不支持showRewardedVideo");
  };

  t.prototype.showBanner = function () {
    console.warn("当前渠道不支持showBanner");
  };

  t.prototype.hideBanner = function () {
    console.warn("当前渠道不支持hideBanner");
  };

  t.prototype.forbiddenBanner = function () {
    console.warn("当前渠道不支持forbiddenBanner");
  };

  t.prototype.showInterstitial = function () {
    console.warn("当前渠道不支持showInterstitial");
  };

  t.prototype.share = function () {
    console.warn("当前渠道不支持share");
  };

  return t;
}();

exports.GeneralAd = o;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEdlbmVyYWxBZC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiR2VuZXJhbEFkIiwibyIsInQiLCJwcm90b3R5cGUiLCJzaG93UmV3YXJkZWRWaWRlbyIsImUiLCJpIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJ3YXJuIiwic2hvd0Jhbm5lciIsImhpZGVCYW5uZXIiLCJmb3JiaWRkZW5CYW5uZXIiLCJzaG93SW50ZXJzdGl0aWFsIiwic2hhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsU0FBUixHQUFvQixLQUFLLENBQXpCOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLFNBQUYsQ0FBWUMsaUJBQVosR0FBZ0MsVUFBVUYsQ0FBVixFQUFhRyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQjtJQUMvQ0MsVUFBVSxDQUFDLFlBQVk7TUFDbkIsSUFBSUQsQ0FBSixFQUFPO1FBQ0hBLENBQUM7TUFDSjtJQUNKLENBSlMsRUFJUCxHQUpPLENBQVY7SUFLQUUsT0FBTyxDQUFDQyxJQUFSLENBQWEsMEJBQWI7RUFDSCxDQVBEOztFQVFBUCxDQUFDLENBQUNDLFNBQUYsQ0FBWU8sVUFBWixHQUF5QixZQUFZO0lBQ2pDRixPQUFPLENBQUNDLElBQVIsQ0FBYSxtQkFBYjtFQUNILENBRkQ7O0VBR0FQLENBQUMsQ0FBQ0MsU0FBRixDQUFZUSxVQUFaLEdBQXlCLFlBQVk7SUFDakNILE9BQU8sQ0FBQ0MsSUFBUixDQUFhLG1CQUFiO0VBQ0gsQ0FGRDs7RUFHQVAsQ0FBQyxDQUFDQyxTQUFGLENBQVlTLGVBQVosR0FBOEIsWUFBWTtJQUN0Q0osT0FBTyxDQUFDQyxJQUFSLENBQWEsd0JBQWI7RUFDSCxDQUZEOztFQUdBUCxDQUFDLENBQUNDLFNBQUYsQ0FBWVUsZ0JBQVosR0FBK0IsWUFBWTtJQUN2Q0wsT0FBTyxDQUFDQyxJQUFSLENBQWEseUJBQWI7RUFDSCxDQUZEOztFQUdBUCxDQUFDLENBQUNDLFNBQUYsQ0FBWVcsS0FBWixHQUFvQixZQUFZO0lBQzVCTixPQUFPLENBQUNDLElBQVIsQ0FBYSxjQUFiO0VBQ0gsQ0FGRDs7RUFHQSxPQUFPUCxDQUFQO0FBQ0gsQ0ExQk8sRUFBUjs7QUEyQkFILE9BQU8sQ0FBQ0MsU0FBUixHQUFvQkMsQ0FBcEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuR2VuZXJhbEFkID0gdm9pZCAwO1xyXG52YXIgbyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KCkge31cclxuICAgIHQucHJvdG90eXBlLnNob3dSZXdhcmRlZFZpZGVvID0gZnVuY3Rpb24gKHQsIGUsIGkpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGkpIHtcclxuICAgICAgICAgICAgICAgIGkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwi5b2T5YmN5rig6YGT5LiN5pSv5oyBc2hvd1Jld2FyZGVkVmlkZW9cIik7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuc2hvd0Jhbm5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCLlvZPliY3muKDpgZPkuI3mlK/mjIFzaG93QmFubmVyXCIpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmhpZGVCYW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwi5b2T5YmN5rig6YGT5LiN5pSv5oyBaGlkZUJhbm5lclwiKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5mb3JiaWRkZW5CYW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwi5b2T5YmN5rig6YGT5LiN5pSv5oyBZm9yYmlkZGVuQmFubmVyXCIpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLnNob3dJbnRlcnN0aXRpYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwi5b2T5YmN5rig6YGT5LiN5pSv5oyBc2hvd0ludGVyc3RpdGlhbFwiKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5zaGFyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCLlvZPliY3muKDpgZPkuI3mlK/mjIFzaGFyZVwiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5HZW5lcmFsQWQgPSBvO1xyXG4iXX0=