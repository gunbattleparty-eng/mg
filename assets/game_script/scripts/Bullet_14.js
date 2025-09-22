var o;
var $object = require("./Object");
var $remoteAudio = require("./RemoteAudio");
var $countDownUtil = require("./CountDownUtil");
var $globalParam = require("./GlobalParam");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $enemyStatus = require("./EnemyStatus");
var $baseBullet = require("./BaseBullet");
var h = cc._decorator;
var m = h.ccclass;
var y =
    (h.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.pulse_laser;
            e.leftTime = 0;
            e.attackAtks = new Set();
            e.isSweep = !1;
            e.step = 2;
            e.currStep = 1;
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e, i) {
            t.prototype.initButtle.call(this, e, i);
            $remoteAudio.default.instance.playLoopEffect("laser");
            this.attackAtks.clear();
            this.currStep = 1;
            this.atk = this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL];
            this.step = this.isSweep ? this.skillParam.pulseLaserSweepCount : 1;
            this.leftTime = this.skillParam.pulseLaserTime * this.step;
            this.speed = (135 * this.step) / this.leftTime;
            this.setAngle(30);
            var o = this.isSweep ? 1 : this.skillParam.pulseLaserWidthAdd;
            this.setScale(cc.v3(1, o));
        };
        e.prototype.onTrigger = function (t, e) {
            var i = t.object;
            if (e === $object.Trigger.enter) {
                if (this.attackAtks.has(i)) {
                    return;
                }
                this.attackAtks.add(i);
                if (this.skillParam.pulseLaserSlowTime > 0) {
                    var o = {
                        type: $enemyStatus.EnemyDebuffType.SLOW,
                        timeLeft: this.skillParam.pulseLaserSlowTime,
                        value: this.skillParam.pulseLaserSlowAdd
                    };
                    i.sufferDebuff(o);
                }
                if (!this.isSweep) {
                    if (this.skillParam.pulseLaserBack > 0) {
                        var n = {
                            type: $enemyStatus.EnemyDebuffType.BACK,
                            timeLeft: -1,
                            value: this.skillParam.pulseLaserBack
                        };
                        i.sufferDebuff(n);
                    }
                    for (var s = 0; s < this.skillParam.pulseLaserEnemyAtkAddParam.length; s++) {
                        var a = this.skillParam.pulseLaserEnemyAtkAddParam;
                        var c = {
                            type: $enemyStatus.EnemyDebuffType.ALL_ATK_ADD,
                            timeLeft: a[s][0],
                            value: a[s][1]
                        };
                        i.sufferDebuff(c);
                    }
                }
            } else {
                if (e === $object.Trigger.stay) {
                    if (
                        $countDownUtil.CountDownUtil.time - i.getLastAtkTime(1) <=
                        this.skillParam.pulseLaserAtkInterval[$gameSkillInfo.Skill4Param.FINAL] /
                            $gameContext.default.ins.gameRatio
                    ) {
                        return;
                    }
                    i.setLastAtkTime(1, $countDownUtil.CountDownUtil.time);
                    this.skillParam.pulseLaserEnemySplit
                        ? i.sufferAtk({
                              id: this.skillId,
                              skillSpecialitys: this.skillSpecialitys,
                              atk: this.atk,
                              bulletBuff: $baseBullet.BulletBuff.not_split
                          })
                        : i.sufferAtk({
                              id: this.skillId,
                              skillSpecialitys: this.skillSpecialitys,
                              atk: this.atk
                          });
                }
            }
        };
        e.prototype.updateFrame = function (t) {
            if (!$globalParam.default.isGamePuase) {
                this.leftTime -= t;
                this.isSweep
                    ? this.currStep <= this.step &&
                      (1 === this.currStep
                          ? (this.setAngle(this.getAngle() + this.speed * t),
                            this.getAngle() >= 165 && (1 === this.step ? this.removeSelf() : (this.currStep = 2)))
                          : 2 === this.currStep &&
                            (this.setAngle(this.getAngle() - this.speed * t),
                            this.getAngle() <= 30 && this.removeSelf()))
                    : this.leftTime <= 0 && ($remoteAudio.default.instance.stopLoopEffect("laser"), this.removeSelf());
            }
        };
        return __decorate([m], e);
    })($baseBullet.default));
exports.default = y;
