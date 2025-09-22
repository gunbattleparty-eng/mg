"use strict";
cc._RF.push(module, '3e75bbHDKtDRq+NMeAWmkES', 'ResUtil');
// game_script/scripts/ResUtil.js

"use strict";

exports.ResUtil = void 0;

var $resKeeper = require("./ResKeeper");

var n = function () {
  function t() {}

  t.getResKeeper = function (e, i) {
    return e ? e.getComponent($resKeeper.ResKeeper) || (i ? e.addComponent($resKeeper.ResKeeper) : t.getResKeeper(e.parent, i)) : null;
  };

  t.assignWith = function (e, i, o) {
    var n = t.getResKeeper(i, o);
    return n && e instanceof cc.Asset ? (n.cacheAsset(e), e) : (console.error("assignWith " + e.name + " to " + i + " faile"), null);
  };

  t.instantiate = function (e, i) {
    var o = cc.instantiate(e);

    if (i) {
      var n = t.getResKeeper(i);

      if (n) {
        n.cacheAsset(e);
      }

      return o;
    }

    var s = t.getResKeeper(o, !0);

    if (s) {
      s.cacheAsset(e);
    }

    return o;
  };

  return t;
}();

exports.ResUtil = n;

cc._RF.pop();