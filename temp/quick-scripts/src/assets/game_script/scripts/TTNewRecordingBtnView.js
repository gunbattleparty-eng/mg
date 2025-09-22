"use strict";
cc._RF.push(module, '9f22f178g5EVqMOD+rWic3F', 'TTNewRecordingBtnView');
// game_script/scripts/TTNewRecordingBtnView.js

"use strict";

var o;

var $uIManager = require("./UIManager");

var $platform = require("./Platform");

var $aD = require("./AD");

var $aDConfig = require("./ADConfig");

var u = cc._decorator;
var d = u.ccclass;
var p = u.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.startRecordNode = null;
    e.recordingNode = null;
    e.shardRecordNode = null;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.node.active = !1;

    if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
      this.node.active = !0;
      this.startRecordNode.active = !0;
      this.startRecordNode.on("click", this.ttStartRecord, this);
      this.recordingNode.on("click", this.ttEndRecord, this);
      this.shardRecordNode.on("click", this.ttshareRecor, this);
    }
  };

  e.prototype.onDestroy = function () {
    this.startRecordNode.off("click", this.ttStartRecord, this);
    this.recordingNode.off("click", this.ttEndRecord, this);
    this.shardRecordNode.off("click", this.ttshareRecor, this);

    if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
      $aD["default"].toutiao.stopRecorder();
    }
  };

  e.prototype.ttStartRecord = function () {
    console.log("=============录屏开始==============");
    $aD["default"].toutiao.startRecorder();
    this.recordingNode.active = !0;
    this.startRecordNode.active = !1;
    this.autoStop();
  };

  e.prototype.ttEndRecord = function () {
    var t = this;
    console.log("=============停止录屏==============");
    this.autoStop();
    this.startRecordNode.active = !1;
    $aD["default"].toutiao.stopRecorder(function (e, i) {
      t.recordingNode.active = !1;
      i <= 3e3 ? ($uIManager.UIManager.instance.showToast("录屏失败：录屏时长低于 3 秒"), t.startRecordNode.active = !0) : t.shardRecordNode.active = !0;
    });
  };

  e.prototype.ttshareRecor = function () {
    console.log("=============点击分享==============");
    var t = $aD["default"].toutiao.getRecordVideoPath();

    if ("" === t) {
      $uIManager.UIManager.instance.showToast("录屏失败：录屏时长低于 3 秒");
      this.startRecordNode.active = !0;
      return void (this.shardRecordNode.active = !1);
    }

    $aD["default"].toutiao.share({
      share_title: $aDConfig.ADConfig.tt.share_title,
      share_desc: $aDConfig.ADConfig.tt.share_desc,
      share_imageUrl: $aDConfig.ADConfig.tt.share_desc,
      videoPath: t,
      success: function success() {}
    });
    this.shardRecordNode.active = !1;
    this.startRecordNode.active = !0;
  };

  e.prototype.autoStop = function () {
    var t = this;
    this.unschedule(this.autoStop);
    this.scheduleOnce(function () {
      $uIManager.UIManager.instance.showToast("录屏超过300秒,自动暂停");
      t.ttEndRecord();
    }, 299);
  };

  __decorate([p(cc.Node)], e.prototype, "startRecordNode", void 0);

  __decorate([p(cc.Node)], e.prototype, "recordingNode", void 0);

  __decorate([p(cc.Node)], e.prototype, "shardRecordNode", void 0);

  return __decorate([d], e);
}(cc.Component);

exports["default"] = f;

cc._RF.pop();