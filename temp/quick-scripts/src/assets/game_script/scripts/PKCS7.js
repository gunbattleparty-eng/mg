"use strict";
cc._RF.push(module, '986dc9MCbhDQY+gbwTM8RRf', 'PKCS7');
// game_script/scripts/PKCS7.js

"use strict";

exports.PKCS7 = void 0;

var $wordArray = require("./WordArray");

var n = function () {
  function t() {}

  t.pad = function (t, e) {
    var i = 4 * e;
    var n = i - t.sigBytes % i;
    var s = n << 24 | n << 16 | n << 8 | n;
    var r = [];

    for (var a = 0; a < n; a += 4) {
      r.push(s);
    }

    var l = new $wordArray.WordArray(r, n);
    t.concat(l);
  };

  t.unpad = function (t) {
    var e = 255 & t.words[t.sigBytes - 1 >>> 2];
    t.sigBytes -= e;
  };

  return t;
}();

exports.PKCS7 = n;

cc._RF.pop();