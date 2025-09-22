
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/TTGiftView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e10eZ7WN5ODa3egb3jgMcp', 'TTGiftView');
// game_script/scripts/TTGiftView.js

"use strict";

var o;

var $uIManager = require("./UIManager");

var $popupView = require("./PopupView");

var $aD = require("./AD");

var $switchContext = require("./SwitchContext");

var $userDataContext = require("./UserDataContext");

var d = cc._decorator;
var p = d.ccclass;
var f = d.property;

var h = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btnTip = null;
    e.icons = [];
    e.zis = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    console.log("=========================", $aD["default"].toutiao.isSidebarCome());
    var t = $aD["default"].toutiao.isSidebarCome() ? "领取奖励" : "前往侧边栏";
    this.btnTip.getComponentInChildren(cc.Label).string = t;

    for (var e = 0; e < this.icons.length; e++) {
      this.icons[e].active = $switchContext.SwitchContext.currVersion === e;
      this.zis[e].active = $switchContext.SwitchContext.currVersion === e;
    }
  };

  e.prototype.addEvent = function () {
    this.btnTip.on("click", this.clickBtn, this);
  };

  e.prototype.removeEvent = function () {
    this.btnTip.off("click", this.clickBtn, this);
  };

  e.prototype.clickBtn = function () {
    $aD["default"].toutiao.isSidebarCome() ? ($userDataContext["default"].Ins.opearCoin(100), $uIManager.UIManager.instance.showToast("领取成功,金币+100"), $aD["default"].toutiao.closeScene(), t.prototype.onClickClose.call(this)) : ($aD["default"].toutiao.navigateToScene(null, function () {
      $uIManager.UIManager.instance.showToast("若点击按钮无反应，可主动从侧边栏访问本游戏后领奖");
    }), t.prototype.onClickClose.call(this));
  };

  __decorate([f(cc.Node)], e.prototype, "btnTip", void 0);

  __decorate([f([cc.Node])], e.prototype, "icons", void 0);

  __decorate([f([cc.Node])], e.prototype, "zis", void 0);

  return __decorate([p], e);
}($popupView.PopupView);

exports["default"] = h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFRUR2lmdFZpZXcuanMiXSwibmFtZXMiOlsibyIsIiR1SU1hbmFnZXIiLCJyZXF1aXJlIiwiJHBvcHVwVmlldyIsIiRhRCIsIiRzd2l0Y2hDb250ZXh0IiwiJHVzZXJEYXRhQ29udGV4dCIsImQiLCJjYyIsIl9kZWNvcmF0b3IiLCJwIiwiY2NjbGFzcyIsImYiLCJwcm9wZXJ0eSIsImgiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnRuVGlwIiwiaWNvbnMiLCJ6aXMiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvblJlc2V0VmlldyIsImNvbnNvbGUiLCJsb2ciLCJ0b3V0aWFvIiwiaXNTaWRlYmFyQ29tZSIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJMYWJlbCIsInN0cmluZyIsImxlbmd0aCIsImFjdGl2ZSIsIlN3aXRjaENvbnRleHQiLCJjdXJyVmVyc2lvbiIsImFkZEV2ZW50Iiwib24iLCJjbGlja0J0biIsInJlbW92ZUV2ZW50Iiwib2ZmIiwiSW5zIiwib3BlYXJDb2luIiwiVUlNYW5hZ2VyIiwiaW5zdGFuY2UiLCJzaG93VG9hc3QiLCJjbG9zZVNjZW5lIiwib25DbGlja0Nsb3NlIiwiY2FsbCIsIm5hdmlnYXRlVG9TY2VuZSIsIl9fZGVjb3JhdGUiLCJOb2RlIiwiUG9wdXBWaWV3IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFVBQVUsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxHQUFHLEdBQUdGLE9BQU8sQ0FBQyxNQUFELENBQWpCOztBQUNBLElBQUlHLGNBQWMsR0FBR0gsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlJLGdCQUFnQixHQUFHSixPQUFPLENBQUMsbUJBQUQsQ0FBOUI7O0FBQ0EsSUFBSUssQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxNQUFGLEdBQVcsSUFBWDtJQUNBSCxDQUFDLENBQUNJLEtBQUYsR0FBVSxFQUFWO0lBQ0FKLENBQUMsQ0FBQ0ssR0FBRixHQUFRLEVBQVI7SUFDQSxPQUFPTCxDQUFQO0VBQ0g7O0VBQ0RNLFNBQVMsQ0FBQ04sQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ08sU0FBRixDQUFZQyxXQUFaLEdBQTBCLFlBQVk7SUFDbENDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDdEIsR0FBRyxXQUFILENBQVl1QixPQUFaLENBQW9CQyxhQUFwQixFQUF6QztJQUNBLElBQUliLENBQUMsR0FBR1gsR0FBRyxXQUFILENBQVl1QixPQUFaLENBQW9CQyxhQUFwQixLQUFzQyxNQUF0QyxHQUErQyxPQUF2RDtJQUNBLEtBQUtULE1BQUwsQ0FBWVUsc0JBQVosQ0FBbUNyQixFQUFFLENBQUNzQixLQUF0QyxFQUE2Q0MsTUFBN0MsR0FBc0RoQixDQUF0RDs7SUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0ksS0FBTCxDQUFXWSxNQUEvQixFQUF1Q2hCLENBQUMsRUFBeEMsRUFBNEM7TUFDeEMsS0FBS0ksS0FBTCxDQUFXSixDQUFYLEVBQWNpQixNQUFkLEdBQXVCNUIsY0FBYyxDQUFDNkIsYUFBZixDQUE2QkMsV0FBN0IsS0FBNkNuQixDQUFwRTtNQUNBLEtBQUtLLEdBQUwsQ0FBU0wsQ0FBVCxFQUFZaUIsTUFBWixHQUFxQjVCLGNBQWMsQ0FBQzZCLGFBQWYsQ0FBNkJDLFdBQTdCLEtBQTZDbkIsQ0FBbEU7SUFDSDtFQUNKLENBUkQ7O0VBU0FBLENBQUMsQ0FBQ08sU0FBRixDQUFZYSxRQUFaLEdBQXVCLFlBQVk7SUFDL0IsS0FBS2pCLE1BQUwsQ0FBWWtCLEVBQVosQ0FBZSxPQUFmLEVBQXdCLEtBQUtDLFFBQTdCLEVBQXVDLElBQXZDO0VBQ0gsQ0FGRDs7RUFHQXRCLENBQUMsQ0FBQ08sU0FBRixDQUFZZ0IsV0FBWixHQUEwQixZQUFZO0lBQ2xDLEtBQUtwQixNQUFMLENBQVlxQixHQUFaLENBQWdCLE9BQWhCLEVBQXlCLEtBQUtGLFFBQTlCLEVBQXdDLElBQXhDO0VBQ0gsQ0FGRDs7RUFHQXRCLENBQUMsQ0FBQ08sU0FBRixDQUFZZSxRQUFaLEdBQXVCLFlBQVk7SUFDL0JsQyxHQUFHLFdBQUgsQ0FBWXVCLE9BQVosQ0FBb0JDLGFBQXBCLE1BQ090QixnQkFBZ0IsV0FBaEIsQ0FBeUJtQyxHQUF6QixDQUE2QkMsU0FBN0IsQ0FBdUMsR0FBdkMsR0FDRHpDLFVBQVUsQ0FBQzBDLFNBQVgsQ0FBcUJDLFFBQXJCLENBQThCQyxTQUE5QixDQUF3QyxhQUF4QyxDQURDLEVBRUR6QyxHQUFHLFdBQUgsQ0FBWXVCLE9BQVosQ0FBb0JtQixVQUFwQixFQUZDLEVBR0QvQixDQUFDLENBQUNRLFNBQUYsQ0FBWXdCLFlBQVosQ0FBeUJDLElBQXpCLENBQThCLElBQTlCLENBSk4sS0FLTzVDLEdBQUcsV0FBSCxDQUFZdUIsT0FBWixDQUFvQnNCLGVBQXBCLENBQW9DLElBQXBDLEVBQTBDLFlBQVk7TUFDbkRoRCxVQUFVLENBQUMwQyxTQUFYLENBQXFCQyxRQUFyQixDQUE4QkMsU0FBOUIsQ0FBd0MsMEJBQXhDO0lBQ0gsQ0FGQSxHQUdEOUIsQ0FBQyxDQUFDUSxTQUFGLENBQVl3QixZQUFaLENBQXlCQyxJQUF6QixDQUE4QixJQUE5QixDQVJOO0VBU0gsQ0FWRDs7RUFXQUUsVUFBVSxDQUFDLENBQUN0QyxDQUFDLENBQUNKLEVBQUUsQ0FBQzJDLElBQUosQ0FBRixDQUFELEVBQWVuQyxDQUFDLENBQUNPLFNBQWpCLEVBQTRCLFFBQTVCLEVBQXNDLEtBQUssQ0FBM0MsQ0FBVjs7RUFDQTJCLFVBQVUsQ0FBQyxDQUFDdEMsQ0FBQyxDQUFDLENBQUNKLEVBQUUsQ0FBQzJDLElBQUosQ0FBRCxDQUFGLENBQUQsRUFBaUJuQyxDQUFDLENBQUNPLFNBQW5CLEVBQThCLE9BQTlCLEVBQXVDLEtBQUssQ0FBNUMsQ0FBVjs7RUFDQTJCLFVBQVUsQ0FBQyxDQUFDdEMsQ0FBQyxDQUFDLENBQUNKLEVBQUUsQ0FBQzJDLElBQUosQ0FBRCxDQUFGLENBQUQsRUFBaUJuQyxDQUFDLENBQUNPLFNBQW5CLEVBQThCLEtBQTlCLEVBQXFDLEtBQUssQ0FBMUMsQ0FBVjs7RUFDQSxPQUFPMkIsVUFBVSxDQUFDLENBQUN4QyxDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBdkNPLENBdUNMYixVQUFVLENBQUNpRCxTQXZDTixDQUFSOztBQXdDQUMsT0FBTyxXQUFQLEdBQWtCdkMsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJHVJTWFuYWdlciA9IHJlcXVpcmUoXCIuL1VJTWFuYWdlclwiKTtcclxudmFyICRwb3B1cFZpZXcgPSByZXF1aXJlKFwiLi9Qb3B1cFZpZXdcIik7XHJcbnZhciAkYUQgPSByZXF1aXJlKFwiLi9BRFwiKTtcclxudmFyICRzd2l0Y2hDb250ZXh0ID0gcmVxdWlyZShcIi4vU3dpdGNoQ29udGV4dFwiKTtcclxudmFyICR1c2VyRGF0YUNvbnRleHQgPSByZXF1aXJlKFwiLi9Vc2VyRGF0YUNvbnRleHRcIik7XHJcbnZhciBkID0gY2MuX2RlY29yYXRvcjtcclxudmFyIHAgPSBkLmNjY2xhc3M7XHJcbnZhciBmID0gZC5wcm9wZXJ0eTtcclxudmFyIGggPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgZS5idG5UaXAgPSBudWxsO1xyXG4gICAgICAgIGUuaWNvbnMgPSBbXTtcclxuICAgICAgICBlLnppcyA9IFtdO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUub25SZXNldFZpZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09XCIsICRhRC5kZWZhdWx0LnRvdXRpYW8uaXNTaWRlYmFyQ29tZSgpKTtcclxuICAgICAgICB2YXIgdCA9ICRhRC5kZWZhdWx0LnRvdXRpYW8uaXNTaWRlYmFyQ29tZSgpID8gXCLpooblj5blpZblirFcIiA6IFwi5YmN5b6A5L6n6L655qCPXCI7XHJcbiAgICAgICAgdGhpcy5idG5UaXAuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gdDtcclxuICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMuaWNvbnMubGVuZ3RoOyBlKyspIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uc1tlXS5hY3RpdmUgPSAkc3dpdGNoQ29udGV4dC5Td2l0Y2hDb250ZXh0LmN1cnJWZXJzaW9uID09PSBlO1xyXG4gICAgICAgICAgICB0aGlzLnppc1tlXS5hY3RpdmUgPSAkc3dpdGNoQ29udGV4dC5Td2l0Y2hDb250ZXh0LmN1cnJWZXJzaW9uID09PSBlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJ0blRpcC5vbihcImNsaWNrXCIsIHRoaXMuY2xpY2tCdG4sIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYnRuVGlwLm9mZihcImNsaWNrXCIsIHRoaXMuY2xpY2tCdG4sIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmNsaWNrQnRuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRhRC5kZWZhdWx0LnRvdXRpYW8uaXNTaWRlYmFyQ29tZSgpXHJcbiAgICAgICAgICAgID8gKCR1c2VyRGF0YUNvbnRleHQuZGVmYXVsdC5JbnMub3BlYXJDb2luKDEwMCksXHJcbiAgICAgICAgICAgICAgJHVJTWFuYWdlci5VSU1hbmFnZXIuaW5zdGFuY2Uuc2hvd1RvYXN0KFwi6aKG5Y+W5oiQ5YqfLOmHkeW4gSsxMDBcIiksXHJcbiAgICAgICAgICAgICAgJGFELmRlZmF1bHQudG91dGlhby5jbG9zZVNjZW5lKCksXHJcbiAgICAgICAgICAgICAgdC5wcm90b3R5cGUub25DbGlja0Nsb3NlLmNhbGwodGhpcykpXHJcbiAgICAgICAgICAgIDogKCRhRC5kZWZhdWx0LnRvdXRpYW8ubmF2aWdhdGVUb1NjZW5lKG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgJHVJTWFuYWdlci5VSU1hbmFnZXIuaW5zdGFuY2Uuc2hvd1RvYXN0KFwi6Iul54K55Ye75oyJ6ZKu5peg5Y+N5bqU77yM5Y+v5Li75Yqo5LuO5L6n6L655qCP6K6/6Zeu5pys5ri45oiP5ZCO6aKG5aWWXCIpO1xyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIHQucHJvdG90eXBlLm9uQ2xpY2tDbG9zZS5jYWxsKHRoaXMpKTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtmKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiYnRuVGlwXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtmKFtjYy5Ob2RlXSldLCBlLnByb3RvdHlwZSwgXCJpY29uc1wiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbZihbY2MuTm9kZV0pXSwgZS5wcm90b3R5cGUsIFwiemlzXCIsIHZvaWQgMCk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbcF0sIGUpO1xyXG59KSgkcG9wdXBWaWV3LlBvcHVwVmlldyk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGg7XHJcbiJdfQ==