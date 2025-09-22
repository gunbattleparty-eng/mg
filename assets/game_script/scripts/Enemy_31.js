var o;
var $baseBullet = require("./BaseBullet");
var $gameContext = require("./GameContext");
var $baseEnemy = require("./BaseEnemy");
var $healthBar = require("./HealthBar");
var u = cc._decorator;
var d = u.ccclass;
var p = u.property;
var f = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.healthBar = null;
        e.bulletPrefab = null;
        return e;
    }
    __extends(e, t);
    e.prototype.initEnemy = function (e, i, o) {
        if (void 0 === o) {
            o = 0;
        }
        t.prototype.initEnemy.call(this, e, i, o);
        this.statusManager.clear();
        this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.ice, this.config.value[0]);
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
    e.prototype.dieAnim = function () {
        this.createSelfBoom();
        return t.prototype.dieAnim.call(this);
    };
    e.prototype.createSelfBoom = function () {
        var t = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.e_bullet_31);
        if (!t) {
            t = cc.instantiate(this.bulletPrefab).getComponent($baseBullet.default);
        }
        t.value = this.config.value;
        t.setPosition(this.getPosition());
        t.initButtle(null, null);
        t.insert($gameContext.default.ins.lowBulletLayer);
        t.setAnimation(null);
    };
    __decorate([p($healthBar.default)], e.prototype, "healthBar", void 0);
    __decorate([p(cc.Prefab)], e.prototype, "bulletPrefab", void 0);
    return __decorate([d], e);
})($baseEnemy.default);
exports.default = f;
