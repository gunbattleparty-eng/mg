var o;
var $object = require("./Object");
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $gameContext = require("./GameContext");
var $baseBullet = require("./BaseBullet");
var p = cc._decorator;
var f = p.ccclass;
var h =
    (p.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.s_bullet_2;
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e) {
            t.prototype.initButtle.call(this, e, null);
            this.atk = $gameContext.default.ins.skillInfo.skinAtk;
            this.speed = $gameContext.default.ins.skillInfo.skinParam[3];
            if (e) {
                this.velocity.set(e).multiplyScalar(this.speed);
            }
        };
        e.prototype.onTrigger = function (t, e) {
            if (!this.isUse && e == $object.Trigger.enter) {
                var i = t.object;
                i.sufferAtk({
                    skillSpecialitys: this.skillSpecialitys,
                    atk: this.atk
                });
                this.createButtleBoom(i);
                this.removeSelf();
            }
        };
        e.prototype.createButtleBoom = function (t) {
            var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.s_bullet_2_1);
            if (!e) {
                var i = $assetsLoader.default.instance.getRes(
                    $assetsMap.BundleNames.Game,
                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.SBullet_2_1
                );
                e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.lowBulletLayer.parent).getComponent(
                    $baseBullet.default
                );
            }
            e.setPosition(cc.v3(t.node.position.x, this.node.position.y));
            e.initSBullet();
            e.insert($gameContext.default.ins.lowBulletLayer);
            e.setAnimation(null);
        };
        return __decorate([f], e);
    })($baseBullet.default));
exports.default = h;
