
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/TTShare.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFRUU2hhcmUuanMiXSwibmFtZXMiOlsiJGFEQ29uZmlnIiwicmVxdWlyZSIsIm4iLCJ3aW5kb3ciLCJ0dCIsInMiLCJ0IiwicHJvdG90eXBlIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJvblNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwiQURDb25maWciLCJzaGFyZV90aXRsZSIsImltYWdlVXJsIiwic2hhcmVfaW1hZ2VVcmwiLCJzdWNjZXNzIiwiZmFpbCIsInNoYXJlIiwic2hhcmVBcHBNZXNzYWdlIiwiY2hhbm5lbCIsInRlbXBsYXRlSWQiLCJkZXNjIiwic2hhcmVfZGVzYyIsImV4dHJhIiwidmlkZW9QYXRoIiwiZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF2Qjs7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsRUFBZjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWEsQ0FBRTs7RUFDZkEsQ0FBQyxDQUFDQyxTQUFGLENBQVlDLElBQVosR0FBbUIsWUFBWTtJQUMzQkMsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjs7SUFDQSxJQUFJUixDQUFDLElBQUlBLENBQUMsQ0FBQ1MsaUJBQVgsRUFBOEI7TUFDMUJULENBQUMsQ0FBQ1MsaUJBQUYsQ0FBb0IsWUFBWTtRQUM1QixPQUFPO1VBQ0hDLEtBQUssRUFBRVosU0FBUyxDQUFDYSxRQUFWLENBQW1CVCxFQUFuQixDQUFzQlUsV0FEMUI7VUFFSEMsUUFBUSxFQUFFZixTQUFTLENBQUNhLFFBQVYsQ0FBbUJULEVBQW5CLENBQXNCWSxjQUY3QjtVQUdIQyxPQUFPLEVBQUUsbUJBQVk7WUFDakJSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7VUFDSCxDQUxFO1VBTUhRLElBQUksRUFBRSxjQUFVWixDQUFWLEVBQWE7WUFDZkcsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkosQ0FBcEI7VUFDSDtRQVJFLENBQVA7TUFVSCxDQVhEO0lBWUg7RUFDSixDQWhCRDs7RUFpQkFBLENBQUMsQ0FBQ0MsU0FBRixDQUFZWSxLQUFaLEdBQW9CLFVBQVViLENBQVYsRUFBYTtJQUM3QixJQUFJSixDQUFDLElBQUlBLENBQUMsQ0FBQ2tCLGVBQVgsRUFBNEI7TUFDeEJsQixDQUFDLENBQUNrQixlQUFGLENBQWtCO1FBQ2RDLE9BQU8sRUFBRSxPQURLO1FBRWRDLFVBQVUsRUFBRWhCLENBQUMsQ0FBQ2dCLFVBQUYsSUFBZ0IsRUFGZDtRQUdkVixLQUFLLEVBQUVOLENBQUMsQ0FBQ1EsV0FBRixJQUFpQixFQUhWO1FBSWRTLElBQUksRUFBRWpCLENBQUMsQ0FBQ2tCLFVBQUYsSUFBZ0IsRUFKUjtRQUtkVCxRQUFRLEVBQUVULENBQUMsQ0FBQ1UsY0FBRixJQUFvQixFQUxoQjtRQU1kUyxLQUFLLEVBQUU7VUFDSEMsU0FBUyxFQUFFcEIsQ0FBQyxDQUFDb0I7UUFEVixDQU5PO1FBU2RULE9BQU8sRUFBRSxtQkFBWTtVQUNqQixJQUFJWCxDQUFDLENBQUNXLE9BQU4sRUFBZTtZQUNYWCxDQUFDLENBQUNXLE9BQUY7VUFDSDtRQUNKLENBYmE7UUFjZEMsSUFBSSxFQUFFLGNBQVVTLENBQVYsRUFBYTtVQUNmbEIsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQmlCLENBQXJCOztVQUNBLElBQUlyQixDQUFDLENBQUNZLElBQU4sRUFBWTtZQUNSWixDQUFDLENBQUNZLElBQUY7VUFDSDtRQUNKO01BbkJhLENBQWxCO0lBcUJIO0VBQ0osQ0F4QkQ7O0VBeUJBLE9BQU9aLENBQVA7QUFDSCxDQTdDTyxFQUFSOztBQThDQXNCLE9BQU8sV0FBUCxHQUFrQnZCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJGFEQ29uZmlnID0gcmVxdWlyZShcIi4vQURDb25maWdcIik7XHJcbnZhciBuID0gd2luZG93LnR0O1xyXG52YXIgcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KCkge31cclxuICAgIHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaGFyZSBpbml0XCIpO1xyXG4gICAgICAgIGlmIChuICYmIG4ub25TaGFyZUFwcE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgbi5vblNoYXJlQXBwTWVzc2FnZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAkYURDb25maWcuQURDb25maWcudHQuc2hhcmVfdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6ICRhRENvbmZpZy5BRENvbmZpZy50dC5zaGFyZV9pbWFnZVVybCxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YiG5Lqr5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvlpLHotKVcIiwgdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLnNoYXJlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBpZiAobiAmJiBuLnNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICAgICAgICBuLnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBcInZpZGVvXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUlkOiB0LnRlbXBsYXRlSWQgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0LnNoYXJlX3RpdGxlIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiB0LnNoYXJlX2Rlc2MgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiB0LnNoYXJlX2ltYWdlVXJsIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBleHRyYToge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvUGF0aDogdC52aWRlb1BhdGhcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIhuS6q+Wksei0pTpcIiwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQuZmFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0LmZhaWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcztcclxuIl19