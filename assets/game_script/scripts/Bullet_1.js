var o;
var $object = require("./Object");
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $seedUtil = require("./SeedUtil");
var $configContext = require("./ConfigContext");
var $roleContext = require("./RoleContext");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $enemyStatus = require("./EnemyStatus");
var $baseBullet = require("./BaseBullet");
var g = cc._decorator;
var _ = g.ccclass;
var k =
    (g.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.normal_bullet;
            e.anim = null;
            e.currButtlePenetrateLayer = 0;
            e.animName = "bullet_1_1";
            e.isLoadedSkin = !1;
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e, i) {
            var o = this;
            t.prototype.initButtle.call(this, e, i);
            this.speed = this.skillParam.bulletSpeed;
            this.velocity.set(e).multiplyScalar(this.speed);
            if (!this.anim) {
                this.anim = this.node.children[0].getComponent(cc.Animation);
            }
            this.setAnimation();
            this.currButtlePenetrateLayer = 0;
            this.atk = this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL];
            if (!this.isLoadedSkin && 1 !== $roleContext.default.ins.currSkinInfo.gun) {
                this.isLoadedSkin = !0;
                var n = $configContext.default.instance.gunSkinConfigs.find(function (t) {
                    return t.id === $roleContext.default.ins.currSkinInfo.gun;
                });
                $assetsLoader.default.instance.loadRes(
                    $assetsMap.BundleNames.Game,
                    ["/anim/" + n.skin_res],
                    cc.AnimationClip,
                    null,
                    function (t, e) {
                        var i = e[0];
                        if (sp && cc.isValid(i)) {
                            o.animName = "" + n.skin_res;
                            $resUtil.ResUtil.assignWith(i, $gameContext.default.ins.buttleLayer.parent);
                            o.anim.addClip(i);
                            o.anim.play(o.animName);
                        }
                    }
                );
            }
        };
        e.prototype.onTrigger = function (t, e) {
            if (!this.isUse && e == $object.Trigger.enter) {
                var i = t.object;
                this.skillParam.bulletSuffFreezeAdd <= 0
                    ? i.sufferAtk({
                          id: this.skillId,
                          skillSpecialitys: this.skillSpecialitys,
                          atk: this.atk
                      })
                    : i.sufferAtk({
                          id: this.skillId,
                          skillSpecialitys: this.skillSpecialitys,
                          atk: this.atk,
                          bulletBuff: $baseBullet.BulletBuff.freeze_damage,
                          value: this.skillParam.bulletSuffFreezeAdd
                      });
                if (0 === this.currButtlePenetrateLayer) {
                    if (this.skillParam.isBulletBoom) {
                        this.createButtleBoom();
                    }
                    if (this.skillParam.isOpenbulletSplit) {
                        this.createSplitButtle(i);
                    }
                    if (this.skillParam.isFirebullet) {
                        var o = {
                            type: $enemyStatus.EnemyDebuffType.BURN,
                            timeLeft: this.skillParam.firebulletTime,
                            value: this.skillParam.firebulletAtk[$gameSkillInfo.Skill4Param.FINAL]
                        };
                        i.sufferDebuff(o);
                    }
                    if (
                        this.skillParam.bulletFreezeProbability > 0 &&
                        $seedUtil.default.probability(this.skillParam.bulletFreezeProbability)
                    ) {
                        o = {
                            type: $enemyStatus.EnemyDebuffType.FREEZE,
                            timeLeft: this.skillParam.bulletFreezeTime,
                            value: 0
                        };
                        i.sufferDebuff(o);
                    }
                }
                if (!(29 !== i.config.id && 30 !== i.config.id && 36 !== i.config.id)) {
                    this.currButtlePenetrateLayer = this.skillParam.bulletPenetrateLayer;
                }
                this.currButtlePenetrateLayer++;
                if (this.skillParam.bulletPenetrateLayer <= this.currButtlePenetrateLayer) {
                    this.removeSelf();
                }
            }
        };
        e.prototype.setAnimation = function (t) {
            if (void 0 === t) {
                t = "bullet_1_1";
            }
            this.skillParam.isFirebullet
                ? (t = "bullet_1_2")
                : this.skillParam.bulletSuffFreezeAdd > 0
                ? (t = "bullet_1_4")
                : "bullet_1_1" === t && (t = this.animName);
            this.anim.play(t);
        };
        e.prototype.createButtleBoom = function () {
            var t = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.boom_bullet);
            if (!t) {
                var e = $assetsLoader.default.instance.getRes(
                    $assetsMap.BundleNames.Game,
                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_2
                );
                t = $resUtil.ResUtil.instantiate(e, $gameContext.default.ins.lowBulletLayer.parent).getComponent(
                    $baseBullet.default
                );
            }
            t.setPosition(this.node.position.add(cc.v3(0, 30)));
            t.initButtle(null, this.skillId);
            t.insert($gameContext.default.ins.lowBulletLayer);
            t.setAnimation(null);
        };
        e.prototype.createSplitButtle = function (t) {
            var e = $gameContext.default.ins.getNearbyN2(t.node, 4);
            for (var i = 0; i < e.length; i++) {
                var o = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.split_bullet);
                if (!o) {
                    var n = $assetsLoader.default.instance.getRes(
                        $assetsMap.BundleNames.Game,
                        $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_3
                    );
                    (o = $resUtil.ResUtil.instantiate(n).getComponent($baseBullet.default)).skillSpecialitys =
                        $configContext.default.instance.basicSkillConfigMap.get(1).skill_tpye;
                }
                o.setPosition(this.node.position.clone());
                o.initButtle(e[i].node.position.sub(this.node.position).normalize(), this.skillId);
                o.targetEnemy = t;
                o.insert($gameContext.default.ins.buttleLayer);
            }
        };
        return __decorate([_], e);
    })($baseBullet.default));
exports.default = k;
