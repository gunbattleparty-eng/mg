"use strict";
cc._RF.push(module, '21fb6w8BCpKu5BlJ5rFligt', 'CarSkill');
// game_script/scripts/CarSkill.js

"use strict";

var o;
exports.CarSkill = void 0;

var $skillContext = require("./SkillContext");

var $gameSkillInfo = require("./GameSkillInfo");

var a = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.carAtkInterval = 0;
    e.carSpeed = [0, 0, 0, 1];
    e.carBack = [0, 0, 0, 1];
    e.carSlowAdd = 0;
    e.carSlowTime = 0;
    e.carRange = 0;
    e.carComboCount = 0;
    e.carComboTime = 0;
    e.carBurnTime = 0;
    e.carBurnAtk = [0, 0, 0, 1];
    e.carStunParam = [];
    e.carEnemyAtkAddParam = [];
    e.isCarCloseComboAtkAdd = !1;
    e.carBurnAdd = 0;
    e.carSuffFreezeAdd = 0;
    e.carSkin = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.chooseSkill = function (t) {
    81 === t.id ? (this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] = $skillContext["default"].Ins.getSKillAtk(t), this.carRange += t.add_sx[0], this.carAtkInterval = $skillContext["default"].Ins.getAtkInterval(t), this.skillCD[$gameSkillInfo.Skill4Param.BASIC] = $skillContext["default"].Ins.getSkillCD(t), this.carBack[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[3], this.carSlowAdd = t.add_sx[4], this.carSpeed[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[5], this.skillAtkRange[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[6], this.carSlowTime = t.add_sx[8], this.carComboTime = t.add_sx[9], this.carComboCount += 1, this.caculateFinal(this.skillCD, !1), this.caculateFinal(this.carBack), this.caculateFinal(this.carSpeed), this.caculateFinal(this.skillAtkRange), this.caculateFinal(this.skillAtk)) : 82 === t.id ? this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD) : 83 === t.id ? (this.carComboCount += t.add_sx[0], this.isCarCloseComboAtkAdd || this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC)) : 84 === t.id ? (this.updateAndCalculate(this.carBack, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD), this.carStunParam.push([t.add_sx[1], t.add_sx[2]])) : 85 === t.id ? (this.updateAndCalculate(this.carSpeed, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD), this.updateAndCalculate(this.skillCD, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC, !1)) : 86 === t.id || 87 === t.id ? (87 === t.id && (this.carSkin = 1), this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD), this.updateAndCalculate(this.carBack, t.add_sx[1], $gameSkillInfo.Skill4Param.ADD)) : 88 === t.id ? (this.carSkin = 2, this.carBurnTime += t.add_sx[0], this.carBurnAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[1]), this.caculateFinal(this.carBurnAtk)) : 89 === t.id ? this.carComboCount += t.add_sx[0] : 90 === t.id ? this.carSlowTime += t.add_sx[0] : 91 === t.id ? this.carEnemyAtkAddParam.push([t.add_sx[0], t.add_sx[1]]) : 92 === t.id ? this.carSkin = 3 : 94 === t.id ? this.isCarCloseComboAtkAdd = !0 : 96 === t.id ? this.carBurnAdd += t.add_sx[0] : 97 === t.id ? this.carStunParam.push([t.add_sx[0], t.add_sx[1]]) : 99 === t.id && (this.carSuffFreezeAdd += t.add_sx[0]);
  };

  e.prototype.toString = function () {
    return t.prototype.toString.call(this) + "\n            车攻击间隔:" + this.carAtkInterval + "\n            车移动速度:" + this.carSpeed + "\n            车基础击退像素:" + this.carBack + "\n            车减速系数:" + this.carSlowAdd + "\n            车减速持续时间:" + this.carSlowTime + "\n            车宽度:" + this.carRange + "\n            车连击次数:" + this.carComboCount + "\n            车连发间隔:" + this.carComboTime + "\n            车燃烧时间:" + this.carBurnTime + "\n            车燃烧伤害:" + this.carBurnAtk + "\n            车眩晕参数:" + this.carStunParam + "\n            车对怪物伤害加成:" + this.carEnemyAtkAddParam + "\n            连续出击不在降低伤害:" + this.isCarCloseComboAtkAdd + "\n            车燃烧追加敌人最大生命:" + this.carBurnAdd + "\n            车对冰冻敌人加成:" + this.carSuffFreezeAdd + "\n            车皮肤:" + this.carSkin + "\n        ";
  };

  return e;
}(require("./BaseSkill").BaseSkill);

exports.CarSkill = a;

cc._RF.pop();