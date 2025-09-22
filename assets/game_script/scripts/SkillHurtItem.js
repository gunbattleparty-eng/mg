var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var c = cc._decorator;
var u = c.ccclass;
var d = c.property;
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.icon = null;
        e.skillCountLabel = null;
        e.skillNameLabel = null;
        e.skillHurtLable = null;
        e.skillHurtSecLable = null;
        e.skillHurtInfo = null;
        return e;
    }
    __extends(e, t);
    e.prototype.render = function (t) {
        var e = this;
        if (!(this.skillHurtInfo && this.skillHurtInfo.icon === t.icon)) {
            $assetsLoader.default.instance.loadRes(
                $assetsMap.BundleNames.Public_Res,
                ["/cd_icon/" + t.icon],
                cc.SpriteFrame,
                null,
                function (t, i) {
                    var o = i[0];
                    if (o && cc.isValid(e.icon)) {
                        e.icon.spriteFrame = $resUtil.ResUtil.assignWith(o, e.node);
                    }
                }
            );
        }
        this.skillHurtInfo = t;
        this.skillCountLabel.string = t.skillCount.toString();
        this.skillNameLabel.string = t.skillName;
        this.skillHurtLable.string = t.skillHurt.toString();
        this.skillHurtSecLable.string = t.skillHurtSec.toString();
    };
    __decorate([d(cc.Sprite)], e.prototype, "icon", void 0);
    __decorate([d(cc.Label)], e.prototype, "skillCountLabel", void 0);
    __decorate([d(cc.Label)], e.prototype, "skillNameLabel", void 0);
    __decorate([d(cc.Label)], e.prototype, "skillHurtLable", void 0);
    __decorate([d(cc.Label)], e.prototype, "skillHurtSecLable", void 0);
    return __decorate([u], e);
})(cc.Component);
exports.default = p;
