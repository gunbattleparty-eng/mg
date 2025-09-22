var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $remoteAudio = require("./RemoteAudio");
var $seedUtil = require("./SeedUtil");
var $util = require("./Util");
var $configContext = require("./ConfigContext");
var $globalParam = require("./GlobalParam");
var $localEventName = require("./LocalEventName");
var $roleContext = require("./RoleContext");
var $baseBullet = require("./BaseBullet");
var $gameContext = require("./GameContext");
var $gameGemInfo = require("./GameGemInfo");
var $gameSkillInfo = require("./GameSkillInfo");
var $baseGun = require("./BaseGun");
var b = cc.Vec3.ZERO;
var w = (function (t) {
    function e(e) {
        var i = t.call(this, e) || this;
        i.skin4AtkLeftCd = 0;
        i.skin4AtkCurrCount = 0;
        i.skillId = 61;
        i.skillParam = $gameContext.default.ins.skillInfo.getSkillById(i.skillId);
        return i;
    }
    __extends(e, t);
    e.prototype.updateF = function (e) {
        t.prototype.updateF.call(this, e);
        if (!(this.isAttacking || $globalParam.default.isGamePuase)) {
            this.timeLeft -= e;
            if (
                4 === $roleContext.default.ins.currSkinInfo.skin &&
                this.skin4AtkCurrCount >= $gameContext.default.ins.skillInfo.skinAtkTargetCount
            ) {
                this.skin4AtkLeftCd -= e;
                if (this.skin4AtkLeftCd <= 0) {
                    this.sendSkin4Bullet();
                }
            }
            this.timeLeft <= 0
                ? ((this.isAttacking = !0),
                  (this.timeLeft = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL]),
                  $eventManager.default.send($localEventName.default.RENDER_SKILL_CD_INFO, this.skillId, 0, -1),
                  this.starGun() || ((this.isAttacking = !1), (this.timeLeft = 0)))
                : $eventManager.default.send(
                      $localEventName.default.RENDER_SKILL_CD_INFO,
                      this.skillId,
                      this.timeLeft / this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL],
                      -1
                  );
        }
    };
    e.prototype.sendSkin4Bullet = function () {
        var t = $gameContext.default.ins.getRangeRankEnemy(
            this.pointNode,
            $gameContext.default.ins.skillInfo.skinAtkRange
        );
        if (!t) {
            this.skin4AtkLeftCd = 2;
            return !1;
        }
        $eventManager.default.send($localEventName.default.SEND_SKILL_ANIM);
        var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.s_bullet_4);
        if (!e) {
            var i = $assetsLoader.default.instance.getRes(
                $assetsMap.BundleNames.Game,
                $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.SBullet_4
            );
            e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.buttleLayer.parent).getComponent(
                $baseBullet.default
            );
        }
        b.x = t.getPosition().x;
        b.y = -350;
        e.setPosition(b.clone());
        e.initButtle(null, this.skillId);
        e.insert($gameContext.default.ins.buttleLayer);
        this.skin4AtkCurrCount = 0;
        this.skin4AtkLeftCd = $gameContext.default.ins.skillInfo.skinAtkCd;
    };
    e.prototype.starGun = function () {
        var t = this;
        var e = $gameContext.default.ins.getRangeRankEnemy(
            this.pointNode,
            this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL]
        );
        if (
            $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.AddSkill) &&
            $seedUtil.default.probability(100 * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.AddSkill))
        ) {
            for (var i = 0; i < 2; i++) {
                this.schedulesOnce(function () {
                    if (!e) {
                        return !1;
                    }
                    t.sendButtle(e);
                }, 0.2 * i);
            }
        } else {
            {
                if (!e) {
                    return !1;
                }
                this.sendButtle(e);
            }
        }
        this.isAttacking = !1;
        return !0;
    };
    e.prototype.sendButtle = function (t) {
        var e = this;
        var i = function (i) {
            o.schedulesOnce(function () {
                if (i > 0) {
                    t = $gameContext.default.ins.getRangeRandomEnemyLayer(e.pointNode);
                }
                if (t && $util.default.isValid(t.node)) {
                    e.createButtle(t);
                }
            }, 0.3 * i);
        };
        var o = this;
        for (var n = 0; n < this.skillParam.thunderComboCount + 1; n++) {
            i(n);
        }
        this.isAttacking = !1;
    };
    e.prototype.createButtle = function (t) {
        var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.thunder_bullet);
        if (!e) {
            var i = $assetsLoader.default.instance.getRes(
                $assetsMap.BundleNames.Game,
                $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_9
            );
            (e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.buttleLayer.parent).getComponent(
                $baseBullet.default
            )).skillSpecialitys = $configContext.default.instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
        }
        e.setPosition(t.node.position.clone());
        $remoteAudio.default.instance.playEffectMusicRestrict("Lightningstrike", 0.3);
        e.targetEnemy = t;
        e.targetPos = t.getPosition().clone();
        e.isExtra = !1;
        e.initButtle(null, this.skillId);
        e.insert($gameContext.default.ins.buttleLayer);
        e.setAnimation("");
        this.skin4AtkCurrCount++;
    };
    return e;
})($baseGun.default);
exports.default = w;
