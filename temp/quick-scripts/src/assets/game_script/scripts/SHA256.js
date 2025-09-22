"use strict";
cc._RF.push(module, '722dbIJ1uFI+pu+cQkvr7yy', 'SHA256');
// game_script/scripts/SHA256.js

"use strict";

var o;
exports.SHA256 = void 0;

var $hasher = require("./Hasher");

var $wordArray = require("./WordArray");

var a = [];
var l = [];
var c = [];

var u = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.reset = function () {
    t.prototype.reset.call(this);
    this._hash = new $wordArray.WordArray(a.slice(0));
  };

  e.prototype._doProcessBlock = function (t, e) {
    var i = this._hash.words;
    var o = i[0];
    var n = i[1];
    var s = i[2];
    var r = i[3];
    var a = i[4];
    var u = i[5];
    var d = i[6];
    var p = i[7];

    for (var f = 0; f < 64; f++) {
      if (f < 16) {
        c[f] = 0 | t[e + f];
      } else {
        {
          var h = c[f - 15];
          var m = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3;
          var y = c[f - 2];
          var g = (y << 15 | y >>> 17) ^ (y << 13 | y >>> 19) ^ y >>> 10;
          c[f] = m + c[f - 7] + g + c[f - 16];
        }
      }

      var _ = o & n ^ o & s ^ n & s;

      var k = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22);
      var v = p + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & u ^ ~a & d) + l[f] + c[f];
      p = d;
      d = u;
      u = a;
      a = r + v | 0;
      r = s;
      s = n;
      n = o;
      o = v + (k + _) | 0;
    }

    i[0] = i[0] + o | 0;
    i[1] = i[1] + n | 0;
    i[2] = i[2] + s | 0;
    i[3] = i[3] + r | 0;
    i[4] = i[4] + a | 0;
    i[5] = i[5] + u | 0;
    i[6] = i[6] + d | 0;
    i[7] = i[7] + p | 0;
  };

  e.prototype._doFinalize = function () {
    var t = 8 * this._nDataBytes;
    var e = 8 * this._data.sigBytes;
    this._data.words[e >>> 5] |= 128 << 24 - e % 32;
    this._data.words[14 + (e + 64 >>> 9 << 4)] = Math.floor(t / 4294967296);
    this._data.words[15 + (e + 64 >>> 9 << 4)] = t;
    this._data.sigBytes = 4 * this._data.words.length;

    this._process();

    return this._hash;
  };

  return e;
}($hasher.Hasher);

exports.SHA256 = u;

cc._RF.pop();