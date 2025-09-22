var o;
exports.IceBombSkill = void 0;
var $skillContext = require("./SkillContext");
var $gameSkillInfo = require("./GameSkillInfo");
var a = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.iceBoomAtkRange = 1;
        e.iceBoomSlowAdd = 0;
        e.iceBoomSlowTime = 0;
        e.iceBoomAtkInterval = 0;
        e.iceBoomTime = [0, 0, 0, 1];
        e.iceBoomCount = 1;
        e.iceBoomBoomAtk = [0, 0, 0, 1];
        e.iceBoomBoomRange = 1;
        e.iceBoomFreezeTime = 0;
        e.iceBoomAdsorb = 0;
        e.iceBoomSplitCount = 0;
        e.iceBoomSplitAtk = [0, 0, 0, 1];
        e.iceBoomSplitFreezeTime = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.chooseSkill = function (t) {
        135 === t.id
            ? ((this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] = $skillContext.default.Ins.getSKillAtk(t)),
              (this.skillAtkRange[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[0]),
              (this.iceBoomAtkRange = t.add_sx[1]),
              (this.iceBoomSlowAdd = t.add_sx[2]),
              (this.skillCD[$gameSkillInfo.Skill4Param.BASIC] = $skillContext.default.Ins.getSkillCD(t)),
              (this.iceBoomAtkInterval = t.add_sx[4]),
              (this.iceBoomTime[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[6]),
              (this.iceBoomSlowTime = this.iceBoomTime[$gameSkillInfo.Skill4Param.BASIC]),
              this.caculateFinal(this.skillAtkRange),
              this.caculateFinal(this.skillCD, !1),
              this.caculateFinal(this.skillAtk),
              this.caculateFinal(this.iceBoomTime, !1))
            : 136 === t.id
            ? this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD)
            : 137 === t.id
            ? (this.iceBoomAtkRange += t.add_sx[0])
            : 138 === t.id
            ? ((this.iceBoomTime[$gameSkillInfo.Skill4Param.BASIC] += t.add_sx[0]),
              this.caculateFinal(this.iceBoomTime, !1),
              this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC))
            : 139 === t.id
            ? (this.iceBoomCount += 1)
            : 140 === t.id
            ? ((this.iceBoomBoomAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[0])),
              this.caculateFinal(this.iceBoomBoomAtk),
              (this.iceBoomBoomRange = t.add_sx[1]))
            : 141 === t.id
            ? (this.iceBoomAdsorb += t.add_sx[0])
            : 142 === t.id
            ? this.updateAndCalculate(this.skillCD, t.add_sx[0], $gameSkillInfo.Skill4Param.DEC, !1)
            : 143 === t.id
            ? this.updateAndCalculate(this.iceBoomBoomAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD)
            : 144 === t.id
            ? (this.iceBoomSlowTime *= 2)
            : 145 === t.id
            ? ((this.iceBoomSplitCount += t.add_sx[0]),
              (this.iceBoomSplitAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[1])),
              this.caculateFinal(this.iceBoomSplitAtk))
            : 147 === t.id
            ? (this.iceBoomFreezeTime += t.add_sx[0])
            : 148 === t.id
            ? (this.iceBoomSplitFreezeTime += t.add_sx[0])
            : 150 === t.id && (this.iceBoomSlowAdd += t.add_sx[0]);
    };
    e.prototype.toString = function () {
        return (
            t.prototype.toString.call(this) +
            "\n            冰爆攻击最终范围:" +
            this.iceBoomAtkRange +
            "\n            冰爆减速系数:" +
            this.iceBoomSlowAdd +
            "\n            冰爆减速时间:" +
            this.iceBoomSlowTime +
            "\n            冰爆攻击间隔:" +
            this.iceBoomAtkInterval +
            "\n            冰爆持续时间:" +
            this.iceBoomTime +
            "\n            冰爆释放次数:" +
            this.iceBoomCount +
            "\n            冰爆爆炸伤害:" +
            this.iceBoomBoomAtk +
            "\n            冰爆爆炸范围:" +
            this.iceBoomBoomRange +
            "\n            冰爆冻结时间:" +
            this.iceBoomFreezeTime +
            "\n            冰爆吸附力:" +
            this.iceBoomAdsorb +
            "\n            冰爆分裂数量:" +
            this.iceBoomSplitCount +
            "\n            冰爆分裂伤害:" +
            this.iceBoomSplitAtk +
            "\n            冰爆分裂冻结时间:" +
            this.iceBoomSplitFreezeTime +
            "\n        "
        );
    };
    return e;
})(require("./BaseSkill").BaseSkill);
exports.IceBombSkill = a;
