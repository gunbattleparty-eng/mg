"use strict";
cc._RF.push(module, 'fc775WEW8ZBD6jmL04UXJHu', 'CBCEncryptor');
// game_script/scripts/CBCEncryptor.js

"use strict";

var o;
exports.CBCEncryptor = void 0;

var s = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.processBlock = function (t, e) {
    if (void 0 === this._cipher.cfg.blockSize) {
      throw new Error("missing blockSize in cipher config");
    }

    this.xorBlock(t, e, this._cipher.cfg.blockSize);

    this._cipher.encryptBlock(t, e);

    this._prevBlock = t.slice(e, e + this._cipher.cfg.blockSize);
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

exports.CBCEncryptor = s;

cc._RF.pop();