var o;
var $object = require("./Object");
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $configContext = require("./ConfigContext");
var $gameContext = require("./GameContext");
var $enemyStatus = require("./EnemyStatus");
var $baseBullet = require("./BaseBullet");
var h = cc._decorator;
var m = h.ccclass;
var y =
    (h.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.oil;
            e.enemys = new Set();
            e.targetPos = null;
            e.targetEnemy = null;
            e.flyTime = 0;
            e.timeLeft = 0;
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e, i) {
            t.prototype.initButtle.call(this, e, i);
            this.speed = this.skillParam.oilSpeed;
            this.velocity.set(e).multiplyScalar(this.speed);
            this.setAngle(0);
            this.timeLeft = 0;
            this.flyTime = this.targetPos.sub(this.getPosition()).mag() / this.speed;
        };
        e.prototype.onTrigger = function (t, e) {
            if (!this.isUse) {
                if (e == $object.Trigger.enter) {
                    var i = t.object;
                    this.enemys.add(i);
                } else {
                    if (e == $object.Trigger.exit) {
                        i = t.object;
                        this.enemys.delete(i);
                    }
                }
            }
        };
        e.prototype.updateFrame = function (e) {
            if (!this.isUse) {
                t.prototype.updateFrame.call(this, e);
                this.timeLeft += e;
                if (this.timeLeft >= this.flyTime) {
                    this.timeLeft = this.flyTime;
                    this.isUse = !0;
                }
                this.node.children[0].scale = this.easeSine(this.timeLeft, 1, 0.5, this.flyTime);
                if (this.isUse) {
                    this.attack();
                    this.removeSelf();
                }
            }
        };
        e.prototype.attack = function () {
            var t = this;
            this.enemys.forEach(function (e) {
                e.sufferDebuff({
                    type: $enemyStatus.EnemyDebuffType.BACK,
                    timeLeft: -1,
                    value: t.skillParam.oilBack
                });
                if (
                    t.skillParam.oilExtraSend &&
                    t.targetEnemy &&
                    t.targetEnemy === e &&
                    t.enemys.has(e) &&
                    2 !== t.targetEnemy.config.monster_type
                ) {
                    t.createSelf();
                }
            });
            this.createBoom();
            this.createBurnArea();
        };
        e.prototype.createSelf = function () {
            var t = $gameContext.default.ins.getRandomEnemy();
            if (t) {
                var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.oil);
                if (!e) {
                    var i = $assetsLoader.default.instance.getRes(
                        $assetsMap.BundleNames.Game,
                        $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_24
                    );
                    (e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.buttleLayer.parent).getComponent(
                        $baseBullet.default
                    )).skillSpecialitys = $configContext.default.instance.basicSkillConfigMap.get(
                        this.skillId
                    ).skill_tpye;
                }
                e.targetPos = t.getPosition().clone();
                e.targetEnemy = null;
                e.setPosition(this.getPosition());
                var o = t.getPosition().sub(this.getPosition()).normalize();
                e.initButtle(o, this.skillId);
                e.insert($gameContext.default.ins.buttleLayer);
            }
        };
        e.prototype.createBoom = function () {
            var t = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.oil_boom);
            if (!t) {
                var e = $assetsLoader.default.instance.getRes(
                    $assetsMap.BundleNames.Game,
                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_25
                );
                (t = $resUtil.ResUtil.instantiate(e, $gameContext.default.ins.lowBulletLayer.parent).getComponent(
                    $baseBullet.default
                )).skillSpecialitys = this.skillSpecialitys;
            }
            t.setPosition(this.getPosition());
            t.initButtle(null, this.skillId);
            t.insert($gameContext.default.ins.lowBulletLayer);
            t.setAnimation(null);
        };
        e.prototype.createBurnArea = function () {
            var t = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.oil_burn_area);
            if (!t) {
                var e = $assetsLoader.default.instance.getRes(
                    $assetsMap.BundleNames.Game,
                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_26
                );
                (t = $resUtil.ResUtil.instantiate(e, $gameContext.default.ins.floorLayer.parent).getComponent(
                    $baseBullet.default
                )).skillSpecialitys = this.skillSpecialitys;
            }
            t.setPosition(this.getPosition());
            t.initButtle(null, this.skillId);
            t.insert($gameContext.default.ins.floorLayer);
        };
        e.prototype.easeSine = function (t, e, i, o) {
            return i * Math.sin((t / o) * Math.PI) + e;
        };
        return __decorate([m], e);
    })($baseBullet.default));
exports.default = y;
