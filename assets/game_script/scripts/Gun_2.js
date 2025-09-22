var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $remoteAudio = require("./RemoteAudio");
var $seedUtil = require("./SeedUtil");
var $configContext = require("./ConfigContext");
var $globalParam = require("./GlobalParam");
var $localEventName = require("./LocalEventName");
var $roleContext = require("./RoleContext");
var $baseBullet = require("./BaseBullet");
var $gameContext = require("./GameContext");
var $gameGemInfo = require("./GameGemInfo");
var $gameSkillInfo = require("./GameSkillInfo");
var $baseGun = require("./BaseGun");
var v = cc.Vec3.ZERO;
var b = (function (t) {
    function e(e) {
        var i = t.call(this, e) || this;
        i.skin2AtkLeftCd = 0;
        i.skin2AtkCurrCount = 0;
        i.skillId = 23;
        i.skillParam = $gameContext.default.ins.skillInfo.getSkillById(i.skillId);
        return i;
    }
    __extends(e, t);
    e.prototype.updateF = function (e) {
        t.prototype.updateF.call(this, e);
        if (!(this.isAttacking || $globalParam.default.isGamePuase)) {
            this.timeLeft -= e;
            if (
                2 === $roleContext.default.ins.currSkinInfo.skin &&
                this.skin2AtkCurrCount >= $gameContext.default.ins.skillInfo.skinAtkTargetCount
            ) {
                this.skin2AtkLeftCd -= e;
                if (this.skin2AtkLeftCd <= 0) {
                    this.sendSkin2Bullet();
                }
            }
            this.timeLeft <= 0
                ? ((this.isAttacking = !0),
                  (this.timeLeft = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL]),
                  $eventManager.default.send($localEventName.default.RENDER_SKILL_CD_INFO, 23, 0, -1),
                  this.starGun() || ((this.isAttacking = !1), (this.timeLeft = 0)))
                : $eventManager.default.send(
                      $localEventName.default.RENDER_SKILL_CD_INFO,
                      23,
                      this.timeLeft / this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL],
                      -1
                  );
        }
    };
    e.prototype.starGun = function () {
        var t = this;
        var e = $gameContext.default.ins.getRangeRankEnemy(
            this.pointNode,
            this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL]
        );
        if (!e) {
            return !1;
        }
        var i = e.node.position.subtract(this.pointNode.position).normalize();
        if (
            $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.AddSkill) &&
            $seedUtil.default.probability(100 * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.AddSkill))
        ) {
            var o = 150 / this.skillParam.thermobaricSpeed[$gameSkillInfo.Skill4Param.FINAL];
            for (var n = 0; n < 2; n++) {
                this.schedulesOnce(function () {
                    $remoteAudio.default.instance.playEffectMusic("firebullet");
                    t.sendButtle(i);
                }, o * n);
            }
        } else {
            this.sendButtle(i);
        }
        this.isAttacking = !1;
        return !0;
    };
    e.prototype.sendButtle = function (t) {
        var e = this;
        this.skin2AtkCurrCount++;
        var i = $gameContext.default.ins.getNearbyN2(this.pointNode, this.skillParam.thermobaricComboCount + 1);
        var o = 150 / this.skillParam.thermobaricSpeed[$gameSkillInfo.Skill4Param.FINAL];
        var n = 0;
        var s = function (s) {
            r.schedulesOnce(function () {
                if (0 !== s) {
                    t = i[s].node.position.sub(e.pointNode.position).normalize();
                }
                e.createButtle(t);
                if (++n >= i.length + 1) {
                    e.isAttacking = !1;
                }
            }, o * s);
        };
        var r = this;
        for (var a = 0; a < i.length; a++) {
            s(a);
        }
    };
    e.prototype.createButtle = function (t) {
        var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.thermobaric_bullet);
        if (!e) {
            var i = $assetsLoader.default.instance.getRes(
                $assetsMap.BundleNames.Game,
                $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_4
            );
            (e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.buttleLayer.parent).getComponent(
                $baseBullet.default
            )).skillSpecialitys = $configContext.default.instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
        }
        var o = $gameContext.default.ins.buttleLayer.convertToNodeSpaceAR(
            this.pointNode.convertToWorldSpaceAR(cc.Vec3.ZERO)
        );
        e.setPosition(o);
        e.initButtle(t, this.skillId);
        e.insert($gameContext.default.ins.buttleLayer);
    };
    e.prototype.sendSkin2Bullet = function () {
        if (
            !$gameContext.default.ins.getRangeRankEnemy(
                this.pointNode,
                this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL]
            )
        ) {
            this.skin2AtkLeftCd = 2;
            return !1;
        }
        for (var t = 0; t < 3; t++) {
            var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.s_bullet_2);
            if (!e) {
                var i = $assetsLoader.default.instance.getRes(
                    $assetsMap.BundleNames.Game,
                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.SBullet_2
                );
                e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.lowBulletLayer.parent).getComponent(
                    $baseBullet.default
                );
            }
            v.x = 200 * t - 200;
            v.y = -350;
            e.setPosition(v.clone());
            v.x = 0;
            v.y = 1;
            e.initButtle(v, this.skillId);
            e.insert($gameContext.default.ins.lowBulletLayer);
        }
        this.skin2AtkCurrCount = 0;
        this.skin2AtkLeftCd = $gameContext.default.ins.skillInfo.skinAtkCd;
    };
    return e;
})($baseGun.default);
exports.default = b;
