"use strict";
cc._RF.push(module, 'a6f0bQKFnBFmJ/0WK7lafG/', 'Platform');
// game_script/scripts/Platform.js

"use strict";

var o;
var n;
exports.Platform = exports.PlatformEnum = void 0;
(n = o = exports.PlatformEnum || (exports.PlatformEnum = {}))[n.UNKNOWN = 0] = "UNKNOWN";
n[n.BROWSER = 1] = "BROWSER";
n[n.ANDROID = 2] = "ANDROID";
n[n.IPHONE = 3] = "IPHONE";
n[n.IPAD = 4] = "IPAD";
n[n.QQ = 5] = "QQ";
n[n.WECHAT = 6] = "WECHAT";
n[n.OPPO = 7] = "OPPO";
n[n.VIVO = 8] = "VIVO";
n[n.TOU_TIAO = 9] = "TOU_TIAO";
n[n.HUAWEI_GAME = 10] = "HUAWEI_GAME";
n[n.BAI_DU = 11] = "BAI_DU";
n[n.MEI_ZU = 12] = "MEI_ZU";
n[n.SSJJ = 13] = "SSJJ";
n[n.KS = 14] = "KS";

var s = function () {
  function t() {}

  t.init = function () {
    if (window.mz_jsb) {
      t.currPlatForm = o.MEI_ZU;
    } else {
      if (window.hasOwnProperty("gamebox")) {
        t.currPlatForm = o.SSJJ;
      } else {
        if (window.tt) {
          t.currPlatForm = o.TOU_TIAO;
        } else {
          if (window.qq) {
            t.currPlatForm = o.QQ;
          } else {
            if (cc.sys.isBrowser) {
              t.currPlatForm = o.BROWSER;
            } else {
              if (window.ks) {
                t.currPlatForm = o.KS;
              } else {
                switch (cc.sys.platform) {
                  case cc.sys.ANDROID:
                    t.currPlatForm = o.ANDROID;
                    break;

                  case cc.sys.IPHONE:
                    t.currPlatForm = o.IPHONE;
                    break;

                  case cc.sys.IPAD:
                    t.currPlatForm = o.IPAD;
                    break;

                  case cc.sys.WECHAT_GAME:
                    t.currPlatForm = o.WECHAT;
                    break;

                  case cc.sys.VIVO_GAME:
                    t.currPlatForm = o.VIVO;
                    break;

                  case cc.sys.OPPO_GAME:
                    t.currPlatForm = o.OPPO;
                    break;

                  case cc.sys.VIVO_GAME:
                    t.currPlatForm = o.VIVO;
                    break;

                  case cc.sys.BAIDU_GAME:
                    t.currPlatForm = o.BAI_DU;
                    break;

                  case cc.sys.HUAWEI_GAME:
                    t.currPlatForm = o.HUAWEI_GAME;
                }
              }
            }
          }
        }
      }
    }
  };

  t.currPlatForm = o.UNKNOWN;
  return t;
}();

exports.Platform = s;

cc._RF.pop();