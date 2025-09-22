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
var $gameGemInfo = require("./GameGemInfo");
var $gameSkillInfo = require("./GameSkillInfo");
var $baseGun = require("./BaseGun");
var _ =
    (cc.Vec3.ZERO,
    (function (t) {
        function e(e) {
            var i = t.call(this, e) || this;
            i.skillId = 227;
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
            var t = this;
            var e = this.skillParam.oilCount;
            if (
                $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.AddSkill) &&
                $seedUtil.default.probability(100 * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.AddSkill))
            ) {
                e += 1;
            }
            var i = $gameContext.default.ins.getRandomEnemys(
                this.pointNode,
                e,
                this.skillParam.skillAtkRange[$gameSkillInfo.Skill4Param.FINAL]
            );
            if (i.length <= 0) {
                return !1;
            }
            var o = function (e) {
                n.schedulesOnce(function () {
                    t.sendButtle(i[e].getPosition().clone(), i[e]);
                }, 0.1 * e);
            };
            var n = this;
            for (var s = 0; s < i.length; s++) {
                o(s);
            }
            this.isAttacking = !1;
            return !0;
        };
        e.prototype.sendButtle = function (t, e) {
            var i = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.oil);
            if (!i) {
                var o = $assetsLoader.default.instance.getRes(
                    $assetsMap.BundleNames.Game,
                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_24
                );
                (i = $resUtil.ResUtil.instantiate(o, $gameContext.default.ins.buttleLayer.parent).getComponent(
                    $baseBullet.default
                )).skillSpecialitys = $configContext.default.instance.basicSkillConfigMap.get(this.skillId).skill_tpye;
            }
            i.targetPos = t;
            i.targetEnemy = e;
            var n = $gameContext.default.ins.buttleLayer.convertToNodeSpaceAR(
                this.pointNode.convertToWorldSpaceAR(cc.Vec3.ZERO)
            );
            i.setPosition(n);
            var l = t.sub(n).normalize();
            i.initButtle(l, this.skillId);
            i.insert($gameContext.default.ins.buttleLayer);
        };
        return e;
    })($baseGun.default));
exports.default = _;
