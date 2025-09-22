"use strict";
cc._RF.push(module, '0dc36aJ6g9DTKmnXMinWtp7', 'CacheContext');
// game_script/scripts/CacheContext.js

"use strict";

exports.CacheContext = void 0;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resManager = require("./ResManager");

var r = function () {
  function t() {
    this.bundleNames = [];
    this.cacheMaxBundleCount = 5;
    this.cacheMusicPath = new Map();
    this.cacheAudio = new Map();
  }

  t.prototype.cacheBundle = function (t) {
    if (this.bundleNames.includes(t)) {
      var e = this.bundleNames.indexOf(t);
      var i = this.bundleNames.splice(e, 1)[0];
      this.bundleNames.push(i);
    } else {
      this.bundleNames.push(t);

      if (this.bundleNames.length > this.cacheMaxBundleCount) {
        var o = this.bundleNames.shift();
        $resManager.ResManager.instance.releaseBundle(o);
      }
    }
  };

  t.prototype.playMusic = function (t, e, i) {
    var s = this;

    if (!this.cacheMusicPath.has(t)) {
      this.cacheMusicPath.set(t, new Set());
    }

    this.cacheMusicPath.get(t).add(e);
    this.cacheAudio.has(e) ? i && i(this.cacheAudio.get(e)) : $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/sounds/" + e], cc.AudioClip, null, function (t, o) {
      console.log("加载音频", e);
      var n = o[0];
      s.cacheAudio.set(e, n);

      if (n && i) {
        i(n);
      }
    });
  };

  t.prototype.clearMusic = function (t) {
    var e = this;

    if (this.cacheMusicPath.has(t)) {
      console.log("释放音频资源");
      this.cacheMusicPath.get(t).forEach(function (t) {
        e.cacheAudio["delete"](t);
        cc.assetManager.getBundle("public_other").release("/sounds/" + t);
      });
    }
  };

  t.instance = new t();
  return t;
}();

exports.CacheContext = r;

cc._RF.pop();