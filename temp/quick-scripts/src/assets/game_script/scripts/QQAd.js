"use strict";
cc._RF.push(module, '22794Q1rYZIQ77Dp57EKwU/', 'QQAd');
// game_script/scripts/QQAd.js

"use strict";

var o;
exports.QQAd = void 0;

var $aDConfig = require("./ADConfig");

var $baseAd = require("./BaseAd");

var $qQAppBox = require("./QQAppBox");

var $qQBanner = require("./QQBanner");

var $qQBlock = require("./QQBlock");

var $qQInterstitial = require("./QQInterstitial");

var $qQRewardedVideo = require("./QQRewardedVideo");

var $qQShare = require("./QQShare");

var f = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.qqReward = null;
    e.qqBanner = null;
    e.qqInterstitial = null;
    e.qqShare = null;
    e.qqAppBox = null;
    e.qqBlock = null;
    console.warn("初始化QQ广告...");
    e.qqReward = new $qQRewardedVideo.QQRewardedVideo();
    e.qqReward.initAd($aDConfig.ADConfig.qq.rewarded_video_id);
    e.qqBanner = new $qQBanner.QQBanner();
    e.qqBanner.initAd($aDConfig.ADConfig.qq.banner_id);
    e.qqInterstitial = new $qQInterstitial["default"]();
    e.qqInterstitial.initAd($aDConfig.ADConfig.qq.interstitial_id);
    e.qqAppBox = new $qQAppBox["default"]();
    e.qqAppBox.initAd($aDConfig.ADConfig.qq.app_box_id);
    e.qqBlock = new $qQBlock.QQBlock();
    e.qqBlock.initAd($aDConfig.ADConfig.qq.block_id);
    e.qqShare = new $qQShare["default"]();
    e.qqShare.init();
    return e;
  }

  __extends(e, t);

  e.prototype.showRewardedVideo = function (t, e, i) {
    if ("" !== $aDConfig.ADConfig.qq.rewarded_video_id) {
      this.qqReward.showRewardedVideo(t, e, i);
    }
  };

  e.prototype.showBanner = function (t, e, i) {
    if ("" !== $aDConfig.ADConfig.qq.banner_id) {
      this.qqBanner.showBanner(t, e, i);
    }
  };

  e.prototype.hideBanner = function (t) {
    if ("" !== $aDConfig.ADConfig.qq.banner_id) {
      this.qqBanner.hideBanner(t);
    }
  };

  e.prototype.forbiddenBanner = function (t) {
    if ("" !== $aDConfig.ADConfig.qq.banner_id) {
      this.qqBanner.forbiddenBanner(t);
    }
  };

  e.prototype.showInterstitial = function (t, e, i) {
    if ("" !== $aDConfig.ADConfig.qq.interstitial_id) {
      this.qqInterstitial.showInterstitial(t, e, i);
    }
  };

  e.prototype.showAppBox = function (t, e, i) {
    if ("" !== $aDConfig.ADConfig.qq.app_box_id) {
      this.qqAppBox.showAppBox(t, e, i);
    }
  };

  e.prototype.share = function (t) {
    if (void 0 === t) {
      t = null;
    }

    if (!t) {
      t = {
        share_title: $aDConfig.ADConfig.qq.share_title,
        share_imageUrl: $aDConfig.ADConfig.qq.share_imageUrl
      };
    }

    this.qqShare.share(t);
  };

  e.prototype.showBlock = function (t, e, i) {
    if ("" !== $aDConfig.ADConfig.qq.block_id) {
      this.qqBlock.showBlock({
        top: 100
      }, e, i);
    }
  };

  e.prototype.hideBlock = function (t) {
    if ("" !== $aDConfig.ADConfig.qq.block_id) {
      this.qqBlock.hideBlock(t);
    }
  };

  e.prototype.forbiddenBlock = function (t) {
    if ("" !== $aDConfig.ADConfig.qq.block_id) {
      this.qqBlock.forbiddenBlock(t);
    }
  };

  return e;
}($baseAd.BaseAd);

exports.QQAd = f;

cc._RF.pop();