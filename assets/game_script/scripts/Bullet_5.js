var o;
var $object = require("./Object");
var $remoteAudio = require("./RemoteAudio");
var $gameSkillInfo = require("./GameSkillInfo");
var $enemyStatus = require("./EnemyStatus");
var $baseBullet = require("./BaseBullet");
var d = cc._decorator;
var p = d.ccclass;
var f =
    (d.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.thermobaric_boom;
            e.skillSpecialitys = [$baseBullet.BulletSpeciality.boom, $baseBullet.BulletSpeciality.fire];
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e, i) {
            t.prototype.initButtle.call(this, e, i);
            var o = this.skillParam.thermobaricBoomRange;
            this.setScale(cc.v3(o, o));
            this.atk = this.skillParam.thermobaricBoomAtk[$gameSkillInfo.Skill4Param.FINAL];
        };
        e.prototype.setAnimation = function () {
            var t = this;
            var e = this.node.children[0].getComponent(cc.Animation);
            $remoteAudio.default.instance.playEffectMusicRestrict("boom", 0.3);
            e.play("buttle_5");
            e.once(
                cc.Animation.EventType.FINISHED,
                function () {
                    t.removeSelf();
                },
                this
            );
        };
        e.prototype.onTrigger = function (t, e) {
            if (!this.isUse && e == $object.Trigger.enter) {
                var i = t.object;
                i.sufferAtk({
                    id: this.skillId,
                    skillSpecialitys: this.skillSpecialitys,
                    atk: this.atk
                });
                if (0 !== this.skillParam.thermobaricFireTime) {
                    var o = {
                        type: $enemyStatus.EnemyDebuffType.BURN,
                        timeLeft: this.skillParam.thermobaricFireTime,
                        value: this.skillParam.thermobaricFireAtk[$gameSkillInfo.Skill4Param.FINAL]
                    };
                    i.sufferDebuff(o);
                }
                if (this.skillParam.thermobaricKnockBack[$gameSkillInfo.Skill4Param.FINAL] > 0) {
                    var n = {
                        type: $enemyStatus.EnemyDebuffType.BACK,
                        timeLeft: -1,
                        value: this.skillParam.thermobaricKnockBack[$gameSkillInfo.Skill4Param.FINAL]
                    };
                    i.sufferDebuff(n);
                }
            }
        };
        e.prototype.updateFrame = function () {};
        return __decorate([p], e);
    })($baseBullet.default));
exports.default = f;
