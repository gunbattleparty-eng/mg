"use strict";
cc._RF.push(module, '5b3e6n0+alPyrZVFsZxRXo2', 'AdService');
// game_script/scripts/AdService.js

"use strict";

var $aD = require("./AD");

var $taskContext = require("./TaskContext");

var s = function () {
  function t() {}

  Object.defineProperty(t, "Ins", {
    get: function get() {
      if (!t.instance) {
        t.instance = new t();
      }

      return t.instance;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.showRewardedVideo = function (t) {
    $aD["default"].auto.showRewardedVideo(null, null, function () {
      $taskContext["default"].Ins.setTaskRecord(7);

      if (t) {
        t();
      }
    });
  };

  return t;
}();

exports["default"] = s;

cc._RF.pop();