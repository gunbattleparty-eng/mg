"use strict";
cc._RF.push(module, '7700aAs1wNARbCFt9v1ElRp', 'BlockCipher');
// game_script/scripts/BlockCipher.js

"use strict";

var o;
exports.BlockCipher = void 0;

var $cipher = require("./Cipher");

var $cBC = require("./CBC");

var $pKCS7 = require("./PKCS7");

var l = function (t) {
  function e(e, i, o) {
    return t.call(this, e, i, Object.assign({
      blockSize: 4,
      mode: $cBC.CBC,
      padding: $pKCS7.PKCS7
    }, o)) || this;
  }

  __extends(e, t);

  e.prototype.reset = function () {
    t.prototype.reset.call(this);

    if (void 0 === this.cfg.mode) {
      throw new Error("missing mode in config");
    }

    var e;
    this._xformMode === this.constructor._ENC_XFORM_MODE ? e = this.cfg.mode.createEncryptor : (e = this.cfg.mode.createDecryptor, this._minBufferSize = 1);
    this._mode && this._mode.__creator === e ? this._mode.init(this, this.cfg.iv && this.cfg.iv.words) : (this._mode = e.call(this.cfg.mode, this, this.cfg.iv && this.cfg.iv.words), this._mode.__creator = e);
  };

  e.prototype._doProcessBlock = function (t, e) {
    this._mode.processBlock(t, e);
  };

  e.prototype._doFinalize = function () {
    if (void 0 === this.cfg.padding) {
      throw new Error("missing padding in config");
    }

    var t;

    if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
      if (void 0 === this.cfg.blockSize) {
        throw new Error("missing blockSize in config");
      }

      this.cfg.padding.pad(this._data, this.cfg.blockSize);
      t = this._process(!0);
    } else {
      t = this._process(!0);
      this.cfg.padding.unpad(t);
    }

    return t;
  };

  return e;
}($cipher.Cipher);

exports.BlockCipher = l;

cc._RF.pop();