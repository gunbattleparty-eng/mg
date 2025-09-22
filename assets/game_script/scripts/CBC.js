var o;
exports.CBC = void 0;
var $blockCipherMode = require("./BlockCipherMode");
var $cBCEncryptor = require("./CBCEncryptor");
var $cBCDecryptor = require("./CBCDecryptor");
var l = (function (t) {
    function e() {
        return (null !== t && t.apply(this, arguments)) || this;
    }
    __extends(e, t);
    e.Encryptor = $cBCEncryptor.CBCEncryptor;
    e.Decryptor = $cBCDecryptor.CBCDecryptor;
    return e;
})($blockCipherMode.BlockCipherMode);
exports.CBC = l;
