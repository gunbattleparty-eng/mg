var o;
var $globalParam = require("./GlobalParam");
var $baseBullet = require("./BaseBullet");
var $enemyStatus = require("./EnemyStatus");
var $enemy_2 = require("./Enemy_2");
var $healthBar = require("./HealthBar");
var d = cc._decorator;
var p = d.ccclass;
var f = d.property;
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.healthBar = null;
        e.hpStatus = 0;
        e.addTime = 0;
        e.hpLeft = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.initEnemy = function (e, i, o) {
        if (void 0 === o) {
            o = 0;
        }
        t.prototype.initEnemy.call(this, e, i, o);
        this.isPulseLaserKill = !1;
        this.statusManager.specialityAtkAdd.clear();
        this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.fire, this.config.value[2]);
        this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.thunder, this.config.value[3]);
        this.hpLeft = Math.ceil(this.statusManager.initHp * this.config.value[1]);
        if (this.healthBar) {
            this.healthBar.init(this.statusManager.hp, e.hp_num);
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
    e.prototype.sufferAtk = function (e) {
        return (
            !this.isAnim &&
            (0 === this.hpStatus &&
                ((this.hpStatus = 1),
                this.startDebuffAnim($enemyStatus.EnemyDebuffType.RECOVER),
                this.schedule(this.recoverHp, 1)),
            !!t.prototype.sufferAtk.call(this, e) && (100 === e.id && (this.isPulseLaserKill = !0), !0))
        );
    };
    e.prototype.recoverHp = function () {
        if (!$globalParam.default.isGamePuase) {
            var t = this.statusManager.initHp - this.statusManager.hp;
            if (0 !== t) {
                t = Math.min(t, this.hpLeft);
                this.hpLeft -= t;
                this.addTime--;
                if (this.addTime <= 0 || this.hpLeft <= 0) {
                    this.hpStatus = 2;
                }
                if (2 === this.hpStatus) {
                    this.endDebuffAnim($enemyStatus.EnemyDebuffType.RECOVER);
                    this.unschedule(this.recoverHp);
                }
            }
        }
    };
    __decorate([f($healthBar.default)], e.prototype, "healthBar", void 0);
    return __decorate([p], e);
})($enemy_2.default);
exports.default = h;
