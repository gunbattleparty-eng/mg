var o;
exports.ThermobaricSkill = void 0;
var $skillContext = require("./SkillContext");
var $gameSkillInfo = require("./GameSkillInfo");
var a = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.thermobaricBoomRange = 0;
        e.thermobaricSpeed = [0, 0, 0, 1];
        e.thermobaricKnockBack = [0, 0, 0, 1];
        e.thermobaricBoomAtk = [0, 0, 0, 1];
        e.thermobaricComboCount = 0;
        e.thermobaricFireTime = 0;
        e.thermobaricFireAtk = [0, 0, 0, 1];
        e.thermobaricPenetrateLayer = 1;
        e.thermobaricSplitCount = 0;
        e.thermobaricSplitAtk = [0, 0, 0, 1];
        e.thermobaricEnemyBoomRange = 0;
        e.thermobaricEnemyBoomAtk = [0, 0, 0, 1];
        e.thermobaricStunParam = [];
        e.isAllPenetrateBoom = !1;
        e.isThermobaricCloseComboAtk = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.chooseSkill = function (t) {
        23 === t.id
            ? ((this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] = $skillContext.default.Ins.getSKillAtk(t)),
              (this.skillAtkRange[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[0]),
              (this.skillCD[$gameSkillInfo.Skill4Param.BASIC] = $skillContext.default.Ins.getSkillCD(t)),
              (this.thermobaricKnockBack[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[2]),
              (this.thermobaricBoomRange = $skillContext.default.Ins.getBoomRange(t)),
              (this.thermobaricSpeed[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[4]),
              (this.thermobaricBoomAtk[$gameSkillInfo.Skill4Param.BASIC] =
                  $skillContext.default.Ins.getSkillBoomAtk(t)),
              this.caculateFinal(this.skillAtkRange),
              this.caculateFinal(this.skillCD, !1),
              this.caculateFinal(this.thermobaricKnockBack),
              this.caculateFinal(this.thermobaricSpeed),
              this.caculateFinal(this.skillAtk),
              this.caculateFinal(this.thermobaricBoomAtk))
            : 24 === t.id
            ? ((this.thermobaricComboCount += t.add_sx[0]),
              this.isThermobaricCloseComboAtk ||
                  this.updateAndCalculate(this.thermobaricBoomAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC))
            : 25 === t.id
            ? (this.thermobaricBoomRange += t.add_sx[0])
            : 26 === t.id
            ? this.updateAndCalculate(this.thermobaricBoomAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD)
            : 27 === t.id
            ? ((this.thermobaricSplitCount += t.add_sx[0]),
              (this.thermobaricSplitAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[1])),
              this.caculateFinal(this.thermobaricSplitAtk))
            : 28 === t.id || 38 === t.id
            ? ((this.thermobaricFireAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[0])),
              (this.thermobaricFireTime += t.add_sx[1]),
              this.caculateFinal(this.thermobaricFireAtk))
            : 29 === t.id
            ? ((this.thermobaricEnemyBoomAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[0])),
              (this.thermobaricEnemyBoomRange += t.add_sx[1]),
              this.caculateFinal(this.thermobaricEnemyBoomAtk))
            : 30 === t.id
            ? ((this.isAllPenetrateBoom = !0), (this.thermobaricPenetrateLayer += t.add_sx[0]))
            : 31 === t.id
            ? (this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD),
              this.updateAndCalculate(this.skillCD, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC, !1))
            : 32 === t.id
            ? (this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD),
              this.updateAndCalculate(this.thermobaricKnockBack, t.add_sx[1], $gameSkillInfo.Skill4Param.ADD))
            : 35 === t.id
            ? (this.isThermobaricCloseComboAtk = !0)
            : 37 === t.id && this.thermobaricStunParam.push([t.add_sx[0], t.add_sx[1]]);
    };
    e.prototype.toString = function () {
        return (
            t.prototype.toString.call(this) +
            "\n        温压弹爆炸范围：" +
            this.thermobaricBoomRange +
            "\n        温压弹子弹最终速度：" +
            this.thermobaricSpeed +
            "\n        温压弹击退距离：" +
            this.thermobaricKnockBack +
            "\n        温压弹爆炸伤害：" +
            this.thermobaricBoomAtk +
            "\n        温压弹连发数量：" +
            this.thermobaricComboCount +
            "\n        温压弹火焰时长：" +
            this.thermobaricFireTime +
            "\n        温压弹火焰伤害：" +
            this.thermobaricFireAtk +
            "\n        温压弹穿透层数：" +
            this.thermobaricPenetrateLayer +
            "\n        温压弹分裂数量：" +
            this.thermobaricSplitCount +
            "\n        温压弹分裂伤害：" +
            this.thermobaricSplitAtk +
            "\n        温压弹敌人爆炸范围：" +
            this.thermobaricEnemyBoomRange +
            "\n        温压弹敌人爆炸最终伤害：" +
            this.thermobaricEnemyBoomAtk +
            "\n        温压弹眩晕参数：" +
            this.thermobaricStunParam +
            "\n        是否每次穿透触发爆炸：" +
            this.isAllPenetrateBoom +
            "\n        是否取消温压弹连发降低伤害：" +
            this.isThermobaricCloseComboAtk +
            "\n        "
        );
    };
    return e;
})(require("./BaseSkill").BaseSkill);
exports.ThermobaricSkill = a;
