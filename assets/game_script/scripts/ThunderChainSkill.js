var o;
exports.ThunderChainSkill = void 0;
var $skillContext = require("./SkillContext");
var $gameSkillInfo = require("./GameSkillInfo");
var a = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.releaseCount = 1;
        e.count = 0;
        e.paralysisTime = 0;
        e.speed = 0;
        e.bombAtk = [0, 0, 0, 1];
        e.bombRange = 0;
        e.bombParalysisTime = 0;
        e.releaseProbability = 0;
        e.killCount = 0;
        e.hitStun = [];
        e.adsorb = 0;
        e.adsorbSize = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.chooseSkill = function (t) {
        153 === t.id
            ? ((this.count = $skillContext.default.Ins.getBounceCount(t)),
              (this.skillCD[$gameSkillInfo.Skill4Param.BASIC] = $skillContext.default.Ins.getSkillCD(t)),
              (this.paralysisTime = t.add_sx[2]),
              (this.speed = t.add_sx[3]),
              (this.skillAtkRange[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[4]),
              (this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] = $skillContext.default.Ins.getBasicAtk(t)),
              this.caculateFinal(this.skillCD, !1),
              this.caculateFinal(this.skillAtkRange),
              this.caculateFinal(this.skillAtk))
            : 154 === t.id
            ? this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD)
            : 155 === t.id
            ? (this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD),
              (this.paralysisTime += t.add_sx[1]))
            : 156 === t.id
            ? (this.releaseCount += t.add_sx[0])
            : 157 === t.id
            ? (this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD),
              (this.count += t.add_sx[1]))
            : 158 === t.id
            ? ((this.bombAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[0])),
              this.caculateFinal(this.bombAtk),
              (this.bombRange = t.add_sx[1]))
            : 159 === t.id
            ? (this.updateAndCalculate(this.bombAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD),
              (this.bombParalysisTime += t.add_sx[1]))
            : 161 === t.id
            ? this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD)
            : 162 === t.id
            ? (this.releaseProbability += t.add_sx[0])
            : 163 === t.id
            ? (this.killCount += t.add_sx[0])
            : 170 === t.id && ((this.adsorb = t.add_sx[0]), (this.adsorbSize = t.add_sx[1]));
    };
    e.prototype.toString = function () {
        return (
            t.prototype.toString.call(this) +
            "\n        释放次数:" +
            this.releaseCount +
            "\n        弹射次数:" +
            this.count +
            "\n        麻痹时间:" +
            this.paralysisTime +
            "\n        速度:" +
            this.speed +
            "\n        爆炸伤害:" +
            this.bombAtk +
            "\n        爆炸范围:" +
            this.bombRange +
            "\n        爆炸麻痹时间:" +
            this.bombParalysisTime +
            "\n        再次释放概率:" +
            this.releaseProbability +
            "\n        击杀后弹射次数:" +
            this.killCount +
            "\n        命中眩晕敌人buff[时间，伤害]:" +
            this.hitStun +
            "\n        牵引力:" +
            this.adsorb +
            "\n        牵引力大小:" +
            this.adsorbSize +
            "\n        "
        );
    };
    return e;
})(require("./BaseSkill").BaseSkill);
exports.ThunderChainSkill = a;
