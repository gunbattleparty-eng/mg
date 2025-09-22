
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/QQShare.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3d54z+qutFv5LhV0z/MM9c', 'QQShare');
// game_script/scripts/QQShare.js

"use strict";

var $aDConfig = require("./ADConfig");

var n = window.qq;

var s = function () {
  function t() {}

  t.prototype.init = function () {
    console.log("share init");

    if (n && n.showShareMenu) {
      n.showShareMenu({
        showShareItems: $aDConfig.ADConfig.qq.share_menus
      });
    }

    if (n && n.onShareAppMessage) {
      n.onShareAppMessage(function () {
        return {
          title: $aDConfig.ADConfig.qq.share_title,
          imageUrl: $aDConfig.ADConfig.qq.share_imageUrl
        };
      });
    }
  };

  t.prototype.share = function (t) {
    if (n && n.shareAppMessage) {
      n.shareAppMessage({
        title: t.share_title || $aDConfig.ADConfig.qq.share_title,
        imageUrl: t.share_imageUrl || $aDConfig.ADConfig.qq.share_imageUrl,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFFRU2hhcmUuanMiXSwibmFtZXMiOlsiJGFEQ29uZmlnIiwicmVxdWlyZSIsIm4iLCJ3aW5kb3ciLCJxcSIsInMiLCJ0IiwicHJvdG90eXBlIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJzaG93U2hhcmVNZW51Iiwic2hvd1NoYXJlSXRlbXMiLCJBRENvbmZpZyIsInNoYXJlX21lbnVzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsInNoYXJlX3RpdGxlIiwiaW1hZ2VVcmwiLCJzaGFyZV9pbWFnZVVybCIsInNoYXJlIiwic2hhcmVBcHBNZXNzYWdlIiwicXVlcnkiLCJzdWNjZXNzIiwiZmFpbCIsImNvbXBsZXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXZCOztBQUNBLElBQUlDLENBQUMsR0FBR0MsTUFBTSxDQUFDQyxFQUFmOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLFNBQUYsQ0FBWUMsSUFBWixHQUFtQixZQUFZO0lBQzNCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaOztJQUNBLElBQUlSLENBQUMsSUFBSUEsQ0FBQyxDQUFDUyxhQUFYLEVBQTBCO01BQ3RCVCxDQUFDLENBQUNTLGFBQUYsQ0FBZ0I7UUFDWkMsY0FBYyxFQUFFWixTQUFTLENBQUNhLFFBQVYsQ0FBbUJULEVBQW5CLENBQXNCVTtNQUQxQixDQUFoQjtJQUdIOztJQUNELElBQUlaLENBQUMsSUFBSUEsQ0FBQyxDQUFDYSxpQkFBWCxFQUE4QjtNQUMxQmIsQ0FBQyxDQUFDYSxpQkFBRixDQUFvQixZQUFZO1FBQzVCLE9BQU87VUFDSEMsS0FBSyxFQUFFaEIsU0FBUyxDQUFDYSxRQUFWLENBQW1CVCxFQUFuQixDQUFzQmEsV0FEMUI7VUFFSEMsUUFBUSxFQUFFbEIsU0FBUyxDQUFDYSxRQUFWLENBQW1CVCxFQUFuQixDQUFzQmU7UUFGN0IsQ0FBUDtNQUlILENBTEQ7SUFNSDtFQUNKLENBZkQ7O0VBZ0JBYixDQUFDLENBQUNDLFNBQUYsQ0FBWWEsS0FBWixHQUFvQixVQUFVZCxDQUFWLEVBQWE7SUFDN0IsSUFBSUosQ0FBQyxJQUFJQSxDQUFDLENBQUNtQixlQUFYLEVBQTRCO01BQ3hCbkIsQ0FBQyxDQUFDbUIsZUFBRixDQUFrQjtRQUNkTCxLQUFLLEVBQUVWLENBQUMsQ0FBQ1csV0FBRixJQUFpQmpCLFNBQVMsQ0FBQ2EsUUFBVixDQUFtQlQsRUFBbkIsQ0FBc0JhLFdBRGhDO1FBRWRDLFFBQVEsRUFBRVosQ0FBQyxDQUFDYSxjQUFGLElBQW9CbkIsU0FBUyxDQUFDYSxRQUFWLENBQW1CVCxFQUFuQixDQUFzQmUsY0FGdEM7UUFHZEcsS0FBSyxFQUFFaEIsQ0FBQyxDQUFDZ0IsS0FBRixJQUFXLEVBSEo7UUFJZEMsT0FBTyxFQUFFLG1CQUFZO1VBQ2pCLElBQUlqQixDQUFDLElBQUlBLENBQUMsQ0FBQ2lCLE9BQVgsRUFBb0I7WUFDaEJqQixDQUFDLENBQUNpQixPQUFGO1VBQ0g7UUFDSixDQVJhO1FBU2RDLElBQUksRUFBRSxnQkFBWTtVQUNkLElBQUlsQixDQUFDLElBQUlBLENBQUMsQ0FBQ2tCLElBQVgsRUFBaUI7WUFDYmxCLENBQUMsQ0FBQ2tCLElBQUY7VUFDSDtRQUNKLENBYmE7UUFjZEMsUUFBUSxFQUFFLG9CQUFZO1VBQ2xCLElBQUluQixDQUFDLElBQUlBLENBQUMsQ0FBQ21CLFFBQVgsRUFBcUI7WUFDakJuQixDQUFDLENBQUNtQixRQUFGO1VBQ0g7UUFDSjtNQWxCYSxDQUFsQjtJQW9CSDtFQUNKLENBdkJEOztFQXdCQSxPQUFPbkIsQ0FBUDtBQUNILENBM0NPLEVBQVI7O0FBNENBb0IsT0FBTyxXQUFQLEdBQWtCckIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkYURDb25maWcgPSByZXF1aXJlKFwiLi9BRENvbmZpZ1wiKTtcclxudmFyIG4gPSB3aW5kb3cucXE7XHJcbnZhciBzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7fVxyXG4gICAgdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNoYXJlIGluaXRcIik7XHJcbiAgICAgICAgaWYgKG4gJiYgbi5zaG93U2hhcmVNZW51KSB7XHJcbiAgICAgICAgICAgIG4uc2hvd1NoYXJlTWVudSh7XHJcbiAgICAgICAgICAgICAgICBzaG93U2hhcmVJdGVtczogJGFEQ29uZmlnLkFEQ29uZmlnLnFxLnNoYXJlX21lbnVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobiAmJiBuLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIG4ub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJGFEQ29uZmlnLkFEQ29uZmlnLnFxLnNoYXJlX3RpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiAkYURDb25maWcuQURDb25maWcucXEuc2hhcmVfaW1hZ2VVcmxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5zaGFyZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKG4gJiYgbi5zaGFyZUFwcE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgbi5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHQuc2hhcmVfdGl0bGUgfHwgJGFEQ29uZmlnLkFEQ29uZmlnLnFxLnNoYXJlX3RpdGxlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHQuc2hhcmVfaW1hZ2VVcmwgfHwgJGFEQ29uZmlnLkFEQ29uZmlnLnFxLnNoYXJlX2ltYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHQucXVlcnkgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiB0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5zdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiB0LmZhaWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5mYWlsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgdC5jb21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0LmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHQ7XHJcbn0pKCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHM7XHJcbiJdfQ==