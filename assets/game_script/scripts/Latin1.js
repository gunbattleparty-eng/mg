exports.Latin1 = void 0;
var $wordArray = require("./WordArray");
var n = (function () {
    function t() {}
    t.stringify = function (t) {
        var e = [];
        for (var i = 0; i < t.sigBytes; i++) {
            var o = (t.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
            e.push(String.fromCharCode(o));
        }
        return e.join("");
    };
    t.parse = function (t) {
        var e = t.length;
        var i = [];
        for (var n = 0; n < e; n++) {
            i[n >>> 2] |= (255 & t.charCodeAt(n)) << (24 - (n % 4) * 8);
        }
        return new $wordArray.WordArray(i, e);
    };
    return t;
})();
exports.Latin1 = n;
