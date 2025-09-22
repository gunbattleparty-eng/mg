"use strict";
cc._RF.push(module, '77e82R8nvxGGoNx8W4sbXVN', 'TTReport');
// game_script/scripts/TTReport.js

"use strict";

var o = window.tt;

var n = function () {
  function t() {}

  t.prototype.report = function (t, e) {
    e ? o.reportAnalytics(t, e) : o.reportAnalytics(t, {});
  };

  return t;
}();

exports["default"] = n;

cc._RF.pop();