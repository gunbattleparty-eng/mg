"use strict";
cc._RF.push(module, '18b38zUMMlBF7180Q9rnB7T', 'VIVOAddDesktop');
// game_script/scripts/VIVOAddDesktop.js

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