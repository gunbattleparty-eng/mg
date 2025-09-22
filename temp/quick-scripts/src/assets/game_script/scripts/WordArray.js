"use strict";
cc._RF.push(module, '4801d7DqhJF3L8TkSLj4qUh', 'WordArray');
// game_script/scripts/WordArray.js

"use strict";

exports.WordArray = void 0;

var $hex = require("./Hex");

var n = function () {
  function t(t, e) {
    this.words = t || [];
    this.sigBytes = void 0 !== e ? e : 4 * this.words.length;
  }

  t.random = function (e) {
    var i = [];

    var o = function o(t) {
      var e = 987654321;
      var i = 4294967295;
      return function () {
        var o = ((e = 36969 * (65535 & e) + (e >> 16) & i) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & i) & i;
        o /= 4294967296;
        return (o += 0.5) * (Math.random() > 0.5 ? 1 : -1);
      };
    };

    var n = 0;

    for (var s = void 0; n < e; n += 4) {
      var r = o(4294967296 * (s || Math.random()));
      s = 987654071 * r();
      i.push(4294967296 * r() | 0);
    }

    return new t(i, e);
  };

  t.prototype.toString = function (t) {
    return (t || $hex.Hex).stringify(this);
  };

  t.prototype.concat = function (t) {
    this.clamp();

    if (this.sigBytes % 4) {
      for (var e = 0; e < t.sigBytes; e++) {
        var i = t.words[e >>> 2] >>> 24 - e % 4 * 8 & 255;
        this.words[this.sigBytes + e >>> 2] |= i << 24 - (this.sigBytes + e) % 4 * 8;
      }
    } else {
      for (e = 0; e < t.sigBytes; e += 4) {
        this.words[this.sigBytes + e >>> 2] = t.words[e >>> 2];
      }
    }

    this.sigBytes += t.sigBytes;
    return this;
  };

  t.prototype.clamp = function () {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  };

  t.prototype.clone = function () {
    return new t(this.words.slice(0), this.sigBytes);
  };

  return t;
}();

exports.WordArray = n;

cc._RF.pop();