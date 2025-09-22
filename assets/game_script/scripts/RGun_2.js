var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $configContext = require("./ConfigContext");
var $globalParam = require("./GlobalParam");
var $baseBullet = require("./BaseBullet");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var f = (function (t) {
    function e(e) {
        var i = t.call(this, e) || this;
        i.atk = 0;
        i.cd = 0;
        i.range = 0;
        i.bulletCount = 2;
        i.config = null;
        i.config = $configContext.default.instance.robotConfigs.find(function (t) {
            return 3 === t.id;
        });
        i.cd = i.config.Petsskin_skill_value[1];
        i.range = i.config.Petsskin_skill_value[2];
        i.timeLeft = 0;
        return i;
    }
    __extends(e, t);
    e.prototype.updateF = function (e) {
        t.prototype.updateF.call(this, e);
        if (!(this.isAttacking || $globalParam.default.isGamePuase)) {
            this.timeLeft -= e;
            if (this.timeLeft <= 0) {
                this.startGun();
            }
        }
    };
    e.prototype.startGun = function () {
        var t = this;
        var e = $gameContext.default.ins.getNearbyN2(this.pointNode, this.bulletCount);
        if (e.length <= 0 || e[0].node.position.sub(this.pointNode.position).magSqr() >= this.range * this.range) {
            this.timeLeft = 1;
            return !1;
        }
        if (!this.skillParam) {
            this.skillParam = $gameContext.default.ins.skillInfo.getSkillById(1);
        }
        this.atk = Math.ceil(
            this.config.Petsskin_skill_value[0] * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]
        );
        this.isAttacking = !0;
        for (var i = 0; i < this.bulletCount; i++) {
            if (e[i]) {
                this.createButtle(e[i]);
            }
        }
        this.schedulesOnce(function () {
            t.isAttacking = !1;
            t.timeLeft = t.cd;
        }, 0);
    };
    e.prototype.createButtle = function (t) {
        var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.r_bullet_2);
        if (!e) {
            var i = $assetsLoader.default.instance.getRes(
                $assetsMap.BundleNames.Game,
                $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.RBullet_2
            );
            e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.buttleLayer.parent).getComponent(
                $baseBullet.default
            );
        }
        var o = $gameContext.default.ins.buttleLayer.convertToNodeSpaceAR(
            this.pointNode.convertToWorldSpaceAR(cc.Vec3.ZERO)
        );
        e.setPosition(o);
        e.initRBullet(
            t,
            this.atk,
            this.config.Petsskin_skill_value[4],
            this.config.Petsskin_skill_value[5],
            this.config.Petsskin_skill_value[3]
        );
        e.insert($gameContext.default.ins.buttleLayer);
    };
    return e;
})(require("./BaseGun").default);
exports.default = f;
