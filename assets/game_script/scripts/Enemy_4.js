var o;
var $seedUtil = require("./SeedUtil");
var $globalParam = require("./GlobalParam");
var $baseBullet = require("./BaseBullet");
var $baseEnemy = require("./BaseEnemy");
var $enemyStatus = require("./EnemyStatus");
var d = cc._decorator;
var p = d.ccclass;
var f = (d.property, new cc.Vec3());
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.px = 0;
        e.isTrigger = !1;
        e.initSpeed = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.clearStatus = function (e) {
        t.prototype.clearStatus.call(this, e);
        this.px = 0;
        this.isTrigger = !1;
    };
    e.prototype.initEnemy = function (e, i, o) {
        if (void 0 === o) {
            o = 0;
        }
        t.prototype.initEnemy.call(this, e, i, o);
        this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.ice, this.config.value[0]);
    };
    e.prototype.move = function (e) {
        var i = this;
        this.node.zIndex = 5e3 - Math.floor(this.residueDis);
        this.residueDis = Math.floor(this.node.y + 400);
        var o = this.getPosition();
        var n = this.velocity;
        f.x = o.x + n.x * e;
        f.y = o.y + n.y * e;
        f.z = o.z + n.z * e;
        if (f.y >= 720 && this.velocity.y > 0) {
            this.statusManager.clearDebuff($enemyStatus.EnemyDebuffType.BACK);
            return void (this.velocity.y = -1);
        }
        if (f.y < $globalParam.default.doorY && n.y < 0) {
            f.y = $globalParam.default.doorY;
        }
        if (f.x < -360) {
            f.x = -360;
        }
        if (f.x > 360) {
            f.x = 360;
        }
        this.setPosition(f);
        t.prototype.caculateVelocity.call(this);
        this.px += -n.y * e;
        if (this.px >= 500 && !this.isTrigger) {
            this.isTrigger = !0;
            if ($seedUtil.default.probability(100 * this.config.value[1])) {
                this.initSpeed = this.statusManager.initSpeed;
                this.statusManager.initSpeed = Math.floor(this.statusManager.initSpeed * (1 + this.config.value[2]));
                this.statusManager.tryRecoverSpeed();
                this.scheduleOnce(function () {
                    i.closeSpeed();
                }, this.config.value[3]);
            }
        }
    };
    e.prototype.closeSpeed = function () {
        this.statusManager.initSpeed = this.initSpeed;
        this.statusManager.tryRecoverSpeed();
    };
    return __decorate([p], e);
})($baseEnemy.default);
exports.default = h;
