var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $seedUtil = require("./SeedUtil");
var $util = require("./Util");
var $configContext = require("./ConfigContext");
var $globalParam = require("./GlobalParam");
var $localEventName = require("./LocalEventName");
var $baseBullet = require("./BaseBullet");
var $gameContext = require("./GameContext");
var $gameGemInfo = require("./GameGemInfo");
var $gameSkillInfo = require("./GameSkillInfo");
var $baseGun = require("./BaseGun");
var k = cc.Vec3.ZERO;
var v = (function (t) {
    function e(e) {
        var i = t.call(this, e) || this;
        i.skillId = 209;
        i.skillParam = $gameContext.default.ins.skillInfo.getSkillById(i.skillId);
        return i;
    }
    __extends(e, t);
    e.prototype.updateF = function (e) {
        t.prototype.updateF.call(this, e);
        if (!(this.isAttacking || $globalParam.default.isGamePuase)) {
            this.timeLeft -= e;
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
    e.prototype.starGun = function () {
        var t = $gameContext.default.ins.getRangeRankEnemy(
            this.pointNode,
            this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL]
        );
        return (
            !!t &&
            (this.skillParam.windBladeMulti <= 0 ? this.sendBullet1(t) : this.sendbullet2(t),
            (this.isAttacking = !1),
            !0)
        );
    };
    e.prototype.sendbullet2 = function (t) {
        var e = this;
        this.getRandomPos();
        var i = t.getPosition().sub(k);
        this.createButtle(i, k);
        for (var o = 1; o < this.skillParam.windBladeMulti; o++) {
            this.schedulesOnce(function () {
                var t = $gameContext.default.ins.getRandomEnemy();
                if (t && t.node.parent) {
                    e.getRandomPos();
                    var i = t.getPosition().sub(k);
                    e.createButtle(i, k);
                }
            }, o * this.skillParam.windBladeMultiTime);
        }
    };
    e.prototype.getRandomPos = function () {
        $seedUtil.default.probability(50)
            ? ((k.x = $seedUtil.default.randomFrom(-460, 460)), (k.y = -cc.winSize.height / 2 - 150))
            : ((k.x = $seedUtil.default.probability(50) ? -460 : 460),
              (k.y = -$seedUtil.default.randomFrom(0, cc.winSize.height / 2 + 150)));
    };
    e.prototype.sendBullet1 = function (t) {
        var e = this;
        var i = 150 / this.skillParam.windBladeSpeed;
        var o = 0;
        var n = this.skillParam.windBladeComboCount + 1;
        if (
            $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.AddSkill) &&
            $seedUtil.default.probability(100 * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.AddSkill))
        ) {
            n *= 2;
        }
        var s = t.getPosition().sub(this.pointNode.position);
        k.x = this.pointNode.position.x;
        k.y = this.pointNode.position.y;
        for (var r = 0; r < n; r++) {
            this.schedulesOnce(function () {
                e.createButtle(s, k);
                var t = $util.default.dirConverAngle(s);
                if (e.skillParam.windBladeParallelCount >= 1) {
                    e.createButtle($util.default.angleConverDir(t + 15), k);
                }
                if (e.skillParam.windBladeParallelCount >= 2) {
                    e.createButtle($util.default.angleConverDir(t - 15), k);
                }
                if (++o === n) {
                    e.isAttacking = !1;
                }
            }, i * r);
        }
    };
    e.prototype.createButtle = function (t, e) {
        var i = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.wind_blade);
        if (!i) {
            var o = $assetsLoader.default.instance.getRes(
                $assetsMap.BundleNames.Game,
                $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_22
            );
            (i = $resUtil.ResUtil.instantiate(o, $gameContext.default.ins.buttleLayer.parent).getComponent(
                $baseBullet.default
            )).skillSpecialitys = $configContext.default.instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
        }
        i.setPosition(e);
        i.initButtle(t.normalize(), this.skillId);
        i.insert($gameContext.default.ins.buttleLayer);
        i.setAnimation("");
    };
    return e;
})($baseGun.default);
exports.default = v;
