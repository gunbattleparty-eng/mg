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
            e.buttleType = $baseBullet.BulletType.guide_laser_boom;
            e.skillSpecialitys = [$baseBullet.BulletSpeciality.boom, $baseBullet.BulletSpeciality.energy];
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e, i) {
            t.prototype.initButtle.call(this, e, i);
            var o = this.skillParam.guideLaserBoomRange;
            this.setScale(cc.v3(o, o));
            this.atk = this.skillParam.guideLaserBoomAtk[$gameSkillInfo.Skill4Param.FINAL];
        };
        e.prototype.setAnimation = function () {
            var t = this;
            var e = this.node.children[0].getComponent(cc.Animation);
            $remoteAudio.default.instance.playEffectMusicRestrict("boom", 0.3);
            e.play("bullet_18");
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
                        id: 116,
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
