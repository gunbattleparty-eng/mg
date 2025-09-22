var o;
var $object = require("./Object");
var $remoteAudio = require("./RemoteAudio");
var $gameContext = require("./GameContext");
var $baseBullet = require("./BaseBullet");
var u = cc._decorator;
var d = u.ccclass;
var p =
    (u.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.s_bullet_2_1;
            return e;
        }
        __extends(e, t);
        e.prototype.initSBullet = function () {
            this.initButtle(null, 23);
            this.atk = $gameContext.default.ins.skillInfo.skinAtk;
            var t = this.skillParam.thermobaricBoomRange;
            this.setScale(cc.v3(t, t));
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
            if (!this.isUse) {
                if (e == $object.Trigger.enter) {
                    t.object.sufferAtk({
                        skillSpecialitys: [],
                        atk: this.atk
                    });
                }
            }
        };
        e.prototype.updateFrame = function () {};
        return __decorate([d], e);
    })($baseBullet.default));
exports.default = p;
