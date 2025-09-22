var o;
var $object = require("./Object");
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $remoteAudio = require("./RemoteAudio");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $enemyStatus = require("./EnemyStatus");
var $baseBullet = require("./BaseBullet");
var m = cc._decorator;
var y = m.ccclass;
var g = (m.property, cc.Vec3.ZERO);
var _ = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.buttleType = $baseBullet.BulletType.oil_boom;
        e.enemys = new Set();
        return e;
    }
    __extends(e, t);
    e.prototype.initButtle = function (e, i) {
        t.prototype.initButtle.call(this, e, i);
        var o = this.skillParam.oilBoomRange;
        this.setScale(cc.v3(o, o));
        this.atk = this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL];
    };
    e.prototype.setAnimation = function () {
        var t = this;
        var e = this.node.children[0].getComponent(cc.Animation);
        $remoteAudio.default.instance.playEffectMusicRestrict("boom", 0.3);
        e.play("bullet_25");
        e.once(
            cc.Animation.EventType.FINISHED,
            function () {
                t.removeSelf();
            },
            this
        );
    };
    e.prototype.onTrigger = function (t, e) {
        if (!this.isUse) {
            if (e == $object.Trigger.enter || e == $object.Trigger.stay) {
                var i = t.object;
                if (this.enemys.has(i)) {
                    return;
                }
                if (
                    i.sufferAtk({
                        id: 227,
                        atk: this.atk,
                        skillSpecialitys: this.skillSpecialitys
                    })
                ) {
                    g.x = i.node.x;
                    g.y = i.node.y;
                    this.createBoomNo(g);
                } else {
                    i.sufferDebuff({
                        type: $enemyStatus.EnemyDebuffType.BURN,
                        timeLeft: this.skillParam.oilBurnTime,
                        value: this.skillParam.oilBurnAtk[$gameSkillInfo.Skill4Param.FINAL]
                    });
                    this.enemys.add(i);
                    if (this.skillParam.oilAllAtkAdd > 0) {
                        var o = {
                            type: $enemyStatus.EnemyDebuffType.ALL_ATK_ADD,
                            timeLeft: this.skillParam.oilBurnTime,
                            value: this.skillParam.oilAllAtkAdd
                        };
                        i.sufferDebuff(o);
                    }
                }
            } else {
                if (e == $object.Trigger.exit) {
                    i = t.object;
                    this.enemys.delete(i);
                }
            }
        }
    };
    e.prototype.createBoomNo = function (t) {
        if (this.skillParam.oilBurnAreaAtkNo) {
            var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.oil_burn_area_no);
            if (!e) {
                var i = $assetsLoader.default.instance.getRes(
                    $assetsMap.BundleNames.Game,
                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_28
                );
                (e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.floorLayer.parent).getComponent(
                    $baseBullet.default
                )).skillSpecialitys = this.skillSpecialitys;
            }
            e.setPosition(t);
            e.initButtle(null, this.skillId);
            e.insert($gameContext.default.ins.floorLayer);
            e.setAnimation(null);
        }
    };
    e.prototype.updateFrame = function () {};
    return __decorate([y], e);
})($baseBullet.default);
exports.default = _;
