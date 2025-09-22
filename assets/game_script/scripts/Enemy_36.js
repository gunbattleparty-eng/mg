var o;
var $baseBullet = require("./BaseBullet");
var $baseEnemy = require("./BaseEnemy");
var $healthBar = require("./HealthBar");
var c = cc._decorator;
var u = c.ccclass;
var d = c.property;
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.healthBar = null;
        return e;
    }
    __extends(e, t);
    e.prototype.initEnemy = function (e, i, o) {
        if (void 0 === o) {
            o = 0;
        }
        t.prototype.initEnemy.call(this, e, i, o);
        this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.physics, this.config.value[0]);
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
    __decorate([d($healthBar.default)], e.prototype, "healthBar", void 0);
    return __decorate([u], e);
})($baseEnemy.default);
exports.default = p;
