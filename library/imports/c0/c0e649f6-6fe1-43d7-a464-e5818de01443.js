"use strict";
cc._RF.push(module, 'c0e64n2b+FD16Rk5YGN4BRD', 'PulseLaserSkill');
// game_script/scripts/PulseLaserSkill.js

"use strict";

var o;
exports.PulseLaserSkill = void 0;

var $skillContext = require("./SkillContext");

var $gameSkillInfo = require("./GameSkillInfo");

var a = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.pulseLaserAtkInterval = [0, 0, 0, 1];
    e.pulseLaserTime = 0;
    e.pulseLaserWidthAdd = 0;
    e.pulseLaserSlowTime = 0;
    e.pulseLaserSlowAdd = 0;
    e.pulseLaserSweepCount = 0;
    e.pulseLaserCount = 1;
    e.pulseLaserEnemyAtkAddParam = [];
    e.pulseLaserEnemySplit = !1;
    e.pulseLaserBack = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.chooseSkill = function (t) {
    100 === t.id ? (this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] = $skillContext["default"].Ins.getSKillAtk(t), this.pulseLaserWidthAdd += t.add_sx[0], this.pulseLaserTime = $skillContext["default"].Ins.getSkillTime(t), this.pulseLaserAtkInterval[$gameSkillInfo.Skill4Param.BASIC] = $skillContext["default"].Ins.getAtkInterval(t), this.skillCD[$gameSkillInfo.Skill4Param.BASIC] = $skillContext["default"].Ins.getSkillCD(t), this.skillAtkRange[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[4], this.caculateFinal(this.pulseLaserAtkInterval), this.caculateFinal(this.skillCD, !1), this.caculateFinal(this.skillAtkRange), this.caculateFinal(this.skillAtk)) : 101 === t.id ? this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD) : 102 === t.id ? (this.pulseLaserSlowTime += t.add_sx[0], this.pulseLaserSlowAdd += t.add_sx[1]) : 103 === t.id ? (this.updateAndCalculate(this.skillCD, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD, !1), this.updateAndCalculate(this.pulseLaserAtkInterval, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC, !1)) : 104 === t.id ? (this.pulseLaserCount += 1, this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.DEC)) : 105 === t.id ? (this.pulseLaserWidthAdd += t.add_sx[0], this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.ADD)) : 106 === t.id ? (this.pulseLaserSweepCount = 1, this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.DEC)) : 107 === t.id ? this.pulseLaserTime += t.add_sx[0] : 108 === t.id ? this.pulseLaserEnemyAtkAddParam.push([t.add_sx[0], t.add_sx[1]]) : 110 === t.id ? this.pulseLaserEnemySplit = !0 : 112 === t.id ? this.pulseLaserBack = t.add_sx[0] : 114 === t.id && (this.pulseLaserSweepCount += 1);
  };

  e.prototype.toString = function () {
    return t.prototype.toString.call(this) + "\n            脉冲激光攻击间隔:" + this.pulseLaserAtkInterval + "\n            脉冲激光最终持续时间:" + this.pulseLaserTime + "\n            脉冲激光宽度加成:" + this.pulseLaserWidthAdd + "\n            脉冲激光减速时间:" + this.pulseLaserSlowTime + "\n            脉冲激光减速加成:" + this.pulseLaserSlowAdd + "\n            脉冲激光扫荡次数:" + this.pulseLaserSweepCount + "\n            脉冲激光条数:" + this.pulseLaserCount + "\n            脉冲激光对怪物伤害加成:" + this.pulseLaserEnemyAtkAddParam + "\n            脉冲激光怪物无法分裂:" + this.pulseLaserEnemySplit + "\n            脉冲激光最终击退像素:" + this.pulseLaserBack + "\n        ";
  };

  return e;
}(require("./BaseSkill").BaseSkill);

exports.PulseLaserSkill = a;

cc._RF.pop();