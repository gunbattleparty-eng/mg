
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/BaseRewardedVideo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '670bf6mr0dDXp7Ma8sXXdKD', 'BaseRewardedVideo');
// game_script/scripts/BaseRewardedVideo.js

"use strict";

var $audioPlayer = require("./AudioPlayer");

var n = function () {
  function t() {
    this.showCallback = null;
    this.closeCallback = null;
    this.videoEndCallback = null;
    this._isLoadComplete = !1;
    this._gameMusicVolume = -1;
    this._gameEffectsVolume = -1;
    this._onLoadCallbackRef = null;
    this._onCloseCallbackRef = null;
    this._onErrorCallbackRef = null;
    this._errorReloadCount = 0;
    this._lastCallShowTime = -1;
    this.adUnitId = null;
  }

  t.prototype.initAd = function (t) {
    console.log("rewardedVideo init");
    this.adUnitId = t;
    this._onLoadCallbackRef = this.onRewardedVideoLoad.bind(this);
    this._onCloseCallbackRef = this.onRewardedVideoClose.bind(this);
    this._onErrorCallbackRef = this.onRewardedVideoError.bind(this);
    this.createRewardedVideo();
  };

  t.prototype.showRewardedVideo = function (t, e, i) {
    console.log("showRewardedVideo");
    var n = new Date().getTime();
    this._lastCallShowTime = n;
    this.showCallback = t;
    this.closeCallback = e;
    this.videoEndCallback = i;
    this._gameMusicVolume = $audioPlayer["default"].musicVolume;
    this._gameEffectsVolume = $audioPlayer["default"].effectVolume;
  };

  t.prototype.destroyRewardedVideo = function () {
    console.log("destoryRewardedVideo");
    this.showCallback = null;
    this.closeCallback = null;
    this.videoEndCallback = null;
    this._isLoadComplete = !1;
  };

  t.prototype.onRewardedVideoShowSuccessHandler = function () {
    console.log("onRewardedVideoShowSuccess");

    if (this.showCallback) {
      this.showCallback();
    }

    this.pause();
  };

  t.prototype.onRewardedVideoShowFailHandler = function (t) {
    console.log("onRewardedVideoShowFailHandler", t);

    if (this.closeCallback) {
      this.closeCallback();
    }

    this.showCallback = null;
    this.closeCallback = null;
    this.videoEndCallback = null;
    this.resume();

    if (this._errorReloadCount < 2) {
      this.destroyRewardedVideo();
      this.createRewardedVideo();
      this._errorReloadCount++;
    }
  };

  t.prototype.onRewardedVideoNotLoadHandler = function () {
    console.log("onRewardedVideoNotLoadHandler");
    this.resume();
    this.destroyRewardedVideo();
    this.createRewardedVideo();
  };

  t.prototype.onRewardedVideoErrorHandler = function (t) {
    console.log("onRewardedVideoErrorHandler", t);
    this.resume();

    if (this._errorReloadCount < 2) {
      this._errorReloadCount++;
      console.log("重新加载激励视频");
      this.destroyRewardedVideo();
      this.createRewardedVideo();
    }
  };

  t.prototype.onRewardedVideoCloseHandler = function (t) {
    console.log("onRewardedVideoCloseHandler", t);
    this._isLoadComplete = !1;
    this.resume();
    t ? this.videoEndCallback && this.videoEndCallback() : this.closeCallback && this.closeCallback();
    this.showCallback = null;
    this.closeCallback = null;
    this.videoEndCallback = null;
  };

  t.prototype.pause = function () {
    $audioPlayer["default"].pauseAll();
    console.log("暂停");
    cc.game.pause();
  };

  t.prototype.resume = function () {
    cc.game.resume();
    console.log("开始");
    $audioPlayer["default"].resumeAll();
  };

  return t;
}();

exports["default"] = n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJhc2VSZXdhcmRlZFZpZGVvLmpzIl0sIm5hbWVzIjpbIiRhdWRpb1BsYXllciIsInJlcXVpcmUiLCJuIiwidCIsInNob3dDYWxsYmFjayIsImNsb3NlQ2FsbGJhY2siLCJ2aWRlb0VuZENhbGxiYWNrIiwiX2lzTG9hZENvbXBsZXRlIiwiX2dhbWVNdXNpY1ZvbHVtZSIsIl9nYW1lRWZmZWN0c1ZvbHVtZSIsIl9vbkxvYWRDYWxsYmFja1JlZiIsIl9vbkNsb3NlQ2FsbGJhY2tSZWYiLCJfb25FcnJvckNhbGxiYWNrUmVmIiwiX2Vycm9yUmVsb2FkQ291bnQiLCJfbGFzdENhbGxTaG93VGltZSIsImFkVW5pdElkIiwicHJvdG90eXBlIiwiaW5pdEFkIiwiY29uc29sZSIsImxvZyIsIm9uUmV3YXJkZWRWaWRlb0xvYWQiLCJiaW5kIiwib25SZXdhcmRlZFZpZGVvQ2xvc2UiLCJvblJld2FyZGVkVmlkZW9FcnJvciIsImNyZWF0ZVJld2FyZGVkVmlkZW8iLCJzaG93UmV3YXJkZWRWaWRlbyIsImUiLCJpIiwiRGF0ZSIsImdldFRpbWUiLCJtdXNpY1ZvbHVtZSIsImVmZmVjdFZvbHVtZSIsImRlc3Ryb3lSZXdhcmRlZFZpZGVvIiwib25SZXdhcmRlZFZpZGVvU2hvd1N1Y2Nlc3NIYW5kbGVyIiwicGF1c2UiLCJvblJld2FyZGVkVmlkZW9TaG93RmFpbEhhbmRsZXIiLCJyZXN1bWUiLCJvblJld2FyZGVkVmlkZW9Ob3RMb2FkSGFuZGxlciIsIm9uUmV3YXJkZWRWaWRlb0Vycm9ySGFuZGxlciIsIm9uUmV3YXJkZWRWaWRlb0Nsb3NlSGFuZGxlciIsInBhdXNlQWxsIiwiY2MiLCJnYW1lIiwicmVzdW1lQWxsIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VB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QXJCO0lBQ0F0QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0lBQ0FzQixFQUFFLENBQUNDLElBQUgsQ0FBUVIsS0FBUjtFQUNILENBSkQ7O0VBS0EvQixDQUFDLENBQUNhLFNBQUYsQ0FBWW9CLE1BQVosR0FBcUIsWUFBWTtJQUM3QkssRUFBRSxDQUFDQyxJQUFILENBQVFOLE1BQVI7SUFDQWxCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7SUFDQW5CLFlBQVksV0FBWixDQUFxQjJDLFNBQXJCO0VBQ0gsQ0FKRDs7RUFLQSxPQUFPeEMsQ0FBUDtBQUNILENBbEdPLEVBQVI7O0FBbUdBeUMsT0FBTyxXQUFQLEdBQWtCMUMsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkYXVkaW9QbGF5ZXIgPSByZXF1aXJlKFwiLi9BdWRpb1BsYXllclwiKTtcclxudmFyIG4gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdCgpIHtcclxuICAgICAgICB0aGlzLnNob3dDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jbG9zZUNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB0aGlzLnZpZGVvRW5kQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2lzTG9hZENvbXBsZXRlID0gITE7XHJcbiAgICAgICAgdGhpcy5fZ2FtZU11c2ljVm9sdW1lID0gLTE7XHJcbiAgICAgICAgdGhpcy5fZ2FtZUVmZmVjdHNWb2x1bWUgPSAtMTtcclxuICAgICAgICB0aGlzLl9vbkxvYWRDYWxsYmFja1JlZiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrUmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9vbkVycm9yQ2FsbGJhY2tSZWYgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2Vycm9yUmVsb2FkQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX2xhc3RDYWxsU2hvd1RpbWUgPSAtMTtcclxuICAgICAgICB0aGlzLmFkVW5pdElkID0gbnVsbDtcclxuICAgIH1cclxuICAgIHQucHJvdG90eXBlLmluaXRBZCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXdhcmRlZFZpZGVvIGluaXRcIik7XHJcbiAgICAgICAgdGhpcy5hZFVuaXRJZCA9IHQ7XHJcbiAgICAgICAgdGhpcy5fb25Mb2FkQ2FsbGJhY2tSZWYgPSB0aGlzLm9uUmV3YXJkZWRWaWRlb0xvYWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9vbkNsb3NlQ2FsbGJhY2tSZWYgPSB0aGlzLm9uUmV3YXJkZWRWaWRlb0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fb25FcnJvckNhbGxiYWNrUmVmID0gdGhpcy5vblJld2FyZGVkVmlkZW9FcnJvci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUmV3YXJkZWRWaWRlbygpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLnNob3dSZXdhcmRlZFZpZGVvID0gZnVuY3Rpb24gKHQsIGUsIGkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNob3dSZXdhcmRlZFZpZGVvXCIpO1xyXG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5fbGFzdENhbGxTaG93VGltZSA9IG47XHJcbiAgICAgICAgdGhpcy5zaG93Q2FsbGJhY2sgPSB0O1xyXG4gICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayA9IGU7XHJcbiAgICAgICAgdGhpcy52aWRlb0VuZENhbGxiYWNrID0gaTtcclxuICAgICAgICB0aGlzLl9nYW1lTXVzaWNWb2x1bWUgPSAkYXVkaW9QbGF5ZXIuZGVmYXVsdC5tdXNpY1ZvbHVtZTtcclxuICAgICAgICB0aGlzLl9nYW1lRWZmZWN0c1ZvbHVtZSA9ICRhdWRpb1BsYXllci5kZWZhdWx0LmVmZmVjdFZvbHVtZTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5kZXN0cm95UmV3YXJkZWRWaWRlbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlc3RvcnlSZXdhcmRlZFZpZGVvXCIpO1xyXG4gICAgICAgIHRoaXMuc2hvd0NhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmlkZW9FbmRDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5faXNMb2FkQ29tcGxldGUgPSAhMTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5vblJld2FyZGVkVmlkZW9TaG93U3VjY2Vzc0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvblJld2FyZGVkVmlkZW9TaG93U3VjY2Vzc1wiKTtcclxuICAgICAgICBpZiAodGhpcy5zaG93Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLm9uUmV3YXJkZWRWaWRlb1Nob3dGYWlsSGFuZGxlciA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvblJld2FyZGVkVmlkZW9TaG93RmFpbEhhbmRsZXJcIiwgdCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93Q2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52aWRlb0VuZENhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9lcnJvclJlbG9hZENvdW50IDwgMikge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lSZXdhcmRlZFZpZGVvKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUmV3YXJkZWRWaWRlbygpO1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvclJlbG9hZENvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLm9uUmV3YXJkZWRWaWRlb05vdExvYWRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25SZXdhcmRlZFZpZGVvTm90TG9hZEhhbmRsZXJcIik7XHJcbiAgICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3lSZXdhcmRlZFZpZGVvKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSZXdhcmRlZFZpZGVvKCk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUub25SZXdhcmRlZFZpZGVvRXJyb3JIYW5kbGVyID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uUmV3YXJkZWRWaWRlb0Vycm9ySGFuZGxlclwiLCB0KTtcclxuICAgICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9lcnJvclJlbG9hZENvdW50IDwgMikge1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvclJlbG9hZENvdW50Kys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6YeN5paw5Yqg6L295r+A5Yqx6KeG6aKRXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lSZXdhcmRlZFZpZGVvKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUmV3YXJkZWRWaWRlbygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5vblJld2FyZGVkVmlkZW9DbG9zZUhhbmRsZXIgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25SZXdhcmRlZFZpZGVvQ2xvc2VIYW5kbGVyXCIsIHQpO1xyXG4gICAgICAgIHRoaXMuX2lzTG9hZENvbXBsZXRlID0gITE7XHJcbiAgICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgICAgICB0ID8gdGhpcy52aWRlb0VuZENhbGxiYWNrICYmIHRoaXMudmlkZW9FbmRDYWxsYmFjaygpIDogdGhpcy5jbG9zZUNhbGxiYWNrICYmIHRoaXMuY2xvc2VDYWxsYmFjaygpO1xyXG4gICAgICAgIHRoaXMuc2hvd0NhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmlkZW9FbmRDYWxsYmFjayA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGF1ZGlvUGxheWVyLmRlZmF1bHQucGF1c2VBbGwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaaguWBnFwiKTtcclxuICAgICAgICBjYy5nYW1lLnBhdXNlKCk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLmdhbWUucmVzdW1lKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlvIDlp4tcIik7XHJcbiAgICAgICAgJGF1ZGlvUGxheWVyLmRlZmF1bHQucmVzdW1lQWxsKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHQ7XHJcbn0pKCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IG47XHJcbiJdfQ==