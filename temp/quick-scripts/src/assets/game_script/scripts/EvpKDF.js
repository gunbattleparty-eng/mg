"use strict";
cc._RF.push(module, 'e5590EHn+NHm79ZV13Zezys', 'EvpKDF');
// game_script/scripts/EvpKDF.js

"use strict";

exports.EvpKDF = void 0;

var $wordArray = require("./WordArray");

var $mD5 = require("./MD5");

var s = function () {
  function t(t) {
    this.cfg = Object.assign({
      keySize: 4,
      hasher: $mD5.MD5,
      iterations: 1
    }, t);
  }

  t.prototype.compute = function (t, e) {
    var i;
    var n = new this.cfg.hasher();

    for (var s = new $wordArray.WordArray(); s.words.length < this.cfg.keySize;) {
      if (i) {
        n.update(i);
      }

      i = n.update(t).finalize(e);
      n.reset();

      for (var r = 1; r < this.cfg.iterations; r++) {
        i = n.finalize(i);
        n.reset();
      }

      s.concat(i);
    }

    s.sigBytes = 4 * this.cfg.keySize;
    return s;
  };

  return t;
}();

exports.EvpKDF = s;

cc._RF.pop();