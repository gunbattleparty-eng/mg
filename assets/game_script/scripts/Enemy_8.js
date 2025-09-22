var o;
var $baseEnemy = require("./BaseEnemy");
var $healthBar = require("./HealthBar");
var l = cc._decorator;
var c = l.ccclass;
var u = l.property;
var d = new cc.Vec3();
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
        this.healthBar.init(this.statusManager.hp, e.hp_num);
    };
    e.prototype.sufferAttack = function (e, i) {
        if (this.statusManager.isDie) {
            return !1;
        }
        var o = t.prototype.sufferAttack.call(this, e, i);
        this.healthBar.render(this.statusManager.hp);
        return o;
    };
    e.prototype.getAnimPos = function () {
        d.y = this.skin.node.height / 2;
        return this.node.position.add(d);
    };
    __decorate([u($healthBar.default)], e.prototype, "healthBar", void 0);
    return __decorate([c], e);
})($baseEnemy.default);
exports.default = p;
