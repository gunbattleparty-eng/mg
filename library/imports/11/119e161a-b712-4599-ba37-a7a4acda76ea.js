"use strict";
cc._RF.push(module, '119e1YatxJFmbo3p6Ss2nbq', 'ECBEncryptor');
// game_script/scripts/ECBEncryptor.js

"use strict";

var o;
exports.ECBEncryptor = void 0;

var s = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.processBlock = function (t, e) {
    this._cipher.encryptBlock(t, e);
  };

  return e;
}(require("./BlockCipherModeAlgorithm").BlockCipherModeAlgorithm);

exports.ECBEncryptor = s;

cc._RF.pop();