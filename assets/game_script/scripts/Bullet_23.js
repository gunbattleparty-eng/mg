var o;
var $object = require("./Object");
var $gameSkillInfo = require("./GameSkillInfo");
var $enemyStatus = require("./EnemyStatus");
var $baseBullet = require("./BaseBullet");
var u = cc._decorator;
var d = u.ccclass;
var p =
    (u.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.wind_blade_boom;
            e.skillSpecialitys = [$baseBullet.BulletSpeciality.boom, $baseBullet.BulletSpeciality.wind];
            e.atkedEnemy = new Set();
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e, i) {
            t.prototype.initButtle.call(this, e, i);
            this.setScale(cc.v3(1, 1));
            this.atk = this.skillParam.windBladeWaveAtk[$gameSkillInfo.Skill4Param.FINAL];
            this.atkedEnemy.clear();
        };
        e.prototype.setAnimation = function () {
            var t = this;
            var e = this.node.children[0].getComponent(cc.Animation);
            e.play("bullet_23");
            e.once(
                cc.Animation.EventType.FINISHED,
                function () {
                    t.removeSelf();
                },
                this
            );
        };
        e.prototype.onTrigger = function (t, e) {
            if (!this.isUse && (e == $object.Trigger.enter || e == $object.Trigger.stay)) {
                var i = t.object;
                if (this.atkedEnemy.has(i)) {
                    return;
                }
                this.atkedEnemy.add(i);
                i.sufferAtk({
                    id: this.skillId,
                    skillSpecialitys: this.skillSpecialitys,
                    atk: this.atk
                });
                if (this.skillParam.windBladeWaveFreezeTime > 0) {
                    i.sufferDebuff({
                        id: this.skillId,
                        type: $enemyStatus.EnemyDebuffType.FREEZE,
                        timeLeft: this.skillParam.windBladeWaveFreezeTime,
                        value: 0
                    });
                }
            }
        };
        e.prototype.updateFrame = function () {};
        return __decorate([d], e);
    })($baseBullet.default));
exports.default = p;
