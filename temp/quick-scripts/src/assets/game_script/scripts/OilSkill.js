"use strict";
cc._RF.push(module, '5165b14cVNIK4b5hbq5bjcu', 'OilSkill');
// game_script/scripts/OilSkill.js

"use strict";

var o;
exports.OilSkill = void 0;

var $skillContext = require("./SkillContext");

var $gameSkillInfo = require("./GameSkillInfo");

var a = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.oilSpeed = 0;
    e.oilBack = 0;
    e.oilBoomRange = 0;
    e.oilBurnAtk = [0, 0, 0, 1];
    e.oilBurnTime = 0;
    e.oilBurnAreaRange = [0, 0, 0, 1];
    e.oilBurnAreaAtk = [0, 0, 0, 1];
    e.oilBurnAreaTime = 0;
    e.oilBurnAreaInterval = 0;
    e.oilCount = 0;
    e.oilBurnAreaSlow = 0;
    e.oilSkin = 1;
    e.oilBurnAreaBoomAtk = 0;
    e.oilBurnAreaBoomRange = 0;
    e.oilBurnAreaAtkNo = !1;
    e.oilAllAtkAdd = 0;
    e.oilLiftAtkAdd = 0;
    e.oilNoRecover = !1;
    e.oilExtraSend = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.chooseSkill = function (t) {
    227 === t.id ? (this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] = $skillContext["default"].Ins.getSKillAtk(t), this.oilSpeed = t.add_sx[0], this.oilBoomRange = $skillContext["default"].Ins.getBoomRange(t), this.oilBack = t.add_sx[2], this.skillCD[$gameSkillInfo.Skill4Param.BASIC] = $skillContext["default"].Ins.getSkillCD(t), this.skillAtkRange[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[4], this.oilBurnAreaRange[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[6], this.oilBurnAreaAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[7]), this.oilBurnAreaTime = t.add_sx[8], this.oilBurnTime = t.add_sx[9], this.oilBurnAtk[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[10], this.oilBurnAreaInterval = t.add_sx[11], this.caculateFinal(this.skillAtk), this.caculateFinal(this.skillCD, !1), this.caculateFinal(this.skillAtkRange), this.caculateFinal(this.oilBurnAreaRange), this.caculateFinal(this.oilBurnAreaAtk), this.caculateFinal(this.oilBurnAtk)) : 228 === t.id ? this.updateAndCalculate(this.oilBurnAreaAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD) : 229 === t.id ? (this.updateAndCalculate(this.oilBurnAreaRange, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD), this.updateAndCalculate(this.oilBurnAreaAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC)) : 230 === t.id ? this.updateAndCalculate(this.oilBurnAreaAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD) : 231 === t.id ? this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD) : 232 === t.id ? this.oilNoRecover = !0 : 233 === t.id ? this.oilExtraSend = !0 : 234 === t.id ? this.updateAndCalculate(this.oilBurnAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD) : 235 === t.id ? (this.oilCount += t.add_sx[0], this.updateAndCalculate(this.oilBurnAreaAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC)) : 236 === t.id ? (this.updateAndCalculate(this.skillCD, t.add_sx[0], $gameSkillInfo.Skill4Param.DEC, !1), this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC), this.updateAndCalculate(this.oilBurnAreaAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC)) : 236 === t.id ? (this.updateAndCalculate(this.skillCD, t.add_sx[0], $gameSkillInfo.Skill4Param.DEC, !1), this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC), this.updateAndCalculate(this.oilBurnAreaAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC), this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC), this.updateAndCalculate(this.oilBurnAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC)) : 238 === t.id ? this.oilBurnAreaSlow += t.add_sx[0] : 239 === t.id ? (this.oilSkin = 1, this.updateAndCalculate(this.oilBurnAreaAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD), this.updateAndCalculate(this.oilBurnAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.ADD)) : 243 === t.id ? (this.oilBurnAreaBoomAtk = this.getBasicAtk(t.add_sx[0]), this.oilBurnAreaBoomRange += t.add_sx[1]) : 244 === t.id ? this.oilBurnAreaAtkNo = !0 : 245 === t.id ? this.oilAllAtkAdd += t.add_sx[0] : 246 === t.id && (this.oilLiftAtkAdd += t.add_sx[0]);
  };

  e.prototype.toString = function () {
    return t.prototype.toString.call(this) + "\n            燃油弹技能速度:" + this.oilSpeed + "\n            燃油弹击退像素:" + this.oilBack + "\n            燃油弹爆炸范围:" + this.oilBoomRange + "\n            燃油弹燃烧伤害:" + this.oilBurnAtk + "\n            燃油弹燃烧时间:" + this.oilBurnTime + "\n            燃油弹灼烧区域范围:" + this.oilBurnAreaRange + "\n            燃油弹灼烧区域伤害:" + this.oilBurnAreaAtk + "\n            燃油弹灼烧区域持续时间:" + this.oilBurnAreaTime + "\n            燃烧伤害间隔:" + this.oilBurnAreaInterval + "\n            燃油弹释放次数:" + this.oilCount + "\n            燃油弹灼烧减速:" + this.oilBurnAreaSlow + "\n            燃油弹皮肤:" + this.oilSkin + "\n            燃油弹灼烧结束爆炸:" + this.oilBurnAreaBoomAtk + "\n            燃油弹灼烧结束爆炸范围:" + this.oilBurnAreaBoomRange + "\n            燃油弹无强化灼烧区域:" + this.oilBurnAreaAtkNo + "\n            燃油弹使敌人内伤加成:" + this.oilAllAtkAdd + "\n            燃油弹追加声明百分比伤害:" + this.oilLiftAtkAdd + "\n            燃油弹敌人无法恢复:" + this.oilNoRecover + "\n            燃油弹额外弹射:" + this.oilExtraSend + "\n        ";
  };

  return e;
}(require("./BaseSkill").BaseSkill);

exports.OilSkill = a;

cc._RF.pop();