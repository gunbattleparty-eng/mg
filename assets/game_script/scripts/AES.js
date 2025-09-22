var o;
exports.AES = void 0;
var $blockCipher = require("./BlockCipher");
var r = [];
var a = [];
var l = [];
var c = [];
var u = [];
var d = [];
var p = [];
var f = [];
var h = [];
var m = [];
!(function () {
    var t = [];
    for (var e = 0; e < 256; e++) {
        t[e] = e < 128 ? e << 1 : (e << 1) ^ 283;
    }
    var i = 0;
    var o = 0;
    for (e = 0; e < 256; e++) {
        var n = o ^ (o << 1) ^ (o << 2) ^ (o << 3) ^ (o << 4);
        n = (n >>> 8) ^ (255 & n) ^ 99;
        r[i] = n;
        a[n] = i;
        var s = t[i];
        var y = t[s];
        var g = t[y];
        var _ = (257 * t[n]) ^ (16843008 * n);
        l[i] = (_ << 24) | (_ >>> 8);
        c[i] = (_ << 16) | (_ >>> 16);
        u[i] = (_ << 8) | (_ >>> 24);
        d[i] = _;
        _ = (16843009 * g) ^ (65537 * y) ^ (257 * s) ^ (16843008 * i);
        p[n] = (_ << 24) | (_ >>> 8);
        f[n] = (_ << 16) | (_ >>> 16);
        h[n] = (_ << 8) | (_ >>> 24);
        m[n] = _;
        i ? ((i = s ^ t[t[t[g ^ s]]]), (o ^= t[t[o]])) : (i = o = 1);
    }
})();
var y = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
var g = (function (t) {
    function e(e, i, o) {
        return t.call(this, e, i, o) || this;
    }
    __extends(e, t);
    e.prototype.reset = function () {
        t.prototype.reset.call(this);
        if (!this._nRounds || this._keyPriorReset !== this._key) {
            var e = (this._keyPriorReset = this._key);
            var i = e.words;
            var o = e.sigBytes / 4;
            var n = 4 * ((this._nRounds = o + 6) + 1);
            var s = (this._keySchedule = []);
            for (var a = 0; a < n; a++) {
                if (a < o) {
                    s[a] = i[a];
                } else {
                    {
                        var l = s[a - 1];
                        a % o
                            ? o > 6 &&
                              a % o == 4 &&
                              (l =
                                  (r[l >>> 24] << 24) |
                                  (r[(l >>> 16) & 255] << 16) |
                                  (r[(l >>> 8) & 255] << 8) |
                                  r[255 & l])
                            : ((l =
                                  (r[(l = (l << 8) | (l >>> 24)) >>> 24] << 24) |
                                  (r[(l >>> 16) & 255] << 16) |
                                  (r[(l >>> 8) & 255] << 8) |
                                  r[255 & l]),
                              (l ^= y[(a / o) | 0] << 24));
                        s[a] = s[a - o] ^ l;
                    }
                }
            }
            var c = (this._invKeySchedule = []);
            for (var u = 0; u < n; u++) {
                a = n - u;
                l = void 0;
                l = u % 4 ? s[a] : s[a - 4];
                c[u] =
                    u < 4 || a <= 4
                        ? l
                        : p[r[l >>> 24]] ^ f[r[(l >>> 16) & 255]] ^ h[r[(l >>> 8) & 255]] ^ m[r[255 & l]];
            }
        }
    };
    e.prototype.encryptBlock = function (t, e) {
        this._doCryptBlock(t, e, this._keySchedule, l, c, u, d, r);
    };
    e.prototype.decryptBlock = function (t, e) {
        var i = t[e + 1];
        t[e + 1] = t[e + 3];
        t[e + 3] = i;
        this._doCryptBlock(t, e, this._invKeySchedule, p, f, h, m, a);
        i = t[e + 1];
        t[e + 1] = t[e + 3];
        t[e + 3] = i;
    };
    e.prototype._doCryptBlock = function (t, e, i, o, n, s, r, a) {
        var l = t[e] ^ i[0];
        var c = t[e + 1] ^ i[1];
        var u = t[e + 2] ^ i[2];
        var d = t[e + 3] ^ i[3];
        var p = 4;
        for (var f = 1; f < this._nRounds; f++) {
            var h = o[l >>> 24] ^ n[(c >>> 16) & 255] ^ s[(u >>> 8) & 255] ^ r[255 & d] ^ i[p++];
            var m = o[c >>> 24] ^ n[(u >>> 16) & 255] ^ s[(d >>> 8) & 255] ^ r[255 & l] ^ i[p++];
            var y = o[u >>> 24] ^ n[(d >>> 16) & 255] ^ s[(l >>> 8) & 255] ^ r[255 & c] ^ i[p++];
            var g = o[d >>> 24] ^ n[(l >>> 16) & 255] ^ s[(c >>> 8) & 255] ^ r[255 & u] ^ i[p++];
            l = h;
            c = m;
            u = y;
            d = g;
        }
        var _ = ((a[l >>> 24] << 24) | (a[(c >>> 16) & 255] << 16) | (a[(u >>> 8) & 255] << 8) | a[255 & d]) ^ i[p++];
        var k = ((a[c >>> 24] << 24) | (a[(u >>> 16) & 255] << 16) | (a[(d >>> 8) & 255] << 8) | a[255 & l]) ^ i[p++];
        var v = ((a[u >>> 24] << 24) | (a[(d >>> 16) & 255] << 16) | (a[(l >>> 8) & 255] << 8) | a[255 & c]) ^ i[p++];
        var b = ((a[d >>> 24] << 24) | (a[(l >>> 16) & 255] << 16) | (a[(c >>> 8) & 255] << 8) | a[255 & u]) ^ i[p++];
        t[e] = _;
        t[e + 1] = k;
        t[e + 2] = v;
        t[e + 3] = b;
    };
    e.keySize = 8;
    return e;
})($blockCipher.BlockCipher);
exports.AES = g;
