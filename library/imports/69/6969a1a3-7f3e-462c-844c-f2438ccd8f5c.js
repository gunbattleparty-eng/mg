"use strict";
cc._RF.push(module, '6969aGjfz5GLIRM8kOMzY9c', 'BulletSkill');
// game_script/scripts/BulletSkill.js

"use strict";

var o;
exports.BulletSkill = void 0;

var $skillContext = require("./SkillContext");

var $gameSkillInfo = require("./GameSkillInfo");

var a = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isBulletBoom = !1;
    e.bulletBoomAtk = [0, 0, 0, 1];
    e.bulletBoomRange = 0.5;
    e.bulletCount = 0;
    e.bulletComboCount = 0;
    e.bulletParallelCount = 0;
    e.bulletPenetrateLayer = 1;
    e.bulletSpeed = 0;
    e.isOpenbulletSplit = !1;
    e.splitAtk = [0, 0, 0, 1];
    e.isFirebullet = !1;
    e.firebulletTime = 0;
    e.firebulletAtk = [0, 0, 0, 1];
    e.bulletFreezeProbability = 0;
    e.bulletFreezeTime = 0;
    e.bulletSuffFreezeAdd = 0;
    e.isCloseComboAtk = !1;
    e.isCloseParallelAtk = !1;
    e.isDoubleBullet = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.chooseSkill = function (t) {
    1 === t.id ? (this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] = $skillContext["default"].Ins.getSKillAtk(t), this.skillAtkRange[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[0], this.skillCD[$gameSkillInfo.Skill4Param.BASIC] = $skillContext["default"].Ins.getSkillCD(t), this.bulletCount += t.add_sx[3], this.bulletSpeed += t.add_sx[4], this.caculateFinal(this.skillAtkRange), this.caculateFinal(this.skillCD, !1), this.caculateFinal(this.skillAtk)) : 2 === t.id ? this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD) : 3 === t.id ? (this.bulletComboCount += t.add_sx[0], this.isDoubleBullet && (this.bulletComboCount += t.add_sx[0]), this.isCloseComboAtk || this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC)) : 4 === t.id ? (this.isOpenbulletSplit = !0, this.splitAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[0]), this.caculateFinal(this.splitAtk)) : 5 === t.id ? (this.isFirebullet = !0, this.firebulletTime = t.add_sx[0], this.firebulletAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[1]), this.caculateFinal(this.firebulletAtk)) : 6 === t.id ? (this.isBulletBoom = !0, this.bulletBoomAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[0]), this.caculateFinal(this.bulletBoomAtk)) : 7 === t.id ? this.bulletBoomRange += t.add_sx[0] : 8 === t.id ? (this.bulletPenetrateLayer += t.add_sx[0], this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC)) : 9 === t.id ? (this.bulletFreezeProbability += 100 * t.add_sx[0], this.bulletFreezeTime += t.add_sx[1]) : 10 === t.id ? (this.bulletParallelCount += t.add_sx[0], this.isCloseParallelAtk || (this.skillAtk[$gameSkillInfo.Skill4Param.DEC] *= 1 + t.add_sx[1]), this.caculateFinal(this.skillAtk)) : 11 === t.id ? this.bulletSuffFreezeAdd += t.add_sx[0] : 12 === t.id ? (this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD), this.updateAndCalculate(this.splitAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.ADD)) : 13 === t.id ? this.updateAndCalculate(this.skillCD, t.add_sx[0], $gameSkillInfo.Skill4Param.DEC, !1) : 14 === t.id ? this.updateAndCalculate(this.bulletBoomAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD) : 17 === t.id ? this.isCloseComboAtk = !0 : 19 === t.id ? this.isCloseParallelAtk = !0 : 21 === t.id ? (this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.DEC), this.isDoubleBullet = !0, this.bulletComboCount += 1) : 22 === t.id && (this.bulletPenetrateLayer += 1);
  };

  e.prototype.toString = function () {
    return t.prototype.toString.call(this) + "\n        是否开启爆炸:" + this.isBulletBoom + "\n        子弹爆炸攻击力:" + this.bulletBoomAtk + "\n        子弹爆炸范围:" + this.bulletBoomRange + "\n        弹夹子弹数量:" + this.bulletCount + "\n        子弹连发数量:" + this.bulletComboCount + "\n        子弹并发数量:" + this.bulletParallelCount + "\n        子弹穿透层数:" + this.bulletPenetrateLayer + "\n        子弹速度:" + this.bulletSpeed + "\n        子弹分裂数量:" + this.isOpenbulletSplit + "\n        分裂子弹伤害:" + this.splitAtk + "\n        是否开启火焰子弹:" + this.isFirebullet + "\n        火焰子弹燃烧时长:" + this.firebulletTime + "\n        火焰子弹伤害:" + this.firebulletAtk + "\n        子弹冰冻概率:" + this.bulletFreezeProbability + "\n        子弹冰冻时间:" + this.bulletFreezeTime + "\n        子弹对冰冻敌人加成:" + this.bulletSuffFreezeAdd + "\n        是否关闭连发射击降低伤害:" + this.isCloseComboAtk + "\n        是否关闭并发射击降低伤害:" + this.isCloseParallelAtk + "\n        子弹是否翻倍:" + this.isDoubleBullet + "\n        ";
  };

  return e;
}(require("./BaseSkill").BaseSkill);

exports.BulletSkill = a;

cc._RF.pop();