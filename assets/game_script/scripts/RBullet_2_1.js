var o;
var $object = require("./Object");
var $util = require("./Util");
var $gameContext = require("./GameContext");
var $baseBullet = require("./BaseBullet");
var u = cc._decorator;
var d = u.ccclass;
var p =
    (u.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.r_bullet_2;
            e.atkAnim = null;
            e.bulletSpeed = 800;
            e.time = 0;
            e.targetNode = null;
            e.targetPos = null;
            e.initPos = null;
            e.status = 0;
            e.dir = null;
            return e;
        }
        __extends(e, t);
        e.prototype.initRBullet = function (e, i, o, n, s) {
            var r = this;
            this.initPos = this.node.position.clone();
            this.targetNode = e;
            this.targetPos = this.targetNode.getPosition().clone();
            this.time = s;
            t.prototype.initButtle.call(this, null, null);
            this.bulletSpeed = n;
            this.atkAnim = this.node.getComponentInChildren(cc.Animation);
            this.atk = i;
            this.setScale(cc.v3(o, o));
            this.status = 0;
            var a = this.node.position.sub(cc.v3(this.targetPos.x, -410)).mag() / this.bulletSpeed;
            cc.tween(this.node)
                .to(a, {
                    position: cc.v3(this.targetPos.x, -410)
                })
                .call(function () {
                    r.status = 2;
                })
                .start();
        };
        e.prototype.onTrigger = function (t, e) {
            if (!this.isUse) {
                if (e == $object.Trigger.enter) {
                    t.object.sufferAtk({
                        skillSpecialitys: [],
                        atk: this.atk
                    });
                }
            }
        };
        e.prototype.updateFrame = function (e) {
            var i = this;
            t.prototype.updateFrame.call(this, e);
            if (this.time > 0) {
                this.time -= e;
                if (this.time <= 0 && 2 === this.status) {
                    this.status = 4;
                }
            }
            if (2 === this.status) {
                if (
                    !(
                        (this.targetNode && $util.default.isValid(this.targetNode.node)) ||
                        ((this.targetNode = $gameContext.default.ins.getRangeRandomEnemyLayerByPos(
                            this.targetPos,
                            900
                        )),
                        this.targetNode)
                    )
                ) {
                    return void (this.status = 4);
                }
                this.targetPos.x = this.targetNode.node.x;
                this.targetPos.y = this.targetNode.node.y;
                if (0 === this.speed) {
                    this.speed = this.bulletSpeed;
                }
                this.dir = this.targetPos.sub(this.getPosition());
                this.dir.magSqr() <= 2500
                    ? ((this.velocity = cc.Vec3.ZERO),
                      (this.status = 3),
                      (this.trigger = !0),
                      (this.atkAnim.node.active = !0),
                      this.atkAnim.play("rbullet_2"),
                      this.atkAnim.once(
                          cc.Animation.EventType.FINISHED,
                          function () {
                              i.atkAnim.node.active = !1;
                              i.trigger = !1;
                              i.dir = i.initPos.sub(i.getPosition()).normalize();
                              i.velocity.set(i.dir.normalize()).multiplyScalar(i.speed);
                              i.status = 4;
                          },
                          this
                      ))
                    : this.velocity.set(this.dir.normalize()).multiplyScalar(this.speed);
            }
            if (4 === this.status && this.initPos.sub(this.getPosition()).magSqr() <= 2500) {
                this.status = 5;
                this.removeSelf();
            }
        };
        return __decorate([d], e);
    })($baseBullet.default));
exports.default = p;
