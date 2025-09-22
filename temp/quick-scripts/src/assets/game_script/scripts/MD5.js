"use strict";
cc._RF.push(module, 'f3d6dlbwddJ84rvzQ6mL2oX', 'MD5');
// game_script/scripts/MD5.js

"use strict";

var o;
exports.MD5 = void 0;

var $hasher = require("./Hasher");

var $wordArray = require("./WordArray");

var a = [];

for (var l = 0; l < 64; l++) {
  a[l] = 4294967296 * Math.abs(Math.sin(l + 1)) | 0;
}

var c = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.FF = function (t, e, i, o, n, s, r) {
    var a = t + (e & i | ~e & o) + n + r;
    return (a << s | a >>> 32 - s) + e;
  };

  e.GG = function (t, e, i, o, n, s, r) {
    var a = t + (e & o | i & ~o) + n + r;
    return (a << s | a >>> 32 - s) + e;
  };

  e.HH = function (t, e, i, o, n, s, r) {
    var a = t + (e ^ i ^ o) + n + r;
    return (a << s | a >>> 32 - s) + e;
  };

  e.II = function (t, e, i, o, n, s, r) {
    var a = t + (i ^ (e | ~o)) + n + r;
    return (a << s | a >>> 32 - s) + e;
  };

  e.prototype.reset = function () {
    t.prototype.reset.call(this);
    this._hash = new $wordArray.WordArray([1732584193, 4023233417, 2562383102, 271733878]);
  };

  e.prototype._doProcessBlock = function (t, i) {
    for (var o = 0; o < 16; o++) {
      var n = i + o;
      var s = t[n];
      t[n] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
    }

    var r = this._hash.words;
    var l = t[i + 0];
    var c = t[i + 1];
    var u = t[i + 2];
    var d = t[i + 3];
    var p = t[i + 4];
    var f = t[i + 5];
    var h = t[i + 6];
    var m = t[i + 7];
    var y = t[i + 8];
    var g = t[i + 9];
    var _ = t[i + 10];
    var k = t[i + 11];
    var v = t[i + 12];
    var b = t[i + 13];
    var w = t[i + 14];
    var A = t[i + 15];
    var S = r[0];
    var C = r[1];
    var I = r[2];
    var P = r[3];
    S = e.FF(S, C, I, P, l, 7, a[0]);
    P = e.FF(P, S, C, I, c, 12, a[1]);
    I = e.FF(I, P, S, C, u, 17, a[2]);
    C = e.FF(C, I, P, S, d, 22, a[3]);
    S = e.FF(S, C, I, P, p, 7, a[4]);
    P = e.FF(P, S, C, I, f, 12, a[5]);
    I = e.FF(I, P, S, C, h, 17, a[6]);
    C = e.FF(C, I, P, S, m, 22, a[7]);
    S = e.FF(S, C, I, P, y, 7, a[8]);
    P = e.FF(P, S, C, I, g, 12, a[9]);
    I = e.FF(I, P, S, C, _, 17, a[10]);
    C = e.FF(C, I, P, S, k, 22, a[11]);
    S = e.FF(S, C, I, P, v, 7, a[12]);
    P = e.FF(P, S, C, I, b, 12, a[13]);
    I = e.FF(I, P, S, C, w, 17, a[14]);
    C = e.FF(C, I, P, S, A, 22, a[15]);
    S = e.GG(S, C, I, P, c, 5, a[16]);
    P = e.GG(P, S, C, I, h, 9, a[17]);
    I = e.GG(I, P, S, C, k, 14, a[18]);
    C = e.GG(C, I, P, S, l, 20, a[19]);
    S = e.GG(S, C, I, P, f, 5, a[20]);
    P = e.GG(P, S, C, I, _, 9, a[21]);
    I = e.GG(I, P, S, C, A, 14, a[22]);
    C = e.GG(C, I, P, S, p, 20, a[23]);
    S = e.GG(S, C, I, P, g, 5, a[24]);
    P = e.GG(P, S, C, I, w, 9, a[25]);
    I = e.GG(I, P, S, C, d, 14, a[26]);
    C = e.GG(C, I, P, S, y, 20, a[27]);
    S = e.GG(S, C, I, P, b, 5, a[28]);
    P = e.GG(P, S, C, I, u, 9, a[29]);
    I = e.GG(I, P, S, C, m, 14, a[30]);
    C = e.GG(C, I, P, S, v, 20, a[31]);
    S = e.HH(S, C, I, P, f, 4, a[32]);
    P = e.HH(P, S, C, I, y, 11, a[33]);
    I = e.HH(I, P, S, C, k, 16, a[34]);
    C = e.HH(C, I, P, S, w, 23, a[35]);
    S = e.HH(S, C, I, P, c, 4, a[36]);
    P = e.HH(P, S, C, I, p, 11, a[37]);
    I = e.HH(I, P, S, C, m, 16, a[38]);
    C = e.HH(C, I, P, S, _, 23, a[39]);
    S = e.HH(S, C, I, P, b, 4, a[40]);
    P = e.HH(P, S, C, I, l, 11, a[41]);
    I = e.HH(I, P, S, C, d, 16, a[42]);
    C = e.HH(C, I, P, S, h, 23, a[43]);
    S = e.HH(S, C, I, P, g, 4, a[44]);
    P = e.HH(P, S, C, I, v, 11, a[45]);
    I = e.HH(I, P, S, C, A, 16, a[46]);
    C = e.HH(C, I, P, S, u, 23, a[47]);
    S = e.II(S, C, I, P, l, 6, a[48]);
    P = e.II(P, S, C, I, m, 10, a[49]);
    I = e.II(I, P, S, C, w, 15, a[50]);
    C = e.II(C, I, P, S, f, 21, a[51]);
    S = e.II(S, C, I, P, v, 6, a[52]);
    P = e.II(P, S, C, I, d, 10, a[53]);
    I = e.II(I, P, S, C, _, 15, a[54]);
    C = e.II(C, I, P, S, c, 21, a[55]);
    S = e.II(S, C, I, P, y, 6, a[56]);
    P = e.II(P, S, C, I, A, 10, a[57]);
    I = e.II(I, P, S, C, h, 15, a[58]);
    C = e.II(C, I, P, S, b, 21, a[59]);
    S = e.II(S, C, I, P, p, 6, a[60]);
    P = e.II(P, S, C, I, k, 10, a[61]);
    I = e.II(I, P, S, C, u, 15, a[62]);
    C = e.II(C, I, P, S, g, 21, a[63]);
    r[0] = r[0] + S | 0;
    r[1] = r[1] + C | 0;
    r[2] = r[2] + I | 0;
    r[3] = r[3] + P | 0;
  };

  e.prototype._doFinalize = function () {
    var t = this._data;
    var e = t.words;
    var i = 8 * this._nDataBytes;
    var o = 8 * t.sigBytes;
    e[o >>> 5] |= 128 << 24 - o % 32;
    var n = Math.floor(i / 4294967296);
    var s = i;
    e[15 + (o + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
    e[14 + (o + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
    t.sigBytes = 4 * (e.length + 1);

    this._process();

    var r = this._hash;
    var a = r.words;

    for (var l = 0; l < 4; l++) {
      var c = a[l];
      a[l] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
    }

    return r;
  };

  return e;
}($hasher.Hasher);

exports.MD5 = c;

cc._RF.pop();