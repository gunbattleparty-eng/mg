var o;
exports.DartSkill = void 0;
var $skillContext = require("./SkillContext");
var $gameSkillInfo = require("./GameSkillInfo");
var a = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.skillReleaseCount = 1;
        e.speed = [0, 0, 0, 1];
        e.time = [0, 0, 0, 1];
        e.interval = 0;
        e.slowAdd = 0;
        e.size = 1;
        e.stayTime = 0;
        e.stunTime = 0;
        e.burnTime = 0;
        e.burnAtk = 0;
        e.delayRecover = 0.1;
        e.releaseCount = 1;
        e.releaseSize = 1;
        e.releaseAtk = [0, 0, 0, 1];
        e.releaseInterval = 0;
        e.releaseTime = 0;
        e.isDoubleSize = !1;
        e.allAtkTime = 0;
        e.allAtkAdd = 0;
        e.bounceSpeed = 0;
        e.releaseDistance = 0;
        e.enemySlowTime = 0;
        e.enemySlowAdd = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.chooseSkill = function (t) {
        247 === t.id
            ? ((this.speed[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[0]),
              (this.time[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[1]),
              (this.interval = t.add_sx[2]),
              (this.skillCD[$gameSkillInfo.Skill4Param.BASIC] = $skillContext.default.Ins.getSkillCD(t)),
              (this.skillAtkRange[$gameSkillInfo.Skill4Param.BASIC] = t.add_sx[4]),
              (this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] = $skillContext.default.Ins.getBasicAtk(t)),
              (this.slowAdd = t.add_sx[6]),
              (this.size = t.add_sx[7]),
              (this.releaseSize = this.size),
              this.caculateFinal(this.speed),
              this.caculateFinal(this.time, !1),
              this.caculateFinal(this.skillCD, !1),
              this.caculateFinal(this.skillAtkRange),
              this.caculateFinal(this.skillAtk))
            : 248 === t.id
            ? this.updateAndCalculate(this.skillAtk, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD)
            : 249 === t.id
            ? this.updateAndCalculate(this.time, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD)
            : 250 === t.id
            ? (this.updateAndCalculate(this.speed, t.add_sx[0], $gameSkillInfo.Skill4Param.ADD),
              this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.ADD))
            : 251 === t.id
            ? (this.size += t.add_sx[0])
            : 252 === t.id
            ? ((this.releaseCount = t.add_sx[0]),
              (this.releaseSize = t.add_sx[1]),
              this.isDoubleSize && (this.releaseSize *= 2),
              (this.releaseTime = t.add_sx[2]),
              (this.releaseAtk[$gameSkillInfo.Skill4Param.BASIC] = this.getBasicAtk(t.add_sx[3])),
              (this.releaseInterval = t.add_sx[4]),
              (this.releaseDistance = t.add_sx[5]),
              this.caculateFinal(this.releaseAtk))
            : 253 === t.id
            ? (this.stayTime += t.add_sx[0])
            : 254 === t.id
            ? (this.stunTime += t.add_sx[0])
            : 255 === t.id
            ? ((this.burnTime += t.add_sx[0]), (this.burnAtk = this.getBasicAtk(t.add_sx[1])))
            : 257 === t.id
            ? ((this.enemySlowTime = t.add_sx[0]), (this.enemySlowAdd = t.add_sx[1]))
            : 258 === t.id
            ? (this.isDoubleSize = !0)
            : 259 === t.id
            ? ((this.allAtkTime = t.add_sx[0]), (this.allAtkAdd = t.add_sx[1]))
            : 261 === t.id
            ? (this.bounceSpeed = t.add_sx[0])
            : 262 === t.id &&
              ((this.skillReleaseCount += t.add_sx[0]),
              this.updateAndCalculate(this.skillAtk, t.add_sx[1], $gameSkillInfo.Skill4Param.DEC));
    };
    e.prototype.getSlowSpeed = function () {
        return Math.ceil(this.speed[$gameSkillInfo.Skill4Param.FINAL] * (1 + this.slowAdd));
    };
    e.prototype.getNormalSpeed = function (t) {
        if (void 0 === t) {
            t = 0;
        }
        return Math.ceil(this.speed[$gameSkillInfo.Skill4Param.FINAL] * (1 + this.bounceSpeed * t));
    };
    e.prototype.toString = function () {
        return (
            t.prototype.toString.call(this) +
            "\n        技能释放次数: " +
            this.skillReleaseCount +
            "\n        飞镖速度: " +
            this.speed +
            "\n        飞镖持续时间: " +
            this.time +
            "\n        飞镖伤害间隔: " +
            this.interval +
            "\n        飞镖减速系数: " +
            this.slowAdd +
            "\n        飞镖大小: " +
            this.size +
            "\n        结束后停留时长: " +
            this.stayTime +
            "\n        眩晕时间: " +
            this.stunTime +
            "\n        点燃时长: " +
            this.burnTime +
            "\n        点燃伤害: " +
            this.burnAtk +
            "\n        延迟恢复时间: " +
            this.delayRecover +
            "\n        释放利刃数量: " +
            this.releaseCount +
            "\n        利刃大小: " +
            this.releaseSize +
            "\n        利刃伤害: " +
            this.releaseAtk +
            "\n        利刃伤害间隔: " +
            this.releaseInterval +
            "\n        利刃持续时间: " +
            this.releaseTime +
            "\n        选择是是否体积翻倍: " +
            this.isDoubleSize +
            "\n        使敌人内伤时间: " +
            this.allAtkTime +
            "\n        使敌人内伤加成: " +
            this.allAtkAdd +
            "\n        弹射加速: " +
            this.bounceSpeed +
            "\n        "
        );
    };
    return e;
})(require("./BaseSkill").BaseSkill);
exports.DartSkill = a;
