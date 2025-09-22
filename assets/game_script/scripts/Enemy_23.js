var o;
var $baseBullet = require("./BaseBullet");
var $baseEnemy = require("./BaseEnemy");
var $enemyStatus = require("./EnemyStatus");
var $healthBar = require("./HealthBar");
var u = cc._decorator;
var d = u.ccclass;
var p = u.property;
var f = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.healthBar = null;
        e.atkCount = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.initEnemy = function (e, i, o) {
        if (void 0 === o) {
            o = 0;
        }
        t.prototype.initEnemy.call(this, e, i, o);
        this.atkCount = 0;
        this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.thunder, this.config.value[0]);
        this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.ice, this.config.value[1]);
        if (this.healthBar) {
            this.healthBar.init(this.statusManager.hp, e.hp_num);
        }
    };
    e.prototype.sufferDebuff = function (e) {
        if (
            e.type !== $enemyStatus.EnemyDebuffType.BURN &&
            e.type !== $enemyStatus.EnemyDebuffType.STUN &&
            e.type !== $enemyStatus.EnemyDebuffType.BACK
        ) {
            t.prototype.sufferDebuff.call(this, e);
        }
    };
    e.prototype.sufferAttack = function (e, i) {
        if (this.statusManager.isDie) {
            return !1;
        }
        var o = t.prototype.sufferAttack.call(this, e, i);
        if (this.healthBar) {
            this.healthBar.render(this.statusManager.hp);
        }
        return o;
    };
    e.prototype.attack = function () {
        var t = this;
        if (this.isCanAtk) {
            this.isAttacking = !0;
            this.skin.playAnimation("hit", 1);
            this.scheduleOnce(this.attackAnim, 0.066);
            this.skin.once(
                dragonBones.EventObject.COMPLETE,
                function () {
                    t.atkCount++;
                    t.atkCount >= t.config.value[2]
                        ? ((t.atkCount = 0), (t.isAttacking = !1), t.skin.playAnimation("stand", 0))
                        : t.attack();
                },
                this
            );
        }
    };
    __decorate([p($healthBar.default)], e.prototype, "healthBar", void 0);
    return __decorate([d], e);
})($baseEnemy.default);
exports.default = f;
