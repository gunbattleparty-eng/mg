var o;
var $eventManager = require("./EventManager");
var $localEventName = require("./LocalEventName");
var $baseBullet = require("./BaseBullet");
var $gameContext = require("./GameContext");
var $baseEnemy = require("./BaseEnemy");
var d = cc._decorator;
var p = d.ccclass;
var f =
    (d.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.isAnim = !1;
            e.isPulseLaserKill = !1;
            return e;
        }
        __extends(e, t);
        e.prototype.initEnemy = function (e, i, o) {
            if (void 0 === o) {
                o = 0;
            }
            t.prototype.initEnemy.call(this, e, i, o);
            this.isPulseLaserKill = !1;
            this.isAnim = !1;
            this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.fire, this.config.value[0]);
            this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.thunder, this.config.value[1]);
        };
        e.prototype.sufferAtk = function (e) {
            return (
                !this.isAnim &&
                !!t.prototype.sufferAtk.call(this, e) &&
                (e.bulletBuff && e.bulletBuff === $baseBullet.BulletBuff.not_split && (this.isPulseLaserKill = !0), !0)
            );
        };
        e.prototype.dieAnim = function () {
            $gameContext.default.ins.removeEnemy(this);
            this.isAnim = !0;
            this.statusManager.isDie = !0;
            return this.isPulseLaserKill ? t.prototype.dieAnim.call(this) : (this.splitAnim(), !1);
        };
        e.prototype.splitAnim = function () {
            var t = this;
            this.debuffLayer.active = !1;
            this.skin.off(dragonBones.EventObject.COMPLETE);
            this.skin.timeScale = $gameContext.default.ins.gameRatio;
            this.skin.playAnimation("fenlie", 1);
            this.skin.once(
                dragonBones.EventObject.COMPLETE,
                function () {
                    if (t.getPosition().x - 40 >= -360) {
                        $eventManager.default.send(
                            $localEventName.default.CREATE_ENEMY,
                            3,
                            cc.v3(t.getPosition().x - 25, t.getPosition().y),
                            t.Avoid_injury,
                            t.lot
                        );
                    }
                    if (t.getPosition().x + 40 < 360) {
                        $eventManager.default.send(
                            $localEventName.default.CREATE_ENEMY,
                            3,
                            cc.v3(t.getPosition().x + 25, t.getPosition().y),
                            t.Avoid_injury,
                            t.lot
                        );
                    }
                    t.isAnim = !1;
                    t.unscheduleAllCallbacks();
                    if (!(2 !== t.config.monster_type && 3 !== t.config.monster_type)) {
                        t.bossChooseSKill();
                    }
                    t.removeSelf();
                },
                this
            );
        };
        return __decorate([p], e);
    })($baseEnemy.default));
exports.default = f;
