var o;
var $object = require("./Object");
var $remoteAudio = require("./RemoteAudio");
var $baseBullet = require("./BaseBullet");
var c = cc._decorator;
var u = c.ccclass;
var d =
    (c.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.oil_burn_area_boom;
            e.attackedEnemy = new Set();
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e, i) {
            t.prototype.initButtle.call(this, e, i);
            var o = this.skillParam.oilBurnAreaBoomRange;
            this.setScale(cc.v3(o, o));
            this.atk = this.skillParam.oilBurnAreaBoomAtk;
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
            if (!this.isUse && (e == $object.Trigger.enter || e == $object.Trigger.stay)) {
                var i = t.object;
                if (this.attackedEnemy.has(i)) {
                    return;
                }
                this.attackedEnemy.add(i);
                i.sufferAtk({
                    id: this.skillId,
                    skillSpecialitys: this.skillSpecialitys,
                    atk: this.atk
                });
            }
        };
        e.prototype.updateFrame = function () {};
        return __decorate([u], e);
    })($baseBullet.default));
exports.default = d;
