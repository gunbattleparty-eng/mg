"use strict";
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