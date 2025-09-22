exports.PasswordBasedCipher = void 0;
var $serializableCipher = require("./SerializableCipher");
var $wordArray = require("./WordArray");
var $openSSL = require("./OpenSSL");
var $openSSLKdf = require("./OpenSSLKdf");
var a = (function () {
    function t() {}
    t.encrypt = function (t, e, i, n) {
        var s = Object.assign({}, this.cfg, n);
        if (void 0 === s.kdf) {
            throw new Error("missing kdf in config");
        }
        var r = s.kdf.execute(i, t.keySize, t.ivSize);
        if (void 0 !== r.iv) {
            s.iv = r.iv;
        }
        return $serializableCipher.SerializableCipher.encrypt.call(this, t, e, r.key, s).extend(r);
    };
    t.decrypt = function (t, e, i, n) {
        var s = Object.assign({}, this.cfg, n);
        if (void 0 === s.format) {
            throw new Error("missing format in config");
        }
        e = this._parse(e, s.format);
        if (void 0 === s.kdf) {
            throw new Error("the key derivation function must be set");
        }
        var r = s.kdf.execute(i, t.keySize, t.ivSize, e.salt);
        if (void 0 !== r.iv) {
            s.iv = r.iv;
        }
        return $serializableCipher.SerializableCipher.decrypt.call(this, t, e, r.key, s);
    };
    t._parse = function (t, e) {
        return "string" == typeof t ? e.parse(t) : t;
    };
    t.cfg = {
        blockSize: 4,
        iv: new $wordArray.WordArray([]),
        format: $openSSL.OpenSSL,
        kdf: $openSSLKdf.OpenSSLKdf
    };
    return t;
})();
exports.PasswordBasedCipher = a;
