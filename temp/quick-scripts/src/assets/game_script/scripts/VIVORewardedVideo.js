"use strict";
cc._RF.push(module, '30a2datSipIyYNmeICHheDE', 'VIVORewardedVideo');
// game_script/scripts/VIVORewardedVideo.js

"use strict";

var o;
exports.VIVORewardedVideo = void 0;

var $baseAd = require("./BaseAd");

var r = window.qg;

var a = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.videoEndCallback = null;
    return e;
  }

  __extends(e, t);

  e.prototype.loadAd = function () {
    if (this.adUnitId) {
      var t = {
        adUnitId: this.adUnitId
      };
      this.adIns = r.createRewardedVideoAd(t);

      if (this.adIns.onLoad) {
        this.adIns.onLoad(this.onLoad);
      }

      if (this.adIns.onClose) {
        this.adIns.onClose(this.onClose);
      }

      if (this.adIns.onError) {
        this.adIns.onError(this.onError);
      }

      this.adIns.load();
    } else {
      console.error("激励视频ID为空");
    }
  };

  e.prototype.showRewardedVideo = function (t, e, i) {
    var o = this;
    this.showCallback = t;
    this.closeCallback = e;
    this.videoEndCallback = i;
    this.musicVolume = cc.audioEngine.getMusicVolume();
    this.effectsVolume = cc.audioEngine.getEffectsVolume();

    if (!this.adIns) {
      this.isAutoShow = !0;
      console.warn(this.adUnitId, ":未创建，执行创建");
      this.loadAd();
    }

    if (this.isConsume) {
      this.reCreateAd(!0);
    } else {
      {
        if (!this.isLoaded) {
          this.isAutoShow = !0;
          return void console.warn(this.adUnitId, ":未加载完成，稍等");
        }

        if (this.showing) {
          console.warn(this.adUnitId, "广告正在显示中");
        } else {
          this.showing = !1;

          if (this.adIns.show) {
            this.pause();
            var n = this.adIns.show();
            n && n.then ? n.then(function () {
              o.isConsume = !0;
              o.showing = !0;

              if (o.showCallback) {
                o.showCallback();
              }

              o.showCallback = null;
            })["catch"](function (t) {
              console.warn(o.adUnitId, ":show错误，重新加载", t);
              o.reCreateAd(!0);
            }) : (console.warn(this.adUnitId, ":show显示失败，重新加载"), this.reCreateAd(!0));
          } else {
            this.resume();
            console.error(this.adUnitId, ":未知错误");
          }
        }
      }
    }
  };

  e.prototype.reCreateAd = function (e) {
    t.prototype.reCreateAd.call(this, e);
    this.resume();
  };

  e.prototype.autoShow = function () {
    if (this.isAutoShow) {
      this.isAutoShow = !1;
      this.showRewardedVideo(this.showCallback, this.closeCallback, this.videoEndCallback);
    }
  };

  e.prototype.onAdLoad = function () {
    t.prototype.onAdLoad.call(this);
    this.isConsume = !1;
    this.isLoaded = !0;
    this.showing = !1;
    this.autoShow();
  };

  e.prototype.onAdError = function (e) {
    t.prototype.onAdError.call(this, e);
    this.showing = !1;
    this.resume();
    this.destroyAd();
  };

  e.prototype.onAdClose = function (e) {
    t.prototype.onAdClose.call(this, e);
    this.showing = !1;
    e && e.isEnded ? this.videoEndCallback && this.videoEndCallback() : this.closeCallback && this.closeCallback();
    this.isOpenPreLoad ? this.adIns.load() : this.destroyAd();
    this.resume();
  };

  e.prototype.destroyAd = function () {
    t.prototype.destroyAd.call(this);
    this.videoEndCallback = null;

    if (this.adIns) {
      if (this.adIns.offLoad) {
        this.adIns.offLoad(this.onLoad);
      }

      if (this.adIns.offClose) {
        this.adIns.offClose(this.onClose);
      }

      if (this.adIns.offError) {
        this.adIns.offError(this.onError);
      }

      if (this.adIns.destroy) {
        this.adIns.destroy();
      }

      this.adIns = null;
    }
  };

  return e;
}($baseAd.BaseAd);

exports.VIVORewardedVideo = a;

cc._RF.pop();