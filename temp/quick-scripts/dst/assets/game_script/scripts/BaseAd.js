
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/BaseAd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41240xX67VD/rBpSV9UAL55', 'BaseAd');
// game_script/scripts/BaseAd.js

"use strict";

exports.BaseAd = void 0;

var $audioPlayer = require("./AudioPlayer");

var n = function () {
  function t() {
    this.adUnitId = null;
    this.adIns = null;
    this.musicVolume = -1;
    this.effectsVolume = -1;
    this.isOpenPreLoad = !0;
    this.isLoaded = !1;
    this.showing = !1;
    this.isAutoShow = !1;
    this.isConsume = !1;
    this.isCanShow = !0;
    this.hideing = !1;
    this.onLoad = null;
    this.onError = null;
    this.onClose = null;
    this.onResize = null;
    this.onHide = null;
    this.showCallback = null;
    this.closeCallback = null;
    this.errorCallback = null;
    this.noRespondCount = 0;
  }

  t.prototype.setOpenPreLoad = function (t) {
    this.isOpenPreLoad = t;
  };

  t.prototype.initAd = function (t) {
    this.adUnitId = t;
    this.adUnitId && "" !== this.adUnitId ? (this.onLoad = this.onAdLoad.bind(this), this.onClose = this.onAdClose.bind(this), this.onError = this.onAdError.bind(this), this.onResize = this.onAdResize.bind(this), this.onHide = this.onAdHide.bind(this), this.isOpenPreLoad && this.loadAd()) : console.warn("初始化广告参数为空");
  };

  t.prototype.loadAd = function () {
    console.warn(this.adUnitId, "广告loadAd");
  };

  t.prototype.onAdLoad = function () {
    console.warn(this.adUnitId, "广告onAdLoad");
  };

  t.prototype.onAdError = function (t) {
    console.warn(this.adUnitId, "广告onAdError", JSON.stringify(t));
  };

  t.prototype.onAdClose = function () {
    console.warn(this.adUnitId, "广告onAdClose");
  };

  t.prototype.onAdHide = function () {
    console.warn(this.adUnitId, "广告onHide");
  };

  t.prototype.onAdResize = function () {
    console.warn(this.adUnitId, "广告onAdResize");
  };

  t.prototype.forbidderAd = function (t) {
    console.warn(this.adUnitId, "执行禁用", t);
    this.isCanShow = !t;

    if (t) {
      this.hideAd(!1);
    }
  };

  t.prototype.hideAd = function (t) {
    console.warn(this.adUnitId, "执行隐藏");
    t ? this.isConsume && this.destroyAd() : this.showing && this.adIns.hide();
  };

  t.prototype.destroyAd = function (t) {
    if (void 0 === t) {
      t = !1;
    }

    this.isLoaded = !1;
    this.isAutoShow = !1;
    this.isConsume = !1;
    this.showing = !1;
    this.hideing = !1;

    if (!t) {
      this.showCallback = null;
      this.closeCallback = null;
      this.errorCallback = null;
    }

    console.warn(this.adUnitId, "执行销毁");
  };

  t.prototype.reCreateAd = function (t) {
    var e = this;
    console.warn(this.adUnitId, "执行重建");
    this.destroyAd(t);
    this.isAutoShow = t;
    setTimeout(function () {
      e.loadAd();
    }, 100);
  };

  t.prototype.pause = function () {
    $audioPlayer["default"].pauseAll();
    cc.director.pause();
  };

  t.prototype.resume = function () {
    cc.director.resume();
    $audioPlayer["default"].resumeAll();
  };

  return t;
}();

exports.BaseAd = n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJhc2VBZC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiQmFzZUFkIiwiJGF1ZGlvUGxheWVyIiwicmVxdWlyZSIsIm4iLCJ0IiwiYWRVbml0SWQiLCJhZElucyIsIm11c2ljVm9sdW1lIiwiZWZmZWN0c1ZvbHVtZSIsImlzT3BlblByZUxvYWQiLCJpc0xvYWRlZCIsInNob3dpbmciLCJpc0F1dG9TaG93IiwiaXNDb25zdW1lIiwiaXNDYW5TaG93IiwiaGlkZWluZyIsIm9uTG9hZCIsIm9uRXJyb3IiLCJvbkNsb3NlIiwib25SZXNpemUiLCJvbkhpZGUiLCJzaG93Q2FsbGJhY2siLCJjbG9zZUNhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsIm5vUmVzcG9uZENvdW50IiwicHJvdG90eXBlIiwic2V0T3BlblByZUxvYWQiLCJpbml0QWQiLCJvbkFkTG9hZCIsImJpbmQiLCJvbkFkQ2xvc2UiLCJvbkFkRXJyb3IiLCJvbkFkUmVzaXplIiwib25BZEhpZGUiLCJsb2FkQWQiLCJjb25zb2xlIiwid2FybiIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3JiaWRkZXJBZCIsImhpZGVBZCIsImRlc3Ryb3lBZCIsImhpZGUiLCJyZUNyZWF0ZUFkIiwiZSIsInNldFRpbWVvdXQiLCJwYXVzZSIsInBhdXNlQWxsIiwiY2MiLCJkaXJlY3RvciIsInJlc3VtZSIsInJlc3VtZUFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxNQUFSLEdBQWlCLEtBQUssQ0FBdEI7O0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWE7SUFDVCxLQUFLQyxRQUFMLEdBQWdCLElBQWhCO0lBQ0EsS0FBS0MsS0FBTCxHQUFhLElBQWI7SUFDQSxLQUFLQyxXQUFMLEdBQW1CLENBQUMsQ0FBcEI7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QUNIOztJQUNEWSxPQUFPLENBQUNDLElBQVIsQ0FBYSxLQUFLL0IsUUFBbEIsRUFBNEIsTUFBNUI7RUFDSCxDQWZEOztFQWdCQUQsQ0FBQyxDQUFDcUIsU0FBRixDQUFZa0IsVUFBWixHQUF5QixVQUFVdkMsQ0FBVixFQUFhO0lBQ2xDLElBQUl3QyxDQUFDLEdBQUcsSUFBUjtJQUNBVCxPQUFPLENBQUNDLElBQVIsQ0FBYSxLQUFLL0IsUUFBbEIsRUFBNEIsTUFBNUI7SUFDQSxLQUFLb0MsU0FBTCxDQUFlckMsQ0FBZjtJQUNBLEtBQUtRLFVBQUwsR0FBa0JSLENBQWxCO0lBQ0F5QyxVQUFVLENBQUMsWUFBWTtNQUNuQkQsQ0FBQyxDQUFDVixNQUFGO0lBQ0gsQ0FGUyxFQUVQLEdBRk8sQ0FBVjtFQUdILENBUkQ7O0VBU0E5QixDQUFDLENBQUNxQixTQUFGLENBQVlxQixLQUFaLEdBQW9CLFlBQVk7SUFDNUI3QyxZQUFZLFdBQVosQ0FBcUI4QyxRQUFyQjtJQUNBQyxFQUFFLENBQUNDLFFBQUgsQ0FBWUgsS0FBWjtFQUNILENBSEQ7O0VBSUExQyxDQUFDLENBQUNxQixTQUFGLENBQVl5QixNQUFaLEdBQXFCLFlBQVk7SUFDN0JGLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZQyxNQUFaO0lBQ0FqRCxZQUFZLFdBQVosQ0FBcUJrRCxTQUFyQjtFQUNILENBSEQ7O0VBSUEsT0FBTy9DLENBQVA7QUFDSCxDQXBHTyxFQUFSOztBQXFHQUwsT0FBTyxDQUFDQyxNQUFSLEdBQWlCRyxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5CYXNlQWQgPSB2b2lkIDA7XHJcbnZhciAkYXVkaW9QbGF5ZXIgPSByZXF1aXJlKFwiLi9BdWRpb1BsYXllclwiKTtcclxudmFyIG4gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdCgpIHtcclxuICAgICAgICB0aGlzLmFkVW5pdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFkSW5zID0gbnVsbDtcclxuICAgICAgICB0aGlzLm11c2ljVm9sdW1lID0gLTE7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RzVm9sdW1lID0gLTE7XHJcbiAgICAgICAgdGhpcy5pc09wZW5QcmVMb2FkID0gITA7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9ICExO1xyXG4gICAgICAgIHRoaXMuc2hvd2luZyA9ICExO1xyXG4gICAgICAgIHRoaXMuaXNBdXRvU2hvdyA9ICExO1xyXG4gICAgICAgIHRoaXMuaXNDb25zdW1lID0gITE7XHJcbiAgICAgICAgdGhpcy5pc0NhblNob3cgPSAhMDtcclxuICAgICAgICB0aGlzLmhpZGVpbmcgPSAhMTtcclxuICAgICAgICB0aGlzLm9uTG9hZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbkVycm9yID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uQ2xvc2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25SZXNpemUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25IaWRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNob3dDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jbG9zZUNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVycm9yQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubm9SZXNwb25kQ291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgdC5wcm90b3R5cGUuc2V0T3BlblByZUxvYWQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMuaXNPcGVuUHJlTG9hZCA9IHQ7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLmFkVW5pdElkID0gdDtcclxuICAgICAgICB0aGlzLmFkVW5pdElkICYmIFwiXCIgIT09IHRoaXMuYWRVbml0SWRcclxuICAgICAgICAgICAgPyAoKHRoaXMub25Mb2FkID0gdGhpcy5vbkFkTG9hZC5iaW5kKHRoaXMpKSxcclxuICAgICAgICAgICAgICAodGhpcy5vbkNsb3NlID0gdGhpcy5vbkFkQ2xvc2UuYmluZCh0aGlzKSksXHJcbiAgICAgICAgICAgICAgKHRoaXMub25FcnJvciA9IHRoaXMub25BZEVycm9yLmJpbmQodGhpcykpLFxyXG4gICAgICAgICAgICAgICh0aGlzLm9uUmVzaXplID0gdGhpcy5vbkFkUmVzaXplLmJpbmQodGhpcykpLFxyXG4gICAgICAgICAgICAgICh0aGlzLm9uSGlkZSA9IHRoaXMub25BZEhpZGUuYmluZCh0aGlzKSksXHJcbiAgICAgICAgICAgICAgdGhpcy5pc09wZW5QcmVMb2FkICYmIHRoaXMubG9hZEFkKCkpXHJcbiAgICAgICAgICAgIDogY29uc29sZS53YXJuKFwi5Yid5aeL5YyW5bm/5ZGK5Y+C5pWw5Li656m6XCIpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmxvYWRBZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4odGhpcy5hZFVuaXRJZCwgXCLlub/lkYpsb2FkQWRcIik7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUub25BZExvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKHRoaXMuYWRVbml0SWQsIFwi5bm/5ZGKb25BZExvYWRcIik7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUub25BZEVycm9yID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4odGhpcy5hZFVuaXRJZCwgXCLlub/lkYpvbkFkRXJyb3JcIiwgSlNPTi5zdHJpbmdpZnkodCkpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLm9uQWRDbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4odGhpcy5hZFVuaXRJZCwgXCLlub/lkYpvbkFkQ2xvc2VcIik7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUub25BZEhpZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKHRoaXMuYWRVbml0SWQsIFwi5bm/5ZGKb25IaWRlXCIpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLm9uQWRSZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKHRoaXMuYWRVbml0SWQsIFwi5bm/5ZGKb25BZFJlc2l6ZVwiKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5mb3JiaWRkZXJBZCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKHRoaXMuYWRVbml0SWQsIFwi5omn6KGM56aB55SoXCIsIHQpO1xyXG4gICAgICAgIHRoaXMuaXNDYW5TaG93ID0gIXQ7XHJcbiAgICAgICAgaWYgKHQpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlQWQoITEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5oaWRlQWQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybih0aGlzLmFkVW5pdElkLCBcIuaJp+ihjOmakOiXj1wiKTtcclxuICAgICAgICB0ID8gdGhpcy5pc0NvbnN1bWUgJiYgdGhpcy5kZXN0cm95QWQoKSA6IHRoaXMuc2hvd2luZyAmJiB0aGlzLmFkSW5zLmhpZGUoKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5kZXN0cm95QWQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcclxuICAgICAgICAgICAgdCA9ICExO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTG9hZGVkID0gITE7XHJcbiAgICAgICAgdGhpcy5pc0F1dG9TaG93ID0gITE7XHJcbiAgICAgICAgdGhpcy5pc0NvbnN1bWUgPSAhMTtcclxuICAgICAgICB0aGlzLnNob3dpbmcgPSAhMTtcclxuICAgICAgICB0aGlzLmhpZGVpbmcgPSAhMTtcclxuICAgICAgICBpZiAoIXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLndhcm4odGhpcy5hZFVuaXRJZCwgXCLmiafooYzplIDmr4FcIik7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUucmVDcmVhdGVBZCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUud2Fybih0aGlzLmFkVW5pdElkLCBcIuaJp+ihjOmHjeW7ulwiKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3lBZCh0KTtcclxuICAgICAgICB0aGlzLmlzQXV0b1Nob3cgPSB0O1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlLmxvYWRBZCgpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGF1ZGlvUGxheWVyLmRlZmF1bHQucGF1c2VBbGwoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICAkYXVkaW9QbGF5ZXIuZGVmYXVsdC5yZXN1bWVBbGwoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5CYXNlQWQgPSBuO1xyXG4iXX0=