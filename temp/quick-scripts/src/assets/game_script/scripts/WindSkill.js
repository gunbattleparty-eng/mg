"use strict";
cc._RF.push(module, 'b8837yLbl1ISZ/9TP+MIzoL', 'WindSkill');
// game_script/scripts/WindSkill.js

"use strict";

var o;
exports.WindSkill = void 0;

var $skillContext = require("./SkillContext");

var $gameSkillInfo = require("./GameSkillInfo");

var a = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.windBladeBasicTime = 0;
    e.windBladeTime = [0, 0, 0, 1];
    e.windBladeBack = [0, 0, 0, 1];
    e.windBladeComboCount = 0;
    e.windBladeParallelCount = 0;
    e.windBladePenetrateLayer = 1;
    e.windBladeSpeed = 0;
    e.windBladeReduceRecover = 0;
    e.windBladeReduceRecoverTime = 999;
    e.windBladeRange = 0;
    e.windBladeMulti = 0;
    e.windBladeMultiTime = 0;
    e.windBladeFreezeParam = [];
    e.windBladeFreezeBackAdd = 0;
    e.windBladeNotReduce = [!1, !1];
    e.windBladeWaveAtk = [0, 0, 0, 1];
    e.windBladeWaveFreezeTime = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.chooseSkill = function (t) {
    209 === t.id ? (this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] = $skillContext["default"].Ins.getSKillAtk(t), this.windBladeSpeed = t.add_sx[0], this.windBladePenetrateLayer = $skillContext["default"].Ins.getSkillPenetration(t), this.windBladeBack[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[2], this.skillCD[$gameSkillInfo.Skill4Param.BASIC] = $skillContext["default"].Ins.getSkillCD(t), this.skillAtkRange[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[4], this.windBladeRange = t.add_sx[6], this.windBladeReduceRecover = t.add_sx[7], this.windBladeReduceRecoverTime = 999, this.caculateFinal(this.windBladeBack), this.caculateFinal(this.skillCD, !1), this.caculateFinal(this.skillAtk), this.caculateFinal(this.skillAtkRange)) : 210 === t.id ? this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD) : 211 === t.id ? (this.updateAndCalculate(this.windBladeBack, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD), this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.ADD)) : 212 === t.id ? this.windBladePenetrateLayer += t.add_sx[0] : 213 === t.id ? (this.windBladeRange += t.add_sx[0], this.updateAndCalculate(this.skillCD, t.add_sx[1], $gameSkillInfo.Skill4Param.ADD, !1)) : 214 === t.id ? (this.windBladeParallelCount += t.add_sx[0], this.windBladeNotReduce[1] || this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC)) : 215 === t.id ? (this.windBladeComboCount += t.add_sx[0], this.windBladeNotReduce[0] || this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC)) : 217 === t.id ? (this.windBladeWaveAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[0]), this.caculateFinal(this.windBladeWaveAtk)) : 218 === t.id ? (this.updateAndCalculate(this.windBladeWaveAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD), this.windBladeWaveFreezeTime += t.add_sx[1]) : 219 === t.id ? (this.windBladeMulti += t.add_sx[0], this.windBladeMultiTime = t.add_sx[1], this.updateAndCalculate(this.skillAtk, t.add_sx[2], $gameSkillInfo.Skill4Param.DEC)) : 223 === t.id ? this.windBladeFreezeParam.push([t.add_sx[1], t.add_sx[0]]) : 224 === t.id ? this.windBladeFreezeBackAdd += t.add_sx[0] : 225 === t.id ? this.windBladeNotReduce[0] = !0 : 226 === t.id && (this.windBladeNotReduce[1] = !0);
  };

  e.prototype.toString = function () {
    return t.prototype.toString.call(this) + "\n            风刃基础持续时间: " + this.windBladeBasicTime + "\n            风刃持续时间: " + this.windBladeTime + "\n            风刃击退力: " + this.windBladeBack + "\n            风刃连发数量: " + this.windBladeComboCount + "\n            风刃并发数量: " + this.windBladeParallelCount + "\n            风刃穿透层数: " + this.windBladePenetrateLayer + "\n            风刃速度: " + this.windBladeSpeed + "\n            风刃减少恢复: " + this.windBladeReduceRecover + "\n            风刃减少恢复时间: " + this.windBladeReduceRecoverTime + "\n            风刃大小: " + this.windBladeRange + "\n            风刃多重气刃: " + this.windBladeMulti + "\n            风刃多重气刃间隔时间: " + this.windBladeMultiTime + "\n            风刃概率冰冻: " + this.windBladeFreezeParam + "\n            风刃对冰冻击退加成: " + this.windBladeFreezeBackAdd + "\n            风刃不在降低伤害标记: " + this.windBladeNotReduce + "\n            风刃风波伤害: " + this.windBladeWaveAtk + "\n            风刃风波是否冻结敌人: " + this.windBladeWaveFreezeTime + "\n        ";
  };

  return e;
}(require("./BaseSkill").BaseSkill);

exports.WindSkill = a;

cc._RF.pop();