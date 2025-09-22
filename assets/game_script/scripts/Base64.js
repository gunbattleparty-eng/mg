exports.Base64 = void 0;
var $wordArray = require("./WordArray");
var n = (function () {
    function t() {}
    t.stringify = function (t) {
        t.clamp();
        var e = [];
        for (var i = 0; i < t.sigBytes; i += 3) {
            var o =
                (((t.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) << 16) |
                (((t.words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255) << 8) |
                ((t.words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255);
            for (var n = 0; n < 4 && i + 0.75 * n < t.sigBytes; n++) {
                e.push(this._map.charAt((o >>> (6 * (3 - n))) & 63));
            }
        }
        var s = this._map.charAt(64);
        if (s) {
            for (; e.length % 4; ) {
                e.push(s);
            }
        }
        return e.join("");
    };
    t.parse = function (t) {
        var e = t.length;
        if (void 0 === this._reverseMap) {
            this._reverseMap = [];
            for (var i = 0; i < this._map.length; i++) {
                this._reverseMap[this._map.charCodeAt(i)] = i;
            }
        }
        var o = this._map.charAt(64);
        if (o) {
            var n = t.indexOf(o);
            if (-1 !== n) {
                e = n;
            }
        }
        return this.parseLoop(t, e, this._reverseMap);
    };
    t.parseLoop = function (t, e, i) {
        var n = [];
        var s = 0;
        for (var r = 0; r < e; r++) {
            if (r % 4) {
                var a = i[t.charCodeAt(r - 1)] << ((r % 4) * 2);
                var l = i[t.charCodeAt(r)] >>> (6 - (r % 4) * 2);
                n[s >>> 2] |= (a | l) << (24 - (s % 4) * 8);
                s++;
            }
        }
        return new $wordArray.WordArray(n, s);
    };
    t._map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    t._reverseMap = void 0;
    return t;
})();
exports.Base64 = n;
