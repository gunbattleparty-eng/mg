
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/KSRewardedVideo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f38c6xI+r5OWL2+Vfsf8CfF', 'KSRewardedVideo');
// game_script/scripts/KSRewardedVideo.js

"use strict";

var o;

var $baseRewardedVideo = require("./BaseRewardedVideo");

var r = window.ks;

var a = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e._rewardedVideoAd = null;
    return e;
  }

  __extends(e, t);

  e.prototype.createRewardedVideo = function () {
    console.log("createRewardedVideo");

    if (this.adUnitId) {
      if (r && r.createRewardedVideoAd) {
        var t = {
          adUnitId: this.adUnitId
        };
        this._rewardedVideoAd = r.createRewardedVideoAd(t);

        if (this._rewardedVideoAd.onLoad) {
          this._rewardedVideoAd.onLoad(this._onLoadCallbackRef);
        }

        if (this._rewardedVideoAd.onClose) {
          this._rewardedVideoAd.onClose(this._onCloseCallbackRef);
        }

        if (this._rewardedVideoAd.onError) {
          this._rewardedVideoAd.onError(this._onErrorCallbackRef);
        }
      } else {
        console.warn("当前平台不支持创建激励视频");
      }
    } else {
      console.warn("激励视频组件创建失败,未配置pos_id");
    }
  };

  e.prototype.showRewardedVideo = function (e, i, o) {
    var n = this;
    console.log("微信激励视频开始：");
    new Date().getTime() - this._lastCallShowTime < 2e3 ? console.warn("showRewardedVideo,调用太频繁") : (t.prototype.showRewardedVideo.call(this, e, i, o), this._rewardedVideoAd ? (this._isLoadComplete = !0, this._isLoadComplete ? this._rewardedVideoAd.show && this._rewardedVideoAd.show().then(function () {
      n._errorReloadCount = 0;
      n.onRewardedVideoShowSuccessHandler();
    })["catch"](function (t) {
      console.log("微信激励视频报错：", t);
      n.onRewardedVideoShowFailHandler(t);
    }) : (console.log("微信激励视频没加载好："), this.onRewardedVideoNotLoadHandler())) : (console.log("微信激励视频没实例："), this.onRewardedVideoNotLoadHandler()));
  };

  e.prototype.destroyRewardedVideo = function () {
    t.prototype.destroyRewardedVideo.call(this);

    if (this._rewardedVideoAd) {
      if (this._rewardedVideoAd.offLoad) {
        this._rewardedVideoAd.offLoad(this._onLoadCallbackRef);
      }

      if (this._rewardedVideoAd.offClose) {
        this._rewardedVideoAd.offClose(this._onCloseCallbackRef);
      }

      if (this._rewardedVideoAd.offError) {
        this._rewardedVideoAd.offError(this._onErrorCallbackRef);
      }

      if (this._rewardedVideoAd.destroy) {
        this._rewardedVideoAd.destroy();
      }

      this._rewardedVideoAd = null;
    }
  };

  e.prototype.onRewardedVideoLoad = function () {
    console.log("onRewardedVideoLoad");
    this._isLoadComplete = !0;
  };

  e.prototype.onRewardedVideoClose = function (t) {
    this.onRewardedVideoCloseHandler(t && t.isEnded || void 0 === t);
  };

  e.prototype.onRewardedVideoError = function (t) {
    this.onRewardedVideoErrorHandler(t);
  };

  return e;
}($baseRewardedVideo["default"]);

exports["default"] = a;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEtTUmV3YXJkZWRWaWRlby5qcyJdLCJuYW1lcyI6WyJvIiwiJGJhc2VSZXdhcmRlZFZpZGVvIiwicmVxdWlyZSIsInIiLCJ3aW5kb3ciLCJrcyIsImEiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3Jld2FyZGVkVmlkZW9BZCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImNyZWF0ZVJld2FyZGVkVmlkZW8iLCJjb25zb2xlIiwibG9nIiwiYWRVbml0SWQiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJvbkxvYWQiLCJfb25Mb2FkQ2FsbGJhY2tSZWYiLCJvbkNsb3NlIiwiX29uQ2xvc2VDYWxsYmFja1JlZiIsIm9uRXJyb3IiLCJfb25FcnJvckNhbGxiYWNrUmVmIiwid2FybiIsInNob3dSZXdhcmRlZFZpZGVvIiwiaSIsIm4iLCJEYXRlIiwiZ2V0VGltZSIsIl9sYXN0Q2FsbFNob3dUaW1lIiwiY2FsbCIsIl9pc0xvYWRDb21wbGV0ZSIsInNob3ciLCJ0aGVuIiwiX2Vycm9yUmVsb2FkQ291bnQiLCJvblJld2FyZGVkVmlkZW9TaG93U3VjY2Vzc0hhbmRsZXIiLCJvblJld2FyZGVkVmlkZW9TaG93RmFpbEhhbmRsZXIiLCJvblJld2FyZGVkVmlkZW9Ob3RMb2FkSGFuZGxlciIsImRlc3Ryb3lSZXdhcmRlZFZpZGVvIiwib2ZmTG9hZCIsIm9mZkNsb3NlIiwib2ZmRXJyb3IiLCJkZXN0cm95Iiwib25SZXdhcmRlZFZpZGVvTG9hZCIsIm9uUmV3YXJkZWRWaWRlb0Nsb3NlIiwib25SZXdhcmRlZFZpZGVvQ2xvc2VIYW5kbGVyIiwiaXNFbmRlZCIsIm9uUmV3YXJkZWRWaWRlb0Vycm9yIiwib25SZXdhcmRlZFZpZGVvRXJyb3JIYW5kbGVyIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLGtCQUFrQixHQUFHQyxPQUFP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VTFDLENBQVYsRUFBYTtJQUM1QyxLQUFLMkMsMkJBQUwsQ0FBaUMzQyxDQUFqQztFQUNILENBRkQ7O0VBR0EsT0FBT0MsQ0FBUDtBQUNILENBbkZPLENBbUZMUCxrQkFBa0IsV0FuRmIsQ0FBUjs7QUFvRkFrRCxPQUFPLFdBQVAsR0FBa0I3QyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkYmFzZVJld2FyZGVkVmlkZW8gPSByZXF1aXJlKFwiLi9CYXNlUmV3YXJkZWRWaWRlb1wiKTtcclxudmFyIHIgPSB3aW5kb3cua3M7XHJcbnZhciBhID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUuX3Jld2FyZGVkVmlkZW9BZCA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVSZXdhcmRlZFZpZGVvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlUmV3YXJkZWRWaWRlb1wiKTtcclxuICAgICAgICBpZiAodGhpcy5hZFVuaXRJZCkge1xyXG4gICAgICAgICAgICBpZiAociAmJiByLmNyZWF0ZVJld2FyZGVkVmlkZW9BZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRVbml0SWQ6IHRoaXMuYWRVbml0SWRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRlZFZpZGVvQWQgPSByLmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh0KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRlZFZpZGVvQWQub25Mb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkZWRWaWRlb0FkLm9uTG9hZCh0aGlzLl9vbkxvYWRDYWxsYmFja1JlZik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmV3YXJkZWRWaWRlb0FkLm9uQ2xvc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRlZFZpZGVvQWQub25DbG9zZSh0aGlzLl9vbkNsb3NlQ2FsbGJhY2tSZWYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZGVkVmlkZW9BZC5vbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkZWRWaWRlb0FkLm9uRXJyb3IodGhpcy5fb25FcnJvckNhbGxiYWNrUmVmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuW9k+WJjeW5s+WPsOS4jeaUr+aMgeWIm+W7uua/gOWKseinhumikVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIua/gOWKseinhumikee7hOS7tuWIm+W7uuWksei0pSzmnKrphY3nva5wb3NfaWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnNob3dSZXdhcmRlZFZpZGVvID0gZnVuY3Rpb24gKGUsIGksIG8pIHtcclxuICAgICAgICB2YXIgbiA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlvq7kv6Hmv4DlirHop4bpopHlvIDlp4vvvJpcIik7XHJcbiAgICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLl9sYXN0Q2FsbFNob3dUaW1lIDwgMmUzXHJcbiAgICAgICAgICAgID8gY29uc29sZS53YXJuKFwic2hvd1Jld2FyZGVkVmlkZW8s6LCD55So5aSq6aKR57mBXCIpXHJcbiAgICAgICAgICAgIDogKHQucHJvdG90eXBlLnNob3dSZXdhcmRlZFZpZGVvLmNhbGwodGhpcywgZSwgaSwgbyksXHJcbiAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkZWRWaWRlb0FkXHJcbiAgICAgICAgICAgICAgICAgID8gKCh0aGlzLl9pc0xvYWRDb21wbGV0ZSA9ICEwKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0xvYWRDb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX3Jld2FyZGVkVmlkZW9BZC5zaG93ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkZWRWaWRlb0FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5fZXJyb3JSZWxvYWRDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLm9uUmV3YXJkZWRWaWRlb1Nob3dTdWNjZXNzSGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b6u5L+h5r+A5Yqx6KeG6aKR5oql6ZSZ77yaXCIsIHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5vblJld2FyZGVkVmlkZW9TaG93RmFpbEhhbmRsZXIodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGNvbnNvbGUubG9nKFwi5b6u5L+h5r+A5Yqx6KeG6aKR5rKh5Yqg6L295aW977yaXCIpLCB0aGlzLm9uUmV3YXJkZWRWaWRlb05vdExvYWRIYW5kbGVyKCkpKVxyXG4gICAgICAgICAgICAgICAgICA6IChjb25zb2xlLmxvZyhcIuW+ruS/oea/gOWKseinhumikeayoeWunuS+i++8mlwiKSwgdGhpcy5vblJld2FyZGVkVmlkZW9Ob3RMb2FkSGFuZGxlcigpKSk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuZGVzdHJveVJld2FyZGVkVmlkZW8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdC5wcm90b3R5cGUuZGVzdHJveVJld2FyZGVkVmlkZW8uY2FsbCh0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy5fcmV3YXJkZWRWaWRlb0FkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRlZFZpZGVvQWQub2ZmTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkZWRWaWRlb0FkLm9mZkxvYWQodGhpcy5fb25Mb2FkQ2FsbGJhY2tSZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRlZFZpZGVvQWQub2ZmQ2xvc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jld2FyZGVkVmlkZW9BZC5vZmZDbG9zZSh0aGlzLl9vbkNsb3NlQ2FsbGJhY2tSZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRlZFZpZGVvQWQub2ZmRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jld2FyZGVkVmlkZW9BZC5vZmZFcnJvcih0aGlzLl9vbkVycm9yQ2FsbGJhY2tSZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRlZFZpZGVvQWQuZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkZWRWaWRlb0FkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9yZXdhcmRlZFZpZGVvQWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5vblJld2FyZGVkVmlkZW9Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25SZXdhcmRlZFZpZGVvTG9hZFwiKTtcclxuICAgICAgICB0aGlzLl9pc0xvYWRDb21wbGV0ZSA9ICEwO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLm9uUmV3YXJkZWRWaWRlb0Nsb3NlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLm9uUmV3YXJkZWRWaWRlb0Nsb3NlSGFuZGxlcigodCAmJiB0LmlzRW5kZWQpIHx8IHZvaWQgMCA9PT0gdCk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUub25SZXdhcmRlZFZpZGVvRXJyb3IgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMub25SZXdhcmRlZFZpZGVvRXJyb3JIYW5kbGVyKHQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBlO1xyXG59KSgkYmFzZVJld2FyZGVkVmlkZW8uZGVmYXVsdCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGE7XHJcbiJdfQ==