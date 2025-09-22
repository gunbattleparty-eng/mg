var o;
var $object = require("./Object");
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $countDownUtil = require("./CountDownUtil");
var $util = require("./Util");
var $configContext = require("./ConfigContext");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $enemyStatus = require("./EnemyStatus");
var $baseBullet = require("./BaseBullet");
var g = cc._decorator;
var _ = g.ccclass;
var k = (g.property, cc.Vec3.ZERO);
var v = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.buttleType = $baseBullet.BulletType.ice_boom;
        e.timeLeft = 0;
        e.attackEnemy = new Map();
        return e;
    }
    __extends(e, t);
    e.prototype.initButtle = function (e, i) {
        t.prototype.initButtle.call(this, e, i);
        this.isUse = !1;
        var o = this.skillParam.iceBoomAtkRange;
        this.setScale(cc.v3(o, o));
        this.atk = this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL];
        this.timeLeft = this.skillParam.iceBoomTime[$gameSkillInfo.Skill4Param.FINAL];
    };
    e.prototype.onTrigger = function (t, e) {
        var i = t.object;
        if (e == $object.Trigger.enter) {
            if (this.timeLeft > 0.016) {
                i.sufferDebuff({
                    type: $enemyStatus.EnemyDebuffType.SLOW,
                    timeLeft: this.timeLeft + this.skillParam.iceBoomSlowTime,
                    value: this.skillParam.iceBoomSlowAdd
                });
            }
            if (this.skillParam.iceBoomAdsorb > 0) {
                var o = this.node.position.sub(i.node.position);
                i.addAdsorb(o);
                this.attackEnemy.set(i, o);
            }
            if (this.skillParam.iceBoomFreezeTime > 0) {
                i.sufferDebuff({
                    type: $enemyStatus.EnemyDebuffType.FREEZE,
                    timeLeft: this.skillParam.iceBoomFreezeTime,
                    value: 0
                });
            }
        } else {
            if (e == $object.Trigger.stay) {
                if (
                    $countDownUtil.CountDownUtil.time - i.getLastAtkTime(4) <=
                    this.skillParam.iceBoomAtkInterval / $gameContext.default.ins.gameRatio
                ) {
                    return;
                }
                i.setLastAtkTime(4, $countDownUtil.CountDownUtil.time);
                i.sufferAtk({
                    id: this.skillId,
                    skillSpecialitys: this.skillSpecialitys,
                    atk: this.atk
                });
                if (this.skillParam.iceBoomAdsorb > 0 && this.attackEnemy.has(i)) {
                    k.x = this.node.position.x - i.node.position.x;
                    k.y = this.node.position.y - i.node.position.y;
                    k.magSqr() <= 900
                        ? ((this.attackEnemy.get(i).x = 0), (this.attackEnemy.get(i).y = 0))
                        : (k.normalizeSelf().mulSelf(this.skillParam.iceBoomAdsorb),
                          (this.attackEnemy.get(i).x = k.x),
                          (this.attackEnemy.get(i).y = k.y));
                }
            } else {
                if (e == $object.Trigger.exit && this.skillParam.iceBoomAdsorb > 0 && this.attackEnemy.has(i)) {
                    i.removeAdsorb(this.attackEnemy.get(i));
                    this.attackEnemy.delete(i);
                }
            }
        }
    };
    e.prototype.updateFrame = function (t) {
        if (!this.isUse) {
            this.timeLeft -= t;
            if (this.timeLeft <= 0) {
                this.isUse = !0;
                if (this.skillParam.iceBoomBoomAtk[$gameSkillInfo.Skill4Param.FINAL] > 0) {
                    this.createBoom();
                }
                if (this.skillParam.iceBoomSplitCount > 0) {
                    this.createSplitButtle();
                }
                if (this.attackEnemy.size > 0) {
                    this.attackEnemy.forEach(function (t, e) {
                        if ($util.default.isValid(e.node)) {
                            e.removeAdsorb(t);
                        }
                    });
                }
                this.removeSelf();
            }
        }
    };
    e.prototype.createBoom = function () {
        var t = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.ice_boom_boom);
        if (!t) {
            var e = $assetsLoader.default.instance.getRes(
                $assetsMap.BundleNames.Game,
                $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_20
            );
            t = $resUtil.ResUtil.instantiate(e, $gameContext.default.ins.lowBulletLayer.parent).getComponent(
                $baseBullet.default
            );
        }
        t.setPosition(cc.v3(this.node.position.x, this.node.position.y));
        t.initButtle(null, this.skillId);
        t.insert($gameContext.default.ins.lowBulletLayer);
        t.setAnimation(null);
    };
    e.prototype.createSplitButtle = function () {
        var t = $gameContext.default.ins.getNearbyN2(this.node, this.skillParam.iceBoomSplitCount);
        for (var e = 0; e < t.length; e++) {
            var i = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.ice_boom_split);
            if (!i) {
                var o = $assetsLoader.default.instance.getRes(
                    $assetsMap.BundleNames.Game,
                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_21
                );
                (i = $resUtil.ResUtil.instantiate(o).getComponent($baseBullet.default)).skillSpecialitys =
                    $configContext.default.instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
            }
            var n = t[e].node.position.sub(this.node.position).normalize();
            i.setPosition(this.node.position.add(n.mul(100)));
            i.initButtle(n, this.skillId);
            i.insert($gameContext.default.ins.buttleLayer);
        }
    };
    return __decorate([_], e);
})($baseBullet.default);
exports.default = v;
