var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $countDownUtil = require("./CountDownUtil");
var $audioPlayer = require("./AudioPlayer");
var a = (function () {
    function t() {
        this.musicMap = new Map();
        this.timeRecord = new Map();
        this.currLoopMusic = new Map();
        this.isPlayingBgm = !1;
        this.isMastering = !0;
    }
    t.prototype.playMusic = function (t) {
        var e = this;
        this.musicMap.has(t)
            ? $audioPlayer.default.playMusic(this.musicMap.get(t))
            : $assetsLoader.default.instance.loadRes(
                  $assetsMap.BundleNames.Public_Res,
                  ["/sounds/" + t],
                  cc.AudioClip,
                  null,
                  function (i, o) {
                      var n = o[0];
                      if (cc.isValid(n)) {
                          n.addRef();
                          e.musicMap.set(t, n);
                          $audioPlayer.default.playMusic(e.musicMap.get(t));
                      }
                  }
              );
    };
    t.prototype.playEffectMusic = function (t, e) {
        var i = this;
        if (void 0 === e) {
            e = !1;
        }
        this.musicMap.has(t)
            ? ($audioPlayer.default.playEffect(this.musicMap.get(t), e),
              e && this.currLoopMusic.set(t, this.musicMap.get(t)))
            : $assetsLoader.default.instance.loadRes(
                  $assetsMap.BundleNames.Public_Res,
                  ["/sounds/" + t],
                  cc.AudioClip,
                  null,
                  function (o, n) {
                      var s = n[0];
                      if (cc.isValid(s)) {
                          s.addRef();
                          i.musicMap.set(t, s);
                          $audioPlayer.default.playEffect(s, e);
                          if (e) {
                              i.currLoopMusic.set(t, i.musicMap.get(t));
                          }
                      }
                  }
              );
    };
    t.prototype.playEffectMusicRestrict = function (t, e) {
        var i = $countDownUtil.CountDownUtil.time;
        if (!(this.timeRecord.has(t) && i - this.timeRecord.get(t) < e)) {
            this.playEffectMusic(t);
            this.timeRecord.set(t, i);
        }
    };
    t.prototype.stopEffectMusic = function (t) {
        if (this.musicMap.has(t)) {
            $audioPlayer.default.stopEffect(this.musicMap.get(t));
        }
    };
    t.prototype.stopAllEffectMusic = function () {
        $audioPlayer.default.stopAllEffect();
    };
    t.prototype.clearLoopEffect = function () {
        this.currLoopMusic.clear();
    };
    t.prototype.playLoopEffect = function (t) {
        if (!this.currLoopMusic.has(t)) {
            this.playEffectMusic(t, !0);
        }
    };
    t.prototype.stopLoopEffect = function (t) {
        if (this.currLoopMusic.has(t)) {
            this.stopEffectMusic(t);
            this.currLoopMusic.delete(t);
        }
    };
    t.prototype.pauseAllEffectMusic = function () {
        $audioPlayer.default.pauseAllEffect();
    };
    t.prototype.resumeAllEffectMusic = function () {
        $audioPlayer.default.resumeAllEffect();
    };
    t.prototype.releaseEffect = function (t) {
        if (this.musicMap.has(t)) {
            this.musicMap.get(t).decRef();
        }
    };
    t.prototype.playBGM = function (t, e) {
        if (void 0 === t) {
            t = !0;
        }
        if (void 0 === e) {
            e = "";
        }
        if (!(this.isMastering && t && this.isPlayingBgm)) {
            this.stopAllEffectMusic();
            $audioPlayer.default.stopAllMusic();
            this.isMastering = t;
            t ? this.playMusic("BGM") : this.playMusic(e);
            this.isPlayingBgm = !0;
        }
    };
    t.prototype.stopBGM = function () {
        this.isPlayingBgm = !1;
        $audioPlayer.default.stopAll();
    };
    t.instance = new t();
    return t;
})();
exports.default = a;
