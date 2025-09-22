var o;
var $platform = require("./Platform");
var $aD = require("./AD");
var $aDConfig = require("./ADConfig");
var c = cc._decorator;
var u = c.ccclass;
var d = c.property;
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.node_btn_share = null;
        e.videoPath = "";
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {
        this.node.active = $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO;
        this.node_btn_share.on("click", this.onClickShare, this);
        this.node_btn_share.active = !1;
        this.videoPath = "";
        if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
            $aD.default.toutiao.stopRecorder(function () {
                console.log("结束录屏");
            });
        }
    };
    e.prototype.update = function () {
        if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO && !this.videoPath) {
            var t = $aD.default.toutiao.getRecordVideoPath();
            if (t) {
                this.videoPath = t;
                this.node_btn_share.active = !0;
            }
        }
    };
    e.prototype.onClickShare = function () {
        if (this.videoPath) {
            $aD.default.toutiao.share({
                share_title: $aDConfig.ADConfig.tt.share_title,
                share_desc: $aDConfig.ADConfig.tt.share_desc,
                share_imageUrl: $aDConfig.ADConfig.tt.share_imageUrl,
                videoPath: this.videoPath,
                success: function () {}
            });
        }
    };
    __decorate([d(cc.Node)], e.prototype, "node_btn_share", void 0);
    return __decorate([u], e);
})(cc.Component);
exports.default = p;
