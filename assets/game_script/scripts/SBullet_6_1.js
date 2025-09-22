var o;
var $object = require("./Object");
var $util = require("./Util");
var $gameContext = require("./GameContext");
var $baseBullet = require("./BaseBullet");
var u = cc._decorator;
var d = u.ccclass;
var p = (u.property, new cc.Vec3());
var f = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.buttleType = $baseBullet.BulletType.s_bullet_6_1;
        e.targetEnemy = null;
        e.leftTime = 0;
        e.findLeftTime = 0;
        e.status = 0;
        e.angleSpeed = 3;
        return e;
    }
    __extends(e, t);
    e.prototype.initButtle = function (e) {
        this.speed = $gameContext.default.ins.skillInfo.skinParam[6];
        t.prototype.initButtle.call(this, e, null);
        if (e) {
            this.velocity.set(e).multiplyScalar(this.speed);
        }
        this.leftTime = $gameContext.default.ins.skillInfo.skinParam[5];
        this.targetEnemy.addDieCallback(this.dieEnemy, this);
        this.isUse = !1;
        this.atk = $gameContext.default.ins.skillInfo.skinAtk;
        this.status = 1;
    };
    e.prototype.dieEnemy = function () {
        this.changeEnemy();
    };
    e.prototype.changeEnemy = function () {
        var t = $gameContext.default.ins.getRandomEnemy(this.targetEnemy);
        t
            ? ((this.targetEnemy = t), this.targetEnemy.addDieCallback(this.dieEnemy, this), (this.status = 1))
            : (this.status = 0);
    };
    e.prototype.updateFrame = function (t) {
        if (!this.isUse) {
            this.leftTime -= t;
            if (this.leftTime <= 0) {
                this.isUse = !0;
                return this.removeSelf();
            }
            0 === this.status
                ? ((this.findLeftTime -= t),
                  this.findLeftTime <= 0 && ((this.findLeftTime = 1.5), this.changeEnemy()),
                  this.move(t))
                : 1 === this.status &&
                  (this.getPosition().subtract(this.targetEnemy.getPosition()).magSqr() <= 900
                      ? this.move(t)
                      : this.trace(t));
        }
    };
    e.prototype.trace = function (t) {
        var e = this.lerpAngleRes(this.targetEnemy.getPosition().subtract(this.getPosition()));
        this.setAngle(e);
        this.velocity.set($util.default.angleConverDir(e).normalizeSelf()).mulSelf(this.speed);
        this.move(t);
    };
    e.prototype.lerpAngleRes = function (t) {
        var e = ($util.default.dirConverAngle(t) + 360) % 360;
        var i = (this.node.angle + 360) % 360;
        return Math.abs(i - e) <= this.angleSpeed
            ? e
            : ((i - e + 360) % 360 < (e - i + 360) % 360 ? (i -= this.angleSpeed) : (i += this.angleSpeed), i);
    };
    e.prototype.move = function (t) {
        var e = this.getPosition();
        var i = this.velocity;
        p.x = e.x + i.x * t;
        p.y = e.y + i.y * t;
        p.z = e.z + i.z * t;
        if (p.x < -335 || p.x > 335) {
            p.x = e.x;
            this.velocity.x = -this.velocity.x;
            var o = $util.default.dirConverAngle(this.velocity);
            this.setAngle(o);
        }
        if (p.y < -365 || p.y > cc.winSize.height / 2 - 25) {
            p.y = e.y;
            this.velocity.y = -this.velocity.y;
            o = $util.default.dirConverAngle(this.velocity);
            this.setAngle(o);
        }
        this.setPosition(p);
    };
    e.prototype.onTrigger = function (t, e) {
        if (e == $object.Trigger.enter) {
            t.object.sufferAtk({
                skillSpecialitys: this.skillSpecialitys,
                atk: this.atk
            });
        }
    };
    return __decorate([d], e);
})($baseBullet.default);
exports.default = f;
