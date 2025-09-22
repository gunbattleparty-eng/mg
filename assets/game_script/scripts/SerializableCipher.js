exports.SerializableCipher = void 0;
var $wordArray = require("./WordArray");
var $openSSL = require("./OpenSSL");
var $cipherParams = require("./CipherParams");
var r = (function () {
    function t() {}
    t.encrypt = function (t, e, i, o) {
        var n = Object.assign({}, this.cfg, o);
        var r = t.createEncryptor(i, n);
        var a = r.finalize(e);
        return new $cipherParams.CipherParams({
            ciphertext: a,
            key: i,
            iv: r.cfg.iv,
            algorithm: t,
            mode: r.cfg.mode,
            padding: r.cfg.padding,
            blockSize: r.cfg.blockSize,
            formatter: n.format
        });
    };
    t.decrypt = function (t, e, i, o) {
        var n = Object.assign({}, this.cfg, o);
        if (!n.format) {
            throw new Error("could not determine format");
        }
        if (!(e = this._parse(e, n.format)).ciphertext) {
            throw new Error("could not determine ciphertext");
        }
        return t.createDecryptor(i, n).finalize(e.ciphertext);
    };
    t._parse = function (t, e) {
        return "string" == typeof t ? e.parse(t) : t;
    };
    t.cfg = {
        blockSize: 4,
        iv: new $wordArray.WordArray([]),
        format: $openSSL.OpenSSL
    };
    return t;
})();
exports.SerializableCipher = r;
