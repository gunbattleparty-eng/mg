"use strict";
cc._RF.push(module, 'ec599axLwNLRaxOVL6cMbMZ', 'BlockCipherModeAlgorithm');
// game_script/scripts/BlockCipherModeAlgorithm.js

"use strict";

exports.BlockCipherModeAlgorithm = void 0;

var o = function () {
  function t(t, e) {
    this.init(t, e);
  }

  t.prototype.init = function (t, e) {
    this._cipher = t;
    this._iv = e;
  };

  return t;
}();

exports.BlockCipherModeAlgorithm = o;

cc._RF.pop();