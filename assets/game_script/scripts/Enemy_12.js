var o;
var $enemy_11 = require("./Enemy_11");
var $healthBar = require("./HealthBar");
var l = cc._decorator;
var c = l.ccclass;
var u = l.property;
var d = (function (t) {
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
    __decorate([u($healthBar.default)], e.prototype, "healthBar", void 0);
    return __decorate([c], e);
})($enemy_11.default);
exports.default = d;
