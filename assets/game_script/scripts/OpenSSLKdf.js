exports.OpenSSLKdf = void 0;
var $wordArray = require("./WordArray");
var $cipherParams = require("./CipherParams");
var $evpKDF = require("./EvpKDF");
var r = (function () {
    function t() {}
    t.execute = function (t, e, i, r) {
        if (!r) {
            r = $wordArray.WordArray.random(8);
        }
        var a = new $evpKDF.EvpKDF({
            keySize: e + i
        }).compute(t, r);
        var l = new $wordArray.WordArray(a.words.slice(e), 4 * i);
        a.sigBytes = 4 * e;
        return new $cipherParams.CipherParams({
            key: a,
            iv: l,
            salt: r
        });
    };
    return t;
})();
exports.OpenSSLKdf = r;
