
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/EggKeyView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b243fOhChPYrHiW3bpDQys', 'EggKeyView');
// game_script/scripts/EggKeyView.js

"use strict";

var o;

var $uIManager = require("./UIManager");

var $popupView = require("./PopupView");

var $platform = require("./Platform");

var $aD = require("./AD");

var $adService = require("./AdService");

var $userDataContext = require("./UserDataContext");

var p = cc._decorator;
var f = p.ccclass;
var h = p.property;

var m = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btnAd = null;
    e.tipLable = null;
    e.type = -1;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    var t;
    this.type = null === (t = this.uiParam.param) || void 0 === t ? void 0 : t.type;

    if (!this.type) {
      this.type;
    }

    1 === this.type ? this.tipLable.string = "观看广告获得钥匙" : this.tipLable.string = "是否让宝箱进入沉睡状态";
  };

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
        1 === e.type ? $aD["default"].toutiao.report("Egg_key") : $aD["default"].toutiao.report("Egg_key_box");
      }

      1 === e.type ? ($uIManager.UIManager.instance.showToast("获得钥匙"), $userDataContext["default"].Ins.setEgg(1, 1)) : $userDataContext["default"].Ins.setEgg(2, 1);
      t.prototype.onClickClose.call(e);
    });
  };

  __decorate([h(cc.Node)], e.prototype, "btnAd", void 0);

  __decorate([h(cc.Label)], e.prototype, "tipLable", void 0);

  return __decorate([f], e);
}($popupView.PopupView);

exports["default"] = m;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVnZ0tleVZpZXcuanMiXSwibmFtZXMiOlsibyIsIiR1SU1hbmFnZXIiLCJyZXF1aXJlIiwiJHBvcHVwVmlldyIsIiRwbGF0Zm9ybSIsIiRhRCIsIiRhZFNlcnZpY2UiLCIkdXNlckRhdGFDb250ZXh0IiwicCIsImNjIiwiX2RlY29yYXRvciIsImYiLCJjY2NsYXNzIiwiaCIsInByb3BlcnR5IiwibSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJidG5BZCIsInRpcExhYmxlIiwidHlwZSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uUmVzZXRWaWV3IiwidWlQYXJhbSIsInBhcmFtIiwic3RyaW5nIiwiYWRkRXZlbnQiLCJvbiIsImNsaWNrQWQiLCJyZW1vdmVFdmVudCIsIm9mZiIsIklucyIsInNob3dSZXdhcmRlZFZpZGVvIiwiUGxhdGZvcm0iLCJjdXJyUGxhdEZvcm0iLCJQbGF0Zm9ybUVudW0iLCJUT1VfVElBTyIsInRvdXRpYW8iLCJyZXBvcnQiLCJVSU1hbmFnZXIiLCJpbnN0YW5jZSIsInNob3dUb2FzdCIsInNldEVnZyIsIm9uQ2xpY2tDbG9zZSIsImNhbGwiLCJfX2RlY29yYXRlIiwiTm9kZSIsIkxhYmVsIiwiUG9wdXBWaWV3IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFVBQVUsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxZQUFELENBQXZCOztBQUNBLElBQUlHLEdBQUcsR0FBR0gsT0FBTyxDQUFDLE1BQUQsQ0FBakI7O0FBQ0EsSUFBSUksVUFBVSxHQUFHSixPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJSyxnQkFBZ0IsR0FBR0wsT0FBTyxD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QUQsRUFBZWhDLENBQUMsQ0FBQ08sU0FBakIsRUFBNEIsT0FBNUIsRUFBcUMsS0FBSyxDQUExQyxDQUFWOztFQUNBd0IsVUFBVSxDQUFDLENBQUNuQyxDQUFDLENBQUNKLEVBQUUsQ0FBQ3lDLEtBQUosQ0FBRixDQUFELEVBQWdCakMsQ0FBQyxDQUFDTyxTQUFsQixFQUE2QixVQUE3QixFQUF5QyxLQUFLLENBQTlDLENBQVY7O0VBQ0EsT0FBT3dCLFVBQVUsQ0FBQyxDQUFDckMsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQXhDTyxDQXdDTGQsVUFBVSxDQUFDZ0QsU0F4Q04sQ0FBUjs7QUF5Q0FDLE9BQU8sV0FBUCxHQUFrQnJDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICR1SU1hbmFnZXIgPSByZXF1aXJlKFwiLi9VSU1hbmFnZXJcIik7XHJcbnZhciAkcG9wdXBWaWV3ID0gcmVxdWlyZShcIi4vUG9wdXBWaWV3XCIpO1xyXG52YXIgJHBsYXRmb3JtID0gcmVxdWlyZShcIi4vUGxhdGZvcm1cIik7XHJcbnZhciAkYUQgPSByZXF1aXJlKFwiLi9BRFwiKTtcclxudmFyICRhZFNlcnZpY2UgPSByZXF1aXJlKFwiLi9BZFNlcnZpY2VcIik7XHJcbnZhciAkdXNlckRhdGFDb250ZXh0ID0gcmVxdWlyZShcIi4vVXNlckRhdGFDb250ZXh0XCIpO1xyXG52YXIgcCA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBmID0gcC5jY2NsYXNzO1xyXG52YXIgaCA9IHAucHJvcGVydHk7XHJcbnZhciBtID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUuYnRuQWQgPSBudWxsO1xyXG4gICAgICAgIGUudGlwTGFibGUgPSBudWxsO1xyXG4gICAgICAgIGUudHlwZSA9IC0xO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUub25SZXNldFZpZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQ7XHJcbiAgICAgICAgdGhpcy50eXBlID0gbnVsbCA9PT0gKHQgPSB0aGlzLnVpUGFyYW0ucGFyYW0pIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQudHlwZTtcclxuICAgICAgICBpZiAoIXRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEgPT09IHRoaXMudHlwZVxyXG4gICAgICAgICAgICA/ICh0aGlzLnRpcExhYmxlLnN0cmluZyA9IFwi6KeC55yL5bm/5ZGK6I635b6X6ZKl5YyZXCIpXHJcbiAgICAgICAgICAgIDogKHRoaXMudGlwTGFibGUuc3RyaW5nID0gXCLmmK/lkKborqnlrp3nrrHov5vlhaXmsonnnaHnirbmgIFcIik7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5idG5BZC5vbihcImNsaWNrXCIsIHRoaXMuY2xpY2tBZCwgdGhpcyk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5idG5BZC5vZmYoXCJjbGlja1wiLCB0aGlzLmNsaWNrQWQsIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmNsaWNrQWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgICAgICRhZFNlcnZpY2UuZGVmYXVsdC5JbnMuc2hvd1Jld2FyZGVkVmlkZW8oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJHBsYXRmb3JtLlBsYXRmb3JtLmN1cnJQbGF0Rm9ybSA9PT0gJHBsYXRmb3JtLlBsYXRmb3JtRW51bS5UT1VfVElBTykge1xyXG4gICAgICAgICAgICAgICAgMSA9PT0gZS50eXBlID8gJGFELmRlZmF1bHQudG91dGlhby5yZXBvcnQoXCJFZ2dfa2V5XCIpIDogJGFELmRlZmF1bHQudG91dGlhby5yZXBvcnQoXCJFZ2dfa2V5X2JveFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxID09PSBlLnR5cGVcclxuICAgICAgICAgICAgICAgID8gKCR1SU1hbmFnZXIuVUlNYW5hZ2VyLmluc3RhbmNlLnNob3dUb2FzdChcIuiOt+W+l+mSpeWMmVwiKSwgJHVzZXJEYXRhQ29udGV4dC5kZWZhdWx0Lklucy5zZXRFZ2coMSwgMSkpXHJcbiAgICAgICAgICAgICAgICA6ICR1c2VyRGF0YUNvbnRleHQuZGVmYXVsdC5JbnMuc2V0RWdnKDIsIDEpO1xyXG4gICAgICAgICAgICB0LnByb3RvdHlwZS5vbkNsaWNrQ2xvc2UuY2FsbChlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtoKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiYnRuQWRcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW2goY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwidGlwTGFibGVcIiwgdm9pZCAwKTtcclxuICAgIHJldHVybiBfX2RlY29yYXRlKFtmXSwgZSk7XHJcbn0pKCRwb3B1cFZpZXcuUG9wdXBWaWV3KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gbTtcclxuIl19