"use strict";
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