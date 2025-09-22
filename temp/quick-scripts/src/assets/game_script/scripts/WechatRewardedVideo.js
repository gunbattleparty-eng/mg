"use strict";
cc._RF.push(module, 'c0728PR6A1DDb9LMOtUQyqT', 'WechatRewardedVideo');
// game_script/scripts/WechatRewardedVideo.js

"use strict";

var o;

var $uIManager = require("./UIManager");

var $geService = require("./GeService");

var $baseRewardedVideo = require("./BaseRewardedVideo");

var l = window.wx;

var c = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e._rewardedVideoAd = null;
    return e;
  }

  __extends(e, t);

  e.prototype.createRewardedVideo = function () {
    console.log("createRewardedVideo");

    if (this.adUnitId) {
      if (l && l.createRewardedVideoAd) {
        var t = {
          adUnitId: this.adUnitId
        };
        this._rewardedVideoAd = l.createRewardedVideoAd(t);

        if (this._rewardedVideoAd.onLoad) {
          this._rewardedVideoAd.onLoad(this._onLoadCallbackRef);
        }

        if (this._rewardedVideoAd.onClose) {
          this._rewardedVideoAd.onClose(this._onCloseCallbackRef);
        }

        if (this._rewardedVideoAd.onError) {
          this._rewardedVideoAd.onError(this._onErrorCallbackRef);
        }
      } else {
        console.warn("当前平台不支持创建激励视频");
      }
    } else {
      console.warn("激励视频组件创建失败,未配置pos_id");
    }
  };

  e.prototype.showRewardedVideo = function (e, i, o) {
    var n = this;
    "" !== this.adUnitId ? new Date().getTime() - this._lastCallShowTime < 2e3 ? console.warn("showRewardedVideo,调用太频繁") : (t.prototype.showRewardedVideo.call(this, e, i, o), this._rewardedVideoAd && this._isLoadComplete ? this._rewardedVideoAd.show && this._rewardedVideoAd.show().then(function () {
      n._errorReloadCount = 0;
      $geService.GeService.instance.reportWxAdToGravity(n.adUnitId);
      n.onRewardedVideoShowSuccessHandler();
    })["catch"](function (t) {
      n.onRewardedVideoShowFailHandler(t);
    }) : this.onRewardedVideoNotLoadHandler()) : $uIManager.UIManager.instance.showToast("暂无广告资源");
  };

  e.prototype.destroyRewardedVideo = function () {
    t.prototype.destroyRewardedVideo.call(this);

    if (this._rewardedVideoAd) {
      if (this._rewardedVideoAd.offLoad) {
        this._rewardedVideoAd.offLoad(this._onLoadCallbackRef);
      }

      if (this._rewardedVideoAd.offClose) {
        this._rewardedVideoAd.offClose(this._onCloseCallbackRef);
      }

      if (this._rewardedVideoAd.offError) {
        this._rewardedVideoAd.offError(this._onErrorCallbackRef);
      }

      if (this._rewardedVideoAd.destroy) {
        this._rewardedVideoAd.destroy();
      }

      this._rewardedVideoAd = null;
    }
  };

  e.prototype.onRewardedVideoLoad = function () {
    console.log("onRewardedVideoLoad");
    this._isLoadComplete = !0;
  };

  e.prototype.onRewardedVideoClose = function (t) {
    this.onRewardedVideoCloseHandler(t && t.isEnded || void 0 === t);
  };

  e.prototype.onRewardedVideoError = function (t) {
    this.onRewardedVideoErrorHandler(t);
  };

  return e;
}($baseRewardedVideo["default"]);

exports["default"] = c;

cc._RF.pop();