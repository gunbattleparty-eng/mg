"use strict";
cc._RF.push(module, '7ede7MFz5ZHDY/OJdbIpb5J', 'VIVOAd');
// game_script/scripts/VIVOAd.js

"use strict";

var o;
exports.VIVOAd = void 0;

var $aDConfig = require("./ADConfig");

var $generalAd = require("./GeneralAd");

var $vIVOAddDesktop = require("./VIVOAddDesktop");

var $vIVOBanner = require("./VIVOBanner");

var $vIVOCustom = require("./VIVOCustom");

var $vIVOGamePortal = require("./VIVOGamePortal");

var $vIVORewardedVideo = require("./VIVORewardedVideo");

var p = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.vivoReward = null;
    e.vivoBanner = null;
    e.vivoGamePortal = null;
    e.customeAds = [];
    e.vivoAddDesktop = null;
    e.vivoReward = new $vIVORewardedVideo.VIVORewardedVideo();
    e.vivoReward.initAd($aDConfig.ADConfig.vivo.rewarded_video_id);
    e.vivoBanner = new $vIVOBanner.VIVOBanner();
    e.vivoBanner.initAd($aDConfig.ADConfig.vivo.banner_id);
    e.vivoGamePortal = new $vIVOGamePortal["default"]();
    e.vivoGamePortal.initAd($aDConfig.ADConfig.vivo.gamePortal_id);

    for (var i = 0; i < $aDConfig.ADConfig.vivo.customer_ad_ids.length; i++) {
      e.customeAds[i] = new $vIVOCustom["default"]();
      e.customeAds[i].initAd($aDConfig.ADConfig.vivo.customer_ad_ids[i]);
    }

    e.vivoAddDesktop = new $vIVOAddDesktop["default"]();
    return e;
  }

  __extends(e, t);

  e.prototype.showRewardedVideo = function (t, e, i) {
    this.vivoReward.showRewardedVideo(t, e, i);
  };

  e.prototype.showBanner = function (t, e, i) {
    this.vivoBanner.showBanner(t, e, i);
  };

  e.prototype.hideBanner = function (t) {
    this.vivoBanner.hideBanner(t);
  };

  e.prototype.forbiddenBanner = function (t) {
    this.vivoBanner.forbiddenBanner(t);
  };

  e.prototype.showGamePortal = function (t, e, i) {
    this.vivoGamePortal.showGamePortal(t, e, i);
  };

  e.prototype.hideGamePortal = function (t, e) {
    this.vivoGamePortal.hideGamePortal(t, e);
  };

  e.prototype.showCustomAd = function (t, e, i, o, n) {
    if ("" !== $aDConfig.ADConfig.vivo.customer_ad_ids[t]) {
      if (!this.customeAds[t]) {
        return console.error("showCustomAd index ", t, "为空");
      }

      if (e && e.isBanner) {
        this.customeAds[t].hideAd(!0);
      }

      this.customeAds[t].showCustomAd(e, i, o, n);
    }
  };

  e.prototype.forbiddenCustomAd = function (t, e) {
    if ("" !== $aDConfig.ADConfig.vivo.customer_ad_ids[t]) {
      return this.customeAds[t] ? void this.customeAds[t].forbidderAd(e) : console.error("forbiddenCustomAd index ", t, "为空");
    }
  };

  e.prototype.hideCustomAd = function (t, e) {
    if ("" !== $aDConfig.ADConfig.vivo.customer_ad_ids[t]) {
      return this.customeAds[t] ? void this.customeAds[t].hideAd(e) : console.error("hideCustomAd index ", t, "为空");
    }
  };

  e.prototype.hasShortcutInstalled = function (t) {
    this.vivoAddDesktop.hasShortcutInstalled(t);
  };

  e.prototype.addDesktop = function (t) {
    this.vivoAddDesktop.addDesktop(t);
  };

  return e;
}($generalAd.GeneralAd);

exports.VIVOAd = p;

cc._RF.pop();