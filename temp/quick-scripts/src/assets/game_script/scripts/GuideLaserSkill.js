"use strict";
cc._RF.push(module, '0782fJDidVHlaOwhvptNKTH', 'GuideLaserSkill');
// game_script/scripts/GuideLaserSkill.js

"use strict";

var o;
exports.GuideLaserSkill = void 0;

var $skillContext = require("./SkillContext");

var $gameSkillInfo = require("./GameSkillInfo");

var a = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.guideLaserSpeed = 0;
    e.guideLaserTime = 0;
    e.guideLaserAtkInterval = 0;
    e.guideLaserRefractRange = 0;
    e.guideLaserRefractCount = 1;
    e.guideLaserMaserAtk = [0, 0, 0, 1];
    e.guideLaserBoomAtk = [0, 0, 0, 1];
    e.guideLaserBoomRange = 0;
    e.guideLaserIsThunder = !1;
    e.guideLaserThunderAtk = [0, 0, 0, 1];
    e.guideLaserWidth = 1;
    e.guideLaserBurnAtk = [0, 0, 0, 1];
    e.guideLaserBurnTime = 0;
    e.guideLaserContinueAtk = 0;
    e.guideLaserBack = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.chooseSkill = function (t) {
    116 === t.id ? (this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] = $skillContext["default"].Ins.getSKillAtk(t), this.skillCD[$gameSkillInfo.Skill4Param.BASIC] = $skillContext["default"].Ins.getSkillCD(t), this.guideLaserTime = t.add_sx[1], this.guideLaserAtkInterval = t.add_sx[2], this.skillAtkRange[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[4], this.guideLaserRefractRange = t.add_sx[6], this.guideLaserSpeed = t.add_sx[0], this.guideLaserMaserAtk[$gameSkillInfo.Skill4Param.BASIC] = this.skillAtk[$gameSkillInfo.Skill4Param.BASIC], this.caculateFinal(this.skillAtk), this.caculateFinal(this.skillCD, !1), this.caculateFinal(this.skillAtkRange), this.caculateFinal(this.guideLaserMaserAtk)) : 117 === t.id ? (this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD), this.updateAndCalculate(this.guideLaserMaserAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD)) : 118 === t.id ? this.updateAndCalculate(this.guideLaserMaserAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD) : 119 === t.id ? (this.guideLaserBoomAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[0]), this.caculateFinal(this.guideLaserBoomAtk), this.guideLaserBoomRange += t.add_sx[1]) : 120 === t.id ? this.updateAndCalculate(this.guideLaserMaserAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD) : 121 === t.id ? this.guideLaserRefractCount += t.add_sx[0] : 122 === t.id || 134 === t.id ? this.guideLaserTime += Math.ceil(t.add_sx[0] * this.guideLaserAtkInterval) : 123 === t.id ? this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD) : 124 === t.id ? (this.guideLaserThunderAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[0]), this.guideLaserIsThunder = !0) : 125 === t.id ? (this.updateAndCalculate(this.skillCD, t.add_sx[0], $gameSkillInfo.Skill4Param.DEC, !1), this.guideLaserWidth += t.add_sx[1]) : 126 === t.id ? this.guideLaserContinueAtk += t.add_sx[0] : 130 === t.id ? (this.skillAtkRange[$gameSkillInfo.Skill4Param.BASIC] += t.add_sx[0], this.caculateFinal(this.skillAtkRange)) : 132 === t.id ? (this.updateAndCalculate(this.guideLaserBurnAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.ADD), this.guideLaserBurnTime += t.add_sx[1]) : 133 === t.id && (this.guideLaserBack += t.add_sx[0]);
  };

  e.prototype.addGuideLaserAtkAdd = function () {
    if (!(this.guideLaserContinueAtk <= 0)) {
      this.updateAndCalculate(this.skillAtk, this.guideLaserContinueAtk, $gameSkillInfo.Skill4Param.ADD);
    }
  };

  e.prototype.toString = function () {
    return t.prototype.toString.call(this) + "\n        制导激光速:" + this.guideLaserSpeed + "\n        制导激光持续时间: " + this.guideLaserTime + "\n        制导激光攻击间隔: " + this.guideLaserAtkInterval + "\n        制导激光折射范围: " + this.guideLaserRefractRange + "\n        制导激光折射次数: " + this.guideLaserRefractCount + "\n        制导激光主目标伤害: " + this.guideLaserMaserAtk + "\n        制导激光爆炸伤害: " + this.guideLaserBoomAtk + "\n        制导激光爆炸范围: " + this.guideLaserBoomRange + "\n        制导激光是否触发磁暴闪电: " + this.guideLaserIsThunder + "\n        制导激光触发磁暴闪电伤害: " + this.guideLaserThunderAtk + "\n        制导激光宽度: " + this.guideLaserWidth + "\n        制导激光燃烧伤害: " + this.guideLaserBurnAtk + "\n        制导激光燃烧时间: " + this.guideLaserBurnTime + "\n        制导激光开始后续伤害叠加: " + this.guideLaserContinueAtk + "\n        制导激光击退敌人像素: " + this.guideLaserBack + "\n        ";
  };

  return e;
}(require("./BaseSkill").BaseSkill);

exports.GuideLaserSkill = a;

cc._RF.pop();