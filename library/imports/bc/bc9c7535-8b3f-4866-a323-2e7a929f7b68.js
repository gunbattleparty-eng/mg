"use strict";
cc._RF.push(module, 'bc9c7U1iz9IZqMjLnqSn3to', 'AdSwitch');
// game_script/scripts/AdSwitch.js

"use strict";

exports.AdSwitch = exports.AdTypeCode = void 0;
var o;
var n;

var $platform = require("./Platform");

var $aDConfig = require("./ADConfig");

(n = o = exports.AdTypeCode || (exports.AdTypeCode = {}))[n.VIDEO = 1] = "VIDEO";
n[n.BANNER = 2] = "BANNER";
n[n.INTERSTITIAL = 3] = "INTERSTITIAL";
n[n.NATIVE_CUSTOM_ICON = 19] = "NATIVE_CUSTOM_ICON";
n[n.NATIVE_CUSTOM_PATCH = 18] = "NATIVE_CUSTOM_PATCH";

var a = function () {
  function t() {
    this.path = "https://cooperation.sjyywy.com/web2/glob_ad_config/local";
    this.localPath = "https://backend.pailedi.com/index.php/getClientAddress";
    this.localInfo = null;
    this.switchParam = null;
    this.currVersion = 0;
  }

  t.prototype.initOpen = function (t, e) {
    var i = this;
    this.currVersion = e;
    var o = "/ad_" + t + ".json";
    var n = new Date().getTime();
    var s = [this.path + o + "?sign=" + n];
    this.loadNetResArray(s, null).then(function (t) {
      i.switchParam = t;

      try {
        fly.get(i.localPath, null, {
          baseURL: ""
        }).then(function (t) {
          i.localInfo = t;
          console.log(i.localInfo, "==============");
        });
      } catch (t) {
        console.error(t);
      }
    });
  };

  t.prototype.initAd = function () {
    if (this.localInfo && this.localInfo.city) {
      this.localInfo.city = this.localInfo.city.replace("市", "");

      if (this.switchParam.blacklist.includes(this.localInfo.city)) {
        this.switchParam.switchStatus = 1;
      }
    }

    var t = this.getDetailConfig(o.VIDEO);
    var e = this.getDetailConfig(o.BANNER);
    var i = this.getDetailConfig(o.INTERSTITIAL);
    var n = this.checkSwitch(t.switchStatus) ? t.adParam : "";
    var a = this.checkSwitchAll(e) ? e.adParam : "";
    var l = this.checkSwitchAll(e) ? i.adParam : "";

    if ($platform.Platform.currPlatForm === $platform.PlatformEnum.VIVO) {
      $aDConfig.ADConfig.vivo.rewarded_video_id = n;
      $aDConfig.ADConfig.vivo.banner_id = a;
      $aDConfig.ADConfig.vivo.native_ad_ids = "" === l ? [] : [l];
    }
  };

  t.prototype.checkSwitchAll = function (t) {
    if (this.switchParam.switchVersion < this.currVersion) {
      return !1;
    }

    var e = this.checkSwitch(this.switchParam.switchStatus);
    var i = this.checkSwitch(t.switchStatus);
    return !(!e || !i);
  };

  t.prototype.checkSwitch = function (t) {
    return 0 === t;
  };

  t.prototype.getDetailConfig = function (t) {
    return this.switchParam.saDetailConfigParams.find(function (e) {
      return e.saTypeId === t;
    });
  };

  t.prototype.loadNetResArray = function (t, e) {
    var i = [];

    for (var o = 0; o < t.length; o++) {
      i.push({
        url: t[o]
      });
    }

    return new Promise(function (t, o) {
      cc.assetManager.loadAny(i, function (t, i) {
        if (e) {
          e(t, i);
        }
      }, function (e, i) {
        e ? o(e) : t(i);
      });
    });
  };

  t.instance = new t();
  return t;
}();

exports.AdSwitch = a;

cc._RF.pop();