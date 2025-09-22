exports.BaseSkill = void 0;
var $gameSkillInfo = require("./GameSkillInfo");
var n = (function () {
    function t() {
        this.chooseCount = 0;
        this.skillAtk = [0, 0, 0, 1];
        this.skillAtkRange = [0, 0, 0, 1];
        this.skillCD = [0, 0, 0, 1];
    }
    t.prototype.caculateFinal = function (t, e) {
        if (void 0 === e) {
            e = !0;
        }
        t[$gameSkillInfo.Skill4Param.FINAL] =
            t[$gameSkillInfo.Skill4Param.BASIC] *
            t[$gameSkillInfo.Skill4Param.DEC] *
            (1 + t[$gameSkillInfo.Skill4Param.ADD]);
        if (e) {
            t[$gameSkillInfo.Skill4Param.FINAL] = Math.ceil(t[$gameSkillInfo.Skill4Param.FINAL]);
        }
    };
    t.prototype.updateAndCalculate = function (t, e, i, n) {
        if (void 0 === n) {
            n = !0;
        }
        i === $gameSkillInfo.Skill4Param.ADD
            ? (t[$gameSkillInfo.Skill4Param.ADD] += e)
            : i === $gameSkillInfo.Skill4Param.DEC && (t[$gameSkillInfo.Skill4Param.DEC] *= 1 + e);
        this.caculateFinal(t, n);
    };
    t.prototype.getBasicAtk = function (t) {
        return Math.ceil(this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] * (1 + t));
    };
    t.prototype.toString = function () {
        return (
            "\n        技能伤害:" +
            this.skillAtk +
            "\n        技能攻击范围:" +
            this.skillAtkRange +
            "\n        技能cd:" +
            this.skillCD +
            "\n        "
        );
    };
    return t;
})();
exports.BaseSkill = n;
