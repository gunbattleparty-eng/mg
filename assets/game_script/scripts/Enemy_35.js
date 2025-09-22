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
        e.immunity = [
            $enemyStatus.EnemyDebuffType.BACK,
            $enemyStatus.EnemyDebuffType.FREEZE,
            $enemyStatus.EnemyDebuffType.PARALYSIS,
            $enemyStatus.EnemyDebuffType.SLOW,
            ,
            $enemyStatus.EnemyDebuffType.STUN
        ];
        return e;
    }
    __extends(e, t);
    e.prototype.initEnemy = function (e, i, o) {
        if (void 0 === o) {
            o = 0;
        }
        t.prototype.initEnemy.call(this, e, i, o);
        this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.thunder, this.config.value[0]);
        this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.energy, this.config.value[1]);
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
    e.prototype.sufferDebuff = function (e) {
        if (!this.immunity.includes(e.type)) {
            t.prototype.sufferDebuff.call(this, e);
        }
    };
    e.prototype.addAdsorb = function () {};
    e.prototype.removeAdsorb = function () {};
    __decorate([p($healthBar.default)], e.prototype, "healthBar", void 0);
    return __decorate([d], e);
})($baseEnemy.default);
exports.default = f;
