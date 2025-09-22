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
        i.nextXs = [];
        i.sendBulletLeftTime = 0;
        i.skinAtkLeftCd = 0;
        i.skinAtkCurrCount = 0;
        i.skillId = 81;
        i.skillParam = $gameContext.default.ins.skillInfo.getSkillById(i.skillId);
        return i;
    }
    __extends(e, t);
    e.prototype.updateF = function (e) {
        t.prototype.updateF.call(this, e);
        if (!$globalParam.default.isGamePuase) {
            if (
                5 === $roleContext.default.ins.currSkinInfo.skin &&
                this.skinAtkCurrCount >= $gameContext.default.ins.skillInfo.skinAtkTargetCount
            ) {
                this.skinAtkLeftCd -= e;
                if (this.skinAtkLeftCd <= 0) {
                    this.sendSkinBullet();
                }
            }
            this.sendBulletLeftTime -= e;
            if (this.sendBulletLeftTime <= 0) {
                this.sendBulletLeftTime = this.skillParam.carComboTime;
                this.createButtle();
            }
            this.timeLeft -= e;
            this.timeLeft <= 0
                ? ((this.timeLeft = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL]),
                  $eventManager.default.send($localEventName.default.RENDER_SKILL_CD_INFO, this.skillId, 0, -1),
                  this.starGun() || (this.timeLeft = 0))
                : $eventManager.default.send(
                      $localEventName.default.RENDER_SKILL_CD_INFO,
                      this.skillId,
                      this.timeLeft / this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL],
                      -1
                  );
        }
    };
    e.prototype.starGun = function () {
        var t = this.skillParam.carComboCount;
        if (
            $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.AddSkill) &&
            $seedUtil.default.probability(100 * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.AddSkill))
        ) {
            t *= 2;
        }
        var e = $gameContext.default.ins.getNearbyN2(null, t);
        if (
            e.length <= 0 ||
            e[0].getPosition().sub(this.pointNode.position).magSqr() >
                this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL] *
                    this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL]
        ) {
            return !1;
        }
        for (var i = 0; i < e.length; i++) {
            this.nextXs.push(e[i].getPosition().x);
        }
        return !0;
    };
    e.prototype.sendSkinBullet = function () {
        var t = $gameContext.default.ins.getRangeRankEnemy(
            this.pointNode,
            this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL]
        );
        if (!t) {
            this.skinAtkLeftCd = 2;
            return !1;
        }
        $eventManager.default.send($localEventName.default.SEND_SKILL_ANIM);
        var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.s_bullet_5);
        if (!e) {
            var i = $assetsLoader.default.instance.getRes(
                $assetsMap.BundleNames.Game,
                $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.SBullet_5
            );
            e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.robotFlyLayer.parent).getComponent(
                $baseBullet.default
            );
        }
        v.x = 0;
        v.y = -cc.winSize.height / 2 - 30;
        e.setPosition(v.clone());
        e.targetEnemy = t;
        v.x = 0;
        v.y = 1;
        e.initButtle(v, this.skillId);
        e.insert($gameContext.default.ins.robotFlyLayer);
        this.skinAtkCurrCount = 0;
        this.skinAtkLeftCd = $gameContext.default.ins.skillInfo.skinAtkCd;
    };
    e.prototype.createButtle = function () {
        if (!(this.nextXs.length <= 0)) {
            $remoteAudio.default.instance.playEffectMusic("firecar");
            var t = this.nextXs.shift();
            var e = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.car);
            if (!e) {
                var i = $assetsLoader.default.instance.getRes(
                    $assetsMap.BundleNames.Game,
                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_13
                );
                (e = $resUtil.ResUtil.instantiate(i, $gameContext.default.ins.buttleLayer.parent).getComponent(
                    $baseBullet.default
                )).skillSpecialitys = $configContext.default.instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
            }
            e.isGem = !1;
            e.setPosition(cc.v3(t, -350));
            v.x = 0;
            v.y = 1;
            e.initButtle(v, this.skillId);
            e.insert($gameContext.default.ins.lowBulletLayer);
            this.skinAtkCurrCount++;
        }
    };
    return e;
})($baseGun.default);
exports.default = b;
