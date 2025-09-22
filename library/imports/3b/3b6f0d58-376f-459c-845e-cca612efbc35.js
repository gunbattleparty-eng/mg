"use strict";
cc._RF.push(module, '3b6f01YN29FnIRezKYS77w1', 'CBCDecryptor');
// game_script/scripts/CBCDecryptor.js

"use strict";

var o;
exports.CBCDecryptor = void 0;

var s = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.processBlock = function (t, e) {
    if (void 0 === this._cipher.cfg.blockSize) {
      throw new Error("missing blockSize in cipher config");
    }

    var i = t.slice(e, e + this._cipher.cfg.blockSize);

    this._cipher.decryptBlock(t, e);

    this.xorBlock(t, e, this._cipher.cfg.blockSize);
    this._prevBlock = i;
  };

  e.prototype.xorBlock = function (t, e, i) {
    var o;
    this._iv ? (o = this._iv, this._iv = void 0) : o = this._prevBlock;

    if (void 0 !== o) {
      for (var n = 0; n < i; n++) {
        t[e + n] ^= o[n];
      }
    }
  };

  return e;
}(require("./BlockCipherModeAlgorithm").BlockCipherModeAlgorithm);

exports.CBCDecryptor = s;

cc._RF.pop();