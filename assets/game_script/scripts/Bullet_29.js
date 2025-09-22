var o;
var $object = require("./Object");
var $shape = require("./Shape");
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $countDownUtil = require("./CountDownUtil");
var $seedUtil = require("./SeedUtil");
var $configContext = require("./ConfigContext");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $enemyStatus = require("./EnemyStatus");
var $baseBullet = require("./BaseBullet");
var _ = cc._decorator;
var k = _.ccclass;
var v = (_.property, cc.Vec3.ZERO);
var b = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.buttleType = $baseBullet.BulletType.drat;
        e._type = $shape.ShapeType.Sphere;
        e.currentSpeedStatus = 1;
        e.attackEnemys = new Set();
        e.timeLeft = 0;
        e.delayTime = 0;
        e.rebound = 0;
        e.r = 70;
        e.anim = null;
        e.animName = "bullet_29";
        e.isLoadedSkin = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.initButtle = function (e, i) {
        t.prototype.initButtle.call(this, e, i);
        this.attackEnemys.clear();
        this.currentSpeedStatus = 1;
        this.rebound = 0;
        this.atk = this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL];
        var o = this.skillParam.size;
        this.timeLeft = this.skillParam.time[$gameSkillInfo.Skill4Param.FINAL];
        this.delayTime = this.skillParam.delayRecover;
        this.setScale(cc.v3(o, o));
        this.r = 70 * o;
        this.changeSpeed(0);
        if (!this.anim) {
            this.anim = this.node.children[0].getComponent(cc.Animation);
        }
        this.setAnimation(null);
        this.loadSkin();
    };
    e.prototype.loadSkin = function () {
        var t = this;
        if (!this.isLoadedSkin && this.skillParam.burnTime > 0) {
            this.isLoadedSkin = !0;
            $assetsLoader.default.instance.loadRes(
                $assetsMap.BundleNames.Game,
                ["/anim/bullet_29_1"],
                cc.AnimationClip,
                null,
                function (e, i) {
                    var o = i[0];
                    if (sp && cc.isValid(o)) {
                        t.animName = "bullet_29_1";
                        $resUtil.ResUtil.assignWith(o, $gameContext.default.ins.buttleLayer.parent);
                        t.anim.addClip(o);
                        t.anim.play(t.animName);
                    }
                }
            );
        }
    };
    e.prototype.setAnimation = function () {
        this.anim.play(this.animName);
    };
    e.prototype.onTrigger = function (t, e) {
        if (!this.isUse) {
            if (e == $object.Trigger.enter) {
                var i = t.object;
                this.attackEnemys.add(i);
                if (this.skillParam.stunTime > 0) {
                    i.sufferDebuff({
                        type: $enemyStatus.EnemyDebuffType.STUN,
                        timeLeft: this.skillParam.stunTime,
                        value: 0
                    });
                }
                if (this.skillParam.burnTime > 0) {
                    i.sufferDebuff({
                        type: $enemyStatus.EnemyDebuffType.BURN,
                        timeLeft: this.skillParam.burnTime,
                        value: this.skillParam.burnAtk[$gameSkillInfo.Skill4Param.FINAL]
                    });
                }
                if (this.skillParam.enemySlowTime > 0) {
                    i.sufferDebuff({
                        type: $enemyStatus.EnemyDebuffType.SLOW,
                        timeLeft: this.skillParam.enemySlowTime,
                        value: this.skillParam.enemySlowAdd
                    });
                }
            } else {
                if (e == $object.Trigger.stay) {
                    i = t.object;
                    if (
                        $countDownUtil.CountDownUtil.time - i.getLastAtkTime(8) <=
                        this.skillParam.interval / $gameContext.default.ins.gameRatio
                    ) {
                        return;
                    }
                    i.setLastAtkTime(8, $countDownUtil.CountDownUtil.time);
                    i.sufferAtk({
                        id: this.skillId,
                        skillSpecialitys: this.skillSpecialitys,
                        atk: this.atk
                    });
                } else {
                    if (e == $object.Trigger.exit) {
                        i = t.object;
                        this.attackEnemys.delete(i);
                    }
                }
            }
        }
    };
    e.prototype.updateFrame = function (t) {
        if (!this.isUse) {
            this.timeLeft -= t;
            if (0 === this.currentSpeedStatus) {
                if (this.attackEnemys.size > 0) {
                    this.delayTime = this.skillParam.delayRecover;
                    this.changeSpeed(1);
                }
            } else {
                if (1 === this.currentSpeedStatus) {
                    if (this.attackEnemys.size <= 0) {
                        this.delayTime -= t;
                        if (this.delayTime <= 0) {
                            this.delayTime = this.skillParam.delayRecover;
                            this.changeSpeed(0);
                        }
                    }
                } else {
                    if (2 === this.currentSpeedStatus) {
                        return void (
                            this.timeLeft <= 0 && (this.attackEnemys.clear(), (this.isUse = !0), this.removeSelf())
                        );
                    }
                }
            }
            if (this.timeLeft <= 0) {
                this.currentSpeedStatus = 2;
                this.timeLeft = this.skillParam.stayTime;
                this.sendRelease();
            }
            this.move(t);
        }
    };
    e.prototype.changeSpeed = function (t) {
        if (this.currentSpeedStatus !== t) {
            this.currentSpeedStatus = t;
            0 === this.currentSpeedStatus
                ? (this.speed = this.skillParam.getNormalSpeed(this.rebound))
                : (this.speed = this.skillParam.getSlowSpeed());
            this.velocity.normalizeSelf().multiplyScalar(this.speed);
        }
    };
    e.prototype.move = function (t) {
        var e = this.getPosition();
        var i = this.velocity;
        v.x = e.x + i.x * t;
        v.y = e.y + i.y * t;
        v.z = e.z + i.z * t;
        v.x < -360 + this.r
            ? ((v.x = -360 + this.r + 1), (this.velocity.x = -this.velocity.x), this.rebound++)
            : v.x > 360 - this.r && ((v.x = 360 - this.r - 1), (this.velocity.x = -this.velocity.x), this.rebound++);
        v.y < -450 + this.r
            ? ((v.y = -450 + this.r + 1), (this.velocity.y = -this.velocity.y), this.rebound++)
            : v.y > cc.winSize.height / 2 - this.r &&
              ((v.y = cc.winSize.height / 2 - this.r - 1), (this.velocity.y = -this.velocity.y), this.rebound++);
        this.setPosition(v);
    };
    e.prototype.sendRelease = function () {
        if (!(this.skillParam.releaseCount <= 0)) {
            for (var t = 0; t < 2; t++) {
                var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.drat_release);
                if (!e) {
                    var i = $assetsLoader.default.instance.getRes(
                        $assetsMap.BundleNames.Game,
                        $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_30
                    );
                    (e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.lowBulletLayer.parent).getComponent(
                        $baseBullet.default
                    )).skillSpecialitys = $configContext.default.instance.basicSkillConfigMap.get(
                        this.skillId
                    ).skill_tpye;
                }
                var o = cc.Vec3.ZERO;
                o.x = 0 === t ? $seedUtil.default.randomFloat(-1, 0) : $seedUtil.default.randomFloat(0, 1);
                o.y = $seedUtil.default.randomFloat(-1, 1);
                o.normalizeSelf();
                e.setPosition(this.getPosition());
                e.initButtle(o, this.skillId);
                e.insert($gameContext.default.ins.lowBulletLayer);
            }
        }
    };
    return __decorate([k], e);
})($baseBullet.default);
exports.default = b;
