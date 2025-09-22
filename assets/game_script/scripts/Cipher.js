var o;
exports.Cipher = void 0;
var $bufferedBlockAlgorithm = require("./BufferedBlockAlgorithm");
var $serializableCipher = require("./SerializableCipher");
var $passwordBasedCipher = require("./PasswordBasedCipher");
var l = (function (t) {
    function e(e, i, o) {
        var n =
            t.call(
                this,
                Object.assign(
                    {
                        blockSize: 1
                    },
                    o
                )
            ) || this;
        n._xformMode = e;
        n._key = i;
        n.reset();
        return n;
    }
    __extends(e, t);
    e.createEncryptor = function (t, e) {
        return new this(this._ENC_XFORM_MODE, t, e);
    };
    e.createDecryptor = function (t, e) {
        return new this(this._DEC_XFORM_MODE, t, e);
    };
    e._createHelper = function (t) {
        return {
            encrypt: function (e, i, o) {
                return "string" == typeof i
                    ? $passwordBasedCipher.PasswordBasedCipher.encrypt(t, e, i, o)
                    : $serializableCipher.SerializableCipher.encrypt(t, e, i, o);
            },
            decrypt: function (e, i, o) {
                return "string" == typeof i
                    ? $passwordBasedCipher.PasswordBasedCipher.decrypt(t, e, i, o)
                    : $serializableCipher.SerializableCipher.decrypt(t, e, i, o);
            }
        };
    };
    e.prototype.process = function (t) {
        this._append(t);
        return this._process();
    };
    e.prototype.finalize = function (t) {
        if (t) {
            this._append(t);
        }
        return this._doFinalize();
    };
    e._ENC_XFORM_MODE = 1;
    e._DEC_XFORM_MODE = 2;
    e.keySize = 4;
    e.ivSize = 4;
    return e;
})($bufferedBlockAlgorithm.BufferedBlockAlgorithm);
exports.Cipher = l;
