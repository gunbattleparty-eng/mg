var o;
exports.ThunderSkill = void 0;
var $skillContext = require("./SkillContext");
var $gameSkillInfo = require("./GameSkillInfo");
var a = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.thunderComboCount = 0;
        e.thunderParalysisTime = 0;
        e.thunderSplitCount = 0;
        e.thunderSplitAtk = [0, 0, 0, 1];
        e.thunderSplitSpeed = [0, 0, 0, 1];
        e.thunderSplitParalysisTime = 0;
        e.thunderBoomRangeAdd = 0;
        e.thunderBoomAtk = [0, 0, 0, 1];
        e.thunderExtraAtkRange = 0;
        e.thunderExtraAtkCount = 0;
        e.thunderPierceCount = 1;
        e.thunderPierceAtk = [0, 0, 0, 1];
        e.thunderPierceRange = 300;
        e.thunderMatrixRange = 0;
        e.thunderMatrixAtk = [0, 0, 0, 1];
        e.thunderMatrixSpeedSlow = 0;
        e.thunderMatrixSpeedSlowTime = 0;
        e.thunderMatrixTime = 0;
        e.thunderMatrixAtkInterval = 0;
        e.isThunderCloseAtkAdd = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.chooseSkill = function (t) {
        61 === t.id
            ? ((this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] = $skillContext.default.Ins.getSKillAtk(t)),
              (this.skillAtkRange[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[0]),
              (this.skillCD[$gameSkillInfo.Skill4Param.BASIC] = $skillContext.default.Ins.getSkillCD(t)),
              (this.thunderParalysisTime = t.add_sx[2]),
              (this.thunderPierceAtk[$gameSkillInfo.Skill4Param.BASIC] = $skillContext.default.Ins.getSputteringAtk(t)),
              (this.thunderPierceRange = t.add_sx[4]),
              this.caculateFinal(this.skillAtkRange),
              this.caculateFinal(this.skillCD, !1),
              this.caculateFinal(this.thunderPierceAtk),
              this.caculateFinal(this.skillAtk))
            : 62 === t.id
            ? ((this.thunderComboCount += t.add_sx[0]),
              this.isThunderCloseAtkAdd ||
                  this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC))
            : 63 === t.id
            ? this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD)
            : 64 === t.id
            ? (this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD),
              (this.thunderParalysisTime += t.add_sx[1]))
            : 65 === t.id
            ? ((this.thunderSplitCount += t.add_sx[0]),
              (this.thunderSplitAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[1])),
              (this.thunderSplitSpeed[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[2]),
              this.caculateFinal(this.thunderSplitAtk),
              this.caculateFinal(this.thunderSplitSpeed))
            : 66 === t.id
            ? ((this.thunderBoomRangeAdd += t.add_sx[0]),
              (this.thunderBoomAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[1])),
              this.caculateFinal(this.thunderBoomAtk))
            : 67 === t.id
            ? (this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD),
              (this.thunderExtraAtkCount += t.add_sx[1]),
              (this.thunderExtraAtkRange += t.add_sx[2]))
            : 68 === t.id
            ? this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD)
            : 69 === t.id
            ? this.updateAndCalculate(this.skillCD, t.add_sx[0], $gameSkillInfo.Skill4Param.DEC, !1)
            : 71 === t.id
            ? (this.updateAndCalculate(this.thunderSplitAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD),
              (this.thunderSplitParalysisTime += t.add_sx[1]))
            : 72 === t.id
            ? ((this.thunderMatrixRange += t.add_sx[0]),
              (this.thunderMatrixAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[1])),
              (this.thunderMatrixTime += t.add_sx[2]),
              (this.thunderMatrixSpeedSlow += t.add_sx[3]),
              (this.thunderMatrixSpeedSlowTime += t.add_sx[4]),
              (this.thunderMatrixAtkInterval += t.add_sx[5]),
              this.caculateFinal(this.thunderMatrixAtk))
            : 73 === t.id
            ? this.updateAndCalculate(this.thunderSplitAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD)
            : 76 === t.id
            ? (this.isThunderCloseAtkAdd = !0)
            : (123 === t.id || 161 === t.id) &&
              this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD);
    };
    e.prototype.toString = function () {
        return (
            t.prototype.toString.call(this) +
            "\n        雷电攻击次数：" +
            this.thunderComboCount +
            "\n        麻痹时间：" +
            this.thunderParalysisTime +
            "\n        雷电电粒子数量：" +
            this.thunderSplitCount +
            "\n        雷电粒子伤害：" +
            this.thunderSplitAtk +
            "\n        雷电粒子速度：" +
            this.thunderSplitSpeed +
            "\n        雷电粒子麻痹时间：" +
            this.thunderSplitParalysisTime +
            "\n        雷电爆炸范围加成：" +
            this.thunderBoomRangeAdd +
            "\n        雷电爆炸伤害：" +
            this.thunderBoomAtk +
            "\n        击杀额外产生雷电探测范围：" +
            this.thunderExtraAtkRange +
            "\n        击杀额外产生雷电释放次数：" +
            this.thunderExtraAtkCount +
            "\n        雷电穿刺次数：" +
            this.thunderPierceCount +
            "\n        雷电穿刺伤害：" +
            this.thunderPierceAtk +
            "\n        雷电穿刺范围：" +
            this.thunderPierceRange +
            "\n        电磁矩阵伤害范围:" +
            this.thunderMatrixRange +
            "\n        电磁矩阵伤害：" +
            this.thunderMatrixAtk +
            "\n        电磁矩阵时间：" +
            this.thunderMatrixTime +
            "\n        电磁矩阵速度减缓：" +
            this.thunderMatrixSpeedSlow +
            "\n        电磁矩阵速度减缓时间：" +
            this.thunderMatrixSpeedSlowTime +
            "\n        电磁矩阵伤害间隔：" +
            this.thunderMatrixAtkInterval +
            "\n        电磁分流不降低伤害:" +
            this.isThunderCloseAtkAdd +
            "\n        "
        );
    };
    return e;
})(require("./BaseSkill").BaseSkill);
exports.ThunderSkill = a;
