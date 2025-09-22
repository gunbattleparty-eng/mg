var o = window.qg;
var n = (function () {
    function t() {}
    t.prototype.hasShortcutInstalled = function (t) {
        o.hasShortcutInstalled({
            success: function (e) {
                if (t.success) {
                    t.success(e);
                }
            },
            fail: function () {
                if (t.fail) {
                    t.fail();
                }
            },
            complete: function () {
                if (t.complete) {
                    t.complete();
                }
            }
        });
    };
    t.prototype.addDesktop = function (t) {
        o.hasShortcutInstalled({
            success: function (e) {
                0 == e
                    ? o.installShortcut({
                          success: function () {
                              if (t.success) {
                                  t.success();
                              }
                          },
                          fail: function (e) {
                              console.log("添加桌面失败", e);
                              if (t.fail) {
                                  t.fail();
                              }
                          },
                          complete: function () {
                              if (t.complete) {
                                  t.complete();
                              }
                          }
                      })
                    : t.success && t.success();
            },
            fail: function () {
                if (t.fail) {
                    t.fail();
                }
            },
            complete: function () {
                if (t.complete) {
                    t.complete();
                }
            }
        });
    };
    return t;
})();
exports.default = n;
