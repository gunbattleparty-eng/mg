var o;
var $object = require("./Object");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $enemyStatus = require("./EnemyStatus");
var $baseBullet = require("./BaseBullet");
var d = cc._decorator;
var p = d.ccclass;
var f =
    (d.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.r_bullet_3;
            e.brunAtk = 0;
            e.timeLeft = 0;
            e.animNode = null;
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e) {
            t.prototype.initButtle.call(this, e, null);
            this.timeLeft = $gameContext.default.ins.skillInfo.robotParam[5];
            this.atk = Math.ceil(
                $gameContext.default.ins.skillInfo.robotParam[0] *
                    this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]
            );
            this.brunAtk = Math.ceil(
                $gameContext.default.ins.skillInfo.robotParam[3] *
                    this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL]
            );
            if (!this.animNode) {
                this.animNode = this.node.children[0];
            }
            this.animNode.opacity = 0;
            cc.tween(this.animNode)
                .to(0.3, {
                    opacity: 255
                })
                .start();
        };
        e.prototype.onTrigger = function (t, e) {
            if (!this.isUse && e == $object.Trigger.enter) {
                var i = t.object;
                i.sufferAtk({
                    skillSpecialitys: [],
                    atk: this.atk
                });
                var o = {
                    id: -1,
                    type: $enemyStatus.EnemyDebuffType.BURN,
                    timeLeft: $gameContext.default.ins.skillInfo.robotParam[4],
                    value: this.brunAtk
                };
                i.sufferDebuff(o);
            }
        };
        e.prototype.updateFrame = function (t) {
            var e = this;
            if (!(this.timeLeft <= 0)) {
                this.timeLeft -= t;
                if (this.timeLeft <= 0) {
                    cc.tween(this.animNode)
                        .to(0.3, {
                            opacity: 0
                        })
                        .call(function () {
                            e.removeSelf();
                        })
                        .start();
                }
            }
        };
        return __decorate([p], e);
    })($baseBullet.default));
exports.default = f;
