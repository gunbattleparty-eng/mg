var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $util = require("./Util");
var $configContext = require("./ConfigContext");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $enemyStatus = require("./EnemyStatus");
var $baseBullet = require("./BaseBullet");
var m = cc._decorator;
var y = m.ccclass;
var g =
    (m.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.thunder_bullet;
            e.targetEnemy = null;
            e.isExtra = !1;
            e.targetPos = null;
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e, i) {
            t.prototype.initButtle.call(this, e, i);
            this.skillId = i;
            this.clearStatus();
            this.atk = this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL];
        };
        e.prototype.initParam = function (t) {
            this.atk = t;
        };
        e.prototype.setAnimation = function () {
            var t = this;
            var e = this.node.children[0].getComponent(cc.Animation);
            e.getAnimationState("bullet_9").time = $gameContext.default.ins.gameRatio;
            e.play("bullet_9");
            e.once(
                cc.Animation.EventType.FINISHED,
                function () {
                    if ($util.default.isValid(t.targetEnemy.node)) {
                        t.attackEnemy();
                    }
                    t.removeSelf();
                },
                this
            );
        };
        e.prototype.attackEnemy = function () {
            var t = this.targetEnemy.sufferAtk({
                id: this.skillId,
                skillSpecialitys: this.skillSpecialitys,
                atk: this.atk
            });
            if (this.skillParam.thunderSplitCount > 0) {
                this.createSplitBullet();
            }
            if (this.skillParam.thunderBoomRangeAdd > 0) {
                this.createBoom();
            }
            if (t && !this.isExtra) {
                this.createExtra();
            }
            if (this.skillParam.thunderPierceCount > 0) {
                this.createPierce();
            }
            if (this.skillParam.thunderParalysisTime > 0) {
                var e = {
                    type: $enemyStatus.EnemyDebuffType.PARALYSIS,
                    timeLeft: this.skillParam.thunderParalysisTime,
                    value: 0
                };
                this.targetEnemy.sufferDebuff(e);
            }
            if (this.skillParam.thunderMatrixRange > 0) {
                this.createThunderMatrix();
            }
        };
        e.prototype.createPierce = function () {
            var t = $gameContext.default.ins.getRangeRandomEnemyLayerByPos(
                this.targetPos,
                this.skillParam.thunderPierceRange
            );
            if (t && $util.default.isValid(t.node)) {
                var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.thunder_puncture);
                if (!e) {
                    var i = $assetsLoader.default.instance.getRes(
                        $assetsMap.BundleNames.Game,
                        $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_12
                    );
                    (e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.buttleLayer.parent).getComponent(
                        $baseBullet.default
                    )).skillSpecialitys = $configContext.default.instance.basicSkillConfigMap.get(
                        this.skillId
                    ).skill_tpye;
                }
                e.setPosition(this.targetPos.clone());
                e.initBullet12(t, this.skillId);
                e.initButtle(null, this.skillId);
                e.insert($gameContext.default.ins.buttleLayer);
            }
        };
        e.prototype.createExtra = function () {
            var t = this;
            if (!(this.skillParam.thunderExtraAtkRange <= 0)) {
                for (var e = 0; e < this.skillParam.thunderExtraAtkCount; e++) {
                    setTimeout(function () {
                        if (cc.isValid(t.targetEnemy)) {
                            var e = $gameContext.default.ins.getRangeRandomEnemyLayer(
                                t.targetEnemy.node,
                                t.skillParam.thunderExtraAtkRange
                            );
                            if (!cc.isValid(e)) {
                                return;
                            }
                            t.createButtle(e);
                        }
                    }, 300 * e);
                }
            }
        };
        e.prototype.createButtle = function (t) {
            var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.thunder_bullet);
            if (!e) {
                var i = $assetsLoader.default.instance.getRes(
                    $assetsMap.BundleNames.Game,
                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_9
                );
                (e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.buttleLayer.parent).getComponent(
                    $baseBullet.default
                )).skillSpecialitys = $configContext.default.instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
            }
            e.setPosition(t.getPosition().clone());
            e.targetEnemy = t;
            e.isExtra = !0;
            e.initButtle(null, this.skillId);
            e.insert($gameContext.default.ins.buttleLayer);
            e.setAnimation("");
        };
        e.prototype.createThunderMatrix = function () {
            var t = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.thunder_matrix);
            if (!t) {
                var e = $assetsLoader.default.instance.getRes(
                    $assetsMap.BundleNames.Game,
                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_15
                );
                (t = $resUtil.ResUtil.instantiate(e, $gameContext.default.ins.buttleLayer.parent).getComponent(
                    $baseBullet.default
                )).skillSpecialitys = $configContext.default.instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
            }
            t.setPosition(this.targetPos.add(cc.v3(0, -50)));
            t.initButtle(null, this.skillId);
            t.insert($gameContext.default.ins.floorLayer);
            t.setAnimation(null);
        };
        e.prototype.createBoom = function () {
            var t = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.thunder_boom);
            if (!t) {
                var e = $assetsLoader.default.instance.getRes(
                    $assetsMap.BundleNames.Game,
                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_11
                );
                t = $resUtil.ResUtil.instantiate(e, $gameContext.default.ins.lowBulletLayer.parent).getComponent(
                    $baseBullet.default
                );
            }
            t.setPosition(this.targetPos.clone());
            t.initButtle(null, this.skillId);
            t.insert($gameContext.default.ins.lowBulletLayer);
            t.setAnimation(null);
        };
        e.prototype.createSplitBullet = function () {
            var t = 0;
            for (var e = 0; e < this.skillParam.thunderSplitCount; e++) {
                var i = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.thunder_split);
                if (!i) {
                    var o = $assetsLoader.default.instance.getRes(
                        $assetsMap.BundleNames.Game,
                        $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_10
                    );
                    (i = $resUtil.ResUtil.instantiate(o).getComponent($baseBullet.default)).skillSpecialitys =
                        $configContext.default.instance.basicSkillConfigMap.get(61).skill_tpye;
                }
                i.setPosition(this.targetPos.clone());
                var n = $util.default.angleConverDir(t);
                i.initButtle(n, this.skillId);
                i.targetEnemy = this.targetEnemy;
                i.insert($gameContext.default.ins.buttleLayer);
                t += 360 / this.skillParam.thunderSplitCount;
            }
        };
        e.prototype.updateFrame = function () {};
        return __decorate([y], e);
    })($baseBullet.default));
exports.default = g;
