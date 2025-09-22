"use strict";
cc._RF.push(module, '29bd9DPaExMN7/orFUyQDTg', 'GameGemInfo');
// game_script/scripts/GameGemInfo.js

"use strict";

exports.GameGemInfo = exports.GemType = void 0;
var o;
var n;

var $util = require("./Util");

var $configContext = require("./ConfigContext");

(n = o = exports.GemType || (exports.GemType = {}))[n.Attack = 0] = "Attack";
n[n.CriticalHit = 1] = "CriticalHit";
n[n.CriticalHurt = 2] = "CriticalHurt";
n[n.GunHurt = 3] = "GunHurt";
n[n.FreezeHurt = 4] = "FreezeHurt";
n[n.ThermobaricHurt = 5] = "ThermobaricHurt";
n[n.ThunderHurt = 6] = "ThunderHurt";
n[n.FireHurt = 7] = "FireHurt";
n[n.ThunderSystemHurt = 8] = "ThunderSystemHurt";
n[n.TnergySystemHurt = 9] = "TnergySystemHurt";
n[n.FloorSystemHurt = 10] = "FloorSystemHurt";
n[n.PluseSystemHurt = 11] = "PluseSystemHurt";
n[n.WindSystemHurt = 12] = "WindSystemHurt";
n[n.Enemy70Hurt = 13] = "Enemy70Hurt";
n[n.EnemyDebuffTime = 14] = "EnemyDebuffTime";
n[n.cdBuff = 15] = "cdBuff";
n[n.Befor5Hurt = 16] = "Befor5Hurt";
n[n.Test1 = 17] = "Test1";
n[n.DebuffEnemyHurt = 18] = "DebuffEnemyHurt";
n[n.AtkFloat = 19] = "AtkFloat";
n[n.AddMaxHurt = 20] = "AddMaxHurt";
n[n.CriticalADDHurt = 21] = "CriticalADDHurt";
n[n.KillEnemy = 22] = "KillEnemy";
n[n.TransferCreatePoint = 23] = "TransferCreatePoint";
n[n.IgnoreRehurt = 24] = "IgnoreRehurt";
n[n.SkillAddHurt = 25] = "SkillAddHurt";
n[n.AddSkill = 26] = "AddSkill";
n[n.MaxBloodCritical = 27] = "MaxBloodCritical";
n[n.StartChooseSKill = 28] = "StartChooseSKill";
n[n.Choose4Skill = 29] = "Choose4Skill";
n[n.WallAdd = 30] = "WallAdd";
n[n.WallDefAndEnemyAddHurt = 31] = "WallDefAndEnemyAddHurt";
n[n.DistanceHurtAdd = 32] = "DistanceHurtAdd";
n[n.WallBloodAtk1 = 33] = "WallBloodAtk1";
n[n.WallBloodAtk2 = 34] = "WallBloodAtk2";
n[n.WallBloodDef = 35] = "WallBloodDef";
n[n.WallAddAtk = 36] = "WallAddAtk";
n[n.KillEnemyAddWallBlood1 = 37] = "KillEnemyAddWallBlood1";
n[n.SecWallBlood = 38] = "SecWallBlood";
n[n.KillEnemyAddWallBlood2 = 39] = "KillEnemyAddWallBlood2";
n[n.BoomHurt = 40] = "BoomHurt";
n[n.IceHurt = 41] = "IceHurt";

var a = function () {
  function t() {
    this.gemIds = [];
    this.skillValue = [];
  }

  t.prototype.clear = function () {
    this.gemIds.length = 0;
    this.skillValue.length = 0;
  };

  t.prototype.chooseGem = function (t) {
    this.gemIds.push(t);
    var e = $configContext["default"].instance.gemConfigs.find(function (e) {
      return e.id === t;
    });
    this.setGemProp(e.SkillPool, e.value);
  };

  t.prototype.setGemProp = function (t, e) {
    this.skillValue[t] ? this.skillValue[t][this.skillValue[t].length - 1] = $util["default"].amend(this.skillValue[t][this.skillValue[t].length - 1], e[this.skillValue[t].length - 1], "+") : this.skillValue[t] = $util["default"].deepCopy(e);
  };

  t.prototype.removeGem = function (t) {
    var e = this.gemIds.indexOf(t);

    if (e > -1) {
      this.gemIds.splice(e, 1);
    }

    var i = $configContext["default"].instance.gemConfigs.find(function (e) {
      return e.id === t;
    });
    this.skillValue[i.SkillPool] = null;
  };

  t.prototype.hasGem = function (t) {
    return !!this.skillValue[t];
  };

  t.prototype.get1 = function (t) {
    return this.skillValue[t] ? this.skillValue[t][0] : null;
  };

  t.prototype.get2 = function (t) {
    return this.skillValue[t] ? this.skillValue[t] : null;
  };

  t.prototype.hasGemId = function (t) {
    return this.gemIds.includes(t);
  };

  t.prototype.getGemDesc = function (t) {
    var e = $configContext["default"].instance.gemSkillConfigs.find(function (e) {
      return e.id === t.SkillPool;
    }).skill_text;

    for (var i = 0; i < t.show_text.length; i++) {
      var o = t.show_text[i];
      e = e.replace("$", o);
    }

    return e;
  };

  t.prototype.getGemDesc2 = function (t, e) {
    var i = $configContext["default"].instance.gemSkillConfigs.find(function (e) {
      return e.id === t;
    }).skill_text;
    var o = this.skillValue[t];

    for (var n = 0; n < o.length; n++) {
      var s = o[n].toString();

      if (1 == e[n]) {
        s = Math.round(100 * o[n]).toString() + "%";
      }

      i = i.replace("$", s);
    }

    return i;
  };

  t.prototype.caculateCD = function (t) {
    if (this.hasGem(o.cdBuff)) {
      t *= 1 + this.get1(o.cdBuff);
    }

    return t;
  };

  t.ins = new t();
  t.gemColor = [new cc.Color().fromHEX("#d4ccbe"), new cc.Color().fromHEX("#74c93a"), new cc.Color().fromHEX("#54b7f0"), new cc.Color().fromHEX("#c778ff"), new cc.Color().fromHEX("#ff8b42"), new cc.Color().fromHEX("#ff5e6e"), new cc.Color().fromHEX("#fcdd4es")];
  return t;
}();

exports.GameGemInfo = a;

cc._RF.pop();