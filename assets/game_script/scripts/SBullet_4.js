var o;
var $object = require("./Object");
var $gameContext = require("./GameContext");
var $enemyStatus = require("./EnemyStatus");
var $baseBullet = require("./BaseBullet");
var u = cc._decorator;
var d = u.ccclass;
var p = (u.property, new cc.Vec3());
var f = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.buttleType = $baseBullet.BulletType.s_bullet_4;
        e.time = 0;
        e.currTime = 0;
        e.bulletStatus = 0;
        e.dis = 0;
        e.start2PosY = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.initButtle = function (e) {
        t.prototype.initButtle.call(this, e, null);
        this.bulletStatus = 0;
        this.currTime = 0;
        this.atk = $gameContext.default.ins.skillInfo.skinAtk;
        this.speed = $gameContext.default.ins.skillInfo.skinParam[4];
        this.time = $gameContext.default.ins.skillInfo.skinParam[3] / this.speed;
        this.start2PosY = -350 + $gameContext.default.ins.skillInfo.skinParam[3];
        this.dis = this.start2PosY + 350;
        if (e) {
            this.velocity.set(e).multiplyScalar(this.speed);
        }
    };
    e.prototype.updateFrame = function (t) {
        if (0 === this.bulletStatus) {
            this.currTime += t;
            this.currTime >= this.time && ((this.currTime = this.time), (this.bulletStatus = 1));
            p.y = this.easeOutCubic(this.currTime, -350, this.dis, this.time);
            p.x = this.node.x;
            this.setPosition(p);
            this.currTime >= this.time && (this.currTime = 0);
        } else {
            if (1 === this.bulletStatus) {
                this.currTime += t;
                this.currTime >= this.time && ((this.currTime = this.time), (this.bulletStatus = 2));
                p.y = this.easeInCubic(this.currTime, this.start2PosY, -this.dis, this.time);
                p.x = this.node.x;
                this.setPosition(p);
            } else {
                if (2 === this.bulletStatus) {
                    this.bulletStatus = 3;
                    return this.removeSelf();
                }
            }
        }
    };
    e.prototype.onTrigger = function (t, e) {
        if (e == $object.Trigger.enter) {
            var i = t.object;
            i.sufferAtk({
                skillSpecialitys: this.skillSpecialitys,
                atk: this.atk
            });
            if (0 === this.bulletStatus) {
                var o = {
                    type: $enemyStatus.EnemyDebuffType.BACK,
                    timeLeft: -1,
                    value: $gameContext.default.ins.skillInfo.skinParam[5]
                };
                i.sufferDebuff(o);
            }
        }
    };
    e.prototype.easeOutCubic = function (t, e, i, o) {
        return i * ((t = t / o - 1) * t * t + 1) + e;
    };
    e.prototype.easeInCubic = function (t, e, i, o) {
        return i * (t /= o) * t * t + e;
    };
    return __decorate([d], e);
})($baseBullet.default);
exports.default = f;
