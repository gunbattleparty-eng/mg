var o;
exports.ECB = void 0;
var $blockCipherMode = require("./BlockCipherMode");
var $eCBEncryptor = require("./ECBEncryptor");
var $eCBDecryptor = require("./ECBDecryptor");
var l = (function (t) {
    function e() {
        return (null !== t && t.apply(this, arguments)) || this;
    }
    __extends(e, t);
    e.Encryptor = $eCBEncryptor.ECBEncryptor;
    e.Decryptor = $eCBDecryptor.ECBDecryptor;
    return e;
})($blockCipherMode.BlockCipherMode);
exports.ECB = l;
