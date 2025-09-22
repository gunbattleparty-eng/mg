"use strict";
cc._RF.push(module, '71d41gWwxFILYLRI/LFsY1C', 'OpenSSL');
// game_script/scripts/OpenSSL.js

"use strict";

exports.OpenSSL = void 0;

var $cipherParams = require("./CipherParams");

var $wordArray = require("./WordArray");

var $base64 = require("./Base64");

var r = function () {
  function t() {}

  t.stringify = function (t) {
    if (!t.ciphertext) {
      throw new Error("missing ciphertext in params");
    }

    var e;
    var i = t.ciphertext;
    var o = t.salt;

    if (o) {
      if ("string" == typeof o) {
        throw new Error("salt is expected to be a WordArray");
      }

      e = new $wordArray.WordArray([1398893684, 1701076831]).concat(o).concat(i);
    } else {
      e = i;
    }

    return e.toString($base64.Base64);
  };

  t.parse = function (t) {
    var e;
    var i = $base64.Base64.parse(t);

    if (1398893684 === i.words[0] && 1701076831 === i.words[1]) {
      e = new $wordArray.WordArray(i.words.slice(2, 4));
      i.words.splice(0, 4);
      i.sigBytes -= 16;
    }

    return new $cipherParams.CipherParams({
      ciphertext: i,
      salt: e
    });
  };

  return t;
}();

exports.OpenSSL = r;

cc._RF.pop();