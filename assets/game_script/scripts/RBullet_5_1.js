var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $gameContext = require("./GameContext");
var $baseBullet = require("./BaseBullet");
var d = cc._decorator;
var p = d.ccclass;
var f = d.property;
var h =
    (new cc.Vec3(),
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.r_bullet_5_1;
            e.point1 = [];
            e.pointNode = null;
            e.atkCDLeft = 0;
            e.timeLeft = 0;
            e.isAttacking = !1;
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e) {
            var i = this;
            t.prototype.initButtle.call(this, e, null);
            this.atkCDLeft = $gameContext.default.ins.skillInfo.robotParam[4];
            this.timeLeft = $gameContext.default.ins.skillInfo.robotParam[5];
            cc.tween(this.node.children[0])
                .to(0.3, {
                    x: 290
                })
                .start();
            cc.tween(this.node.children[1])
                .to(0.3, {
                    x: -290
                })
                .call(function () {
                    i.isUse = !1;
                })
                .start();
        };
        e.prototype.updateFrame = function (t) {
            var e = this;
            if (!(this.isUse || this.timeLeft <= 0)) {
                this.timeLeft -= t;
                if (this.timeLeft <= 0) {
                    this.timeLeft = 0;
                    this.isUse = !0;
                    cc.tween(this.node.children[0])
                        .to(0.3, {
                            x: 500
                        })
                        .start();
                    cc.tween(this.node.children[1])
                        .to(0.3, {
                            x: -500
                        })
                        .call(function () {
                            e.removeSelf();
                        })
                        .start();
                }
                if (!this.isAttacking) {
                    this.atkCDLeft -= t;
                    if (this.atkCDLeft <= 0) {
                        this.atkCDLeft = $gameContext.default.ins.skillInfo.robotParam[4];
                        this.startGun();
                    }
                }
            }
        };
        e.prototype.startGun = function () {
            var t = $gameContext.default.ins.getRandomEnemys(
                this.pointNode,
                2,
                $gameContext.default.ins.skillInfo.robotParam[2]
            );
            if (t.length <= 0) {
                this.atkCDLeft = 1;
                return !1;
            }
            if (1 === t.length) {
                this.caculateTarget(0, t[0]);
                this.caculateTarget(1, t[0]);
            } else {
                for (var e = 0; e < t.length; e++) {
                    this.caculateTarget(e, t[e]);
                }
            }
            this.atkCDLeft = $gameContext.default.ins.skillInfo.robotParam[4];
            this.isAttacking = !1;
        };
        e.prototype.caculateTarget = function (t, e) {
            var i = this.node.position.add(this.point1[t].position);
            var o = e.getPosition().sub(i).normalizeSelf();
            this.createButtle(o, i);
        };
        e.prototype.createButtle = function (t, e) {
            var i = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.r_bullet_5_2);
            if (!i) {
                var o = $assetsLoader.default.instance.getRes(
                    $assetsMap.BundleNames.Game,
                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_5_2
                );
                i = $resUtil.ResUtil.instantiate(o, $gameContext.default.ins.lowBulletLayer.parent).getComponent(
                    $baseBullet.default
                );
            }
            i.setPosition(e);
            i.initButtle(t, null);
            i.insert($gameContext.default.ins.lowBulletLayer);
        };
        __decorate([f([cc.Node])], e.prototype, "point1", void 0);
        return __decorate([p], e);
    })($baseBullet.default));
exports.default = h;
