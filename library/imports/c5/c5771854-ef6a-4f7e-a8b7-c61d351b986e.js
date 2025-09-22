"use strict";
cc._RF.push(module, 'c5771hU72pPfqi3xh01G5hu', 'GlobalHttp');
// game_script/scripts/GlobalHttp.js

"use strict";

exports.GlobalHttp = void 0;

var $util = require("./Util");

var n = function () {
  function t() {}

  t.init = function () {
    fly.config.timeout = 3e3;
    fly.interceptors.request.use(t.onSend);
    fly.interceptors.response.use(t.onSucceed, t.onError);
  };

  t.onSend = function (t) {
    if (!(t.url.includes("/rank") || t.url.includes("/auth"))) {
      t.headers["Content-Type"] = "application/json";
    }
  };

  t.onSucceed = function (t) {
    var e = t.data;

    if ($util["default"].isJSON(e)) {
      e = JSON.parse(e);
    }

    return e;
  };

  t.onError = function (t) {
    throw new Error("接口请求失败:" + JSON.stringify(t));
  };

  return t;
}();

exports.GlobalHttp = n;

cc._RF.pop();