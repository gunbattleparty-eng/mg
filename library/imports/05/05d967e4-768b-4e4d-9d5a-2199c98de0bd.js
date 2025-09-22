"use strict";
cc._RF.push(module, '05d96fkdotOTZ1aIZnJjeC9', 'StorageUtil');
// game_script/scripts/StorageUtil.js

"use strict";

exports.StorageUtil = void 0;

var $globalParam = require("./GlobalParam");

var $localName = require("./LocalName");

var $crypto_ts = require("./crypto-ts");

var l = function () {
  function t() {}

  t.init = function () {
    var e;
    var i;

    if (!t.getItem("isEnc", !1, !1)) {
      t.setItem("isEnc", !0, !1);

      try {
        var l = __values(Object.entries($localName["default"]));

        for (var c = l.next(); !c.done; c = l.next()) {
          var u = __read(c.value, 2);

          var d = (u[0], u[1]);
          var p = cc.sys.localStorage.getItem(d);

          if (p) {
            if (!t.Filters.includes(d)) {
              p = $crypto_ts.AES.encrypt(p, $globalParam["default"].keyWord).toString();
            }

            cc.sys.localStorage.setItem(d, p);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (c && !c.done && (i = l["return"])) {
            i.call(l);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    }
  };

  t.getItem = function (e, i, o) {
    if (void 0 === o) {
      o = !0;
    }

    var n = cc.sys.localStorage.getItem(e);

    if (!(n = n || "")) {
      return i;
    }

    if (o && !t.Filters.includes(e)) {
      n = $crypto_ts.AES.decrypt(n, $globalParam["default"].keyWord).toString($crypto_ts.enc.Utf8);
    }

    if (i instanceof String) {
      return n;
    }

    if (i instanceof Number) {
      return parseInt(n);
    }

    if (i instanceof Boolean) {
      return "true" === n;
    }

    if (i instanceof Map) {
      return t.jsonToMap(n);
    }

    try {
      return JSON.parse(n);
    } catch (t) {
      console.error(e, t);
      return i;
    }
  };

  t.setItem = function (e, i, o) {
    if (void 0 === o) {
      o = !0;
    }

    var n = "";
    n = i instanceof Map ? t.mapToJson(i) : JSON.stringify(i);

    if (o && !t.Filters.includes(e)) {
      n = $crypto_ts.AES.encrypt(n, $globalParam["default"].keyWord).toString();
    }

    cc.sys.localStorage.setItem(e, n);
  };

  t.removeItem = function (t) {
    cc.sys.localStorage.removeItem(t);
  };

  t.mapToJson = function (t) {
    var e = [];
    t.forEach(function (t, i) {
      e.push([i, t]);
    });
    return JSON.stringify(e);
  };

  t.jsonToMap = function (t) {
    var e = JSON.parse(t);
    var i = new Map();

    for (var o = 0; o < e.length; o++) {
      i.set(e[o][0], e[o][1]);
    }

    return i;
  };

  t.Filters = [$localName["default"].ONLINE_RECORD, $localName["default"].MEDIAS, $localName["default"].MEDIAS_VOL, $localName["default"].PACK_INFO];
  return t;
}();

exports.StorageUtil = l;

cc._RF.pop();