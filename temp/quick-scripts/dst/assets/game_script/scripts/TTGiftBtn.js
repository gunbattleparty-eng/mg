
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/TTGiftBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79032fkhPpE9b8+R2Oia5qO', 'TTGiftBtn');
// game_script/scripts/TTGiftBtn.js

"use strict";

var o;

var $assetsMap = require("./AssetsMap");

var $popupManager = require("./PopupManager");

var $platform = require("./Platform");

var $aD = require("./AD");

var u = cc._decorator.ccclass;

var d = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.node.active = !1;

    if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
      this.render();
      this.node.on("click", this.clickBtn, this);
    }
  };

  e.prototype.render = function () {
    var t = this;
    $aD["default"].toutiao.checkScene(function (e) {
      if (e) {
        t.node.active = !0;
      }
    }, function () {
      t.node.active = !1;
    });
  };

  e.prototype.clickBtn = function () {
    var t = this;
    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.TTGiftView, null, {
      closeCallback: function closeCallback() {
        t.render();
      }
    });
  };

  return __decorate([u], e);
}(cc.Component);

exports["default"] = d;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFRUR2lmdEJ0bi5qcyJdLCJuYW1lcyI6WyJvIiwiJGFzc2V0c01hcCIsInJlcXVpcmUiLCIkcG9wdXBNYW5hZ2VyIiwiJHBsYXRmb3JtIiwiJGFEIiwidSIsImNjIiwiX2RlY29yYXRvciIsImNjY2xhc3MiLCJkIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsInN0YXJ0Iiwibm9kZSIsImFjdGl2ZSIsIlBsYXRmb3JtIiwiY3VyclBsYXRGb3JtIiwiUGxhdGZvcm1FbnVtIiwiVE9VX1RJQU8iLCJyZW5kZXIiLCJvbiIsImNsaWNrQnRuIiwidG91dGlhbyIsImNoZWNrU2NlbmUiLCJQb3B1cE1hbmFnZXIiLCJpbnN0YW5jZSIsIm9wZW4iLCJBc3NldHNNYXAiLCJQb3BVcEJ1bmRsZXMiLCJwcmVmYWJzIiwiYXNzZXRzTGlzdCIsIlRUR2lmdFZpZXciLCJjbG9zZUNhbGxiYWNrIiwiX19kZWNvcmF0ZSIsIkNvbXBvbmVudCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsR0FBRyxHQUFHSCxPQUFPLENBQUMsTUFBRCxDQUFqQjs7QUFDQSxJQUFJSSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjQyxPQUF0Qjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsS0FBWixHQUFvQixZQUFZO0lBQzVCLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFtQixDQUFDLENBQXBCOztJQUNBLElBQUlmLFNBQVMsQ0FBQ2dCLFFBQVYsQ0FBbUJDLFlBQW5CLEtBQW9DakIsU0FBUyxDQUFDa0IsWUFBVixDQUF1QkMsUUFBL0QsRUFBeUU7TUFDckUsS0FBS0MsTUFBTDtNQUNBLEtBQUtOLElBQUwsQ0FBVU8sRUFBVixDQUFhLE9BQWIsRUFBc0IsS0FBS0MsUUFBM0IsRUFBcUMsSUFBckM7SUFDSDtFQUNKLENBTkQ7O0VBT0FkLENBQUMsQ0FBQ0ksU0FBRixDQUFZUSxNQUFaLEdBQXFCLFlBQVk7SUFDN0IsSUFBSWIsQ0FBQyxHQUFHLElBQVI7SUFDQU4sR0FBRyxXQUFILENBQVlzQixPQUFaLENBQW9CQyxVQUFwQixDQUNJLFVBQVVoQixDQUFWLEVBQWE7TUFDVCxJQUFJQSxDQUFKLEVBQU87UUFDSEQsQ0FBQyxDQUFDTyxJQUFGLENBQU9DLE1BQVAsR0FBZ0IsQ0FBQyxDQUFqQjtNQUNIO0lBQ0osQ0FMTCxFQU1JLFlBQVk7TUFDUlIsQ0FBQyxDQUFDTyxJQUFGLENBQU9DLE1BQVAsR0FBZ0IsQ0FBQyxDQUFqQjtJQUNILENBUkw7RUFVSCxDQVpEOztFQWFBUCxDQUFDLENBQUNJLFNBQUYsQ0FBWVUsUUFBWixHQUF1QixZQUFZO0lBQy9CLElBQUlmLENBQUMsR0FBRyxJQUFSO0lBQ0FSLGFBQWEsQ0FBQzBCLFlBQWQsQ0FBMkJDLFFBQTNCLENBQW9DQyxJQUFwQyxDQUNJOUIsVUFBVSxDQUFDK0IsU0FBWCxDQUFxQkMsWUFBckIsQ0FBa0NDLE9BQWxDLENBQTBDQyxVQUExQyxDQUFxREMsVUFEekQsRUFFSSxJQUZKLEVBR0k7TUFDSUMsYUFBYSxFQUFFLHlCQUFZO1FBQ3ZCMUIsQ0FBQyxDQUFDYSxNQUFGO01BQ0g7SUFITCxDQUhKO0VBU0gsQ0FYRDs7RUFZQSxPQUFPYyxVQUFVLENBQUMsQ0FBQ2hDLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0F0Q08sQ0FzQ0xMLEVBQUUsQ0FBQ2dDLFNBdENFLENBQVI7O0FBdUNBQyxPQUFPLFdBQVAsR0FBa0I5QixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkYXNzZXRzTWFwID0gcmVxdWlyZShcIi4vQXNzZXRzTWFwXCIpO1xyXG52YXIgJHBvcHVwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BvcHVwTWFuYWdlclwiKTtcclxudmFyICRwbGF0Zm9ybSA9IHJlcXVpcmUoXCIuL1BsYXRmb3JtXCIpO1xyXG52YXIgJGFEID0gcmVxdWlyZShcIi4vQURcIik7XHJcbnZhciB1ID0gY2MuX2RlY29yYXRvci5jY2NsYXNzO1xyXG52YXIgZCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICByZXR1cm4gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ICExO1xyXG4gICAgICAgIGlmICgkcGxhdGZvcm0uUGxhdGZvcm0uY3VyclBsYXRGb3JtID09PSAkcGxhdGZvcm0uUGxhdGZvcm1FbnVtLlRPVV9USUFPKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5vbihcImNsaWNrXCIsIHRoaXMuY2xpY2tCdG4sIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgICRhRC5kZWZhdWx0LnRvdXRpYW8uY2hlY2tTY2VuZShcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5ub2RlLmFjdGl2ZSA9ICEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0Lm5vZGUuYWN0aXZlID0gITE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmNsaWNrQnRuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICAkcG9wdXBNYW5hZ2VyLlBvcHVwTWFuYWdlci5pbnN0YW5jZS5vcGVuKFxyXG4gICAgICAgICAgICAkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LlRUR2lmdFZpZXcsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlQ2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0LnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbdV0sIGUpO1xyXG59KShjYy5Db21wb25lbnQpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBkO1xyXG4iXX0=