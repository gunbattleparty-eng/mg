
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/WechatRewardedVideo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0728PR6A1DDb9LMOtUQyqT', 'WechatRewardedVideo');
// game_script/scripts/WechatRewardedVideo.js

"use strict";

var o;

var $uIManager = require("./UIManager");

var $geService = require("./GeService");

var $baseRewardedVideo = require("./BaseRewardedVideo");

var l = window.wx;

var c = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e._rewardedVideoAd = null;
    return e;
  }

  __extends(e, t);

  e.prototype.createRewardedVideo = function () {
    console.log("createRewardedVideo");

    if (this.adUnitId) {
      if (l && l.createRewardedVideoAd) {
        var t = {
          adUnitId: this.adUnitId
        };
        this._rewardedVideoAd = l.createRewardedVideoAd(t);

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
    "" !== this.adUnitId ? new Date().getTime() - this._lastCallShowTime < 2e3 ? console.warn("showRewardedVideo,调用太频繁") : (t.prototype.showRewardedVideo.call(this, e, i, o), this._rewardedVideoAd && this._isLoadComplete ? this._rewardedVideoAd.show && this._rewardedVideoAd.show().then(function () {
      n._errorReloadCount = 0;
      $geService.GeService.instance.reportWxAdToGravity(n.adUnitId);
      n.onRewardedVideoShowSuccessHandler();
    })["catch"](function (t) {
      n.onRewardedVideoShowFailHandler(t);
    }) : this.onRewardedVideoNotLoadHandler()) : $uIManager.UIManager.instance.showToast("暂无广告资源");
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

exports["default"] = c;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFdlY2hhdFJld2FyZGVkVmlkZW8uanMiXSwibmFtZXMiOlsibyIsIiR1SU1hbmFnZXIiLCJyZXF1aXJlIiwiJGdlU2VydmljZSIsIiRiYXNlUmV3YXJkZWRWaWRlbyIsImwiLCJ3aW5kb3ciLCJ3eCIsImMiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3Jld2FyZGVkVmlkZW9BZCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImNyZWF0ZVJld2FyZGVkVmlkZW8iLCJjb25zb2xlIiwibG9nIiwiYWRVbml0SWQiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJvbkxvYWQiLCJfb25Mb2FkQ2FsbGJhY2tSZWYiLCJvbkNsb3NlIiwiX29uQ2xvc2VDYWxsYmFja1JlZiIsIm9uRXJyb3IiLCJfb25FcnJvckNhbGxiYWNrUmVmIiwid2FybiIsInNob3dSZXdhcmRlZFZpZGVvIiwiaSIsIm4iLCJEYXRlIiwiZ2V0VGltZSIsIl9sYXN0Q2FsbFNob3dUaW1lIiwiY2FsbCIsIl9pc0xvYWRDb21wbGV0ZSIsInNob3ciLCJ0aGVuIiwiX2Vycm9yUmVsb2FkQ291bnQiLCJHZVNlcnZpY2UiLCJpbnN0YW5jZSIsInJlcG9ydFd4QWRUb0dyYXZpdHkiLCJvblJld2FyZGVkVmlkZW9TaG93U3VjY2Vzc0hhbmRsZXIiLCJvblJld2FyZGVkVmlkZW9TaG93RmFpbEhhbmRsZXIiLCJvblJld2FyZGVkVmlkZW9Ob3RMb2FkSGFuZGxlciIsIlVJTWFuYWdlciIsInNob3dUb2FzdCIsImRlc3Ryb3lSZXdhcmRlZFZpZGVvIiwib2ZmTG9hZCIsIm9mZkNsb3NlIiwib2ZmRXJyb3IiLCJkZXN0cm95Iiwib25SZXdhcmRlZFZpZGVvTG9hZCIsIm9uUmV3YXJkZWRWaWRlb0Nsb3NlIiwib25SZXdhcmRlZFZpZGVvQ2xvc2VIYW5kbGVyIiwiaXNFbmRlZCIsIm9uUmV3YXJkZWRWaWRlb0Vycm9yIiwib25SZXdhcmRlZFZpZGVv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QVYsRUFBYTtJQUM1QyxLQUFLNkMsMkJBQUwsQ0FBa0M3QyxDQUFDLElBQUlBLENBQUMsQ0FBQzhDLE9BQVIsSUFBb0IsS0FBSyxDQUFMLEtBQVc5QyxDQUFoRTtFQUNILENBRkQ7O0VBR0FDLENBQUMsQ0FBQ0ssU0FBRixDQUFZeUMsb0JBQVosR0FBbUMsVUFBVS9DLENBQVYsRUFBYTtJQUM1QyxLQUFLZ0QsMkJBQUwsQ0FBaUNoRCxDQUFqQztFQUNILENBRkQ7O0VBR0EsT0FBT0MsQ0FBUDtBQUNILENBakZPLENBaUZMTixrQkFBa0IsV0FqRmIsQ0FBUjs7QUFrRkFzRCxPQUFPLFdBQVAsR0FBa0JsRCxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkdUlNYW5hZ2VyID0gcmVxdWlyZShcIi4vVUlNYW5hZ2VyXCIpO1xyXG52YXIgJGdlU2VydmljZSA9IHJlcXVpcmUoXCIuL0dlU2VydmljZVwiKTtcclxudmFyICRiYXNlUmV3YXJkZWRWaWRlbyA9IHJlcXVpcmUoXCIuL0Jhc2VSZXdhcmRlZFZpZGVvXCIpO1xyXG52YXIgbCA9IHdpbmRvdy53eDtcclxudmFyIGMgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgZS5fcmV3YXJkZWRWaWRlb0FkID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLmNyZWF0ZVJld2FyZGVkVmlkZW8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVSZXdhcmRlZFZpZGVvXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmFkVW5pdElkKSB7XHJcbiAgICAgICAgICAgIGlmIChsICYmIGwuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhZFVuaXRJZDogdGhpcy5hZFVuaXRJZFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jld2FyZGVkVmlkZW9BZCA9IGwuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZGVkVmlkZW9BZC5vbkxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRlZFZpZGVvQWQub25Mb2FkKHRoaXMuX29uTG9hZENhbGxiYWNrUmVmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRlZFZpZGVvQWQub25DbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jld2FyZGVkVmlkZW9BZC5vbkNsb3NlKHRoaXMuX29uQ2xvc2VDYWxsYmFja1JlZik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmV3YXJkZWRWaWRlb0FkLm9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRlZFZpZGVvQWQub25FcnJvcih0aGlzLl9vbkVycm9yQ2FsbGJhY2tSZWYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi5b2T5YmN5bmz5Y+w5LiN5pSv5oyB5Yib5bu65r+A5Yqx6KeG6aKRXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwi5r+A5Yqx6KeG6aKR57uE5Lu25Yib5bu65aSx6LSlLOacqumFjee9rnBvc19pZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuc2hvd1Jld2FyZGVkVmlkZW8gPSBmdW5jdGlvbiAoZSwgaSwgbykge1xyXG4gICAgICAgIHZhciBuID0gdGhpcztcclxuICAgICAgICBcIlwiICE9PSB0aGlzLmFkVW5pdElkXHJcbiAgICAgICAgICAgID8gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLl9sYXN0Q2FsbFNob3dUaW1lIDwgMmUzXHJcbiAgICAgICAgICAgICAgICA/IGNvbnNvbGUud2FybihcInNob3dSZXdhcmRlZFZpZGVvLOiwg+eUqOWkqumikee5gVwiKVxyXG4gICAgICAgICAgICAgICAgOiAodC5wcm90b3R5cGUuc2hvd1Jld2FyZGVkVmlkZW8uY2FsbCh0aGlzLCBlLCBpLCBvKSxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkZWRWaWRlb0FkICYmIHRoaXMuX2lzTG9hZENvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX3Jld2FyZGVkVmlkZW9BZC5zaG93ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jld2FyZGVkVmlkZW9BZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uX2Vycm9yUmVsb2FkQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRnZVNlcnZpY2UuR2VTZXJ2aWNlLmluc3RhbmNlLnJlcG9ydFd4QWRUb0dyYXZpdHkobi5hZFVuaXRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5vblJld2FyZGVkVmlkZW9TaG93U3VjY2Vzc0hhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLm9uUmV3YXJkZWRWaWRlb1Nob3dGYWlsSGFuZGxlcih0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMub25SZXdhcmRlZFZpZGVvTm90TG9hZEhhbmRsZXIoKSlcclxuICAgICAgICAgICAgOiAkdUlNYW5hZ2VyLlVJTWFuYWdlci5pbnN0YW5jZS5zaG93VG9hc3QoXCLmmoLml6Dlub/lkYrotYTmupBcIik7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuZGVzdHJveVJld2FyZGVkVmlkZW8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdC5wcm90b3R5cGUuZGVzdHJveVJld2FyZGVkVmlkZW8uY2FsbCh0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy5fcmV3YXJkZWRWaWRlb0FkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRlZFZpZGVvQWQub2ZmTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkZWRWaWRlb0FkLm9mZkxvYWQodGhpcy5fb25Mb2FkQ2FsbGJhY2tSZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRlZFZpZGVvQWQub2ZmQ2xvc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jld2FyZGVkVmlkZW9BZC5vZmZDbG9zZSh0aGlzLl9vbkNsb3NlQ2FsbGJhY2tSZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRlZFZpZGVvQWQub2ZmRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jld2FyZGVkVmlkZW9BZC5vZmZFcnJvcih0aGlzLl9vbkVycm9yQ2FsbGJhY2tSZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRlZFZpZGVvQWQuZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkZWRWaWRlb0FkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9yZXdhcmRlZFZpZGVvQWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5vblJld2FyZGVkVmlkZW9Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25SZXdhcmRlZFZpZGVvTG9hZFwiKTtcclxuICAgICAgICB0aGlzLl9pc0xvYWRDb21wbGV0ZSA9ICEwO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLm9uUmV3YXJkZWRWaWRlb0Nsb3NlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLm9uUmV3YXJkZWRWaWRlb0Nsb3NlSGFuZGxlcigodCAmJiB0LmlzRW5kZWQpIHx8IHZvaWQgMCA9PT0gdCk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUub25SZXdhcmRlZFZpZGVvRXJyb3IgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMub25SZXdhcmRlZFZpZGVvRXJyb3JIYW5kbGVyKHQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBlO1xyXG59KSgkYmFzZVJld2FyZGVkVmlkZW8uZGVmYXVsdCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGM7XHJcbiJdfQ==