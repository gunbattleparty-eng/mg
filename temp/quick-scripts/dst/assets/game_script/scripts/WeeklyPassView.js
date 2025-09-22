
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/WeeklyPassView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c05b9zaK49OkrVXU9JEWH7S', 'WeeklyPassView');
// game_script/scripts/WeeklyPassView.js

"use strict";

var o;

var $list = require("./List");

var $popupView = require("./PopupView");

var $platform = require("./Platform");

var $aD = require("./AD");

var $adService = require("./AdService");

var $configContext = require("./ConfigContext");

var $weekCardService = require("./WeekCardService");

var $weeklyPassItem = require("./WeeklyPassItem");

var h = cc._decorator;
var m = h.ccclass;
var y = h.property;

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.page1 = null;
    e.page2 = null;
    e.list = null;
    e.btnAd = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    this.page1.active = !$weekCardService["default"].Ins.isLock();
    this.page2.active = $weekCardService["default"].Ins.isLock();

    if (this.page2.active) {
      this.list.numItems = $configContext["default"].instance.weekCardConfigs.length;
    }

    this.btnAd.getComponentInChildren(cc.Label).string = "领取(" + $weekCardService["default"].Ins.weekCardInfo.lockNum + "/5)";
  };

  e.prototype.addEvent = function () {
    this.btnAd.on("click", this.clickAd, this);
  };

  e.prototype.removeEvent = function () {
    this.btnAd.off("click", this.clickAd, this);
  };

  e.prototype.refresh = function () {
    this.page1.active = !$weekCardService["default"].Ins.isLock();
    this.page2.active = $weekCardService["default"].Ins.isLock();

    if (this.page2.active) {
      this.list.numItems = $configContext["default"].instance.weekCardConfigs.length;
    }

    this.btnAd.getComponentInChildren(cc.Label).string = "领取(" + $weekCardService["default"].Ins.weekCardInfo.lockNum + "/5)";
  };

  e.prototype.renderItem = function (t, e) {
    var i = $configContext["default"].instance.weekCardConfigs[e];
    t.getComponent($weeklyPassItem["default"]).render(i);
  };

  e.prototype.clickAd = function () {
    var t = this;
    $adService["default"].Ins.showRewardedVideo(function () {
      if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
        $aD["default"].toutiao.report("week_reward");
      }

      $weekCardService["default"].Ins.unlock();
      t.refresh();
    });
  };

  __decorate([y(cc.Node)], e.prototype, "page1", void 0);

  __decorate([y(cc.Node)], e.prototype, "page2", void 0);

  __decorate([y($list["default"])], e.prototype, "list", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFdlZWtseVBhc3NWaWV3LmpzIl0sIm5hbWVzIjpbIm8iLCIkbGlzdCIsInJlcXVpcmUiLCIkcG9wdXBWaWV3IiwiJHBsYXRmb3JtIiwiJGFEIiwiJGFkU2VydmljZSIsIiRjb25maWdDb250ZXh0IiwiJHdlZWtDYXJkU2VydmljZSIsIiR3ZWVrbHlQYXNzSXRlbSIsImgiLCJjYyIsIl9kZWNvcmF0b3IiLCJtIiwiY2NjbGFzcyIsInkiLCJwcm9wZXJ0eSIsImciLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwicGFnZTEiLCJwYWdlMiIsImxpc3QiLCJidG5BZCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uUmVzZXRWaWV3IiwiYWN0aXZlIiwiSW5zIiwiaXNMb2NrIiwibnVtSXRlbXMiLCJpbnN0YW5jZSIsIndlZWtDYXJkQ29uZmlncyIsImxlbmd0aCIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJMYWJlbCIsInN0cmluZyIsIndlZWtDYXJkSW5mbyIsImxvY2tOdW0iLCJhZGRFdmVudCIsIm9uIiwiY2xpY2tBZCIsInJlbW92ZUV2ZW50Iiwib2ZmIiwicmVmcmVzaCIsInJlbmRlckl0ZW0iLCJpIiwiZ2V0Q29tcG9uZW50IiwicmVuZGVyIiwic2hvd1Jld2FyZGVkVmlkZW8iLCJQbGF0Zm9ybSIsImN1cnJQbGF0Rm9ybSIsIlBsYXRmb3JtRW51bSIsIlRPVV9USUFPIiwidG91dGlhbyIsInJlcG9ydCIsInVubG9jayIsIl9fZGVjb3JhdGUiLCJOb2RlIiwiUG9wdXBWaWV3IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLEtBQUssR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBbkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxTQUFTLEdBQUdGLE9BQU8sQ0FB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LEVBQUUsQ0FBQ2lELElBQUosQ0FBRixDQUFELEVBQWV6QyxDQUFDLENBQUNRLFNBQWpCLEVBQTRCLE9BQTVCLEVBQXFDLEtBQUssQ0FBMUMsQ0FBVjs7RUFDQWdDLFVBQVUsQ0FBQyxDQUFDNUMsQ0FBQyxDQUFDZCxLQUFLLFdBQU4sQ0FBRixDQUFELEVBQXFCa0IsQ0FBQyxDQUFDUSxTQUF2QixFQUFrQyxNQUFsQyxFQUEwQyxLQUFLLENBQS9DLENBQVY7O0VBQ0FnQyxVQUFVLENBQUMsQ0FBQzVDLENBQUMsQ0FBQ0osRUFBRSxDQUFDaUQsSUFBSixDQUFGLENBQUQsRUFBZXpDLENBQUMsQ0FBQ1EsU0FBakIsRUFBNEIsT0FBNUIsRUFBcUMsS0FBSyxDQUExQyxDQUFWOztFQUNBLE9BQU9nQyxVQUFVLENBQUMsQ0FBQzlDLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0FyRE8sQ0FxRExoQixVQUFVLENBQUMwRCxTQXJETixDQUFSOztBQXNEQUMsT0FBTyxXQUFQLEdBQWtCN0MsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJGxpc3QgPSByZXF1aXJlKFwiLi9MaXN0XCIpO1xyXG52YXIgJHBvcHVwVmlldyA9IHJlcXVpcmUoXCIuL1BvcHVwVmlld1wiKTtcclxudmFyICRwbGF0Zm9ybSA9IHJlcXVpcmUoXCIuL1BsYXRmb3JtXCIpO1xyXG52YXIgJGFEID0gcmVxdWlyZShcIi4vQURcIik7XHJcbnZhciAkYWRTZXJ2aWNlID0gcmVxdWlyZShcIi4vQWRTZXJ2aWNlXCIpO1xyXG52YXIgJGNvbmZpZ0NvbnRleHQgPSByZXF1aXJlKFwiLi9Db25maWdDb250ZXh0XCIpO1xyXG52YXIgJHdlZWtDYXJkU2VydmljZSA9IHJlcXVpcmUoXCIuL1dlZWtDYXJkU2VydmljZVwiKTtcclxudmFyICR3ZWVrbHlQYXNzSXRlbSA9IHJlcXVpcmUoXCIuL1dlZWtseVBhc3NJdGVtXCIpO1xyXG52YXIgaCA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBtID0gaC5jY2NsYXNzO1xyXG52YXIgeSA9IGgucHJvcGVydHk7XHJcbnZhciBnID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUucGFnZTEgPSBudWxsO1xyXG4gICAgICAgIGUucGFnZTIgPSBudWxsO1xyXG4gICAgICAgIGUubGlzdCA9IG51bGw7XHJcbiAgICAgICAgZS5idG5BZCA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLnByb3RvdHlwZS5vblJlc2V0VmlldyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UxLmFjdGl2ZSA9ICEkd2Vla0NhcmRTZXJ2aWNlLmRlZmF1bHQuSW5zLmlzTG9jaygpO1xyXG4gICAgICAgIHRoaXMucGFnZTIuYWN0aXZlID0gJHdlZWtDYXJkU2VydmljZS5kZWZhdWx0Lklucy5pc0xvY2soKTtcclxuICAgICAgICBpZiAodGhpcy5wYWdlMi5hY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0Lm51bUl0ZW1zID0gJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS53ZWVrQ2FyZENvbmZpZ3MubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJ0bkFkLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgICAgIFwi6aKG5Y+WKFwiICsgJHdlZWtDYXJkU2VydmljZS5kZWZhdWx0Lklucy53ZWVrQ2FyZEluZm8ubG9ja051bSArIFwiLzUpXCI7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5idG5BZC5vbihcImNsaWNrXCIsIHRoaXMuY2xpY2tBZCwgdGhpcyk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5idG5BZC5vZmYoXCJjbGlja1wiLCB0aGlzLmNsaWNrQWQsIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlMS5hY3RpdmUgPSAhJHdlZWtDYXJkU2VydmljZS5kZWZhdWx0Lklucy5pc0xvY2soKTtcclxuICAgICAgICB0aGlzLnBhZ2UyLmFjdGl2ZSA9ICR3ZWVrQ2FyZFNlcnZpY2UuZGVmYXVsdC5JbnMuaXNMb2NrKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZTIuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5udW1JdGVtcyA9ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2Uud2Vla0NhcmRDb25maWdzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idG5BZC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPVxyXG4gICAgICAgICAgICBcIumihuWPlihcIiArICR3ZWVrQ2FyZFNlcnZpY2UuZGVmYXVsdC5JbnMud2Vla0NhcmRJbmZvLmxvY2tOdW0gKyBcIi81KVwiO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnJlbmRlckl0ZW0gPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHZhciBpID0gJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS53ZWVrQ2FyZENvbmZpZ3NbZV07XHJcbiAgICAgICAgdC5nZXRDb21wb25lbnQoJHdlZWtseVBhc3NJdGVtLmRlZmF1bHQpLnJlbmRlcihpKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jbGlja0FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICAkYWRTZXJ2aWNlLmRlZmF1bHQuSW5zLnNob3dSZXdhcmRlZFZpZGVvKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybS5QbGF0Zm9ybS5jdXJyUGxhdEZvcm0gPT09ICRwbGF0Zm9ybS5QbGF0Zm9ybUVudW0uVE9VX1RJQU8pIHtcclxuICAgICAgICAgICAgICAgICRhRC5kZWZhdWx0LnRvdXRpYW8ucmVwb3J0KFwid2Vla19yZXdhcmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHdlZWtDYXJkU2VydmljZS5kZWZhdWx0Lklucy51bmxvY2soKTtcclxuICAgICAgICAgICAgdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbeShjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcInBhZ2UxXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFt5KGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwicGFnZTJcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW3koJGxpc3QuZGVmYXVsdCldLCBlLnByb3RvdHlwZSwgXCJsaXN0XCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFt5KGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiYnRuQWRcIiwgdm9pZCAwKTtcclxuICAgIHJldHVybiBfX2RlY29yYXRlKFttXSwgZSk7XHJcbn0pKCRwb3B1cFZpZXcuUG9wdXBWaWV3KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gZztcclxuIl19