var o;
var $object = require("./Object");
var $countDownUtil = require("./CountDownUtil");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $baseBullet = require("./BaseBullet");
var d = cc._decorator;
var p = d.ccclass;
var f =
    (d.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.oil_burn_area_no;
            e.leftTime = 0;
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e, i) {
            t.prototype.initButtle.call(this, e, i);
            var o = this.skillParam.oilBurnAreaRange[$gameSkillInfo.Skill4Param.BASIC];
            this.setScale(cc.v3(o, o));
            this.atk = this.skillParam.oilBurnAreaAtk[$gameSkillInfo.Skill4Param.BASIC];
            this.leftTime = this.skillParam.oilBurnAreaTime;
        };
        e.prototype.onTrigger = function (t, e) {
            if (!this.isUse && (e == $object.Trigger.enter || e == $object.Trigger.stay)) {
                var i = t.object;
                if (
                    $countDownUtil.CountDownUtil.time - i.getLastAtkTime(7) <=
                    this.skillParam.oilBurnAreaInterval / $gameContext.default.ins.gameRatio
                ) {
                    return;
                }
                i.setLastAtkTime(7, $countDownUtil.CountDownUtil.time);
                i.sufferAtk({
                    id: this.skillId,
                    skillSpecialitys: this.skillSpecialitys,
                    atk: this.atk
                });
            }
        };
        e.prototype.updateFrame = function (t) {
            if (!this.isUse) {
                this.leftTime -= t;
                if (this.leftTime <= 0) {
                    this.removeSelf();
                }
            }
        };
        return __decorate([p], e);
    })($baseBullet.default));
exports.default = f;
