var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $seedUtil = require("./SeedUtil");
var $configContext = require("./ConfigContext");
var $globalParam = require("./GlobalParam");
var $localEventName = require("./LocalEventName");
var $baseBullet = require("./BaseBullet");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $baseGun = require("./BaseGun");
var g = cc.Vec3.ZERO;
var _ = (function (t) {
    function e(e) {
        var i = t.call(this, e) || this;
        i.skillId = 247;
        i.skillParam = $gameContext.default.ins.skillInfo.getSkillById(i.skillId);
        return i;
    }
    __extends(e, t);
    e.prototype.updateF = function (e) {
        t.prototype.updateF.call(this, e);
        if (!($globalParam.default.isGamePuase || this.releaseing)) {
            this.timeLeft -= e;
            this.timeLeft <= 0
                ? ((this.timeLeft = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL]),
                  $eventManager.default.send($localEventName.default.RENDER_SKILL_CD_INFO, this.skillId, 0),
                  this.startGun()
                      ? ((this.releaseing = !0),
                        (this.timeLeft = this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL]),
                        $eventManager.default.send($localEventName.default.RENDER_SKILL_CD_INFO, this.skillId, 1))
                      : (this.timeLeft = 0))
                : $eventManager.default.send(
                      $localEventName.default.RENDER_SKILL_CD_INFO,
                      this.skillId,
                      this.timeLeft / this.skillParam.skillCD[$gameSkillInfo.Skill4Param.FINAL],
                      -1
                  );
        }
    };
    e.prototype.startGun = function () {
        var t = this;
        var e = $gameContext.default.ins.getRandomEnemys(
            this.pointNode,
            this.skillParam.skillReleaseCount + 1,
            this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL]
        );
        if (e.length <= 0) {
            return !1;
        }
        var i = Math.min(e.length, this.skillParam.skillReleaseCount);
        for (var o = 0; o < i; o++) {
            var n = e[o].getPosition();
            if (o + 1 < e.length) {
                var s = e[o + 1].getPosition();
                g.x = s.x - n.x;
                g.y = s.y - n.y;
            } else {
                g.x = $seedUtil.default.randomFloat(-1, 1);
                g.y = $seedUtil.default.randomFloat(-1, 1);
            }
            this.createBullet(n, g.normalizeSelf());
        }
        this.schedulesOnce(function () {
            t.releaseing = !1;
        }, this.skillParam.time[$gameSkillInfo.Skill4Param.FINAL]);
        return !0;
    };
    e.prototype.createBullet = function (t, e) {
        var i = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.drat);
        if (!i) {
            var o = $assetsLoader.default.instance.getRes(
                $assetsMap.BundleNames.Game,
                $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_29
            );
            (i = $resUtil.ResUtil.instantiate(o, $gameContext.default.ins.lowBulletLayer.parent).getComponent(
                $baseBullet.default
            )).skillSpecialitys = $configContext.default.instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
        }
        i.setPosition(t);
        i.initButtle(e, this.skillId);
        i.insert($gameContext.default.ins.lowBulletLayer);
    };
    return e;
})($baseGun.default);
exports.default = _;
