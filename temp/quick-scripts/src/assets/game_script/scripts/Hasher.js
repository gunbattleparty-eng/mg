"use strict";
cc._RF.push(module, '425b56euKxPzrMt9qI9qaan', 'Hasher');
// game_script/scripts/Hasher.js

"use strict";

var o;
exports.Hasher = void 0;

var s = function (t) {
  function e(e) {
    var i = t.call(this, Object.assign({
      blockSize: 16
    }, e)) || this;
    i.reset();
    return i;
  }

  __extends(e, t);

  e._createHelper = function (t) {
    return function (e, i) {
      return new t(i).finalize(e);
    };
  };

  e.prototype.update = function (t) {
    this._append(t);

    this._process();

    return this;
  };

  e.prototype.finalize = function (t) {
    if (t) {
      this._append(t);
    }

    return this._doFinalize();
  };

  return e;
}(require("./BufferedBlockAlgorithm").BufferedBlockAlgorithm);

exports.Hasher = s;

cc._RF.pop();