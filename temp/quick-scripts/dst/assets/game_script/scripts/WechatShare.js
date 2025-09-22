
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/WechatShare.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a023agcXAtNh7gELZbk9jgo', 'WechatShare');
// game_script/scripts/WechatShare.js

"use strict";

var $aDConfig = require("./ADConfig");

var n = window.wx;

var s = function () {
  function t() {}

  t.prototype.init = function () {
    console.log("share init");

    if (n && n.showShareMenu) {
      n.showShareMenu({
        withShareTicket: !0,
        menus: ["shareAppMessage", "shareTimeline"]
      });
    }

    if (n && n.showShareMenu) {
      n.showShareMenu({
        withShareTicket: !0,
        menus: ["shareAppMessage", "shareTimeline"]
      });
    }

    if (n && n.onShareAppMessage) {
      n.onShareAppMessage(function () {
        return {
          title: $aDConfig.ADConfig.wechat.share_title,
          imageUrl: $aDConfig.ADConfig.wechat.share_imageUrl
        };
      });
    }
  };

  t.prototype.share = function (t) {
    if (n && n.shareAppMessage) {
      n.shareAppMessage({
        title: t.share_title || $aDConfig.ADConfig.wechat.share_title,
        imageUrl: t.share_imageUrl || $aDConfig.ADConfig.wechat.share_imageUrl,
        query: t.query || "",
        success: function success() {
          if (t && t.success) {
            t.success();
          }
        },
        fail: function fail() {
          if (t && t.fail) {
            t.fail();
          }
        },
        complete: function complete() {
          if (t && t.complete) {
            t.complete();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFdlY2hhdFNoYXJlLmpzIl0sIm5hbWVzIjpbIiRhRENvbmZpZyIsInJlcXVpcmUiLCJuIiwid2luZG93Iiwid3giLCJzIiwidCIsInByb3RvdHlwZSIsImluaXQiLCJjb25zb2xlIiwibG9nIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsIm1lbnVzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsIkFEQ29uZmlnIiwid2VjaGF0Iiwic2hhcmVfdGl0bGUiLCJpbWFnZVVybCIsInNoYXJlX2ltYWdlVXJsIiwic2hhcmUiLCJzaGFyZUFwcE1lc3NhZ2UiLCJxdWVyeSIsInN1Y2Nlc3MiLCJmYWlsIiwiY29tcGxldGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLEVBQWY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhLENBQUU7O0VBQ2ZBLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxJQUFaLEdBQW1CLFlBQVk7SUFDM0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7O0lBQ0EsSUFBSVIsQ0FBQyxJQUFJQSxDQUFDLENBQUNTLGFBQVgsRUFBMEI7TUFDdEJULENBQUMsQ0FBQ1MsYUFBRixDQUFnQjtRQUNaQyxlQUFlLEVBQUUsQ0FBQyxDQUROO1FBRVpDLEtBQUssRUFBRSxDQUFDLGlCQUFELEVBQW9CLGVBQXBCO01BRkssQ0FBaEI7SUFJSDs7SUFDRCxJQUFJWCxDQUFDLElBQUlBLENBQUMsQ0FBQ1MsYUFBWCxFQUEwQjtNQUN0QlQsQ0FBQyxDQUFDUyxhQUFGLENBQWdCO1FBQ1pDLGVBQWUsRUFBRSxDQUFDLENBRE47UUFFWkMsS0FBSyxFQUFFLENBQUMsaUJBQUQsRUFBb0IsZUFBcEI7TUFGSyxDQUFoQjtJQUlIOztJQUNELElBQUlYLENBQUMsSUFBSUEsQ0FBQyxDQUFDWSxpQkFBWCxFQUE4QjtNQUMxQlosQ0FBQyxDQUFDWSxpQkFBRixDQUFvQixZQUFZO1FBQzVCLE9BQU87VUFDSEMsS0FBSyxFQUFFZixTQUFTLENBQUNnQixRQUFWLENBQW1CQyxNQUFuQixDQUEwQkMsV0FEOUI7VUFFSEMsUUFBUSxFQUFFbkIsU0FBUyxDQUFDZ0IsUUFBVixDQUFtQkMsTUFBbkIsQ0FBMEJHO1FBRmpDLENBQVA7TUFJSCxDQUxEO0lBTUg7RUFDSixDQXRCRDs7RUF1QkFkLENBQUMsQ0FBQ0MsU0FBRixDQUFZYyxLQUFaLEdBQW9CLFVBQVVmLENBQVYsRUFBYTtJQUM3QixJQUFJSixDQUFDLElBQUlBLENBQUMsQ0FBQ29CLGVBQVgsRUFBNEI7TUFDeEJwQixDQUFDLENBQUNvQixlQUFGLENBQWtCO1FBQ2RQLEtBQUssRUFBRVQsQ0FBQyxDQUFDWSxXQUFGLElBQWlCbEIsU0FBUyxDQUFDZ0IsUUFBVixDQUFtQkMsTUFBbkIsQ0FBMEJDLFdBRHBDO1FBRWRDLFFBQVEsRUFBRWIsQ0FBQyxDQUFDYyxjQUFGLElBQW9CcEIsU0FBUyxDQUFDZ0IsUUFBVixDQUFtQkMsTUFBbkIsQ0FBMEJHLGNBRjFDO1FBR2RHLEtBQUssRUFBRWpCLENBQUMsQ0FBQ2lCLEtBQUYsSUFBVyxFQUhKO1FBSWRDLE9BQU8sRUFBRSxtQkFBWTtVQUNqQixJQUFJbEIsQ0FBQyxJQUFJQSxDQUFDLENBQUNrQixPQUFYLEVBQW9CO1lBQ2hCbEIsQ0FBQyxDQUFDa0IsT0FBRjtVQUNIO1FBQ0osQ0FSYTtRQVNkQyxJQUFJLEVBQUUsZ0JBQVk7VUFDZCxJQUFJbkIsQ0FBQyxJQUFJQSxDQUFDLENBQUNtQixJQUFYLEVBQWlCO1lBQ2JuQixDQUFDLENBQUNtQixJQUFGO1VBQ0g7UUFDSixDQWJhO1FBY2RDLFFBQVEsRUFBRSxvQkFBWTtVQUNsQixJQUFJcEIsQ0FBQyxJQUFJQSxDQUFDLENBQUNvQixRQUFYLEVBQXFCO1lBQ2pCcEIsQ0FBQyxDQUFDb0IsUUFBRjtVQUNIO1FBQ0o7TUFsQmEsQ0FBbEI7SUFvQkg7RUFDSixDQXZCRDs7RUF3QkEsT0FBT3BCLENBQVA7QUFDSCxDQWxETyxFQUFSOztBQW1EQXFCLE9BQU8sV0FBUCxHQUFrQnRCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJGFEQ29uZmlnID0gcmVxdWlyZShcIi4vQURDb25maWdcIik7XHJcbnZhciBuID0gd2luZG93Lnd4O1xyXG52YXIgcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KCkge31cclxuICAgIHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaGFyZSBpbml0XCIpO1xyXG4gICAgICAgIGlmIChuICYmIG4uc2hvd1NoYXJlTWVudSkge1xyXG4gICAgICAgICAgICBuLnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiAhMCxcclxuICAgICAgICAgICAgICAgIG1lbnVzOiBbXCJzaGFyZUFwcE1lc3NhZ2VcIiwgXCJzaGFyZVRpbWVsaW5lXCJdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobiAmJiBuLnNob3dTaGFyZU1lbnUpIHtcclxuICAgICAgICAgICAgbi5zaG93U2hhcmVNZW51KHtcclxuICAgICAgICAgICAgICAgIHdpdGhTaGFyZVRpY2tldDogITAsXHJcbiAgICAgICAgICAgICAgICBtZW51czogW1wic2hhcmVBcHBNZXNzYWdlXCIsIFwic2hhcmVUaW1lbGluZVwiXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4gJiYgbi5vblNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICAgICAgICBuLm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICRhRENvbmZpZy5BRENvbmZpZy53ZWNoYXQuc2hhcmVfdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6ICRhRENvbmZpZy5BRENvbmZpZy53ZWNoYXQuc2hhcmVfaW1hZ2VVcmxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5zaGFyZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKG4gJiYgbi5zaGFyZUFwcE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgbi5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHQuc2hhcmVfdGl0bGUgfHwgJGFEQ29uZmlnLkFEQ29uZmlnLndlY2hhdC5zaGFyZV90aXRsZSxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiB0LnNoYXJlX2ltYWdlVXJsIHx8ICRhRENvbmZpZy5BRENvbmZpZy53ZWNoYXQuc2hhcmVfaW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogdC5xdWVyeSB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIHQuZmFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0LmZhaWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiB0LmNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcztcclxuIl19