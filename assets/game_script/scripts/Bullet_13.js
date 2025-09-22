var o;
var $object = require("./Object");
var $countDownUtil = require("./CountDownUtil");
var $seedUtil = require("./SeedUtil");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $enemyStatus = require("./EnemyStatus");
var $baseBullet = require("./BaseBullet");
var f = cc._decorator;
var h = f.ccclass;
var m =
    (f.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.car;
            e.attackAtks = new Set();
            e.isGem = !1;
            e.anim = null;
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e, i) {
            t.prototype.initButtle.call(this, e, i);
            this.setAngle(0);
            this.attackAtks.clear();
            var o = this.isGem ? $gameSkillInfo.Skill4Param.BASIC : $gameSkillInfo.Skill4Param.FINAL;
            this.atk = this.skillParam.skillAtk[o];
            this.speed = this.skillParam.carSpeed[o];
            this.velocity.set(e).multiplyScalar(this.speed);
            if (!this.anim) {
                this.anim = this.node.children[0].getComponent(cc.Animation);
            }
            this.setAnimation("");
        };
        e.prototype.setAnimation = function (t) {
            t = "bullet_13";
            this.isGem
                ? (t = "bullet_13")
                : 1 === this.skillParam.carSkin
                ? (t = "bullet_13_1")
                : 2 === this.skillParam.carSkin
                ? (t = "bullet_13_2")
                : 3 === this.skillParam.carSkin && (t = "bullet_13_3");
            this.anim.play(t);
        };
        e.prototype.onTrigger = function (t, e) {
            var i = t.object;
            if (e === $object.Trigger.enter) {
                if (this.attackAtks.has(i)) {
                    return;
                }
                this.attackAtks.add(i);
                if (this.isGem) {
                    return;
                }
                if (this.skillParam.carBack[$gameSkillInfo.Skill4Param.FINAL] > 0) {
                    var o = {
                        id: 81,
                        type: $enemyStatus.EnemyDebuffType.BACK,
                        timeLeft: -1,
                        value: this.skillParam.carBack[$gameSkillInfo.Skill4Param.FINAL]
                    };
                    i.sufferDebuff(o);
                }
                if (this.skillParam.carBurnTime > 0) {
                    var n = {
                        id: this.skillId,
                        type: $enemyStatus.EnemyDebuffType.BURN,
                        timeLeft: this.skillParam.carBurnTime,
                        value: this.skillParam.carBurnAtk[$gameSkillInfo.Skill4Param.FINAL]
                    };
                    if (this.skillParam.carBurnAdd > 0) {
                        n.value += Math.ceil(i.config.HP * this.skillParam.carBurnAdd);
                    }
                    i.sufferDebuff(n);
                }
                if (this.skillParam.carSlowTime > 0) {
                    n = {
                        id: this.skillId,
                        type: $enemyStatus.EnemyDebuffType.SLOW,
                        timeLeft: this.skillParam.carSlowTime,
                        value: this.skillParam.carSlowAdd
                    };
                    i.sufferDebuff(n);
                }
                for (var s = 0; s < this.skillParam.carStunParam.length; s++) {
                    var f = this.skillParam.carStunParam;
                    if ($seedUtil.default.probability(100 * f[s][0])) {
                        var h = {
                            id: this.skillId,
                            type: $enemyStatus.EnemyDebuffType.STUN,
                            timeLeft: f[s][1],
                            value: 0
                        };
                        i.sufferDebuff(h);
                    }
                }
                for (s = 0; s < this.skillParam.carEnemyAtkAddParam.length; s++) {
                    f = this.skillParam.carEnemyAtkAddParam;
                    h = {
                        id: this.skillId,
                        type: $enemyStatus.EnemyDebuffType.ALL_ATK_ADD,
                        timeLeft: f[s][0],
                        value: f[s][1]
                    };
                    i.sufferDebuff(h);
                }
            } else {
                if (e === $object.Trigger.stay) {
                    if (
                        $countDownUtil.CountDownUtil.time - i.getLastAtkTime(0) <=
                        this.skillParam.carAtkInterval / $gameContext.default.ins.gameRatio
                    ) {
                        return;
                    }
                    i.setLastAtkTime(0, $countDownUtil.CountDownUtil.time);
                    i.sufferAtk({
                        id: this.isGem ? -2 : this.skillId,
                        skillSpecialitys: this.skillSpecialitys,
                        bulletBuff: $baseBullet.BulletBuff.freeze_damage,
                        value: this.skillParam.carSuffFreezeAdd,
                        atk: this.atk
                    });
                }
            }
        };
        return __decorate([h], e);
    })($baseBullet.default));
exports.default = m;
