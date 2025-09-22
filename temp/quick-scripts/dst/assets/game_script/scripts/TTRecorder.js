
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/TTRecorder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38252Rq7LFFxII5w0uTY9Sv', 'TTRecorder');
// game_script/scripts/TTRecorder.js

"use strict";

var o = window.tt;

var n = function () {
  function t() {
    this._videoPath = "";
    this._startTime = -1;
    this._stopTime = -1;
    this._onStartCallbackRef = null;
    this._onStopCallbackRef = null;
  }

  t.prototype.init = function () {
    this._onStartCallbackRef = this.onRecorderStart.bind(this);
    this._onStopCallbackRef = this.onRecorderStop.bind(this);
  };

  t.prototype.startRecorder = function (t) {
    this._startCallback = t;
    this._startTime = -1;
    this._stopTime = -1;
    var e = o.getGameRecorderManager();
    e.start({
      duration: 300
    });
    e.onStart(this._onStartCallbackRef);
    e.onStop(this._onStopCallbackRef);
  };

  t.prototype.stopRecorder = function (t) {
    console.warn("录屏停止");
    this._stopCallback = t;
    o.getGameRecorderManager().stop();
  };

  t.prototype.getRecordVideoPath = function () {
    return this._videoPath ? this._videoPath : "";
  };

  t.prototype.onRecorderStart = function () {
    this._videoPath = "";
    this._startTime = new Date().getTime();

    if (this._startCallback) {
      this._startCallback();
    }

    this._startCallback = null;
  };

  t.prototype.onRecorderStop = function (t) {
    this._stopTime = new Date().getTime();
    var e = this._stopTime - this._startTime;
    this._videoPath = e < 3e3 ? "" : t.videoPath;

    if (this._stopCallback) {
      this._stopCallback(this._videoPath, e);
    }

    this._stopCallback = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFRUUmVjb3JkZXIuanMiXSwibmFtZXMiOlsibyIsIndpbmRvdyIsInR0IiwibiIsInQiLCJfdmlkZW9QYXRoIiwiX3N0YXJ0VGltZSIsIl9zdG9wVGltZSIsIl9vblN0YXJ0Q2FsbGJhY2tSZWYiLCJfb25TdG9wQ2FsbGJhY2tSZWYiLCJwcm90b3R5cGUiLCJpbml0Iiwib25SZWNvcmRlclN0YXJ0IiwiYmluZCIsIm9uUmVjb3JkZXJTdG9wIiwic3RhcnRSZWNvcmRlciIsIl9zdGFydENhbGxiYWNrIiwiZSIsImdldEdhbWVSZWNvcmRlck1hbmFnZXIiLCJzdGFydCIsImR1cmF0aW9uIiwib25TdGFydCIsIm9uU3RvcCIsInN0b3BSZWNvcmRlciIsImNvbnNvbGUiLCJ3YXJuIiwiX3N0b3BDYWxsYmFjayIsInN0b3AiLCJnZXRSZWNvcmRWaWRlb1BhdGgiLCJEYXRlIiwiZ2V0VGltZSIsInZpZGVvUGF0aCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLEVBQWY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsS0FBS0MsVUFBTCxHQUFrQixFQUFsQjtJQUNBLEtBQUtDLFVBQUwsR0FBa0IsQ0FBQyxDQUFuQjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsQ0FBQyxDQUFsQjtJQUNBLEtBQUtDLG1CQUFMLEdBQTJCLElBQTNCO0lBQ0EsS0FBS0Msa0JBQUwsR0FBMEIsSUFBMUI7RUFDSDs7RUFDREwsQ0FBQyxDQUFDTSxTQUFGLENBQVlDLElBQVosR0FBbUIsWUFBWTtJQUMzQixLQUFLSCxtQkFBTCxHQUEyQixLQUFLSSxlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQUEzQjtJQUNBLEtBQUtKLGtCQUFMLEdBQTBCLEtBQUtLLGNBQUwsQ0FBb0JELElBQXBCLENBQXlCLElBQXpCLENBQTFCO0VBQ0gsQ0FIRDs7RUFJQVQsQ0FBQyxDQUFDTSxTQUFGLENBQVlLLGFBQVosR0FBNEIsVUFBVVgsQ0FBVixFQUFhO0lBQ3JDLEtBQUtZLGNBQUwsR0FBc0JaLENBQXRCO0lBQ0EsS0FBS0UsVUFBTCxHQUFrQixDQUFDLENBQW5CO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixDQUFDLENBQWxCO0lBQ0EsSUFBSVUsQ0FBQyxHQUFHakIsQ0FBQyxDQUFDa0Isc0JBQUYsRUFBUjtJQUNBRCxDQUFDLENBQUNFLEtBQUYsQ0FBUTtNQUNKQyxRQUFRLEVBQUU7SUFETixDQUFSO0lBR0FILENBQUMsQ0FBQ0ksT0FBRixDQUFVLEtBQUtiLG1CQUFmO0lBQ0FTLENBQUMsQ0FBQ0ssTUFBRixDQUFTLEtBQUtiLGtCQUFkO0VBQ0gsQ0FWRDs7RUFXQUwsQ0FBQyxDQUFDTSxTQUFGLENBQVlhLFlBQVosR0FBMkIsVUFBVW5CLENBQVYsRUFBYTtJQUNwQ29CLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLE1BQWI7SUFDQSxLQUFLQyxhQUFMLEdBQXFCdEIsQ0FBckI7SUFDQUosQ0FBQyxDQUFDa0Isc0JBQUYsR0FBMkJTLElBQTNCO0VBQ0gsQ0FKRDs7RUFLQXZCLENBQUMsQ0FBQ00sU0FBRixDQUFZa0Isa0JBQVosR0FBaUMsWUFBWTtJQUN6QyxPQUFPLEtBQUt2QixVQUFMLEdBQWtCLEtBQUtBLFVBQXZCLEdBQW9DLEVBQTNDO0VBQ0gsQ0FGRDs7RUFHQUQsQ0FBQyxDQUFDTSxTQUFGLENBQVlFLGVBQVosR0FBOEIsWUFBWTtJQUN0QyxLQUFLUCxVQUFMLEdBQWtCLEVBQWxCO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQixJQUFJdUIsSUFBSixHQUFXQyxPQUFYLEVBQWxCOztJQUNBLElBQUksS0FBS2QsY0FBVCxFQUF5QjtNQUNyQixLQUFLQSxjQUFMO0lBQ0g7O0lBQ0QsS0FBS0EsY0FBTCxHQUFzQixJQUF0QjtFQUNILENBUEQ7O0VBUUFaLENBQUMsQ0FBQ00sU0FBRixDQUFZSSxjQUFaLEdBQTZCLFVBQVVWLENBQVYsRUFBYTtJQUN0QyxLQUFLRyxTQUFMLEdBQWlCLElBQUlzQixJQUFKLEdBQVdDLE9BQVgsRUFBakI7SUFDQSxJQUFJYixDQUFDLEdBQUcsS0FBS1YsU0FBTCxHQUFpQixLQUFLRCxVQUE5QjtJQUNBLEtBQUtELFVBQUwsR0FBa0JZLENBQUMsR0FBRyxHQUFKLEdBQVUsRUFBVixHQUFlYixDQUFDLENBQUMyQixTQUFuQzs7SUFDQSxJQUFJLEtBQUtMLGFBQVQsRUFBd0I7TUFDcEIsS0FBS0EsYUFBTCxDQUFtQixLQUFLckIsVUFBeEIsRUFBb0NZLENBQXBDO0lBQ0g7O0lBQ0QsS0FBS1MsYUFBTCxHQUFxQixJQUFyQjtFQUNILENBUkQ7O0VBU0EsT0FBT3RCLENBQVA7QUFDSCxDQWpETyxFQUFSOztBQWtEQTRCLE9BQU8sV0FBUCxHQUFrQjdCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbyA9IHdpbmRvdy50dDtcclxudmFyIG4gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdCgpIHtcclxuICAgICAgICB0aGlzLl92aWRlb1BhdGggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IC0xO1xyXG4gICAgICAgIHRoaXMuX3N0b3BUaW1lID0gLTE7XHJcbiAgICAgICAgdGhpcy5fb25TdGFydENhbGxiYWNrUmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9vblN0b3BDYWxsYmFja1JlZiA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX29uU3RhcnRDYWxsYmFja1JlZiA9IHRoaXMub25SZWNvcmRlclN0YXJ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fb25TdG9wQ2FsbGJhY2tSZWYgPSB0aGlzLm9uUmVjb3JkZXJTdG9wLmJpbmQodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuc3RhcnRSZWNvcmRlciA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRDYWxsYmFjayA9IHQ7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRUaW1lID0gLTE7XHJcbiAgICAgICAgdGhpcy5fc3RvcFRpbWUgPSAtMTtcclxuICAgICAgICB2YXIgZSA9IG8uZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xyXG4gICAgICAgIGUuc3RhcnQoe1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5vblN0YXJ0KHRoaXMuX29uU3RhcnRDYWxsYmFja1JlZik7XHJcbiAgICAgICAgZS5vblN0b3AodGhpcy5fb25TdG9wQ2FsbGJhY2tSZWYpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLnN0b3BSZWNvcmRlciA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwi5b2V5bGP5YGc5q2iXCIpO1xyXG4gICAgICAgIHRoaXMuX3N0b3BDYWxsYmFjayA9IHQ7XHJcbiAgICAgICAgby5nZXRHYW1lUmVjb3JkZXJNYW5hZ2VyKCkuc3RvcCgpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmdldFJlY29yZFZpZGVvUGF0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW9QYXRoID8gdGhpcy5fdmlkZW9QYXRoIDogXCJcIjtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5vblJlY29yZGVyU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fdmlkZW9QYXRoID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydENhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YXJ0Q2FsbGJhY2sgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLm9uUmVjb3JkZXJTdG9wID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLl9zdG9wVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBlID0gdGhpcy5fc3RvcFRpbWUgLSB0aGlzLl9zdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy5fdmlkZW9QYXRoID0gZSA8IDNlMyA/IFwiXCIgOiB0LnZpZGVvUGF0aDtcclxuICAgICAgICBpZiAodGhpcy5fc3RvcENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3BDYWxsYmFjayh0aGlzLl92aWRlb1BhdGgsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdG9wQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0O1xyXG59KSgpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBuO1xyXG4iXX0=