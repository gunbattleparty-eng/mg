"use strict";
cc._RF.push(module, '1cbb91I0+lONb2lBtivQ9Aa', 'TTShare');
// game_script/scripts/TTShare.js

"use strict";

var $aDConfig = require("./ADConfig");

var n = window.tt;

var s = function () {
  function t() {}

  t.prototype.init = function () {
    console.log("share init");

    if (n && n.onShareAppMessage) {
      n.onShareAppMessage(function () {
        return {
          title: $aDConfig.ADConfig.tt.share_title,
          imageUrl: $aDConfig.ADConfig.tt.share_imageUrl,
          success: function success() {
            console.log("分享成功");
          },
          fail: function fail(t) {
            console.log("分享失败", t);
          }
        };
      });
    }
  };

  t.prototype.share = function (t) {
    if (n && n.shareAppMessage) {
      n.shareAppMessage({
        channel: "video",
        templateId: t.templateId || "",
        title: t.share_title || "",
        desc: t.share_desc || "",
        imageUrl: t.share_imageUrl || "",
        extra: {
          videoPath: t.videoPath
        },
        success: function success() {
          if (t.success) {
            t.success();
          }
        },
        fail: function fail(e) {
          console.log("分享失败:", e);

          if (t.fail) {
            t.fail();
          }
        }
      });
    }
  };

  return t;
}();

exports["default"] = s;

cc._RF.pop();