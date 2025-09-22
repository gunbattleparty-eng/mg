"use strict";
cc._RF.push(module, 'bd97bf0uVZMiKmpBg71N94t', 'BlockCipherMode');
// game_script/scripts/BlockCipherMode.js

"use strict";

exports.BlockCipherMode = void 0;

var $blockCipherModeAlgorithm = require("./BlockCipherModeAlgorithm");

var n = function () {
  function t() {}

  t.createEncryptor = function (t, e) {
    return new (0, this.Encryptor)(t, e);
  };

  t.createDecryptor = function (t, e) {
    return new (0, this.Decryptor)(t, e);
  };

  t.Encryptor = $blockCipherModeAlgorithm.BlockCipherModeAlgorithm;
  t.Decryptor = $blockCipherModeAlgorithm.BlockCipherModeAlgorithm;
  return t;
}();

exports.BlockCipherMode = n;

cc._RF.pop();