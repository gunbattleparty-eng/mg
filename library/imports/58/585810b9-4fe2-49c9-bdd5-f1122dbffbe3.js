"use strict";
cc._RF.push(module, '58581C5T+JJyb3V8RItv/vj', 'AudioPlayer');
// game_script/scripts/AudioPlayer.js

"use strict";

var o = function () {
  function t() {}

  Object.defineProperty(t, "masterVolume", {
    get: function get() {
      return this._masterVolume;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t, "musicVolume", {
    get: function get() {
      return this._musicVolume;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t, "effectVolume", {
    get: function get() {
      return this._effectVolume;
    },
    enumerable: !1,
    configurable: !0
  });

  t.setMasterVolume = function (t) {
    t < 0 ? t = 0 : t > 1 && (t = 1);
    this._masterVolume = t;
    this.setMusicVolume(this._musicVolume);
    this.setEffectVolume(this._effectVolume);
  };

  t.setVolume = function (t) {
    this.setMusicVolume(t);
    this.setEffectVolume(t);
  };

  t.setMusicVolume = function (t) {
    t < 0 ? t = 0 : t > 1 && (t = 1);
    this._musicVolume = t;
    var e = this._masterVolume * t;

    this._music.forEach(function (t) {
      return cc.audioEngine.setVolume(t, e);
    });
  };

  t.setEffectVolume = function (t) {
    t < 0 ? t = 0 : t > 1 && (t = 1);
    this._effectVolume = t;
    var e = this._masterVolume * t;

    this._effect.forEach(function (t, i) {
      return cc.audioEngine.setVolume(i, e);
    });
  };

  t.playMusic = function (t) {
    if (this._music.has(t)) {
      this.stopMusic(t);
    }

    var e = cc.audioEngine.play(t, !0, this._masterVolume * this._musicVolume);

    this._music.set(t, e);
  };

  t.stopMusic = function (t) {
    if (this._music.has(t)) {
      cc.audioEngine.stop(this._music.get(t));

      this._music["delete"](t);
    }
  };

  t.stopAllMusic = function () {
    var t = this;

    this._music.forEach(function (e, i) {
      return t.stopMusic(i);
    });
  };

  t.pauseMusic = function (t) {
    if (this._music.has(t)) {
      cc.audioEngine.pause(this._music.get(t));
    }
  };

  t.pauseAllMusic = function () {
    var t = this;

    this._music.forEach(function (e, i) {
      return t.pauseMusic(i);
    });
  };

  t.resumeMusic = function (t) {
    if (this._music.has(t)) {
      cc.audioEngine.resume(this._music.get(t));
    }
  };

  t.resumeAllMusic = function () {
    var t = this;

    this._music.forEach(function (e, i) {
      return t.resumeMusic(i);
    });
  };

  t.playEffect = function (t, e) {
    var i = this;
    var o = cc.audioEngine.play(t, e, this._masterVolume * this._effectVolume);

    this._effect.set(o, t);

    if (!e) {
      cc.audioEngine.setFinishCallback(o, function () {
        return i._effect["delete"](o);
      });
    }
  };

  t.stopEffect = function (t) {
    var e = this;

    this._effect.forEach(function (i, o) {
      if (i === t) {
        cc.audioEngine.stop(o);

        e._effect["delete"](o);
      }
    });
  };

  t.stopAllEffect = function () {
    var t = this;

    this._effect.forEach(function (e, i) {
      cc.audioEngine.stop(i);

      t._effect["delete"](i);
    });
  };

  t.pauseEffect = function (t) {
    this._effect.forEach(function (e, i) {
      return e === t && cc.audioEngine.pause(i);
    });
  };

  t.pauseAllEffect = function () {
    this._effect.forEach(function (t, e) {
      return cc.audioEngine.pause(e);
    });
  };

  t.resumeEffect = function (t) {
    this._effect.forEach(function (e, i) {
      return e === t && cc.audioEngine.resume(i);
    });
  };

  t.resumeAllEffect = function () {
    this._effect.forEach(function (t, e) {
      return cc.audioEngine.resume(e);
    });
  };

  t.stopAll = function () {
    this.stopAllMusic();
    this.stopAllEffect();
  };

  t.pauseAll = function () {
    this.pauseAllMusic();
    this.pauseAllEffect();
  };

  t.resumeAll = function () {
    this.resumeAllMusic();
    this.resumeAllEffect();
  };

  t.mute = function () {
    this.setMasterVolume(0);
  };

  t._music = new Map();
  t._effect = new Map();
  t._masterVolume = 1;
  t._musicVolume = 1;
  t._effectVolume = 1;
  return t;
}();

exports["default"] = o;

cc._RF.pop();