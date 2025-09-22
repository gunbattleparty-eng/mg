"use strict";
cc._RF.push(module, '58430+n8cBM8b4tUUjdXPQY', 'OPPOAddDesktop');
// game_script/scripts/OPPOAddDesktop.js

"use strict";

var o = window.qg;

var n = function () {
  function t() {}

  t.prototype.hasShortcutInstalled = function (t) {
    o.hasShortcutInstalled({
      success: function success(e) {
        if (t.success) {
          t.success(e);
        }
      },
      fail: function fail() {
        if (t.fail) {
          t.fail();
        }
      },
      complete: function complete() {
        if (t.complete) {
          t.complete();
        }
      }
    });
  };

  t.prototype.addDesktop = function (t) {
    o.hasShortcutInstalled({
      success: function success(e) {
        0 == e ? o.installShortcut({
          success: function success() {
            if (t.success) {
              t.success();
            }
          },
          fail: function fail(e) {
            console.log("添加桌面失败", e);

            if (t.fail) {
              t.fail();
            }
          },
          complete: function complete() {
            if (t.complete) {
              t.complete();
            }
          }
        }) : t.success && t.success();
      },
      fail: function fail() {
        if (t.fail) {
          t.fail();
        }
      },
      complete: function complete() {
        if (t.complete) {
          t.complete();
        }
      }
    });
  };

  return t;
}();

exports["default"] = n;

cc._RF.pop();