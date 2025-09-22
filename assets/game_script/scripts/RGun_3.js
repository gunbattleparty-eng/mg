var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $configContext = require("./ConfigContext");
var $globalParam = require("./GlobalParam");
var $baseBullet = require("./BaseBullet");
var $gameContext = require("./GameContext");
var p = (function (t) {
    function e(e) {
        var i = t.call(this, e) || this;
        $gameContext.default.ins.skillInfo.robotParam = $configContext.default.instance.robotConfigs.find(function (t) {
            return 4 === t.id;
        }).Petsskin_skill_value;
        i.timeLeft = $gameContext.default.ins.skillInfo.robotParam[1];
        return i;
    }
    __extends(e, t);
    e.prototype.updateF = function (e) {
        t.prototype.updateF.call(this, e);
        if (!(this.isAttacking || $globalParam.default.isGamePuase)) {
            this.timeLeft -= e;
            if (this.timeLeft <= 0) {
                this.startGun();
            }
        }
    };
    e.prototype.startGun = function () {
        var t = this;
        this.isAttacking = !0;
        this.createButtle();
        this.schedulesOnce(function () {
            t.timeLeft = $gameContext.default.ins.skillInfo.robotParam[1];
            t.isAttacking = !1;
        }, $gameContext.default.ins.skillInfo.robotParam[5]);
    };
    e.prototype.createButtle = function () {
        var t = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.r_bullet_3);
        if (!t) {
            var e = $assetsLoader.default.instance.getRes(
                $assetsMap.BundleNames.Game,
                $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_3
            );
            t = $resUtil.ResUtil.instantiate(e, $gameContext.default.ins.floorLayer.parent).getComponent(
                $baseBullet.default
            );
        }
        t.setPosition(cc.v3(0, this.pointNode.y + $gameContext.default.ins.skillInfo.robotParam[2]));
        t.initButtle(null);
        t.insert($gameContext.default.ins.floorLayer);
    };
    return e;
})(require("./BaseGun").default);
exports.default = p;
