"use strict";
cc._RF.push(module, '46dc8BMa5RHu6EZrxJYP0lL', 'CipherParams');
// game_script/scripts/CipherParams.js

"use strict";

var o;
exports.CipherParams = void 0;

var s = function (t) {
  function e(e) {
    var i = t.call(this) || this;
    i.ciphertext = e.ciphertext;
    i.key = e.key;
    i.iv = e.iv;
    i.salt = e.salt;
    i.algorithm = e.algorithm;
    i.mode = e.mode;
    i.padding = e.padding;
    i.blockSize = e.blockSize;
    i.formatter = e.formatter;
    return i;
  }

  __extends(e, t);

  e.prototype.extend = function (t) {
    if (void 0 !== t.ciphertext) {
      this.ciphertext = t.ciphertext;
    }

    if (void 0 !== t.key) {
      this.key = t.key;
    }

    if (void 0 !== t.iv) {
      this.iv = t.iv;
    }

    if (void 0 !== t.salt) {
      this.salt = t.salt;
    }

    if (void 0 !== t.algorithm) {
      this.algorithm = t.algorithm;
    }

    if (void 0 !== t.mode) {
      this.mode = t.mode;
    }

    if (void 0 !== t.padding) {
      this.padding = t.padding;
    }

    if (void 0 !== t.blockSize) {
      this.blockSize = t.blockSize;
    }

    if (void 0 !== t.formatter) {
      this.formatter = t.formatter;
    }

    return this;
  };

  e.prototype.toString = function (t) {
    if (t) {
      return t.stringify(this);
    }

    if (this.formatter) {
      return this.formatter.stringify(this);
    }

    throw new Error("cipher needs a formatter to be able to convert the result into a string");
  };

  return e;
}(require("./Base").Base);

exports.CipherParams = s;

cc._RF.pop();