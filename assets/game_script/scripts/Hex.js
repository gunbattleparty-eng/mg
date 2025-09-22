exports.Hex = void 0;
var $wordArray = require("./WordArray");
var n = (function () {
    function t() {}
    t.stringify = function (t) {
        var e = [];
        for (var i = 0; i < t.sigBytes; i++) {
            var o = (t.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
            e.push((o >>> 4).toString(16));
            e.push((15 & o).toString(16));
        }
        return e.join("");
    };
    t.parse = function (t) {
        var e = t.length;
        var i = [];
        for (var n = 0; n < e; n += 2) {
            i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << (24 - (n % 8) * 4);
        }
        return new $wordArray.WordArray(i, e / 2);
    };
    return t;
})();
exports.Hex = n;
