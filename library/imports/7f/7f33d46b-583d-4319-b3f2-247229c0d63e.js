"use strict";
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