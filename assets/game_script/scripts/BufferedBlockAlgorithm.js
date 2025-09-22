exports.BufferedBlockAlgorithm = void 0;
var $wordArray = require("./WordArray");
var $utf8 = require("./Utf8");
var s = (function () {
    function t(t) {
        this._minBufferSize = 0;
        this.cfg = Object.assign(
            {
                blockSize: 1
            },
            t
        );
        this._data = new $wordArray.WordArray();
        this._nDataBytes = 0;
    }
    t.prototype.reset = function () {
        this._data = new $wordArray.WordArray();
        this._nDataBytes = 0;
    };
    t.prototype._append = function (t) {
        if ("string" == typeof t) {
            t = $utf8.Utf8.parse(t);
        }
        this._data.concat(t);
        this._nDataBytes += t.sigBytes;
    };
    t.prototype._process = function (t) {
        if (!this.cfg.blockSize) {
            throw new Error("missing blockSize in config");
        }
        var e;
        var i = 4 * this.cfg.blockSize;
        var n = this._data.sigBytes / i;
        var s = (n = t ? Math.ceil(n) : Math.max((0 | n) - this._minBufferSize, 0)) * this.cfg.blockSize;
        var r = Math.min(4 * s, this._data.sigBytes);
        if (s) {
            for (var a = 0; a < s; a += this.cfg.blockSize) {
                this._doProcessBlock(this._data.words, a);
            }
            e = this._data.words.splice(0, s);
            this._data.sigBytes -= r;
        }
        return new $wordArray.WordArray(e, r);
    };
    t.prototype.clone = function () {
        var t = this.constructor();
        for (var e in this)
            if (this.hasOwnProperty(e)) {
                t[e] = this[e];
            }
        t._data = this._data.clone();
        return t;
    };
    return t;
})();
exports.BufferedBlockAlgorithm = s;
