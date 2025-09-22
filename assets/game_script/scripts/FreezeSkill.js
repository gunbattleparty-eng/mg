var o;
exports.FreezeSkill = void 0;
var $skillContext = require("./SkillContext");
var $gameSkillInfo = require("./GameSkillInfo");
var a = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.freezeBack = [0, 0, 0, 1];
        e.freezeSpeed = [0, 0, 0, 1];
        e.freezePenetrateLayer = 1;
        e.freezeComboCount = 0;
        e.freezeTime = 0;
        e.freezeSplitTime = 0;
        e.freezeSplitCount = 0;
        e.freezeSplitAtk = [0, 0, 0, 1];
        e.freezeEnemyAtkAddParam = [];
        e.isFreezeCloseComboAtk = !1;
        e.freezeSuffParalysisAdd = 0;
        e.freezeIsReflect = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.chooseSkill = function (t) {
        41 === t.id
            ? ((this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] = $skillContext.default.Ins.getSKillAtk(t)),
              (this.freezePenetrateLayer += t.add_sx[0]),
              (this.skillCD[$gameSkillInfo.Skill4Param.BASIC] = $skillContext.default.Ins.getSkillCD(t)),
              (this.freezeBack[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[2]),
              (this.freezeSpeed[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[3]),
              (this.skillAtkRange[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[4]),
              this.caculateFinal(this.skillCD, !1),
              this.caculateFinal(this.freezeBack),
              this.caculateFinal(this.freezeSpeed),
              this.caculateFinal(this.skillAtkRange),
              this.caculateFinal(this.skillAtk))
            : 42 === t.id
            ? this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD)
            : 43 === t.id
            ? (this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD),
              (this.freezePenetrateLayer += t.add_sx[1]))
            : 44 === t.id
            ? ((this.freezeComboCount += t.add_sx[0]),
              this.isFreezeCloseComboAtk ||
                  this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC))
            : 45 === t.id
            ? ((this.freezeSplitCount += t.add_sx[0]),
              (this.freezeSplitAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[1])),
              this.caculateFinal(this.freezeSplitAtk),
              (this.freezeSplitTime += t.add_sx[2]))
            : 46 === t.id
            ? this.updateAndCalculate(this.freezeSplitAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD)
            : 47 === t.id
            ? (this.updateAndCalculate(this.freezeBack, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD),
              (this.freezePenetrateLayer += t.add_sx[1]))
            : 48 === t.id
            ? (this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD),
              (this.freezeTime += t.add_sx[1]))
            : 49 === t.id
            ? this.freezeEnemyAtkAddParam.push([t.add_sx[0], t.add_sx[1]])
            : 51 === t.id
            ? (this.freezeComboCount += t.add_sx[0])
            : 52 === t.id
            ? (this.updateAndCalculate(this.freezeSpeed, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD),
              this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.ADD),
              (this.freezePenetrateLayer += t.add_sx[2]))
            : 53 === t.id
            ? (this.freezeSplitTime += t.add_sx[0])
            : 54 === t.id
            ? (this.isFreezeCloseComboAtk = !0)
            : 57 === t.id
            ? (this.freezeSuffParalysisAdd += t.add_sx[0])
            : 58 === t.id
            ? (this.freezeIsReflect = !0)
            : 60 === t.id
            ? (this.freezePenetrateLayer += t.add_sx[0])
            : 142 === t.id && this.updateAndCalculate(this.skillCD, t.add_sx[0], $gameSkillInfo.Skill4Param.DEC, !1);
    };
    e.prototype.toString = function () {
        return (
            t.prototype.toString.call(this) +
            "\n            寒冰弹击退距离:" +
            this.freezeBack +
            "\n            寒冰弹子弹最终速度:" +
            this.freezeSpeed +
            "\n            寒冰弹穿透层数:" +
            this.freezePenetrateLayer +
            "\n            寒冰弹连发数量:" +
            this.freezeComboCount +
            "\n            寒冰弹冰冻时长:" +
            this.freezeTime +
            "\n            寒冰弹分裂弹冰冻时长:" +
            this.freezeSplitTime +
            "\n            寒冰弹分裂数量:" +
            this.freezeSplitCount +
            "\n            寒冰弹分裂伤害:" +
            this.freezeSplitAtk +
            "\n            寒冰弹冻伤[[时间，概率]]:" +
            this.freezeEnemyAtkAddParam +
            "\n            寒冰弹连发取消降低伤害:" +
            this.isFreezeCloseComboAtk +
            "\n            寒冰弹对麻痹敌人加成:" +
            this.freezeSuffParalysisAdd +
            "\n            寒冰弹是否折返:" +
            this.freezeIsReflect +
            "\n        "
        );
    };
    return e;
})(require("./BaseSkill").BaseSkill);
exports.FreezeSkill = a;
