
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/AdCoinView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4463f160JBgrFXdARznHmp', 'AdCoinView');
// game_script/scripts/AdCoinView.js

"use strict";

var o;

var $assetsMap = require("./AssetsMap");

var $popupManager = require("./PopupManager");

var $popupView = require("./PopupView");

var $platform = require("./Platform");

var $seedUtil = require("./SeedUtil");

var $aD = require("./AD");

var $adService = require("./AdService");

var $shopContext = require("./ShopContext");

var $userDataContext = require("./UserDataContext");

var m = cc._decorator;
var y = m.ccclass;
var g = m.property;

var _ = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btnAd = null;
    e.counts = [2, 3, 4, 5, 6, 7];
    e.weights = [6e3, 3e3, 100, 10, 1, 1];
    return e;
  }

  __extends(e, t);

  e.prototype.addEvent = function () {
    this.btnAd.on("click", this.clickAd, this);
  };

  e.prototype.removeEvent = function () {
    this.btnAd.off("click", this.clickAd, this);
  };

  e.prototype.clickAd = function () {
    var e = this;
    $adService["default"].Ins.showRewardedVideo(function () {
      if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
        $aD["default"].toutiao.report("free_ad_box");
      }

      var i = $seedUtil["default"].weightRandomCount(e.weights, 1)[0];
      var o = e.counts[i];
      $userDataContext["default"].Ins.opearAdCoin(o);
      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
        infos: [{
          type: 12,
          num: o
        }]
      });
      $shopContext["default"].Ins.addShopResRecord(12);
      t.prototype.onClickClose.call(e);
    });
  };

  __decorate([g(cc.Node)], e.prototype, "btnAd", void 0);

  return __decorate([y], e);
}($popupView.PopupView);

exports["default"] = _;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEFkQ29pblZpZXcuanMiXSwibmFtZXMiOlsibyIsIiRhc3NldHNNYXAiLCJyZXF1aXJlIiwiJHBvcHVwTWFuYWdlciIsIiRwb3B1cFZpZXciLCIkcGxhdGZvcm0iLCIkc2VlZFV0aWwiLCIkYUQiLCIkYWRTZXJ2aWNlIiwiJHNob3BDb250ZXh0IiwiJHVzZXJEYXRhQ29udGV4dCIsIm0iLCJjYyIsIl9kZWNvcmF0b3IiLCJ5IiwiY2NjbGFzcyIsImciLCJwcm9wZXJ0eSIsIl8iLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnRuQWQiLCJjb3VudHMiLCJ3ZWlnaHRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiYWRkRXZlbnQiLCJvbiIsImNsaWNrQWQiLCJyZW1vdmVFdmVudCIsIm9mZiIsIklucyIsInNob3dSZXdhcmRlZFZpZGVvIiwiUGxhdGZvcm0iLCJjdXJyUGxhdEZvcm0iLCJQbGF0Zm9ybUVudW0iLCJUT1VfVElBTyIsInRvdXRpYW8iLCJyZXBvcnQiLCJpIiwid2VpZ2h0UmFuZG9tQ291bnQiLCJvcGVhckFkQ29pbiIsIlBvcHVwTWFuYWdlciIsImluc3RhbmNlIiwib3BlbiIsIkFzc2V0c01hcCIsIlBvcFVwQnVuZGxlcyIsInByZWZhYnMiLCJhc3NldHNMaXN0IiwiUmV3YXJkVmlldyIsImluZm9zIiwidHlwZSIsIm51bSIsImFkZFNob3BSZXNSZWNvcmQiLCJvbkNsaWNrQ2xvc2UiLCJjYWxsIiwiX19kZWNvcmF0ZSIsIk5vZGUiLCJQb3B1cFZpZXciLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJRSxVQUFVLEdBQUdGLE9BQU8sQ0FBQyxhQUFE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cUJ3QixHQUFyQixDQUF5QnNCLGdCQUF6QixDQUEwQyxFQUExQztNQUNBcEMsQ0FBQyxDQUFDUSxTQUFGLENBQVk2QixZQUFaLENBQXlCQyxJQUF6QixDQUE4QnJDLENBQTlCO0lBQ0gsQ0FqQkQ7RUFrQkgsQ0FwQkQ7O0VBcUJBc0MsVUFBVSxDQUFDLENBQUMxQyxDQUFDLENBQUNKLEVBQUUsQ0FBQytDLElBQUosQ0FBRixDQUFELEVBQWV2QyxDQUFDLENBQUNPLFNBQWpCLEVBQTRCLE9BQTVCLEVBQXFDLEtBQUssQ0FBMUMsQ0FBVjs7RUFDQSxPQUFPK0IsVUFBVSxDQUFDLENBQUM1QyxDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBdENPLENBc0NMaEIsVUFBVSxDQUFDd0QsU0F0Q04sQ0FBUjs7QUF1Q0FDLE9BQU8sV0FBUCxHQUFrQjNDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRhc3NldHNNYXAgPSByZXF1aXJlKFwiLi9Bc3NldHNNYXBcIik7XHJcbnZhciAkcG9wdXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vUG9wdXBNYW5hZ2VyXCIpO1xyXG52YXIgJHBvcHVwVmlldyA9IHJlcXVpcmUoXCIuL1BvcHVwVmlld1wiKTtcclxudmFyICRwbGF0Zm9ybSA9IHJlcXVpcmUoXCIuL1BsYXRmb3JtXCIpO1xyXG52YXIgJHNlZWRVdGlsID0gcmVxdWlyZShcIi4vU2VlZFV0aWxcIik7XHJcbnZhciAkYUQgPSByZXF1aXJlKFwiLi9BRFwiKTtcclxudmFyICRhZFNlcnZpY2UgPSByZXF1aXJlKFwiLi9BZFNlcnZpY2VcIik7XHJcbnZhciAkc2hvcENvbnRleHQgPSByZXF1aXJlKFwiLi9TaG9wQ29udGV4dFwiKTtcclxudmFyICR1c2VyRGF0YUNvbnRleHQgPSByZXF1aXJlKFwiLi9Vc2VyRGF0YUNvbnRleHRcIik7XHJcbnZhciBtID0gY2MuX2RlY29yYXRvcjtcclxudmFyIHkgPSBtLmNjY2xhc3M7XHJcbnZhciBnID0gbS5wcm9wZXJ0eTtcclxudmFyIF8gPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgZS5idG5BZCA9IG51bGw7XHJcbiAgICAgICAgZS5jb3VudHMgPSBbMiwgMywgNCwgNSwgNiwgN107XHJcbiAgICAgICAgZS53ZWlnaHRzID0gWzZlMywgM2UzLCAxMDAsIDEwLCAxLCAxXTtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYnRuQWQub24oXCJjbGlja1wiLCB0aGlzLmNsaWNrQWQsIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYnRuQWQub2ZmKFwiY2xpY2tcIiwgdGhpcy5jbGlja0FkLCB0aGlzKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jbGlja0FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlID0gdGhpcztcclxuICAgICAgICAkYWRTZXJ2aWNlLmRlZmF1bHQuSW5zLnNob3dSZXdhcmRlZFZpZGVvKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybS5QbGF0Zm9ybS5jdXJyUGxhdEZvcm0gPT09ICRwbGF0Zm9ybS5QbGF0Zm9ybUVudW0uVE9VX1RJQU8pIHtcclxuICAgICAgICAgICAgICAgICRhRC5kZWZhdWx0LnRvdXRpYW8ucmVwb3J0KFwiZnJlZV9hZF9ib3hcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGkgPSAkc2VlZFV0aWwuZGVmYXVsdC53ZWlnaHRSYW5kb21Db3VudChlLndlaWdodHMsIDEpWzBdO1xyXG4gICAgICAgICAgICB2YXIgbyA9IGUuY291bnRzW2ldO1xyXG4gICAgICAgICAgICAkdXNlckRhdGFDb250ZXh0LmRlZmF1bHQuSW5zLm9wZWFyQWRDb2luKG8pO1xyXG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLlBvcHVwTWFuYWdlci5pbnN0YW5jZS5vcGVuKCRhc3NldHNNYXAuQXNzZXRzTWFwLlBvcFVwQnVuZGxlcy5wcmVmYWJzLmFzc2V0c0xpc3QuUmV3YXJkVmlldywge1xyXG4gICAgICAgICAgICAgICAgaW5mb3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW06IG9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkc2hvcENvbnRleHQuZGVmYXVsdC5JbnMuYWRkU2hvcFJlc1JlY29yZCgxMik7XHJcbiAgICAgICAgICAgIHQucHJvdG90eXBlLm9uQ2xpY2tDbG9zZS5jYWxsKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW2coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJidG5BZFwiLCB2b2lkIDApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3ldLCBlKTtcclxufSkoJHBvcHVwVmlldy5Qb3B1cFZpZXcpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBfO1xyXG4iXX0=