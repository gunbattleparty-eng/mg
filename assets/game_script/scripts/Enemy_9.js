var o;
var $seedUtil = require("./SeedUtil");
var $baseBullet = require("./BaseBullet");
var $baseEnemy = require("./BaseEnemy");
var $enemyStatus = require("./EnemyStatus");
var $healthBar = require("./HealthBar");
var d = cc._decorator;
var p = d.ccclass;
var f = d.property;
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.healthBar = null;
        e.leftTime = 2;
        e.initTime = 2;
        return e;
    }
    __extends(e, t);
    e.prototype.initEnemy = function (e, i, o) {
        if (void 0 === o) {
            o = 0;
        }
        t.prototype.initEnemy.call(this, e, i, o);
        this.initTime = e.value[0];
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
    e.prototype.clearStatus = function (e) {
        t.prototype.clearStatus.call(this, e);
        this.leftTime = this.initTime;
    };
    e.prototype.sufferDebuff = function (t) {
        if (this.statusManager.isDie) {
            return !1;
        }
        if (!t.id || (81 !== t.id && 227 !== t.id)) {
            if (!(this.statusManager.isDie || (this.isDoor && t.type === $enemyStatus.EnemyDebuffType.BACK))) {
                this.statusManager.addDebuff(t);
            }
        }
    };
    e.prototype.sufferAtk = function (e) {
        return (
            !this.statusManager.isDie &&
            !e.skillSpecialitys.includes($baseBullet.BulletSpeciality.floor) &&
            void t.prototype.sufferAtk.call(this, e)
        );
    };
    e.prototype.move = function (e) {
        this.leftTime -= e;
        this.getPosition().x <= -360 || this.getPosition().x >= 360
            ? (this.velocity.x = -this.velocity.x)
            : this.leftTime <= 0 &&
              ((this.leftTime = this.initTime),
              (this.velocity.x = $seedUtil.default.getRandomArbitrary(-1, 1) * this.speed));
        t.prototype.move.call(this, e);
    };
    __decorate([f($healthBar.default)], e.prototype, "healthBar", void 0);
    return __decorate([p], e);
})($baseEnemy.default);
exports.default = h;
