var o;
var $assetsMap = require("./AssetsMap");
var $popupManager = require("./PopupManager");
var $platform = require("./Platform");
var $aD = require("./AD");
var u = cc._decorator.ccclass;
var d = (function (t) {
    function e() {
        return (null !== t && t.apply(this, arguments)) || this;
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
        $aD.default.toutiao.checkScene(
            function (e) {
                if (e) {
                    t.node.active = !0;
                }
            },
            function () {
                t.node.active = !1;
            }
        );
    };
    e.prototype.clickBtn = function () {
        var t = this;
        $popupManager.PopupManager.instance.open(
            $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.TTGiftView,
            null,
            {
                closeCallback: function () {
                    t.render();
                }
            }
        );
    };
    return __decorate([u], e);
})(cc.Component);
exports.default = d;
