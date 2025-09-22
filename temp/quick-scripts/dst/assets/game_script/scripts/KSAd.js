
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/KSAd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f33dRrWD1DGbPyJHIpwNY+', 'KSAd');
// game_script/scripts/KSAd.js

"use strict";

var o;
exports.KSAd = void 0;

var $aDConfig = require("./ADConfig");

var $generalAd = require("./GeneralAd");

var $kSRewardedVideo = require("./KSRewardedVideo");

var l = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.ksReward = null;
    console.warn("初始化KS广告...");
    e.ksReward = new $kSRewardedVideo["default"]();
    e.ksReward.initAd($aDConfig.ADConfig.ks.rewarded_video_id);
    return e;
  }

  __extends(e, t);

  e.prototype.showRewardedVideo = function (t, e, i) {
    this.ksReward.showRewardedVideo(t, e, i);
  };

  return e;
}($generalAd.GeneralAd);

exports.KSAd = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEtTQWQuanMiXSwibmFtZXMiOlsibyIsImV4cG9ydHMiLCJLU0FkIiwiJGFEQ29uZmlnIiwicmVxdWlyZSIsIiRnZW5lcmFsQWQiLCIka1NSZXdhcmRlZFZpZGVvIiwibCIsInQiLCJlIiwiY2FsbCIsImtzUmV3YXJkIiwiY29uc29sZSIsIndhcm4iLCJpbml0QWQiLCJBRENvbmZpZyIsImtzIiwicmV3YXJkZWRfdmlkZW9faWQiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJzaG93UmV3YXJkZWRWaWRlbyIsImkiLCJHZW5lcmFsQWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxPQUFPLENBQUNDLElBQVIsR0FBZSxLQUFLLENBQXBCOztBQUNBLElBQUlDLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxnQkFBZ0IsR0FBR0YsT0FBTyxDQUFDLG1CQUFELENBQTlCOztBQUNBLElBQUlHLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFHRCxDQUFDLENBQUNFLElBQUYsQ0FBTyxJQUFQLEtBQWdCLElBQXhCO0lBQ0FELENBQUMsQ0FBQ0UsUUFBRixHQUFhLElBQWI7SUFDQUMsT0FBTyxDQUFDQyxJQUFSLENBQWEsWUFBYjtJQUNBSixDQUFDLENBQUNFLFFBQUYsR0FBYSxJQUFJTCxnQkFBZ0IsV0FBcEIsRUFBYjtJQUNBRyxDQUFDLENBQUNFLFFBQUYsQ0FBV0csTUFBWCxDQUFrQlgsU0FBUyxDQUFDWSxRQUFWLENBQW1CQyxFQUFuQixDQUFzQkMsaUJBQXhDO0lBQ0EsT0FBT1IsQ0FBUDtFQUNIOztFQUNEUyxTQUFTLENBQUNULENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNVLFNBQUYsQ0FBWUMsaUJBQVosR0FBZ0MsVUFBVVosQ0FBVixFQUFhQyxDQUFiLEVBQWdCWSxDQUFoQixFQUFtQjtJQUMvQyxLQUFLVixRQUFMLENBQWNTLGlCQUFkLENBQWdDWixDQUFoQyxFQUFtQ0MsQ0FBbkMsRUFBc0NZLENBQXRDO0VBQ0gsQ0FGRDs7RUFHQSxPQUFPWixDQUFQO0FBQ0gsQ0FkTyxDQWNMSixVQUFVLENBQUNpQixTQWROLENBQVI7O0FBZUFyQixPQUFPLENBQUNDLElBQVIsR0FBZUssQ0FBZiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbmV4cG9ydHMuS1NBZCA9IHZvaWQgMDtcclxudmFyICRhRENvbmZpZyA9IHJlcXVpcmUoXCIuL0FEQ29uZmlnXCIpO1xyXG52YXIgJGdlbmVyYWxBZCA9IHJlcXVpcmUoXCIuL0dlbmVyYWxBZFwiKTtcclxudmFyICRrU1Jld2FyZGVkVmlkZW8gPSByZXF1aXJlKFwiLi9LU1Jld2FyZGVkVmlkZW9cIik7XHJcbnZhciBsID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gdC5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgZS5rc1Jld2FyZCA9IG51bGw7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwi5Yid5aeL5YyWS1Plub/lkYouLi5cIik7XHJcbiAgICAgICAgZS5rc1Jld2FyZCA9IG5ldyAka1NSZXdhcmRlZFZpZGVvLmRlZmF1bHQoKTtcclxuICAgICAgICBlLmtzUmV3YXJkLmluaXRBZCgkYURDb25maWcuQURDb25maWcua3MucmV3YXJkZWRfdmlkZW9faWQpO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUuc2hvd1Jld2FyZGVkVmlkZW8gPSBmdW5jdGlvbiAodCwgZSwgaSkge1xyXG4gICAgICAgIHRoaXMua3NSZXdhcmQuc2hvd1Jld2FyZGVkVmlkZW8odCwgZSwgaSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGU7XHJcbn0pKCRnZW5lcmFsQWQuR2VuZXJhbEFkKTtcclxuZXhwb3J0cy5LU0FkID0gbDtcclxuIl19