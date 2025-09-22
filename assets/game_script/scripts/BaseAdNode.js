var o;
var $aDAssetsManager = require("./ADAssetsManager");
var r = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.adNode = null;
        e.adData = null;
        return e;
    }
    __extends(e, t);
    e.prototype.createNativeAd = function (t, e, i) {
        if (cc.isValid(this.adNode)) {
            this.adNode.destroy();
        }
        this.adNode = $aDAssetsManager.default.instance.createNodeByPreloading($aDAssetsManager.adAssetsMap.prefabs[t]);
        this.adNode.zIndex = cc.macro.MAX_ZINDEX;
        var o = cc.director.getScene().getChildByName("Canvas");
        this.adNode.parent = o;
        var n = this.adNode.getChildByName("content");
        for (var r = 0; r < n.children.length; r++) {
            var a = n.children[r];
            if (a.name.includes("btn_click")) {
                a.on("click", e, this);
            }
            if (a.name.includes("btn_close")) {
                a.on("click", i, this);
            }
        }
    };
    e.prototype.destroyNativeAdNode = function () {
        if (cc.isValid(this.adNode)) {
            this.adNode.destroy();
            this.adNode = null;
        }
    };
    e.prototype.destroyAd = function () {
        this.destroyNativeAdNode();
        t.prototype.destroyAd.call(this);
    };
    e.prototype.setAdData = function (t, e, i) {
        if (cc.isValid(this.adNode)) {
            var o = this.adNode.getChildByName("content");
            if (t) {
                cc.loader.load(
                    {
                        url: t,
                        type: "png"
                    },
                    function (t, e) {
                        if (t) {
                            console.error("img加载失败");
                        } else {
                            {
                                var i = new cc.SpriteFrame(e);
                                i
                                    ? (o.getChildByName("ad_icon").getComponent(cc.Sprite).spriteFrame = i)
                                    : console.error("img加载失败");
                            }
                        }
                    }
                );
            }
            var n = o.getChildByName("ad_title");
            if (cc.isValid(n) && e) {
                n.getComponent(cc.Label).string = e;
            }
            var s = o.getChildByName("ad_dest");
            if (cc.isValid(s) && i) {
                s.getComponent(cc.Label).string = e;
            }
        }
    };
    return e;
})(require("./BaseAd").BaseAd);
exports.default = r;
