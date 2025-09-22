var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $listItem = require("./ListItem");
var $roleContext = require("./RoleContext");
var d = cc._decorator;
var p = d.ccclass;
var f = d.property;
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.usedBox = null;
        e.skin = null;
        e.unlockBox = null;
        e.redDot = null;
        e.gunSKinId = -1;
        return e;
    }
    __extends(e, t);
    e.prototype.render = function (t) {
        var e = this;
        this.gunSKinId = t.id;
        var i = $roleContext.default.ins.currSkinInfo;
        var o = $roleContext.default.ins.getGunSkinInfo(t.id);
        this.usedBox.active = t.id === i.gun;
        this.unlockBox.active = !o.isHave;
        $assetsLoader.default.instance.loadRes(
            $assetsMap.BundleNames.Public_Res,
            ["/gun_icon/q" + t.id],
            cc.SpriteFrame,
            null,
            function (t, i) {
                var o = i[0];
                if (o && cc.isValid(e.skin)) {
                    e.skin.spriteFrame = $resUtil.ResUtil.assignWith(o, e.node);
                }
            }
        );
        this.redDot.active = !o.isHave && o.shard >= t.shard_num;
    };
    __decorate([f(cc.Node)], e.prototype, "usedBox", void 0);
    __decorate([f(cc.Sprite)], e.prototype, "skin", void 0);
    __decorate([f(cc.Node)], e.prototype, "unlockBox", void 0);
    __decorate([f(cc.Node)], e.prototype, "redDot", void 0);
    return __decorate([p], e);
})($listItem.default);
exports.default = h;
