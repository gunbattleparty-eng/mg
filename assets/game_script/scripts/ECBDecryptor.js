var o;
exports.ECBDecryptor = void 0;
var s = (function (t) {
    function e() {
        return (null !== t && t.apply(this, arguments)) || this;
    }
    __extends(e, t);
    e.prototype.processBlock = function (t, e) {
        this._cipher.decryptBlock(t, e);
    };
    return e;
})(require("./BlockCipherModeAlgorithm").BlockCipherModeAlgorithm);
exports.ECBDecryptor = s;
