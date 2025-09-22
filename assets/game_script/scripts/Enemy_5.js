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
        e.buttleType = $baseBullet.BulletType.e_bullet_5;
        e.atkPoint = null;
        e.healthBar = null;
        e.bulletPrefab = null;
        e.atkSpeed = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.initEnemy = function (e, i, o) {
        if (void 0 === o) {
            o = 0;
        }
        t.prototype.initEnemy.call(this, e, i, o);
        this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.fire, this.config.value[0]);
        this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.thunder, this.config.value[1]);
        this.atkRange = this.config.value[2];
        this.atkSpeed = this.config.value[3];
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
    e.prototype.attackAnim = function () {
        var t = $gameContext.default.ins.getButtlePool(this.buttleType);
        if (!t) {
            t = cc.instantiate(this.bulletPrefab).getComponent($baseBullet.default);
        }
        var e = $gameContext.default.ins.enemyBulletLayer.convertToNodeSpaceAR(
            this.atkPoint.convertToWorldSpaceAR(cc.Vec3.ZERO)
        );
        t.setPosition(e);
        t.initEButtle(this.statusManager.atk, this.atkSpeed);
        t.insert($gameContext.default.ins.enemyBulletLayer);
    };
    __decorate([p(cc.Node)], e.prototype, "atkPoint", void 0);
    __decorate([p($healthBar.default)], e.prototype, "healthBar", void 0);
    __decorate([p(cc.Prefab)], e.prototype, "bulletPrefab", void 0);
    return __decorate([d], e);
})($baseEnemy.default);
exports.default = f;
