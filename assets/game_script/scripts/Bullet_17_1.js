var o;
var $object = require("./Object");
var $countDownUtil = require("./CountDownUtil");
var $configContext = require("./ConfigContext");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $enemyStatus = require("./EnemyStatus");
var p = cc._decorator;
var f = p.ccclass;
var h = (p.property, cc.size(0, 0), cc.Vec3.ZERO);
var m = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.targetId = -1;
        e.atk = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.refreshBullet17 = function (t, e, i) {
        if (!this.skillParam) {
            this.skillParam = $gameContext.default.ins.skillInfo.getSkillById(116);
        }
        this.targetId = t;
        h.x = i / 100;
        h.y = this.skillParam.guideLaserWidth;
        this.setScale(h);
        this.setAngle(e);
        this.atk = Math.ceil(0.5 * this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]);
    };
    e.prototype.onTrigger = function (t, e) {
        var i = t.object;
        if (!(i.id === this.targetId || this.node.scaleX <= 0)) {
            if (e === $object.Trigger.stay || e === $object.Trigger.enter) {
                if (
                    $countDownUtil.CountDownUtil.time - i.getLastAtkTime(3) <=
                    this.skillParam.guideLaserAtkInterval / $gameContext.default.ins.gameRatio
                ) {
                    return;
                }
                i.setLastAtkTime(3, $countDownUtil.CountDownUtil.time);
                if (
                    i.sufferAtk({
                        id: 116,
                        skillSpecialitys: $configContext.default.instance.basicSkillConfigMap.get(116).skill_tpye,
                        atk: this.atk
                    })
                ) {
                    this.skillParam.addGuideLaserAtkAdd();
                }
            }
            if (e === $object.Trigger.enter) {
                if (this.skillParam.guideLaserBurnTime > 0) {
                    var o = {
                        type: $enemyStatus.EnemyDebuffType.BURN,
                        timeLeft: this.skillParam.guideLaserBurnTime,
                        value: this.skillParam.guideLaserBurnAtk[$gameSkillInfo.Skill4Param.FINAL]
                    };
                    i.sufferDebuff(o);
                }
                if (this.skillParam.guideLaserBack > 0) {
                    o = {
                        type: $enemyStatus.EnemyDebuffType.BACK,
                        timeLeft: -1,
                        value: this.skillParam.guideLaserBack
                    };
                    i.sufferDebuff(o);
                }
            }
        }
    };
    return __decorate([f], e);
})($object.cObject);
exports.default = m;
