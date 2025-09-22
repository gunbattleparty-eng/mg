var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $remoteAudio = require("./RemoteAudio");
var $configContext = require("./ConfigContext");
var $globalParam = require("./GlobalParam");
var $localEventName = require("./LocalEventName");
var $baseBullet = require("./BaseBullet");
var $bullet_17 = require("./Bullet_17");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $baseGun = require("./BaseGun");
var _ = cc.Vec3.ZERO;
var k = (function (t) {
    function e(e) {
        var i = t.call(this, e) || this;
        i.status = 0;
        i.bullet = null;
        i.currTargetEnemys = [];
        i.targetPos = cc.Vec3.ZERO;
        i.atkLeft = 0;
        i.atkEndLeft = 0;
        i.skillId = 116;
        i.isAtkMaser = !1;
        i.skillParam = $gameContext.default.ins.skillInfo.getSkillById(i.skillId);
        return i;
    }
    __extends(e, t);
    e.prototype.initBullet = function () {
        var t = $assetsLoader.default.instance.getRes(
            $assetsMap.BundleNames.Game,
            $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_17
        );
        this.bullet = $resUtil.ResUtil.instantiate(t, $gameContext.default.ins.buttleLayer.parent).getComponent(
            $bullet_17.default
        );
        this.bullet.skillSpecialitys = $configContext.default.instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
        this.bullet.node.active = !1;
    };
    e.prototype.updateF = function (e) {
        t.prototype.updateF.call(this, e);
        if (!$globalParam.default.isGamePuase) {
            0 === this.status
                ? ((this.timeLeft -= e),
                  this.timeLeft <= 0
                      ? ((this.timeLeft = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL]),
                        $eventManager.default.send($localEventName.default.RENDER_SKILL_CD_INFO, this.skillId, 0, -1),
                        this.startGun()
                            ? ((this.timeLeft = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL]),
                              (this.atkEndLeft = this.skillParam.guideLaserTime),
                              (this.status = 2),
                              $eventManager.default.send(
                                  $localEventName.default.RENDER_SKILL_CD_INFO,
                                  this.skillId,
                                  1,
                                  -1
                              ))
                            : (this.timeLeft = 0))
                      : $eventManager.default.send(
                            $localEventName.default.RENDER_SKILL_CD_INFO,
                            this.skillId,
                            this.timeLeft / this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL],
                            -1
                        ))
                : 1 === this.status
                ? this.finding(e)
                : 2 === this.status && this.attacking(e);
        }
    };
    e.prototype.finding = function (t) {
        this.currTargetEnemys[0].node.position.sub(this.targetPos).normalize(_);
        this.bullet.velocity.set(_).multiplyScalar(this.skillParam.guideLaserSpeed);
        this.targetPos.x += this.bullet.velocity.x * t;
        this.targetPos.y += this.bullet.velocity.y * t;
        this.targetPos.sub(this.currTargetEnemys[0].getPosition()).magSqr() <= 900
            ? (this.bullet.render(
                  this.currTargetEnemys.map(function (t) {
                      return t.getPosition();
                  }),
                  this.currTargetEnemys
              ),
              (this.status = 2))
            : this.bullet.render([this.targetPos], null);
    };
    e.prototype.attacking = function (t) {
        this.atkEndLeft -= t;
        if (this.atkEndLeft <= 0) {
            this.endSend(!0);
        } else {
            this.bullet.render(
                this.currTargetEnemys.map(function (t) {
                    return t.getPosition();
                }),
                this.currTargetEnemys
            );
            this.atkLeft -= t;
            if (this.atkLeft <= 0) {
                this.atkLeft = this.skillParam.guideLaserAtkInterval;
                for (var e = 0; e < this.currTargetEnemys.length; e++) {
                    this.currTargetEnemys[e].sufferAtk({
                        id: this.skillId,
                        skillSpecialitys: this.bullet.skillSpecialitys,
                        atk:
                            0 === e
                                ? this.skillParam.guideLaserMaserAtk[$gameSkillInfo.Skill4Param.FINAL]
                                : this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]
                    }) && this.skillParam.addGuideLaserAtkAdd();
                    0 === e &&
                        this.isAtkMaser &&
                        ((this.isAtkMaser = !1),
                        this.skillParam.guideLaserBoomAtk[$gameSkillInfo.Skill4Param.FINAL] > 0 &&
                            this.createButtleBoom(),
                        this.skillParam.guideLaserIsThunder && this.createTunder(this.currTargetEnemys[e]));
                }
            }
        }
    };
    e.prototype.startGun = function () {
        var t = $gameContext.default.ins.getRandomEnemys(
            this.pointNode,
            this.skillParam.guideLaserRefractCount,
            this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL]
        );
        return !(
            t.length <= 0 ||
            ((this.atkLeft = this.skillParam.guideLaserAtkInterval),
            (this.currTargetEnemys.length = 0),
            (this.currTargetEnemys = t),
            this.bullet.initButtle(null, this.skillId),
            this.bullet.insert($gameContext.default.ins.buttleLayer),
            this.bullet.setPosition(this.pointNode.position.clone()),
            (this.bullet.node.active = !0),
            this.atkMaserAndLock(),
            (this.status = 2),
            0)
        );
    };
    e.prototype.enemyDie = function (t) {
        var e;
        var i = this.currTargetEnemys.indexOf(t);
        if (-1 !== i) {
            0 === i
                ? ((this.targetPos = t.getPosition().clone()),
                  (e = $gameContext.default.ins.getRandomEnemys(
                      this.pointNode,
                      this.skillParam.guideLaserRefractCount,
                      99999
                  )).length <= 0
                      ? this.endSend(!0)
                      : (this.endSend(), (this.currTargetEnemys = e), this.atkMaserAndLock(), (this.status = 1)))
                : (e = $gameContext.default.ins.getRandomEnemys(
                      this.currTargetEnemys[i - 1].node,
                      1,
                      this.skillParam.guideLaserRefractRange
                  )).length > 0
                ? ((this.currTargetEnemys[i] = e[0]), this.currTargetEnemys[i].addDieCallback(this.enemyDie, this))
                : this.currTargetEnemys.slice(i, 1);
        }
    };
    e.prototype.atkMaserAndLock = function () {
        this.isAtkMaser = !0;
        for (var t = 0; t < this.currTargetEnemys.length; t++) {
            this.currTargetEnemys[t].addDieCallback(this.enemyDie, this);
        }
    };
    e.prototype.createTunder = function (t) {
        var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.thunder_bullet);
        if (!e) {
            var i = $assetsLoader.default.instance.getRes(
                $assetsMap.BundleNames.Game,
                $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_9
            );
            (e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.buttleLayer.parent).getComponent(
                $baseBullet.default
            )).skillSpecialitys = $configContext.default.instance.basicSkillConfigMap.get(61).skill_tpye;
        }
        e.setPosition(t.node.position.clone());
        $remoteAudio.default.instance.playEffectMusic("Lightningstrike");
        e.targetEnemy = t;
        e.targetPos = t.getPosition().clone();
        e.isExtra = !0;
        e.initButtle(null, 61);
        e.initParam(this.skillParam.guideLaserThunderAtk[$gameSkillInfo.Skill4Param.FINAL]);
        e.insert($gameContext.default.ins.buttleLayer);
        e.setAnimation("");
    };
    e.prototype.createButtleBoom = function () {
        var t = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.guide_laser_boom);
        if (!t) {
            var e = $assetsLoader.default.instance.getRes(
                $assetsMap.BundleNames.Game,
                $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_18
            );
            t = $resUtil.ResUtil.instantiate(e, $gameContext.default.ins.lowBulletLayer.parent).getComponent(
                $baseBullet.default
            );
        }
        t.setPosition(this.currTargetEnemys[0].node.position.add(cc.v3(0, 30)));
        t.initButtle(null, this.skillId);
        t.insert($gameContext.default.ins.lowBulletLayer);
        t.setAnimation(null);
    };
    e.prototype.endSend = function (t) {
        var e = this;
        if (void 0 === t) {
            t = !1;
        }
        if (t) {
            this.bullet.removeSelf(!1);
            this.bullet.node.parent = null;
            this.bullet.node.active = !1;
            this.atkEndLeft = this.skillParam.guideLaserTime;
            this.status = 0;
            this.timeLeft = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL];
        }
        this.currTargetEnemys.forEach(function (t) {
            if (t) {
                t.removeDieCallback(e);
            }
        });
        this.currTargetEnemys.length = 0;
    };
    return e;
})($baseGun.default);
exports.default = k;
