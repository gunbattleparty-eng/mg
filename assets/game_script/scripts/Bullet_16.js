var o;
var $object = require("./Object");
var $remoteAudio = require("./RemoteAudio");
var $gameSkillInfo = require("./GameSkillInfo");
var $baseBullet = require("./BaseBullet");
var u = cc._decorator;
var d = u.ccclass;
var p =
    (u.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.enemy_boom;
            e.skillSpecialitys = [$baseBullet.BulletSpeciality.boom, $baseBullet.BulletSpeciality.fire];
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e) {
            t.prototype.initButtle.call(this, e, 23);
            var i = this.skillParam.thermobaricEnemyBoomRange;
            this.setScale(cc.v3(i, i));
            this.atk = this.skillParam.thermobaricEnemyBoomAtk[$gameSkillInfo.Skill4Param.BASIC];
        };
        e.prototype.setAnimation = function () {
            var t = this;
            var e = this.node.children[0].getComponent(cc.Animation);
            $remoteAudio.default.instance.playEffectMusicRestrict("boom", 0.3);
            e.play("bullet_2");
            e.once(
                cc.Animation.EventType.FINISHED,
                function () {
                    t.removeSelf();
                },
                this
            );
        };
        e.prototype.onTrigger = function (t, e) {
            if (!this.isUse) {
                if (e == $object.Trigger.enter) {
                    t.object.sufferAtk({
                        skillSpecialitys: this.skillSpecialitys,
                        atk: this.atk
                    });
                }
            }
        };
        e.prototype.updateFrame = function () {};
        return __decorate([d], e);
    })($baseBullet.default));
exports.default = p;
