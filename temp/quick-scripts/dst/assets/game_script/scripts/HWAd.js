
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/HWAd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a088eCrFHdM9J6cBj6ws7VN', 'HWAd');
// game_script/scripts/HWAd.js

"use strict";

var o;
exports.HWAd = void 0;

var $aDConfig = require("./ADConfig");

var $generalAd = require("./GeneralAd");

var $hWBanner = require("./HWBanner");

var $hWNativeAd = require("./HWNativeAd");

var $hWRewardedVideo = require("./HWRewardedVideo");

var u = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.hwReward = null;
    e.hwBanner = null;
    e.hwNativeInterstitial = null;
    console.warn("初始化OPPO广告...");
    e.hwReward = new $hWRewardedVideo.HWRewardedVideo();
    e.hwReward.initAd($aDConfig.ADConfig.huawei.rewarded_video_id);
    e.hwBanner = new $hWBanner.HWBanner();
    e.hwBanner.initAd($aDConfig.ADConfig.huawei.banner_id);
    e.hwNativeInterstitial = new $hWNativeAd.HWNativeAd();
    e.hwNativeInterstitial.initAd($aDConfig.ADConfig.huawei.native_interstitial_id);
    return e;
  }

  __extends(e, t);

  e.prototype.showRewardedVideo = function (t, e, i) {
    this.hwReward.showRewardedVideo(t, e, i);
  };

  e.prototype.showBanner = function (t, e, i) {
    this.hwBanner.showBanner(t, e, i);
  };

  e.prototype.hideBanner = function (t) {
    this.hwBanner.hideBanner(t);
  };

  e.prototype.forbiddenBanner = function (t) {
    this.hwBanner.forbiddenBanner(t);
  };

  e.prototype.showNativeInterstitial = function (t, e, i, o) {
    if ($aDConfig.ADConfig.huawei.native_interstitial_id) {
      this.hwNativeInterstitial.showNativeAd(t, e, i, o);
    }
  };

  e.prototype.forbiddenNativeAd = function (t) {
    if ($aDConfig.ADConfig.huawei.native_interstitial_id) {
      this.hwNativeInterstitial.forbidderAd(t);
    }
  };

  e.prototype.hideNativeAd = function (t) {
    if ($aDConfig.ADConfig.huawei.native_interstitial_id) {
      this.hwNativeInterstitial.hideNativeAd(t);
    }
  };

  return e;
}($generalAd.GeneralAd);

exports.HWAd = u;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEhXQWQuanMiXSwibmFtZXMiOlsibyIsImV4cG9ydHMiLCJIV0FkIiwiJGFEQ29uZmlnIiwicmVxdWlyZSIsIiRnZW5lcmFsQWQiLCIkaFdCYW5uZXIiLCIkaFdOYXRpdmVBZCIsIiRoV1Jld2FyZGVkVmlkZW8iLCJ1IiwidCIsImUiLCJjYWxsIiwiaHdSZXdhcmQiLCJod0Jhbm5lciIsImh3TmF0aXZlSW50ZXJzdGl0aWFsIiwiY29uc29sZSIsIndhcm4iLCJIV1Jld2FyZGVkVmlkZW8iLCJpbml0QWQiLCJBRENvbmZpZyIsImh1YXdlaSIsInJld2FyZGVkX3ZpZGVvX2lkIiwiSFdCYW5uZXIiLCJiYW5uZXJfaWQiLCJIV05hdGl2ZUFkIiwibmF0aXZlX2ludGVyc3RpdGlhbF9pZCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsInNob3dSZXdhcmRlZFZpZGVvIiwiaSIsInNob3dCYW5uZXIiLCJoaWRlQmFubmVyIiwiZm9yYmlkZGVuQmFubmVyIiwic2hvd05hdGl2ZUludGVyc3RpdGlhbCIsInNob3dOYXRpdmVBZCIsImZvcmJpZGRlbk5hdGl2ZUFkIiwiZm9yYmlkZGVyQWQiLCJoaWRlTmF0aXZlQWQiLCJHZW5lcmFsQWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxPQUFPLENBQUNDLElBQVIsR0FBZSxLQUFLLENBQXBCOztBQUNBLElBQUlDLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxZQUFELENBQXZCOztBQUNBLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUksZ0JBQWdCLEdBQUdKLE9BQU8sQ0FBQyxtQkFBRCxDQUE5Qjs7QUFDQSxJQUFJSyxDQUFD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LENBQUNpQixRQUFWLENBQW1CQyxNQUFuQixDQUEwQkssc0JBQTlCLEVBQXNEO01BQ2xELEtBQUtYLG9CQUFMLENBQTBCdUIsWUFBMUIsQ0FBdUM1QixDQUF2QztJQUNIO0VBQ0osQ0FKRDs7RUFLQSxPQUFPQyxDQUFQO0FBQ0gsQ0E1Q08sQ0E0Q0xOLFVBQVUsQ0FBQ2tDLFNBNUNOLENBQVI7O0FBNkNBdEMsT0FBTyxDQUFDQyxJQUFSLEdBQWVPLENBQWYiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG5leHBvcnRzLkhXQWQgPSB2b2lkIDA7XHJcbnZhciAkYURDb25maWcgPSByZXF1aXJlKFwiLi9BRENvbmZpZ1wiKTtcclxudmFyICRnZW5lcmFsQWQgPSByZXF1aXJlKFwiLi9HZW5lcmFsQWRcIik7XHJcbnZhciAkaFdCYW5uZXIgPSByZXF1aXJlKFwiLi9IV0Jhbm5lclwiKTtcclxudmFyICRoV05hdGl2ZUFkID0gcmVxdWlyZShcIi4vSFdOYXRpdmVBZFwiKTtcclxudmFyICRoV1Jld2FyZGVkVmlkZW8gPSByZXF1aXJlKFwiLi9IV1Jld2FyZGVkVmlkZW9cIik7XHJcbnZhciB1ID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gdC5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgZS5od1Jld2FyZCA9IG51bGw7XHJcbiAgICAgICAgZS5od0Jhbm5lciA9IG51bGw7XHJcbiAgICAgICAgZS5od05hdGl2ZUludGVyc3RpdGlhbCA9IG51bGw7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwi5Yid5aeL5YyWT1BQT+W5v+WRii4uLlwiKTtcclxuICAgICAgICBlLmh3UmV3YXJkID0gbmV3ICRoV1Jld2FyZGVkVmlkZW8uSFdSZXdhcmRlZFZpZGVvKCk7XHJcbiAgICAgICAgZS5od1Jld2FyZC5pbml0QWQoJGFEQ29uZmlnLkFEQ29uZmlnLmh1YXdlaS5yZXdhcmRlZF92aWRlb19pZCk7XHJcbiAgICAgICAgZS5od0Jhbm5lciA9IG5ldyAkaFdCYW5uZXIuSFdCYW5uZXIoKTtcclxuICAgICAgICBlLmh3QmFubmVyLmluaXRBZCgkYURDb25maWcuQURDb25maWcuaHVhd2VpLmJhbm5lcl9pZCk7XHJcbiAgICAgICAgZS5od05hdGl2ZUludGVyc3RpdGlhbCA9IG5ldyAkaFdOYXRpdmVBZC5IV05hdGl2ZUFkKCk7XHJcbiAgICAgICAgZS5od05hdGl2ZUludGVyc3RpdGlhbC5pbml0QWQoJGFEQ29uZmlnLkFEQ29uZmlnLmh1YXdlaS5uYXRpdmVfaW50ZXJzdGl0aWFsX2lkKTtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLnNob3dSZXdhcmRlZFZpZGVvID0gZnVuY3Rpb24gKHQsIGUsIGkpIHtcclxuICAgICAgICB0aGlzLmh3UmV3YXJkLnNob3dSZXdhcmRlZFZpZGVvKHQsIGUsIGkpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnNob3dCYW5uZXIgPSBmdW5jdGlvbiAodCwgZSwgaSkge1xyXG4gICAgICAgIHRoaXMuaHdCYW5uZXIuc2hvd0Jhbm5lcih0LCBlLCBpKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5oaWRlQmFubmVyID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLmh3QmFubmVyLmhpZGVCYW5uZXIodCk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuZm9yYmlkZGVuQmFubmVyID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLmh3QmFubmVyLmZvcmJpZGRlbkJhbm5lcih0KTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zaG93TmF0aXZlSW50ZXJzdGl0aWFsID0gZnVuY3Rpb24gKHQsIGUsIGksIG8pIHtcclxuICAgICAgICBpZiAoJGFEQ29uZmlnLkFEQ29uZmlnLmh1YXdlaS5uYXRpdmVfaW50ZXJzdGl0aWFsX2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHdOYXRpdmVJbnRlcnN0aXRpYWwuc2hvd05hdGl2ZUFkKHQsIGUsIGksIG8pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5mb3JiaWRkZW5OYXRpdmVBZCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKCRhRENvbmZpZy5BRENvbmZpZy5odWF3ZWkubmF0aXZlX2ludGVyc3RpdGlhbF9pZCkge1xyXG4gICAgICAgICAgICB0aGlzLmh3TmF0aXZlSW50ZXJzdGl0aWFsLmZvcmJpZGRlckFkKHQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5oaWRlTmF0aXZlQWQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICgkYURDb25maWcuQURDb25maWcuaHVhd2VpLm5hdGl2ZV9pbnRlcnN0aXRpYWxfaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5od05hdGl2ZUludGVyc3RpdGlhbC5oaWRlTmF0aXZlQWQodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBlO1xyXG59KSgkZ2VuZXJhbEFkLkdlbmVyYWxBZCk7XHJcbmV4cG9ydHMuSFdBZCA9IHU7XHJcbiJdfQ==