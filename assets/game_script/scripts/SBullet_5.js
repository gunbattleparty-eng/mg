var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $gameContext = require("./GameContext");
var $baseBullet = require("./BaseBullet");
var d = cc._decorator;
var p = d.ccclass;
var f = (d.property, new cc.Vec3());
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.buttleType = $baseBullet.BulletType.s_bullet_5;
        e.leftTime = 0;
        e.targetEnemy = null;
        e.targetPos = null;
        return e;
    }
    __extends(e, t);
    e.prototype.initButtle = function (e) {
        this.speed = (cc.winSize.height + 60) / $gameContext.default.ins.skillInfo.skinParam[5];
        t.prototype.initButtle.call(this, e, null);
        this.setAngle(0);
        this.leftTime = $gameContext.default.ins.skillInfo.skinParam[5];
        this.targetEnemy.addDieCallback(this.enemyDie, this);
        this.targetPos = null;
        if (e) {
            this.velocity.set(e).multiplyScalar(this.speed);
        }
    };
    e.prototype.enemyDie = function (t) {
        this.targetPos = t.getPosition().clone();
    };
    e.prototype.updateFrame = function (t) {
        if (!(this.leftTime <= 0)) {
            this.leftTime -= t;
            if (this.leftTime <= 0) {
                this.createBullet();
                this.targetEnemy.removeDieCallback(this);
                return this.removeSelf();
            }
            var e = this.getPosition();
            var i = this.velocity;
            f.x = e.x + i.x * t;
            f.y = e.y + i.y * t;
            f.z = e.z + i.z * t;
            this.setPosition(f);
        }
    };
    e.prototype.createBullet = function () {
        if (!this.targetPos) {
            this.targetPos = this.targetEnemy.getPosition().clone();
        }
        var t = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.s_bullet_5_1);
        if (!t) {
            var e = $assetsLoader.default.instance.getRes(
                $assetsMap.BundleNames.Game,
                $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.SBullet_5_1
            );
            t = $resUtil.ResUtil.instantiate(e, $gameContext.default.ins.buttleLayer.parent).getComponent(
                $baseBullet.default
            );
        }
        f.x = this.targetPos.x;
        f.y = this.node.y;
        t.setPosition(f.clone());
        t.targetY = this.targetPos.y;
        f.x = 0;
        f.y = -1;
        t.initButtle(f, null);
        t.insert($gameContext.default.ins.buttleLayer);
    };
    return __decorate([p], e);
})($baseBullet.default);
exports.default = h;
