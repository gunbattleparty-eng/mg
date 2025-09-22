
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/SkinShardView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a5a5qzlzdMb7om/VSEClnL', 'SkinShardView');
// game_script/scripts/SkinShardView.js

"use strict";

var o;

var $assetsMap = require("./AssetsMap");

var $popupManager = require("./PopupManager");

var $popupView = require("./PopupView");

var $platform = require("./Platform");

var $aD = require("./AD");

var $adService = require("./AdService");

var $roleContext = require("./RoleContext");

var $userDataContext = require("./UserDataContext");

var h = cc._decorator;
var m = h.ccclass;
var y = h.property;

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btnAd = null;
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
        $aD["default"].toutiao.report("Egg_skin");
      }

      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
        infos: [{
          type: 9,
          ext: 2,
          num: 1
        }]
      });
      var i = $roleContext["default"].ins.getPlayerSkinInfo(2);
      i.shard += 1;
      $roleContext["default"].ins.setPlayerSKinInfo(i);
      $userDataContext["default"].Ins.setEgg(3, 1);
      t.prototype.onClickClose.call(e);
    });
  };

  __decorate([y(cc.Node)], e.prototype, "btnAd", void 0);

  return __decorate([m], e);
}($popupView.PopupView);

exports["default"] = g;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNraW5TaGFyZFZpZXcuanMiXSwibmFtZXMiOlsibyIsIiRhc3NldHNNYXAiLCJyZXF1aXJlIiwiJHBvcHVwTWFuYWdlciIsIiRwb3B1cFZpZXciLCIkcGxhdGZvcm0iLCIkYUQiLCIkYWRTZXJ2aWNlIiwiJHJvbGVDb250ZXh0IiwiJHVzZXJEYXRhQ29udGV4dCIsImgiLCJjYyIsIl9kZWNvcmF0b3IiLCJtIiwiY2NjbGFzcyIsInkiLCJwcm9wZXJ0eSIsImciLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnRuQWQiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJhZGRFdmVudCIsIm9uIiwiY2xpY2tBZCIsInJlbW92ZUV2ZW50Iiwib2ZmIiwiSW5zIiwic2hvd1Jld2FyZGVkVmlkZW8iLCJQbGF0Zm9ybSIsImN1cnJQbGF0Rm9ybSIsIlBsYXRmb3JtRW51bSIsIlRPVV9USUFPIiwidG91dGlhbyIsInJlcG9ydCIsIlBvcHVwTWFuYWdlciIsImluc3RhbmNlIiwib3BlbiIsIkFzc2V0c01hcCIsIlBvcFVwQnVuZGxlcyIsInByZWZhYnMiLCJhc3NldHNMaXN0IiwiUmV3YXJkVmlldyIsImluZm9zIiwidHlwZSIsImV4dCIsIm51bSIsImkiLCJpbnMiLCJnZXRQbGF5ZXJTa2luSW5mbyIsInNoYXJkIiwic2V0UGxheWVyU0tpbkluZm8iLCJzZXRFZ2ciLCJvbkNsaWNrQ2xvc2UiLCJjYWxsIiwiX19kZWNvcmF0ZSIsIk5vZGUiLCJQb3B1cFZpZXciLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJRSxVQUFVLEdBQUdGLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNB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QUMsQ0FBQzdDLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0FyQ08sQ0FxQ0xmLFVBQVUsQ0FBQ3dELFNBckNOLENBQVI7O0FBc0NBQyxPQUFPLFdBQVAsR0FBa0I1QyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkYXNzZXRzTWFwID0gcmVxdWlyZShcIi4vQXNzZXRzTWFwXCIpO1xyXG52YXIgJHBvcHVwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BvcHVwTWFuYWdlclwiKTtcclxudmFyICRwb3B1cFZpZXcgPSByZXF1aXJlKFwiLi9Qb3B1cFZpZXdcIik7XHJcbnZhciAkcGxhdGZvcm0gPSByZXF1aXJlKFwiLi9QbGF0Zm9ybVwiKTtcclxudmFyICRhRCA9IHJlcXVpcmUoXCIuL0FEXCIpO1xyXG52YXIgJGFkU2VydmljZSA9IHJlcXVpcmUoXCIuL0FkU2VydmljZVwiKTtcclxudmFyICRyb2xlQ29udGV4dCA9IHJlcXVpcmUoXCIuL1JvbGVDb250ZXh0XCIpO1xyXG52YXIgJHVzZXJEYXRhQ29udGV4dCA9IHJlcXVpcmUoXCIuL1VzZXJEYXRhQ29udGV4dFwiKTtcclxudmFyIGggPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgbSA9IGguY2NjbGFzcztcclxudmFyIHkgPSBoLnByb3BlcnR5O1xyXG52YXIgZyA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLmJ0bkFkID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYnRuQWQub24oXCJjbGlja1wiLCB0aGlzLmNsaWNrQWQsIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYnRuQWQub2ZmKFwiY2xpY2tcIiwgdGhpcy5jbGlja0FkLCB0aGlzKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jbGlja0FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlID0gdGhpcztcclxuICAgICAgICAkYWRTZXJ2aWNlLmRlZmF1bHQuSW5zLnNob3dSZXdhcmRlZFZpZGVvKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybS5QbGF0Zm9ybS5jdXJyUGxhdEZvcm0gPT09ICRwbGF0Zm9ybS5QbGF0Zm9ybUVudW0uVE9VX1RJQU8pIHtcclxuICAgICAgICAgICAgICAgICRhRC5kZWZhdWx0LnRvdXRpYW8ucmVwb3J0KFwiRWdnX3NraW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5Qb3B1cE1hbmFnZXIuaW5zdGFuY2Uub3BlbigkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LlJld2FyZFZpZXcsIHtcclxuICAgICAgICAgICAgICAgIGluZm9zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiA5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBpID0gJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLmdldFBsYXllclNraW5JbmZvKDIpO1xyXG4gICAgICAgICAgICBpLnNoYXJkICs9IDE7XHJcbiAgICAgICAgICAgICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5zZXRQbGF5ZXJTS2luSW5mbyhpKTtcclxuICAgICAgICAgICAgJHVzZXJEYXRhQ29udGV4dC5kZWZhdWx0Lklucy5zZXRFZ2coMywgMSk7XHJcbiAgICAgICAgICAgIHQucHJvdG90eXBlLm9uQ2xpY2tDbG9zZS5jYWxsKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW3koY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJidG5BZFwiLCB2b2lkIDApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW21dLCBlKTtcclxufSkoJHBvcHVwVmlldy5Qb3B1cFZpZXcpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBnO1xyXG4iXX0=